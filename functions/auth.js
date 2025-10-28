// Cloudflare Pages Function para autenticação GitHub OAuth com Decap CMS
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Configurações OAuth do GitHub
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  const redirectUri = `${url.origin}/functions/auth`;
  
  // Se é callback do GitHub
  if (url.searchParams.has('code')) {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    
    try {
      // Trocar código por token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          redirect_uri: redirectUri,
        }),
      });
      
      const tokenData = await tokenResponse.json();
      
      if (tokenData.access_token) {
        // Criar resposta HTML para comunicar com o CMS
        const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Autenticação</title>
</head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("receiveMessage %o", e);
        if (e.origin !== "${url.origin}") {
          console.log("Invalid origin: %s", e.origin);
          return;
        }
        
        // Enviar token para o CMS
        e.source.postMessage(
          'authorization:github:success:{"token":"${tokenData.access_token}","provider":"github"}',
          e.origin
        );
      }
      
      window.addEventListener("message", receiveMessage, false);
      
      // Notificar que está pronto
      console.log("Pronto para receber mensagens");
    })();
  </script>
</body>
</html>`;
        
        return new Response(html, {
          headers: { 'Content-Type': 'text/html' },
        });
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return new Response('Erro na autenticação', { status: 500 });
    }
  }
  
  // Redirecionar para GitHub OAuth
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo&state=${Date.now()}`;
  return Response.redirect(authUrl, 302);
}
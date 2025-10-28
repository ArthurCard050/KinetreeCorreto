// Cloudflare Pages Function para autenticação GitHub OAuth
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
        // Redirecionar para admin com token nos parâmetros
        const adminUrl = `${url.origin}/admin/#access_token=${tokenData.access_token}&token_type=bearer&provider=github`;
        return Response.redirect(adminUrl, 302);
      } else {
        return new Response('Erro: Token não recebido', { status: 400 });
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return new Response(`Erro na autenticação: ${error.message}`, { status: 500 });
    }
  }
  
  // Redirecionar para GitHub OAuth
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;
  return Response.redirect(authUrl, 302);
}
# 🔧 Configurar Variáveis de Ambiente no Cloudflare Pages

## ❌ Problema Atual
A URL mostra `client_id=undefined`, o que significa que as variáveis de ambiente não estão sendo passadas para as Cloudflare Functions.

## ✅ Solução: Configurar Variáveis de Ambiente

### Passo 1: Acessar o Dashboard do Cloudflare Pages

1. Acesse: https://dash.cloudflare.com/
2. Vá em **Workers & Pages**
3. Clique no seu projeto: **kinetreecorreto**
4. Clique na aba **Settings**
5. Role até **Environment variables**

### Passo 2: Adicionar as Variáveis

Clique em **Add variable** e adicione:

#### Variável 1:
- **Variable name:** `GITHUB_CLIENT_ID`
- **Value:** (Cole o Client ID do seu OAuth App do GitHub)
- **Environment:** Selecione **Production** e **Preview**

#### Variável 2:
- **Variable name:** `GITHUB_CLIENT_SECRET`
- **Value:** (Cole o Client Secret do seu OAuth App do GitHub)
- **Environment:** Selecione **Production** e **Preview**

### Passo 3: Salvar e Fazer Redeploy

Depois de adicionar as variáveis:

1. Clique em **Save**
2. Vá na aba **Deployments**
3. Clique nos **três pontinhos** do último deployment
4. Clique em **Retry deployment**

**OU** faça um novo commit e push:
```bash
git commit --allow-empty -m "Trigger redeploy após configurar env vars"
git push origin main
```

---

## 📝 Como Obter o Client ID e Secret do GitHub

Se você ainda não tem ou não lembra:

### 1. Acesse o GitHub OAuth Apps
https://github.com/settings/developers

### 2. Clique no seu OAuth App (ou crie um novo)

### 3. Configurações do OAuth App:

- **Application name:** Kinetree CMS (ou qualquer nome)
- **Homepage URL:** `https://kinetreecorreto.pages.dev`
- **Authorization callback URL:** `https://kinetreecorreto.pages.dev`

### 4. Copie as credenciais:

- **Client ID:** Está visível na página
- **Client Secret:** Clique em "Generate a new client secret" se necessário

---

## 🔍 Como Verificar se Funcionou

Após o redeploy:

1. Acesse: `https://kinetreecorreto.pages.dev/admin/`
2. Clique em "Login with GitHub"
3. A URL do GitHub deve mostrar:
   ```
   github.com/login/oauth/authorize?client_id=SEU_CLIENT_ID_REAL&redirect_uri=...
   ```
   (Não deve mais aparecer `undefined`)

4. Autorize o aplicativo
5. Você será redirecionado de volta para o CMS autenticado! 🎉

---

## ⚠️ Importante

- As variáveis de ambiente precisam estar em **Production** E **Preview**
- Após adicionar as variáveis, é necessário fazer um **redeploy**
- As variáveis são case-sensitive: use exatamente `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`

---

## 🐛 Troubleshooting

### Ainda aparece "undefined"?
- Verifique se as variáveis estão em **Production** (não apenas Preview)
- Certifique-se de ter feito o redeploy após adicionar as variáveis
- Verifique se não há espaços extras no nome das variáveis

### Erro 404 no GitHub?
- Verifique se o **Authorization callback URL** no GitHub OAuth App está correto
- Deve ser: `https://kinetreecorreto.pages.dev`

### Erro de autenticação?
- Verifique se o **Client Secret** está correto
- Gere um novo Client Secret se necessário

---

**Próximo passo:** Configure as variáveis de ambiente no Cloudflare Pages e faça o redeploy!

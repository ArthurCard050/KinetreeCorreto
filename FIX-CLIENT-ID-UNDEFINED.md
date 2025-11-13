# 🚨 FIX: client_id=undefined

## O Problema
Quando você clica em "Login with GitHub", a URL mostra:
```
github.com/login/oauth/authorize?client_id=undefined&redirect_uri=...
```

Isso significa que as **variáveis de ambiente não estão configuradas** no Cloudflare Pages.

---

## ✅ Solução Rápida (5 minutos)

### 1️⃣ Acesse o Cloudflare Dashboard
https://dash.cloudflare.com/ → **Workers & Pages** → **kinetreecorreto** → **Settings**

### 2️⃣ Role até "Environment variables"

### 3️⃣ Adicione estas 2 variáveis:

```
Nome: GITHUB_CLIENT_ID
Valor: [Cole seu Client ID do GitHub]
Environment: ✅ Production ✅ Preview
```

```
Nome: GITHUB_CLIENT_SECRET
Valor: [Cole seu Client Secret do GitHub]
Environment: ✅ Production ✅ Preview
```

### 4️⃣ Salve e faça Redeploy

Opção A - Via Dashboard:
- Vá em **Deployments**
- Clique nos **...** do último deploy
- Clique em **Retry deployment**

Opção B - Via Git:
```bash
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

---

## 📋 Onde Pegar o Client ID e Secret?

### Acesse: https://github.com/settings/developers

1. Clique em **OAuth Apps**
2. Se já tem um app, clique nele
3. Se não tem, clique em **New OAuth App**

### Configurações do OAuth App:
```
Application name: Kinetree CMS
Homepage URL: https://kinetreecorreto.pages.dev
Authorization callback URL: https://kinetreecorreto.pages.dev
```

### Copie:
- **Client ID** (visível na página)
- **Client Secret** (clique em "Generate a new client secret")

---

## 🎯 Teste Final

Após o redeploy:

1. ✅ Acesse: https://kinetreecorreto.pages.dev/admin/
2. ✅ Clique em "Login with GitHub"
3. ✅ A URL deve mostrar seu Client ID real (não "undefined")
4. ✅ Autorize o aplicativo
5. ✅ Você será redirecionado para o CMS! 🎉

---

## 📸 Referência Visual

**Antes (Erro):**
```
client_id=undefined ❌
```

**Depois (Correto):**
```
client_id=Iv1.a1b2c3d4e5f6g7h8 ✅
```

---

**Status:** Aguardando configuração das variáveis de ambiente no Cloudflare Pages

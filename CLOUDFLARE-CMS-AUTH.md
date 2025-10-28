# 🔐 Configuração de Autenticação - Cloudflare Pages + Decap CMS

## 🎯 Opção Recomendada: Netlify Identity (Gratuito)

### **Por que usar Netlify Identity mesmo no Cloudflare?**
- ✅ **Gratuito** até 1.000 usuários
- ✅ **Fácil configuração** 
- ✅ **Funciona perfeitamente** com Cloudflare Pages
- ✅ **Sem código adicional** necessário

### **Passo a passo:**

#### 1. **Criar conta no Netlify (se não tiver)**
- Acesse [netlify.com](https://netlify.com)
- Faça login com GitHub

#### 2. **Criar site "dummy" no Netlify**
- New site from Git
- Conecte seu repositório
- **NÃO precisa fazer deploy** - só queremos o Identity

#### 3. **Ativar Netlify Identity**
- No dashboard do Netlify: `Site Settings > Identity`
- Clique em **"Enable Identity"**
- Em **Registration preferences**: escolha **"Invite only"**

#### 4. **Configurar Git Gateway**
- Ainda em Identity, vá em **"Services"**
- Clique em **"Enable Git Gateway"**
- Autorize o acesso ao GitHub

#### 5. **Convidar usuários**
- Em **Identity > Invite users**
- Adicione seu email
- Você receberá um convite por email

#### 6. **Atualizar configuração do CMS**
- No arquivo `public/admin/config.yml`
- Substitua a URL do site:

```yaml
# Adicione esta linha no início do config.yml
site_url: https://seu-site-cloudflare.pages.dev
```

#### 7. **Testar**
- Faça deploy no Cloudflare
- Acesse `seu-site.com/admin`
- Faça login com as credenciais do Netlify Identity

---

## 🚀 Alternativa: GitHub OAuth Direto

Se preferir não usar Netlify Identity:

#### 1. **Criar GitHub OAuth App**
- GitHub > Settings > Developer settings > OAuth Apps
- New OAuth App:
  - **Application name**: Kinetree CMS
  - **Homepage URL**: https://seu-site.pages.dev
  - **Authorization callback URL**: https://seu-site.pages.dev/admin/

#### 2. **Configurar variáveis no Cloudflare**
- Cloudflare Pages > Settings > Environment variables
- Adicionar:
  - `GITHUB_CLIENT_ID`: (do OAuth App)
  - `GITHUB_CLIENT_SECRET`: (do OAuth App)

#### 3. **Atualizar config.yml**
```yaml
backend:
  name: github
  repo: seu-usuario/seu-repositorio
  branch: main
```

---

## 🎯 **Recomendação Final:**

**Use a Opção 1 (Netlify Identity)** - é mais simples e confiável!

### **Próximos passos:**
1. ✅ Configure Netlify Identity (5 minutos)
2. ✅ Convide usuários
3. ✅ Faça deploy no Cloudflare
4. ✅ Teste o acesso em `/admin`

**🎉 Em 10 minutos você terá um CMS profissional funcionando!**
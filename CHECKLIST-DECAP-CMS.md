# ✅ Checklist - Configuração Decap CMS

## Antes do Deploy

- [ ] **Atualizar `public/admin/config.yml`**
  - Substituir `SEU_USUARIO/SEU_REPOSITORIO` pelo seu repositório real
  - Exemplo: `kinetree/kinetree-website`
  - Verificar se o branch está correto (`main` ou `master`)

- [ ] **Verificar Variáveis de Ambiente no Cloudflare Pages**
  - `GITHUB_CLIENT_ID` está configurado?
  - `GITHUB_CLIENT_SECRET` está configurado?

- [ ] **Verificar OAuth App no GitHub**
  - Homepage URL: `https://kinetreecorreto.pages.dev`
  - Callback URL: `https://kinetreecorreto.pages.dev`

## Após o Deploy

- [ ] **Testar Autenticação**
  - Acessar `https://kinetreecorreto.pages.dev/admin/`
  - Clicar em "Login with GitHub"
  - Autorizar o aplicativo
  - Verificar se o CMS carrega corretamente

- [ ] **Testar Edição de Conteúdo**
  - Editar um projeto
  - Salvar as alterações
  - Verificar se o commit foi criado no GitHub

## Arquivos Importantes

```
seu-projeto/
├── functions/
│   └── api/
│       ├── auth.js       ✅ Criado
│       └── callback.js   ✅ Criado
├── public/
│   └── admin/
│       ├── config.yml    ⚠️ PRECISA ATUALIZAR
│       └── index.html    ✅ OK
└── .env                  ✅ Variáveis locais (não fazer commit!)
```

## Comandos Úteis

```bash
# Build do projeto
npm run build

# Deploy (via Git push)
git add .
git commit -m "Configurar Decap CMS com GitHub OAuth"
git push origin main
```

## Links Rápidos

- [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
- [GitHub OAuth Apps](https://github.com/settings/developers)
- [Seu CMS](https://kinetreecorreto.pages.dev/admin/)

---

**Próximo Passo:** Editar `public/admin/config.yml` e substituir o nome do repositório!

# Notas de Migração - CMS

## ⚠️ Importante: Remover Custom CMS (React Admin)

O CMS customizado em `src/cms` **não funcionará** no Cloudflare Pages porque:

1. **Requer servidor Node.js** - Cloudflare Pages é estático
2. **React Admin precisa de backend** - Não há servidor para processar requisições
3. **Incompatível com JAMstack** - Não pode ser buildado como site estático

## 🗑️ Arquivos para Remover/Arquivar

### Opção 1: Deletar (Recomendado)

```bash
# Deletar pasta do CMS customizado
rm -rf src/cms

# Deletar API customizada
rm -rf src/api

# Deletar servidor Node.js
rm server.js

# Deletar documentação antiga
rm CMS-LOCAL-GUIDE.md
rm KINETREE-CMS-GUIDE.md
```

### Opção 2: Mover para Backup

```bash
# Criar pasta de backup
mkdir -p backup

# Mover arquivos
mv src/cms backup/cms-react-admin
mv src/api backup/api
mv server.js backup/
mv CMS-LOCAL-GUIDE.md backup/
mv KINETREE-CMS-GUIDE.md backup/
```

## ✅ Solução: Usar Decap CMS

O Decap CMS é a solução correta porque:

1. ✅ **Totalmente estático** - Funciona sem servidor
2. ✅ **Git-based** - Salva direto no GitHub
3. ✅ **Compatível com Cloudflare Pages** - Build estático
4. ✅ **Interface amigável** - Fácil de usar
5. ✅ **Autenticação via Netlify Identity** - Seguro e confiável

## 📋 Checklist de Migração

- [x] Criar `public/admin/index.html`
- [x] Atualizar `public/admin/config.yml` para usar `git-gateway`
- [x] Adicionar Netlify Identity script no `index.html`
- [x] Criar documentação de setup (`DECAP-CMS-CLOUDFLARE-SETUP.md`)
- [ ] Configurar Netlify Identity (seguir guia)
- [ ] Ativar Git Gateway no Netlify
- [ ] Convidar usuários administradores
- [ ] Testar login no CMS
- [ ] Remover/arquivar pasta `src/cms`
- [ ] Remover/arquivar pasta `src/api`
- [ ] Remover/arquivar `server.js`
- [ ] Atualizar `.gitignore`
- [ ] Fazer commit das mudanças
- [ ] Deploy no Cloudflare Pages

## 🚀 Próximos Passos

1. **Leia o guia completo**: `DECAP-CMS-CLOUDFLARE-SETUP.md`
2. **Configure o Netlify Identity** (5 minutos)
3. **Teste o CMS** em `https://kinetreecorreto.pages.dev/admin/`
4. **Remova os arquivos antigos** após confirmar que funciona

## 📞 Suporte

Se tiver dúvidas:
- Documentação Decap CMS: https://decapcms.org/docs/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/
- Cloudflare Pages: https://developers.cloudflare.com/pages/

## ⚡ Comandos Rápidos

```bash
# Instalar dependências (se necessário)
npm install

# Build para produção
npm run build

# Testar localmente
npm run dev

# Acessar CMS local
# http://localhost:5173/admin/
```

## 🎯 Resultado Final

Após a migração, você terá:

- ✅ CMS funcionando no Cloudflare Pages
- ✅ Autenticação segura via Netlify Identity
- ✅ Edições salvas automaticamente no GitHub
- ✅ Deploy automático no Cloudflare
- ✅ Sem necessidade de servidor
- ✅ 100% estático e performático

# 🎨 Kinetree CMS - Guia Rápido

## 🚀 Acesso Rápido

**URL do CMS**: https://kinetreecorreto.pages.dev/admin/

## ⚡ Setup Rápido (5 minutos)

### 1. Configurar Netlify Identity

1. Acesse https://app.netlify.com
2. Crie/conecte um site (pode ser qualquer um, só para autenticação)
3. Vá em **Identity** → **Enable Identity**
4. Vá em **Settings** → **Services** → **Git Gateway** → **Enable**
5. Convide usuários em **Identity** → **Invite users**

### 2. Atualizar Configuração

No arquivo `public/admin/config.yml`, certifique-se de que está assim:

```yaml
backend:
  name: git-gateway
  branch: main
```

### 3. Fazer Deploy

```bash
git add .
git commit -m "Configure Decap CMS for Cloudflare Pages"
git push
```

O Cloudflare Pages fará o deploy automaticamente.

### 4. Acessar o CMS

1. Vá para https://kinetreecorreto.pages.dev/admin/
2. Clique em "Login with Netlify Identity"
3. Use o email que você convidou
4. Pronto! 🎉

## 📝 O que você pode editar

### 📁 Projetos
- Adicionar/editar/remover projetos do portfólio
- Upload de imagens
- Categorias, descrições, resultados
- Ordem de exibição

### 💬 Depoimentos
- Gerenciar depoimentos de clientes
- Avatares, nomes, empresas
- Avaliações (1-5 estrelas)
- Ordem de exibição

### ⚙️ Configurações
- Informações da empresa
- Contatos
- Redes sociais

## 🔄 Como funciona

1. Você edita no CMS
2. CMS faz commit no GitHub
3. Cloudflare detecta mudança
4. Site é reconstruído automaticamente
5. Mudanças aparecem no site (2-3 minutos)

## ⚠️ Importante

### ❌ NÃO USE o Custom CMS (React Admin)

A pasta `src/cms` contém um CMS que **não funciona** no Cloudflare Pages.

**Remova ou arquive**:
```bash
# Opção 1: Deletar
rm -rf src/cms src/api server.js

# Opção 2: Arquivar
mkdir backup
mv src/cms src/api server.js backup/
```

### ✅ USE o Decap CMS

- Acesse via `/admin/`
- Totalmente estático
- Funciona perfeitamente no Cloudflare Pages

## 📚 Documentação Completa

- **Setup detalhado**: `DECAP-CMS-CLOUDFLARE-SETUP.md`
- **Notas de migração**: `MIGRATION-NOTES.md`
- **Documentação oficial**: https://decapcms.org/docs/

## 🆘 Problemas Comuns

### "Failed to load config.yml"
- Verifique se o arquivo está em `public/admin/config.yml`
- Certifique-se de que o YAML está válido

### "Error: Not Found"
- Verifique se o Netlify Identity está ativado
- Confirme que o Git Gateway está habilitado

### "Alterações não aparecem"
- Aguarde 2-3 minutos para o Cloudflare fazer rebuild
- Verifique se o commit foi feito no GitHub
- Limpe o cache do navegador

### "Login não funciona"
- Verifique se você foi convidado no Netlify Identity
- Confirme o email de convite
- Tente fazer logout e login novamente

## 🎯 Checklist Final

- [ ] Netlify Identity configurado
- [ ] Git Gateway ativado
- [ ] Usuários convidados
- [ ] CMS acessível em `/admin/`
- [ ] Login funcionando
- [ ] Teste de edição realizado
- [ ] Commit apareceu no GitHub
- [ ] Site atualizou automaticamente
- [ ] Pasta `src/cms` removida/arquivada

## 💡 Dicas

1. **Sempre faça backup** antes de editar
2. **Teste em staging** se possível
3. **Use preview** antes de publicar
4. **Commits são automáticos** - cada save é um commit
5. **Imagens vão para** `public/uploads/`

## 🎨 Interface do CMS

O CMS tem 3 seções principais:

1. **📁 Projetos** - Gerenciar portfólio
2. **💬 Depoimentos** - Gerenciar feedback de clientes
3. **⚙️ Configurações** - Informações gerais do site

Cada seção tem:
- ✏️ Editor visual
- 📸 Upload de imagens
- 👁️ Preview em tempo real
- 💾 Save automático

## 🚀 Pronto!

Agora você tem um CMS totalmente funcional, estático e compatível com Cloudflare Pages!

**Acesse**: https://kinetreecorreto.pages.dev/admin/

---

**Dúvidas?** Consulte `DECAP-CMS-CLOUDFLARE-SETUP.md` para instruções detalhadas.

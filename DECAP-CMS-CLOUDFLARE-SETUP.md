# Configuração do Decap CMS no Cloudflare Pages

## ✅ Passos para Configurar

### 1. Configurar o Netlify Identity (Recomendado)

O Decap CMS funciona melhor com o Netlify Identity, mesmo quando hospedado no Cloudflare Pages.

#### Opção A: Usar Netlify Identity (Mais Fácil)

1. **Crie uma conta no Netlify** (se ainda não tiver):
   - Acesse https://app.netlify.com/signup
   - Faça login com GitHub

2. **Crie um site no Netlify** (apenas para autenticação):
   - Vá em "Add new site" > "Import an existing project"
   - Conecte seu repositório GitHub
   - Configure o build (pode deixar vazio, não vamos fazer deploy aqui)
   - Clique em "Deploy site"

3. **Ative o Netlify Identity**:
   - No dashboard do site, vá em "Identity"
   - Clique em "Enable Identity"

4. **Configure o Git Gateway**:
   - Em "Identity" > "Settings and usage"
   - Role até "Services" > "Git Gateway"
   - Clique em "Enable Git Gateway"

5. **Convide usuários**:
   - Em "Identity" > "Invite users"
   - Adicione os emails dos administradores
   - Eles receberão um email para criar senha

6. **Atualize o config.yml**:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

7. **Adicione o script do Netlify Identity no seu site**:
   - Já está configurado em `public/admin/index.html`
   - Adicione também no `index.html` principal (antes do `</body>`):
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   <script>
     if (window.netlifyIdentity) {
       window.netlifyIdentity.on("init", user => {
         if (!user) {
           window.netlifyIdentity.on("login", () => {
             document.location.href = "/admin/";
           });
         }
       });
     }
   </script>
   ```

#### Opção B: Usar GitHub OAuth (Mais Complexo)

Se preferir não usar o Netlify, você pode configurar OAuth diretamente:

1. **Crie um GitHub OAuth App**:
   - Vá em GitHub Settings > Developer settings > OAuth Apps
   - Clique em "New OAuth App"
   - Configure:
     - Application name: Kinetree CMS
     - Homepage URL: https://kinetreecorreto.pages.dev
     - Authorization callback URL: https://kinetreecorreto.pages.dev/admin/

2. **Configure um servidor de autenticação**:
   - Você precisará de um servidor para trocar o código OAuth por token
   - Opções:
     - Cloudflare Workers (recomendado)
     - Netlify Functions
     - Servidor Node.js separado

3. **Atualize o config.yml**:
   ```yaml
   backend:
     name: github
     repo: seu-usuario/seu-repositorio
     branch: main
     base_url: https://seu-auth-server.workers.dev
   ```

### 2. Estrutura de Arquivos

```
public/
├── admin/
│   ├── index.html          # Interface do CMS
│   └── config.yml          # Configuração do CMS
├── cms-data/
│   ├── projects.json       # Dados dos projetos
│   ├── testimonials.json   # Dados dos depoimentos
│   └── settings.json       # Configurações gerais
└── uploads/                # Imagens enviadas pelo CMS
```

### 3. Acessar o CMS

Após configurar:

1. Acesse: `https://kinetreecorreto.pages.dev/admin/`
2. Faça login com suas credenciais
3. Edite o conteúdo
4. As alterações serão commitadas automaticamente no GitHub

### 4. Modo de Desenvolvimento Local

Para testar localmente:

```bash
npm run dev
```

Acesse: `http://localhost:5173/admin/`

O CMS usará o backend `test-repo` localmente (não precisa de autenticação).

### 5. Remover o Custom CMS (React Admin)

A pasta `src/cms` contém um CMS customizado que **não funcionará** no Cloudflare Pages porque:
- Requer servidor Node.js
- Usa React Admin que precisa de backend
- Não é compatível com sites estáticos

**Recomendação**: Deletar ou mover para backup:
```bash
# Criar backup
mkdir -p backup
mv src/cms backup/cms-react-admin
mv src/api backup/api
mv server.js backup/

# Ou simplesmente deletar
rm -rf src/cms
rm -rf src/api
rm server.js
```

### 6. Configurações Importantes

#### No Cloudflare Pages:

1. **Build settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

2. **Environment variables** (se usar GitHub OAuth):
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`

#### No repositório GitHub:

1. Certifique-se de que o branch está correto (main ou master)
2. Dê permissões de escrita ao OAuth App (se usar GitHub OAuth)

### 7. Troubleshooting

**Erro: "Failed to load config.yml"**
- Verifique se o arquivo está em `public/admin/config.yml`
- Certifique-se de que o YAML está válido

**Erro: "Error loading the CMS configuration"**
- Limpe o cache do navegador
- Verifique a configuração do backend

**Erro de autenticação**
- Verifique se o Netlify Identity está ativado
- Confirme que o Git Gateway está habilitado
- Verifique se o usuário foi convidado

**Alterações não aparecem no site**
- O CMS commita no GitHub
- O Cloudflare Pages precisa fazer rebuild
- Aguarde alguns minutos para o deploy

### 8. Recursos Úteis

- [Documentação Decap CMS](https://decapcms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

## 🎯 Próximos Passos

1. ✅ Configurar Netlify Identity
2. ✅ Ativar Git Gateway
3. ✅ Convidar usuários administradores
4. ✅ Testar login no CMS
5. ✅ Fazer uma edição de teste
6. ✅ Verificar se o commit foi feito no GitHub
7. ✅ Confirmar que o Cloudflare fez rebuild
8. 🗑️ Remover pasta `src/cms` (React Admin)

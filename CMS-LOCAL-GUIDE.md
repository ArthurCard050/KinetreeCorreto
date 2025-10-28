# 🎯 CMS Local - Guia Simples

## ✅ **Como usar o CMS localmente (SEM autenticação):**

### **1. Rodar o projeto localmente:**
```bash
npm run dev
# ou
yarn dev
```

### **2. Acessar o CMS:**
- Abra: `http://localhost:5173/admin`
- **Não precisa de login!** 
- Funciona direto no modo teste

### **3. Editar conteúdo:**
- ✏️ **Projetos**: Adicionar/editar/remover projetos
- 💬 **Depoimentos**: Gerenciar depoimentos de clientes
- ⚙️ **Configurações**: Informações da empresa

### **4. Salvar mudanças:**
- As mudanças ficam salvas nos arquivos JSON
- Faça commit e push normalmente:
```bash
git add .
git commit -m "Atualizar conteúdo via CMS"
git push
```

## 🎉 **Vantagens:**
- ✅ **Zero configuração** de autenticação
- ✅ **Funciona offline**
- ✅ **Mais rápido** que online
- ✅ **Sem dependências** externas
- ✅ **Controle total** sobre os dados

## 📝 **Workflow recomendado:**
1. **Desenvolver localmente** com `npm run dev`
2. **Editar conteúdo** em `localhost:5173/admin`
3. **Fazer commit** das mudanças
4. **Deploy automático** no Cloudflare

## 🚀 **Para produção:**
- O site funciona normalmente no Cloudflare
- Os dados ficam nos arquivos JSON
- Não precisa de CMS online
- Edições sempre locais

---

**🎯 Muito mais simples e confiável!**
# 🎯 CMS Local - Guia Simples

## ✅ **Como usar o CMS localmente (SEM autenticação):**

### **1. Rodar o projeto localmente:**
```bash
# Se você tem Node.js instalado:
npm run dev

# Ou se preferir usar o terminal do VS Code:
# Ctrl+Shift+` para abrir terminal
# Digite: npm run dev
```

### **2. Acessar o CMS:**
- Abra: `http://localhost:5173/admin`
- **Não precisa de login!** 
- Funciona direto no modo teste

### **3. Dados existentes:**
- ✅ **4 projetos** já carregados (Saxias, Anacli, Baixe Arquivos, Cicatribio)
- ✅ **12 depoimentos** já carregados
- ✅ **Configurações** da empresa

### **4. Se não aparecer o conteúdo:**
- Verifique se o servidor está rodando em `localhost:5173`
- Recarregue a página do CMS (F5)
- Verifique se os arquivos JSON estão na pasta `public/cms-data/`

### **5. Editar conteúdo:**
- ✏️ **Projetos**: Clique em "📁 Projetos" → "Lista de Projetos"
- 💬 **Depoimentos**: Clique em "💬 Depoimentos" → "Lista de Depoimentos"
- ⚙️ **Configurações**: Clique em "⚙️ Configurações" → "Informações Gerais"

### **6. Salvar mudanças:**
- As mudanças ficam salvas nos arquivos JSON automaticamente
- Faça commit e push:
```bash
git add .
git commit -m "Atualizar conteúdo via CMS"
git push
```

## �  **Troubleshooting:**

### **Se o CMS não carregar os dados:**
1. Verifique se está acessando `localhost:5173/admin` (não `localhost:3000`)
2. Abra o DevTools (F12) e veja se há erros no Console
3. Verifique se os arquivos existem em `public/cms-data/`

### **Se não conseguir rodar `npm run dev`:**
1. Instale Node.js: https://nodejs.org/
2. Abra terminal na pasta do projeto
3. Execute: `npm install` (primeira vez)
4. Execute: `npm run dev`

## 🎉 **Vantagens:**
- ✅ **Zero configuração** de autenticação
- ✅ **Dados já carregados**
- ✅ **Interface visual** para editar
- ✅ **Sem dependências** externas

---

**🎯 Teste agora: rode `npm run dev` e acesse `localhost:5173/admin`**
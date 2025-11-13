# 💬 Guia de Configuração - Comentários com Giscus

## O que é Giscus?

**Giscus** é um sistema de comentários gratuito que usa **GitHub Discussions**. É:

✅ **100% Gratuito**  
✅ **Sem anúncios**  
✅ **Open source**  
✅ **Fácil de configurar** (5 minutos)  
✅ **Sem banco de dados** (usa GitHub)  
✅ **Moderação integrada** (via GitHub)  
✅ **Suporta Markdown**  
✅ **Reações e replies**  

---

## 🚀 Como Configurar (Passo a Passo)

### 1. Habilitar GitHub Discussions

1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. Role até **Features**
4. Marque a opção **Discussions**
5. Clique em **Set up discussions**

### 2. Instalar o Giscus App

1. Acesse: https://github.com/apps/giscus
2. Clique em **Install**
3. Escolha seu repositório
4. Autorize o app

### 3. Configurar no Site do Giscus

1. Acesse: https://giscus.app/pt
2. Preencha:
   - **Repositório:** `seu-usuario/seu-repositorio`
   - **Mapeamento:** Pathname (recomendado)
   - **Categoria:** Blog Comments (ou crie uma nova)
   - **Tema:** Light
   - **Idioma:** Português

3. O site irá gerar um código como este:

```html
<script src="https://giscus.app/client.js"
        data-repo="ArthurCard050/KinetreeCorreto"
        data-repo-id="R_kgDONBa1Zw"
        data-category="Blog Comments"
        data-category-id="DIC_kwDONBa1Z84ClGHx"
        ...>
</script>
```

### 4. Atualizar o Componente Comments.tsx

Abra o arquivo `src/react-app/components/blog/Comments.tsx` e substitua:

```typescript
script.setAttribute('data-repo', 'SEU_USUARIO/SEU_REPOSITORIO');
script.setAttribute('data-repo-id', 'SEU_REPO_ID');
script.setAttribute('data-category-id', 'SEU_CATEGORY_ID');
```

Por:

```typescript
script.setAttribute('data-repo', 'ArthurCard050/KinetreeCorreto');
script.setAttribute('data-repo-id', 'R_kgDONBa1Zw');
script.setAttribute('data-category-id', 'DIC_kwDONBa1Z84ClGHx');
```

**⚠️ Use seus próprios valores do passo 3!**

### 5. Remover o Aviso Azul (Opcional)

Depois de configurar, você pode remover o aviso azul:

```typescript
// Remova ou comente estas linhas:
<div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  ...
</div>
```

---

## 🎨 Como Ficará

### Desktop:
- Comentários aparecem abaixo do CTA
- Usuários podem comentar com conta GitHub
- Suporta Markdown, emojis e reações

### Mobile:
- Totalmente responsivo
- Interface adaptada para toque

---

## 🔧 Personalização

### Mudar o Tema

No arquivo `Comments.tsx`, altere:

```typescript
script.setAttribute('data-theme', 'light'); // ou 'dark', 'preferred_color_scheme'
```

### Mudar Posição do Input

```typescript
script.setAttribute('data-input-position', 'top'); // ou 'bottom'
```

### Desabilitar Reações

```typescript
script.setAttribute('data-reactions-enabled', '0'); // 0 = desabilitado, 1 = habilitado
```

---

## 💡 Vantagens do Giscus

### Para Você:
- ✅ Sem custos
- ✅ Sem manutenção de banco de dados
- ✅ Moderação via GitHub
- ✅ Backup automático (GitHub)
- ✅ Notificações por email

### Para os Leitores:
- ✅ Login com GitHub (seguro)
- ✅ Markdown suportado
- ✅ Editar/deletar comentários
- ✅ Reações (👍 ❤️ 🎉)
- ✅ Threads de discussão

---

## 🆚 Alternativas

Se você não quiser usar Giscus, outras opções:

### 1. **Disqus** (Gratuito com anúncios)
- Mais popular
- Tem anúncios na versão gratuita
- Mais pesado

### 2. **Utterances** (Gratuito)
- Similar ao Giscus
- Usa GitHub Issues
- Mais simples, menos features

### 3. **Comentários Nativos** (Complexo)
- Requer backend próprio
- Banco de dados
- Mais trabalho

**Recomendação:** Giscus é a melhor opção para blogs técnicos!

---

## 🐛 Troubleshooting

### Comentários não aparecem?

1. **Verifique se o Giscus App está instalado**
   - https://github.com/apps/giscus

2. **Verifique se Discussions está habilitado**
   - Settings → Features → Discussions

3. **Verifique os IDs no código**
   - data-repo-id
   - data-category-id

4. **Limpe o cache do navegador**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

### Erro "Discussion category not found"?

- Crie uma categoria "Blog Comments" no GitHub Discussions
- Ou use uma categoria existente

### Comentários em inglês?

- Verifique: `data-lang: 'pt'`

---

## 📊 Moderação

### Como moderar comentários?

1. Acesse seu repositório no GitHub
2. Vá em **Discussions**
3. Encontre a discussão do post
4. Você pode:
   - Editar comentários
   - Deletar comentários
   - Bloquear usuários
   - Marcar como spam

### Notificações

Você receberá email toda vez que alguém comentar!

---

## 🎯 Exemplo de Uso

Quando um leitor comenta:

1. **GitHub cria uma Discussion** automaticamente
2. **Comentário aparece no blog** em tempo real
3. **Você recebe notificação** por email
4. **Pode responder** direto no blog ou no GitHub

---

## ✨ Pronto!

Agora seu blog tem:
- ✅ Sistema de comentários profissional
- ✅ Compartilhamento social (5 plataformas)
- ✅ Botão "Voltar" fixo
- ✅ Sidebar com share buttons
- ✅ Tudo gratuito e sem complexidade!

---

**Dúvidas?** Consulte a [documentação oficial do Giscus](https://giscus.app/pt)

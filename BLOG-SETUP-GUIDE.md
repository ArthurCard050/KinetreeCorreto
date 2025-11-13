# 📝 Guia do Blog - Kinetree

## ✅ O que foi criado

### 1. Configuração do Decap CMS
- ✅ Collection "Blog" adicionada ao `public/admin/config.yml`
- ✅ Suporte a posts em Markdown
- ✅ Campos: título, slug, data, autor, imagem, resumo, conteúdo, categoria, tags, etc.

### 2. Estrutura de Arquivos
```
src/react-app/
├── types/
│   └── blog.ts                    # Tipos TypeScript do blog
├── hooks/
│   └── useBlog.ts                 # Hooks para buscar posts
├── components/
│   └── blog/
│       ├── BlogCard.tsx           # Card de post
│       └── BlogHero.tsx           # Hero da página do blog
└── pages/
    ├── Blog.tsx                   # Página principal do blog
    └── BlogPost.tsx               # Página de post individual

public/cms-data/blog/              # Posts do blog (Markdown)
```

### 3. Rotas Criadas
- `/blog` - Página principal do blog
- `/blog/:slug` - Página de post individual

### 4. Funcionalidades

#### Página Principal (/blog)
- ✅ Hero com gradiente e animações
- ✅ Busca de artigos
- ✅ Filtro por categoria
- ✅ Posts em destaque
- ✅ Grid responsivo de posts
- ✅ Cards com hover effects

#### Página de Post (/blog/:slug)
- ✅ Breadcrumb para voltar
- ✅ Meta informações (autor, data, tempo de leitura)
- ✅ Imagem de capa
- ✅ Conteúdo em Markdown
- ✅ Tags
- ✅ Botão de compartilhar
- ✅ CTA no final do post

---

## 🎨 Categorias Disponíveis

1. Desenvolvimento Web
2. Design
3. Marketing Digital
4. Tecnologia
5. Dicas
6. Tutoriais
7. Casos de Sucesso

---

## 📝 Como Criar um Novo Post

### Opção 1: Via Decap CMS (Recomendado)

1. Acesse: `https://kinetreecorreto.pages.dev/admin/`
2. Faça login com GitHub
3. Clique em "Blog" no menu lateral
4. Clique em "New Blog"
5. Preencha os campos:
   - **Título**: Título do artigo
   - **Slug**: URL amigável (ex: `como-criar-um-site`)
   - **Data de Publicação**: Data e hora
   - **Autor**: Nome do autor
   - **Imagem de Capa**: Upload ou URL da imagem
   - **Resumo**: Breve descrição (150-200 caracteres)
   - **Conteúdo**: Escreva em Markdown
   - **Categoria**: Selecione uma categoria
   - **Tags**: Adicione palavras-chave
   - **Publicado**: Marque para publicar
   - **Destaque**: Marque para destacar na home
   - **Tempo de Leitura**: Estimativa em minutos
6. Clique em "Publish"
7. O CMS fará um commit no GitHub automaticamente!

### Opção 2: Manualmente

Crie um arquivo `.md` em `public/cms-data/blog/` com o formato:

```markdown
---
title: Título do Artigo
slug: titulo-do-artigo
date: 2025-11-13T10:00:00.000Z
author: Seu Nome
coverImage: https://exemplo.com/imagem.jpg
excerpt: Breve descrição do artigo
category: Desenvolvimento Web
tags:
  - react
  - typescript
  - web
published: true
featured: false
readTime: 5
---

# Conteúdo do Artigo

Escreva seu conteúdo aqui em **Markdown**.

## Subtítulo

- Lista
- De
- Itens

```code
Blocos de código
```

[Links](https://exemplo.com)

![Imagens](https://exemplo.com/imagem.jpg)
```

---

## 🎯 Markdown Suportado

O blog suporta Markdown completo:

- **Negrito**: `**texto**`
- *Itálico*: `*texto*`
- `Código inline`: `` `código` ``
- Blocos de código: ` ```linguagem ... ``` `
- Links: `[texto](url)`
- Imagens: `![alt](url)`
- Listas: `- item` ou `1. item`
- Títulos: `# H1`, `## H2`, `### H3`
- Citações: `> texto`

---

## 🖼️ Imagens

### Opção 1: Upload via CMS
O Decap CMS permite fazer upload de imagens diretamente.

### Opção 2: URLs Externas
Use serviços como:
- [Unsplash](https://unsplash.com/) - Fotos gratuitas
- [Pexels](https://www.pexels.com/) - Fotos gratuitas
- Cloudinary, ImgBB, etc.

### Opção 3: Pasta Local
Coloque imagens em `public/uploads/` e use `/uploads/imagem.jpg`

---

## 🚀 Como Testar Localmente

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run dev

# Acessar
http://localhost:5173/blog
```

---

## 📱 Responsividade

O blog é totalmente responsivo:
- ✅ Mobile (< 768px): 1 coluna
- ✅ Tablet (768px - 1024px): 2 colunas
- ✅ Desktop (> 1024px): 3 colunas

---

## 🎨 Personalização

### Cores
As cores principais são definidas no Tailwind:
- Roxo: `purple-600`
- Rosa: `pink-600`
- Gradiente: `from-purple-600 to-pink-600`

### Animações
Usando Framer Motion para animações suaves.

---

## 🔍 SEO

Cada post tem:
- ✅ Título único
- ✅ Meta descrição (excerpt)
- ✅ Imagem de capa (Open Graph)
- ✅ URL amigável (slug)
- ✅ Tags para categorização

---

## 📊 Próximas Melhorias

- [ ] Sistema de comentários
- [ ] Compartilhamento social
- [ ] Posts relacionados
- [ ] Newsletter
- [ ] RSS Feed
- [ ] Busca avançada
- [ ] Paginação

---

## 🐛 Troubleshooting

### Posts não aparecem?
1. Verifique se o arquivo está em `public/cms-data/blog/`
2. Verifique se o frontmatter está correto
3. Verifique se `published: true`
4. Limpe o cache do navegador

### Imagens não carregam?
1. Verifique se a URL está correta
2. Verifique se a imagem é acessível publicamente
3. Use URLs HTTPS

### Markdown não renderiza?
1. Verifique a sintaxe do Markdown
2. Verifique se há erros no frontmatter
3. Use um validador de Markdown online

---

**Pronto!** Seu blog está configurado e pronto para uso! 🎉

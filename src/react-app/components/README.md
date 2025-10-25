# Components Structure

Esta pasta contém todos os componentes React organizados por funcionalidade:

## 📁 Estrutura de Pastas

### `/shared` - Componentes Compartilhados
Componentes utilizados em múltiplas páginas:
- `Navigation` - Barra de navegação principal
- `Footer` - Rodapé do site
- `Logo` - Logo da Kinetree
- `FinalCTA` - Call-to-action final

### `/home` - Componentes da Página Home
- `Hero` - Seção hero principal
- `EssenceBento` - Grid de essência da marca
- `Services` - Seção de serviços
- `Portfolio` - Portfólio de projetos
- `Differentials` - Diferenciais da empresa
- `BentoResults` - Grid de resultados
- `ClientsMarquee` - Carrossel de clientes
- `Testimonials` - Depoimentos
- `FAQ` - Perguntas frequentes

### `/about` - Componentes da Página Sobre
- `AboutHero` - Hero da página sobre
- `AboutHistory` - História da empresa
- `AboutPhilosophy` - Filosofia da empresa
- `AboutPillars` - Pilares da empresa
- `AboutCulture` - Cultura organizacional
- `AboutCTA` - Call-to-action da página sobre

### `/projects` - Componentes da Página Projetos
- `ProjectsHero` - Hero da página de projetos
- `FeaturedProjects` - Projetos em destaque
- `ProjectTypes` - Tipos de projetos
- `ProjectsResults` - Resultados dos projetos
- `ProjectsModal` - Modal de detalhes do projeto

### `/services` - Componentes da Página Serviços
- `ServicesHero` - Hero da página de serviços
- `ServicesGrid` - Grid de serviços
- `ServicesDifferentials` - Diferenciais dos serviços

### `/contact` - Componentes da Página Contato
- `ContactHero` - Hero da página de contato
- `ContactForm` - Formulário de contato
- `ContactMethods` - Métodos de contato

## 🚀 Como Usar

### Importação Individual
```tsx
import { Navigation, Footer } from '@/react-app/components/shared';
import { Hero, Services } from '@/react-app/components/home';
```

### Importação Geral
```tsx
import { Navigation, Hero, AboutHero } from '@/react-app/components';
```

## 📝 Convenções

1. **Nomes de arquivos**: PascalCase (ex: `AboutHero.tsx`)
2. **Exports**: Default export para o componente principal
3. **Imports**: Organizados por categoria (shared, específicos da página)
4. **Estrutura**: Cada pasta tem seu próprio `index.ts` para facilitar imports

## ✅ Benefícios da Nova Organização

- **Modularidade**: Componentes organizados por contexto
- **Reutilização**: Fácil identificação de componentes compartilhados
- **Manutenibilidade**: Estrutura clara e previsível
- **Escalabilidade**: Fácil adição de novos componentes
- **Performance**: Imports otimizados e tree-shaking
# Componentes Organizados

Este diretório contém todos os componentes organizados por página e funcionalidade.

## Estrutura de Componentes

### Página de Contato
- `ContactHero.tsx` - Seção hero da página de contato
- `ContactForm.tsx` - Formulário de contato interativo
- `ContactMethods.tsx` - Métodos alternativos de contato
- `ContactFAQ.tsx` - FAQ da página de contato

### Página Sobre
- `AboutHero.tsx` - Seção hero da página sobre
- `AboutHistory.tsx` - História da empresa
- `AboutPhilosophy.tsx` - Filosofia de criação
- `AboutPillars.tsx` - Pilares da empresa
- `AboutCulture.tsx` - Cultura da empresa
- `AboutCTA.tsx` - Call-to-action da página sobre

### Página de Projetos
- `ProjectsHero.tsx` - Seção hero da página de projetos
- `ProjectsModal.tsx` - Modal para visualização de projetos
- `FeaturedProjects.tsx` - Projetos em destaque
- `ProjectTypes.tsx` - Tipos de projetos
- `ProjectsResults.tsx` - Resultados e métricas

### Componentes Compartilhados
- `Navigation.tsx` - Navegação principal
- `Footer.tsx` - Rodapé
- `FinalCTA.tsx` - Call-to-action final
- `EssenceBento.tsx` - Seção da essência da empresa
- `Testimonials.tsx` - Depoimentos
- `Logo.tsx` - Logo da empresa

## Benefícios da Organização

1. **Modularidade**: Cada componente tem uma responsabilidade específica
2. **Reutilização**: Componentes podem ser reutilizados em diferentes páginas
3. **Manutenibilidade**: Mais fácil de manter e atualizar
4. **Legibilidade**: Código mais limpo e organizado
5. **Escalabilidade**: Fácil adicionar novos componentes

## Como Usar

Cada página agora importa apenas os componentes necessários:

```tsx
// Exemplo: Contact.tsx
import ContactHero from '@/react-app/components/ContactHero';
import ContactForm from '@/react-app/components/ContactForm';
import ContactMethods from '@/react-app/components/ContactMethods';
import ContactFAQ from '@/react-app/components/ContactFAQ';
```

## Padrões Seguidos

- Nomenclatura clara e descritiva
- Componentes focados em uma única responsabilidade
- Props tipadas com TypeScript
- Animações consistentes com Framer Motion
- Design system unificado

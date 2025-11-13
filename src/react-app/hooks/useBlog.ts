import { useState, useEffect } from 'react';
import type { BlogPost, BlogPostMetadata } from '@/react-app/types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Posts mockados para demonstração
        const mockPosts: BlogPostMetadata[] = [
          {
            title: 'Como Criar um Site que Realmente Converte Visitantes em Clientes',
            slug: 'como-criar-um-site-que-converte',
            date: '2025-11-13T14:30:00.000Z',
            author: 'Equipe Kinetree',
            coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
            excerpt: 'Descubra as estratégias essenciais para transformar seu site em uma máquina de conversão. Aprenda técnicas comprovadas de design, UX e copywriting que aumentam suas vendas.',
            category: 'Marketing Digital',
            tags: ['conversão', 'ux-design', 'vendas', 'estratégia-digital'],
            published: true,
            featured: true,
            readTime: 8,
          },
          {
            title: 'Bem-vindo ao Blog da Kinetree',
            slug: 'bem-vindo-ao-blog-da-kinetree',
            date: '2025-11-13T10:00:00.000Z',
            author: 'Equipe Kinetree',
            coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=675&fit=crop',
            excerpt: 'Estamos muito felizes em lançar nosso blog! Aqui você encontrará artigos sobre desenvolvimento web, design, tecnologia e muito mais.',
            category: 'Dicas',
            tags: ['blog', 'kinetree', 'desenvolvimento-web'],
            published: true,
            featured: false,
            readTime: 3,
          },
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setError('Erro ao carregar posts do blog');
        setPosts([]);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Post mockado para demonstração
        if (slug === 'como-criar-um-site-que-converte') {
          const mockPost: BlogPost = {
            title: 'Como Criar um Site que Realmente Converte Visitantes em Clientes',
            slug: 'como-criar-um-site-que-converte',
            date: '2025-11-13T14:30:00.000Z',
            author: 'Equipe Kinetree',
            coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
            excerpt: 'Descubra as estratégias essenciais para transformar seu site em uma máquina de conversão. Aprenda técnicas comprovadas de design, UX e copywriting que aumentam suas vendas.',
            category: 'Marketing Digital',
            tags: ['conversão', 'ux-design', 'vendas', 'estratégia-digital'],
            published: true,
            featured: true,
            readTime: 8,
            body: `
              <h1>Como Criar um Site que Realmente Converte Visitantes em Clientes</h1>
              
              <p>Ter um site bonito não é mais suficiente. No mercado digital atual, <strong>seu site precisa vender</strong>. E não estamos falando apenas de e-commerces — qualquer negócio online precisa converter visitantes em leads, clientes ou usuários engajados.</p>
              
              <p>Neste artigo, vamos compartilhar as estratégias que usamos na Kinetree para criar sites que não apenas impressionam visualmente, mas que <strong>geram resultados reais</strong> para nossos clientes.</p>
              
              <h2>1. Entenda Seu Público Antes de Qualquer Coisa</h2>
              
              <p>Antes de pensar em cores, layouts ou funcionalidades, você precisa responder uma pergunta fundamental: <strong>quem é seu público?</strong></p>
              
              <h3>Perguntas essenciais:</h3>
              <ul>
                <li>Qual problema eles estão tentando resolver?</li>
                <li>Que linguagem eles usam?</li>
                <li>Quais são suas objeções para comprar?</li>
                <li>Em que dispositivo eles mais acessam a internet?</li>
              </ul>
              
              <p><strong>Dica prática:</strong> Crie personas detalhadas. Não apenas "homens de 25-35 anos", mas "João, 28 anos, gerente de marketing que precisa aumentar as vendas online da empresa mas tem orçamento limitado".</p>
              
              <h2>2. A Regra dos 3 Segundos</h2>
              
              <p>Você tem apenas <strong>3 segundos</strong> para capturar a atenção de um visitante. Se ele não entender imediatamente o que você oferece e por que deveria se importar, ele vai embora.</p>
              
              <h3>Como aplicar:</h3>
              
              <p><strong>✅ Faça:</strong></p>
              <ul>
                <li>Headline clara e direta</li>
                <li>Proposta de valor visível acima da dobra</li>
                <li>CTA (Call-to-Action) destacado</li>
                <li>Imagens que comunicam seu serviço</li>
              </ul>
              
              <p><strong>❌ Evite:</strong></p>
              <ul>
                <li>Textos genéricos como "Bem-vindo ao nosso site"</li>
                <li>Carrosséis automáticos (sim, eles prejudicam a conversão!)</li>
                <li>Excesso de informações na primeira tela</li>
                <li>Pop-ups imediatos</li>
              </ul>
              
              <h2>3. Design que Guia o Olhar</h2>
              
              <p>O design não é apenas estética — é <strong>arquitetura de informação</strong>. Cada elemento deve guiar o visitante naturalmente para a ação desejada.</p>
              
              <h3>Hierarquia Visual</h3>
              
              <ol>
                <li>Headline (maior, mais bold)</li>
                <li>Subheadline (complementa a headline)</li>
                <li>Benefícios principais (bullets ou ícones)</li>
                <li>Prova social (depoimentos, logos)</li>
                <li>CTA principal (botão destacado)</li>
              </ol>
              
              <h3>Espaço em Branco</h3>
              
              <p>Não tenha medo do espaço vazio. Ele:</p>
              <ul>
                <li>Melhora a legibilidade</li>
                <li>Destaca elementos importantes</li>
                <li>Reduz a carga cognitiva</li>
                <li>Transmite profissionalismo</li>
              </ul>
              
              <h2>4. Velocidade é Conversão</h2>
              
              <p><strong>Cada segundo de carregamento reduz sua taxa de conversão em 7%.</strong></p>
              
              <h3>Checklist de Performance:</h3>
              
              <ul>
                <li>Imagens otimizadas (WebP, lazy loading)</li>
                <li>Código minificado</li>
                <li>CDN configurado</li>
                <li>Cache do navegador ativado</li>
                <li>Fontes otimizadas</li>
                <li>Remover scripts desnecessários</li>
              </ul>
              
              <p><strong>Meta:</strong> Seu site deve carregar em menos de 3 segundos no mobile.</p>
              
              <h2>5. Mobile-First Não é Opcional</h2>
              
              <p>Mais de <strong>60% do tráfego web</strong> vem de dispositivos móveis. Se seu site não funciona perfeitamente no celular, você está perdendo mais da metade dos seus potenciais clientes.</p>
              
              <h3>Princípios Mobile-First:</h3>
              
              <ol>
                <li><strong>Toque, não clique:</strong> Botões grandes (mínimo 44x44px)</li>
                <li><strong>Menos é mais:</strong> Simplifique a navegação</li>
                <li><strong>Formulários curtos:</strong> Cada campo extra reduz conversões</li>
                <li><strong>Teste real:</strong> Use dispositivos reais, não apenas emuladores</li>
              </ol>
              
              <h2>6. Copywriting que Convence</h2>
              
              <p>As palavras no seu site são tão importantes quanto o design. Aqui está a fórmula que funciona:</p>
              
              <h3>Framework PAS (Problem-Agitate-Solve)</h3>
              
              <p><strong>Problema:</strong> Identifique a dor do cliente</p>
              <blockquote>"Seu site está recebendo visitas mas não está gerando vendas?"</blockquote>
              
              <p><strong>Agite:</strong> Intensifique a dor</p>
              <blockquote>"Enquanto isso, seus concorrentes estão convertendo visitantes em clientes todos os dias..."</blockquote>
              
              <p><strong>Solução:</strong> Apresente sua oferta</p>
              <blockquote>"Nossa metodologia de design focado em conversão já ajudou 50+ empresas a aumentar suas vendas em até 240%"</blockquote>
              
              <h3>Gatilhos Mentais Poderosos:</h3>
              
              <ul>
                <li><strong>Escassez:</strong> "Apenas 3 vagas disponíveis este mês"</li>
                <li><strong>Urgência:</strong> "Oferta válida até sexta-feira"</li>
                <li><strong>Prova social:</strong> "Mais de 500 clientes satisfeitos"</li>
                <li><strong>Autoridade:</strong> "Certificados por Google e Meta"</li>
                <li><strong>Garantia:</strong> "30 dias de garantia ou seu dinheiro de volta"</li>
              </ul>
              
              <h2>7. CTAs Irresistíveis</h2>
              
              <p>Seu Call-to-Action é o momento da verdade. Aqui está como otimizá-lo:</p>
              
              <h3>Anatomia de um CTA Perfeito:</h3>
              
              <p><strong>Texto orientado a ação:</strong></p>
              <ul>
                <li>❌ "Enviar"</li>
                <li>✅ "Quero Aumentar Minhas Vendas"</li>
              </ul>
              
              <p><strong>Cor contrastante:</strong></p>
              <ul>
                <li>Use cores que se destacam do resto da página</li>
                <li>Verde geralmente performa bem (associado a "avançar")</li>
              </ul>
              
              <h2>8. Prova Social é Ouro</h2>
              
              <p><strong>92% das pessoas</strong> confiam em recomendações de outros usuários mais do que em publicidade.</p>
              
              <h3>Tipos de Prova Social:</h3>
              
              <ol>
                <li><strong>Depoimentos em vídeo</strong> (mais poderosos)</li>
                <li><strong>Avaliações com fotos</strong></li>
                <li><strong>Logos de clientes conhecidos</strong></li>
                <li><strong>Números impressionantes</strong> ("10.000+ clientes atendidos")</li>
                <li><strong>Certificações e prêmios</strong></li>
                <li><strong>Estudos de caso detalhados</strong></li>
              </ol>
              
              <p><strong>Dica:</strong> Depoimentos específicos convertem mais que genéricos.</p>
              
              <h2>9. Remova Fricções</h2>
              
              <p>Cada obstáculo no caminho do usuário reduz suas conversões. Identifique e elimine:</p>
              
              <h3>Fricções Comuns:</h3>
              
              <ul>
                <li><strong>Formulários longos:</strong> Peça apenas o essencial</li>
                <li><strong>Cadastro obrigatório:</strong> Permita checkout como visitante</li>
                <li><strong>Falta de informações:</strong> Preços, prazos, políticas claras</li>
                <li><strong>Navegação confusa:</strong> Máximo 7 itens no menu</li>
                <li><strong>Falta de suporte:</strong> Chat, WhatsApp ou telefone visível</li>
              </ul>
              
              <h2>10. Teste, Meça, Otimize</h2>
              
              <p>Conversão não é um projeto, é um <strong>processo contínuo</strong>.</p>
              
              <h3>Métricas Essenciais:</h3>
              
              <ul>
                <li>Taxa de conversão geral</li>
                <li>Taxa de rejeição por página</li>
                <li>Tempo médio na página</li>
                <li>Funil de conversão (onde as pessoas desistem?)</li>
                <li>Mapas de calor (onde clicam?)</li>
              </ul>
              
              <h3>Ferramentas Recomendadas:</h3>
              
              <ul>
                <li>Google Analytics 4</li>
                <li>Hotjar (mapas de calor)</li>
                <li>Google Optimize (testes A/B)</li>
                <li>Microsoft Clarity (gravações de sessão)</li>
              </ul>
              
              <h2>Conclusão: Conversão é Ciência + Arte</h2>
              
              <p>Criar um site que converte não é sorte — é o resultado de:</p>
              
              <ul>
                <li>✅ <strong>Pesquisa profunda</strong> do seu público</li>
                <li>✅ <strong>Design estratégico</strong> focado em resultados</li>
                <li>✅ <strong>Copywriting persuasivo</strong> que conecta</li>
                <li>✅ <strong>Performance técnica</strong> impecável</li>
                <li>✅ <strong>Testes constantes</strong> e otimização</li>
              </ul>
              
              <p>Na Kinetree, aplicamos essas estratégias em cada projeto. Nossos clientes veem resultados reais: mais leads, mais vendas, mais crescimento.</p>
              
              <hr>
              
              <h2>Pronto para Transformar Seu Site em uma Máquina de Conversão?</h2>
              
              <p>Se você quer um site que não apenas impressiona, mas que <strong>gera resultados reais</strong> para o seu negócio, vamos conversar.</p>
              
              <p><strong>Gostou deste artigo?</strong> Compartilhe com alguém que precisa melhorar as conversões do site! 🚀</p>
            `,
          };
          
          setPost(mockPost);
          setLoading(false);
        } else if (slug === 'bem-vindo-ao-blog-da-kinetree') {
          const mockPost: BlogPost = {
            title: 'Bem-vindo ao Blog da Kinetree',
            slug: 'bem-vindo-ao-blog-da-kinetree',
            date: '2025-11-13T10:00:00.000Z',
            author: 'Equipe Kinetree',
            coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=675&fit=crop',
            excerpt: 'Estamos muito felizes em lançar nosso blog! Aqui você encontrará artigos sobre desenvolvimento web, design, tecnologia e muito mais.',
            category: 'Dicas',
            tags: ['blog', 'kinetree', 'desenvolvimento-web'],
            published: true,
            featured: false,
            readTime: 3,
            body: `
              <h1>Bem-vindo ao Blog da Kinetree! 🎉</h1>
              
              <p>Estamos muito felizes em lançar oficialmente o <strong>Blog da Kinetree</strong>! Este é um espaço onde compartilharemos nosso conhecimento, experiências e insights sobre o mundo do desenvolvimento web e tecnologia.</p>
              
              <h2>O que você vai encontrar aqui?</h2>
              
              <h3>📚 Artigos Técnicos</h3>
              <p>Tutoriais práticos, guias passo a passo e dicas sobre as tecnologias mais modernas do mercado.</p>
              
              <h3>🎨 Design e UX</h3>
              <p>Insights sobre design de interfaces, experiência do usuário e as melhores práticas para criar produtos digitais incríveis.</p>
              
              <h3>💡 Dicas e Truques</h3>
              <p>Pequenas dicas que podem fazer uma grande diferença no seu dia a dia como desenvolvedor ou designer.</p>
              
              <h3>🚀 Casos de Sucesso</h3>
              <p>Histórias reais de projetos que desenvolvemos e os desafios que superamos.</p>
              
              <h2>Nossa Missão</h2>
              
              <p>Nosso objetivo é <strong>compartilhar conhecimento</strong> e ajudar a comunidade de desenvolvedores e designers a crescer. Acreditamos que o conhecimento deve ser acessível a todos.</p>
              
              <h2>Fique por Dentro</h2>
              
              <p>Novos artigos serão publicados regularmente. Não perca nenhuma novidade!</p>
              
              <hr>
              
              <p><strong>Tem alguma sugestão de tema?</strong> Entre em contato conosco! Adoraríamos saber o que você gostaria de ler por aqui.</p>
              
              <p>Vamos juntos nessa jornada! 🚀</p>
            `,
          };
          
          setPost(mockPost);
          setLoading(false);
        } else {
          throw new Error('Post não encontrado');
        }
      } catch (err) {
        console.error('Erro ao carregar post:', err);
        setError('Erro ao carregar post');
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
}

import { useEffect } from "react";
import { Navigation, Footer } from "@/react-app/components/shared";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Termos de Uso da Kinetree</h1>
        <p className="text-white/60 mb-8">Última atualização: {currentDate}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-white/70 leading-relaxed">
            Bem-vindo ao site da Kinetree. Ao acessar ou usar nosso site (
            <a href="https://kinetree.site" className="text-green-400 hover:underline">
              kinetree.site
            </a>
            ), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, você não deve acessar o site ou utilizar nossos
            serviços.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Uso do Site</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              O site da Kinetree tem como objetivo apresentar nossos serviços de desenvolvimento web,
              design e soluções digitais, bem como fornecer conteúdo informativo e canais de contato.
            </p>
            <p className="text-white/70 leading-relaxed">
              Você concorda em usar nosso site apenas para fins legais e de uma maneira que não infrinja os
              direitos de, restrinja ou iniba o uso e aproveitamento do site por terceiros. Comportamentos
              proibidos incluem assediar ou causar angústia ou inconveniência a qualquer pessoa, transmitir
              conteúdo obsceno ou ofensivo ou interromper o fluxo normal de diálogo dentro do nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Propriedade Intelectual</h2>

            <h3 className="text-xl font-semibold mb-3 text-white/90">2.1. Conteúdo da Kinetree</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Todo o conteúdo presente neste site, incluindo, mas não se limitando a textos, gráficos,
              logotipos (especificamente a marca Kinetree), ícones, imagens, clipes de áudio, downloads
              digitais e compilações de dados, é de propriedade da Kinetree ou de seus fornecedores de
              conteúdo e é protegido pelas leis de direitos autorais e propriedade intelectual do Brasil e
              internacionais.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90">2.2. Projetos de Clientes</h3>
            <p className="text-white/70 leading-relaxed">
              A propriedade intelectual dos projetos desenvolvidos para clientes será regida pelo Contrato
              de Prestação de Serviços específico assinado entre a Kinetree e o Cliente. Salvo disposição em
              contrário em contrato, a Kinetree reserva-se o direito de exibir os trabalhos realizados em
              seu portfólio para fins de divulgação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Descrição dos Serviços</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              A Kinetree se esforça para ser o mais precisa possível na descrição de seus serviços (Sites
              Institucionais, Landing Pages, E-commerce, etc.). No entanto, não garantimos que as descrições
              de serviços ou outro conteúdo deste site sejam precisos, completos, confiáveis, atuais ou
              livres de erros.
            </p>
            <p className="text-white/70 leading-relaxed">
              A contratação efetiva de qualquer serviço dependerá de proposta comercial, aprovação de
              orçamento e formalização via contrato ou pagamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitação de Responsabilidade</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              O uso deste site é por sua conta e risco. O site é fornecido "como está" e "conforme
              disponível". A Kinetree não garante que o site funcionará ininterruptamente ou sem erros, ou
              que o servidor que o disponibiliza esteja livre de vírus ou outros componentes prejudiciais.
            </p>
            <p className="text-white/70 leading-relaxed">
              Em nenhuma circunstância a Kinetree será responsável por quaisquer danos diretos, indiretos,
              incidentais, especiais ou consequentes decorrentes do uso ou da incapacidade de usar o site ou
              os serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Links Externos</h2>
            <p className="text-white/70 leading-relaxed">
              Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados
              pela Kinetree. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo,
              políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Modificações dos Termos</h2>
            <p className="text-white/70 leading-relaxed">
              A Kinetree reserva-se o direito de revisar estes Termos de Uso a qualquer momento sem aviso
              prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses Termos de
              Uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Legislação Aplicável</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se
              submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele Estado ou localidade.
            </p>
            <p className="text-white/70 leading-relaxed">
              Para dirimir quaisquer controvérsias oriundas destes Termos, fica eleito o Foro da Comarca de
              Brasília - DF, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Contato</h2>
            <p className="text-white/70 leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail:{" "}
              <a href="mailto:contato@kinetree.site" className="text-green-400 hover:underline">
                contato@kinetree.site
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

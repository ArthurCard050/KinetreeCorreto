import { useEffect } from "react";
import { Navigation, Footer } from "@/react-app/components/shared";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Política de Privacidade da Kinetree
        </h1>
        <p className="text-white/60 mb-8">Última atualização: {currentDate}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-white/70 leading-relaxed">
            A Kinetree, acessível através do endereço{" "}
            <a href="https://kinetree.site" className="text-green-400 hover:underline">
              kinetree.site
            </a>
            , está comprometida em proteger a sua privacidade e seus dados pessoais. Esta Política de
            Privacidade explica como coletamos, usamos, compartilhamos e protegemos as informações dos
            usuários ("você") que acessam nosso site e utilizam nossos serviços.
          </p>
          <p className="text-white/70 leading-relaxed">
            Ao utilizar nosso site, você concorda com a coleta e uso de informações de acordo com esta
            política.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Quais dados coletamos</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Coletamos diferentes tipos de informações para diversos fins, visando fornecer e melhorar
              nosso serviço para você.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90">1.1. Dados Pessoais</h3>
            <p className="text-white/70 mb-3 leading-relaxed">
              Ao utilizar nosso site, especialmente ao preencher formulários de contato, briefing ou
              solicitação de orçamento, podemos solicitar que você nos forneça certas informações pessoais
              identificáveis, que podem incluir, mas não se limitam a:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Nome completo;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone / WhatsApp;</li>
              <li>Nome da empresa e cargo;</li>
              <li>Informações sobre o seu projeto.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">
              1.2. Dados de Uso e Navegação
            </h3>
            <p className="text-white/70 leading-relaxed">
              Também podemos coletar informações sobre como o serviço é acessado e usado ("Dados de Uso").
              Esses dados podem incluir informações como o endereço IP do seu computador, tipo de navegador,
              versão do navegador, as páginas do nosso site que você visita, a hora e a data da sua visita, o
              tempo gasto nessas páginas e outros dados de diagnóstico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Como usamos seus dados</h2>
            <p className="text-white/70 mb-3 leading-relaxed">
              A Kinetree utiliza os dados coletados para diversas finalidades:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>
                <strong className="text-white/90">Prestação de Serviços:</strong> Para processar seus
                pedidos, criar propostas e desenvolver os projetos contratados.
              </li>
              <li>
                <strong className="text-white/90">Atendimento:</strong> Para responder às suas dúvidas,
                solicitações de suporte e contatos comerciais.
              </li>
              <li>
                <strong className="text-white/90">Melhoria do Site:</strong> Para entender como os usuários
                utilizam nosso site e implementar melhorias de usabilidade e conteúdo.
              </li>
              <li>
                <strong className="text-white/90">Marketing (se autorizado):</strong> Para enviar
                newsletters, materiais promocionais e outras informações que possam ser do seu interesse.
                Você pode optar por não receber essas comunicações a qualquer momento.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Política de Cookies</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Cookies são arquivos com pequena quantidade de dados que são armazenados no seu dispositivo
              (computador ou dispositivo móvel). Utilizamos cookies e tecnologias de rastreamento semelhantes
              para rastrear a atividade em nosso site e manter certas informações.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90">
              3.1. Tipos de Cookies que utilizamos:
            </h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>
                <strong className="text-white/90">Cookies Essenciais:</strong> Necessários para o
                funcionamento do site. Eles permitem que você navegue e use recursos essenciais, como áreas
                seguras.
              </li>
              <li>
                <strong className="text-white/90">Cookies de Desempenho/Análise:</strong> Coletam
                informações sobre como você usa o site (ex: Google Analytics), permitindo-nos melhorar a
                forma como o site funciona. Essas informações são agregadas e anônimas.
              </li>
              <li>
                <strong className="text-white/90">Cookies de Funcionalidade:</strong> Permitem que o site se
                lembre das escolhas que você faz (como preenchimento de formulários) para proporcionar uma
                experiência mais personalizada.
              </li>
              <li>
                <strong className="text-white/90">Cookies de Publicidade:</strong> Podem ser usados para
                fornecer anúncios mais relevantes para você e seus interesses.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">
              3.2. Gerenciamento de Cookies
            </h3>
            <p className="text-white/70 leading-relaxed">
              Você pode instruir o seu navegador para recusar todos os cookies ou para indicar quando um
              cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não conseguir usar
              algumas partes do nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Compartilhamento de Dados</h2>
            <p className="text-white/70 mb-3 leading-relaxed">
              A Kinetree não vende seus dados pessoais. Podemos compartilhar suas informações apenas nas
              seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>
                <strong className="text-white/90">Prestadores de Serviço:</strong> Com empresas
                terceirizadas que nos ajudam a operar nosso site e conduzir nossos negócios (ex: serviços de
                hospedagem, ferramentas de análise, sistemas de e-mail), desde que essas partes concordem em
                manter essas informações confidenciais.
              </li>
              <li>
                <strong className="text-white/90">Obrigação Legal:</strong> Quando exigido por lei ou em
                resposta a solicitações válidas de autoridades públicas (ex: um tribunal ou agência
                governamental).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Segurança dos Dados</h2>
            <p className="text-white/70 leading-relaxed">
              A segurança dos seus dados é importante para nós. Utilizamos protocolos de segurança padrão do
              setor (como SSL/HTTPS) para proteger suas informações durante a transmissão. No entanto,
              lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento
              eletrônico é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Seus Direitos (LGPD)</h2>
            <p className="text-white/70 mb-3 leading-relaxed">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar os dados que possuímos sobre você.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="text-white/70 mt-3 leading-relaxed">
              Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Links para Outros Sites</h2>
            <p className="text-white/70 leading-relaxed">
              Nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em
              um link de terceiros, você será direcionado para o site desse terceiro. Aconselhamos
              vivamente que reveja a Política de Privacidade de cada site que visita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Alterações nesta Política</h2>
            <p className="text-white/70 leading-relaxed">
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre
              quaisquer alterações publicando a nova política nesta página e atualizando a data de "Última
              atualização" no topo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Contato</h2>
            <p className="text-white/70 mb-3 leading-relaxed">
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-none text-white/70 space-y-2">
              <li>
                <strong className="text-white/90">E-mail:</strong>{" "}
                <a href="mailto:contato@kinetree.site" className="text-green-400 hover:underline">
                  contato@kinetree.site
                </a>
              </li>
              <li>
                <strong className="text-white/90">Site:</strong>{" "}
                <a href="https://kinetree.site/contato" className="text-green-400 hover:underline">
                  kinetree.site/contato
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

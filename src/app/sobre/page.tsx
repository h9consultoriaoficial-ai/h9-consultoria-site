import type { Metadata } from "next";
import { Heart, Target, TrendingUp, Shield, Cross, Users } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre | Heverton Marques",
  description:
    "Conheça a história de Heverton Marques, consultor estratégico de marketplaces. Uma jornada de fé, superação e propósito que deu origem à H9 Consultoria.",
};

const WA_MSG = encodeURIComponent(
  "Olá Heverton! Li sua história no site e quero saber mais sobre a consultoria H9."
);
const WA_URL = `https://wa.me/5519995517477?text=${WA_MSG}`;

const chapters = [
  {
    number: "01",
    title: "O Barracão Vazio",
    text: "Desde 2023, os anos vinham sendo difíceis. Em 2025, enfrentei decepções profundas, vi negócios que pareciam certos desmoronarem na última hora. Com a crise, precisei dispensar os últimos colaboradores e fiquei sozinho em um barracão de 500m² que antes era ocupado por doze pessoas. Vivi um período de profunda tristeza — um verdadeiro luto pela quebra da minha empresa, a Dismar.",
  },
  {
    number: "02",
    title: "A Encruzilhada",
    text: "Tinha três caminhos à minha frente: recomeçar do zero vendendo produtos que eu já conhecia, manter apenas as vendas em marketplaces, ou focar em consultoria de gestão empresarial e vendas online, usando meus erros e acertos como lição para outros. Estava lutando com todas as forças, mas nada funcionava. Andava desnorteado, chorando e orando, tentando entender o porquê de tudo aquilo.",
  },
  {
    number: "03",
    title: "O Vale da Sombra",
    text: "Em um dia de solidão absoluta, ajoelhei-me e fiz uma oração especial: pela primeira vez, entreguei minha vida totalmente nas mãos de Deus. Senti uma paz inexplicável e, pouco depois, Ele me deu a direção mais improvável e difícil: focar na consultoria. Mas a obediência trouxe tempestades ainda maiores. Sem salário, com contas domésticas atrasadas e credores me cercando, cheguei ao meu limite emocional. Mas o temor a Deus e o amor profundo pela minha esposa e pela minha filha me impediram de desistir. O Espírito Santo foi minha única força naquele abismo.",
  },
  {
    number: "04",
    title: "A Voz que Não Abandona",
    text: "De junho a novembro de 2025, Deus silenciou. Foram seis meses sem ouvir Sua voz, vivendo uma dependência absoluta. No dia 17 de novembro, enquanto eu trabalhava, Deus falou de forma real e audível. A confirmação que esperava chegou. No dia 3 de dezembro, Ele falou novamente sobre um detalhe cotidiano que só Ele poderia saber. Senti tremor e reverência — mas também alegria sobrenatural. Ele nunca me havia abandonado.",
  },
  {
    number: "05",
    title: "O Nascimento da H9",
    text: "Na quarta-feira, dia 7 de janeiro de 2026, enquanto enfrentava um problema persistente, Deus ordenou: 'Escreva uma música'. Sem ser músico ou compositor, orei pedindo a letra, e em menos de três minutos ela estava pronta — exatamente como você a lê hoje. Naquele momento, entendi que tudo o que havia vivido não era o fim. Era a fundação. A H9 Consultoria Estratégica não nasceu de um plano de negócios. Nasceu de uma obediência.",
  },
];

const principles = [
  {
    icon: Heart,
    title: "Honestidade",
    text: "Cada orientação que ofereço é fundamentada em dados reais e intenção genuína. Nunca prometo o que não posso entregar.",
  },
  {
    icon: Target,
    title: "Propósito",
    text: "Acredito que negócios sustentáveis são construídos sobre uma razão de existir maior do que o lucro.",
  },
  {
    icon: TrendingUp,
    title: "Resultado Real",
    text: "Trabalho com comissão sobre resultado porque só ganho quando você ganha. Não há espaço para promessas vazias.",
  },
  {
    icon: Shield,
    title: "Ética",
    text: "Recuso clientes que não compartilham valores éticos. A reputação é construída com consistência, não com atalhos.",
  },
  {
    icon: Cross,
    title: "Fé",
    text: "A fé cristã é a fundação de tudo. Não é um detalhe da minha vida — é o alicerce das minhas decisões.",
  },
  {
    icon: Users,
    title: "Família",
    text: "O amor pela família foi o que me impediu de desistir no momento mais difícil. Carrego esse valor em cada cliente.",
  },
];

const songLines = [
  "Como o caminho de Deus às vezes é difícil, desafiador",
  "Muitas vezes sacrificante",
  "As pessoas não entendem, muitas riem e criticam a minha decisão",
  "de seguir a tua voz meu Pai",
  "",
  "Que linda voz é essa, estrondosa ao meu coração",
  "Voz que causa medo e arrepios ao ouvi-la",
  "Mas quão doce e maravilhosa és",
  "Quão soberano tu és Deus",
  "",
  "Na calmaria da brisa o Senhor está",
  "E lá que eu quero sempre estar",
  "",
  "Esperar no Senhor é sinal de luta com vitória",
  "Esperar em Jesus é ver a cruz vazia",
  "Esperar no Pai é segurança",
  "Esperar em Deus aumenta a minha Fé",
  "",
  "Espírito Santo fala ao meu coração",
  "Cada palavra tua ó Deus me faz caminhar seguro",
  "Como uma âncora firme no mar",
  "Nos tempos difíceis é direção correta para o meu olhar",
  "",
  "Te amo ó meu Deus, amo a sua voz",
  "Na espera da sua promessa se cumprir",
  "Espero no Senhor a voz que acalma minha alma.",
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="foto-heverton w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border-4 border-gold bg-white/5 flex items-center justify-center shadow-2xl mx-auto lg:mx-0">
              <div className="text-center text-white/30 font-manrope text-sm px-6">
                <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/30">H</span>
                </div>
                Foto de Heverton
                <br />
                será adicionada em breve
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-playfair text-4xl sm:text-5xl text-white">
                Heverton Marques
              </h1>
              <p className="text-gold font-manrope font-semibold text-lg">
                Consultor Estratégico de Marketplaces · Limeira, SP
              </p>
              <p className="slogan text-2xl">
                &ldquo;Amar, Vender para Abençoar&rdquo;
              </p>
              <p className="text-white/60 font-manrope leading-relaxed">
                Uma consultoria que nasceu não de um plano de negócios, mas de uma obediência.
                Conheça a história que deu origem à H9 Consultoria Estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Jornada */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy">
              A história por trás da H9
            </h2>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/30 hidden sm:block" />

            <div className="space-y-12">
              {chapters.map((ch) => (
                <div key={ch.number} className="sm:pl-20 relative">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-navy flex items-center justify-center text-gold font-playfair font-bold text-lg shadow-md hidden sm:flex">
                    {ch.number}
                  </div>
                  <div className="sm:ml-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="sm:hidden bg-navy text-gold font-playfair font-bold text-sm px-3 py-1 rounded-full">
                        {ch.number}
                      </span>
                      <h3 className="font-playfair text-xl sm:text-2xl text-navy">{ch.title}</h3>
                    </div>
                    <p className="text-navy/70 font-manrope leading-relaxed">{ch.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl text-gold mb-8">O Propósito</h2>
          <div className="text-white/80 font-manrope leading-relaxed space-y-5 text-lg text-left bg-white/5 rounded-2xl p-8 border border-gold/20">
            <p>
              <strong className="text-white">&ldquo;Amar, Vender para Abençoar&rdquo;</strong> não é um slogan de
              marketing. É uma declaração de missão que guia cada análise, cada orientação e cada
              decisão que tomo com meus clientes.
            </p>
            <div className="space-y-3 pt-2">
              <p>
                <strong className="text-gold">Amar:</strong> tratar cada cliente com honestidade e
                cuidado genuíno.
              </p>
              <p>
                <strong className="text-gold">Vender:</strong> entregar resultado real, com dados e
                estratégia.
              </p>
              <p>
                <strong className="text-gold">Abençoar:</strong> que o crescimento do seu negócio seja
                uma bênção para sua família, sua equipe e sua comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Canção */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-gold pl-8">
            <div className="flex items-center gap-3 mb-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gold opacity-70"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <span className="text-gold/60 font-manrope text-xs uppercase tracking-widest">
                Canção
              </span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl text-gold mb-2">
              A Espera da Voz do Pai
            </h2>
            <p className="text-white/50 font-manrope text-sm mb-10">
              Uma canção que nasceu da obediência — 07 de janeiro de 2026
            </p>

            <div className="font-playfair text-white/85 text-lg leading-loose space-y-1">
              {songLines.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>

            <p className="mt-8 text-gold font-manrope font-semibold">
              — Heverton Marques, 07 de janeiro de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-20 bg-h9gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy">
              Princípios que guiam a H9
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-navy/5 hover:border-gold/30 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-playfair text-xl text-navy mb-2">{title}</h3>
                <p className="text-navy/60 font-manrope text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <p className="slogan text-2xl">Amar, Vender para Abençoar</p>
          <p className="text-white/60 font-manrope">
            Se essa história ressoou com você, vamos conversar.
          </p>
          <Button href={WA_URL} variant="whatsapp" size="lg" external>
            Falar com Heverton
          </Button>
        </div>
      </section>
    </>
  );
}

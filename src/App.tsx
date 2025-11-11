import {
  ChevronUp,
  CircleDollarSign,
  Download,
  ExternalLink,
  Linkedin,
  MessageSquareShare,
} from "lucide-react";
import ExperienceComp from "./components/custom/Experience";
import Hero from "./components/custom/Hero";
import LastWorkCardComp from "./components/custom/LastWorkCard";
import SkillToolComp from "./components/custom/SkillTool";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Tooltip,
  TooltipContent2,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { EXPERIENCES } from "./mocks/EXPERIENCES";
import { LAST_WORKS } from "./mocks/LAST_WORKS";
import {
  SKILL_AND_TOOLS_AT_LEAST_ONCE,
  SKILL_AND_TOOLS_EXP_NOT_USED,
  SKILL_AND_TOOLS_GETTING_BETTER,
  SKILL_AND_TOOLS_HAS_NOTION,
  SKILL_AND_TOOLS_LESS_EXPERIENCE_BUT_CAN_WORK,
  SKILL_AND_TOOLS_SOLID,
  SKILL_AND_TOOLS_USED_BY_CONSEQUENCE,
} from "./mocks/SKILL_AND_TOOLS";
import { SOCIALS } from "./mocks/SOCIALS";
import type { SkillTool } from "./types/SkillTool";
import { callOnWhatsApp, scrollTo } from "./utils/functons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  {
    /* DATA */
  }
  const TABS = {
    defaultValue: "RECRUITER",
    buttons: [
      {
        text: "Recruiter",
        value: "RECRUITER",
      },
      {
        text: "Tech Lead",
        value: "TECH_LEAD",
      },
      {
        text: "Cliente",
        value: "CLIENT",
      },
    ],
    content: [
      {
        value: "RECRUITER",
        paragraphs: [
          <p className="font-light text-neutral-800 text-xs indent-6">
            Estou avaliando e aplicando para vagas cujo perfil seja para
            <b className="font-bold ml-1">Desenvolvedor Front-end</b>,
            principalmente <b className="font-bold">Angular</b>. Tenho dado
            prioridade para vagas com modelo remoto, visto que moro no litoral
            de São Paulo, mas não descarto outros modelos.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Falando sobre remoto, nem sempre foi assim. Durante muito tempo
            trabalhei alocado em Alphaville e gastava cerca de 4 horas de
            fretado, tempo que hoje consigo dedicar á{" "}
            <b>saúde, família, projetos pessoais, estudos</b>, entre outras
            atividades.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Eu possuo mais de 7 anos de experiência em aplicações web e
            aproximadamente 5 anos em aplicações multi-plataforma. Atuei na
            Bradesco Seguros em projetos legados e outros mais recentes,
            realizando sustentação, refatoração, e desenvolvimento de novas
            funcionalidades, incluindo: componentes, telas inteiras,
            autenticação com jwt, gerenciamento de estado entre outras
            atividades.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Além disso, integrei uma squad em Portugal, contribuindo para o
            desenvolvimento de um painel administrativo na área do agronegócio.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Apesar de esporadicamente realizar serviços freelancer, a maior
            parte do meu tempo foi dedicado a projetos corporativos.
          </p>,
        ],
      },
      {
        value: "TECH_LEAD",
        paragraphs: [
          <p className="font-light text-neutral-800 text-xs indent-6">
            Sou de uma época onde o termo front-end mal existia, usávamos o
            famigerado "webdesigner/webmaster". Meu primeiro contato com front
            foi em meados de 2009 onde sites ainda eram feitos com tabelas (ou
            até flash), onde era usado jQuery para manipulação do dom. Usei
            DreamWeaver, Notepad++, FireWorks e sempre odiei o FrontPage, mas
            enfim, front tem sido minha paixão desde então.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Nesses 7 anos, fui de trainee á senior. Atuei em times grandes e
            pequenos. Na maior parte do tempo atuei só como front-end, mas hoje
            entendo que um desenvolvedor precisa ter um entendimento de
            ponta-a-ponta de uma aplicação e estou em busca de me tornar um
            profissional <b className="font-bold text-main">mais completo</b>.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Sou aquele front-end que já faz o que se espera em aplicações
            modernas: integrações com APIs Restful, gerencimento de estado,
            manipulação de DOM, entre tantas outras coisas que como dev
            precisamos fazer: análise técnica, orçar as atividades, participar
            de cerimônias do scrum, etc.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Tenho visto que aos poucos, o front-end raíz está desaparecendo. Em
            meio á tantas novidades e tecnologias que surgem praticamente toda
            semana, ainda sou apaixonado pela base: <b>HTML semântico</b>,{" "}
            <b>CSS</b>, <b>JS</b>. Hoje a maioria dos fronts são dependentes de
            frameworks, eu uso, não sou hipócrita, mas você já experimentou
            pedir pra um dev centralizar com absolute? ou fazer algo com
            z-index?
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Entendo que como líder você precise de um profissional que possa
            atender várias frentes é este caminho que estou tentando trilhar.
            Existem tecnologias, bibliotecas e ferramentas que estou acostumado
            a utilizar. Já outras, nem tanto. Não costumo perder tempo com o que
            não utilizo no momento, prova disso foi o próprio React: não havia
            aprendido, pois atuei no mundo corporativo com Angular cerca de 6
            anos e aí só então quando apareceu uma oportunidade em um time
            internacional é que eu resolvi me dedicar.
          </p>,
        ],
      },
      {
        value: "CLIENT",
        paragraphs: [
          <p className="font-light text-neutral-800 text-xs indent-6">
            Em meio á tantas revoluções, chegou mais uma: a era da Inteligência
            Articial e com ela o surgimento de várias possibilidades, uma delas:
            geração de sites e aplicações com ferramentas onde é só digitar um
            texto/prompt e nasce mais uma aplicação. Fora outras ferramentas
            cujo conceito é arraste e solte que você já não é tão novidade
            assim.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6">
            Mas naõ se iluda. Nós ganhamos e perdemos as pessoas nos detalhes.
            Em toda minha carreira tenho sido o tipo de profissional não só
            organizado e comprometido com a entrega, mas principalmente
            detalhista. O front-end é o primeiro contato do público com a sua
            empresa/marca, então precisa ser agradável. Principalmente em uma
            geração que estamos mais ansiosos e mais exigentes.
          </p>,
          <p className="font-light text-neutral-800 text-xs indent-6 ">
            Você precisa de front-end detalhista, que preza não só pela estética
            mas também pela qualidade.
          </p>,
        ],
      },
    ],
  };

  const defineButtonsForVisitant = (type: string) => {
    switch (type) {
      case "RECRUITER":
        return (
          <div className="w-full flex items-center justify-end pt-4">
            <Dialog>
              <DialogTrigger>
                <Button
                  variant={"link"}
                  className="font-normal text-xs bg-transparent rounded-full cursor-pointer hover:bg-transparent hover:text-main-dark text-main underline"
                  size="sm"
                >
                  Baixar currículo <Download />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Alert />
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    callOnWhatsApp(
                      "(13) 9 9733-0408",
                      "Olá Felipe, vim pelo seu site e..."
                    )
                  }
                  className="font-normal text-xs bg-main rounded-full cursor-pointer hover:bg-main-dark px-3!"
                  size="sm"
                >
                  Bater um papo <MessageSquareShare className="size-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent2
                sideOffset={12}
                side="bottom"
                className="rounded-full"
              >
                <p>Chamar no WhatsApp</p>
              </TooltipContent2>
            </Tooltip>
          </div>
        );

      case "TECH_LEAD":
        return (
          <div className="flex justify-end items-center mt-6">
            <a
              href="https://www.linkedin.com/in/felipebaptistellavieira/"
              target="_blank"
            >
              <Button
                variant="outline"
                className="font-normal text-xs rounded-full cursor-pointer px-3!"
                size="sm"
              >
                Conectar <Linkedin className="size-3" />
              </Button>
            </a>
          </div>
        );

      case "CLIENT":
        return (
          <div className="flex justify-end items-center mt-6">
            <Button
              onClick={() =>
                callOnWhatsApp(
                  "(13) 9 9733-0408",
                  "Olá Felipe, vim pelo site e gostaria de fazer um orçamento."
                )
              }
              className="font-normal text-xs bg-main rounded-full cursor-pointer hover:bg-main-dark px-3!"
              size="sm"
            >
              Fazer um orçamento <CircleDollarSign className="size-3.5" />
            </Button>
          </div>
        );
    }
  };

  {
    /* PSEUDO COMPONENTS */
  }
  const SkillToolArea = ({
    title,
    skillNtools,
  }: {
    title: string;
    skillNtools: SkillTool[];
  }) => (
    <div className="w-full">
      <p className="font-normal text-xs flex gap-1 flex-wrap items-center">
        {title}
      </p>

      <div className="grid grid-cols-7 sm:grid-cols-8 md:grid-cols-12">
        {skillNtools.map((skill) => (
          <SkillToolComp skill={skill} />
        ))}
      </div>
    </div>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <h3 className="uppercase font-light text-xs text-muted-foreground mb-3">
      {title}
    </h3>
  );

  const LookingForJobNow = () => (
    <span className="uppercase font-normal text-[8px] md:text-[10px] bg-main/10 text-main py-1 px-3 rounded-full">
      Buscando oportunidades
    </span>
  );

  const Alert = () => (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Baixar currículo</DialogTitle>
        <DialogDescription>
          Disponibilizo uma versão .pdf e mais formal para você recrutador
          anexar ao processo de seleção.
        </DialogDescription>
      </DialogHeader>

      <div className="w-full flex gap-3">
        <DialogClose>
          <a href="cv-fbv-front-end.pdf" download>
            <Button className="text-xs font-normal bg-main text-white shadow-none cursor-pointer">
              Baixar versão .PDF
            </Button>
          </a>
        </DialogClose>
      </div>
    </DialogContent>
  );

  return (
    <section className="min-h-screen">
      <Hero />

      {/* APRESENTAÇÃO */}
      <section
        className="w-full py-10 bg-dom-sim-gray-28 pb-[150px]"
        id="let-me-introduce-myself"
      >
        <div className="w-full flex justify-center m-auto gap-6">
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white nunito font-thin">
              Permita-me <b className="font-bold ">apresentar</b>.
            </h1>

            <p className="text-neutral-400 font-thin text-xs md:text-sm">
              mas se você estiver com pressa{" "}
              <Dialog>
                <DialogTrigger>
                  <Button
                    variant={"link"}
                    className="h-auto min-h-0 px-0! ml-1 md:ml-[0.7px] w-auto min-w-0 font-normal text-xs md:text-[14px] bg-transparent rounded-full cursor-pointer hover:bg-transparent hover:text-main-dark text-main underline"
                    size="sm"
                  >
                    faça download do curriculo <Download />
                  </Button>
                </DialogTrigger>
                <Alert />
              </Dialog>
            </p>
          </div>
        </div>
      </section>

      {/* AVATAR & NOME */}
      <section className="w-full pb-10 relative bg-linear-to-b from-neutral-100 to-transparent">
        <div className="w-full max-w-4xl m-auto relative flex items-start justify-start px-6">
          <div className="absolute -top-[3px] left-6 right-0 h-[5px] bg-linear-to-r from-main  to-transparent z-10" />

          <div className="flex justify-center items-center flex-col">
            <div className="-mt-[50px] md:-mt-[110px] bg-white rounded-full shadow-md p-px md:p-1.5 border relative z-20">
              <Avatar className="size-[100px] md:size-[200px]">
                <AvatarImage src="fbv-professional.jpg" />
                <AvatarFallback>FB</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="-mt-[100px] pl-3 md:pl-6 h-auto md:h-[200px] grid grid-rows-2 grid-cols-1 w-full">
            <div className="w-full flex items-start justify-end pb-1 md:pb-3 flex-col">
              <h2 className="text-white nunito text-xl md:text-3xl">
                Felipe Baptistella Vieira
              </h2>
            </div>

            <div className="pt-3.5 md:pt-3 flex items-start justify-start md:justify-between w-full flex-col md:flex-row">
              {/* PROFILE */}
              <ul>
                {[
                  "Desenvolvedor Front-end.",
                  "Solteiro, 32 anos - São Vicente/SP.",
                ].map((item) => (
                  <li>
                    <p className="text-neutral-700 font-light uppercase text-xs md:text-sm">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              {/* REDES */}
              <div className="flex gap-2 pt-3 md:pt-0">
                {SOCIALS.map((social) => (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={social.url} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-pointer hover:text-accent-foreground shadow-xs"
                        >
                          <social.icon strokeWidth={1.5} />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent2
                      sideOffset={15}
                      side="bottom"
                      className="rounded-full"
                    >
                      <p>{social.text}</p>
                    </TooltipContent2>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="w-full">
        <Tabs defaultValue={TABS.defaultValue} className="w-full ">
          <div className="flex w-full max-w-3xl m-auto  px-6 gap-6 flex-col items-center justify-start sm:flex-row sm:items-center sm:justify-between sticky top-0 bg-linear-to-b from-white to-transparent">
            <TabsList className="rounded-full p-1 ">
              {TABS.buttons.map((btn) => (
                <TabsTrigger
                  value={btn.value}
                  className="nunito group rounded-full text-sm font-semibold text-neutral-600  cursor-pointer hover:data-[state=active]:opacity-100 hover:opacity-50"
                >
                  <span className="group-data-[state=active]:text-main ">
                    {btn.text}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="hidden md:flex">
              <LookingForJobNow />
            </div>
          </div>

          {TABS.content.map((content) => (
            <TabsContent value={content.value}>
              <section className="w-full">
                <div className="w-full m-auto max-w-3xl px-6 pt-4 pb-10 space-y-2">
                  {content.paragraphs}

                  {defineButtonsForVisitant(content.value)}
                </div>
              </section>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CV */}
      <section className="w-full  flex flex-col gap-8">
        {/* EXPERIÊNCIAS */}
        <div className="w-full m-auto max-w-3xl px-6 ">
          <SectionTitle title="Experiências relevantes" />

          <div className="w-full flex flex-col items-start justify-start gap-10">
            {EXPERIENCES.map((exp) => (
              <ExperienceComp experience={exp} />
            ))}
          </div>
        </div>

        {/* SKILL & TOOLS */}
        <div className="w-full m-auto max-w-3xl px-6 ">
          <SectionTitle title="Skills & Tools" />

          <div className="w-full flex flex-col gap-5">
            <SkillToolArea
              title={"Sólida experiência"}
              skillNtools={SKILL_AND_TOOLS_SOLID}
            ></SkillToolArea>

            <SkillToolArea
              title={"Acabo usando por consequência."}
              skillNtools={SKILL_AND_TOOLS_USED_BY_CONSEQUENCE}
            ></SkillToolArea>

            <SkillToolArea
              title={"Possuo experiência mas não uso há um bom tempo."}
              skillNtools={SKILL_AND_TOOLS_EXP_NOT_USED}
            ></SkillToolArea>

            <SkillToolArea
              title={
                "Possuo algum tipo de experiência e procuro melhorar quando posso."
              }
              skillNtools={SKILL_AND_TOOLS_GETTING_BETTER}
            ></SkillToolArea>

            <SkillToolArea
              title={"Possuo menos experiência mas consigo me virar."}
              skillNtools={SKILL_AND_TOOLS_LESS_EXPERIENCE_BUT_CAN_WORK}
            ></SkillToolArea>

            <SkillToolArea
              title={"Noções básicas."}
              skillNtools={SKILL_AND_TOOLS_HAS_NOTION}
            ></SkillToolArea>

            <SkillToolArea
              title={"Já mexi pelo menos uma vez na vida."}
              skillNtools={SKILL_AND_TOOLS_AT_LEAST_ONCE}
            ></SkillToolArea>
          </div>
        </div>

        {/* FORMAÇÃO ACADÊMICA */}
        <div className="w-full m-auto max-w-3xl px-6 ">
          <SectionTitle title="Formação acadêmica" />

          <div className="leading-3">
            <p className="font-normal text-sm flex gap-1 flex-wrap items-center">
              Superior em Análise e Desenvolvimento de Sistemas
              <span className="text-muted-foreground">&middot;</span>{" "}
              <span className="text-muted-foreground font-light">
                Fev/2016 - Dez/2019
              </span>
            </p>
            <p className="flex gap-1 flex-wrap">
              <span className="text-muted-foreground font-light uppercase text-xs">
                Universidade São Judas Tadeu
              </span>
              <span className="text-muted-foreground">&middot;</span>
              <a
                href="https://www.usjt.br/"
                target="_blank"
                className="flex gap-1 flex-wrap items-center text-main underline font-normal underline-offset-2 text-xs transition-colors hover:text-main-dark"
              >
                USJT <ExternalLink strokeWidth={2} size={14} />
              </a>
            </p>
          </div>
        </div>

        {/* IDIOMAS */}
        <div className="w-full m-auto max-w-3xl px-6">
          <SectionTitle title="Idiomas" />

          <div className="leading-3 space-y-2">
            <p className="font-normal text-sm flex gap-1 flex-wrap items-center justify-start">
              <span>Inglês</span>
              <span className="text-muted-foreground">&middot;</span>
              <span className="font-light uppercase  text-white bg-neutral-600 rounded-full h-3.5 text-[8px] px-1 flex items-center justify-center m-0">
                técnico
              </span>
            </p>
            <p className="font-light text-neutral-800 text-xs">
              Apesar de ter feito mais de 4 anos de curso, nunca apliquei em
              vagas que exigem o idioma fluente. Meu inglês é nível técnico, o
              que significa que consigo entender documentações e usar no
              dia-a-dia.
            </p>
          </div>
        </div>

        {/* ÚLTIMOS TRABALHOS */}
        <div className="w-full m-auto max-w-3xl px-6 flex flex-col">
          <SectionTitle title="últimos trabalhos" />

          <div className="leading-3 space-y-2 mb-4">
            <p className="font-light text-neutral-800 text-xs">
              A maior parte dos projetos que atuei estão em repositórios
              privados pois são propriedade das empresas, separei abaixo alguns
              projetos: um em que utilizei para treinar novas features do
              angular, um projeto pessoal o qual mantenho e um freelancer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0 relative z-20">
            {LAST_WORKS.map((work) => (
              <LastWorkCardComp work={work} />
            ))}
          </div>
        </div>

        <div className="w-full relative flex flex-col-reverse">
          <div className="pl-6 pb-6 w-full flex flex-col justify-center items-center md:hidden">
            <p className="font-thin text-sm neutral-600 md:hidden text-center">
              &copy; 2025 - Felipe Baptistella Vieira.
            </p>

            <Button
              onClick={() => scrollTo("let-me-introduce-myself")}
              className="text-main text-[11px] font-normal underline cursor-pointer hover:text-main-dark  min-h-0 h-auto m-auto!"
              variant={"link"}
            >
              Voltar para o topo <ChevronUp className="-ml-1" />
            </Button>
          </div>

          <img
            src="atleta.png"
            className="absolute right-0 md:top-0 md:w-[70vw] md:max-w-[800px] xl:max-w-[1000px] m-auto opacity-20 md:opacity-50"
          ></img>

          <div className="w-full max-w-3xl m-auto grid md:grid-cols-2 px-6 relative z-20 pt-20 md:pt-0">
            <div>
              <h1 className="font-thin text-main nunito text-3xl leading-none mb-3">
                Atividades <span className="font-bold">complementares</span>
              </h1>

              <div className="space-y-2">
                <p className="font-light text-xs">
                  Quando conheci o desenvolvimento front-end há mais de 12 anos
                  atrás, foi um choque. Já naquela época queria ter algo meu
                  mesmo não tendo muito conhecimento. As tecnologias na época
                  estavam muito longe do que a gente vive hoje. Agora com a
                  expertise adquirida ao longo dos anos e os benefícios do
                  modelo remoto, consigo dedicar tempo ao meu crescimento
                  pessoal e profissional.
                </p>

                <p className="font-light text-xs">
                  A programação é uma das poucas profissões onde temos o
                  privilégio de tirar idéias do papel e trazer para o mundo
                  físico. Particularmente eu já tentei algumas vezes, mas hoje
                  tenho um carinho especial por um projeto que criei para
                  agregar valor á imagem de atletas e profissionais do segmento
                  esportivo na minha região, contribuindo e promovendo não só a
                  prática de esporte mas como saúde, lazer e bem estar na
                  comunidade em que vivo mesmo ainda não tendo retorno
                  financeiro sobre isso.
                </p>

                <p className="font-light text-xs">
                  Falando em remoto e saúde, como mencionei antes, hoje tento
                  dar prioriedade para vagas que eu consiga unir esses dois, mas
                  nem sempre foi assim. Já atuei no modelo presencial em
                  Alphaville e só a ida/volta consumia pelo menos 4 horas do meu
                  dia em dias normais. Já sofri com hérnia de disco, á ponto de
                  trabalhar deitado durante meses e aí então ter que me afastar
                  para operar.
                </p>

                <p className="font-light text-xs">
                  O fato de dar <b className="font-bold">prioridade</b> para
                  vagas com esse modelo não é uma questão de preguiça, comodismo
                  ou coisa parecida. É uma escolha. Esqueça o estereótipo de
                  programador, gordinho, barbudo e que não vê a luz do sol,
                  inclusive, já vivi isso. Hoje, dou valor para minha saúde
                  física e mental. Crescimento pessoal e profissional. Não quero
                  só dar o meu melhor na minha posição mas quero fazer a
                  diferença na região onde vivo, pois é onde estou a maior parte
                  do tempo.
                </p>
              </div>

              <div className="my-6">
                <a
                  href="https://esportesnabaixadasantista.com.br/"
                  target="_blank"
                >
                  <Button className="bg-main/10 text-main shadow-none text-xs font-normal rounded-full cursor-pointer hover:bg-main hover:text-white">
                    Conhecer projeto <ExternalLink strokeWidth={1.8} />
                  </Button>
                </a>
              </div>

              <div className="hidden md:block pb-12">
                <p className="font-thin text-sm neutral-600">
                  &copy; 2025 - Felipe Baptistella Vieira.
                </p>

                <Button
                  onClick={() => scrollTo("let-me-introduce-myself")}
                  className="text-main text-[11px] font-normal underline cursor-pointer hover:text-main-dark p-0! m-0 min-h-0 h-auto float-right"
                  variant={"link"}
                >
                  Voltar para o topo <ChevronUp className="-ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;

import type { Work } from "@/types/Work";

export const LAST_WORKS: Work[] = [
  {
    name: "JAPPAZ",
    href: "https://jappaz.com.br/",
    desc: [
      "Webapp desenvolvido com os frameworks Angular e Ionic para listagem de restaurantes com culinária oriental. Utilizei o Supabase como banco de dados para persistir os cadastros e gerenciar autenticação.",
      "O site foi e continua hospedado via Firebase Hosting que é um recurso da Google Cloud Platform e é claro, utilizei bibliotecas e recursos dos próprios frameworks: observables (RxJS), Reactive Forms, HttpClient, etc...",
    ],
  },
  {
    name: "ESPORTES NA BAIXADA SANTISTA",
    href: "https://esportesnabaixadasantista.com.br/",
    desc: [
      "Website desenvolvido com React para mostrar um pouco do segmento esportivo na região da Baixada Santista, desde eventos até atletas e profissionais.",
      "Para este projeto optei pela bibliotecas de componentes visuais ShadCN, estilização com Tailwind e a integração feita com Supabase. Tanto a hospedagem quanto a parte de Analyitcs ficam por conta do Firebase que também um serviço da Google Cloud Platform.",
    ],
  },
  {
    name: "JMOURA CORRETORA",
    href: "https://jmouracorretora.com.br/",
    desc: [
      "Website desenvolvido com React para melhorar a imagem do profissional, visto que só utilizada o linktree.",
      "O projeto é inteiro mockado, sem consumo de API. O maior desafio foi criar um layout do absoluto zero uma vez que o cliente não tinha nenhum protótipo.",
    ],
  },
];

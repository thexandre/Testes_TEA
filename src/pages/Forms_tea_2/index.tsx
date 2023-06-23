

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';
import './Formulario.css';

const perguntasSecao1 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Pensa profundamente',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Bom(Boa) escritor(a), inclinada(a) à poesia ',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Muito inteligente',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Vê as coisas em múltiplos níveis',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Analisa a existência, o significado da vida, e tudo em torno continuamente',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sério(a) e honesto(a) quanto ao que acha de algo ou alguém',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não presume as coisas como certas',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não simplifica, tudo é complexo',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Geralmente se perde nos próprios pensamentos e tem brancos, lapsos, ausências (olhar parado no infinito)',
    respostas: ['Sim', 'Não'],
  },
];

const perguntasSecao2 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Ingênuo(a)',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Honesto(a)',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não consegue mentir',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Acha difícil entender manipulação e falsidade',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Acha difícil entender comportamento violento',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Facilmente enganado(a)',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Abusado(a) ou lhe tiraram vantagem na infância, mas não contou a ninguém',
    respostas: ['Sim', 'Não'],
  },
];

const perguntasSecao3 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sobrevive às emoções intensas através do pensamento ou ação',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa regularmente através de fixações, obsessões e interesse intenso em certos assuntos',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa rotineiramente através da imaginação, fantasia e do sonhar acordado(a)',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa através de racionalização',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Filosofa continuamente',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Teve amigos imaginários na infância ou juventude',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Imita pessoas de filmes ou da tv',
    respostas: ['Sim', 'Não'],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tratava os amigos como “peões” na segunda metade da infância, que serviam para o preenchimento de papéis',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Faz amizades com pessoas fora do seu círculo de idade, ou mais velhos, ou mais novos',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Imita amigos em estilo, vestimenta ou modos',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Coleciona e organiza objetos obsessivamente',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Domina a arte da imitação',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa ouvindo a mesma música muitas e muitas vezes',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa através de algum relacionamento (real ou imaginário)',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Gosta de lidar com números',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escapa através de contagens, categorizações, organizações, reformulações',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Se isola em cantos ou outras salas em festas',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não consegue descansar ou relaxar devido aos pensamentos sem fim',
    respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tudo tem um propósito',
    respostas: ['Sim', 'Não'],
  },
];


const perguntasSecao4 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Toc (transtorno obsessivo-compulsivo)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Questões sensoriais (visão, som, textura, cheiro, gosto)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Ag (ansiedade generalizada)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sensação de perigo à espreita ou condenação, ruína',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sentimentos opostos intensos (depressão/super alegria; frieza/super sensível)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tônus muscular pobre, juntas muito flexíveis ou falta de coordenação; deixa cair objetos com frequência',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Desordens alimentares, obsessões com comida e/ou preocupação com o que se come',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sri (síndrome do intestino irritável) ou problemas gastrointestinais',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Fadiga crônica ou problemas com o sistema imunológico',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não diagnosticada ou diagnosticada incorretamente com outros transtornos mentais ou hipocondria',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Questiona muito seu lugar no mundo',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Se pergunta quem é e o que esperam dele(a)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Busca pelo certo e o errado',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Desde a puberdade, tem picos de depressão',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Esfrega as unhas ou as mãos uma na outra, tem o hábito de sentar sobre as mãos ou coloca-las entre as pernas, tem algum tique ou parece ter pigarro com frequência',
      respostas: ['Sim', 'Não'],
  },
  
];


const perguntasSecao5 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Amigos desapareceram de repente sem que se ficasse sabendo o motivo',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tendência a compartilhar demais da sua vida pessoal',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Deixa escapar detalhes de sua vida pessoal a estranhos',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Levantava muito a mão nas aulas ou nunca participava',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Pouco controle do que falava quando mais jovem',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Monopoliza a conversa com frequência',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Traz o assunto da conversa de volta para as próprias questões',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'É percebido(a), às vezes, como narcisista e controlador(a) (embora não seja narcisista)',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Soa afobado(a), ansioso(a) e hiper zeloso(a) às vezes',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Segura muitos pensamentos, ideias e sentimentos dentro de si',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente como se estivesse tentando se comunicar corretamente',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Fica obcecado(a) com um relacionamento em potencial, principalmente romântico',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Confuso(a) quanto a como agir em termos de contato ocular, tom de voz, proximidade corporal ou postura numa conversa',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'A conversa pode ser exaustiva',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Questiona as ações e comportamento de si mesma e dos outros continuamente',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente como se faltasse o “gene” da conversação ou um “filtro” mental',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Estudou as interações sociais através de leituras, observação ou cursos a respeito',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Visualiza e prática como vai falar ou agir com os outros antes de fazê-lo',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Prática mentalmente o que vai dizer ao outro antes de entrar na sala',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Dificuldade em filtrar o barulho de fundo quando falando com as pessoas',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tem um diálogo interno mental contínuo sobre o que vai dizer ou como vai agir em situações sociais',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'O senso de humor às vezes parece estranho ou atípico',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Quando criança, tinha dificuldade em saber quando era sua vez de falar',
      respostas: ['Sim', 'Não'],
  },  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Acha as normas de conversação confusas',
      respostas: ['Sim', 'Não'],
  },
  
];

const perguntasSecao6 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente extremo alívio quando não tem que ir a lugar nenhum, falar com ninguém, fazer ligações',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Uma visita em casa pode ser percebida como ameaça',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Saber pela lógica que uma visita não é ameaça não ajuda a aliviar a ansiedade',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sentimentos de medo, angústia, extrema ansiedade quanto a eventos ou compromissos cuja data se aproxima',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Saber que precisa sair de casa causa ansiedade desde o momento em que acorda',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Todos os passos para sair de casa são esmagadoramente exaustivos de se pensar',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Técnicas de falar consigo mesmo(a) positivamente não aliviam a ansiedade',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Requer grande quantidade de tempo sozinho(a)',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente-se culpado(a) após passar muito tempo envolvido(a) em algum de seus interesses especiais',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente-se bastante desconfortável em banheiros públicos ou vestiários',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sente-se mal em lugares cheios de pessoas',
      respostas: ['Sim', 'Não'],
  },
  
];

const perguntasSecao7 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sensível aos sons, texturas, temperatura ou cheiros, em especial quando está tentando dormir',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Emprega energia e esforço adaptando o ambiente na tentativa de obter o máximo de conforto',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Os sonhos tendem a ser vívidos, com conteúdo repleto de ansiedade, complexos e às vezes até premonitórios',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Altamente intuitivo(a) quanto aos sentimentos dos outros',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não entende como não levar críticas para lado pessoal',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Anseia por ser visto(a), ouvido(a)   e compreendido(a)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sempre se pergunta se é uma pessoa “normal”',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Bastante suscetível aos pontos de vista e opiniões dos outros',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Por vezes, adapta sua visão de mundo ou ações com base nas opiniões e palavras das outras pessoas',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Reconhece suas limitações em muitas áreas diariamente',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Teme a opinião, crítica e julgamento alheio',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Abomina palavras, brincadeiras ou eventos que machuquem animais ou pessoas',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Resgata e abriga animais abandonados (principalmente na infância)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Extrema compaixão pelo sofrimento',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sensível a substâncias (medicamentos, toxinas, comida, álcool, etc.)',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Geralmente tenta ajudar, oferece conselho que não foi pedido, ou mesmo se antecipa em planos e ações',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Questiona o propósito da vida e como ser uma pessoa melhor com frequência',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Procura avidamente compreender habilidades ou talentos que possua',
      respostas: ['Sim', 'Não'],
  },
  
];

const perguntasSecao8 = [
  {
    video: 'Sente-se aprisionado(a), em eterno conflito, por querer ser ele(a) mesmo(a) e querer se enquadrar',
    pergunta:
      '',
      respostas: ['Sim', 'Não'],
  },
  {
    video: 'Imita os outros sem perceber',
    pergunta:
      '',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'Sufoca seus reais desejos',
    pergunta:
      '',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Exibe comportamento codependente',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Rejeita ou questiona normas sociais',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Tem sentimentos de extremo isolamento',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Sentimentos de não se encaixar em lugar algum, como se fosse de outro planeta',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Tem sentimentos de confusão e de sobrecarga',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Sentir-se bem quanto a si mesma geralmente é difícil',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Muda de preferências com base no ambiente e nas outras pessoas',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Não se importava com aparência, roupas ou higiene até a puberdade ou até que alguém tenha apontado isso para ele(a)',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'A voz pode soar muito jovem para a idade cronológica',
      respostas: ['Sim', 'Não'],
  }, {
    video: '',
    pergunta:
      'Problemas em perceber como é fisicamente e/ou leve prosopagnosia (dificuldade em reconhecer ou se lembrar de rostos)',
      respostas: ['Sim', 'Não'],
  },
  
];


const perguntasSecao9 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sofreu e demorou para aprender que os outros não são honestos',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Os sentimentos parecem confusos, ilógicos ou imprevisíveis (de si mesma e dos outros)',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Confunde datas e horários de compromissos, números ou outras datas diversas',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Fala franca e literal (especialmente quando mais jovem)',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Dificuldade em entender piadas ou gírias, geralmente tem entendimento literal',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Não compreende quando os outros isolam alguém num grupo, demonstram preconceito, ignoram, enganam ou apunhalam pelas costas',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Problemas em identificar sentimentos a menos que sejam extremos',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Sentimentos pessoais de raiva, ultraje, amor intenso ou medo parecem mais fáceis de serem identificados que sentimentos de alegria, satisfação e serenidade',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Situações e conversas são muitas vezes percebidas como 8 ou 80',
      respostas: ['Sim', 'Não'],
  }, {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Experimenta sentimentos intensos por coisas aparentemente pequenas',
      respostas: ['Sim', 'Não'],
  },
  
];


const perguntasSecao10 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Gosta de saber a origem das palavras',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Confusa quando há mais de um significado para uma palavra',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Alto interesse em músicas e letras de músicas',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Nota padrões com frequência',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Lembra-se de coisas em padrões visuais',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tem excelente memória para certos detalhes',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Escreve ou cria para aliviar ansiedade',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tem certos “sentimentos e emoções” quanto a certas palavras',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Palavras trazem uma sensação de conforto e paz',
      respostas: ['Sim', 'Não'],
  },
  
];


const perguntasSecao11 = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tarefas simples podem ser muito problemáticas',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Aprender a dirigir pode ser muito difícil',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Lugares novos geram sempre ansiedade',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Qualquer coisa que requeira procedimentos que devam ser seguidos em passos, precisão ou tecnicidade pode gerar pânico',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'O pensamento de consertar ou procurar algo pode causar ansiedade',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Tarefas corriqueiras são fortemente evitadas',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'A tarefa doméstica de limpeza pode ser insuportável às vezes',
      respostas: ['Sim', 'Não'],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta:
      'Pode sair de casa com meias trocadas, roupa do avesso, camisa abotoada incorretamente',
      respostas: ['Sim', 'Não'],
  },
];

const Forms_tea_2: React.FC = () => {
  const [respostas, setRespostas] = useState({});

  const handleRespostaChange = (pergunta: string, resposta: string) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: resposta,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const respostaString = Object.entries(respostas)
      .map(([pergunta, resposta]) => `${pergunta}: ${resposta}`)
      .join('\n');

    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(respostaString);
    link.download = 'respostas.txt';
    link.click();
  };

  return (
    <Container>
      <ContentHeader title="Questionário baseado no Quociente do Espectro Autista (AQ)Baron-Cohen, Wheelwright, Skinner, Martin, Clubley e Samantha Craft" lineColor="#fff" />
      <form onSubmit={handleSubmit}>
         {/* Seção 1 */}
         <h2>SEÇÃO A: PENSAMENTO PROFUNDO</h2>
        {perguntasSecao1.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + 1}`}
                      value={resposta}
                      onChange={(e) => handleRespostaChange(`pergunta${index + 1}`, e.target.value)}
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Seção 2 */}
        <h2>SEÇÃO B: PENSAMENTO PROFUNDO</h2>
        {perguntasSecao2.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(`pergunta${index + perguntasSecao1.length + 1}`, e.target.value)
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Seção 3 */}
        <h2>SEÇÃO C: ESCAPE E AMIZADE</h2>
        {perguntasSecao3.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length + 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length + 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}


        {/* Seção 4 */}
        <h2>SEÇÃO D: COMORBIDADES</h2>
        {perguntasSecao4.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length + 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}


         {/* Seção 5 */}
         <h2>SEÇÃO E: INTERAÇÃO SOCIAL</h2>
        {perguntasSecao5.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

           {/* Seção 6 */}
           <h2>SEÇÃO F: ENCONTRA REFÚGIO QUANDO SOZINHO(A)</h2>
        {perguntasSecao6.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+perguntasSecao5.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+perguntasSecao5.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

                   {/* Seção 7 */}
                   <h2>SEÇÃO G: SENSIBILIDADE</h2>
        {perguntasSecao7.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

         {/* Seção 8 */}
         <h2>SEÇÃO H: SENTIDO DE SI MESMA</h2>
        {perguntasSecao8.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Seção 9 */}
        <h2>SEÇÃO I: CONFUSÃO</h2>
        {perguntasSecao9.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+perguntasSecao8.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+perguntasSecao8.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

       {/* Seção 10 */}
       <h2>SEÇÃO K: FUNÇÃO EXECUTIVA (ESTA ÁREA NEM SEMPRE É TÃO EVIDENTE QUANTO AS OUTRAS)</h2>
        {perguntasSecao10.map((perguntaObj, index) => (
          <div className="pergunta-container" key={index}>
            <div className="pergunta-video">
              <ReactPlayer url={perguntaObj.video} controls={true} />
              <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
            </div>
            <ul className="resposta-container">
              {perguntaObj.respostas.map((resposta, respostaIndex) => (
                <li key={respostaIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`pergunta${index + perguntasSecao1.length + perguntasSecao2.length+perguntasSecao3.length +perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+perguntasSecao8.length+perguntasSecao9.length+ 1}`}
                      value={resposta}
                      onChange={(e) =>
                        handleRespostaChange(
                          `pergunta${index + perguntasSecao1.length + perguntasSecao2.length +perguntasSecao3.length+perguntasSecao4.length+perguntasSecao5.length+perguntasSecao6.length+perguntasSecao7.length+perguntasSecao8.length+perguntasSecao9.length+ 1}`,
                          e.target.value
                        )
                      }
                    />
                    {resposta}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}


        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default Forms_tea_2;
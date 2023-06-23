import React, { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container} from './styles';
import './Formulario.css';
import ReactPlayer from 'react-player';
import Button from '../../components/Button';

const perguntas = [
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu sou uma pessoa simpática.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Costumo usar palavras e frases de filmes e televisão em conversas.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Muitas vezes fico surpreso quando os outros me dizem que fui rude.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes falo muito alto ou muito baixo e não percebo.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Muitas vezes não sei como agir em situações sociais.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Posso colocar-me no lugar dos outros',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu tenho dificuldade em entender o que algumas frases significam, como "você é a menina dos meus olhos".',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu só gosto de conversar com pessoas que compartilham meus interesses especiais.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Concentro-me nos detalhes e não na ideia geral.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu sempre percebo como a comida se sente na minha boca. Isso é mais importante para mim do que o sabor.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Sinto falta dos meus melhores amigos ou família quando estamos separados por muito tempo.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes ofendo os outros dizendo o que estou pensando, mesmo que não seja minha intenção.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu só gosto de pensar e falar sobre algumas coisas que me interessam.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Prefiro sair para comer em um restaurante sozinho do que com alguém que conheço.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Não consigo imaginar como seria ser outra pessoa.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Já me disseram que sou desajeitado ou descoordenado.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Outros me consideram estranho ou diferente.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu entendo quando os amigos precisam ser consolados.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Sou muito sensível à sensação das minhas roupas quando as toco. Como eles se sentem é mais importante para mim do que sua aparência.',
    area: 'Sensorial/Mortor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Gosto de copiar a maneira como certas pessoas falam e agem. Isso me ajuda a parecer mais normal.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Pode ser muito intimidante para mim falar com mais de uma pessoa ao mesmo tempo.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },
  {
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu tenho que "agir normalmente" para agradar outras pessoas e fazê-las gostar de mim.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Conhecer novas pessoas geralmente é fácil para mim.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Fico muito confuso quando alguém me interrompe quando estou falando sobre algo que me interessa muito.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'É difícil para mim entender como as outras pessoas estão se sentindo quando estamos conversando.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Gosto de conversar com várias pessoas, por exemplo à mesa de jantar, na escola ou no trabalho.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu levo as coisas muito ao pé da letra, então muitas vezes perco o que as pessoas estão tentando dizer.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'É muito difícil para mim entender quando alguém está envergonhado ou com ciúmes.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Algumas texturas comuns que não incomodam os outros parecem muito ofensivas quando tocam minha pele.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Fico extremamente chateado quando a maneira como gosto de fazer as coisas muda repentinamente.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Nunca quis ou precisei ter o que outras pessoas chamam de "relacionamento íntimo".',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'É difícil para mim iniciar e parar uma conversa. Eu preciso continuar até terminar.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu falo com um ritmo normal.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'O mesmo som, cor ou textura pode mudar repentinamente de muito sensível para muito opaco.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'A frase "eu tenho você sob minha pele" me deixa desconfortável.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes, o som de uma palavra ou um ruído agudo pode ser doloroso para meus ouvidos.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu sou um tipo de pessoa compreensiva.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Não me conecto com personagens de filmes e não consigo sentir o que eles sentem.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Não sei dizer quando alguém está flertando comigo.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu posso ver em minha mente em detalhes exatos as coisas que me interessam.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu mantenho listas de coisas que me interessam, mesmo quando não têm utilidade prática (por exemplo, estatísticas esportivas, horários de trens, datas do calendário, fatos históricos e datas).',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Quando me sinto sobrecarregado pelos meus sentidos, tenho que me isolar para desligá-los.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu gosto de conversar sobre as coisas com meus amigos.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Não sei dizer se alguém está interessado ou entediado com o que estou dizendo.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Pode ser muito difícil ler os movimentos do rosto, das mãos e do corpo de uma pessoa quando ela está falando.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'A mesma coisa (como roupas ou temperaturas) pode parecer muito diferente para mim em momentos diferentes.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu me sinto muito confortável em namorar ou estar em situações sociais com outras pessoas.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Tento ser o mais útil possível quando outras pessoas me contam seus problemas pessoais.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Já me disseram que tenho uma voz incomum (por exemplo, monótona, infantil ou aguda).',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes um pensamento ou um assunto fica preso na minha cabeça e eu tenho que falar sobre isso mesmo que ninguém esteja interessado.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu faço certas coisas com minhas mãos repetidas vezes (como bater palmas, girar varas ou cordas, balançar coisas perto de meus olhos).',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Nunca me interessei pelo que a maioria das pessoas que conheço considera interessante.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Sou considerado um tipo de pessoa compassiva.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Eu me dou bem com outras pessoas seguindo um conjunto de regras específicas que me ajudam a parecer normal.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' É muito difícil para mim trabalhar e funcionar em grupos.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Quando estou conversando com alguém, é difícil mudar de assunto. Se a outra pessoa fizer isso, posso ficar muito chateado e confuso.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes, tenho que cobrir meus ouvidos para bloquear ruídos dolorosos (como aspiradores de pó ou pessoas falando muito ou muito alto).',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu posso conversar e bater papo com as pessoas.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Às vezes, coisas que deveriam ser dolorosas não são (por exemplo, quando me machuco ou queimo minha mão no fogão).',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Quando falo com alguém, tenho dificuldade em dizer quando é a minha vez de falar ou de ouvir.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Sou considerado um solitário por aqueles que me conhecem melhor.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu costumo falar em um tom normal.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Gosto que as coisas sejam exatamente iguais dia após dia e até pequenas mudanças em minhas rotinas me incomodam.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Como fazer amigos e socializar é um mistério para mim.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Me acalma girar ou balançar em uma cadeira quando estou me sentindo estressado.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'A frase "Ele usa o coração na manga" não faz sentido para mim.',
    area: 'Linguagem',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Se estou em um lugar onde há muitos cheiros, texturas para sentir, ruídos ou luzes brilhantes, sinto-me ansioso ou assustado.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Posso dizer quando alguém diz uma coisa, mas quer dizer outra.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu gosto de ficar sozinha o máximo que posso.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Eu mantenho meus pensamentos empilhados em minha memória como se estivessem em fichas e escolho os que preciso olhando na pilha e encontrando o certo (ou outra maneira única).',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' O mesmo som às vezes parece muito alto ou muito baixo, embora eu saiba que não mudou.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Gosto de passar o tempo comendo e conversando com minha família e amigos.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Não tolero coisas de que não gosto (como cheiros, texturas, sons ou cores).',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Eu não gosto de ser abraçado ou segurado.',
    area: 'Sensorial/Motor',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: ' Quando vou a algum lugar, tenho que seguir uma rota familiar ou posso ficar muito confuso e chateado.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'É difícil imaginar o que as outras pessoas esperam de mim.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Eu gosto de ter amigos próximos.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 0 },
      { descricao: 'Verdadeiro apenas hoje', valor: 1 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 2 },
      { descricao: 'Nunca foi verdadeiro', valor: 3 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'As pessoas me dizem que dou muitos detalhes.',
    area: 'Interesses circunscritos',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Muitas vezes me dizem que faço perguntas embaraçosas.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },{
    video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
    pergunta: 'Costumo apontar os erros dos outros.',
    area: 'Relacionamento social',
    respostas: [
      { descricao: 'Verdadeiro hoje e quando eu era jovem', valor: 3 },
      { descricao: 'Verdadeiro apenas hoje', valor: 2 },
      { descricao: 'Verdadeiro apenas quando eu tinha menos de 16 anos', valor: 1 },
      { descricao: 'Nunca foi verdadeiro', valor: 0 },
    ],
  },

  // ... outras perguntas ...
];

const Forms_tea_2: React.FC = () => {
  const [respostas, setRespostas] = useState<{ [key: string]: number }>({});

  const handleRespostaChange = (pergunta: string, valor: number) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: valor,
    }));
  };

  const calcularTotalPorArea = (area: string) => {
    const perguntasArea = perguntas.filter((perguntaObj) => perguntaObj.area === area);
    const total = perguntasArea.reduce((acc, perguntaObj) => {
      const resposta = respostas[`pergunta${perguntas.indexOf(perguntaObj) + 1}`] || 0;
      return acc + resposta;
    }, 0);
    return total;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const todasRespondidas = perguntas.every((perguntaObj, index) => {
      const perguntaKey = `pergunta${index + 1}`;
      return perguntaKey in respostas;
    });

    if (todasRespondidas) {
      const respostaString = perguntas
        .map((perguntaObj, index) => {
          const perguntaKey = `pergunta${index + 1}`;
          const resposta = respostas[perguntaKey] || 0;
          const respostaIndex = perguntaObj.respostas.findIndex((opcao) => opcao.valor === resposta);
          return `${index + 1}. ${perguntaObj.pergunta}\nResposta: ${perguntaObj.respostas[respostaIndex].descricao}\n`;
        })
        .join('\n');

      const soma = Object.values(respostas).reduce((acc, curr) => acc + curr, 0);
      const respostaFinal = `${respostaString}\nTotal: ${soma}`;

      // Calcular totais por área
      const areas = Array.from(new Set(perguntas.map((perguntaObj) => perguntaObj.area)));
      const totaisPorArea = areas.map((area) => ({
        area,
        total: calcularTotalPorArea(area),
      }));

      const respostaFinalComTotais = `${respostaFinal}\n\nTotais por Área:\n${totaisPorArea
        .map((item) => `Subtotal de ${item.area}: ${item.total}`)
        .join('\n')}`;

      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(respostaFinalComTotais);
      link.download = 'Pontos_RAADS–R.txt';
      link.click();
    }
  };

  return (
    <Container>
      <ContentHeader title="A escala de diagnóstico Ritvo Autism Asperger revisada (RAADS-R)" lineColor="#fff" />
      <form onSubmit={handleSubmit}>
        <p className="pergunta-container">
        O Ritvo Autism Asperger Diagnostic Scale–Revised (RAADS–R) é um questionário de autorrelato projetado para identificar adultos autistas que “escapam do diagnóstico” devido a uma apresentação de nível subclínico.
        </p>
        {perguntas.map((perguntaObj, index) => {
          const perguntaKey = `pergunta${index + 1}`;
          return (
            <div className="pergunta-container" key={index}>
              <div className="pergunta-video">
                <ReactPlayer url={perguntaObj.video} controls={true} />
                <label>{`${index + 1}. ${perguntaObj.pergunta}`}</label>
              </div>
              <ul className="resposta-container">
                {perguntaObj.respostas.map((opcao, respostaIndex) => (
                  <li key={respostaIndex}>
                    <label>
                      <input
                        type="radio"
                        name={perguntaKey}
                        value={opcao.valor}
                        onChange={(e) => handleRespostaChange(perguntaKey, parseInt(e.target.value))}
                      />
                      {opcao.descricao}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <Button type="submit">Resultado</Button>
      </form>
    </Container>
  );
};

export default Forms_tea_2;

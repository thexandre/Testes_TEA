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

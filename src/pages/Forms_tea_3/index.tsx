


import React, { useState } from 'react';

import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';
import './Formulario.css';
import ReactPlayer from 'react-player';

const perguntas = [ {video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Não consegue prestar muita atenção a detalhes ou comete erros por descuido nos trabalhos da escola ou tarefas.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Tem dificuldade para manter a atenção em tarefas ou atividades de lazer.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Parece não estar ouvindo quando se fala diretamente com você',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Não segue instruções até o fim e não termina tarefas e obrigações.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Tem dificuldade para organizar tarefas e atividades.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Evita, não gosta ou se envolve contra a vontade em tarefas que exigem esforço mental prolongado.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Perde coisas necessárias para atividades do cotidiano.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Distrai-se com estímulos externos.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Mexe com as mãos ou os pés ou se remexe na cadeira.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Sai do lugar em situações em que se espera que fique sentado.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Corre de um lado em situações em que isso é inapropriado.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Tem dificuldade para envolver-se em atividades de lazer de forma calma.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Não para ou costuma estar a “mil por hora”.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Fala em excesso.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Responde às perguntas de forma precipitada antes que elas tenham sido terminadas.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Tem dificuldade para esperar sua vez.',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Interrompe os outros ou se intromete',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Interrompe os outros ou se intromete',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},{video: 'https://www.tiktok.com/@elizangilamoreiraleite/video/7238269451869670662?is_from_webapp=1&sender_device=pc',
pergunta: 'Interrompe os outros ou se intromete',
respostas: ['Nem um pouco', 'Só um pouco', 'Bastante', 'Demais'],
},
  // ... perguntas ...
];

const Forms_tea_3: React.FC = () => {
  const [respostas, setRespostas] = useState({});
  const [aviso, setAviso] = useState(false); // Estado para controlar a exibição do aviso

  const handleRespostaChange = (pergunta: string, resposta: string) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: resposta,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Verifica se todas as perguntas foram respondidas
    const todasRespondidas = perguntas.every((perguntaObj, index) => {
      const perguntaKey = `pergunta${index + 1}`;
      return perguntaKey in respostas;
    });

    if (todasRespondidas) {
      // Cria uma string formatada com as respostas
      const respostaString = Object.entries(respostas)
        .map(([pergunta, resposta]) => `${pergunta}: ${resposta}`)
        .join('\n');

      // Cria um elemento <a> com o conteúdo do arquivo de texto
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(respostaString);
      link.download = 'respostas.txt';

      // Simula um clique no link para iniciar o download
      link.click();

      setAviso(false); // Remove o aviso se estiver sendo exibido
    } else {
      setAviso(true); // Exibe o aviso se alguma pergunta não foi respondida
    }
  };

  return (
    <Container>
      <ContentHeader title="Questionário TDHA (adaptado de Bordini)" lineColor="#fff" />
      <form onSubmit={handleSubmit}>
        <p className="pergunta-container">
          OBS.: para cada item, escolha a coluna que melhor descreve o(a) aluno(a) e marque um X
        </p>
        {perguntas.map((perguntaObj, index) => {
          const perguntaKey = `pergunta${index + 1}`;
          const isPerguntaRespondida = perguntaKey in respostas;
          const perguntaClassName = isPerguntaRespondida ? 'pergunta-container' : 'pergunta-container sem-resposta';
          return (
            <div className={perguntaClassName} key={index}>
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
                        name={perguntaKey}
                        value={resposta}
                        onChange={(e) => handleRespostaChange(perguntaKey, e.target.value)}
                      />
                      {resposta}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        {aviso && <p className="aviso">Por favor, responda todas as perguntas.</p>}
        <p className="pergunta-container">
          FONTE: adaptado de Bordini et al. (2010) (segundo os autores: versão em português validada por Mattos et
          al., 2005) Adaptada para Adultos
        </p>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default Forms_tea_3;
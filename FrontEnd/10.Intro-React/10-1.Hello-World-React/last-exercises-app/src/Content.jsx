import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className='myContent'>
        {conteudos.map(({ conteudo, status, bloco }) => (
          <div key={conteudo} className='contBlock'>
            <h4>{`O conteúdo é: ${conteudo}`}</h4>
            <p>{`Status: ${status}`}</p>
            <p>{`Bloco: ${bloco}`}</p>
          </div>
        ))}
      </div>
    );
  } 
}

export default Content;
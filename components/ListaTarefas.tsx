import { useState } from 'react';
import { Like } from './Like';

export function ListaTarefas() {
  const [lista, setLista] = useState(['Banana', 'Maça', 'Sorvete']);

  const [text, setText] = useState('');

  function Adicionar() {
    const listaAdicionada = [text, ...lista];
    setLista(listaAdicionada);
    setText('');
  }

  function Remover(value: string) {
    const listaAtualizada = lista.filter((x) => x != value);
    setLista(listaAtualizada);
  }

  let listaExibicao = lista;
  if (text != '') {
    listaExibicao = lista.filter((x) => x.startsWith(text));
  }

  return (
    <>
      <div>Lista</div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={Adicionar}>Adicionar</button>
      <ul>
        {listaExibicao.map((item) => {
          return (
            <li>
              <Like> {item}</Like>
              <button onClick={() => Remover(item)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

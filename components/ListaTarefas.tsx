import { useState } from 'react';
import { Like } from './Like';

export function ListaTarefas() {
  const [lista, setLista] = useState(['Banana', 'Maça', 'Sorvete']);
  return (
    <>
      <div>Lista</div>
      <ul>
        {lista.map((item) => {
          return (
            <li>
              <Like> {item}</Like>
            </li>
          );
        })}
      </ul>
    </>
  );
}

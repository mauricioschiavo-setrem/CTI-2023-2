import { useState } from 'react';

export interface Amigo {
  nome: string;
  telefone: string;
}

export function ListaAmigos() {
  const [amigos, setAmigos] = useState([] as Amigo[]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  function AdicionarAmigo() {
    const novoAmigo = { nome: nome, telefone: telefone };
    const novaLista = [...amigos, novoAmigo];
    setAmigos(novaLista);
    setNome('');
  }

  function RemoverAmigo(amigo: Amigo) {
    const novaLista = amigos.filter((x) => x != amigo);
    setAmigos(novaLista);
  }

  return (
    <>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button onClick={AdicionarAmigo}>Adicionar</button>
      <ul>
        {amigos.map((amigo) => {
          return (
            <li>
              {amigo.nome} ({amigo.telefone}){' '}
              <span
                onClick={() => {
                  RemoverAmigo(amigo);
                }}> X </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

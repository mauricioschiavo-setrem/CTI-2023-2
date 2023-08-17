import { useState } from 'react';
import { Amigo } from './Amigo';

export interface AmigoInterface {
  nome: string;
  telefone: string;
}

export function ListaAmigos() {
  const [amigos, setAmigos] = useState([] as AmigoInterface[]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  function AdicionarAmigo() {
    const novoAmigo = { nome: nome, telefone: telefone };
    const novaLista = [...amigos, novoAmigo];
    setAmigos(novaLista);
    setNome('');
  }

  function RemoverAmigo(amigo: AmigoInterface) {
    const novaLista = amigos.filter((x) => x != amigo);
    setAmigos(novaLista);
  }

  return (
    <>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button onClick={AdicionarAmigo}>Adicionar</button>
      {amigos.map((amigo) => {
        return <Amigo amigo={amigo} />;
      })}
    </>
  );
}

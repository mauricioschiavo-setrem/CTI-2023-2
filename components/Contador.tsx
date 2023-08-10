import { useState, useEffect } from 'react';
import { Like } from './Like';

export interface ContadorProps {
  valorInicial: number;
}

export function Contador({ valorInicial }: ContadorProps) {
  const [valor, setValor] = useState(valorInicial);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  // function() { }
  // () => {}

  useEffect(() => {
    if (valor >= 20) {
      alert(`Show! Você chegou em ${valor}`);
    }
  }, [valor]);

  function eMaiorQueDez() {
    return valor >= 10;
  }

  return (
    <div>
      <h2 style={{ color: valor > 10 ? 'red' : 'blue' }}>Contador = {valor}</h2>
      {eMaiorQueDez() && <h3>Mais que 10</h3>}
      <button onClick={Remover}>Remover</button>
      <button onClick={Adicionar}>Adicionar</button>
      <Like>
        Aqui o <b>filho</b>
      </Like>
    </div>
  );
}

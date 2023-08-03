import { useState } from 'react';

export interface ContadorProps {
  valorInicial: number;
}

export function Contador({ valorInicial }: ContadorProps) {
  const [valor, setValor] = useState(valorInicial);

  function Adicionar() {
    setValor(valor + 1);
  }

  return (
    <div>
      <h2>Contador = {valor}</h2>
      <button onClick={Adicionar}>Adicionar</button>
    </div>
  );
}

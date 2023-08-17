import { AmigoInterface } from './ListaAmigos';

import style from './Amigo.module.css';

export interface AmigoProps {
  amigo: AmigoInterface;
}

export function Amigo({ amigo }: AmigoProps) {
  return (
    <>
      <div className={style.amigo}>
        <h3>{amigo.nome}</h3>
        <p>{amigo.telefone}</p>
      </div>
    </>
  );
}

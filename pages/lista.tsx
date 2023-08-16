import Link from 'next/link';
import { ListaTarefas } from '../components/ListaTarefas';

export default () => {
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <Link href="/">Voltar para home</Link>
      <ListaTarefas />
    </>
  );
};

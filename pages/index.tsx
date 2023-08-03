import Head from 'next/head';
import { Contador } from '../components/Contador';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      Olá turma!
      <Contador valorInicial={1} />
      <Contador valorInicial={10} />
    </div>
  );
}

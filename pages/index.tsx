import Head from 'next/head';
import { Contador } from '../components/Contador';
import styles from '../styles/Home.module.css';
import { Like } from '../components/Like';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      Olá turma!
      <Link href="/lista">Ver a lista</Link>
      <Contador valorInicial={1} />
      <Contador valorInicial={10} />
      //https://github.com/mauricioschiavo-setrem/CTI-2023-2
    </div>
  );
}

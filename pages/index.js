import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector } from "react-redux";

export default function Home() {
  const { todos } = useSelector((state) => {
    return state.todo;
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div style={{ textAlign: "left", margin: "0 auto", width: "100%" }}>
          <h2>Todos</h2>
          <div>
            {todos.map((todo) => {
              return <pre>{JSON.stringify(todo, null, 2)}</pre>;
            })}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

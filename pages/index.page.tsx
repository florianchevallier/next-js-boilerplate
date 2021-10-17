import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from 'styles/pages/home/_home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Flo&apos;s repo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      On démarre !
      <Link href="/login"> Go au login</Link>
    </div>
  )
}

export default Home
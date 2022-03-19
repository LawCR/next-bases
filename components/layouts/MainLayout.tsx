
import { FC } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'

export const MainLayout: FC = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}

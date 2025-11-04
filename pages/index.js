import Hero from '@/components/Hero'
import HomePage from '@/components/HomePage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | A & T Buildcon</title>
        <meta name="description" content="A & T Buildcon - Engineers and Builders" />
      </Head>
      <main className="pt-20">
        <Hero/>
      </main>
      <HomePage/>
      
    </>
  )
}

import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Idle Brewery</title>
        <meta
          name="description"
          content="Idle Brewery is a game where you can build your own brewery and become the best brewer in the world!"
        />
        <link rel="icon" href="/beer.png" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

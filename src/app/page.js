import Head from 'next/head'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero/index'
import Footer from './Component/Footer/index'



export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <link rel='icon' href='/pro.ico'/>
      </Head>
      <Navbar/>
      <Hero />
      <Footer />
    </div>
  );
};


import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChirpIt!</title>
        <meta name="description" content="Something on your mind? Chirp it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold">ChirpIt!</h1>
        <pre className="mt-4">Under construction</pre>
      </main>
    </>
  );
};

export default Home;

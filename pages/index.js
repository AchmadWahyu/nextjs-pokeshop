import Head from 'next/head';
import PokeCard from '../components/PokeCard';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();

  return {
    props: {
      pokemonList: data.results,
    },
  };
}

export default function Home({ pokemonList = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Search Pokemon</title>
        <meta
          name="Search Pokemon"
          content="Search the best pokemon that match with you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap flex-row">
        {pokemonList.map((pokemon, index) => (
          <PokeCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
        ))}
      </main>
    </div>
  );
}

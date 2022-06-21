import Image from 'next/image';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
}

const TYPES_MAP = ['neutral', 'primary', 'secondary', 'accent'];

export default function PokemonDetailPage({ pokemon }) {
  const baseExperiencePercent = Math.floor(
    (pokemon.base_experience / 300) * 100
  );

  const randomBadge = () => {
    const randomInt = Math.floor(Math.random() * TYPES_MAP.length);

    return TYPES_MAP[randomInt];
  };
  return (
    <div className="card-container">
      <div className={`card w-96 bg-base-100 shadow-xl m-auto`}>
        <figure className={`px-10 pt-10`}>
          <Image
            src={pokemon.sprites.front_default || pokemon.sprites.front_femalie}
            alt={pokemon.name}
            height={200}
            width={200}
          />
        </figure>
        

        <div className="card-body items-center text-center">
          <h2 classNames="card-title">{pokemon.name}</h2>

          <section className="flex flex-row">
            <div className="stat-container">
              <div className="stat">
                <div className="stat-title">Height</div>
                <div className="stat-value">{pokemon.height}</div>
                <div className="stat-desc">Lbs</div>
              </div>

              <div className="stat">
                <div className="stat-title">Weight</div>
                <div className="stat-value">{pokemon.weight}</div>
                <div className="stat-desc">Lbs</div>
              </div>
            </div>

            <div className="stat-container">
              <div className="base-exp mt-4">
                <h2 className="mb-1">Base Exp</h2>
                <div
                  className="radial-progress text-primary"
                  style={{ '--value': baseExperiencePercent }}
                >
                  {baseExperiencePercent}%
                </div>
              </div>

              <div className="pokemon-type mt-8">
                <h2 className="mb-1">Types</h2>
                {pokemon.types.map((type) => (
                  <div
                    key={type.slot}
                    className={`badge badge-${randomBadge()} badge-outline mr-1`}
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

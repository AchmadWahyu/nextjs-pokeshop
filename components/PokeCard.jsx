import Image from 'next/image';
import Link from 'next/link';

export default function PokeCard(props) {
  const { name, url } = props;

  const pokemonId = url.slice(34).replace('/', '');

  return (
    <Link href={`/pokemon/${pokemonId}`}>
      <div className="card w-80 bg-base-100 shadow-xl image-full m-4 cursor-pointer">
        <figure>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt={name}
            layout="fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
}

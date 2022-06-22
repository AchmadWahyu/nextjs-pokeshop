import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps(context) {
  const res = await fetch(
    'https://gist.githubusercontent.com/AchmadWahyu/53e5f00b99b332e775a915d50e7ddfbd/raw/'
  );

  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function AboutUs({ data }) {
  const { title, description, teams = [] } = data;

  return (
    <div className="container">
      <Head>
        <title>About Us</title>
        <meta name="About Us" content="Cool team behind the web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="text-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          {title}
        </h2>
        <p className="text-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          {description}
        </p>
        {teams.map((contributor) => (
          <div
            className="card w-96 bg-base-100 shadow-xl mx-auto my-4"
            key={contributor.id}
          >
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <Image
                    src={contributor.img}
                    alt={contributor.name}
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{contributor.name}</h2>
              <p>{contributor.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Chat with me!</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

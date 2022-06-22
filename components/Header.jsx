import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 text-center">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            Home
          </a>
        </Link>
      </div>
      {router.pathname === '/about-us' ? (
        <div className="flex-1 justify-center">
          <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            SSG
          </h2>
        </div>
      ) : (
        <div className="flex-1 justify-center">
          <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            SSR
          </h2>
        </div>
      )}
      <div className="flex-1">
        <Link href="/about-us">
          <a className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            About Us
          </a>
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-center">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            Home
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/about-us">
          <a className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            About Us
          </a>
        </Link>
      </div>
    </div>
  );
}

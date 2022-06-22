import Link from 'next/link';

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-center">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </Link>
    </div>
  );
}

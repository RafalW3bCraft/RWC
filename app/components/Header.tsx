import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide">Rafal // Cyber Analyst</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

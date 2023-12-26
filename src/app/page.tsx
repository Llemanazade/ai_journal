import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-24 bg-black text-white gap-8">
      <div className="w-full max-w-[50%] flex flex-col gap-8 items-center text-center justify-center mx-auto">
        <h1 className="text-6xl">The best journal app ever. (source: trust me bruh)</h1>
        <p className="text-2xl text-white/80">
          An interactive app that can predict your mood based on your journaling entries using ai which you yourself
          were supposed to do.
        </p>
        <div>
          <Link href={'/journal'}>
            <button className="text-xl bg-indigo-400 px-4 py-2 rounded-lg hover:bg-indigo-600">get started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

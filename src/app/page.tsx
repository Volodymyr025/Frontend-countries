import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/assets/countries-in-the-world.jpg')] bg-cover bg-center bg-no-repeat">
      <Link href="/countries">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Available countries
        </button>
      </Link>
    </main>
  );
}

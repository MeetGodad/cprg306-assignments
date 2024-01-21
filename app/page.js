import Link from "next/link";

export default function Page() {
  return(
    <main className="container mx-auto p-4 bg-gray-200 min-h-screen">
    <h1 className="text-4xl font-extrabold text-blue-500 mb-8">CPRG-306: Web Development 2 - Assignments</h1>
    <Link href="week-2" className="text-blue-500 hover:text-green-500 transition duration-500">Week 2 Assignments</Link>
  </main>
  );
};
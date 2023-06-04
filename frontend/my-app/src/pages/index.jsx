import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button
        className="bg-gray-900 text-white p-2 rounded-lg"
        onClick={() => router.push("/protected/ruta")}
      >
        Protected Ruta
      </button>
    </main>
  );
}

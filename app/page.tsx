import HomePage from "@/components/HomePage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex-col items-center flex w-full justify-center">
      <HomePage />
      <Link
        href={
          "https://www.facebook.com/Uraminformationtechnology?mibextid=LQQJ4d"
        }
      >
        <h3 className="text-[blue]">Developed by UramIT Eg</h3>
      </Link>
    </main>
  );
}

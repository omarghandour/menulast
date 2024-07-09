import HomePage from "@/components/HomePage";
import Link from "next/link";
import jj from "../public/home.png";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="h-[100svh] flex-col items-center flex justify-between w-full bg-[url('../public/home.png')] bg-center bg-cover">
      {/* <HomePage /> */}
      <Link prefetch={true} href={"/menu"} className="mt-16">
        <Button className="bg-white text-black p-[25px]">
          SKIP TO MENU <br />
          انتقل إلى القائمة
        </Button>
      </Link>
      <Link
        className="mb-2"
        href={
          "https://www.facebook.com/Uraminformationtechnology?mibextid=LQQJ4d"
        }
      >
        <h3 className="text-white">
          Developed by <span className="text-[blue]">UramIT Eg</span>
        </h3>
      </Link>
    </main>
  );
}

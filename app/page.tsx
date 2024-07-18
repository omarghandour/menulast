import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import instagram from "../public/instagram-svgrepo-com.svg";
import tiktok from "../public/tiktok-svgrepo-com.svg";
import location from "../public/location.svg";
export default function Home() {
  return (
    <main className="h-[100svh] flex-col items-center flex justify-between w-full bg-[url('../public/home1.png')] bg-center bg-cover">
      {/* <HomePage /> */}
      <Link prefetch={true} href={"/menu"} className="mt-16">
        <Button className="bg-white text-black p-[25px]">
          SKIP TO MENU <br />
          انتقل إلى قائمة المنيو
        </Button>
      </Link>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-3 mb-3 mt-[10px]">
            <Link
              href={
                "https://www.instagram.com/pastaderoma?igsh=MW16cHljM2owa28zcQ=="
              }
            >
              <Image src={instagram} width={25} height={25} alt="" />
            </Link>
            <Link
              href={"https://www.tiktok.com/@pastaderome28?_t=8nT15UtLrh2&_r=1"}
            >
              <Image src={tiktok} width={25} height={25} alt="" />
            </Link>
            <Link
              href={
                "https://maps.app.goo.gl/Z9M6YszpyVbDxGtv8?g_st=com.google.maps.preview.copy"
              }
            >
              <Image src={location} width={25} height={25} alt="" />
            </Link>
          </div>
          <a href="tel:0500643218">
            <Button className="bg-[#86794c] tex-white font-bold">
              Contact Us <span className="px-1">تواصل معنا</span>
            </Button>
          </a>
        </div>
        <Link
          className="mb-2"
          href={
            "https://www.facebook.com/Uraminformationtechnology?mibextid=LQQJ4d"
          }
        >
          <h3 className="text-white">
            Developed by <span className="text-[#679efc] ml-1"> UramIT Eg</span>
          </h3>
        </Link>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import instagram from "../public/instagram-svgrepo-com.svg";
import facebook from "../public/facebook-svgrepo-com.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Menu = () => {
  const nav: any = useRef<HTMLDivElement>(null);
  const [navV, setNaV] = useState<any>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setNaV(entry.isIntersecting);
    });
    observer.observe(nav.current);
  }, []);

  return (
    <div className="h-full  flex justify-center flex-col overflow-x-hidden">
      <div className="h-[500px] bg-[url(https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/restaurants/-_a.toulanwagyu.sa_16623608132985244.jpg)] bg-contain z-[3] absolute top-[-200px]  left-0 right-0  "></div>{" "}
      <div
        className="flex justify-center flex-col pt-64 z-[17] items-center
      "
      >
        <div className="mb-5">
          <Image
            className="rounded-full"
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-777ezCUIDfs%2FWmMN8OFSNoI%2FAAAAAAAABlI%2Fds7FUC3ec3UcNZmhpR0Dx5-S-hUkeMb8gCLcBGAs%2Fs1600%2Flionel-messi-4500x3000-soccer-football-the-best-players-2016-4k-14581.jpg&f=1&nofb=1&ipt=b9ca74bb24467e130456307826cba2f9f467b58692c8ecad15161b61b48a9536&ipo=images"
            }
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div>
          <h4 className="text-[#86794c] font-mono font-semibold text-2xl">
            Pasta De Roma
          </h4>
        </div>
        <div className="flex gap-3 mb-5">
          <Image src={instagram} width={25} height={25} alt="" />
          <Image src={facebook} width={25} height={25} alt="" />
        </div>
      </div>
      <div className="overflow-x-scroll h-24">
        <div className={`overflow-x-scroll `} ref={nav}>
          <div
            className={`flex overflow-x-scroll  h-24 w-[130%] text-[#86794c] text-center ${
              navV
                ? ""
                : "fixed top-0 z-50 left-0 right-0 h-fit outline-none w-[95%] mb-5 mx-auto scr   p-1 bg-black "
            }`}
          >
            <div
              className={`flex justify-around${
                navV
                  ? " overflow-x-scroll h-full  w-full items-center"
                  : "  overflow-x-scroll gap-5 h-fit outline-none"
              }`}
            >
              {" "}
              <div className="h-20 w-20 flex items-center">
                <Link href={"#m1"}>
                  <Image
                    className="rounded-full"
                    src="https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/categories/burger_16720493443112722.jpg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  Stack
                </Link>
              </div>
              <div className="h-20 w-20 flex items-center">
                <Link href={"#m1"}>
                  <Image
                    className="rounded-full"
                    src="https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/categories/burger_16720493443112722.jpg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  Stack
                </Link>
              </div>
              <div className="h-20 w-20 flex items-center">
                <Link href={"#m1"}>
                  <Image
                    className="rounded-full"
                    src="https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/categories/burger_16720493443112722.jpg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  Stack
                </Link>
              </div>
              <div className="h-20 w-20 flex items-center">
                <Link href={"#m1"}>
                  <Image
                    className="rounded-full"
                    src="https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/categories/burger_16720493443112722.jpg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  Stack
                </Link>
              </div>
              <div className="h-20 w-20 flex items-center">
                <Link href={"#m1"}>
                  <Image
                    className="rounded-full"
                    src="https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1657715983_7yju44/categories/burger_16720493443112722.jpg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  Stack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

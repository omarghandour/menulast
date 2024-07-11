"use client";
import saudi from "../public/flag-for-flag-saudi-arabia-svgrepo-com.svg";
import UK from "../public/flag-for-flag-united-kingdom-svgrepo-com.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCookie, setCookie } from "@/app/cookie/setCookie";
import Image from "next/image";
import { useEffect, useState } from "react";
const Lang = () => {
  const [en, setEn] = useState();
  const ss = async () => {
    const cc: any = await getCookie();
    setEn(cc);
  };
  useEffect(() => {
    ss();
  });
  return (
    <div className="z-10">
      <Select
        onValueChange={(e: string) => {
          setCookie(e);
          console.log(console.log(e));
        }}
      >
        <SelectTrigger className="w-full bg-[#86794c] text-white">
          <SelectValue placeholder={en === "english" ? "Language" : "اللغة"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{en === "english" ? "Language" : "اللغة"}</SelectLabel>
            <SelectItem value="arabic" className="w-full">
              <div className="flex items-center gap-5 justify-between w-full">
                <Image src={saudi} width={30} height={30} alt="" />
                <div>AR</div>{" "}
              </div>
            </SelectItem>
            <SelectItem value="english">
              <div className="flex items-center gap-5 justify-between w-full">
                <Image src={UK} width={30} height={30} alt="" /> <div>ENG</div>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Lang;

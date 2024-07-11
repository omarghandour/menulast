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
import { setCookie } from "@/app/cookie/setCookie";
import Image from "next/image";
const Lang = () => {
  return (
    <div className="z-10">
      <Select
        onValueChange={(e: string) => {
          setCookie(e);
          console.log(console.log(e));
        }}
      >
        <SelectTrigger className="w-full bg-[#86794c] text-white">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="arabic">
              <div className="flex items-center gap-5">
                <div>AR</div>{" "}
                <Image src={saudi} width={50} height={50} alt="" />
              </div>
            </SelectItem>
            <SelectItem value="english">
              <div className="flex items-center gap-5">
                <div>ENG</div> <Image src={UK} width={50} height={50} alt="" />
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Lang;

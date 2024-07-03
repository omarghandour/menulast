import Menu from "@/components/Menu";
import Sections from "@/components/Sections";
import React from "react";

const page = () => {
  return (
    <main className="bg-black h-full flex flex-col gap-5 justify-center">
      <Menu />
      <Sections />
    </main>
  );
};

export default page;

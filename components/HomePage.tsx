import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import homeLogo from "../public/pastaderoma.jpeg";
const HomePage = () => {
  return <div className="h-[95svh]"></div>;
};

export default HomePage;

// <div>
//   <div className="h-[500px] bg-black z-[-1] absolute top-[-200px]  left-0 right-0  [transform:skewY(-10deg)]"></div>{" "}
//   {/* bg */}
//   <div className="flex flex-col items-center mt-14 ">
//     <div className="text-xl mb-5">
//       <h1 className="text-white">PASTA DE ROME</h1>
//     </div>
//     <div className="mb-5">
//       <Link prefetch={true} href={"/menu"}>
//         <Button className="bg-white text-black px-5">SKIP TO MENU</Button>
//       </Link>
//     </div>
//     <div>
//       <Image
//         src={homeLogo}
//         width={350}
//         height={350}
//         alt=""
//         className="rounded-md"
//       />
//     </div>
//     <div className="text-center my-10 mx-auto max-w-[350px]">
//       {/* <p className="text-[#616568] opacity-80 text-[14px] leading-none">
//       </p> */}
//     </div>
//   </div>
// </div>

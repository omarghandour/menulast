import Link from "next/link";
import Image from "next/image";
import instagram from "../public/instagram-svgrepo-com.svg";
import tiktok from "../public/tiktok-svgrepo-com.svg";
import location from "../public/location.svg";
import menu from "../public/menu-navigation-grid-1528-svgrepo-com.svg";
import logo from "../public/pdr.png";
import { Button } from "@/components/ui/button";
export default function Home() {
  const data1: any = [
    {
      id: 1,
      title: "Menu - قائمة الطلب",
      image: menu,
      link: "/menu",
      alt: "Menu logo",
    },
  ];
  const data: any = [
    {
      id: 1,
      title: "Instagram - انستجرام",
      image: instagram,
      link: "https://www.instagram.com/pastaderoma?igsh=MW16cHljM2owa28zcQ==",
      alt: "Instagram Logo",
    },
    {
      id: 2,
      title: "TikTok - تيكتوك",
      image: tiktok,
      link: "https://www.tiktok.com/@pastaderome28?_t=8nT15UtLrh2&_r=1",
      alt: "TikTok Logo",
    },
    {
      id: 3,
      title: "Location - الموقع",
      image: location,
      link: "https://maps.app.goo.gl/Z9M6YszpyVbDxGtv8?g_st=com.google.maps.preview.copy",
      alt: "Location Logo",
    },
    // {
    //   id: 4,
    //   title: "Contact - تواصل معنا",
    //   image: gmail,
    //   link: "mailto:info@pastaderoma.com",
    //   alt: "Email Logo",
    // },
  ];
  return (
    <main className="bg-[#252525] h-[100svh] flex flex-col justify-end items-center">
      <div className="h-full flex-col flex items-center justify-evenly gap-1 mb-8">
        <Link
          href={data1[0].link}
          className="flex gap-3 mb-3 backdrop-blur-md bg-white/50  shadow-white p-3 rounded-2xl w-[90%] trann duration-1000 items-center justify-between"
        >
          <h2>{data1[0].title}</h2>
          <Image
            src={data1[0].image}
            alt={data1[0].alt}
            width={30}
            height={30}
          />
        </Link>
        <div className=" ">
          <Image src={logo} alt="" width={300} height={300} />
        </div>
        <h1 className="text-center text-white  font-bold text-[16px]">
          شارع زامل العبدالله السليم،, Unaizah 56241, Saudi Arabia
        </h1>
        <div className="w-full center flex-col">
          {data.map((item: any) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex gap-3 mb-3 backdrop-blur-md bg-white/50  shadow-white p-3 rounded-2xl w-[90%] trann duration-1000 items-center justify-between"
            >
              <h2>{item.title}</h2>
              <Image src={item.image} alt={item.alt} width={30} height={30} />
            </Link>
          ))}
          <a href="tel:0500643218" className="w-[90%] trann">
            <Button className="backdrop-blur-md bg-white/50  shadow-white tex-white font-bold w-full rounded-2xl text-black">
              Contact Us <span className="px-1">تواصل معنا</span>
            </Button>
          </a>
        </div>
      </div>
    </main>
    // <main className="h-[100svh] flex-col items-center flex justify-between w-full bg-[url('../public/home1.png')] bg-center bg-cover">
    //   {/* <HomePage /> */}
    //   <Link prefetch={true} href={"/menu"} className="mt-16">
    //     <Button className="bg-white text-black p-[25px]">
    //       SKIP TO MENU <br />
    //       انتقل إلى قائمة المنيو
    //     </Button>
    //   </Link>
    //   <div className="flex flex-col gap-8 items-center">
    //     <div className="flex flex-col justify-center items-center">
    //       <div className="flex gap-3 mb-3 mt-[10px]">
    //         <Link
    //           href={
    //             "https://www.instagram.com/pastaderoma?igsh=MW16cHljM2owa28zcQ=="
    //           }
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="25"
    //             height="25"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <g fill="#fff">
    //               <path
    //                 fillRule="evenodd"
    //                 d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
    //                 clipRule="evenodd"
    //               ></path>
    //               <path d="M18 5a1 1 0 100 2 1 1 0 000-2z"></path>
    //               <path
    //                 fillRule="evenodd"
    //                 d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622zM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 00-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 001.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 001.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 00-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3z"
    //                 clipRule="evenodd"
    //               ></path>
    //             </g>
    //           </svg>
    //         </Link>
    //         <Link
    //           href={"https://www.tiktok.com/@pastaderome28?_t=8nT15UtLrh2&_r=1"}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="25"
    //             height="25"
    //             fill="#fff"
    //             stroke="#86794c"
    //             viewBox="0 0 32 32"
    //           >
    //             <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
    //           </svg>
    //         </Link>
    //         <Link
    //           href={
    //             "https://maps.app.goo.gl/Z9M6YszpyVbDxGtv8?g_st=com.google.maps.preview.copy"
    //           }
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="25"
    //             height="25"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <g
    //               stroke="#fff"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //             >
    //               <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8z"></path>
    //               <path d="M12 12a2 2 0 100-4 2 2 0 000 4z"></path>
    //             </g>
    //           </svg>
    //         </Link>
    //       </div>
    //       <a href="tel:0500643218">
    //         <Button className="bg-[#009e4e] tex-white font-bold">
    //           Contact Us <span className="px-1">تواصل معنا</span>
    //         </Button>
    //       </a>
    //     </div>
    //     <Link
    //       className="mb-2"
    //       href={
    //         "https://www.facebook.com/Uraminformationtechnology?mibextid=LQQJ4d"
    //       }
    //     >
    //       <h3 className="text-white">
    //         Developed by <span className="text-[#679efc] ml-1"> UramIT Eg</span>
    //       </h3>
    //     </Link>
    //   </div>
    // </main>
  );
}

"use server";
import { cookies } from "next/headers";

const setCookie = async (data: any) => {
  const coo = cookies().set({
    name: "language",
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: true,
    secure: true,
    value: data,
  });
};
const getCookie = async () => {
  const coo = cookies().get("language");
  console.log(coo?.value);

  return coo?.value;
};
export { setCookie, getCookie };

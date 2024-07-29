"use client"
import Head from 'next/head'
import { headers } from "next/headers";

const Page = () => {
  //https://stackoverflow.com/a/77214970
  //https://velog.io/@jay/Next.js-13-master-course-middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  console.log(pathname); ///
  
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <div>홈</div>
    </>
  );
};
export default Page;

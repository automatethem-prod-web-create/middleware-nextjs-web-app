간단 설명

​

예시로 현재 페이지 패스 가져오기

​

화면 캡처

​


​

상세 설명

​

middleware.js 에서 현재 페이지 패스 가져와 headers  에 세팅후  app/page.js 에서 조회

​

소스 코드

middleware.js
```
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
      request: {
          headers: requestHeaders,
      }
  });
}
```

app/page.js
```
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
```

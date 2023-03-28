import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children }: any) {
  return (
    <>
      <Head>
        <title>Next Course</title>
        <meta name="keywords" content="next,NextJs,react,javascript,js" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="this is youtube tutorial for next js"
        />
      </Head>
      <nav>
        <Link href="/" legacyBehavior>
          <a>home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a> about</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a> posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0px;
          top: 0px;
          right: 0px;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-item: center;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}

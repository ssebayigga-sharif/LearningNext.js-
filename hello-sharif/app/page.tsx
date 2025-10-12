import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>welcome home</h1>
      <Link href={"/blog"}>blog</Link>;<Link href={"/about"}>about</Link>;
      <Link href={"/products"}>products</Link>;
    </>
  );
}

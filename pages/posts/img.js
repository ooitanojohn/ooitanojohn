import Link from "next/link";
import Image from "next/image";

export default function img() {
  return (
    <>
      <h1>img読み込みあれこれ</h1>
      <Image src="/test1.jpg" alt="test1" width={100} height={100}></Image>
      <p>

      </p>
      <Link href="/posts"><a>index.jsへ</a></Link>
    </>
  )
}
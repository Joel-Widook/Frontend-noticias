import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>ChapinTV</h1>
        <Link href="/news/example">Noticias</Link>
      </div>
    </Fragment>
  );
}

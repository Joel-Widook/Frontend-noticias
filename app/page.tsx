import { Fragment } from "react";

import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <div className="grid lg:grid-cols-[9%_80%_9%] lg:gap-[1%] h-auto p-4 sm:p-10 bg-background rounded-[10px] ">
        <div className="col-span-3 h-[60px] lg:h-[100px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        <div className="hidden lg:block h-[400px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        <div className="col-span-3 lg:col-span-1 flex h-[800px] bg-primary-400"></div>
        <div className="hidden lg:block h-[400px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        <div className="col-span-3 h-[60px] lg:h-[100px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
      </div>
      <div className="fixed bottom-4 right-4 h-[144px] w-[240px] lg:h-[240px] lg:w-[360px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
    </Fragment>
  );
}

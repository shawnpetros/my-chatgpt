"use client";

import Image from "next/image";
import Chat from "@/app/components/Chat";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  const scroll = () => {
    const { offsetHeight, scrollTop, scrollHeight } =
      mainRef.current as HTMLElement;
    if (offsetHeight + scrollTop < scrollHeight) {
      mainRef.current?.scrollTo(0, scrollHeight + 100);
    }
  };

  return (
    <main
      ref={mainRef}
      className="flex flex-grow flex-col m-auto container p-6 pb-0 w-full h-screen overflow-y-auto"
    >
      <header className="flex sm:justify-between sm:items-baseline items-center flex-col gap-2 sm:flex-row sm:gap-0">
        <Image
          src="/logo.svg"
          alt="Shawn-GPT Logo"
          className="dark:text-white text-black"
          width={275 / 2}
          height={25}
          priority
        />
        <p>
          Talk to{" "}
          <span className="text-primary-dark dark:text-primary-light font-bold">
            the Mysterious Code Wizard
          </span>
        </p>
      </header>
      <Chat scroll={scroll} />
    </main>
  );
}

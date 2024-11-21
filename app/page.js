"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// let DotLottieReact;
// import appData from '@/app/assets/web-build.lottie';



export default function Home() {

  // useEffect(() => {
  //   DotLottieReact = import('@lottiefiles/dotlottie-react');
  // })

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900" >
      <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex gap-20 row-start-2 items-center sm:items-start">

          <div className="flex flex-1" >

            <DotLottieReact
              src="/assets/web-build.lottie"
              loop
              autoplay
            />
          </div>

          <div className="p-8 flex flex-1 flex-col self-center bg-slate-800 rounded-2xl" >
            <p className="text-8xl text-white" >Looking to go digital <span className="text-amber-500" >?</span></p>
            <p className="text-6xl mt-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" >Begin with a website</p>
          </div>

        </main>


        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Build
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Check
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Docs
          </a>
        </footer>
      </div>

      <section className="h-screen flex justify-evenly items-center bg-floating-figures bg-no-repeat bg-cover" >

        <div className="w-1/5 bg-pink-400/90 p-8 m-16" >
          <p className="text-2xl font-bold" >More Customers</p>
          <p className="my-8 text-lg">
            Reach more customers and get more business. A website can take your business to more people and be known making it an lead generation magnet. Get attractive quoates on a new website and choose from our variety of
            templates or even make your own! How cool , right ?
          </p>
        </div>

        <div className="w-1/5 bg-indigo-400/90 p-8 pb-12 m-16" >
          <p className="text-2xl font-bold" >Less Efforts</p>
          <p className="my-8 text-lg">
            Just build and put your products and services out there for the world to see. Sell to them or just let them know you exist, Book an appointments or showcase your services the possibilities are endless. All this 
            with minimal intervention from you.
          </p>
        </div>

      </section>

    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function Home() {

  return (
    <div>
      <header>
        <h1>Max Petts</h1>
        <p>A thought-provoking punchline</p>
        <Image src={"/pics/memoji.png"} layout="fill" objectFit="contain" />
      </header>

      <h1>Please note this site is a work in progress</h1>

      <p>
        <strong>Proficient in: </strong>
        Python 3, JS ES6, C++, Java, Swift
      </p>
      <main></main>
    </div>
  );
}

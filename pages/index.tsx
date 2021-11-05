import Image from "next/image";
import React from "react";
import AutoscrollingNouns from "../components/AutoscrollingNouns";

export default function Home() {
  const myNouns = [
    "UI/UX Designer",
    "Mountain Biker",
    "Git Versioner",
    "Terminal Preferer",
    "Full Stack Developer",
    "Linuxer",
    "Designer",
    "Software Engineer",
    "Jailbreaker",
    "Data Processor",
    "Vimer",
    "Detail Stickler",
    "BMXer",
    "Coffee Lover",
    "Can't Giver-uper",
    "iOS Themer",
    "Skier",
    "Mountain Lover",
    "Bang For Bucker",
  ];

  return (
    <>
      <header>
        <h1>Max Petts</h1>
        <p>👋 A thought-provoking punchline</p>
        <Image src={"/pics/memoji.png"} layout="fill" objectFit="contain" />
      </header>

      <div className="postMastHead">
        <AutoscrollingNouns nouns={myNouns} />
      </div>

      <h1>Please note this site is a work in progress</h1>

      <p>
        <strong>Proficient in: </strong>
        Python 3, JS ES6, C++, Java, Swift
      </p>
      <main></main>
    </>
  );
}

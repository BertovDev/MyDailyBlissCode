import React from "react";
import StuffContent from "./StuffContent";
import { Link } from "react-bootstrap-icons";

const stuffArray = [
  {
    link: "https://thedecisionlab.com/biases/the-sunk-cost-fallacy",
    title: "The Sunk Cost Fallacy",
    description:
      "Describes our tendency to follow through on an endeavor if we have already invested time, effort, or money into it",
  },
  {
    link: "https://scented-time-816.notion.site/My-content-gallery-c309a0eda8dc4c57b11587ee5e0e202b?pvs=4",
    title: "Content Gallery",
    description: "A bunch of stuff made by me with and for my own joy",
  },
  {
    link: "https://open.spotify.com/playlist/3LaQ73QJxxVDW0uiRUn84q",
    title: "Playlist solo para hacer PR",
    description: "Me and my friends gym playlist",
  },
  {
    link: "https://scented-time-816.notion.site/Couple-Graphics-and-boring-stuff-but-useful-190af243e11945fc868e8f395c3094be",
    title: "Boring but useful stuff",
    description: "As it says in the title, maybe there might like you",
  },
];

export default function StuffSection() {
  return (
    <section id="STUFF" className="flex-col p-4 md:py-10 hidden">
      <div className="flex flex-col gap-y-3 pl-2 md:text-start mb-4">
        <h2 className="text-4xl md:text-7xl 2xl:text-8xl font-black font-darkerGrote underline underline-offset-8">
          Daily cool things
        </h2>
        <p className="text-base md:text-xl 2xl:text-3xl font-mono text-primary">
          A recopitalion of things that I find cool.
        </p>
      </div>
      <ul className="list-disc flex flex-col gap-y-4">
        {stuffArray.map((el, i) => {
          return (
            <StuffContent
              key={i}
              title={el.title}
              link={el.link}
              description={el.description}
            />
          );
        })}
      </ul>
    </section>
  );
}

import React, { useState } from "react";
import StuffContent from "./StuffContent";
import { Link } from "react-bootstrap-icons";

export default function StuffSection() {
  const [isSpanish,setSpanish] = useState(true)

  const title = isSpanish === true ? "Recopilacion de cosas que encuentro piola" :
    "A recopitalion of things that I find cool."

const stuffArray = [
  {
    link: "https://thedecisionlab.com/biases/the-sunk-cost-fallacy",
    title: isSpanish === false ? "The Sunk Cost Fallacy" : "La falacia del costo hundido",
    description:
      isSpanish === false ?
        "Describes our tendency to follow through on an endeavor if we have already invested time, effort, or money into it" :
      "Describe nuestra tendencia a seguir adelante con un esfuerzo si ya hemos invertido tiempo, esfuerzo o dinero en él",
  },
  {
    link: "https://scented-time-816.notion.site/My-content-gallery-c309a0eda8dc4c57b11587ee5e0e202b?pvs=4",
    title: isSpanish === false ? "Content Gallery" : "Galeria de contenido",
    description: isSpanish === false ?
      "A bunch of stuff made by me with and for my own joy"
     : "Cosas creadas por mí y para mi propia diversión",
  },
  {
    link: "https://open.spotify.com/playlist/3LaQ73QJxxVDW0uiRUn84q",
    title: "Playlist solo para hacer PR",
    description: isSpanish === false ?
      "Me and my friends gym playlist" :
      "Playlist mia y de mis amigos para el gym",
  },
  {
    link: "https://scented-time-816.notion.site/Couple-Graphics-and-boring-stuff-but-useful-190af243e11945fc868e8f395c3094be",
    title: isSpanish === false ? "Boring but useful stuff" : "Info aburrida, pero útil",
    description: isSpanish === false ?
      "As it says in the title, maybe there might like you"
     : "Como dice en el título, puede llegar a serte útil",
  },
];
  return (
    <section id="STUFF" className="flex-col p-4 md:py-10 hidden">
      <div className="flex flex-col gap-y-2 pl-2 md:text-start mb-4">
        <div className="font-mono ">
          <span onClick={() => setSpanish(!isSpanish)} className="underline underline-offset-4 cursor-pointer">
            {isSpanish === false ? <span>Cambiar leng a 🇦🇷</span> :
              <span>Change lang to 🇬🇧</span>
            }
          </span>
        </div>
        <h2 className="text-4xl md:text-7xl 2xl:text-8xl font-black font-darkerGrote underline underline-offset-8">
          Daily cool things 
        </h2>
        <p className="text-base md:text-xl pt-1 2xl:text-3xl font-mono text-primary">
          {title}
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

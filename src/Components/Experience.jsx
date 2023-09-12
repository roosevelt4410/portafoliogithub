import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import spring from "../assets/spring.png";
import java from "../assets/java.png";
import amazon from "../assets/amazon.png";
import typescript from "../assets/typescript.png";
import angular from "../assets/angular.png";
import firebase from "../assets/firebase.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 7,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitLab",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: amazon,
      title: "Amazon web services",
      style: "shadow-white",
    },
    {
      id: 10,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },

    {
      id: 11,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 12,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiencia
          </p>
          <p className="py-6">Estan son las técnologias con las cuales he trabajado...</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

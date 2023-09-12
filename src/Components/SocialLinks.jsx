import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/roosevelt-riobo-b12a38255/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitLab <FaGithub size={30} />
        </>
      ),
      href: "https://gitlab.com/andresr4410",
    },
    {
      id: 3,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/rooseveltandres.riobolopez",
    },
    {
      id: 4,
      child: (
        <>
          UpWork <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://www.upwork.com/freelancers/~016468e1ed10eb6a50",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

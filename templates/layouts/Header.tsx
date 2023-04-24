import React, { FC, useState } from "react";
import IconLogo from "@/public/icons/logo.svg";
import Link from "next/link";
import IconBurgerMenu from "@/public/icons/burger-menu.svg";

const Footer: FC = () => {
  const [open, setOpen] =
    useState<boolean>(false);

  const links = [
    {
      id: 0,
      url: "#projets",
      title: "Projets",
    },
    {
      id: 1,
      url: "#competences",
      title: "Compétences",
    },
    {
      id: 2,
      url: "#temoignages",
      title: "Témoignages",
    },
    {
      id: 3,
      url: "#contact",
      title: "Contact",
    },
  ];

  const handleOpen = () => setOpen(!open);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`header${
        open ? " header-open" : ""
      }`}
    >
      <div className="header-wrapper">
        <Link href="/" className="header-brand">
          <IconLogo />
          <h1>mscholz.dev</h1>
        </Link>

        <button
          className="header-burger"
          onClick={handleOpen}
        >
          <IconBurgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Footer;

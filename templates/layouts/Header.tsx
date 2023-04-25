import React, { FC, useState } from "react";
import Link from "next/link";
import IconLogo from "@/public/icons/logo.svg";
import IconBurgerMenu from "@/public/icons/burger-menu.svg";

const Header: FC = () => {
  const [open, setOpen] =
    useState<boolean>(false);

  const links = [
    {
      id: 0,
      url: "#presentation",
      title: "👨‍💻 Présentation",
    },
    {
      id: 1,
      url: "#projets",
      title: "⚡ Projets",
    },
    {
      id: 2,
      url: "#competences-techniques",
      title: "🧠 Compétences techniques",
    },
    {
      id: 3,
      url: "#formations",
      title: "💡 Formations",
      // TODO: ajouter la formation accessibilité et ThreeJS journey
    },
    {
      id: 4,
      url: "#experiences-professionnelles",
      title: "👨‍💼 Expérience professionnelle",
    },
    {
      id: 5,
      url: "#references",
      title: "🗨️ Références",
    },
    {
      id: 6,
      url: "#articles",
      title: "📚 Articles",
    },
    {
      id: 7,
      url: "#contact",
      title: "📨 Contact",
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
          <IconLogo className="header-brand-logo" />
          <h1 className="header-brand-title">
            mscholz.dev
          </h1>
        </Link>

        <div className="header-category">
          {links.map(({ id, url, title }) => (
            <Link
              key={id}
              href={url}
              className="header-category-item"
              onClick={handleClick}
            >
              <span className="header-category-item-container">
                <span className="header-category-item-title">
                  {title}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <IconBurgerMenu
          className="header-burger"
          onClick={handleOpen}
        />
      </div>
    </header>
  );
};

export default Header;

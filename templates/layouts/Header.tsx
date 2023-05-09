import React, {
  FC,
  useState,
  MouseEvent,
} from "react";
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
      url: "#diplomes",
      title: "💡 Diplômes",
    },
    {
      id: 2,
      url: "#projets",
      title: "⚡ Projets",
    },
    {
      id: 3,
      url: "#competences-techniques",
      title: "🧠 Compétences techniques",
    },
    {
      id: 4,
      url: "#services",
      title: "👨‍💼 Services",
    },
    {
      id: 5,
      url: "#clients-conquis",
      title: "👨‍💼 Clients conquis",
    },
    {
      id: 6,
      url: "#temoignages",
      title: "🗨️ Témoignages",
    },
    {
      id: 7,
      url: "#articles",
      title: "📚 Articles",
    },
    {
      id: 8,
      url: "#newsletter",
      title: "📩 Newsletter",
    },
    {
      id: 9,
      url: "#contact",
      title: "📨 Contact",
    },
  ];

  const handleOpen = () => setOpen(!open);

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const section = document.querySelector(url);

    if (section) {
      window.scrollTo({
        top:
          section.getBoundingClientRect().top +
          window.scrollY -
          96,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

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
              onClick={(
                e: MouseEvent<HTMLAnchorElement>,
              ) => handleClick(e, url)}
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

import IconSass from "@/public/icons/skills/sass.svg";
import IconJavascript from "@/public/icons/skills/javascript.svg";
import IconTypescript from "@/public/icons/skills/typescript.svg";
import IconNodeJs from "@/public/icons/skills/node-js.svg";
import IconMySql from "@/public/icons/skills/my-sql.svg";
import IconNextJs from "@/public/icons/skills/next-js.svg";
import IconReactJs from "@/public/icons/skills/react-js.svg";
import IconGatsbyJs from "@/public/icons/skills/gatsby-js.svg";
import IconExpressJs from "@/public/icons/skills/express-js.svg";
import IconMongoDb from "@/public/icons/skills/mongo-db.svg";

const skills = {
  languages: [
    {
      id: 0,
      icon: <IconSass />,
      title: "SCSS",
      value: 100,
    },
    {
      id: 1,
      icon: <IconJavascript />,
      title: "JavaScript",
      value: 95,
    },
    {
      id: 2,
      icon: <IconTypescript />,
      title: "TypeScript",
      value: 75,
    },
    {
      id: 3,
      icon: <IconNodeJs />,
      title: "Node.js",
      value: 85,
    },
    {
      id: 4,
      icon: <IconMySql />,
      title: "SQL",
      value: 75,
    },
  ],
  front: [
    {
      id: 0,
      icon: <IconNextJs />,
      title: "Next.js",
      value: 100,
    },
    {
      id: 1,
      icon: <IconReactJs />,
      title: "React.js",
      value: 95,
    },
    {
      id: 2,
      icon: <IconGatsbyJs />,
      title: "Gastby.js",
      value: 65,
    },
    {
      //TODO:
      id: 3,
      icon: "",
      title: "React Native",
      value: 40,
    },
  ],
  back: [
    {
      id: 0,
      icon: <IconExpressJs />,
      title: "Express.js",
      value: 80,
    },
  ],
  databases: [
    {
      id: 0,
      icon: <IconMongoDb />,
      title: "MongoDB",
      value: 95,
    },
    {
      id: 1,
      icon: <IconMySql />,
      title: "MySQL",
      value: 85,
    },
  ],
};

export default skills;

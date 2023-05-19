import React, {
  FC,
  useEffect,
  useState,
} from "react";
import IconLogo from "@/public/icons/logo.svg";
import { motion } from "framer-motion";

// interfaces
import { IBanner } from "@/utils/interfaces";

const Banner: FC<IBanner> = ({ words }) => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener(
      "scroll",
      handleScroll,
    );
  }, []);

  return (
    <motion.div
      className="banner"
      // motion
      style={{
        left: `-${scroll}px`,
      }}
    >
      {words.map(({ id, word }) => (
        <div
          key={id}
          className="banner-container"
        >
          {id !== 0 && (
            <IconLogo className="banner-icon" />
          )}
          <p className="banner-word">{word}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Banner;

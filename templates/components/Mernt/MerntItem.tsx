import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import HTMLReactParser from "html-react-parser";
import IconChevron from "@/public/icons/chevron.svg";

// interfaces
import { IMerntItem } from "@/utils/interfaces";

const MerntItem: FC<IMerntItem> = ({
  id,
  icon,
  color,
  title,
  subtitle,
  text,
  open,
  hover,
  handleFocus,
  handleBlur,
  handleClick,
}) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [winW, setWinW] = useState<number>(0);

  const handleResize = (
    open: {
      [id: number]: boolean;
    },
    scrollTo: boolean,
  ): void => {
    // prevent nullable
    if (!containerRef.current) return;

    // maximize height
    if (open[id]) {
      containerRef.current.style.height = `${containerRef.current.children[0].clientHeight}px`;

      // with scrollTo ?
      if (scrollTo)
        // waiting height animation finish
        setTimeout(() => {
          if (!containerRef.current) return;

          const y =
            containerRef.current.getBoundingClientRect()
              .top +
            window.scrollY -
            128;

          window.scroll({
            top: y,
            behavior: "smooth",
          });
        }, 500);

      return;
    }

    // minimize height
    containerRef.current.style.height = "0px";
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", () =>
      // set winW and not trigger handleResize because open state doesn't get the updated value
      setWinW(window.innerWidth),
    );

    // eslint-disable-next-line
  }, []);

  // with scrollTo
  useEffect(() => {
    handleResize(open, true);

    // eslint-disable-next-line
  }, [open]);

  // without scrollTo
  useEffect(() => {
    handleResize(open, false);

    // eslint-disable-next-line
  }, [winW]);

  return (
    <button
      className={`mernt-item${
        open[id] ? " mernt-item-open" : ""
      }${hover[id] ? " mernt-item-hover" : ""}`}
      onClick={() => handleClick(id)}
      // start transition event
      onMouseEnter={() => handleFocus(id)}
      onFocus={() => handleFocus(id)}
      // end transition event
      onMouseLeave={() => handleBlur(id)}
      onBlur={() => handleBlur(id)}
    >
      <span
        className="mernt-item-line"
        style={{ background: color }}
      />

      <div className="mernt-item-header">
        <span className="mernt-item-icon">
          {icon}
        </span>
        <h3 className="mernt-item-title">
          {title}
        </h3>
        <IconChevron
          className="mernt-item-chevron"
          style={{
            fill: color,
          }}
        />
      </div>

      <div
        ref={containerRef}
        id={`merntItemContainer${id}`}
        className="mernt-item-container"
      >
        <div className="mernt-item-content">
          <h4 className="mernt-item-subtitle">
            {subtitle}
          </h4>

          <div className="mernt-item-text">
            {HTMLReactParser(text)}
          </div>
        </div>
      </div>
    </button>
  );
};

export default MerntItem;

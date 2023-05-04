import React, {
  FC,
  useEffect,
  useRef,
} from "react";

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
  setOpen,
  hover,
  handleFocus,
  handleBlur,
}) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const handleResize = (): void => {
    // prevent nullable
    if (!containerRef.current) return;

    // maximize height
    if (open[id]) {
      containerRef.current.style.height = `${containerRef.current.children[0].clientHeight}px`;
      return;
    }

    // minimize height
    containerRef.current.style.height = "0px";
    return;
  };

  const handleClick = (): void => {
    // prevent nullable
    if (!containerRef.current) return;

    // set all open value to false
    const initOpen: { [id: number]: boolean } =
      {};

    Object.keys(open).map((id) => {
      const container = document.getElementById(
        `merntItemContainer${id}`,
      );

      if (container) {
        container.style.height = "0px";
      }

      // set open to false
      initOpen[Number(id)] = false;
    });

    // set opposite value or set true
    setOpen({
      ...initOpen,
      [id]: !open[id],
    });
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      handleResize,
    );

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleResize();

    // eslint-disable-next-line
  }, [open]);

  return (
    <button
      className={`mernt-item${
        open[id] ? " mernt-item-open" : ""
      }${hover[id] ? " mernt-item-hover" : ""}`}
      onClick={handleClick}
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

          <p className="mernt-item-text">
            {text}
          </p>
        </div>
      </div>
    </button>
  );
};

export default MerntItem;

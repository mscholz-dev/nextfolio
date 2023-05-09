import React, {
  FC,
  useEffect,
  useState,
  useRef,
} from "react";
import MerntItem from "./MerntItem";
import IconStackGeometry from "@/public/icons/stack-geometry.svg";

// data
import merntData from "@/utils/data/mernt";

const Mernt: FC = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<{
    [id: number]: boolean;
  }>({});

  const [hover, setHover] = useState<{
    [id: number]: boolean;
  }>({});

  const handleStackClick = (id: number): void => {
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

  const resetHoverObject = (): {
    [id: number]: boolean;
  } => {
    const hoverInit: { [id: number]: boolean } =
      {};

    for (const id in hover) {
      hoverInit[id] = false;
    }

    return hoverInit;
  };

  const handleFocus = (id: number): void =>
    setHover({
      ...resetHoverObject(),
      [id]: true,
    });

  const handleBlur = (id: number): void =>
    setHover({
      ...resetHoverObject(),
      [id]: false,
    });

  const handleStackHeight = (): void => {
    // prevent nullable
    if (!stackRef.current) return;

    let stackHeight = 0;

    for (const item of stackRef.current
      .children) {
      stackHeight += item.clientHeight;
    }

    const winW = window.innerWidth;

    if (winW < 375) {
      stackRef.current.style.height = `${
        stackHeight - 86 * 4
      }px`;
      return;
    }

    if (winW < 480) {
      stackRef.current.style.height = `${
        stackHeight - 96 * 4
      }px`;
      return;
    }

    if (winW < 576) {
      stackRef.current.style.height = `${
        stackHeight - 124 * 4
      }px`;
      return;
    }

    if (winW < 768) {
      stackRef.current.style.height = `${
        stackHeight - 156 * 4
      }px`;
      return;
    }

    if (winW < 992) {
      stackRef.current.style.height = `${
        stackHeight - 96 * 4 - 40
      }px`;
      return;
    }

    stackRef.current.style.height = `${
      stackHeight - 124 * 4 - 38
    }px`;

    return;
  };

  useEffect(() => {
    // init objects
    const init: { [id: number]: boolean } = {};

    for (const { id } of merntData) {
      init[id] = false;
    }

    setOpen(init);
    setHover(init);

    // set stack height from its childrends heights
    handleStackHeight();
    window.addEventListener(
      "resize",
      handleStackHeight,
    );
  }, []);

  return (
    <section
      id="competences-techniques"
      className="mernt wrapper-padding-x"
    >
      <h2 className="title-home-secondary">
        Ma MERN-T stack
      </h2>
      <p className="title-home-subtitle">
        Réalisation de projets à la pointe de la
        technologie
      </p>

      <div className="mernt-main">
        <article className="mernt-wrapper">
          {merntData.map(
            ({
              id,
              icon,
              color,
              title,
              subtitle,
              text,
            }) => (
              <MerntItem
                key={id}
                id={id}
                icon={icon}
                color={color}
                title={title}
                subtitle={subtitle}
                text={text}
                open={open}
                hover={hover}
                handleFocus={() =>
                  handleFocus(id)
                }
                handleBlur={() => handleBlur(id)}
                handleClick={() =>
                  handleStackClick(id)
                }
              />
            ),
          )}
        </article>

        <div
          ref={stackRef}
          className="mernt-stack"
        >
          {merntData.map(
            ({ id, iconLarge, color }) => (
              <button
                key={id}
                className={`mernt-stack-item${
                  open[id]
                    ? " mernt-stack-item-open"
                    : ""
                }${
                  hover[id]
                    ? " mernt-stack-item-hover"
                    : ""
                }`}
                // click event
                onClick={() =>
                  handleStackClick(id)
                }
                // start transition event
                onMouseEnter={() =>
                  handleFocus(id)
                }
                onFocus={() => handleFocus(id)}
                // end transition event
                onMouseLeave={() =>
                  handleBlur(id)
                }
                onBlur={() => handleBlur(id)}
              >
                <IconStackGeometry
                  className="mernt-stack-item-background"
                  style={{ fill: color }}
                />

                <span className="mernt-stack-item-icon">
                  {iconLarge}
                </span>
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Mernt;

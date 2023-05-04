import React, {
  FC,
  useEffect,
  useState,
} from "react";
import MerntItem from "./MerntItem";
import IconStackGeometry from "@/public/icons/stack-geometry.svg";

// data
import merntData from "@/utils/data/mernt";

const Mernt: FC = () => {
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

  const handleFocus = (id: number): void => {
    setHover({
      ...resetHoverObject(),
      [id]: true,
    });
  };

  const handleBlur = (id: number): void => {
    setHover({
      ...resetHoverObject(),
      [id]: false,
    });
  };

  // init objects
  useEffect(() => {
    const init: { [id: number]: boolean } = {};

    for (const { id } of merntData) {
      init[id] = false;
    }

    setOpen(init);
    setHover(init);
  }, []);

  return (
    <section className="mernt wrapper-padding-x">
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
                setOpen={setOpen}
                hover={hover}
                handleFocus={() =>
                  handleFocus(id)
                }
                handleBlur={() => handleBlur(id)}
              />
            ),
          )}
        </article>

        <div className="mernt-stack">
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

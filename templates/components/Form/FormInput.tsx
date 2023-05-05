import React, { FC, useState } from "react";

// interfaces
import { IFormInput } from "@/utils/interfaces";

const FormInput: FC<IFormInput> = ({
  id,
  handleChange,
  icon,
  label,
  type,
  value,
  min,
  max,
  asterix,
}) => {
  const [focus, setFocus] =
    useState<boolean>(false);

  const handleFocus = (): void => setFocus(true);
  const handleBlur = (): void => setFocus(false);

  return (
    <label
      className={`form-input${
        focus ? " form-input-focus" : ""
      }${
        value.length ? " form-input-filled" : ""
      }`}
    >
      <span className="form-input-icon">
        {icon}
      </span>

      <p className="form-input-title">
        {label.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              transitionDelay: `${50 * index}ms`,
            }}
          >
            {letter}
          </span>
        ))}
        {asterix && (
          <>
            <span
              style={{
                transitionDelay: `${
                  50 * label.length
                }ms`,
              }}
            >
              {" "}
            </span>
            <span
              style={{
                transitionDelay: `${
                  50 * label.length + 1
                }ms`,
              }}
            >
              *
            </span>
          </>
        )}
      </p>

      <input
        className="form-input-control"
        id={`form-${id}`}
        onChange={handleChange}
        type={type}
        value={value}
        minLength={min}
        maxLength={max}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=""
      />
    </label>
  );
};

export default FormInput;

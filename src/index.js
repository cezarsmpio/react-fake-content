import React, { useLayoutEffect, useEffect } from "react";

const cachedStyles = [];

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useInjectStyle(rule) {
  useIsomorphicLayoutEffect(function () {
    try {
      if (cachedStyles.indexOf(rule) >= 0) return;

      cachedStyles.push(rule);

      const styleElement = document.createElement("style");
      styleElement.appendChild(document.createTextNode(""));
      styleElement.setAttribute("react-fake-content", "");

      document.head.appendChild(styleElement);

      styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    } catch (err) {
      console.error(
        "Error on react-fake-content by trying to add styles into <head>:"
      );
      console.error(rule);
      console.error(err);
    }
  }, []);
}

function Shape({
  width,
  height,
  animation = true,
  animationDuration = 1000,
  animationName = "reactFakeContentAnimation",
  primaryColor = "#efefef",
  secondaryColor = "#ddd",
  style = {},
  as = "div",
  responsive = true,
  inline = false,
  ...props
}) {
  const keyframesRule = `@keyframes ${animationName} { from { background-position: 0 center; } to { background-position: -200% center; } }`;
  useInjectStyle(keyframesRule);

  const styles = {
    width,
    height,
    display: "block",
    backgroundColor: primaryColor,
    backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${primaryColor}, ${secondaryColor})`,
    backgroundSize: "200%",
    borderRadius: "3px",
    ...style,
  };

  if (animation) {
    styles.animation = `${animationName} ${animationDuration}ms linear infinite`;
  }

  if (responsive) {
    styles.maxWidth = "100%";
  }

  if (inline) {
    styles.display = "inline-block";
  }

  return React.createElement(as, { ...props, style: styles });
}

export function Circle({ size = "60px", ...props }) {
  return (
    <Shape
      {...props}
      width={size}
      height={size}
      style={{
        borderRadius: "50%",
        ...props.style,
      }}
      responsive={false}
    />
  );
}

export function Line({ width = "100%", height = "15px", ...props }) {
  return (
    <Shape
      {...props}
      width={width}
      height={height}
      style={{
        margin: "10px 0",
        ...props.style,
      }}
    />
  );
}

export function Square({ size = "60px", ...props }) {
  return <Shape {...props} width={size} height={size} />;
}

export const Rectangle = Shape;

import * as React from "react";
import { PolymorphicComponentProps } from "./types";

const cachedStyles = [];

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

function useInjectStyle(rule: string) {
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

type Props<T extends React.ElementType> = {
  width?: string;
  height?: string;
  animation?: boolean;
  animationDuration?: number;
  animationName?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
  as?: T;
  responsive?: boolean;
  inline?: boolean;
};

type ShapeProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  Props<T>
>;

export function Shape<T extends React.ElementType = "div">({
  width = "100px",
  height = "100px",
  animation = true,
  animationDuration = 1000,
  animationName = "reactFakeContentAnimation",
  primaryColor = "#efefef",
  secondaryColor = "#ddd",
  style = {},
  as,
  responsive = true,
  inline = false,
  ...props
}: ShapeProps<T>) {
  const keyframesRule = `@keyframes ${animationName} { from { background-position: 0 center; } to { background-position: -200% center; } }`;
  useInjectStyle(keyframesRule);

  const styles: React.CSSProperties = {
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

  const Component = as ?? "div";

  return <Component {...props} style={styles} />;
}

type CircleProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  Props<T>
> & {
  size?: string;
};

export function Circle<T extends React.ElementType = "div">({
  size = "60px",
  ...props
}: CircleProps<T>) {
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

type LineProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  Props<T>
>;

export function Line<T extends React.ElementType = "div">({
  width = "100%",
  height = "15px",
  ...props
}: LineProps<T>) {
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

type SquareProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  Props<T>
> & {
  size?: string;
};

export function Square<T extends React.ElementType = "div">({
  size = "60px",
  ...props
}: SquareProps<T>) {
  return <Shape {...props} width={size} height={size} />;
}

type RectangleProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  Props<T>
>;

export function Rectangle<T extends React.ElementType = "div">(
  props: RectangleProps<T>
) {
  return <Shape {...props} />;
}

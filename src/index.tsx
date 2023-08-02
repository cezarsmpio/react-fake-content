import * as React from "react";
import "./animation.css";

type Props = React.HTMLAttributes<HTMLAllCollection> & {
  width?: string;
  height?: string;
  animation?: boolean;
  animationDuration?: number;
  animationName?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  responsive?: boolean;
  inline?: boolean;
};

export function Shape({
  width = "100px",
  height = "100px",
  animation = true,
  animationDuration = 1000,
  animationName = "reactFakeContentAnimation",
  primaryColor = "#efefef",
  secondaryColor = "#dddddd",
  style = {},
  as = "div",
  responsive = true,
  inline = false,
  ...props
}: Props) {
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

type CircleProps = Props & {
  size?: string;
};

export function Circle({ size = "60px", ...props }: CircleProps) {
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

type LineProps = Props;

export function Line({ width = "100%", height = "15px", ...props }: LineProps) {
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

type SquareProps = Props & {
  size?: string;
};

export function Square({ size = "60px", ...props }: SquareProps) {
  return <Shape {...props} width={size} height={size} />;
}

type RectangleProps = Props;

export function Rectangle(props: RectangleProps) {
  return <Shape {...props} />;
}

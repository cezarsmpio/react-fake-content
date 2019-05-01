import React, { useLayoutEffect } from 'react';

function useInjectStyle(rule) {
  useLayoutEffect(function() {
    try {
      const styleElement = document.createElement('style');
      styleElement.appendChild(document.createTextNode(''));
      styleElement.setAttribute('react-fake-content', '');

      document.head.appendChild(styleElement);

      const index = styleElement.sheet.insertRule(
        rule,
        styleElement.sheet.cssRules.length
      );

      return function() {
        styleElement.sheet.deleteRule(index);
      };
    } catch (err) {
      console.error(
        'An error happened on react-fake-content by trying to add stylesheet.'
      );
      console.error(rule);
      console.error(err);
    }
  }, []);
}

export function Rectangle({
  width = '100%',
  height = '15px',
  animation = true,
  animationDuration = 1000,
  animationName = 'reactFakeContentAnimation',
  primaryColor = '#efefef',
  secondaryColor = '#ddd',
  style = {},
  as = 'div',
  ...props
}) {
  const keyframesRule = `
      @keyframes ${animationName} {
        from   { background-position: 0 center; }
        to { background-position: -200% center; }
      }
      `;
  useInjectStyle(keyframesRule);

  const styles = {
    display: 'block',
    maxWidth: width,
    height: height,
    backgroundColor: primaryColor,
    backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${primaryColor}, ${secondaryColor})`,
    backgroundSize: '200%',
    borderRadius: '3px',
    ...style
  };

  if (animation) {
    styles.animation = `${animationName} ${animationDuration}ms linear infinite running`;
  }

  return React.createElement(as, { ...props, style: styles });
}

export function Circle({ size = '60px', ...props }) {
  return (
    <Rectangle
      {...props}
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        ...props.style
      }}
    />
  );
}

export function Line({ width = '100%', height = '15px', ...props }) {
  return (
    <Rectangle
      {...props}
      width={width}
      height={height}
      style={{
        margin: '10px 0',
        borderRadius: '5px',
        ...props.style
      }}
    />
  );
}

export function Square(props) {
  return <Rectangle {...props} width={props.size} height={props.size} />;
}

# react-fake-content

[![https://nodei.co/npm/react-fake-content.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-fake-content.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-fake-content)

<!-- badge -->

[![minified + gzip](https://badgen.net/bundlephobia/minzip/react-fake-content)](https://bundlephobia.com/result?p=react-fake-content)
[![npm version](https://img.shields.io/npm/v/react-fake-content.svg)](https://www.npmjs.com/package/react-fake-content)
[![npm download](https://img.shields.io/npm/dm/react-fake-content.svg)](https://www.npmjs.com/package/react-fake-content)
[![GitHub stars](https://img.shields.io/github/stars/cezarlz/react-fake-content.svg?style=social&label=Star)](https://github.com/cezarlz/react-fake-content)
[![GitHub issues](https://img.shields.io/github/issues/cezarlz/react-fake-content.svg)](https://github.com/cezarlz/react-fake-content/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/cezarlz/react-fake-content.svg)](https://GitHub.com/cezarlz/react-fake-content/graphs/contributors/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

# :warning: UNDER DEVELOPMENT!

## Install

```
npm install react-fake-content --save
```

## Usage

```js
import { Circle } from 'react-fake-content';

function Avatar(props) {
    if (!props.loaded) {
        return <Circle size="40px" />
    }

    return <img src={props.url} width="40" height="40">
}
```

## Components

### `<Rectangle />`

```js
import { Rectangle } from 'react-fake-content';

function Component(props) {
  return <Rectangle width="400px" height="250px" />;
}
```

#### `width`: string - required

CSS unit to define the widht of the component.

#### `height`: string - required

CSS unit to define the height of the component.

### `<Circle />`

```js
import { Circle } from 'react-fake-content';

function Component(props) {
  return <Circle size="25px" />;
}
```

#### `size`: string - 60px

CSS unit to define either width and height of the component.

### `<Line />`

```js
import { Line } from 'react-fake-content';

function Component(props) {
  return (
    <CodeBlock>
      <Line width="100%" height="12px" />
      <Line width="95%" height="12px" />
      <Line width="98%" height="12px" />
      <Line width="100%" height="12px" />
      <Line width="92%" height="12px" />
    </CodeBlock>
  );
}
```

#### `width`: string - 100%

CSS unit to define width of the component.

#### `height`: string - 15px

CSS unit to define height of the component.

### `<Square />`

```js
import { Square } from 'react-fake-content';

function Component(props) {
  return <Square size="45px" />;
}
```

#### `size`: string - 60px

CSS unit to define either width and height of the component.

## Properties

All properties below are applicable for all components.

#### `animation`: boolean - true

`false` to disable animation.

#### `animationDuration`: number - 1000

Number in miliseconds.

#### `animationName`: string - reactFakeContentAnimation

CSS animation name.

#### `primaryColor`: string - #efefef

CSS unit to define the primary color of the component gradient.

#### `secondaryColor`: string - #ddd

CSS unit to define the secondary color of the component gradient.

#### `style`: object - {}

A list of CSS properties to be added into the component.

#### `as`: string - div

Changes the component element to be rendered.

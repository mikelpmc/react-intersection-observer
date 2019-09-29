## React intersection Observer

React component that uses the Intersection observer API.

#### Getting started

```shell
npm install react-observer-component
```

#### Usage

```jsx
import React from 'react';
import Observer from 'react-observer-component';

const MyComponent = () => {
  return (
    <Observer>
      {({ isInView, ref }) => {
        return <div ref={ref}>{isInView && <p>Only shows when is in viewport!</p>}</div>;
      }}
    </Observer>
  );
};
```

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>

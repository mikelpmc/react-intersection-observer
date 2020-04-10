## React intersection Observer

React custom hook that uses the Intersection observer API.

[Codesandbox demo](https://codesandbox.io/embed/react-observer-component-14hrj)

#### Getting started

```shell
npm install react-observer-component
```

#### Usage

```jsx
import React from 'react';
import useObserver from 'react-observer-component';

const MyComponent = () => {
    const [isInView, ref] = useObserver();

    return (
        <div ref={ref}>
            {isInView && <p>Only shows when is in viewport!</p>}
        </div>
    );
};
```

#### [Browser support](https://caniuse.com/#feat=mdn-api_intersectionobserver)

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>

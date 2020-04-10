import React from 'react';
import useObserver from './lib/';

function App() {
    const [isInView, ref] = useObserver();

    return (
        <div>
            <p>
                Open up the console network tab and scroll down, you will se how
                the image would be loaded only when its visible on the viewport
            </p>
            <span role="img" aria-label="icon">
                🤘
            </span>

            <div style={{ height: '2000px' }} />

            <div ref={ref}>
                {isInView && (
                    <img src="http://placekitten.com/g/300/300" alt="kitten" />
                )}
            </div>
        </div>
    );
}

export default App;

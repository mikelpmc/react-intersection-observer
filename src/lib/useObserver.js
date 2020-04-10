import { useState, useRef, useEffect, useMemo } from 'react';

const useObserver = (
    rootElem = null,
    rootMargin = '0px',
    threshold = 0,
    triggerOnce = true,
    onIsInView = () => {}
) => {
    const [isInView, setIsInView] = useState(false);
    const observerRef = useRef(null);

    const handleCallback = entries => {
        if (triggerOnce && isInView) return;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsInView(true);

                onIsInView();
            }
        });
    };

    const handleCreateObserver = () => {
        const options = {
            root: rootElem,
            rootMargin,
            threshold
        };

        const observer = new IntersectionObserver(handleCallback, options);

        return observer;
    };

    observerRef.current = useMemo(handleCreateObserver, [
        rootElem,
        rootMargin,
        threshold,
        triggerOnce
    ]);

    useEffect(() => {
        return () => {
            observerRef.current && observerRef.current.disconnect();
        };
    });

    const handleObserveElem = elem => {
        if (observerRef.current) observerRef.current.observe(elem);
    };

    const handleGetRef = elem => {
        if (elem) handleObserveElem(elem);
    };

    return [isInView, handleGetRef];
};

export default useObserver;

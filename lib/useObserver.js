import { useState, useRef, useEffect } from 'react';

const useObserver = (rootElem = null, rootMargin = '0px', threshold = 0, triggerOnce = true, onIsInView = {}) => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = handleCreateObserver();

    return () => {
      observerRef.current.disconnect();
    };
  }, [rootElem, rootMargin, threshold, triggerOnce]);

  const handleCreateObserver = () => {
    const options = {
      root: rootElem,
      rootMargin,
      threshold
    };

    const observer = new IntersectionObserver(handleCallback, options);

    return observer;
  };

  const handleCallback = entries => {
    if (triggerOnce && isInView) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsInView(true);
        onIsInView();
      }
    });
  };

  const handleObserveElem = elem => {
    if (observerRef.current) observerRef.current.observe(elem);
  };

  const handleGetRef = elem => {
    if (elem) handleObserveElem(elem);
  };

  return [isInView, handleGetRef];
};

export default useObserver;

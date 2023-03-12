import React from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMathches] = React.useState<boolean>(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMathches(media.matches);
    }
    const listener = () => setMathches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

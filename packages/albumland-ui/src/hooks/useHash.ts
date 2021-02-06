import {useState, useCallback, useEffect} from 'react';

export const useHash = () => {
  const [hash, setHash] = useState(() => {
      return decodeURIComponent(window.location.hash.substr(1));
  });

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
      window.addEventListener('hashchange', onHashChange);
      return () => {
        window.removeEventListener('hashchange', onHashChange);
      }
  }, []);

  const _setHash = useCallback(
    (newHash: string) => {
      newHash = newHash.replace(/(?:\r\n|\r|\n)/g, '%0A');
      if (newHash !== hash) {
        // @ts-ignore
        history.replaceState(undefined, undefined, '#' + newHash)
      }
    },
    [hash]
  );

  return [hash, _setHash] as const;
};

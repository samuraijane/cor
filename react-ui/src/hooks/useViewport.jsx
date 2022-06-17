

import { useContext } from 'react';
import { ViewportContext } from './viewportContext';

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};

export default useViewport;
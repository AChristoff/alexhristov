'use client'

import { useState, useEffect, FC } from 'react';
import throttle from 'lodash/throttle';

interface IProps {
  children: React.ReactElement
}

const LargeScreensComponent: FC<IProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(() => window?.innerWidth >= 768);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsVisible(window?.innerWidth >= 768);
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return isVisible ? children : null;
};

export default LargeScreensComponent;

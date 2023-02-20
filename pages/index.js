import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [bla, e] = useState('');

  const isTouchDevice = () => {
    return (
      !!(
        typeof window !== 'undefined' &&
        ('ontouchstart' in window ||
          (window.DocumentTouch &&
            typeof document !== 'undefined' &&
            document instanceof window.DocumentTouch))
      ) ||
      !!(
        typeof navigator !== 'undefined' &&
        (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
      )
    );
  };

  useEffect(() => {
    const isTouch = isTouchDevice();
    console.log(isTouch);
    e(isTouch.toString());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <span>Touch device: {bla}</span>
    </div>
  );
}

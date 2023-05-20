'use client';
import Image from 'next/image';
import styles from '../../styles/page.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Timer() {
  
  //let [WorkTime, setDate] = useState(WorkTime);
  let IdleTime:number = 1000;
  let WorkTime:number = 3000;
  
  const [seconds, setSecond] = useState(WorkTime);
  
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSecond(seconds - 1), 1000);
      }
    }, [seconds]);

    return (
      <main className={styles.main}>
        <div className="clock">
          {seconds}
        </div>
        
      </main>
    )
  
}
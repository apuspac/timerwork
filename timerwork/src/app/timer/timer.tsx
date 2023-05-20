'use client';
import Image from 'next/image';
import styles from '../../styles/page.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Timer(props:any) {
  
  //let [WorkTime, setDate] = useState(WorkTime);
  let IdleTime:number = 1000;

  
  const [seconds, setSecond] = useState(props.workTime);
  
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
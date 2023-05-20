'use client';
import Image from 'next/image';
import styles from '../../styles/page.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Timer from './timer';

export default function Home() {

  let [num,setNum] = useState(0);

  const handleChangeValue = () => {
    
  }
    return (
      <main className={styles.main}>
        <input type='form' value={num}></input>
        
        <h1>Timer</h1>
        {num}
        <Timer
        />
      </main>
    )
  
}
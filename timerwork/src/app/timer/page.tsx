'use client';
import Image from 'next/image';
import styles from '../../styles/page.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef} from 'react';
import Timer from './timer';

export default function Home() {
  let [num,setNum] = useState(200);
  let [addNum, setAddNum] = useState(300); 
  const onClickAddNum = () =>{
    setAddNum(num);
  }
    return (
      <main className={styles.main}>
        <input type="form" value={num} onChange={(event:any) => setNum(event.target.value)} />
        <button onClick={onClickAddNum}>追加</button>
        <h1>Timer</h1>
        <h2>セットタイマー : {num}</h2>
        <Timer 
         workTime = {addNum}
        />
      </main>
    )
  
}
'use client';
import { useState, useEffect } from "react";
import { NextPage } from "next";


const indexpage: NextPage = () => {

    return (
        <div>
            <Timer />
       </div>
    );
};

export default indexpage;


const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h1>Timer</h1>
            <p>{time}</p>
        </div>
    )
}
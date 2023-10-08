'use client';
import '../app/global.css';
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function Calc() {
    const [count, setCount] = useState(0);

    function incrementNumber() {
        setCount(count + 1);
        //console.log(count + 1);
    }

    function decrementNumber() {
        setCount(count - 1);
        //console.log(count - 1);
    }
    return(
        <div className='container flex h-[50vh] bg-blue-slate w-full'>
            <div className='columns-6 flex flex-col w-1/2 justify-around'>
                <h2 className='text-lg'>Questions</h2>
                <h2 className='text-lg'>Tips</h2>
            </div>

            <div className='columns-6 flex flex-col w-1/2 justify-center'>
                <div className='container'>
                    <Button onClick={incrementNumber}>Up</Button>
                    <h1 className='text-2xl my-16'>{count}</h1>
                    <Button onClick={decrementNumber}>Down</Button>
                </div>
                <Button className='my-8'>Next</Button>
            </div>
        </div>
    )
}
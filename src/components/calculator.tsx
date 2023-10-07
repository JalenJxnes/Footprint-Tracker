'use client';
import '../app/global.css';
import { Button } from"@/components/ui/button";
import Example from './example';
import {useState} from "react";



export default function Calculator() {
    const [showPage, setCurrentPage] = useState(false);
    return (
        <div className='container flex flex-col text-center items-center '>
            <h2 className='text-xl my-12'>Try Our Footprint Calculator</h2>
            <p className='my-12' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et commodo quam. Vivamus maximus finibus ligula non pellentesque. Praesent ac purus vel leo interdum facilisis. </p>
            <Button className='w-1/2 my-12' onClick={() => setCurrentPage(!showPage)}>Try It</Button>
            {showPage && (
                <div className='container'>
                    <Example />
                </div>
            )}
        </div>
    )
}
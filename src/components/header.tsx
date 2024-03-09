'use client'
import '../app/global.css';
import Green_Energy from '../assets/green-energy.png'
import Image from 'next/image';

export default function Header() {
    return (
        <div className='min-h-80'>
            <div className="flex flex-col items-center min-h-96">
                <h1 className="text-2xl">Carbon Footprint Tracker</h1>
                <h2>Subheading here</h2>

                <div>
                    <Image
                        src={Green_Energy}
                        alt='Green Energy'
                        width={500}
                    >
                    </Image>
                </div>
            </div>
        </div>
    )
}
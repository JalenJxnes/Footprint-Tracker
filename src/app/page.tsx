<<<<<<< Updated upstream
import Example from '../components/example';
import Calculator from "../components/calculator";
import '../app/global.css';

export default function Home() {
  return (
    <div className='container w-full'>
      <Example />
      <Calculator />
    </div>
  )
}
=======
'use client'
import Calculator from "@/components/calculator";
import Nav_Menu from "@/components/nav-menu";
import Header from "@/components/header";

export default function Page() {
    return (
        <div>
            <Header />
            <Calculator />
        </div>
    )
}
>>>>>>> Stashed changes

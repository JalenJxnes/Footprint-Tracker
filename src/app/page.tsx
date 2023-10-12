import Example from '../components/example';
import Calculator from "../components/calculator";
import Footer from '../components/footer';
import NavBar from '@/components/navbar';
import '../app/global.css';

export default function Home() {
  return (
    <div className='container w-full'>
      <NavBar />
      <Example />
      <Calculator />
      <Footer />
    </div>
  )
}

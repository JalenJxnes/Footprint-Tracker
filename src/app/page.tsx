import Example from '../components/example';
import Calculator from "../components/calculator";
import '../app/global.css';

export default function Home() {
  return (
    <div className='container min-h-screen h-[100vh]'>
      <Example />
      <Calculator />
    </div>
  )
}

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

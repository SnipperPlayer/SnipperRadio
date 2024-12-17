//import Image from "next/image";
import './Page.css'
import Topboard from './components/Topboard';

export default function Home() {
  return (
    <div className='container'>
      <div className="left">
        The Best Radio
      </div>
      <div className="right">
        <div className="top">
          {/* TOP text */}
          <Topboard/>
        </div>
        <div className="bottom">
          Bottom text
        </div>
      </div>
    </div>

  );
}

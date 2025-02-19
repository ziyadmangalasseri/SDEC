import { motion } from 'framer-motion';
import Navbar from './Navbar';
import cloud1 from '../assets/images/cloud1.png';
import bulb from '../assets/images/bulb.png';
import ball from '../assets/images/Ball.png';
import person from '../assets/images/person.png';
import vector from '../assets/images/vector.png';
import homeBg from '../assets/images/home-bg.png';
import Brand from "../components/Brand";

const fadeIn ={
  hidden:{ opacity:0,y:50},
  visible:{opacity:1,y:0, transition :{duration:0.8,ease:"easeOut"}},
}

const Home = () => {
  return (
    <div className="flex flex-col z-0 bg-[#010a23] " style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'contain'}}>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center px-5 lg:px-20 ">
        <div className="flex flex-col items-center lg:items-start lg:mx-20">
          <img className='mt-5 w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]' src={cloud1} alt="Cloud" />
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <p className="text-white font-bold text-3xl lg:text-6xl sm:text-4xl">We Provide</p>
              <img className="w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40" src={bulb} alt="Bulb" />
            </div>
            <p className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl -mt-10">Smart Business<br />Solution</p>
            <p className="text-white text-sm sm:text-base mt-3">Grow Your Business With Us Best Business Solution</p>
          </div>
        </div>

        <div className='flex flex-col items-center mt-5 lg:mt-0 lg:-mx-30'>
          <img className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]" src={cloud1} alt="Cloud" />
          <div className='flex items-center justify-center gap-5 sm:gap-10'>
            <img className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[718px] z-10" src={person} alt="Person" />
            <img className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[70px]' src={ball} alt="Ball" />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center lg:px-20 lg:-mt-60' style={{ backgroundImage: `url(${vector})`, backgroundSize: 'certain' ,backgroundRepeat: 'no-repeat'  }}>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.2}}>
        <Brand />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
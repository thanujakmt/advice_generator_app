
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.adviceslip.com/advice');
      const data = await response.data
      console.log(data)
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
      <div className=' h-screen bg-Dark_Blue flex flex-col justify-center items-center'>
        <div className=' md:h-[350px] md:w-[600px] h-[400px] w-[350px] bg-Dark_Grayish_Blue relative rounded-[20px] font-font_Manrope flex flex-col pt-10 items-center gap-10 md:gap-8 md:px-12 px-5 font-[800]'>
          <div className=' text-Neon_Green text-[14px] font-[700] tracking-[4px]'>ADVICE #{loading ? "Loading..." : data.slip.id}</div>
          <p className=' text-Light_Cyan md:text-[30px] text-[22px] text-center'> "{loading ? "Loading..." : data.slip.advice}"</p>
          <img src="/images/pattern-divider-desktop.svg" alt="" />
          <div onClick={async () => { fetchData() }} className=' h-16 w-16 bg-Neon_Green absolute bottom-[-30px] hover:cursor-pointer hover:shadow-lg transition-all hover:shadow-green-400 rounded-[50%] flex justify-center items-center'>
            <img src="images/icon-dice.svg" className='' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

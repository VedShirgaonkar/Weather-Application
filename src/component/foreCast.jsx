import Sun from '../assets/sun.png';
import Cloud from '../assets/cloudy.png'
import LineChart from './lineChar'
const foreCast=({forecastData,WeatherData})=>{
    
//     console.log(forecastData);
//     console.log(WeatherData.length);
      if(WeatherData.length==0 || forecastData.length==0){
        return(<div>

        </div>)
        
      }


    return (
     <div className="flex  flex-col justify-start  m-5  text-black border-2 shadow-md  w-100% rounded-xl"  >
        
        <div className='flex  justify-start mx-5 my-2 '>
            <p className='font-bold text-4xl'>{WeatherData?.main?.temp} &deg;C</p>
            {
               WeatherData?.weather[0]?.main=='Clouds'?<img  className='h-10 ms-4'  src={Cloud } alt="" /> :<img src={Sun} className='h-10 ms-4' alt="" /> 
            }
        </div>
        <div>
           
           <LineChart forecastData={forecastData}/>
       </div>
        <div className='flex '>
            <div className='flex-1  m-5 bg-slate-200 ps-4 rounded-md py-1'>
                <p className='font-semibold'>
                pressure
                </p>
                <p>
                   {WeatherData?.main?.pressure} hpa 
                </p>

            </div>
            <div className='flex-1  m-5 bg-slate-200 ps-4 rounded-md py-1 '>
            <p className='font-semibold'>
                humidity
                </p>
                <p>
                   {WeatherData?.main?.humidity} %
                </p>

          </div>
        </div>
       
    </div>
    )

}
export default foreCast;
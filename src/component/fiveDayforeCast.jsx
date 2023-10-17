import Sun from '../assets/sun.png';
import Cloud from '../assets/cloudy.png'
const fiveDay =({forecastData})=>{
    if(forecastData.length==0){
        return(<div>

        </div>)
        
      }
    const fiveDay = forecastData.list;
    //console.log(fiveDay);
    const tempratureandDay = []
    let date = new Date(fiveDay[0].dt_txt);
    let currentDay = date.getDate();
    let currentTime = date.getHours();
    const days =["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];

    fiveDay.map((items)=>{
        let tempDate = new Date(items.dt_txt);
        if(currentDay == tempDate.getDate() && currentTime == tempDate.getHours())
        {
            const tempObject={
                day:tempDate.getDay(),
                temprature:items.main.temp,
                condition:items.weather[0].main
            }
            tempratureandDay.push(tempObject);
        currentDay++;
            
        }
    })
    //console.log(tempratureandDay);

    return(<div className="flex px-3 justify-center  m-5  text-black   w-100% rounded-xl">
        {
            tempratureandDay.map((items)=>{
                return(<div className="flex flex-1  flex-col  items-center">
                    <div className="font-bold  ">
                       {days[items.day-1]}
                    </div>
                    <div>
                    {items.temprature}&deg;
                        </div>   
                        <div>
                        {items.condition=='Clouds'?<img  className='h-8'  src={Cloud } alt="" /> :<img src={Sun} className='h-8 ' alt="" /> }
                        </div>   
                        <div>
                    {items.condition}
                        </div>                   
                </div>)
            })
        }
    </div>)
}
export default fiveDay
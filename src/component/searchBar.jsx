import { useState } from 'react';
import LocationIcon from '../assets/location-pin.png'
import searchIcon from '../assets/search-interface-symbol.png'
const searchBar=({setcityName})=>{
    const [ newcityname,setnewcityName] = useState('mumbai');
    const changeCityName=(e) =>{
        setnewcityName(e.target.value);
        //console.log(newcityname);
    }
    const cityData=(e) =>{
        e.preventDefault();
        setcityName(newcityname);
       // console.log(`ved`);
    }
     return(
     <div className="flex  items-center  m-5  text-black border-2 shadow-md  w-100% rounded-xl"  >
            <div className="m-4 h-auto w-10% mx-4">
                <img src={LocationIcon} className=" h-8 w-full "  alt="image"/>  
            </div>
            <div className="inputBar h-100% flex-1 ">
             <form onSubmit={cityData}>
             <input type="text" value={newcityname}  onChange={changeCityName}   className="ipText h-16 w-full ps-1 focus:outline-none text-lg" />
                </form>   
            </div>
            <div className="m-4 h-auto mx-4  w-10% ">
                <img src={searchIcon} onClick={cityData} className=" h-8 w-full "  alt="image"/>  
            </div>
        
    </div>

        )
}
export default searchBar

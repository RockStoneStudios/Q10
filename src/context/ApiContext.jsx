import React,{useState,useEffect,createContext} from "react";
import clientAxios from '../config/clientAxios';


const ApiRickMorty = createContext();

const ApiContext = ({children}) =>{
    const [characters,setCharacters] = useState([]);

    useEffect(()=>{

      const getData = async () => {
         const result = await clientAxios();
         
         
         setCharacters(result.data.results);
      }
          getData();
    },[]);
    return(
        <ApiRickMorty.Provider
         value={{characters}}
        >
            {children}
        </ApiRickMorty.Provider>
    )
}


export {
    ApiContext,
    ApiRickMorty
}
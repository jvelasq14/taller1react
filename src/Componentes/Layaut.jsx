import React from "react";
import axios from "axios";
import Cards from "./Cards";
import Service from "./Service";
import { useState } from "react";
import { useEffect } from "react";

export const Layaut = () => {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
               console.log(result)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])

  return (
    <div>
          <>
            <div className="container">
                <div className="left-content">
                    <div  className="float-end">
                         <Cards pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    </div>
                 
                    
                    <div className="btn-group">
                        {  prevUrl && <button  className="btn btn-primary" onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Anterior</button>}

                        { nextUrl && <button className="btn btn-primary" onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Siguiente</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Service data={pokeDex}/>
                </div>
            </div>
        </>
    </div>
  )
}

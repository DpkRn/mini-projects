import axios from "axios";
import { useEffect, useState } from "react";

export default function useSearch(pageNumber){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);


    useEffect(()=>{
        
        const fetchData=async()=>{
            try{
                setLoading(true)
                const res=await axios.get('https://jsonplaceholder.typicode.com/photos',{
                    params:{_page:pageNumber,_limit:10}
                })
                console.log(pageNumber)
                setData(prev=>[...prev,...new Set(res.data.map(item=>item.title))])

            }catch(err){
                console.log(err);
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[pageNumber])

    return {data,loading}
}
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Box } from '@mui/material';


const Feed = () => {
const [quote, setQuote] = useState([]);
useEffect(()=>{
   axios.get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',{headers: {
    'X-RapidAPI-Key': '733c453936msh491b5a2a3f23953p136746jsnb4794ded9d40',
    'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
  }})
   .then((response)=>{setQuote(response.data)})
   .catch((error)=>{console.log(error)}) 
},[])

  return (
    <Box  height='200px' width='800px'  sx={{marginTop:'80px',border:'1px solid',}}>Quote:{quote.text} <br/> by {quote.author}</Box>
  )
}

export default Feed
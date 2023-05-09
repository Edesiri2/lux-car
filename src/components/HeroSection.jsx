import {React} from 'react'
import {useNavigate} from 'react-router-dom'
import { Stack, Box } from '@mui/material'
import Buton from './Utilities/Buton';
import './Herosection.css'




const HeroSection = () => {
    const submit = useNavigate();


  return (
    <Box>
        <Box className='herosection'  style={{marginTop:'5rem'}}>
        <h2 style={{fontSize:'40px',fontFamily:'helvetica',fontWeight:'lighter' }}>Sell easily on </h2>
       <ul className='spinal'> 
        <li><span style={{color: '#332089', fontSize:'90px'}}>Social Media</span></li>
        <li><span style={{color: '#332089', fontSize:'90px'}}>face book</span></li>
        <li> <span style={{color: '#332089', fontSize:'90px'}}>Twitter</span></li></ul><br/>
        <h2 style={{fontSize:'20px',fontWeight:'lighter'}}>Catlog helps businesses take orders via chat,<br/>manage their businesses & get paid easily. </h2>
       <br/> 
    </Box>
    <div className='bttn' style={{width:'200px',marginLeft:'33rem', justifyContent:'space-evenly'}} ><Buton sx={{ bgcolor: '#332089',marginright:'20px'}} variant='contained' name='Explore'/> 
       <br/><br/> <Buton onClick={()=>submit('/login')} sx={{ color: '#332089',bgcolor:'white' }} variant='outlined' name='Login'/></div>
    
        </Box>
    
     
    
  )
}

export default HeroSection
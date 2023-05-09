import React from 'react'
import{Box, Stack} from '@mui/material';
import prymary from '../Asset/primary.svg';
import Buton from './Utilities/Buton';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const control = useNavigate()
    
  return (
    <Stack className='navbar' direction='row'>
        <Box><img onClick={()=>{control('/')}} width='80px'height='40px' src ={prymary} alt=''/> </Box>
        <Box>
            <ul style={{color:'#656565',display:'flex',fontSize:'15px',listStyleType:'none'}}>
                <li className='list'>Products</li>
                <li className='list'>Wallet</li>
                <li className='list'>Contact Us</li>
            </ul>
        </Box>
        <Box>
          Log in  <Buton onClick={()=>{control('/register')}} variant='contained' sx={{bgcolor: '#332089'}} name='Sign Up'/></Box>
       
    </Stack>
  )
}

export default Navbar
import React from 'react'
import {Stack,Box,TextField} from '@mui/material'
import Buton from './Utilities/Buton'
import dogo from '../Asset/dog.jpg'



const login = () => {
  return (
    <Stack sx={{backgroundColor:'white',paddingTop:'2rem',borderRadius:'24px', paddingLeft:'2rem',paddingRight:'2rem', height:'60vh',width:'250px',marginLeft:'30rem', marginTop:'4rem'}} className='login' >
      <Box sx={{justifyItems:'centre', marginLeft:'4.5rem', marginBottom:'2rem', backgroundColor:'silver', height:'110px', width:'100px',borderRadius:'50%'}}><img style={{width:'110px',borderRadius:'50%'}} src={dogo} alt=''/></Box>
      <TextField  label='User Name' placeholder='enter username' variant='standard' required='true'></TextField>
      <TextField type='password' label='Password' placeholder='enter password' variant='standard' required='true'></TextField>
        <Buton sx={{marginTop:'3rem'}} variant='contained' name='Submit' />
    </Stack>
  )
}

export default login
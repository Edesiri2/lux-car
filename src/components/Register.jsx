import React from 'react'
import { Stack,Box, } from '@mui/material'
import { useState } from 'react'
import Feed from './Feed'
import Sideba from './Sideba'

const Register = () => {
const [search, setSearch] = useState('');



  return (
    <Stack justifyContent='space-between' sx={{ flexDirection:{sm:'column',md:'row'}, backgroundColor:'#fff'}}>
    <Box sx={{width:{sm:'100vw',md:'20vw'},height:{sm:'auto',md:'100vh'},borderRight: '1px solid'}}>
    <Sideba/>
    </Box>
    <Box sx={{ width:{sm:'100vw',md:'79vw'},height:{sm:'auto',md:'100vh'}}}>
      <Feed/>
    </Box>

    </Stack>
  )
}

export default Register
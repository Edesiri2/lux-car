import React from 'react'
import { Stack } from '@mui/material'
import constant from './Utilities/constant'


const Sideba = () => {
  return (
    <Stack sx={{flexDirection:{sm:'row',xs:'row',md:'column'},mt:'28px',}} >{constant.map((item)=>(
        <button style={{display:'flex',borderRadius:'20px',marginTop:'10px', fontSize:'20px',padding:'7px',alignItems:'center'}}>
            <span  style={{marginRight:'15px'}} >{item.icon}</span><span style={{}}>{item.name}</span>
        </button>
    ))}</Stack>
  )
}

export default Sideba
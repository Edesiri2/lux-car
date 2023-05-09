import React from 'react'
import {Button} from '@mui/material'


const Buton = ({name,variant,sx,onClick}) => {
  return (
    <Button onClick={onClick} sx={sx} variant={variant}>{name}</Button>
    
  )
}

export default Buton
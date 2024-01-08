import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import '../App.css'

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box className='footer' sx={{
                height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box  component='span' sx={{ color: palette.primary.main }}> © 2023-2024 BMyC | All rights reserved !</Box>

            </Box>
        </>
    )
}

export default Footer
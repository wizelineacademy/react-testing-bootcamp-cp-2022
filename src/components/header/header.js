import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Header = () => {
    return (
        <Box my={4}
             sx={{
                 border: 1,
                 borderColor: 'primary.dark',
                 borderRadius: '16px',
                 backgroundColor: 'primary.light',
             }}>
            <Typography variant="h4" component="h4" align="center">
                React Specialized Bootcamp - Testing Capstone Project
            </Typography>
        </Box>
    )
}
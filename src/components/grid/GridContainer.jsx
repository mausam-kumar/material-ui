import React from 'react'
import Paper from '@mui/material/Paper';

function GridContainer({number}) {
    var styleTheme = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <Paper sx={styleTheme}>
            {number}
        </Paper>
    )
}

export default GridContainer

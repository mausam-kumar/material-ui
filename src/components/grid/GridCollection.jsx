import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


import GridContainer from './GridContainer.jsx'

function GridCollection() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="1" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="2" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="3" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="4" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="5" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="6" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="7" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="8" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="9" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="10" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="11" />
                    </Grid>
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <GridContainer number="12" />
                    </Grid>
            </Grid>
        </Box>
    )
}

export default GridCollection

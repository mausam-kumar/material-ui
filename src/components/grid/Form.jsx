import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles({
    button:{
        background:"green",
        color: "white"
    },
    textField:{
        color: "green",
        width:"400px"
    },
    mainBox:{
        margin: "20px",
    },

})

function Form() {

    const [state,setState] = React.useState({
        checkbox:true,
        textField:"Enter Username",
        currency:"EUR",
        dateValue:""
    })

    function handleStateChange(e){
        let name = e.target.name
        console.log("name =>",name,e.target.value);
        setState({
            ...state,   
            [name]:e.target.value
        })
    }

    function handleCheckbox(e){
        let name = e.target.name 
        console.log(state.checkbox);
        setState({
            ...state,
            [name]:!state.checkbox
        })
    }

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

    const classes = useStyles()

    return (
        <Box className={classes.mainBox}>
            
                <Button 
                    sx={{margin:"15px"}}
                    className = {classes.button}
                    
                    sx={{margin:"20px"}} 
                    variant="contained" 
                    size="large"
                    name="errorBtn"
                    startIcon={<AddIcon />} 
                    endIcon={<RemoveIcon />}
                    >
                        Start
                </Button>
            
            <Checkbox 
                sx={{margin:"15px"}}
                // defaultChecked 
                sx={{color:pink[800]}}
                name="checkbox"
                checked={state.checkbox}
                onChange={(e) => handleCheckbox(e)}
            />
            <TextField 
                sx={{margin:"15px"}}
                className={classes.textField}
                id="outlined-basic" 
                variant="outlined" 
                name="textField"
                label="Username"
                required
                value={state.textField}
                onChange={(e) => handleStateChange(e)}
            />


            <TextField
                sx={{margin:"15px"}}
                id="outlined-select-currency"
                select
                label="Select"
                value={state.currency}
                onChange={handleStateChange}
                name="currency"
                helperText="Please select your currency"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                sx={{margin:"15px"}}
                id="date"
                label="Birthday"
                type="date"
                name="dateValue"
                value={state.dateValue}
                onChange={(e) => handleStateChange(e)}
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </Box>
    )
}

export default Form

import React, {useState, useRef, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {Box,Typography, TextField,Button} from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import emailjs, { init, sendForm } from 'emailjs-com';
init('g7HhDXP32Q-7VYtsS');

const Login = () => {
    let navigate = useNavigate();
    const [isSignUp, setIsSignUp] =useState(false);
    const [isCorrect, setIsCorrect] =useState(false);
    const [code, setCode] = useState([]);
    const form = useRef();

    const storeMfa = () => {
        var mfaCode = Math.floor(Math.random() * 100000) + 1;
        setCode([mfaCode])
    }
    useEffect(() => storeMfa(), []);

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            'service_dongtian', 
            'template_dongtian',
            e.target, 'g7HhDXP32Q-7VYtsS').then(res=>
                {
                    console.log(res)
                }).catch(err=>console.log(err))
    }
    const resetState = (e) =>{
        setIsSignUp(!isSignUp)
        setInput({mfa:"",password:"",user_email:""})
    }
    const [input, setInput] = useState({
        mfa :"", 
        password:"",
        user_email:""
    });

    const handleLoginChange = (e)=> {
        
        setInput((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
        if (code[0] === input.mfa)
        {
            setIsCorrect(!isCorrect);
        }
        
        console.log(input.mfa)
    }

    return (
        <div className = "passw">
            <form onSubmit = {sendEmail}>
            <Box 
                display ="flex" 
                flexDirection={"column"} 
                maxWidth = {400}
                alignItems = "center"
                justifyContent={'center'}
                margin = "auto"
                marginTop = {5}
                padding = {3}
                borderRadius = {5}
                >
                    
            <Typography
                style={{
                    color: "#ec407a",
                }}
                sx={{ fontWeight: 'bold' }} variant="h2">
                    {isSignUp ? "Sign Up" : "Login"}
            </Typography>

            <TextField
            sx= {{marginTop : 3, borderRadius : 3}}
            size = "small"
            name = "user_email"
            value ={input.user_email}
            placeholder = "Email"
            onChange = {handleLoginChange}
            />

            <TextField
            sx= {{marginTop : 3, borderRadius : 3}}
            size = "small"
            type = "password"
            name = "password"
            value ={input.password}
            placeholder = "Password"
            onChange = {handleLoginChange}
            />
            
            <div className = "mfa_field">

            {!isSignUp && 
            <>
            <TextField
            sx= {{marginLeft:11.1,marginTop : 3, borderRadius : 3, width:140}}
            size = "small"
            name = "mfa"
            value ={input.mfa}
            placeholder = "2FA"
            onChange = {handleLoginChange}
            />

            
            <Button
            onClick = {()=>console.log(code[0], isCorrect)}
                sx= {{marginTop : 3, borderRadius : 3, marginLeft:1 }}
                style={{
                    borderColor: "#ec407a",
                    color: "#ec407a",
                }}
                variant="outlined">
                    SEND
                    </Button>
            </>
            }
            </div>
                {isCorrect && 
                
                <Button 
                onClick = {()=> {navigate("/home")}}
                sx= {{marginTop : 3, borderRadius : 3}}
                style={{display: 'flex',  justifyContent:'center', alignItems:'center',
                    backgroundColor: "#ec407a",
                    color: "#FFFFFF",
                }}>
                    Enter
                    </Button>
                
                }
                    

            <Button 
                onClick = {resetState} sx= {{marginTop : 3, borderRadius : 3}}
                style={{
                    color: "#ec407a",
                }}>
                    {isSignUp ? "Login" : "Sign Up"}
            </Button>
            </Box>
                
            </form>

        </div> 
    );
}

export default Login
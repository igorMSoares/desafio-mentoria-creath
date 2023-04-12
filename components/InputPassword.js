import { useState } from 'react';
import styled from 'styled-components';
import {GrView } from 'react-icons/gr';
import {BiHide} from 'react-icons/bi'

const StyledInput = styled.input`
    width: 220px;
    height: 30px;
    background: #E6E6E6;
    border-radius: 10px;
    border-style: none;
    padding-left:10px;
    font-style: normal;
    outline:none;
`;
const StyledLabel = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
`;

const StyledForm = styled.div`
   flex-direction: column;
   display: flex;
`;
const Styledtoggle = styled.button`
    width: 25px;
    background: #E6E6E6;
    border-style:none;
    display:flex;
    justify-content:flex-end;
    cursor: pointer;
`;
const StyledContainer = styled.div`
    width:255;
    display:flex;
    align-items: center;
    background: #E6E6E6;
    border-radius: 10px;
`;

export default function InputPassword(){
    const [passwordShow, setShow] = useState(false)


    const togglePassword = () =>{
        setShow(!passwordShow);
    }
    const Icon = ()=>{
        if(!passwordShow){
            return(
                <Styledtoggle onClick={togglePassword}>
                    <GrView size={17}/>
                </Styledtoggle>
            );
        }
        else{
            return(
            <Styledtoggle onClick={togglePassword}>
                <BiHide size={17}/>
            </Styledtoggle>
            );
        }
    }
    ;

    const LabelInput = ({text}) => <StyledLabel>{text}</StyledLabel>;
    const InputPassword = ()=> <StyledInput 
    type={passwordShow? "text" : "password"}>
    </StyledInput>;

    


    return(
        <StyledForm>
            <LabelInput text="Password"/>
            <StyledContainer>
                <InputPassword/>
                <Styledtoggle>
                    <Icon/>
                </Styledtoggle>
            </StyledContainer>
        </StyledForm>
    );
}
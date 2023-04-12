import { useState } from 'react';
import styled from 'styled-components';





const StyledForm = styled.div`
   flex-direction: column;
   display: flex;
`;


const StyledInput = styled.input`
    outline:none;    
    width: 255px;
    height: 30px;
    background: #E6E6E6;
    border-radius: 10px;
    border-style: none;
    padding-left:10px;
    font-style: normal;
`;

const StyledLabel = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
`;

const LabelInput = ({text}) => <StyledLabel>{text}</StyledLabel>
const InputForm = ({type}) => <StyledInput type={type}></StyledInput>
const ButtonView = ()=> <StyledButtonView onClick={togglePassword}></StyledButtonView>

 const Form = ({label, typeB}) => {
    return(
        <StyledForm>
            <LabelInput text={label}/>
            <InputForm type={typeB}/>
        </StyledForm>
    );
}

export default Form;
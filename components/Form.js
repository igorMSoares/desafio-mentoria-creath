import styled from 'styled-components';

const StyledForm = styled.div`
   
`;

const StyledInput = styled.input`
    width: 255px;
    height: 32px;
    background: #E6E6E6;
    border-radius: 10px;
`;

const StyledLabel = styled.label`
    width: 51px;
    height: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
`;

const LabelInput = ({text}) => <StyledLabel>{text}</StyledLabel>
const InputForm = () => <StyledInput></StyledInput>

 const Form = ({label}) => {
    return(
        <StyledForm>
            <LabelInput text={label}/>
            <InputForm/>
        </StyledForm>
    );
}

export default Form;
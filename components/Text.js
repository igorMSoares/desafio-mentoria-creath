import Link from 'next/link';
import styled from 'styled-components';


const StyledText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    display:flex;
    justify-content:center;
    cursor: pointer;
`;

const Text = ({text, click, link}) => {
    return(
    <StyledText onClick={click}>
        <Link href={link}>{text}</Link>
    </StyledText>
)}

export default Text;
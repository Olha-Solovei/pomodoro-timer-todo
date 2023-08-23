import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const StyledLabel = styled.label`
    input{
        position: fixed;
        left: -999999px;
    }
    input ~ div{
        width: 54px;
        height: 24px;
        background: #eee;
        border-radius: 12px;
        position: relative;
        
    }
    svg{
        height: 22px;
        width: 25px;
        color: #eee;
        background-color: #989797;
        border-radius: 11px;
        fill:  #eee;
        position: absolute;
        left: 1px;
        top: 1px;
        transition: all .3s ease;
    }
    input:checked ~ div{
        background: #225858;
        svg{
            background-color: #062E2E;
            left: 28px;
        }
    }
`;

function Toggler() {

    const theme = useContext(ThemeContext)

    return (
        <StyledLabel>
            <input type="checkbox"
                checked={theme.darkmode}
                onChange={() => theme.setDarkMode(oldValue => !oldValue)}
            />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
            </div>
        </StyledLabel>
    );
}

export default Toggler;
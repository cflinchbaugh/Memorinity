import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
`

function InputField (props) {
    let inputData = {
        placeholder: props.placeholder,
        value: props.value
    }

    return (
        <StyleWrapper>
           <input {...inputData}></input>
        </StyleWrapper>
    )
}

export default InputField
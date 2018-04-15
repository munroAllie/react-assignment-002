import React from 'react'

const Validation = (props) => {
    let message = 'Text is long enough';
    if(props.length <= 5){
        message = 'text is too short'
    }

    return (
        <p>{message}</p>
    )
}

export default Validation;
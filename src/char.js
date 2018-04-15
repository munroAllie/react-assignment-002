import React from 'react'

const divStyle = {
    display: 'inline-block'
}

const paragraphStyle = {
    backgroundColor: '#000',
    cursor: 'pointer',
    color: '#fff',
    display: 'inline-block',
    boxShadow: '0 2px 0 #ccc',
    padding: '10px',
    margin: '2px'
}

const Char = (props) => {
    return (
        <div style={divStyle}>
            <p style={paragraphStyle} onClick={props.click}>{props.char}</p>
        </div>
    )
}

export default Char

import React from 'react'
import Part from './Part'

function Content(props) {

    return (
        <>
            <Part name={props.parts.parts[0].name} subt={props.parts.parts[0].exercises} />
            <Part name={props.parts.parts[1].name} subt={props.parts.parts[1].exercises} />
            <Part name={props.parts.parts[2].name} subt={props.parts.parts[2].exercises} />


        </>
    )
}

export default Content
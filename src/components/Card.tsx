import React from 'react'
import classes from './Card.module.css'


export default function Card({ type, group, description, summary, rate, width, height,unit }: any) {
    return (
        <div className={classes.wrapper}>
            <p>Type: <span>{type}</span></p>
            <p>Group: <span>{group}</span></p>
            <p>Description: <span>{description}</span></p>
            <p>Rate: <span>{rate}</span></p>
            <p>Width: <span>{width}</span></p>
            <p>Height: <span>{height}</span></p>
            <p>Summary: <span>{summary}</span></p>
            <p>Unit: <span>{unit}</span></p>
        </div>
    )
}

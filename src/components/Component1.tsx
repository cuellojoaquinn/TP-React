//atajo: rafc

import { FC } from "react"

interface IPropsComponent1{
    text: string
    color: string
    fontsize?: number
}

const Component1 : 
    FC<IPropsComponent1>= ({text, color, fontsize}) => {
    return (
        <div style={{color: `${color}`, fontSize: `${fontsize || 1.5}rem`}}>
            <p>{text}</p>
        </div>
    )
    }

export default Component1

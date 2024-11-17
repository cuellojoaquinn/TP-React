import { FC } from "react"

interface IPropsMiPrimerComponent {
    text: String
    color: String
    fontSize?: number
}

export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({ text, color, fontSize }) => {
    return (
        <div style={{ color: `${color}`, fontSize: `${fontSize || 5}rem` }}><p>{text}</p></div>
    )
}

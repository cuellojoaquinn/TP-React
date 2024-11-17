import { ChangeEvent, useState } from "react"

//Interface genérica
interface FormValues {
    [key: string]: String | number
}


export const useForm = <T extends FormValues>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setValues({ ...values, [`${name}`]: value })
    }

    const resetForms = () => {
        setValues(initialValues)
    }

    return {
        values,
        handleChange,
        resetForms
    }
}
import { useEffect, useRef, useState } from "react"

export const FormularioComponent = () => {

    const focusRef = useRef()

    console.log(focusRef)

    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        password: ""
    })

    const {userName, userEmail, password} = formData

    const inputChange = ({target}) => {

        const {name, value} = target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    console.log("Componente renderizado")
    

    return (
        <form onSubmit={ onSubmit }>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={userName}
                    onChange={ inputChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email address</label>
                <input
                ref={focusRef}
                    type="email"
                    className="form-control"
                    name="userEmail"
                    value={userEmail}
                    onChange={ inputChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={ inputChange }
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    )
}
import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    // States
    const [registerFormData, setRegisterFormData] = useState({
        email: '',
        password: '',
        password2: ''
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });
    const [categoryFormData, setCategoryFormData] = useState({
        title: '',
        description: ''
    });
    const [show, setShow] = useState(false);

    // Functions
    const onRegisterChange = e => setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
    const onLoginChange = e => setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    const onCategoryChange = e => setCategoryFormData({ ...categoryFormData, [e.target.name]: e.target.value });

    const clearRegisterField = e => setRegisterFormData({ ...registerFormData, email: "", password: "", password2: "" });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <Context.Provider
            value={{
                registerFormData,
                onRegisterChange,
                clearRegisterField,

                loginFormData,
                onLoginChange,

                categoryFormData,
                onCategoryChange,

                show,
                handleShow,
                handleClose
            }}
        >
            {children}
        </Context.Provider>
    )
}
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
    const [accountFormData, setAccountFormData] = useState({
        account_email: '',
        account_password: '',
        description: ''
    });
    const [show, setShow] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [categoryID, setCategoryID] = useState("");
    const [accountList, setAccountList] = useState([]);
    

    // Functions
    const onRegisterChange = e => setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
    const onLoginChange = e => setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    const onCategoryChange = e => setCategoryFormData({ ...categoryFormData, [e.target.name]: e.target.value });
    const onAccountChange = e => setAccountFormData({ ...accountFormData, [e.target.name]: e.target.value });

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

                accountFormData,
                onAccountChange,

                categoryID,
                setCategoryID,

                accountList,
                setAccountList,

                show,
                handleShow,
                handleClose,

                passwordError,
                setPasswordError,
                emailError,
                setEmailError,
                hasError,
                setHasError
            }}
        >
            {children}
        </Context.Provider>
    )
}
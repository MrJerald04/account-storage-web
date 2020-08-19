import axios from "axios";
import api_base from "./api_base_url";
import cookie from "react-cookies";
const TOKEN_KEY = "_jwt";
// cookie.save(key, data, path)
// cookie.remove(key, path)
// cookie.load(key)

const onLogin = async(formData, props, setHasError) => {
    const api_url = api_base + "/api/login";
    const headers = {
        headers: { "Content-Type": "application/json" },
    };
    const req = {
        email: formData.email,
        password: formData.password,
    };
    axios
        .post(api_url, req, headers)
        .then((res) => {
            const data = res.data
            if (data.status === 'success') {
                cookie.save(TOKEN_KEY, data.token, { path: "/" });
                props.history.push('/dashboard');
            }else{
                setHasError(true);
            }
            // console.log(data)
        })
        .catch((error) => {
            if (error.response.data.status === "warning") {
                setHasError(true);
            }
            console.log(error.response.data);
        });
}
const api = {
    handleLogin: async (
        formData,
        props,
        setHasError
    ) => {
        onLogin(formData, props, setHasError);
    },
    handleLogout: () => {
        cookie.remove(TOKEN_KEY, { path: "/" });
        window.location.href= '/';
    },
    authenticateToken: async (isTokenValid) => {
        const api_url = api_base + "/api/auth-token";
        const headers = {
            headers: { 
                "Content-Type": "application/json",
                "x-auth-token": cookie.load(TOKEN_KEY)
            },
        };
        
        axios
            .get(api_url, headers)
            .then((res) => {
                const data = res.data
                
                if (data.status === "success") {
                    isTokenValid = true;
                    // return true;
                }else{
                    isTokenValid = false;
                    // return false;
                    console.log(data)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    handleRegister: async (
        formData,
        setEmailError,
        props
    ) => {
        const api_url = api_base + "/api/signup";
        const headers = {
            headers: { "Content-Type": "application/json" },
        };
        const req = {
            email: formData.email,
            password: formData.password,
        };
        axios
            .post(api_url, req, headers)
            .then((res) => {
                const data = res.data
                
                if (data.status === "warning") {
                    setEmailError(true);
                }else{
                    onLogin(formData, props);
                }
                console.log(res.data)
            })
            .catch((error) => {
            console.log(error);
            });
    },
    handleAccountCategoryList: async (
        setAccountCategoryList
    ) => {
        const api_url = api_base + "/api/account-category/retrieve";
        const headers = {
            headers: { "Content-Type": "application/json",
            "x-auth-token": cookie.load(TOKEN_KEY) }
            
        };
        axios
            .get(api_url, headers)
            .then((res) => {
                const data = res.data;
                setAccountCategoryList(data.data);
            })
            .catch((error) => {
            console.log(error);
            });
    },
    handleStoreAccountCategory: async (
        categoryFormData
    ) => {
        const api_url = api_base + "/api/account-category/add";
        const headers = {
            headers: { "Content-Type": "application/json",
            "x-auth-token": cookie.load(TOKEN_KEY) }
        };
        const req = {
            title: categoryFormData.title,
            description: categoryFormData.description,
        }
        axios
            .post(api_url, req, headers)
            .then((res) => {
                const data = res.data;
                console.log(data)
            })
            .catch((error) => {
            console.log(error);
            });
    },
    handleRetrieveAccount: async (
        setAccountList,
        accountCategoryID
    ) => {
        console.log(accountCategoryID)
        const api_url = api_base + `/api/account/retrieve/${accountCategoryID}`;
        const headers = {
            headers: { "Content-Type": "application/json",
            "x-auth-token": cookie.load(TOKEN_KEY) }
        };
        axios.get(api_url, headers)
            .then((res) => {
                const data = res.data;
                console.log(data)
                setAccountList(data.data)
            })
            .catch((error) => {
                if (error.response.data.status === "warning") {
                    setAccountList([]);
                }
                console.log(error.response.data);
            });
    },
    handleRetrieveAccountCategoryData: async (
        setAccountCategoryData,
        accountCategoryID
    ) => {
        const api_url = api_base + "/api/account-category/retrieve/"+accountCategoryID;
        const headers = {
            headers: { "Content-Type": "application/json",
            "x-auth-token": cookie.load(TOKEN_KEY) }
        };
        axios
            .get(api_url, headers)
            .then((res) => {
                const data = res.data;
                setAccountCategoryData(data.data)
                console.log(data)
            })
            .catch((error) => {
            console.log(error);
            });
    },
    handleStoreAccount: async (
        accountCategoryID,
        accountFormData
    ) => {
        const api_url = api_base + "/api/account/add";
        const headers = {
            headers: { "Content-Type": "application/json",
            "x-auth-token": cookie.load(TOKEN_KEY) }
        };
        const req = {
            account_category_id: accountCategoryID,
            account_email: accountFormData.account_email,
            account_password: accountFormData.account_password,
            description: accountFormData.description,
        }
        axios
            .post(api_url, req, headers)
            .then((res) => {
                const data = res.data;
                console.log(data)
            })
            .catch((error) => {
            console.log(error);
            });
    },
}

export default api;


import axios from "axios";
import api_base from "./api_base_url";

const onLogin = async(formData, props) => {
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
                props.history.push('/dashboard');
            }
            
            console.log(data)
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
const api = {
    handleLogin: async (
        formData,
        props
    ) => {
        onLogin(formData, props);
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
}

export default api;


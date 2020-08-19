import cookie from 'react-cookies'
import api from '../api/api';
const TOKEN_KEY = '_jwt';


const util = {
    isLogin: () => {
        if (cookie.load(TOKEN_KEY) !== undefined) {
            const isAuthenticated = api.authenticateToken();
            if (isAuthenticated) {
                return true;
            }else{
                return false;
            }
            
        }
        return false;
    }
}
export default util;
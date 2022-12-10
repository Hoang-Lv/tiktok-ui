import * as request from '../ultis';
const Login = async (data) => {
    try {
        const res = await request.post(`auth/login`, data);
        return res;
    } catch (err) {
        console.log('Mật khẩu sai!');
    }
};
export default Login;

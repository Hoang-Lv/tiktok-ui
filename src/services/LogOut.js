import * as request from '../ultis';
const LogOut = async (token) => {
    try {
        const res = await request.authPost(`/auth/logout`, {}, token);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default LogOut;

import * as request from '../ultis';
const register = async (form) => {
    try {
        const res = await request.post('auth/register', form);
        return res;
    } catch (error) {
        console.log('tai khoan da duoc dang ki');
    }
};
export default register;

import * as request from '../ultis';
const UpdateUser = async (token, data) => {
    try {
        const res = await request.patch(`auth/me?_method=PATCH`, token, data);
        return res.data;
    } catch (err) {
        console.log('Id đã tồn tại!');
    }
};
export default UpdateUser;

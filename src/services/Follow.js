import * as request from '../ultis';
const Follow = async (id, type, token) => {
    try {
        const res = await request.authPost(`users/${id}/${type}`, {}, token);
        return res.data;
    } catch (err) {}
};
export default Follow;

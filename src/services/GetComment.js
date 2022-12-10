import * as request from '../ultis';
const GetComment = async (id, token) => {
    try {
        const res = await request.get(`videos/${id}/comments`, '', token);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default GetComment;

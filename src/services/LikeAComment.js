import * as request from '../ultis';
const LikeAComment = async (id, type, token) => {
    try {
        const res = await request.authPost(`comments/${id}/${type}`, '', token);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default LikeAComment;

import * as request from '../ultis';
const DeleteAComment = async (id, token) => {
    try {
        const res = await request.authDelete(`comments/${id}`, '', token);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default DeleteAComment;

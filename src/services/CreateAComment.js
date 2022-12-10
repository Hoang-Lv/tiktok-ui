import * as request from '../ultis';
const CreateAComment = async (uuid, token, data = '') => {
    try {
        const res = await request.authPost(
            `videos/${uuid}/comments`,
            {
                comment: data,
            },
            token,
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default CreateAComment;

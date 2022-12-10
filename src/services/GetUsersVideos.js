import * as request from '../ultis';
const GetUsersVideos = async (id, page) => {
    try {
        const res = await request.get(`/users/${id}/videos`, {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default GetUsersVideos;

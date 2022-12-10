import * as request from '../ultis';
const Followings = async (page = 1, token) => {
    try {
        const res = await request.get(
            `/me/followings`,
            {
                params: {
                    page,
                },
            },
            token,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default Followings;

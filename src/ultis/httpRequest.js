import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, data = {}, token) => {
    const response = await httpRequest.get(
        path,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        { ...data },
    );
    return response.data;
};
export const authGet = async (path, token = '') => {
    const response = await httpRequest.get(
        path,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return response.data;
};
export const post = async (path, data = {}) => {
    const response = await httpRequest.post(path, { ...data });
    return response.data;
};
export const authPost = async (path, data = {}, token) => {
    const response = await httpRequest.post(
        path,
        { ...data },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return response.data;
};
export const authDelete = async (path, data = {}, token) => {
    const response = await httpRequest.delete(path, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const patch = async (path, token = '', data = {}) => {
    const response = await httpRequest.patch(
        path,
        { ...data },
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );
    return response;
};

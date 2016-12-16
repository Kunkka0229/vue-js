import fetchApi from './index';

export const login = (data) => {
    return fetchApi({
        url: '/accesstoken',
        method: 'post',
        body: {accesstoken: data.accessToken}
    })
};

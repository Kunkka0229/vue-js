import fetchApi from './index';

export const login = (data) => {
    return fetchApi({
        url: '/accesstoken',
        method: 'post',
        body: {accesstoken: data.accesstoken}
    })
};

export const topicList = (data) => {
    return fetchApi({
        url: '/topics',
        body: {params: {...data}}
    })
};

export const topicInfo = (id) => {
    return fetchApi({
        url: '/topic/' + id
    })
};

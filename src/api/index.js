import axios from 'axios';

// vue-js api 路径前缀
const urlBase = 'http://www.vue-js.com/api/v1';

const baseOpts = {
    url: '/accesstoken',
    method: 'post',
    body: {}
};

const fetchApi = (cfg) => {
    let opts = Object.assign({}, baseOpts, cfg);
    const url = opts.url;
    const method = opts.method;
    const data = opts.body;

    // vue-js 数据请求地址
    let dataUrl = urlBase + url;

    return new Promise((resolve, reject) => {
        axios[method](dataUrl, data)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    })
};

export default fetchApi;

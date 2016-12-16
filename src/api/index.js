import 'es6-promise/auto';
import axios from 'axios';

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
    
    let fetchUrl = urlBase + url;

    if(method === 'post'){
       return new Promise((resolve, reject) => {
           axios.post(fetchUrl, data)
               .then(function (response) {
                   resolve(response);
               })
               .catch(function (error) {
                   reject(error);
               });
       })
    }
};

export default fetchApi;





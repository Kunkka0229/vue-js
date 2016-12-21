import * as types from '../mutation-types';
import {topicList, topicInfo} from '../../api/publicApi';

const state = {
    topics: [],
    topicInfo: {}
};

const getters = {
    topics: state => state.topics,
    topicInfo: state => state.topicInfo
};

const mutations = {
    // 获得topic列表
    [types.GET_TOPIC_LIST](state, data){
        state.topics = data;
    },
    // 更新topic列表
    [types.UPDATE_TOPIC_LIST](state, data){
        state.topics = [...state.topics, ...data]
    },
    [types.GET_TOPIC_INFO](state, id){
        state.topicInfo = id;
    }
};

const actions = {
    [types.GET_TOPIC_LIST]({commit}, data){
        return topicList(data).then((response) => {
            commit(types.GET_TOPIC_LIST, response);
        })
    },
    [types.GET_TOPIC_INFO]({commit}, id) {
        return topicInfo(id).then((response) => {
            commit(types.GET_TOPIC_INFO, response);
        })
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}




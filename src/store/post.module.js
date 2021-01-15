import PostService from '../services/post.service';

export const post = {
    namespaced: true,
    state : '',
    actions: {
        postNew({ commit }, postObj) {
            return PostService.postNew(postObj).then(
                response => {
                    console.log('post.module.js postNew success')
                    return Promise.resolve(response)
                },
                error => {
                    console.log('post.module.js postNew error', error)
                    return Promise.reject(error);
                }
            )
        },
        postList({ commit }, ) {
            return PostService.postList().then(
                response => {
                    console.log('post.module.js postList success')
                    return Promise.resolve(response)
                },
                error => {
                    console.log('post.module.js postList error', error)
                    return Promise.reject(error);
                }
            )
        },
        postDetail({ commit }, paramsId) {
            return PostService.postDetail(paramsId).then(
                response => {
                    console.log('post.module.js postDetail success')
                    return Promise.resolve(response)
                },
                error => {
                    console.log('post.module.js postList error', error)
                    return Promise.reject(error);
                }
            )
        },     
        postUpdate({ commit }, payload) {
            let pathVariable = payload[0];
            let postObj = payload[1];

            return PostService.postUpdate(pathVariable, postObj).then(
                response => {
                    console.log('post.module.js postUpdate success')
                    return Promise.resolve(response)
                },
                error => {
                    console.log('post.module.js postUpdate error', error)
                    return Promise.reject(error);
                }
            )
        },           
        postDelete({ commit }, paramsId) {
            return PostService.postDelete(paramsId).then(
                response => {
                    console.log('post.module.js postDelete success', response)
                    return Promise.resolve(response)
                },
                error => {
                    console.log('post.module.js postDelete error', error)
                    return Promise.reject(error);
                }
            )
        },   
    },
    mutations: {
    
    }
}
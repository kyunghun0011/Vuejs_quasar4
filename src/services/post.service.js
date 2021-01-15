import http from './http.service';
import authHeader from './auth-header';

class PostService {
    postNew(postObj) {
        return http.post('/posts/', {
            userId : postObj.userId,
            id : postObj.id,
            title : postObj.title,
            body : postObj.body
        }, 
        { Headers : authHeader() }
        )
        .then(response => {
          console.log('post.service.js postNew success', response)
          return response.data;
        })
        .catch( error => {
          console.log('post.service.js postNew error', error)
          return error
        });
    }
    
    postList() {
        return http.get('/posts/',
        // { Headers : authHeader() }
        )
        .then(response => {
          console.log('post.service.js postList success', response)
          return response.data;
        })
        .catch( error => {
          console.log('post.service.js postList error', error)
          return error
        });
    }

    postDetail(pathVariable) {
        return http.get('/posts/'+ pathVariable, 
        // { Headers : authHeader() }
        )
        .then(response => {
          console.log('post.service.js postDetail success', response)
          return response.data;
        })
        .catch( error => {
          console.log('post.service.js postDetail error', error)
          return error
        });
    }

    postUpdate(pathVariable, postObj) {
        return http.put('/posts/'+ pathVariable, postObj,
        // { Headers : authHeader() }
        )
        .then(response => {
          console.log('post.service.js postUpdate success', response)
          return response.data;
        })
        .catch( error => {
          console.log('post.service.js postUpdate error', error)
          return error
        });
    }

    postDelete(pathVariable) {
        return http.delete('/posts/' + pathVariable,
        // { Headers : authHeader() }
        )
        .then(response => {
          console.log('post.service.js postDelete success', response)
          return response.data;
        })
        .catch( error => {
          console.log('post.service.js postDelete error', error)
          return error
        });
    }
}

export default new PostService();
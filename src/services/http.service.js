import axios from 'axios';

const instance = axios.create({
    // baseURL : 'http://localhost:8080/' // backend server
    baseURL : 'https://jsonplaceholder.typicode.com/' // backend server
    // headers: { 'X-Custom-Header': 'foobar' },
    // timeout: 1000,
});

export default instance;

// API 테스트 서버 리스트
// https://jsonplaceholder.typicode.com/
// https://reqres.in/

// axios 문서 참고
// https://xn--xy1bk56a.run/axios/guide/api.html#%EA%B5%AC%EC%84%B1-%EC%98%B5%EC%85%98

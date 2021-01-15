import http from './http.service'

class AuthService {
  login(user) {
    return http
      .post('/api/auth/signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          console.log('auth.service.js loginSuccess', JSON.stringify(response.data))
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    console.log('auth.service.js logout');
    localStorage.removeItem('user');
  }

  register(user) {
    return http.post('/api/auth/signup', {
      email: user.email,
      password: user.password,
      username: user.username,
    }).then( response => {
      console.log('auth.service', JSON.stringify(response))
      return response
    });
  }
  
}

export default new AuthService();
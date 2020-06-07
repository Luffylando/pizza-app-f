import axios from "axios";

class AuthService {
  login(email, password) {
    return axios
      .post("http://localhost:8000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login";
  }

  me() {
    let auth = this.getCurrentUser();
    let token = auth.access_token;
    return axios.get("http://localhost:8000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  register(name, email, password) {
    return axios.post("http://localhost:8000/api/auth/register", {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();

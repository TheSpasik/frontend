import { makeAutoObservable } from "mobx";
import axios from "axios";

export default class UserStore {
  user = {};
  isAuth = false;
  isLoading = false;
  isAuthModalOpen = false;
  isLoginModalOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthModalOpen(flag) {
    this.isAuthModalOpen = flag;
  }

  setIsLoginModalOpen(flag) {
    this.isLoginModalOpen = flag;
  }

  setAuth(flag) {
    this.isAuth = flag;
  }

  setUser(user) {
    this.user = user;
  }

  async registration(username, email, password) {
    try {
      const response = await axios.post("/registration", {
        username,
        email,
        password,
      });
      this.setAuth(true);
      this.setUser({});
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async login(email, password) {
    try {
      // const response = await axios.post('/login', {email, password});
      this.setAuth(true);
      this.setUser({});
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }
}

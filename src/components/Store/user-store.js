import { makeAutoObservable } from "mobx";
import { toast, Bounce } from "react-toastify";

export default class UserStore {
  user = {};
  isAuth = false;
  isLoading = false;
  isAuthModalOpen = false;
  isChangeSubscriptionModalOpen = false;
  isChangeBioModalOpen = false;
  lookingSubscription = "";

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthModalOpen(flag) {
    this.isAuthModalOpen = flag;
  }

  setIsChangeBioModalOpen(flag) {
    this.isChangeBioModalOpen = flag;
  }

  setIsChangeSubscriptionModalOpen(flag, subscription) {
    this.isChangeSubscriptionModalOpen = flag;
    this.lookingSubscription = subscription;
  }

  setAuth(flag) {
    this.isAuth = flag;
  }

  setUser(user) {
    this.user = user;
  }

  async signUp(username, email, password) {
    try {
      const response = await fetch("http://localhost:5000/user/sign-up", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ username, email, password }),
      });
      const responseParsed = await response.json();
      if (response.status === 500) {
        toast.error(responseParsed.message);
      } else {
        this.setAuth(true);
        this.setIsAuthModalOpen(false);
        this.setUser(responseParsed);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async signIn(email, password) {
    try {
      const response = await fetch("http://localhost:5000/user/sign-in", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email, password }),
      });
      const responseParsed = await response.json();
      if (response.status === 500) {
        toast.error(responseParsed.message);
      } else {
        this.setAuth(true);
        this.setIsAuthModalOpen(false);
        this.setUser(responseParsed);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async changeBio(username, email, password) {
    try {
      const response = await fetch("http://localhost:5000/user/change-bio", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          userId: this.user?.userId,
          username,
          email,
          password,
        }),
      });
      const responseParsed = await response.json();
      if (response.status === 500) {
        toast.error(responseParsed.message);
      } else {
        this.setIsChangeBioModalOpen(false);
        this.setUser(responseParsed);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async changeSubscription(
    userId,
    subscription,
    cardNumber,
    cardDate,
    cardCVV
  ) {
    try {
      const response = await fetch(
        "http://localhost:5000/user/change-subscription",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            userId,
            subscription,
            cardNumber,
            cardDate,
            cardCVV,
          }),
        }
      );
      const responseParsed = await response.json();
      if (response.status === 500) {
        toast.error(responseParsed.message);
      } else {
        this.setIsChangeSubscriptionModalOpen(false);
        this.setUser({ ...this.user, subscription: responseParsed.subscription });
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }
}

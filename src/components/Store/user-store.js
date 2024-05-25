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
  subscriptionStats = "";

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

  setSubscriptionStats(subscriptionStats) {
    this.subscriptionStats = subscriptionStats;
  }

  async logout() {
    try {
      this.setAuth(false);
      this.setUser({});
      localStorage.removeItem("currentUserId");
    } catch (error) {
      console.log(error.message);
    }
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
        localStorage.setItem("currentUserId", responseParsed.userId);
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
        localStorage.setItem("currentUserId", responseParsed.userId);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async refreshData(userId) {
    try {
      const response = await fetch(
        `http://localhost:5000/user/refresh/${userId}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      );
      const responseParsed = await response.json();
      if (response.status === 500) {
        // toast.error(responseParsed.message);
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
        this.setUser({
          ...this.user,
          subscription: responseParsed.subscription,
          entranceCode: responseParsed.entranceCode,
          subscriptionExpiredAt: responseParsed.subscriptionExpiredAt,
        });
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async getSubscriptionStats() {
    try {
      const response = await fetch(
        "http://localhost:5000/user/subscription-stats",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      );
      const responseParsed = await response.json();
      if (response.status === 500) {
        toast.error(responseParsed.message);
      } else {
        this.setSubscriptionStats(responseParsed);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }
}

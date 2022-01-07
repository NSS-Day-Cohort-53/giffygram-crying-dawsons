import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { fetchPosts, fetchUsers, getUsers, setCurrentUser } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  Promise.all([fetchUsers(), fetchPosts()]).then(() => {
    const user = parseInt(localStorage.getItem("gg_user"));

    if (user) {
      const users = getUsers();
        setCurrentUser(users.find(i => i.id === user));
      applicationElement.innerHTML = GiffyGram();
    } else {
      applicationElement.innerHTML = LoginForm();
    }
	});
};

document.addEventListener("stateChanged", (event) => {
	renderApp();
});

renderApp();
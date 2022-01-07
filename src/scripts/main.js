import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { fetchMessages, fetchUsers } from "./data/provider.js";
import { fetchPosts, fetchUsers, getUsers, setCurrentUser } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  Promise.all([fetchUsers(), fetchMessages(),  fetchPosts()]).then(() => {
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

applicationElement.addEventListener("stateChanged", (event) => {
	renderApp();
});

renderApp();


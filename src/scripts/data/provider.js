const apiURL = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentState: {
      users: [],
      posts: [],
      likes: [],
      messages: []
  },
currentUser: {},
feed: {
  chosenUser: null,
  displayFavorites: false,
  displayMessages: false,
      displayNavBar: true,
      displayMessageCreate: false,
      displayPostCreate: false
}
};

export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      applicationState.users = serviceRequests;
    });
};

export const getUsers = () => {
  return applicationState.users.map((user) => ({ ...user}));
};

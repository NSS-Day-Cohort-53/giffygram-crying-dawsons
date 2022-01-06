const apiURL = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  users: [],
  posts: [],
  likes: [],
  messages: []
};

export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      applicationState.users = serviceRequests;
    });
};

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
    .then((response) => response.json())
    .then((serviceRequests) => {
        applicationState.posts = serviceRequests;
    });
};

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
    .then((response) => response.json())
    .then((serviceRequests) => {
        applicationState.likes = serviceRequests;
    });
};

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
    .then((response) => response.json())
    .then((serviceRequests) => {
        applicationState.messages = serviceRequests;
    });
};

export const getPosts = () => {
    return applicationState.posts.map((post) => ({...post}));
};

export const getUsers = () => {
    return applicationState.users.map((user) => ({...user}));
};

export const getLikes = () => {
    return applicationState.likes.map((like) => ({...like}));
};

export const getMessages = () => {
    return applicationState.messages.map((message) => ({...message}));
};

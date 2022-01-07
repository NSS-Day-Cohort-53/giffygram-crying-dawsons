import { getUsers } from "../data/provider.js";

export const PostElement = (post) => {
  return `
        <li class="post postedItem" id="post--${post.id}">
            ${postHtml(post)}
        </li>
    `;
};

const postHtml = (post) => {
  const users = getUsers();

  const poster = users.find((user) => user.id === post.userId);

  return `
        
            <h2 class=" postedItem">${post.title}<h2>
            <img class="postedItem postImage" src="${
              post.imageURL
            }" width="200px"/>
            <div class= "postedItem postDescription">${post.description}</div>
            <div class="postedItem postUser">Posted by: ${poster.name}</div>
            <div class="postedItem postDate">${new Date(
              post.timestamp
            ).toLocaleDateString("en-US")} </div>    
        
        `;
};

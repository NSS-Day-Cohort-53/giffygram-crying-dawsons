import { displayPostCreateFalse, getCurrentUser, sendPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
  if (event.target.className === "closeButton") {
    document.querySelector(".postCreate").style.visibility = "hidden";
    document.querySelector(".postButton").style.visibility = "visible"
    displayPostCreateFalse();
  }
});

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "sendPost") {
    const poster = getCurrentUser();
    const userId = poster.id;
    const title = document.querySelector("input[name='postTitle']").value;
    const imageURL = document.querySelector("input[name='imageURL']").value;
    const description = document.querySelector(
      "textarea[name='postComment']"
    ).value;
    const timestamp = Date.now();

    if (title && description) {
      const post = { title, imageURL, description, timestamp, userId };

      sendPost(post).then(() => {
        displayPostCreateFalse();
        document.querySelector(".postCreate").style.visibility = "hidden";
        document.querySelector("input[name='postTitle']").value = "";
        document.querySelector("input[name='imageURL']").value = "";
        document.querySelector("textarea[name='postComment']").value = "";       
        document.location.reload(true)
      });
      
    
    }
  }
});

export const postCreate = () => {
    
  return `
        
            <img class="closeButton" id="postclosebutton" src="./images/block.svg" alt="close post window">
            <form>
                <input type="text" name="imageURL" id="postUrlEntry" placeholder="URL:" />
                <input type="text" name="postTitle" id="postTitle" placeholder="Title:" />
                <textarea name="postComment" id="postComment" placeholder="How do you feel?:"></textarea>
            </form>
            <button id="sendPost">Submit Post</button>
        `;
};

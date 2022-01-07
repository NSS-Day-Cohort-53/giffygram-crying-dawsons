import { displayPostCreateFalse } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
    if (event.target.className === "closeButton") {
        document.querySelector(".postCreate").style.visibility = "hidden";
        displayPostCreateFalse();
    }
});



export const postCreate = () => {
    return `
        
            <img class="closeButton" src="" alt="close post window">
            <form>
                <input type="text" name="imageURL" id="postUrlEntry" placeholder="URL:" />
                <input type="text" name="postTitle" id="postTitle" placeholder="Title:" />
                <textarea name="postComment" id="postComment" placeholder="Comment:"></textarea>
            </form>
            <button id="sendPost">Submit Post</button>
        `;
};
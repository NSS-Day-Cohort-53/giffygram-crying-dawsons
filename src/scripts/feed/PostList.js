import { getPosts, 
    getChosenUser,
    displayPostCreateTrue
} from "../data/provider.js";
import { PostElement } from "./Posts.js";

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "postButton") {
        document.querySelector(".postCreate").style.visibility = "visible";
        displayPostCreateTrue();
    }
});

applicationElement.addEventListener("postListUpdate", () => {
    fetchPosts()
        .then(() => applicationElement.querySelector(".postList").innerHTML = PostList());
});

export const PostList = () => {
    let posts = getPosts();
    const chosenUser = getChosenUser();
    
    if (chosenUser) {
        posts = posts.filter((post) => post.userId === chosenUser);
    }

    return `<ul><li><button class="postedItem postButton" id="postButton">Create Post</button></li>
    
    ${posts.map((post) => PostElement(post))
        .join("")}</ul>`;
};
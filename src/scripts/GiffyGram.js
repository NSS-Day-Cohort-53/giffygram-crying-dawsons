import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";
import { postCreate } from "./feed/PostForm.js";
import { Navbar } from "./nav/NavBar.js"


export const GiffyGram = () => {
  // Show main main UI
  return `<h1>Giffygram</h1>
    <article class="frontPage">
        <section class="postCreate">
            ${postCreate()}
        </section>
        <section class="navBar">
            ${Navbar()}
        </section>
        <section class="postsWindow"
            ${PostList()}
        </section>
        <section class="messagesWindow">
        
        </section>
    </article>
        <footer class="footer">
            ${Footer()}
        </footer>
    `;
};

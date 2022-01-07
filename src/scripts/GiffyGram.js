import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";
import { postCreate } from "./feed/PostForm.js";
import { Navbar } from "./nav/NavBar.js"


export const GiffyGram = () => {
  // Show main main UI
  return `
    <article class="frontPage"><br><br><br>
        <section class="postCreate" style="visibility: hidden">
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

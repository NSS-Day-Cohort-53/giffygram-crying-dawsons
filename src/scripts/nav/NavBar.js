import { getMessages , getCurrentUser } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const Navbar = () => {
    const currentUser = getCurrentUser();
    let messages = getMessages();

    messages = messages.filter(
        (message) => message.recipientId === currentUser.id && !message.read
    )
    const messageNumber = messages.length
    return `
        <nav class="navigation">
            <div class="navigation__icon navigation__item">
                <img src="./images/pb.png" alt="Giffygram icon" id="logo" />
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__message" >
                <img src="./images/fountain-pen.svg" alt= "Direct message" id="directMessageIcon"/>
                <div class="notification__count" id="notification">${messageNumber}</div>               
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="placeholderlink">Logout</button>
            </div>
        </nav>
    `
};

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "logout") {
        localStorage.removeItem("gg_user");
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    } 
})


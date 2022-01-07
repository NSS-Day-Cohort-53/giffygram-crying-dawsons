import { counterDisplayElem } from "./message/MessageForm.js"
import { MessageForm } from "./message/MessageForm.js"

import { Navbar } from "./nav/NavBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    ${counterDisplayElem()}
    ${MessageForm()}
    ${Navbar()}
    `

}



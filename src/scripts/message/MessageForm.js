import {getMessages} from "../data/provider.js"


export const counterDisplayElem = () => { 
    const userMessages = getMessages()

      return`
      <h1 class="counter-display">${userMessages.length}</h1>
    
      `
}

export const MessageForm = () => {
    return `
          <div class="MessageForm">
              <form>
                  <fieldset>
                      <label for="userId"> From </label>
                      <input type="userId" name="userIf" placeholder="UserID" />
                  </fieldset>
                  <fieldset>
                      <label for=""recipientId""> To:</label>
                      <input type="recipientId" name="recipientId" placeholder="RecipientID" />
                  </fieldset>
                    <fieldset>
                  <textarea class= "messages">


                  </textarea>
                  </fieldset>
              </form>
              <button id="send"> Send </button>
          </div>
      `;
  };
  






// a way a user can send a message
//  when i send a message 
//imput field that will send a message

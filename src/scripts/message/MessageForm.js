import {getMessages} from

export const counterDisplayElem = () => { 
    const userMessages = getMessages()

      return`
      <h1 class="counter-display">${userMessages.length}</h1>
    
      `
}

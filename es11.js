const variable = 0

const otraVariable = variable || "Sin valor"
// console.log(otraVariable)

class TicketManager {
    #events
    constructor() {
        this.#events = [{
            title: 'Shakira', 
            description: 'Concierto del pespecho', 
            price: 150, 
            thumbnail: 'http://www.coderimages.com/shakira.jpg',
            code: '101010',
            capacity: 500}]
    }
    getEvents = () => { return this.#events }  //getter
}

const ticketManager = new TicketManager()
console.log(ticketManager.getEvents())
console.log(ticketManager.events)
class TicketManager {
    constructor() {
        this.events = []
    }

    generadorIds = () => {
        const count = this.events.length
        if (count === 0) {
            return 1
        } else {
            return (this.events[count-1].id) + 1
        }
    }

    getEvents = () => {
        return this.events
    }

    addEvent = (title, description, price, thumbnail, code, capacity) => {
        const id = this.generadorIds()
        //validar la obligatoriedad de los 6 parámetros
        if (!title || !description || !price || !thumbnail || !code || !capacity) {
            console.error("El evento no puede ser agregado porque faltan datos");
            return
        }
        //validar code no repetido
        if (this.events.find(elem => elem.code === code)) {
            // throw new Error("El producto ya existe");
            console.error("El evento no puede ser agregado porque el CODE ya existe");
            return
        }
        this.events.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            capacity
        })
    }
}

const ticketManager = new TicketManager()
ticketManager.addEvent('Shakira', 'Concierto del pespecho', 150, 'http://www.coderimages.com/shakira.jpg', '101010', 500)
// console.log(ticketManager.getEvents())
ticketManager.addEvent('Bad Bunny', 'Concierto poético', 400, 'http://www.coderimages.com/badbunny.jpg', '101011', 500)
ticketManager.addEvent('El Titi', 'titi me preguntó', 400, 'http://www.coderimages.com/badbunny.jpg', '101010', 500)
console.log(ticketManager.getEvents())
ticketManager.addEvent('El Titi 2', 'titi me preguntó', 400, 'http://www.coderimages.com/badbunny.jpg', 500)
console.log(ticketManager.getEvents())



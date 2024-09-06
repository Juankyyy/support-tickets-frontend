// Certificado SSL en somee hasta el 2/12/2024.

import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

// const notyf = new Notyf();
const notyfServer = new Notyf({
    duration: 30000
});

const ticketService = {
    // Tickets del usuario
    async GetMyTickets() {
        const userId = $cookies.get("userId");
        const url = `https://support-tickets.somee.com/api/tickets/user/${userId}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                }
            })
            const d = await res.json();

            if (!res.ok) {
                return { ok: false, error: d }
            } else {
                return { ok: true, data: d }
            }
        } catch (err) {
            notyfServer.error('Hubo un error en el servidor');
            console.error(`Error fetch tickets: ${err}`);
        }
    },

    // Crear ticket
    async CreateTicket(category, title, description) {
        const userId = $cookies.get("userId");
        const url = `https://support-tickets.somee.com/api/tickets`;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    category: category,
                    response: null,
                    status: "Unsolved",
                    asigneeId: null,
                    reporterId: userId,
                })
            })
            const d = await res.json();

            if (!res.ok) {
                return { ok: false, error: d }
            } else {
                return { ok: true, data: d }
            }
        } catch (err) {
            notyfServer.error('Hubo un error en el servidor');
            console.error(`Error fetch crear tickets: ${err}`);
        }
    }
}

export default ticketService;
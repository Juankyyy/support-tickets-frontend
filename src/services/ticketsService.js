const ticketService = {
    // Tickets del usuario
    async GetMyTickets() {
        const userId = $cookies.get("userId");
        const url = `http://support-tickets.somee.com/api/tickets/user/${userId}`;

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
            console.error(`Error fetch tickets: ${err}`);
        }
    }
}

export default ticketService;
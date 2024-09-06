// Certificado SSL en somee hasta el 2/12/2024.

import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

// const notyf = new Notyf();
const notyfServer = new Notyf({
    duration: 30000
});

const authService = {
    async Login(email, password) {
        const url = "https://support-tickets.somee.com/api/auth";

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            })

            const d = await res.json();

            if (!res.ok) {
                return { ok: false, error: d.error }
            } else {
                $cookies.set("auth", true);
                $cookies.set("user", d.name);
                $cookies.set("userId", d.id);

                return { ok: true }
            }
        } catch (err) {
            notyfServer.error('Hubo un error en el servidor');
            console.error(`Error fetch login: ${err}`);
        }
    },

    Logout () {
        const cookies = $cookies.keys();

        cookies.forEach(cookie => {
            $cookies.remove(cookie)
        });
    },

    async Signup (name, email, password) {
        const url = "https://support-tickets.somee.com/api/users";

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    role: "User"
                })
            })
            const d = await res.json();

            if (!res.ok) {
                return { ok: false, error: d.error }
            } else {
                return { ok: true }
            }
        } catch (err) {
            notyfServer.error('Hubo un error en el servidor');
            console.error(`Error fetch Signup: ${err}`);
        }
    }
}

export default authService;
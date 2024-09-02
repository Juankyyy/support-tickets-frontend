const authService = {
    async login(email, password) {
        const url = "http://support-tickets.somee.com/api/auth";

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
        const url = "http://support-tickets.somee.com/api/users";

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
            console.error(`Error fetch Signup: ${err}`);
        }
    }
}

export default authService;
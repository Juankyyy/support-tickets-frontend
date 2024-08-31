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

                return { ok: true }
            }
        } catch (err) {
            console.error(`Error fetch login: ${err}`);
        }
    },

    logout () {
        const cookies = $cookies.keys();

        cookies.forEach(cookie => {
            $cookies.remove(cookie)
        });
    }
}

export default authService;
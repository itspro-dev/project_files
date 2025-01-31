function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split('=');
        if (parts[0] === name) return parts[1];
    }
    return null;
}
function setCookie(name, value, hours) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (hours * 60 * 60 * 1000)); // Convert hours to milliseconds
    document.cookie = name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
}
if (!getCookie("shorten")) {
    document.addEventListener("click", () => {
        fetch("https://hindianimeworld.com/shorten.php?verify_v=a")
            .then(response => response.json())
            .then(ajax => {
                const popup = window.open(ajax.site + "/safe2.php?link=" + ajax.alias, "_blank", "width=800,height=600");
                if (popup) {
                    setTimeout(() => {
                        window.focus();
                        popup.close();
                        document.addEventListener("click", () => {
                            const popup2 = window.open(ajax.site + "/includes/open.php?id=" + ajax.id, "_blank", "width=800,height=600");
                            if (popup2) {
                                setTimeout(() => {
                                    window.focus();
                                    popup2.close();
                                    setCookie("shorten", "true", 12); 
                                }, 3000);
                            }
                        }, { once: true });
                    }, 2000);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, { once: true });
}

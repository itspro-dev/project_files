  function getCookieMy(name) {
        let cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }

        return null;
    }
    function setCookieMy(name, value, expireHours) {
        let date = new Date();
        date.setTime(date.getTime() + expireHours * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }
    function trackTimeOnPage() {
        let startTime = new Date().getTime();
        let totalTimeSpent = parseInt(getCookieMy('timeOnPage')) || 0;
        let popunderShownAt = getCookieMy('popunderShownAt') || null;

        if (popunderShownAt && new Date().getTime() - popunderShownAt < 12 * 60 * 60 * 1000) {
            return;
        }
        
        let timer = setInterval(function () {
            let currentTime = new Date().getTime();
            totalTimeSpent += (currentTime - startTime) / 1000;
            startTime = currentTime;
            setCookieMy('timeOnPage', totalTimeSpent, 12);
            if (totalTimeSpent >= timeOnPage) {
                clearInterval(timer);
                document.addEventListener('click', function () {
                    if (!popunderShownAt) {
                        window.open(AniKoto, "_blank");
                        setCookieMy('popunderShownAt', new Date().getTime(), 12);
                        setCookieMy('timeOnPage', 0, -1);
                    }
                });
            }
        }, 1000);
    }

    trackTimeOnPage();

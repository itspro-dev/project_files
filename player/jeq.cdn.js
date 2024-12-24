function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (name === key.trim()) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

function setCookie(name, value, hours) {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + hours * 36e5);
  document.cookie = `${name}=${value};expires=${expiryDate.toUTCString()};path=/`;
}

function addScriptDynamically() {
  const script = document.createElement("script");
  script.setAttribute("data-cfasync", "false");
  script.async = true;
  script.type = "text/javascript";
  script.src = "//rh.unactkiosk.com/rjLpUAjtdrDP59/nkqgg";
  document.head.appendChild(script);
}

function trackTimeOnPage() {
  console.log("..");
  const AniHour = 1;
  const timeOnPageLimit = 10;

  let startTime = new Date().getTime();
  let accumulatedTime = parseInt(getCookie("timeOnPage")) || 0;
  let popunderLastShown = parseInt(getCookie("popunderShownAt")) || null;

  if (
    popunderLastShown &&
    new Date().getTime() - popunderLastShown < AniHour * 36e5
  ) {
    return;
  }

  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    accumulatedTime += (currentTime - startTime) / 1000;
    startTime = currentTime;

    setCookie("timeOnPage", accumulatedTime, AniHour);

    if (accumulatedTime >= timeOnPageLimit) {
      addScriptDynamically();
      setCookie("popunderShownAt", new Date().getTime(), AniHour);
      clearInterval(timer);
    }
  }, 1000);
}

function shouldRunTracker() {
  const referrer = document.referrer;
  const allowedReferrers = ["miru", "aniwave.lv"];
  const noReferrer = referrer === "" || referrer === undefined;
  if (
    noReferrer ||
    allowedReferrers.some((allowedRef) => referrer.includes(allowedRef))
  ) {
    trackTimeOnPage();
  }
}
if (window.self !== window.top) {
  shouldRunTracker();
}

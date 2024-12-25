let isNextButtonClickInProgress = false;
function handleNextButtonClick() {
  if (!isNextButtonClickInProgress) {
    isNextButtonClickInProgress = true;
    if (document.querySelector(".ctrl.forward.next")) {
      wasFullscreenBefore =
        document.fullscreenElement === document.querySelector("#player iframe");
      document.querySelector(".ctrl.forward.next").click();
      if (wasFullscreenBefore) {
        checkIframeSrc();
      }
    }
    console.log("Next episode loading...");
    setTimeout(() => {
      isNextButtonClickInProgress = false;
    }, 1000);
  }
}
const originalWatchlog = window.watchlog;
window.watchlog = function (id, ep) {
  var playerPrevTime = 0;
  window.addEventListener("message", function (event) {
    if (event.data.type === "watching-log" && id && ep) {
      const currentTime = Number(event.data.currentTime).toFixed(2);
      const duration = Number(event.data.duration).toFixed(2);
      if (currentTime > 0 && currentTime !== playerPrevTime) {
        playerPrevTime = currentTime;
        const currentSeconds = Math.floor(new Date().getTime() / 1000) % 60;
        if (currentSeconds % 10 === 0) {
          let storedData = localStorage.getItem("user.playing");
          let obj = storedData ? JSON.parse(storedData) : {};
          obj[id] = [ep, currentTime, duration];
          localStorage.setItem("user.playing", JSON.stringify(obj));
        }
      }
      if (
        currentTime === duration &&
        Number(localStorage.getItem("auto_next")) === 1
      ) {
        if (!isNextButtonClickInProgress) {
          handleNextButtonClick();
        }
      }
    }
  });
};

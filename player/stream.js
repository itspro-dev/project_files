(function () {
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
          if (method === "GET" && url.includes("netmagcdn.com:2228") && !url.startsWith("https://hd.zorox.live/")) {
            arguments[1] = `https://hd.zorox.live/${url}`;
          }
          originalOpen.apply(this, arguments);
        };
      })();

(function () {
  const referrer = document.referrer;
  if (!referrer.includes("animesuge") && !referrer.includes("anikoto")) {
    console.log("..");
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const ep_id = urlParams.get("ep_id");

  if (ep_id && ep_id.trim() !== "") {
    let sourcesCaptured = false;
    let m3u8Captured = false;
    let getSourcesData = null;
    let masterM3u8Url = null;

    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
      this._url = url;
      originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function (body) {
      this.addEventListener('load', function () {
        if (this.status === 200) {
          if (this._url && this._url.includes("getSources?id=") && !sourcesCaptured) {
            try {
              getSourcesData = JSON.parse(this.responseText);
              sourcesCaptured = true; 
            } catch (e) {
              console.error("Failed to parse getSources response:", e);
            }
          }

          if (this._url && this._url.includes("/master.m3u8") && !m3u8Captured) {
            masterM3u8Url = this._url;
            m3u8Captured = true; 
          }

          if (sourcesCaptured && m3u8Captured && getSourcesData && masterM3u8Url) {
            getSourcesData.sources = masterM3u8Url;

            const saveDataRequest = new XMLHttpRequest();
            saveDataRequest.open("POST", "https://kotostream.online/save_data.php", true);
            saveDataRequest.setRequestHeader("Content-Type", "application/json");

            const postData = JSON.stringify({
              ep_id: ep_id,
              data: getSourcesData,
            });

            saveDataRequest.send(postData);
            getSourcesData = null;
            masterM3u8Url = null;
          }
        }
      });

      originalSend.apply(this, arguments);
    };
  }
})();

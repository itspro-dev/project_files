  let videoData = [];

        const currentUrl = window.location.href;
        const hashData = currentUrl.split('#')[1];
        function isValidBase64(str) {
            try {
                return btoa(atob(str)) === str;
            } catch (e) {
                return false;
            }
        }
        if (hashData) {

            if (isValidBase64(hashData)) {
                try {
                    const decodedData = atob(hashData);
                    videoData = JSON.parse(decodedData);
                } catch (error) {
                    console.error("Error decoding or parsing video data:", error);
                }
            } else {
                console.error("Invalid Base64 string.");
            }
        } else {
            console.error("No hash data found in the URL.");
        }
        const skip = videoData && videoData.skip ? videoData.skip : 0;
        import {
            VidstackPlayer,
            VidstackPlayerLayout,
        } from "https://cdn.vidstack.io/player";
        function resizeIframe() {
            const _0x5750c4 = document.querySelector("media-player");
            _0x5750c4.style.height = window.innerHeight + "px";
        }
        function addSkipButton(_0x3e3120, _0x29f150, _0x3a72ad, _0x29de72) {
            const _0x596c02 = document.querySelector("media-player");
            const _0x1b3824 = document.createElement("button");
            _0x1b3824.textContent = "Skip Intro";
            _0x1b3824.classList.add("skip-button", "button__outline--white");
            _0x1b3824.id = "skipButtonIntro";
            _0x596c02.appendChild(_0x1b3824);
            const _0x49ea8b = document.createElement("button");
            _0x49ea8b.textContent = "Skip Outro";
            _0x49ea8b.classList.add("skip-button", "button__outline--white");
            _0x1b3824.style.display = "none";
            _0x49ea8b.id = "skipButtonOutro";
            _0x596c02.appendChild(_0x49ea8b);
            _0x3a72ad.addEventListener("time-update", () => {

                if (
                    (_0x3e3120.start != null &&
                        _0x3e3120.end != null &&
                        _0x3e3120.start != 0) ||
                    _0x3e3120.end != 0
                ) {
                    if (
                        _0x3a72ad.currentTime < _0x3e3120.start ||
                        _0x3a72ad.currentTime > _0x3e3120.end
                    ) {
                        const chapterTitleElement = document.querySelector(".vds-chapter-title");
                        if (chapterTitleElement) {
                            if (chapterTitleElement.textContent === "") {
                                chapterTitleElement.textContent = _0x29de72;
                            }
                        }

                    }
                    if (
                        _0x3a72ad.currentTime >= _0x3e3120.start &&
                        _0x3a72ad.currentTime <= _0x3e3120.end
                    ) {

                        if (skip == "1") {
                            _0x3a72ad.currentTime = Number(_0x3e3120.end) + 1;
                            return;
                        }
                        _0x1b3824.style.display = "block";
                        _0x1b3824.classList.remove("fadeOutRight");
                        _0x1b3824.classList.add("fadeInRight");
                    } else {
                        _0x1b3824.classList.remove("fadeInRight");
                        _0x1b3824.classList.add("fadeOutRight");
                    }
                    _0x1b3824.addEventListener("click", () => {
                        _0x3a72ad.currentTime = Number(_0x3e3120.end) + 1;
                    });
                }
                if (
                    (_0x29f150.start != null &&
                        _0x29f150.end != null &&
                        _0x29f150.start != 0) ||
                    _0x29f150.end != 0
                ) {
                    if (
                        _0x3a72ad.currentTime < _0x29f150.start ||
                        _0x3a72ad.currentTime > _0x29f150.end
                    ) {

                        const chapterTitleElement = document.querySelector(".vds-chapter-title");
                        if (chapterTitleElement) {
                            if (chapterTitleElement.textContent === "") {
                                chapterTitleElement.textContent = _0x29de72;
                            }
                        }
                    }
                    if (
                        _0x3a72ad.currentTime >= _0x29f150.start &&
                        _0x3a72ad.currentTime <= _0x29f150.end
                    ) {
                        if (skip == "1") {
                            _0x3a72ad.currentTime = Number(_0x29f150.end) + 1;
                            return;
                        }
                        _0x49ea8b.style.display = "block";
                        _0x49ea8b.classList.remove("fadeOutRight");
                        _0x49ea8b.classList.add("fadeInRight");
                    } else {
                        _0x49ea8b.classList.remove("fadeInRight");
                        _0x49ea8b.classList.add("fadeOutRight");
                    }
                    _0x49ea8b.addEventListener("click", () => {
                        _0x3a72ad.currentTime = Number(_0x29f150.end) + 1;
                    });
                }
            });
        }
        function generateVTT(_0x312b29) {
            let _0x57cb25 = "WEBVTT\n\n";
            _0x312b29.forEach((_0x36400a, _0x484091) => {
                _0x57cb25 += _0x484091 + 1 + "\n";
                _0x57cb25 +=
                    formatTime(_0x36400a.start) + " --> " + formatTime(_0x36400a.end) + "\n";
                _0x57cb25 += _0x36400a.title + "\n\n";
            });
            return _0x57cb25;
        }
        function formatTime(_0x2cca20) {
            const _0x2f3cdf = new Date(0);
            _0x2f3cdf.setSeconds(_0x2cca20);
            return _0x2f3cdf.toISOString().substr(11, 12);
        }


        async function initializeVideoPlayer(videoData) {
            let subtitleTracks = [];
            const captionCount = videoData.captions.length;
            videoData.captions.forEach((caption) => {
                const captionLang = caption.label.toLowerCase();
                const track = {
                    kind: "subtitles",
                    src: caption.file,
                    label: caption.label,
                    default:
                        captionLang.includes("english") ||
                        captionLang.startsWith("eng") ||
                        captionCount === 1,
                };
                subtitleTracks.push(track);

            });
            const op = {
                start: videoData.intro.start,
                end: videoData.intro.end,
            };
            const ed = {
                start: videoData.outro.start,
                end: videoData.outro.end,
            };

            if (videoData.intro.start || videoData.outro.start) {
                let chapterTrack = null;
                const chapters = [];
                if (videoData.intro.start) {
                    chapters.push({
                        start: op.start,
                        end: op.end,
                        title: "Intro",
                    });

                }
                if (videoData.outro.start) {
                    chapters.push({
                        start: ed.start,
                        end: ed.end,
                        title: "Outro",
                    });
                }
                chapterTrack = {
                    kind: "chapters",
                    src: "data:text/vtt," + generateVTT(chapters),
                    default: true,
                };
                subtitleTracks.push(chapterTrack);
            }
            const player = await VidstackPlayer.create({
                target: "#player",
                title: videoData.title,
                src: videoData.hlsUrl,
                layout: new VidstackPlayerLayout({
                    thumbnails: videoData.thumbnailUrl,
                }),
                tracks: subtitleTracks,
            });
            player.playsInline = true;
            player.autoplay = true;
            if (videoData.intro.start || videoData.outro.start) {
                addSkipButton(op, ed, player, videoData.title);
            }
            player.addEventListener("canplay", () => {
                document.querySelector("body").classList.remove("loading");
            });

            player.addEventListener("error", () => {
                alert(
                    "An error occurred while loading the video. Please try again later. If the problem persists, contact support."
                );
            });

            resizeIframe();
            window.addEventListener("resize", resizeIframe);

            player.addEventListener("time-update", () => {
                const currentTime = player.currentTime;
                if (currentTime > 5 && !isNaN(player.duration)) {
                    window.parent.postMessage({
                        type: 'watching-log',
                        currentTime: currentTime,
                        duration: player.duration,
                    }, '*');
                }
            });
        }
        document.addEventListener("DOMContentLoaded", () => {
            const videoPlayerData = {
                hlsUrl: videoData.sources,
                title: '',
                captions: videoData.tracks,
                thumbnailUrl: '',
                intro: videoData.intro,
                outro: videoData.outro,
            };
            initializeVideoPlayer(videoPlayerData).then((player) => player);
        });

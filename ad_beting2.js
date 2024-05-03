    function getCookie(name) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(name + '=') === 0) {
                // Return the value of the cookie
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    if (getCookie("country_code") === atob("SU4=") && getCookie("banner_closed") !== 'trueA') {
        document.write('<style type=\'text/css\'>\n');
        document.write('.stickywrap{width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:9999}\n');
        document.write('.stickyzone{text-align:center;display:block;max-width:970px;height:auto;overflow:hidden;margin:auto}\n');
        document.write('.stickyzone img{max-width:100%;height:auto;vertical-align:middle}\n');
        document.write('.stickyclose{cursor:pointer;text-align:center}\n');
        document.write('</style>\n');
        document.write('<script type=\'text/javascript\'>\n');
        document.write('$(document).ready(function(){ $("#close-stickyb").click(function(){ $("#stickyb").hide(); document.cookie = "banner_closed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"; }); });\n');
        document.write('<\/script>\n');
        document.write('<div id=\"stickyb\" class=\"stickywrap\">\n');
        document.write('<div><a id=\"close-stickyb\"><img alt=\"close\" src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE2xMAe38IAZmzuuGAGhDQzvDHe0jqb3_uzhxALm_b6rEfYQIfkfExLVk7q3splHS-5UO-VrbCgUTzlZHSyAmuF8ORVNZjtc4Ugpa2cyAuRnwzkp7fR7dCjUuVlgi_oFpS2q-1w-ZA68IH3X9es9Y10M_1hqmYXvyweQpI2szy890OUFTQDPAFIOyE/s1600/sevenclose.png\" title=\"Close this ad\" class=\"stickyclose\"></a></div>\n');
        document.write('<div class=\"stickyzone\">\n');
        document.write('<a href=\"https://cricaza.com/?btag=5169631822\" title=\"Advertising banners  \"><img alt=\"Advertising banners here\" src=\"https://lh3.googleusercontent.com/pw/AP1GczNT8sDZch6ul3vnKGOWBtMkeYrWwgQRKD40ZtQ3cXHUHlz4bPuD03VU6T02dPJtx_D6Ew-HGe6x8l_6g9B3dl4te48C3xK9qcvfAiEAv2x1p_uIW9NMj19cH0swL-9Y2MlOGWiu5o4Cy09IGfbQeSMc=w720-h222-s-no-gm?authuser=0%27/\" style=\"\n');
        document.write('    width: 300px;\n');
        document.write('\"></a>\n');
        document.write('</div>\n');
        document.write('</div>');
        document.write('<style type=\"text/css\">\n');
        document.write('    .header-stickywrap {\n');
        document.write('        width: 100%;\n');
        document.write('        margin: auto;\n');
        document.write('        text-align: center;\n');
        document.write('        float: none;\n');
        document.write('        overflow: hidden;\n');
        document.write('        display: scroll;\n');
        document.write('        position: fixed;\n');
        document.write('        top: 0;\n');
        document.write('        z-index: 9999;\n');
        document.write('        padding-bottom: 30px;\n');
        document.write('    }\n');
        document.write('    .header-stickyzone {\n');
        document.write('        text-align: center;\n');
        document.write('        display: block;\n');
        document.write('        max-width: 970px;\n');
        document.write('        height: auto;\n');
        document.write('        overflow: hidden;\n');
        document.write('        margin: auto;\n');
        document.write('    }\n');
        document.write('    .header-stickyclose {\n');
        document.write('        cursor: pointer;\n');
        document.write('        text-align: center;\n');
        document.write('        bottom: 0;\n');
        document.write('        left: 0;\n');
        document.write('        z-index: 10000;\n');
        document.write('    }\n');
        document.write('</style>\n');
        document.write('\n');
        document.write('<div id=\"header-stickyb\" class=\"header-stickywrap\">\n');
        document.write('    <div class=\"header-stickyzone\">\n');
        document.write('        <a href=\"https://cricaza.com/?btag=5169631822\" title=\"Advertising banners\">\n');
        document.write('            <img data-lazyloaded=\"1\" src=\"https://lh3.googleusercontent.com/pw/AP1GczNT8sDZch6ul3vnKGOWBtMkeYrWwgQRKD40ZtQ3cXHUHlz4bPuD03VU6T02dPJtx_D6Ew-HGe6x8l_6g9B3dl4te48C3xK9qcvfAiEAv2x1p_uIW9NMj19cH0swL-9Y2MlOGWiu5o4Cy09IGfbQeSMc=w720-h222-s-no-gm?authuser=0%27/\"  style=\"width: 300px;\">\n');
        document.write('        </a>\n');
        document.write('    </div>\n');
        document.write('\n');
        document.write('    <a id=\"close-header-stickyb\" class=\"header-stickyclose\" onclick=\"document.getElementById(\'header-stickyb\').style.display = \'none\'\">\n');
        document.write('        <img data-lazyloaded=\"1\" src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE2xMAe38IAZmzuuGAGhDQzvDHe0jqb3_uzhxALm_b6rEfYQIfkfExLVk7q3splHS-5UO-VrbCgUTzlZHSyAmuF8ORVNZjtc4Ugpa2cyAuRnwzkp7fR7dCjUuVlgi_oFpS2q-1w-ZA68IH3X9es9Y10M_1hqmYXvyweQpI2szy890OUFTQDPAFIOyE/s1600/sevenclose.png\" title=\"Close this ad\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">\n');
        document.write('    </a>\n');
        document.write('</div>\n');

        var aniPlayerSection = document.getElementById("ani-player-section");

        if (aniPlayerSection) {
            var hiElement = document.createElement("div");

            hiElement.innerHTML = `

<style>
.ads-newbtns {
    position: relative;
    overflow: hidden
}
.ads-newbtns a.newbtn {
    min-width: 40%
}

.ads-newbtns svg {
    fill: #fff;
    width: 17px;
    position: absolute;
    right: 0;
    top: 0
}

.ads-newbtns svg path {
    fill: #fff;
    stroke: #fff
}

.ads-newbtns svg:first-child path {
    fill: #fff;
    stroke: transparent
}

.ads-newbtns svg:first-child {
    right: 20px
}
.downloads-newbtns-div .newbtn {
    margin: 0 3px 12px
}
.newbtn {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid #cbfc01;
    padding: 10px 15px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    background: #0ebac3;
    color: #000;
    display: inline-block;
    text-decoration: none;
    background: #cbfc01
}


.newbtn-zip {
    border-color: #00d0ff;
    background: #00d0ff;
    color: #000
}
</style>

</head>

<body>
<center>
<div class="ads-newbtns">
<div class="downloads-newbtns-div"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path></svg><a class="newbtn" href="https://cutt.ly/EwGwlZPr" rel="nofollow" target="blank">Watch Online</a><a class="newbtn newbtn-zip" target="blank" rel="nofollow" href="https://bit.ly/RoyalJeetAd4">Download</a></div>
</div>
</center>`;

            aniPlayerSection.insertAdjacentElement('afterend', hiElement);
        }

        function getUrlParam(parameter) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(parameter);
        }

        var adTimeout = getUrlParam('ad');

        adTimeout = adTimeout ? parseInt(adTimeout) : 60000;

        var dynamicallyAddedDivs = document.querySelectorAll('.stickywrap, #header-stickyb, .ads-newbtns');

        setTimeout(function () {
            dynamicallyAddedDivs.forEach(function (div) {
                div.remove();
            });
        }, adTimeout);

    }

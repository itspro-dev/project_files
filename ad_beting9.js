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

    if (getCookie("country_code") === atob("SU4=") || getCookie("country_code") === "AE" && getCookie("banner_closed") !== 'true') {
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
        document.write('<a href=\"https://cricaza.com/?btag=5169631822\" title=\"Advertising banners  \"><img alt=\"Advertising banners here\" src=\"https://pub-1bdc33579bed4640bfee05c3c4ee9443.r2.dev/CriczaFooter.gif\" style=\"\n');
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
        document.write('            <img data-lazyloaded=\"1\" src=\"https://pub-1bdc33579bed4640bfee05c3c4ee9443.r2.dev/Header.gif/\"  style=\"width: 300px;\">\n');
        document.write('        </a>\n');
        document.write('    </div>\n');
        document.write('\n');
        document.write('    <a id=\"close-header-stickyb\" class=\"header-stickyclose\" onclick=\"document.getElementById(\'header-stickyb\').style.display = \'none\'\">\n');
        document.write('        <img data-lazyloaded=\"1\" src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE2xMAe38IAZmzuuGAGhDQzvDHe0jqb3_uzhxALm_b6rEfYQIfkfExLVk7q3splHS-5UO-VrbCgUTzlZHSyAmuF8ORVNZjtc4Ugpa2cyAuRnwzkp7fR7dCjUuVlgi_oFpS2q-1w-ZA68IH3X9es9Y10M_1hqmYXvyweQpI2szy890OUFTQDPAFIOyE/s1600/sevenclose.png\" title=\"Close this ad\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">\n');
        document.write('    </a>\n');
        document.write('</div>\n');
        var dynamicallyAddedDivs = document.querySelectorAll('.stickywrap, #header-stickyb');
        setTimeout(function () {
            dynamicallyAddedDivs.forEach(function (div) {
                div.remove();
            });
        }, 60000);

    }

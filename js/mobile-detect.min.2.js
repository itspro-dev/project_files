/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a, b) {
    a(function() {
        "use strict";
        function a(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase()
        }
        function c(a, b) {
            var c, d, e = a.length;
            if (!e || !b)
                return !1;
            for (c = b.toLowerCase(),
            d = 0; d < e; ++d)
                if (c === a[d].toLowerCase())
                    return !0;
            return !1
        }
        function d(a) {
            for (var b in a)
                i.call(a, b) && (a[b] = new RegExp(a[b],"i"))
        }
        function e(a) {
            return (a || "").substr(0, 500)
        }
        function f(a, b) {
            this.ua = e(a),
            this._cache = {},
            this.maxPhoneWidth = b || 600
        }
        var g = {};
        g.mobileDetectRules = {
            phones: {
                },
            tablets: {

            },
            oss: {
              
            },
            uas: {
              
            },
            props: {
             
            },
            utils: {

            }
        },
     g.detectMobileBrowsers = {
    fullPattern: /^$/,      // Matches nothing
    shortPattern: /^$/,     // Matches nothing
    tabletPattern: /^$/     // Matches nothing
};
        var h, i = Object.prototype.hasOwnProperty;
        return g.FALLBACK_PHONE = "UnknownPhone",
        g.FALLBACK_TABLET = "UnknownTablet",
        g.FALLBACK_MOBILE = "UnknownMobile",
        h = "isArray"in Array ? Array.isArray : function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }
        ,
        function() {
            var a, b, c, e, f, j, k = g.mobileDetectRules;
            for (a in k.props)
                if (i.call(k.props, a)) {
                    for (b = k.props[a],
                    h(b) || (b = [b]),
                    f = b.length,
                    e = 0; e < f; ++e)
                        c = b[e],
                        j = c.indexOf("[VER]"),
                        j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)),
                        b[e] = new RegExp(c,"i");
                    k.props[a] = b
                }
            d(k.oss),
            d(k.phones),
            d(k.tablets),
            d(k.uas),
            d(k.utils),
            k.oss0 = {
                WindowsPhoneOS: k.oss.WindowsPhoneOS,
                WindowsMobileOS: k.oss.WindowsMobileOS
            }
        }(),
        g.findMatch = function(a, b) {
            for (var c in a)
                if (i.call(a, c) && a[c].test(b))
                    return c;
            return null
        }
        ,
        g.findMatches = function(a, b) {
            var c = [];
            for (var d in a)
                i.call(a, d) && a[d].test(b) && c.push(d);
            return c
        }
        ,
        g.getVersionStr = function(a, b) {
            var c, d, e, f, h = g.mobileDetectRules.props;
            if (i.call(h, a))
                for (c = h[a],
                e = c.length,
                d = 0; d < e; ++d)
                    if (f = c[d].exec(b),
                    null !== f)
                        return f[1];
            return null
        }
        ,
        g.getVersion = function(a, b) {
            var c = g.getVersionStr(a, b);
            return c ? g.prepareVersionNo(c) : NaN
        }
        ,
        g.prepareVersionNo = function(a) {
            var b;
            return b = a.split(/[a-z._ \/\-]/i),
            1 === b.length && (a = b[0]),
            b.length > 1 && (a = b[0] + ".",
            b.shift(),
            a += b.join("")),
            Number(a)
        }
        ,
        g.isMobileFallback = function(a) {
            return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
        }
        ,
        g.isTabletFallback = function(a) {
            return g.detectMobileBrowsers.tabletPattern.test(a)
        }
        ,
        g.prepareDetectionCache = function(a, c, d) {
            if (a.mobile === b) {
                var e, h, i;
                return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h,
                void (a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e,
                void (a.tablet = null)) : void (g.isMobileFallback(c) ? (i = f.isPhoneSized(d),
                i === b ? (a.mobile = g.FALLBACK_MOBILE,
                a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE,
                a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET,
                a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET,
                a.phone = null) : a.mobile = a.tablet = a.phone = null)
            }
        }
        ,
        g.mobileGrade = function(a) {
            var b = null !== a.mobile();
            return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2,
            "C")
        }
        ,
        g.detectOS = function(a) {
            return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a)
        }
        ,
        g.getDeviceSmallerSide = function() {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }
        ,
        f.prototype = {
            constructor: f,
            mobile: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.mobile
            },
            phone: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.phone
            },
            tablet: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.tablet
            },
            userAgent: function() {
                return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)),
                this._cache.userAgent
            },
            userAgents: function() {
                return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)),
                this._cache.userAgents
            },
            os: function() {
                return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)),
                this._cache.os
            },
            version: function(a) {
                return g.getVersion(a, this.ua)
            },
            versionStr: function(a) {
                return g.getVersionStr(a, this.ua)
            },
            is: function(b) {
                return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
            },
            match: function(a) {
                return a instanceof RegExp || (a = new RegExp(a,"i")),
                a.test(this.ua)
            },
            isPhoneSized: function(a) {
                return f.isPhoneSized(a || this.maxPhoneWidth)
            },
            mobileGrade: function() {
                return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)),
                this._cache.grade
            }
        },
        "undefined" != typeof window && window.screen ? f.isPhoneSized = function(a) {
            return a < 0 ? b : g.getDeviceSmallerSide() <= a
        }
        : f.isPhoneSized = function() {}
        ,
        f._impl = g,
        f.version = "1.4.4 2019-09-21",
        f
    })
}(function(a) {
    if ("undefined" != typeof module && module.exports)
        return function(a) {
            module.exports = a()
        }
        ;
    if ("function" == typeof define && define.amd)
        return define;
    if ("undefined" != typeof window)
        return function(a) {
            window.MobileDetect = a()
        }
        ;
    throw new Error("unknown environment")
}());

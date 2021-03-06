!
    function(t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r),
                o.l = !0,
                o.exports
        }
        r.m = t,
            r.c = e,
            r.d = function(t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            },
            r.n = function(t) {
                var e = t && t.__esModule ?
                    function() {
                        return t.
                            default
                    }:
                    function() {
                        return t
                    };
                return r.d(e, "a", e),
                    e
            },
            r.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            r.p = "/h5/music_box/",
            r(r.s = 3)
    } ([function(t, e) {
        t.exports = function(t) {
            return t && t.__esModule ? t: {
                default:
                t
            }
        }
    },
        function(t, e) {
            t.exports = function(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        },
        function(t, e) {
            function r(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                }
            }
            t.exports = function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                    t
            }
        },
        function(t, e, r) {
            "use strict";
            var n = r(0);
            r(4);
            var o = n(r(5));
            window.onload = function() {
                new o.
                default
            }
        },
        function(t, e) {},
        function(t, e, r) {
            "use strict";
            var n = r(0);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.
                    default = void 0;
            var o = n(r(1)),
                i = n(r(2)),
                a = n(r(6)),
                u = n(r(8)),
                c = function() {
                    function t() { (0, o.
                        default)(this, t),
                        this.initMusicText = [],
                        this.aMusicType = document.querySelectorAll(".type input"),
                        this.oMusicType = document.querySelector(".type input:checked"),
                        this.musicTextBox = document.getElementById("music-text"),
                        this.oTitle = document.querySelector(".title"),
                        this.oSpeed = document.getElementById("speed"),
                        this.oSpeedValue = document.getElementById("speed-value"),
                        this.musicType = this.oMusicType.value,
                        this.music = this.playMusic(),
                        this.init()
                    }
                    return (0, i.
                        default)(t, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            this.help(),
                                this.showMusicList();
                            for (var e = 0; e < this.aMusicType.length; e++) this.aMusicType[e].addEventListener("change",
                                function(e) {
                                    e.target.checked && (t.musicType = e.target.value, t.music.setMusicType(e.target.value))
                                });
                            document.addEventListener("keyup",
                                function(e) {
                                    if (13 == e.keyCode) {
                                        var r = t.musicTextBox.value;
                                        r ? (t.music.pauseMusic(), t.music = t.playMusic(r)) : alert("??????????????????")
                                    }
                                }),
                                this.oSpeed.addEventListener("input",
                                    function() {
                                        t.oSpeedValue.innerHTML = t.oSpeed.value,
                                            t.oSpeed.style.backgroundSize = 100 * (t.oSpeed.value - 60) / 60 + "% 100%",
                                            t.music.setPlaySpeed(t.oSpeed.value),
                                        t.chord && t.chord.setPlaySpeed(t.oSpeed.value)
                                    })
                        }
                    },
                        {
                            key: "help",
                            value: function() {
                                document.querySelector(".help .icon").addEventListener("click",
                                    function() {
                                        document.querySelector(".popop").classList.add("show")
                                    }),
                                    document.querySelector(".help .close").addEventListener("click",
                                        function() {
                                            document.querySelector(".popop").classList.remove("show")
                                        })
                            }
                        },
                        {
                            key: "showMusicList",
                            value: function() {
                                var t = this,
                                    e = document.querySelector(".music-name"),
                                    r = ""; (0, a.
                                    default)({
                                    url:"json/data.json",
                                    dataType: "json",
                                    success: function(n) {
                                        200 == n.code ? (t.initMusicText = n.data, t.initMusicText.forEach(function(t) {
                                            r += '<div class="btn" data-melody="'.concat(t.melody, '" data-chord="').concat(t.chord, '" data-id="').concat(t.id, '"><span>').concat(t.name, "</span></div>")
                                        }), e.innerHTML = r) : console.log(n.msg),
                                            t.chooseMusic()
                                    }
                                })
                            }
                        },
                        {
                            key: "playMusic",
                            value: function(t) {
                                var e = !!t && Number(this.oSpeed.value);
                                return new u.
                                default(".music-box", {
                                    loop: !0,
                                    musicText: t,
                                    autoplay: e,
                                    type: this.musicType,
                                    duration: 3
                                })
                            }
                        },
                        {
                            key: "chooseMusic",
                            value: function() {
                                for (var t = this,
                                         e = document.querySelectorAll(".music-name .btn"), r = 0; r < e.length; r++) e[r].addEventListener("click",
                                    function(e) {
                                        if ("span" === e.target.tagName.toLowerCase()) {
                                            var r = e.currentTarget.dataset.melody,
                                                n = e.currentTarget.dataset.chord;
                                            t.musicTextBox.value = r,
                                                t.music.pauseMusic(),
                                                t.music = t.playMusic(r),
                                            t.chord && t.chord.pauseMusic(),
                                            n && (t.chord = new u.
                                            default(".chord", {
                                                loop: !0,
                                                musicText: n,
                                                autoplay: t.oSpeed.value,
                                                duration: 3,
                                                volume: .2
                                            })),
                                                t.oTitle.innerHTML = e.currentTarget.querySelector("span").innerHTML,
                                                document.title = t.oTitle.innerHTML
                                        }
                                    })
                            }
                        }]),
                        t
                } ();
            e.
                default = c
        },
        function(t, e, r) {
            "use strict";
            var n = r(0);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.
                    default = function() {
                    var t = {
                        type: arguments[0].type || "GET",
                        url: arguments[0].url || "",
                        async: arguments[0].async || "true",
                        data: arguments[0].data || null,
                        dataType: arguments[0].dataType || "text",
                        contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
                        beforeSend: arguments[0].beforeSend ||
                        function() {},
                        success: arguments[0].success ||
                        function() {},
                        error: arguments[0].error ||
                        function() {},
                        complete: arguments[0].complete ||
                        function() {}
                    };
                    t.beforeSend();
                    var e = function() {
                        if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
                        if (window.XMLHttpRequest) return new XMLHttpRequest
                    } ();
                    e.responseType = t.dataType,
                        e.open(t.type, t.url, t.async),
                        e.setRequestHeader("Content-Type", t.contentType),
                        e.send(function(t) {
                            if ("object" === (0, o.
                                default)(t)) {
                                var e = "";
                                for (var r in t) e += r + "=" + t[r] + "&";
                                return e = e.substring(0, e.length - 1)
                            }
                            return t
                        } (t.data)),
                        e.onreadystatechange = function() {
                            4 == e.readyState && (200 == e.status ? t.success(e.response) : t.error(), t.complete())
                        }
                };
            var o = n(r(7))
        },
        function(t, e) {
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function(t) {
                        return typeof t
                    }: function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                    })(t)
            }
            function n(e) {
                return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = n = function(t) {
                    return r(t)
                }: t.exports = n = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": r(t)
                },
                    n(e)
            }
            t.exports = n
        },
        function(t, e, r) {
            "use strict";
            var n = r(0);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.
                    default = void 0;
            var o = n(r(9)),
                i = n(r(12)),
                a = n(r(1)),
                u = n(r(2)),
                c = function() {
                    function t(e, r) { (0, a.
                        default)(this, t);
                        this.selector = e,
                            this.opts = Object.assign({
                                    loop: !1,
                                    musicText: "",
                                    autoplay: 60,
                                    type: "sine",
                                    duration: 2,
                                    volume: 1
                                },
                                r),
                            this.audioCtx = new(window.AudioContext || window.webkitAudioContext),
                            this.arrFrequency = [262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1047, 1175, 1319, 1397, 1568, 1760, 1967],
                            this.arrNotes = ["c", "d", "e", "f", "g", "a", "b", "1", "2", "3", "4", "5", "6", "7", "C", "D", "E", "F", "G", "A", "B"],
                            this.keyCodes = [81, 87, 69, 82, 84, 89, 85, 49, 50, 51, 52, 53, 54, 55, 65, 83, 68, 70, 71, 72, 74],
                            this.draw(),
                            this.speed = 60,
                            this.paused = !1,
                        this.opts.autoplay && (this.speed = !0 === this.opts.autoplay ? this.speed: this.opts.autoplay, this.playMusic(this.opts.musicText))
                    }
                    return (0, u.
                        default)(t, [{
                        key: "createMusic",
                        value: function(t) {
                            var e = this.arrNotes.indexOf(t); - 1 !== e && this.createSound(this.arrFrequency[e])
                        }
                    },
                        {
                            key: "createSound",
                            value: function(t) {
                                var e = this.audioCtx.createOscillator(),
                                    r = this.audioCtx.createGain();
                                e.connect(r),
                                    r.connect(this.audioCtx.destination),
                                    e.type = this.opts.type,
                                    e.frequency.value = t,
                                    r.gain.setValueAtTime(0, this.audioCtx.currentTime),
                                    r.gain.linearRampToValueAtTime(this.opts.volume, this.audioCtx.currentTime + .01),
                                    e.start(this.audioCtx.currentTime),
                                    r.gain.exponentialRampToValueAtTime(.001, this.audioCtx.currentTime + this.opts.duration),
                                    e.stop(this.audioCtx.currentTime + this.opts.duration)
                            }
                        },
                        {
                            key: "draw",
                            value: function() {
                                var t = this;
                                this.musicBtn = null;
                                for (var e = document.querySelector(this.selector), r = "", n = {
                                        c: 1,
                                        d: 2,
                                        e: 3,
                                        f: 4,
                                        g: 5,
                                        a: 6,
                                        b: 7
                                    },
                                         o = 0; o < this.arrFrequency.length; o++) r += '<li><span></span><i class="' + (this.arrNotes[o] >= "a" && this.arrNotes[o] <= "g" ? "low": this.arrNotes[o] >= "A" && this.arrNotes[o] <= "G" ? "high": "") + '">' + (n[this.arrNotes[o].toLowerCase()] || this.arrNotes[o]) + "</i></li>";
                                e.innerHTML = "<ul>" + r + "</ul>",
                                    this.musicBtn = e.querySelectorAll("li");
                                for (var i = function(e) {
                                        t.musicBtn[e].addEventListener("mousedown",
                                            function(r) {
                                                t.pressBtn(e)
                                            })
                                    },
                                         a = 0; a < this.arrFrequency.length; a++) i(a);
                                document.addEventListener("mouseup",
                                    function() {
                                        for (var e = 0; e < t.arrFrequency.length; e++) t.musicBtn[e].className = ""
                                    }),
                                    document.addEventListener("keypress",
                                        function(e) {
                                            var r = document.activeElement.nodeName.toLowerCase();
                                            "input" !== r && "textarea" !== r && -1 !== t.keyCodes.indexOf(e.keyCode) && t.pressBtn(t.keyCodes.indexOf(e.keyCode))
                                        })
                            }
                        },
                        {
                            key: "pressBtn",
                            value: function(t) {
                                var e = this;
                                this.musicBtn[t].className = "cur",
                                    this.createSound(this.arrFrequency[t]),
                                    setTimeout(function() {
                                            e.musicBtn[t].className = ""
                                        },
                                        300)
                            }
                        },
                        {
                            key: "playMusic",
                            value: function(t) {
                                var e = this,
                                    r = t.split(""); (0, i.
                                    default)(o.
                                default.mark(function t() {
                                    var n, i;
                                    return o.
                                    default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    t.prev = 0,
                                                        n = 0;
                                                case 2:
                                                    if (e.paused) {
                                                        t.next = 30;
                                                        break
                                                    }
                                                    if (! (n >= r.length)) {
                                                        t.next = 9;
                                                        break
                                                    }
                                                    if (!e.opts.loop) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    n = 0,
                                                        t.next = 9;
                                                    break;
                                                case 8:
                                                    return t.abrupt("break", 30);
                                                case 9:
                                                    if ( - 1 === (i = e.arrNotes.indexOf(r[n]))) {
                                                        t.next = 14;
                                                        break
                                                    }
                                                    e.pressBtn(i),
                                                        t.next = 27;
                                                    break;
                                                case 14:
                                                    t.t0 = r[n],
                                                        t.next = "0" === t.t0 ? 17 : "-" === t.t0 ? 18 : "=" === t.t0 ? 21 : 24;
                                                    break;
                                                case 17:
                                                    return t.abrupt("break", 27);
                                                case 18:
                                                    return t.next = 20,
                                                        s(6e4 / (2 * e.speed));
                                                case 20:
                                                    return t.abrupt("break", 27);
                                                case 21:
                                                    return t.next = 23,
                                                        s(6e4 / (4 * e.speed));
                                                case 23:
                                                    return t.abrupt("break", 27);
                                                case 24:
                                                    return t.next = 26,
                                                        s(6e4 / e.speed);
                                                case 26:
                                                    return t.abrupt("break", 27);
                                                case 27:
                                                    n++,
                                                        t.next = 2;
                                                    break;
                                                case 30:
                                                    t.next = 35;
                                                    break;
                                                case 32:
                                                    t.prev = 32,
                                                        t.t1 = t.
                                                        catch(0),
                                                        location.reload();
                                                case 35:
                                                case "end":
                                                    return t.stop()
                                            }
                                        },
                                        t, this, [[0, 32]])
                                }))()
                            }
                        },
                        {
                            key: "pauseMusic",
                            value: function() {
                                this.paused = !0
                            }
                        },
                        {
                            key: "setMusicType",
                            value: function(t) {
                                this.opts.type = t
                            }
                        },
                        {
                            key: "setPlaySpeed",
                            value: function(t) {
                                this.speed = t
                            }
                        }]),
                        t
                } ();
            function s(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                })
            }
            window.MusicBox = c;
            var l = c;
            e.
                default = l
        },
        function(t, e, r) {
            t.exports = r(10)
        },
        function(t, e, r) {
            var n = function() {
                    return this || "object" == typeof self && self
                } () || Function("return this")(),
                o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
                i = o && n.regeneratorRuntime;
            if (n.regeneratorRuntime = void 0, t.exports = r(11), o) n.regeneratorRuntime = i;
            else try {
                delete n.regeneratorRuntime
            } catch(t) {
                n.regeneratorRuntime = void 0
            }
        },
        function(t, e) { !
            function(e) {
                "use strict";
                var r, n = Object.prototype,
                    o = n.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol: {},
                    a = i.iterator || "@@iterator",
                    u = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag",
                    s = "object" == typeof t,
                    l = e.regeneratorRuntime;
                if (l) s && (t.exports = l);
                else { (l = e.regeneratorRuntime = s ? t.exports: {}).wrap = w;
                    var f = "suspendedStart",
                        p = "suspendedYield",
                        h = "executing",
                        d = "completed",
                        y = {},
                        m = {};
                    m[a] = function() {
                        return this
                    };
                    var v = Object.getPrototypeOf,
                        g = v && v(v(N([])));
                    g && g !== n && o.call(g, a) && (m = g);
                    var x = k.prototype = T.prototype = Object.create(m);
                    L.prototype = x.constructor = k,
                        k.constructor = L,
                        k[c] = L.displayName = "GeneratorFunction",
                        l.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !! e && (e === L || "GeneratorFunction" === (e.displayName || e.name))
                        },
                        l.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : (t.__proto__ = k, c in t || (t[c] = "GeneratorFunction")),
                                t.prototype = Object.create(x),
                                t
                        },
                        l.awrap = function(t) {
                            return {
                                __await: t
                            }
                        },
                        S(M.prototype),
                        M.prototype[u] = function() {
                            return this
                        },
                        l.AsyncIterator = M,
                        l.async = function(t, e, r, n) {
                            var o = new M(w(t, e, r, n));
                            return l.isGeneratorFunction(e) ? o: o.next().then(function(t) {
                                return t.done ? t.value: o.next()
                            })
                        },
                        S(x),
                        x[c] = "Generator",
                        x[a] = function() {
                            return this
                        },
                        x.toString = function() {
                            return "[object Generator]"
                        },
                        l.keys = function(t) {
                            var e = [];
                            for (var r in t) e.push(r);
                            return e.reverse(),
                                function r() {
                                    for (; e.length;) {
                                        var n = e.pop();
                                        if (n in t) return r.value = n,
                                            r.done = !1,
                                            r
                                    }
                                    return r.done = !0,
                                        r
                                }
                        },
                        l.values = N,
                        j.prototype = {
                            constructor: j,
                            reset: function(t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(_), !t) for (var e in this)"t" === e.charAt(0) && o.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = r)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;
                                function n(n, o) {
                                    return u.type = "throw",
                                        u.arg = t,
                                        e.next = n,
                                    o && (e.method = "next", e.arg = r),
                                        !!o
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i],
                                        u = a.completion;
                                    if ("root" === a.tryLoc) return n("end");
                                    if (a.tryLoc <= this.prev) {
                                        var c = o.call(a, "catchLoc"),
                                            s = o.call(a, "finallyLoc");
                                        if (c && s) {
                                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                        } else if (c) {
                                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                        } else {
                                            if (!s) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var i = n;
                                        break
                                    }
                                }
                                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                                var a = i ? i.completion: {};
                                return a.type = t,
                                    a.arg = e,
                                    i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                                    y
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var r = this.tryEntries[e];
                                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc),
                                        _(r),
                                        y
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var r = this.tryEntries[e];
                                    if (r.tryLoc === t) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var o = n.arg;
                                            _(r)
                                        }
                                        return o
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                return this.delegate = {
                                    iterator: N(t),
                                    resultName: e,
                                    nextLoc: n
                                },
                                "next" === this.method && (this.arg = r),
                                    y
                            }
                        }
                }
                function w(t, e, r, n) {
                    var o = e && e.prototype instanceof T ? e: T,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = f;
                        return function(o, i) {
                            if (n === h) throw new Error("Generator is already running");
                            if (n === d) {
                                if ("throw" === o) throw i;
                                return C()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = E(a, r);
                                    if (u) {
                                        if (u === y) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === f) throw n = d,
                                        r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = h;
                                var c = b(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? d: p, c.arg === y) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = d, r.method = "throw", r.arg = c.arg)
                            }
                        }
                    } (t, r, a),
                        i
                }
                function b(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch(t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                function T() {}
                function L() {}
                function k() {}
                function S(t) { ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
                }
                function M(t) {
                    var e;
                    this._invoke = function(r, n) {
                        function i() {
                            return new Promise(function(e, i) { !
                                function e(r, n, i, a) {
                                    var u = b(t[r], t, n);
                                    if ("throw" !== u.type) {
                                        var c = u.arg,
                                            s = c.value;
                                        return s && "object" == typeof s && o.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                                                e("next", t, i, a)
                                            },
                                            function(t) {
                                                e("throw", t, i, a)
                                            }) : Promise.resolve(s).then(function(t) {
                                                c.value = t,
                                                    i(c)
                                            },
                                            function(t) {
                                                return e("throw", t, i, a)
                                            })
                                    }
                                    a(u.arg)
                                } (r, n, e, i)
                            })
                        }
                        return e = e ? e.then(i, i) : i()
                    }
                }
                function E(t, e) {
                    var n = t.iterator[e.method];
                    if (n === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.
                                return && (e.method = "return", e.arg = r, E(t, e), "throw" === e.method)) return y;
                            e.method = "throw",
                                e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return y
                    }
                    var o = b(n, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw",
                        e.arg = o.arg,
                        e.delegate = null,
                        y;
                    var i = o.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, y) : i: (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
                }
                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
                        this.tryEntries.push(e)
                }
                function _(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                        delete e.arg,
                        t.completion = e
                }
                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                        t.forEach(O, this),
                        this.reset(!0)
                }
                function N(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;) if (o.call(t, n)) return e.value = t[n],
                                        e.done = !1,
                                        e;
                                    return e.value = r,
                                        e.done = !0,
                                        e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: C
                    }
                }
                function C() {
                    return {
                        value: r,
                        done: !0
                    }
                }
            } (function() {
                return this || "object" == typeof self && self
            } () || Function("return this")())
        },
        function(t, e) {
            function r(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch(t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            t.exports = function(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(o, i) {
                        var a = t.apply(e, n);
                        function u(t) {
                            r(a, o, i, u, c, "next", t)
                        }
                        function c(t) {
                            r(a, o, i, u, c, "throw", t)
                        }
                        u(void 0)
                    })
                }
            }
        }]);
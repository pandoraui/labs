/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    function cv(a) {
        if (!ck[a]) {
            var b = c.body,
            d = f("<" + a + ">").appendTo(b),
            e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0),
                b.appendChild(cl);
                if (!cm || !cl.createElement) cm = (cl.contentWindow || cl.contentDocument).document,
                cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>": "") + "<html><body>"),
                cm.close();
                d = cm.createElement(a),
                cm.body.appendChild(d),
                e = f.css(d, "display"),
                b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }
    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)),
        function() {
            c[this] = a
        });
        return c
    }
    function ct() {
        cr = b
    }
    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }
    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
        e = {},
        g, h, i = d.length,
        j, k = d[0],
        l,
        m,
        n,
        o,
        p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p: p === !0 && (n = o);
                                break
                            }
                        }
                    }
                } ! n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function cb(a, c, d) {
        var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function ca(a, b, c, d) {
        if (f.isArray(b)) f.each(b,
        function(b, e) {
            c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b: "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object") for (var e in b) ca(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a: e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f],
        i = 0,
        j = h ? h.length: 0,
        k = a === bT,
        l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l == "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }
    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP),
                e = 0,
                g = d.length,
                h,
                i,
                j;
                for (; e < g; e++) h = d[e],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift": "push"](c)
            }
        }
    }
    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth: a.offsetHeight,
        e = b === "width" ? bx: by,
        g = 0,
        h = e.length;
        if (d > 0) {
            if (c !== "border") for (; g < h; g++) c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0),
            c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c) for (; g < h; g++) d += parseFloat(f.css(a, "padding" + e[g])) || 0,
        c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0),
        c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }
    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b),
        b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
            h = f._data(b, g),
            i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? ".": "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({},
            h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a,
        function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a,
            function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a,
        function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return ! 0
    }
    function J() {
        return ! 1
    }
    function n(a, b, c) {
        var d = b + "defer",
        e = b + "queue",
        g = b + "mark",
        h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() { ! f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        },
        0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return ! 1
        }
        return ! 0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null: f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch(g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {},
        c,
        d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
    d = a.navigator,
    e = a.location,
    f = function() {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }
        var e = function(a, b) {
            return new e.fn.init(a, b, h)
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/ig,
        w = /^-ms-/,
        x = function(a, b) {
            return (b + "").toUpperCase()
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
        e.fn = e.prototype = {
            constructor: e,
            init: function(a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d,
                            k = d ? d.ownerDocument || d: c,
                            j = m.exec(a),
                            j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1,
                            this[0] = h
                        }
                        this.context = c,
                        this.selector = a;
                        return this
                    }
                    return ! d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },
            each: function(a, b) {
                return e.each(this, a, b)
            },
            ready: function(a) {
                e.bindReady(),
                A.add(a);
                return this
            },
            eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(e.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        e.fn.init.prototype = e.fn,
        e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {},
            j = 2),
            typeof i != "object" && !e.isFunction(i) && (i = {}),
            k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c],
                f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d: []) : h = d && e.isPlainObject(d) ? d: {},
                i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        },
        e.extend({
            noConflict: function(b) {
                a.$ === e && (a.$ = g),
                b && a.jQuery === e && (a.jQuery = f);
                return e
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e.readyWait++:e.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]),
                    e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1),
                    a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch(d) {}
                        c.documentElement.doScroll && b && J()
                    }
                }
            },
            isFunction: function(a) {
                return e.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return e.type(a) === "array"
            },
            isWindow: function(a) {
                return a && typeof a == "object" && "setInterval" in a
            },
            isNumeric: function(a) {
                return ! isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseJSON: function(b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(g) {
                    d = b
                } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            },
            noop: function() {},
            globalEval: function(b) {
                b && j.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var f, g = 0,
                h = a.length,
                i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            },
            trim: G ?
            function(a) {
                return a == null ? "": G.call(a)
            }: function(a) {
                return a == null ? "": (a + "").replace(k, "").replace(l, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length,
                    c = c ? c < 0 ? Math.max(0, d + c) : c: 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var f, g, h = [],
                i = 0,
                j = a.length,
                k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d),
                f != null && (h[h.length] = f);
                else for (g in a) f = c(a[g], g, d),
                f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            guid: 1,
            proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2),
                g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            },
            access: function(a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c) e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                e.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                },
                a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },
            browser: {}
        }),
        e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }),
        z = e.uaMatch(y),
        z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
        h = e(c),
        c.addEventListener ? B = function() {
            c.removeEventListener("DOMContentLoaded", B, !1),
            e.ready()
        }: c.attachEvent && (B = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    } (),
    g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
        d = [],
        e,
        i,
        j,
        k,
        l,
        m = function(b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d],
            h = f.type(g),
            h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
        },
        n = function(b, f) {
            f = f || [],
            e = !a.memory || [b, f],
            i = !0,
            l = j || 0,
            j = 0,
            k = c.length;
            for (; c && l < k; l++) if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            i = !1,
            c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
        },
        o = {
            add: function() {
                if (c) {
                    var a = c.length;
                    m(arguments),
                    i ? k = c.length: e && e !== !0 && (j = a, n(e[0], e[1]))
                }
                return this
            },
            remove: function() {
                if (c) {
                    var b = arguments,
                    d = 0,
                    e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        i && f <= k && (k--, f <= l && l--),
                        c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            },
            has: function(a) {
                if (c) {
                    var b = 0,
                    d = c.length;
                    for (; b < d; b++) if (a === c[b]) return ! 0
                }
                return ! 1
            },
            empty: function() {
                c = [];
                return this
            },
            disable: function() {
                c = d = e = b;
                return this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                d = b,
                (!e || e === !0) && o.disable();
                return this
            },
            locked: function() {
                return ! d
            },
            fireWith: function(b, c) {
                d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                return this
            },
            fire: function() {
                o.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! e
            }
        };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
            c = f.Callbacks("once memory"),
            d = f.Callbacks("memory"),
            e = "pending",
            g = {
                resolve: b,
                reject: c,
                notify: d
            },
            h = {
                done: b.add,
                fail: c.add,
                progress: d.add,
                state: function() {
                    return e
                },
                isResolved: b.fired,
                isRejected: c.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function(a, b, c) {
                    return f.Deferred(function(d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        },
                        function(a, b) {
                            var c = b[0],
                            e = b[1],
                            g;
                            f.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments),
                                g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d: this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (a == null) a = h;
                    else for (var b in h) a[b] = h[b];
                    return a
                }
            },
            i = h.promise({}),
            j;
            for (j in g) i[j] = g[j].fire,
            i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            },
            c.disable, d.lock).fail(function() {
                e = "rejected"
            },
            b.disable, d.lock),
            a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
            c = 0,
            d = b.length,
            e = Array(d),
            g = d,
            h = d,
            j = d <= 1 && a && f.isFunction(a.promise) ? a: f.Deferred(),
            k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
    f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"),
        r = c.documentElement;
        q.setAttribute("className", "t"),
        q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = q.getElementsByTagName("*"),
        e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = q.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        },
        i.checked = !0,
        b.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch(s) {
            b.deleteExpando = !1
        } ! q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        b.radioValue = i.value === "t",
        i.setAttribute("checked", "checked"),
        q.appendChild(i),
        k = c.createDocumentFragment(),
        k.appendChild(q.lastChild),
        b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i.checked,
        k.removeChild(i),
        k.appendChild(q),
        q.innerHTML = "",
        a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent) for (o in {
            submit: 1,
            change: 1,
            focusin: 1
        }) n = "on" + o,
        p = n in q,
        p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"),
        b[o + "Bubbles"] = p;
        k.removeChild(q),
        k = g = h = j = q = i = null,
        f(function() {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0]; ! r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            },
            e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    } ();
    var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !! a && !m(a)
        },
        data: function(a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                k = typeof c == "string",
                l = a.nodeType,
                m = l ? f.cache: a,
                n = l ? a[j] : a[j] && j,
                o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid: n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n],
                e || (h.data || (h.data = {}), h = h.data),
                d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                i = a.nodeType,
                j = i ? f.cache: a,
                k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (! (c ? m: f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    f.fn.extend({
        data: function(a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name,
                        g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split("."),
            d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]),
                h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f(this),
                e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e),
                f.data(this, a, c),
                b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue",
                d = f._data(a, b),
                c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
            d = c.shift(),
            e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a,
            function() {
                f.dequeue(a, b)
            },
            e)),
            c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }),
    f.fn.extend({
        queue: function(a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a: a,
            b = b || "fx";
            return this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {--h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b),
            a = a || "fx";
            var d = f.Deferred(),
            e = this,
            g = e.length,
            h = 1,
            i = a + "defer",
            j = a + "queue",
            k = a + "mark",
            l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++,
            l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                    h = f(this),
                    i = b,
                    j = a.split(p);
                    while (e = j[g++]) i = d ? i: !h.hasClass(e),
                    h[i ? "addClass": "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "": f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
            c = 0,
            d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if ( !! arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                        h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a,
                            h == null ? h = "": typeof h == "number" ? h += "": f.isArray(h) && (h = f.map(h,
                            function(a) {
                                return a == null ? "": a + ""
                            })),
                            c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "": d
                }
            }
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                    h = [],
                    i = a.options,
                    j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g: 0,
                    d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled: e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if ( !! a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a),
                i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x: w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b: g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p),
                g = d.length;
                for (; h < g; h++) e = d[h],
                e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e: c), u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b),
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value: null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if ( !! a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a),
                h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e: a[c] = d: g && "get" in g && (e = g.get(a, c)) !== null ? e: a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabindex = f.propHooks.tabIndex,
    x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    },
    v || (y = {
        name: !0,
        id: !0
    },
    w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "": d.specified) ? d.nodeValue: b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    f.attrHooks.tabindex.set = w.set, f.each(["width", "height"],
    function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"],
    function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b: d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn || f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on": a.value
            }
        }
    }),
    f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /\bhover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function(a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    },
    H = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    },
    I = function(a) {
        return f.event.special.hover ? a: a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (! (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler),
                d.guid || (d.guid = f.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                },
                i.elem = a),
                c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f.event.special[m] || {},
                    m = (g ? s.delegateType: s.bindType) || m,
                    s = f.event.special[m] || {},
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G(g),
                        namespace: n.join(".")
                    },
                    p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s;
            if ( !! g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                    j = (d ? p.delegateType: p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n],
                    (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                i = [],
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c: new f.Event(h, c) : new f.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h: "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = e),
                d = d != null ? f.makeArray(d) : [],
                d.unshift(c),
                p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                    m = E.test(s + h) ? e: e.parentNode,
                    n = null;
                    for (; m; m = m.parentNode) r.push([m, s]),
                    n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
                c.type = r[l][1],
                q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                q && q.apply(m, d),
                q = o && m[o],
                q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
            e = d.delegateCount,
            g = [].slice.call(arguments, 0),
            h = !c.exclusive && !c.namespace,
            i = [],
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t;
            g[0] = c,
            c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f(this),
                m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {},
                    q = [],
                    m[0] = l;
                    for (j = 0; j < e; j++) r = d[j],
                    s = r.selector,
                    o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
                    o[s] && q.push(r);
                    q.length && i.push({
                        elem: l,
                        matches: q
                    })
                }
            }
            d.length > e && i.push({
                elem: this,
                matches: d.slice(e)
            });
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j],
                c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data,
                    c.handleObj = r,
                    n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g),
                    n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode: b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e, f, g, h = d.button,
                i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement: i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
            h = f.event.fixHooks[a.type] || {},
            i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d],
            a[e] = g[e];
            a.target || (a.target = g.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    f.event.handle = f.event.dispatch,
    f.removeEvent = c.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    f.Event = function(a, b) {
        if (! (this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K: J) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = a && a.timeStamp || f.now(),
        this[f.expando] = !0
    },
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    },
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this,
                d = a.relatedTarget,
                e = a.handleObj,
                g = e.selector,
                h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType,
                h = e.handler.apply(this, arguments),
                a.type = b;
                return h
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form: b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit",
                function(a) {
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.remove(this, "._submit")
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change",
                function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                f.event.add(this, "click._change",
                function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return ! 1
            }
            f.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var d = 0,
        e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function() {
                d++===0 && c.addEventListener(a, e, !0)
            },
            teardown: function() {--d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace: e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c,
            c = b;
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
            c = a.guid || f.guid++,
            d = 0,
            e = function(c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        },
        f.attrFn && (f.attrFn[b] = !0),
        C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
        D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/;
        [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
            v = m.isXML(d),
            w = [],
            x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while ( i );
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(),
                o.relative[b] && (b += w.shift()),
                j = y(b, j, f)
            } else { ! f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    }: m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode: d, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(),
                    r = q,
                    o.relative[q] ? r = w.pop() : q = "",
                    r == null && (r = d),
                    o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i,
                a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        },
        m.matches = function(a, b) {
            return m(a, null, null, b)
        },
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        },
        m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        },
        m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h],
                    l = f[1],
                    g = !1,
                    f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0;
                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r),
                        a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a);
                else break;
                q = a
            }
            return s
        },
        m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
            e = "";
            if (d) {
                if (d === 1 || d === 9) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        },
        o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b == "string",
                    d = c && !l.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = typeof b == "string",
                    e = 0,
                    f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g: !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                        d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null: c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0, h;
                    (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, ""); ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                    else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return ! 1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c, e, f, g, h, i, j, k = b[1],
                    l = a;
                    switch (k) {
                    case "only":
                    case "first":
                        while (l = l.previousSibling) if (l.nodeType === 1) return ! 1;
                        if (k === "first") return ! 0;
                        l = a;
                    case "last":
                        while (l = l.nextSibling) if (l.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        c = b[2],
                        e = b[3];
                        if (c === 1 && e === 0) return ! 0;
                        f = b[0],
                        g = a.parentNode;
                        if (g && (g[d] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d] = f
                        }
                        j = a.nodeIndex - e;
                        return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return d == null ? f === "!=": !f && m.attr ? d != null: f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        },
        p = o.match.POS,
        q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch(t) {
            s = function(a, b) {
                var c = 0,
                d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }: (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
            f = [],
            g = a.parentNode,
            i = b.parentNode,
            j = g;
            if (g === i) return v(a, b);
            if (!g) return - 1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        },
        v = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = c.createElement("div"),
            d = "script" + (new Date).getTime(),
            e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        } (),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        c.querySelectorAll &&
        function() {
            var a = m,
            b = c.createElement("div"),
            d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch(j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                            l = e.getAttribute("id"),
                            n = l || d,
                            p = e.parentNode,
                            q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch(r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        } (),
        function() {
            var a = c.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch(f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch(g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: m.contains = function() {
            return ! 1
        },
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? b.nodeName !== "HTML": !1
        };
        var y = function(a, b, c) {
            var d, e = [],
            f = "",
            g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0],
            a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*": a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr,
        m.selectors.attrMap = {},
        f.find = m,
        f.expr = m.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = m.uniqueSort,
        f.text = m.getText,
        f.isXMLDoc = m.isXML,
        f.contains = m.contains
    } ();
    var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.POS,
    R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function(a) {
            var b = this,
            c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return ! 0
            });
            var e = this.pushStack("", "find", a),
            g,
            h,
            i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length,
                f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
            d,
            e,
            g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length: -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
            d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d: f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b: null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: f.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            e = this.length > 1 && !R[a] ? f.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
            g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g),
            g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp("<(?:" + V + ")", "i"),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    bh = U(c);
    bg.optgroup = bg.option,
    bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
    bg.th = bg.td,
    f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        text: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) ! b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
            d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a: b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch(e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function(b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                    d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    f(this).remove(),
                    b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
            k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b),
                g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode,
                f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                }: e = f.buildFragment(a, this, k),
                h = e.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }),
    f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e: 1);
        return {
            fragment: e,
            cacheable: g
        }
    },
    f.fragments = {},
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h),
                d = bl(a),
                e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g;
            b = b || c,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
            i;
            for (var j = 0, k;
            (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string") if (!_.test(k)) k = b.createTextNode(k);
                else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                    m = bg[l] || bg._default,
                    n = m[0],
                    o = b.createElement("div");
                    b === c ? bh.appendChild(o) : U(b).appendChild(o),
                    o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = $.test(k),
                        q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes: m[1] === "<table>" && !p ? o.childNodes: [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    } ! f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                    k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked) if (k[0] && typeof(r = k.length) == "number") for (i = 0; i < r; i++) bn(k[i]);
                else bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function(a) {
                    return ! a.type || be.test(a.type)
                };
                for (j = 0; h[j]; j++) if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
            return h
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
            e = f.event.special,
            g = f.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                    delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i,
    br = /opacity=([^)]*)/,
    bs = /([A-Z]|^ms)/g,
    bt = /^-?\d+(?:px)?$/i,
    bu = /^-?\d/,
    bv = /^([\-+])=([\-+.\de]+)/,
    bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bx = ["Left", "Right"],
    by = ["Top", "Bottom"],
    bz,
    bA,
    bB;
    f.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0,
        function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    },
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d,
                h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch(l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bz) return bz(a, c)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e],
            a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }),
    f.curCSS = f.css,
    f.each(["height", "width"],
    function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bC(a, b, d);
                    f.swap(a, bw,
                    function() {
                        e = bC(a, b, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "",
            g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }),
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                },
                function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }),
    c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }),
    c.documentElement.currentStyle && (bB = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
        f === null && g && (e = g[b]) && (f = e),
        !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em": f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto": f
    }),
    bz = bA || bB,
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    },
    f.expr.filters.visible = function(a) {
        return ! f.expr.filters.hidden(a)
    });
    var bD = /%20/g,
    bE = /\[\]$/,
    bF = /\r?\n/g,
    bG = /#.*$/,
    bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bK = /^(?:GET|HEAD)$/,
    bL = /^\/\//,
    bM = /\?/,
    bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bO = /^(?:select|textarea)/i,
    bP = /\s+/,
    bQ = /([?&])_=[^&]*/,
    bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bS = f.fn.load,
    bT = {},
    bU = {},
    bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch(bY) {
        bV = c.createElement("a"),
        bV.href = "",
        bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [],
    f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bS) return bS.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null: f.isArray(c) ? f.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    f.each(["get", "post"],
    function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
            b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                    x = l ? cb(d, v, l) : b,
                    y,
                    z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified",
                        o = !0;
                        else try {
                            r = cc(d, x),
                            w = "success",
                            o = !0
                        } catch(A) {
                            w = "parsererror",
                            u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error",
                        a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success": "Error"), [v, d, o ? r: u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b),
            c = c || {};
            var d = f.ajaxSetup({},
            c),
            e = d.context || d,
            g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
            h = f.Deferred(),
            i = f.Callbacks("once memory"),
            j = d.statusCode || {},
            k,
            l = {},
            m = {},
            n,
            o,
            p,
            q,
            r,
            s = 0,
            t,
            u,
            v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a,
                        l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    p && p.abort(a),
                    w(0, a);
                    return this
                }
            };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status],
                    v.then(b, b)
                }
                return this
            },
            d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP),
            d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
            b$(bT, d, c, v);
            if (s === 2) return ! 1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !bK.test(d.type),
            t && f.active++===0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&": "?") + d.data, delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                    y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&": "?") + "_=" + x: "")
                }
            } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01": "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return ! 1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p) w( - 1, "No Transport");
            else {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                },
                d.timeout));
                try {
                    s = 1,
                    p.send(l, w)
                } catch(z) {
                    if (s < 2) w( - 1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
            e = function(a, b) {
                b = f.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a,
            function() {
                e(this.name, this.value)
            });
            else for (var g in a) ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }),
    f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(),
    ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cd++
        }
    }),
    f.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            },
            d.always(function() {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            },
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }),
    f.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    f.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    },
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ?
    function() {
        for (var a in ch) ch[a](0, 1)
    }: !1,
    cg = 0,
    ch;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && ci() || cj()
    }: ci,
    function(a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    } (f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(),
                    i,
                    j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch(k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b,
                                i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch(o) {
                                        k = ""
                                    } ! j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch(p) {
                            e || g( - 1, p)
                        }
                        m && g(j, k, m, l)
                    },
                    !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {},
                    f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck = {},
    cl, cm, cn = /^(?:toggle|show|hide)$/,
    co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cp, cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    cr;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g],
            d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0,
            h = this.length;
            for (; g < h; g++) d = this[g],
            d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a: f(this).is(":hidden");
                f(this)[b ? "show": "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({},
                e),
                c = this.nodeType === 1,
                d = c && f(this).is(":hidden"),
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                    i !== g && (a[g] = a[i], delete a[i]),
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i),
                h = a[i],
                cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show": "hide": 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide": "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "": "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return ! 0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({},
            a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                    e.stop(d)
                }
                var b, c = !1,
                e = f.timers,
                g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
    f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({},
            a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration: d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete,
            d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return ( - Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b: a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
            g = f.fx;
            this.startTime = cr || cs(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f.cssNumber[this.prop] ? "": "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            },
            h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cr || cs(),
            g = !0,
            h = this.elem,
            i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"],
                    function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
                    f.removeData(h, "fxshow" + b, !0),
                    f.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1, d.call(h))
                }
                return ! 1
            }
            i.duration == Infinity ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update();
            return ! 0
        }
    },
    f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
            c = 0;
            for (; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp),
            cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    f.each(["width", "height"],
    function(a, b) {
        f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
        var b = this[0],
        c;
        if (a) return this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch(d) {}
        var e = b.ownerDocument,
        g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        }: {
            top: 0,
            left: 0
        };
        var h = e.body,
        i = cy(e),
        j = g.clientTop || h.clientTop || 0,
        k = g.clientLeft || h.clientLeft || 0,
        l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
        m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
        n = c.top + l - j,
        o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }: f.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent,
        e = b,
        g = b.ownerDocument,
        h = g.documentElement,
        i = g.body,
        j = g.defaultView,
        k = j ? j.getComputedStyle(b, null) : b.currentStyle,
        l = b.offsetTop,
        m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l -= b.scrollTop,
            m -= b.scrollLeft,
            b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent),
            f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0),
            k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop,
        m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    },
    f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
            g = e.offset(),
            h = f.css(a, "top"),
            i = f.css(a, "left"),
            j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }),
    f.each(["Left", "Top"],
    function(a, c) {
        var d = "scroll" + c;
        f.fn[d] = function(c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function() {
                g = cy(this),
                g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c: f(g).scrollTop()) : this[d] = c
            })
        }
    }),
    f.each(["Height", "Width"],
    function(a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        },
        f.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin": "border")) : this[d]() : null
        },
        f.fn[d] = function(a) {
            var e = this[0];
            if (!e) return a == null ? null: this;
            if (f.isFunction(a)) return this.each(function(b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                j = parseFloat(i);
                return f.isNumeric(j) ? j: i
            }
            return this.css(d, typeof a == "string" ? a: a + "px")
        }
    }),
    a.jQuery = a.$ = f,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return f
    })
})(window);
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return - c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});

// jQuery SWFObject v1.1.1 MIT/GPL @jon_neal
// http://jquery.thewikies.com/swfobject
(function(f, h, i) {
    function k(a, c) {
        var b = (a[0] || 0) - (c[0] || 0);
        return b > 0 || !b && a.length > 0 && k(a.slice(1), c.slice(1))
    }
    function l(a) {
        if (typeof a != g) return a;
        var c = [],
        b = "";
        for (var d in a) {
            b = typeof a[d] == g ? l(a[d]) : [d, m ? encodeURI(a[d]) : a[d]].join("=");
            c.push(b)
        }
        return c.join("&")
    }
    function n(a) {
        var c = [];
        for (var b in a) a[b] && c.push([b, '="', a[b], '"'].join(""));
        return c.join(" ")
    }
    function o(a) {
        var c = [];
        for (var b in a) c.push(['<param name="', b, '" value="', l(a[b]), '" />'].join(""));
        return c.join("")
    }
    var g = "object",
    m = true;
    try {
        var j = i.description ||
        function() {
            return (new i("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
        } ()
    } catch(p) {
        j = "Unavailable"
    }
    var e = j.match(/\d+/g) || [0];
    f[h] = {
        available: e[0] > 0,
        activeX: i && !i.name,
        version: {
            original: j,
            array: e,
            string: e.join("."),
            major: parseInt(e[0], 10) || 0,
            minor: parseInt(e[1], 10) || 0,
            release: parseInt(e[2], 10) || 0
        },
        hasVersion: function(a) {
            a = /string|number/.test(typeof a) ? a.toString().split(".") : /object/.test(typeof a) ? [a.major, a.minor] : a || [0, 0];
            return k(e, a)
        },
        encodeParams: true,
        expressInstall: "expressInstall.swf",
        expressInstallIsActive: false,
        create: function(a) {
            if (!a.swf || this.expressInstallIsActive || !this.available && !a.hasVersionFail) return false;
            if (!this.hasVersion(a.hasVersion || 1)) {
                this.expressInstallIsActive = true;
                if (typeof a.hasVersionFail == "function") if (!a.hasVersionFail.apply(a)) return false;
                a = {
                    swf: a.expressInstall || this.expressInstall,
                    height: 137,
                    width: 214,
                    flashvars: {
                        MMredirectURL: location.href,
                        MMplayerType: this.activeX ? "ActiveX": "PlugIn",
                        MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
                    }
                }
            }
            attrs = {
                data: a.swf,
                type: "application/x-shockwave-flash",
                id: a.id || "flash_" + Math.floor(Math.random() * 999999999),
                width: a.width || 320,
                height: a.height || 180,
                style: a.style || ""
            };
            m = typeof a.useEncode !== "undefined" ? a.useEncode: this.encodeParams;
            a.movie = a.swf;
            a.wmode = a.wmode || "opaque";
            delete a.fallback;
            delete a.hasVersion;
            delete a.hasVersionFail;
            delete a.height;
            delete a.id;
            delete a.swf;
            delete a.useEncode;
            delete a.width;
            var c = document.createElement("div");
            c.innerHTML = ["<object ", n(attrs), ">", o(a), "</object>"].join("");
            return c.firstChild
        }
    };
    f.fn[h] = function(a) {
        var c = this.find(g).andSelf().filter(g);
        /string|object/.test(typeof a) && this.each(function() {
            var b = f(this),
            d;
            a = typeof a == g ? a: {
                swf: a
            };
            a.fallback = this;
            if (d = f[h].create(a)) {
                b.children().remove();
                b.html(d)
            }
        });
        typeof a == "function" && c.each(function() {
            var b = this;
            b.jsInteractionTimeoutMs = b.jsInteractionTimeoutMs || 0;
            if (b.jsInteractionTimeoutMs < 660) b.clientWidth || b.clientHeight ? a.call(b) : setTimeout(function() {
                f(b)[h](a)
            },
            b.jsInteractionTimeoutMs + 66)
        });
        return c
    }
})(jQuery, "flash", navigator.plugins["Shockwave Flash"] || window.ActiveXObject);

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;
(function(b) {
    var m, t, u, f, D, j, E, n, z, A, q = 0,
    e = {},
    o = [],
    p = 0,
    d = {},
    l = [],
    G = null,
    v = new Image,
    J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
    W = /[^\.]\.(swf)\s*$/i,
    K,
    L = 1,
    y = 0,
    s = "",
    r,
    i,
    h = false,
    B = b.extend(b("<div/>")[0], {
        prop: 0
    }),
    M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
    N = function() {
        t.hide();
        v.onerror = v.onload = null;
        G && G.abort();
        m.empty()
    },
    O = function() {
        if (false === e.onError(o, q, e)) {
            t.hide();
            h = false
        } else {
            e.titleShow = false;
            e.width = "auto";
            e.height = "auto";
            m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
            F()
        }
    },
    I = function() {
        var a = o[q],
        c,
        g,
        k,
        C,
        P,
        w;
        N();
        e = b.extend({},
        b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e: b(a).data("fancybox"));
        w = e.onStart(o, q, e);
        if (w === false) h = false;
        else {
            if (typeof w == "object") e = b.extend(e, w);
            k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || "";
            if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a);
            if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt");
            c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
            if (/^(?:javascript)/i.test(c) || c == "#") c = null;
            if (e.type) {
                g = e.type;
                if (!c) c = e.content
            } else if (e.content) g = "html";
            else if (c) g = c.match(J) ? "image": c.match(W) ? "swf": b(a).hasClass("iframe") ? "iframe": c.indexOf("#") === 0 ? "inline": "ajax";
            if (g) {
                if (g == "inline") {
                    a = c.substr(c.indexOf("#"));
                    g = b(a).length > 0 ? "inline": "ajax"
                }
                e.type = g;
                e.href = c;
                e.title = k;
                if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") {
                    e.width = "auto";
                    e.height = "auto"
                } else e.autoDimensions = false;
                if (e.modal) {
                    e.overlayShow = true;
                    e.hideOnOverlayClick = false;
                    e.hideOnContentClick = false;
                    e.enableEscapeButton = false;
                    e.showCloseButton = false
                }
                e.padding = parseInt(e.padding, 10);
                e.margin = parseInt(e.margin, 10);
                m.css("padding", e.padding + e.margin);
                b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",
                function() {
                    b(this).replaceWith(j.children())
                });
                switch (g) {
                case "html":
                    m.html(e.content);
                    F();
                    break;
                case "inline":
                    if (b(a).parent().is("#fancybox-content") === true) {
                        h = false;
                        break
                    }
                    b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",
                    function() {
                        b(this).replaceWith(j.children())
                    }).bind("fancybox-cancel",
                    function() {
                        b(this).replaceWith(m.children())
                    });
                    b(a).appendTo(m);
                    F();
                    break;
                case "image":
                    h = false;
                    b.fancybox.showActivity();
                    v = new Image;
                    v.onerror = function() {
                        O()
                    };
                    v.onload = function() {
                        h = true;
                        v.onerror = v.onload = null;
                        e.width = v.width;
                        e.height = v.height;
                        b("<img />").attr({
                            id: "fancybox-img",
                            src: v.src,
                            alt: e.title
                        }).appendTo(m);
                        Q()
                    };
                    v.src = c;
                    break;
                case "swf":
                    e.scrolling = "no";
                    C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c + '"></param>';
                    P = "";
                    b.each(e.swf,
                    function(x, H) {
                        C += '<param name="' + x + '" value="' + H + '"></param>';
                        P += " " + x + '="' + H + '"'
                    });
                    C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>";
                    m.html(C);
                    F();
                    break;
                case "ajax":
                    h = false;
                    b.fancybox.showActivity();
                    e.ajax.win = e.ajax.success;
                    G = b.ajax(b.extend({},
                    e.ajax, {
                        url: c,
                        data: e.ajax.data || {},
                        error: function(x) {
                            x.status > 0 && O()
                        },
                        success: function(x, H, R) {
                            if ((typeof R == "object" ? R: G).status == 200) {
                                if (typeof e.ajax.win == "function") {
                                    w = e.ajax.win(c, x, H, R);
                                    if (w === false) {
                                        t.hide();
                                        return
                                    } else if (typeof w == "string" || typeof w == "object") x = w
                                }
                                m.html(x);
                                F()
                            }
                        }
                    }));
                    break;
                case "iframe":
                    Q()
                }
            } else O()
        }
    },
    F = function() {
        var a = e.width,
        c = e.height;
        a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px": a == "auto" ? "auto": a + "px";
        c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px": c == "auto" ? "auto": c + "px";
        m.wrapInner('<div style="width:' + a + ";height:" + c + ";overflow: " + (e.scrolling == "auto" ? "auto": e.scrolling == "yes" ? "scroll": "hidden") + ';position:relative;"></div>');
        e.width = m.width();
        e.height = m.height();
        Q()
    },
    Q = function() {
        var a, c;
        t.hide();
        if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
            b.event.trigger("fancybox-cancel");
            h = false
        } else {
            h = true;
            b(j.add(u)).unbind();
            b(window).unbind("resize.fb scroll.fb");
            b(document).unbind("keydown.fb");
            f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height());
            l = o;
            p = q;
            d = e;
            if (d.overlayShow) {
                u.css({
                    "background-color": d.overlayColor,
                    opacity: d.overlayOpacity,
                    cursor: d.hideOnOverlayClick ? "pointer": "auto",
                    height: b(document).height()
                });
                if (!u.is(":visible")) {
                    M && b("select:not(#fancybox-tmp select)").filter(function() {
                        return this.style.visibility !== "hidden"
                    }).css({
                        visibility: "hidden"
                    }).one("fancybox-cleanup",
                    function() {
                        this.style.visibility = "inherit"
                    });
                    u.show()
                }
            } else u.hide();
            i = X();
            s = d.title || "";
            y = 0;
            n.empty().removeAttr("style").removeClass();
            if (d.titleShow !== false) {
                if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d);
                else a = s && s.length ? d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>': '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>": false;
                s = a;
                if (! (!s || s === "")) {
                    n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show();
                    switch (d.titlePosition) {
                    case "inside":
                        n.css({
                            width:
                            i.width - d.padding * 2,
                            marginLeft: d.padding,
                            marginRight: d.padding
                        });
                        y = n.outerHeight(true);
                        n.appendTo(D);
                        i.height += y;
                        break;
                    case "over":
                        n.css({
                            marginLeft:
                            d.padding,
                            width: i.width - d.padding * 2,
                            bottom: d.padding
                        }).appendTo(D);
                        break;
                    case "float":
                        n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f);
                        break;
                    default:
                        n.css({
                            width:
                            i.width - d.padding * 2,
                            paddingLeft: d.padding,
                            paddingRight: d.padding
                        }).appendTo(f)
                    }
                }
            }
            n.hide();
            if (f.is(":visible")) {
                b(E.add(z).add(A)).hide();
                a = f.position();
                r = {
                    top: a.top,
                    left: a.left,
                    width: f.width(),
                    height: f.height()
                };
                c = r.width == i.width && r.height == i.height;
                j.fadeTo(d.changeFade, 0.3,
                function() {
                    var g = function() {
                        j.html(m.contents()).fadeTo(d.changeFade, 1, S)
                    };
                    b.event.trigger("fancybox-change");
                    j.empty().removeAttr("filter").css({
                        "border-width": d.padding,
                        width: i.width - d.padding * 2,
                        height: e.autoDimensions ? "auto": i.height - y - d.padding * 2
                    });
                    if (c) g();
                    else {
                        B.prop = 0;
                        b(B).animate({
                            prop: 1
                        },
                        {
                            duration: d.changeSpeed,
                            easing: d.easingChange,
                            step: T,
                            complete: g
                        })
                    }
                })
            } else {
                f.removeAttr("style");
                j.css("border-width", d.padding);
                if (d.transitionIn == "elastic") {
                    r = V();
                    j.html(m.contents());
                    f.show();
                    if (d.opacity) i.opacity = 0;
                    B.prop = 0;
                    b(B).animate({
                        prop: 1
                    },
                    {
                        duration: d.speedIn,
                        easing: d.easingIn,
                        step: T,
                        complete: S
                    })
                } else {
                    d.titlePosition == "inside" && y > 0 && n.show();
                    j.css({
                        width: i.width - d.padding * 2,
                        height: e.autoDimensions ? "auto": i.height - y - d.padding * 2
                    }).html(m.contents());
                    f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S)
                }
            }
        }
    },
    Y = function() {
        if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb",
        function(a) {
            if (a.keyCode == 27 && d.enableEscapeButton) {
                a.preventDefault();
                b.fancybox.close()
            } else if ((a.keyCode == 37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
                a.preventDefault();
                b.fancybox[a.keyCode == 37 ? "prev": "next"]()
            }
        });
        if (d.showNavArrows) {
            if (d.cyclic && l.length > 1 || p !== 0) z.show();
            if (d.cyclic && l.length > 1 || p != l.length - 1) A.show()
        } else {
            z.hide();
            A.hide()
        }
    },
    S = function() {
        if (!b.support.opacity) {
            j.get(0).style.removeAttribute("filter");
            f.get(0).style.removeAttribute("filter")
        }
        e.autoDimensions && j.css("height", "auto");
        f.css("height", "auto");
        s && s.length && n.show();
        d.showCloseButton && E.show();
        Y();
        d.hideOnContentClick && j.bind("click", b.fancybox.close);
        d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
        b(window).bind("resize.fb", b.fancybox.resize);
        d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
        if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""': "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
        f.show();
        h = false;
        b.fancybox.center();
        d.onComplete(l, p, d);
        var a, c;
        if (l.length - 1 > p) {
            a = l[p + 1].href;
            if (typeof a !== "undefined" && a.match(J)) {
                c = new Image;
                c.src = a
            }
        }
        if (p > 0) {
            a = l[p - 1].href;
            if (typeof a !== "undefined" && a.match(J)) {
                c = new Image;
                c.src = a
            }
        }
    },
    T = function(a) {
        var c = {
            width: parseInt(r.width + (i.width - r.width) * a, 10),
            height: parseInt(r.height + (i.height - r.height) * a, 10),
            top: parseInt(r.top + (i.top - r.top) * a, 10),
            left: parseInt(r.left + (i.left - r.left) * a, 10)
        };
        if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
        f.css(c);
        j.css({
            width: c.width - d.padding * 2,
            height: c.height - y * a - d.padding * 2
        })
    },
    U = function() {
        return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin]
    },
    X = function() {
        var a = U(),
        c = {},
        g = d.autoScale,
        k = d.padding * 2;
        c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k;
        c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k;
        if (g && (c.width > a[0] || c.height > a[1])) if (e.type == "image" || e.type == "swf") {
            g = d.width / d.height;
            if (c.width > a[0]) {
                c.width = a[0];
                c.height = parseInt((c.width - k) / g + k, 10)
            }
            if (c.height > a[1]) {
                c.height = a[1];
                c.width = parseInt((c.height - k) * g + k, 10)
            }
        } else {
            c.width = Math.min(c.width, a[0]);
            c.height = Math.min(c.height, a[1])
        }
        c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10);
        c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10);
        return c
    },
    V = function() {
        var a = e.orig ? b(e.orig) : false,
        c = {};
        if (a && a.length) {
            c = a.offset();
            c.top += parseInt(a.css("paddingTop"), 10) || 0;
            c.left += parseInt(a.css("paddingLeft"), 10) || 0;
            c.top += parseInt(a.css("border-top-width"), 10) || 0;
            c.left += parseInt(a.css("border-left-width"), 10) || 0;
            c.width = a.width();
            c.height = a.height();
            c = {
                width: c.width + d.padding * 2,
                height: c.height + d.padding * 2,
                top: c.top - d.padding - 20,
                left: c.left - d.padding - 20
            }
        } else {
            a = U();
            c = {
                width: d.padding * 2,
                height: d.padding * 2,
                top: parseInt(a[3] + a[1] * 0.5, 10),
                left: parseInt(a[2] + a[0] * 0.5, 10)
            }
        }
        return c
    },
    Z = function() {
        if (t.is(":visible")) {
            b("div", t).css("top", L * -40 + "px");
            L = (L + 1) % 12
        } else clearInterval(K)
    };
    b.fn.fancybox = function(a) {
        if (!b(this).length) return this;
        b(this).data("fancybox", b.extend({},
        a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb",
        function(c) {
            c.preventDefault();
            if (!h) {
                h = true;
                b(this).blur();
                o = [];
                q = 0;
                c = b(this).attr("rel") || "";
                if (!c || c == "" || c === "nofollow") o.push(this);
                else {
                    o = b("a[rel=" + c + "], area[rel=" + c + "]");
                    q = o.index(this)
                }
                I()
            }
        });
        return this
    };
    b.fancybox = function(a, c) {
        var g;
        if (!h) {
            h = true;
            g = typeof c !== "undefined" ? c: {};
            o = [];
            q = parseInt(g.index, 10) || 0;
            if (b.isArray(a)) {
                for (var k = 0, C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({},
                g, a[k]));
                else a[k] = b({}).data("fancybox", b.extend({
                    content: a[k]
                },
                g));
                o = jQuery.merge(o, a)
            } else {
                if (typeof a == "object") b(a).data("fancybox", b.extend({},
                g, a));
                else a = b({}).data("fancybox", b.extend({
                    content: a
                },
                g));
                o.push(a)
            }
            if (q > o.length || q < 0) q = 0;
            I()
        }
    };
    b.fancybox.showActivity = function() {
        clearInterval(K);
        t.show();
        K = setInterval(Z, 66)
    };
    b.fancybox.hideActivity = function() {
        t.hide()
    };
    b.fancybox.next = function() {
        return b.fancybox.pos(p + 1)
    };
    b.fancybox.prev = function() {
        return b.fancybox.pos(p - 1)
    };
    b.fancybox.pos = function(a) {
        if (!h) {
            a = parseInt(a);
            o = l;
            if (a > -1 && a < l.length) {
                q = a;
                I()
            } else if (d.cyclic && l.length > 1) {
                q = a >= l.length ? 0 : l.length - 1;
                I()
            }
        }
    };
    b.fancybox.cancel = function() {
        if (!h) {
            h = true;
            b.event.trigger("fancybox-cancel");
            N();
            e.onCancel(o, q, e);
            h = false
        }
    };
    b.fancybox.close = function() {
        function a() {
            u.fadeOut("fast");
            n.empty().hide();
            f.hide();
            b.event.trigger("fancybox-cleanup");
            j.empty();
            d.onClosed(l, p, d);
            l = e = [];
            p = q = 0;
            d = e = {};
            h = false
        }
        if (! (h || f.is(":hidden"))) {
            h = true;
            if (d && false === d.onCleanup(l, p, d)) h = false;
            else {
                N();
                b(E.add(z).add(A)).hide();
                b(j.add(u)).unbind();
                b(window).unbind("resize.fb scroll.fb");
                b(document).unbind("keydown.fb");
                j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)": "about:blank");
                d.titlePosition !== "inside" && n.empty();
                f.stop();
                if (d.transitionOut == "elastic") {
                    r = V();
                    var c = f.position();
                    i = {
                        top: c.top,
                        left: c.left,
                        width: f.width(),
                        height: f.height()
                    };
                    if (d.opacity) i.opacity = 1;
                    n.empty().hide();
                    B.prop = 1;
                    b(B).animate({
                        prop: 0
                    },
                    {
                        duration: d.speedOut,
                        easing: d.easingOut,
                        step: T,
                        complete: a
                    })
                } else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
            }
        }
    };
    b.fancybox.resize = function() {
        u.is(":visible") && u.css("height", b(document).height());
        b.fancybox.center(true)
    };
    b.fancybox.center = function(a) {
        var c, g;
        if (!h) {
            g = a === true ? 1 : 0;
            c = U(); ! g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({
                top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)),
                left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding))
            },
            typeof a == "number" ? a: 200)
        }
    };
    b.fancybox.init = function() {
        if (!b("#fancybox-wrap").length) {
            b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="fancybox-overlay"></div>'), f = b('<div id="fancybox-wrap"></div>'));
            D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
            D.append(j = b('<div id="fancybox-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
            E.click(b.fancybox.close);
            t.click(b.fancybox.cancel);
            z.click(function(a) {
                a.preventDefault();
                b.fancybox.prev()
            });
            A.click(function(a) {
                a.preventDefault();
                b.fancybox.next()
            });
            b.fn.mousewheel && f.bind("mousewheel.fb",
            function(a, c) {
                if (h) a.preventDefault();
                else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) {
                    a.preventDefault();
                    b.fancybox[c > 0 ? "prev": "next"]()
                }
            });
            b.support.opacity || f.addClass("fancybox-ie");
            if (M) {
                t.addClass("fancybox-ie6");
                f.addClass("fancybox-ie6");
                b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)": "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)
            }
        }
    };
    b.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.7,
        overlayColor: "#777",
        titleShow: true,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: false,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: true,
        enableKeyboardNav: true,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    };
    b(document).ready(function() {
        b.fancybox.init()
    })
})(jQuery);



var xd = function() {
    function Q() {
        var a = d = jQuery;
        a.fn.enter = function(b) {
            a.isFunction(b) && this.keyup(function(a) {
                13 == a.keyCode && b.call(this, a)
            });
            return this
        };
        a.fn.cancel = function(b) {
            a.isFunction(b) && this.keyup(function(a) {
                27 == a.keyCode && b.call(this, a)
            });
            return this
        };
        a.ajaxSetup({
            cache: !1
        })
    }
    function k(a, b) {
        return {
            valid: a,
            msg: b
        }
    }
    function Ca(a) {
        "string" == typeof a && (a = a.toUpperCase());
        var b = [],
        b = a.split("");
        if (null == {
            11 : "\u5317\u4eac",
            12 : "\u5929\u6d25",
            13 : "\u6cb3\u5317",
            14 : "\u5c71\u897f",
            15 : "\u5185\u8499\u53e4",
            21 : "\u8fbd\u5b81",
            22 : "\u5409\u6797",
            23 : "\u9ed1\u9f99\u6c5f",
            31 : "\u4e0a\u6d77",
            32 : "\u6c5f\u82cf",
            33 : "\u6d59\u6c5f",
            34 : "\u5b89\u5fbd",
            35 : "\u798f\u5efa",
            36 : "\u6c5f\u897f",
            37 : "\u5c71\u4e1c",
            41 : "\u6cb3\u5357",
            42 : "\u6e56\u5317",
            43 : "\u6e56\u5357",
            44 : "\u5e7f\u4e1c",
            45 : "\u5e7f\u897f",
            46 : "\u6d77\u5357",
            50 : "\u91cd\u5e86",
            51 : "\u56db\u5ddd",
            52 : "\u8d35\u5dde",
            53 : "\u4e91\u5357",
            54 : "\u897f\u85cf",
            61 : "\u9655\u897f",
            62 : "\u7518\u8083",
            63 : "\u9752\u6d77",
            64 : "\u5b81\u590f",
            65 : "\u65b0\u7586",
            71 : "\u53f0\u6e7e",
            81 : "\u9999\u6e2f",
            82 : "\u6fb3\u95e8",
            91 : "\u56fd\u5916"
        } [parseInt(a.substr(0, 2))]) return ! 1;
        switch (a.length) {
        case 15:
            if ("111111111111111" == a) return ! 1;
            ereg = 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 || 0 == (parseInt(a.substr(6, 2)) + 1900) % 100 && 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 ? /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/: /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
            return ereg.test(a) ? !0 : !1;
        case 18:
            return ereg = 0 == parseInt(a.substr(6, 4)) % 4 || 0 == parseInt(a.substr(6, 4)) % 100 && 0 == parseInt(a.substr(6, 4)) % 4 ? /^[0-9]{6}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9X]$/: /^[0-9]{6}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9X]$/,
            ereg.test(a) ? (a = 7 * (parseInt(b[0]) + parseInt(b[10])) + 9 * (parseInt(b[1]) + parseInt(b[11])) + 10 * (parseInt(b[2]) + parseInt(b[12])) + 5 * (parseInt(b[3]) + parseInt(b[13])) + 8 * (parseInt(b[4]) + parseInt(b[14])) + 4 * (parseInt(b[5]) + parseInt(b[15])) + 2 * (parseInt(b[6]) + parseInt(b[16])) + 1 * parseInt(b[7]) + 6 * parseInt(b[8]) + 3 * parseInt(b[9]), a = "10X98765432".substr(a % 11, 1), a == b[17] ? !0 : !1) : !1;
        default:
            return ! 1
        }
    }
    function X() {
        var a = la("source");
        a || (a = x("xd_source")) || (a = x("Am"));
        a && s("Am", a, 365, "/", ".xd.com");
        return a
    }
    function ca(a) {
        n = null;
        m({
            url: j + "/users/logoutService",
            dataType: "jsonp",
            success: function() {
                d.isFunction(a) && a(n)
            }
        },
        !0)
    }
    function ha(a, b) {
        a = d.trim(a);
        if (d.isFunction(b)) {
            var c = !1,
            e = "2-20\u4e2a\u4e2d\u82f1\u6587\u6570\u5b57";
            l.username != a ? (l.username = a, 2 > a.length ? (l.username_valid = c = !1, l.username_msg = e = "\u7528\u6237\u540d\u592a\u77ed\uff0c\u81f3\u5c112\u4f4d", b(k(c, e))) : 20 < a.length ? (l.username_valid = c = !1, l.username_msg = e = "\u7528\u6237\u540d\u592a\u957f\uff0c\u6700\u591a20\u4f4d", b(k(c, e))) : a.match(/^[\w_\u3300-\u9fff\uf900-\ufaff]{2,20}$/) ? m({
                url: j + "/users/check_username",
                data: {
                    username: a
                },
                dataType: "jsonp",
                success: function(a) {
                    switch (a.toString()) {
                    case "1":
                        c = !0;
                        e = "\u7528\u6237\u540d\u53ef\u7528";
                        break;
                    case "-1":
                        c = !1;
                        e = "2-20\u4e2a\u4e2d\u82f1\u6587\u6570\u5b57";
                        break;
                    case "-2":
                        c = !1;
                        e = "\u5305\u542b\u654f\u611f\u5b57\u7b26";
                        break;
                    case "-3":
                        c = !1,
                        e = "\u7528\u6237\u540d\u5df2\u88ab\u6ce8\u518c"
                    }
                    l.username_valid = c;
                    l.username_msg = e;
                    b(k(c, e))
                }
            }) : (l.username_valid = c = !1, l.username_msg = e = "\u5305\u542b\u975e\u6cd5\u5b57\u7b26\u8bf7\u91cd\u65b0\u8f93\u5165", b(k(c, e)))) : b(k(l.username_valid, l.username_msg))
        }
    }
    function qa(a) {
        a = d.trim(a);
        if (6 > a.length) return l.password = a,
        k(!1, "\u81f3\u5c116\u4f4d\u5b57\u7b26(\u5b57\u6bcd,\u6570\u5b57,\u7b26\u53f7)");
        l.password = a;
        return k(!0, "\u5bc6\u7801\u53ef\u7528")
    }
    function ra(a) {
        a = d.trim(a);
        return null == l.password || "" == l.password ? k(!1, "\u8bf7\u522b\u5fd8\u8bb0\u4e0a\u9762\u7684\u5bc6\u7801") : a != l.password ? k(!1, "\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4") : k(!0, "\u5bc6\u7801\u4e00\u81f4")
    }
    function sa(a, b) {
        a = d.trim(a);
        if (d.isFunction(b)) {
            var c = !1,
            e = "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u5b50\u90ae\u7bb1";
            6 < a.length && a.match(/^[A-Z0-9._%+\-]*[A-Z0-9]@(?:[A-Z0-9\-]+\.)+[A-Z]{2,4}$/i) && (c = !0, e = "\u90ae\u7bb1\u53ef\u7528");
            b(k(c, e))
        }
    }
    function ta(a) {
        a = d.trim(a);
        a = /^[\u3300-\u9fff\uf900-\ufaff]{2,}$/.test(a) ? !0 : !1;
        return a ? k(!0, "\u771f\u5b9e\u59d3\u540d") : k(!1, "\u8bf7\u8f93\u5165\u771f\u5b9e\u59d3\u540d")
    }
    function ua(a) {
        a = d.trim(a);
        return Ca(a) ? k(!0, "\u6709\u6548\u8eab\u4efd\u8bc1") : k(!1, "\u8bf7\u8f93\u516515\u621618\u4f4d\u6709\u6548\u8eab\u4efd\u8bc1")
    }
    function x(a) {
        for (var a = a + "=", b = document.cookie.split(";"), c = 0; c < b.length; c++) {
            for (var e = b[c];
            " " == e.charAt(0);) e = e.substring(1, e.length);
            if (0 == e.indexOf(a)) return decodeURIComponent(e.substring(a.length, e.length))
        }
        return null
    }
    function s(a, b, c, e, d) {
        if (a) {
            var h = "";
            c && (h = new Date, h.setTime(h.getTime() + 864E5 * c), h = "; expires=" + h.toGMTString());
            document.cookie = a + "=" + encodeURIComponent(b) + h + (";path=" + (e || "/")) + (d ? ";domain=" + d: "")
        }
    }
    function y(a, b, c) {
        s(a, "", -100, b, c)
    }
    function va(a) {
        "verycd" == a ? s("Ak", "0", 365, "/", ".xd.com") : s("Ak", "1", 365, "/", ".xd.com")
    }
    function la(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href);
        return null == a ? "": decodeURIComponent(a[1].replace(/\+/g, " "))
    }
    function Y(a, b, c, e, g, h) {
        h || (document.domain = "xd.com");
        window.open(a, c || "open_window", "width=" + (e || 500) + ",height=" + (g || 350) + ",menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=0");
        window.child_close_handler = function(a, c) {
            c == "1" ? r(Da) : r(Ea);
            a && s("A1", a, 3650, "/", ".xd.com");
            d.isFunction(b) && b()
        }
    }
    function ma(a) {
        r("/oauth/qq_login");
        d.isFunction(a) || (a = function() {
            window.location.reload()
        });
        Y(j + "/oauth/qq_login", a, "TencentLogin", 694, 600);
        return ! 1
    }
    function na(a) {
        r("/oauth/qq_login_game");
        d.isFunction(a) || (a = function() {
            window.location.reload()
        });
        var b = encodeURIComponent(j + "/oauth/qq_redirect?return=" + encodeURIComponent(window.location.protocol + "//" + window.location.host + "/oauth_helper/qq_callback.php")),
        c = (new Date).getTime();
        Y("/oauth_helper/qq_login.php?_=" + c + "&url=" + b, a, "TencentLogin", 694, 600, !0);
        return ! 1
    }
    function oa(a) {
        d.isFunction(a) || (a = function() {
            window.location.reload()
        });
        Y(j + "/oauth/verycd_login", a, "VerycdLogin", 550, 450);
        return ! 1
    }
    function I(a, b, c) {
        S || (S = !0, xd.getUser(function(e) {
            "function" === typeof topnav_user_check && topnav_user_check(e);
            0 < e.id && (d.isFunction(a) ? a(e) : b ? window.location = b: c ? window.location = xd.getPlayUrl(c) : document.referrer && (window.location = document.referrer));
            S = !1
        },
        c))
    }
    function r(a) {
        a && "undefined" != typeof _gaq && _gaq.push(["_trackPageview", a])
    }
    function wa(a, b) {
        var c = null,
        d = "pendding",
        g = a.url.split("/"),
        h = "/",
        R = a.success,
        Z = a.error,
        f = function() {
            "success" != d && (d = "try again", a.url = j + h, m(a, b), c = null)
        },
        h = 0 === g[0].indexOf("http") ? h + g.slice(3).join("/") : a.url;
        a.url = u + h;
        a.success = function(a, b, f) {
            c && (clearTimeout(c), c = null);
            if ("success" != d) d = "success";
            else return ! 1;
            "function" == typeof R && R(a, b, f)
        };
        a.error = function(a, b, d) {
            c ? (clearTimeout(c), c = null, f()) : "function" == typeof Z && Z(a, b, d)
        };
        c = setTimeout(f, 5E3);
        "undefined" == typeof a.data && (a.data = {});
        a.data.rqst_sgntr = Math.random();
        m(a, b)
    }
    function m(a, b) {
        var c = a.url;
        if (!1 === o || !0 === b || c.match(/(?:https?:)?\/\//i) && !c.match(/(?:https?:)?\/\/[\w\d._-]*www\.xd\.com(.*)/)) return d.ajax(a);
        o.push(a); ! 1 !== B && clearTimeout(B);
        B = setTimeout(function() {
            T()
        },
        500)
    }
    function T(a) {
        if (o.length) {
            if (1 == o.length) return d.ajax(o.pop());
            var b = o,
            c = {
                data: {}
            };
            for (i in b) {
                var e = b[i],
                g = e.url,
                h = 0,
                h = !1;
                (h = g.match(/(?:https?:)?\/\/[\w\d._-]*www\.xd\.com(.*)/)) && (g = h[1]);
                c.data[g] || (c.data[g] = []);
                e.data ? c.data[g].push(e.data) : c.data[g].push({
                    noparam: !0
                });
                delete e.url;
                delete e.data;
                h = c.data[g].length - 1;
                for (i in e) c[i] || (c[i] = {}),
                c[i][g] || (c[i][g] = []),
                c[i][g][h] = e[i]
            } ! 0 === a ? o = [] : (o = !1, clearTimeout(B), B = !1);
            d.ajax({
                url: j + "/remoteapi/getdata",
                dataType: "jsonp",
                data: c.data,
                cache: !1,
                success: function(a) {
                    try {
                        for (url in a) for (i in a[url]) if (c.success[url] && d.isFunction(c.success[url][i])) {
                            var b = a[url][i];
                            if (typeof b == "string") {
                                var e = b.match(/^[\w\d_]+\((.+)\);?$/);
                                e && (b = eval(e[1]))
                            }
                            c.success[url][i](b)
                        }
                    } catch(g) {}
                },
                error: function(a) {
                    try {
                        for (url in a) for (i in a[url]) if (c.error[url] && d.isFunction(c.error[url][i])) c.error[url][i](a[url][i])
                    } catch(b) {}
                }
            })
        } else o = !1
    }
    var j = "http://www.xd.com",
    u = "https://ssl.xd.com";
    0 == window.location.host.indexOf("ssl.xd.com") ? j = u: 0 == window.location.host.indexOf("local.") ? j = u = "http://local.www.xd.com": 0 < window.location.host.indexOf("office.") ? j = u = "http://" + window.location.host.replace(/^.*\.office\./i, "www.office.") : 0 == window.location.host.indexOf("api.xd.com") && (j = u = "https://api.xd.com");
    var n = null,
    U = [],
    v = !1,
    l = {},
    V = [],
    q = {
        history_amount: null,
        need_detail: !1
    },
    d;
    if ("undefined" == typeof jQuery) {
        var t = "http://web.xdcdn.net/xd/vendor/js/jquery.js";
        0 == window.location.host.indexOf("ssl.xd.com") && (t = "https://ssl.xd.com/vendor/js/jquery.js");
        var $ = t,
        t = document.createElement("script");
        t.type = "text/javascript";
        t.async = !0;
        var xa = !1;
        t.onreadystatechange = function() {
            if (("loaded" == this.readyState || "complete" == this.readyState) && !xa) xa = !0,
            Q()
        };
        t.onload = Q;
        t.src = $;
        $ = document.getElementsByTagName("script")[0];
        $.parentNode.insertBefore(t, $)
    } else Q();
    var da = 0,
    aa, S = !1,
    Fa = "/logs/join",
    Da = "/logs/join/qq",
    Ea = "/logs/login/qq",
    o = [],
    B = null,
    B = setTimeout(function() {
        T()
    },
    500);
    X();
    return {
        setOption: function(a, b) {
            q[a] = b
        },
        getUser: function(a, b, c) {
            d.isFunction(a) && (n ? a(n) : ("verycd" != c && (c = null), null === q.history_amount && (q.history_amount = 6), m({
                url: j + "/users/getuser",
                dataType: "jsonp",
                data: {
                    app: b,
                    site: c,
                    need_detail: q.need_detail,
                    history_amount: q.history_amount
                },
                cache: !1,
                success: function(b) {
                    try {
                        b && 0 < b.id && (n = b, n.returnVisitor && r("/logs/login")),
                        a(b)
                    } catch(c) {}
                }
            })))
        },
        login: function(a, b, c, e, g, h, R, Z, f, k) {
            if (d.isFunction(e) && d.isFunction(g)) {
                if (n) {
                    if (n.username == a) {
                        e(n);
                        return
                    }
                    ca()
                }
                if (!v) if (a = d.trim(a), b = d.trim(b.substr(0, 500)), a) if (b) {
                    "xd" != R && "verycd" != R && (R = "xd");
                    Z = Z || null;
                    v = !0;
                    var l = setTimeout(function() {
                        v = !1;
                        window.location.href = j + "/users/login?continue=" + window.location.href
                    },
                    1E4);
                    null === q.history_amount && (q.history_amount = 6);
                    wa({
                        url: "/users/loginService",
                        dataType: "jsonp",
                        data: {
                            "data[User][username]": a,
                            "data[User][password]": b,
                            "data[User][remember_me]": Boolean(c),
                            "data[User][site]": R,
                            app: h,
                            captcha: Z,
                            captcha_identifier: k,
                            need_detail: q.need_detail,
                            history_amount: q.history_amount
                        },
                        cache: !1,
                        success: function(a) {
                            v = !1;
                            clearTimeout(l);
                            if (a && 0 < a.id) if (!0 === a.twoauth) {
                                a = j + "/two_auth_login/index";
                                if ("/game/index.html" == window.location.pathname || "/game" == window.location.pathname) a = j + "/two_auth_login/small"; - 1 !== d.inArray(window.location.pathname, "/jswd /jswd/ /ktwd /ktwd/ /sxdwd /sxdwd/ /game/".split(" ")) ? (a = j + "/two_auth_login/small?for=" + window.location.pathname, "undefined" != typeof f && (a += "&redirect=" + f)) : "undefined" != typeof f && (a += "?redirect=" + f);
                                window.location = a
                            } else {
                                "undefined" != typeof _gaq && _gaq.push(["_setCustomVar", 2, "memberId", a.id, 2]);
                                r("/logs/login");
                                n = a;
                                try {
                                    e(n)
                                } catch(b) {}
                            } else try {
                                g(a)
                            } catch(c) {}
                        },
                        error: function() {
                            g({
                                msg: "500 Error"
                            })
                        }
                    },
                    !0)
                } else g({
                    error: "\u5bc6\u7801\u4e3a\u7a7a"
                });
                else g({
                    error: "\u7528\u6237\u540d\u4e3a\u7a7a"
                })
            }
        },
        logout: ca,
        getServers: function(a, b, c) {
            a && d.isFunction(b) && (c = "undefined" === typeof c ? !1 : c, U[a] ? b(U[a]) : m({
                url: j + "/games/getservers/" + a + "/" + c,
                dataType: "jsonp",
                success: function(c) {
                    c && (U[a] = c);
                    b(c)
                }
            }))
        },
        getPlayUrl: function(a, b) {
            if (!a) return ! 1;
            var c = j + "/games/play?app=" + a;
            b && (c += "&server=" + b);
            return c
        },
        checkUsername: ha,
        checkPassword: qa,
        checkConfirm: ra,
        checkEmail: sa,
        checkRealname: ta,
        checkRealid: ua,
        register: function(a, b, c, e, g, h, j, l, f) {
            function E(d, E) {
                function o(a) {
                    0 >= a.user ? a.error ? f(k(!1, a.error)) : f(k(!1, "\u6ce8\u518c\u5931\u8d25")) : (r(Fa), q && (y("xd_source", "/", ".xd.com"), y("Am", "/", ".xd.com")), l(a))
                }
                if (m) if (E.valid) {
                    n[d] = !0;
                    for (i in n) if (!n[i]) return;
                    var w = {
                        username: a,
                        password: b,
                        confirm: c
                    };
                    e && (w.email = e);
                    g && (w.realname = g);
                    h && (w.realid = h);
                    j && (w.captcha = j);
                    var q = X();
                    q && (w.source = q);
                    wa({
                        url: "/users/registerService",
                        success: o,
                        error: o,
                        cache: !1,
                        data: w,
                        dataType: "jsonp"
                    },
                    !0)
                } else m = !1,
                f(E)
            }
            a = d.trim(a);
            b = d.trim(b.substr(0, 500));
            c = d.trim(c.substr(0, 500));
            e = d.trim(e);
            g = d.trim(g);
            h = d.trim(h);
            j = d.trim(j);
            if (d.isFunction(l) && d.isFunction(f)) {
                var n = {
                    username: !1,
                    password: !1,
                    confirm: !1
                };
                e && (n.email = !1);
                g && (n.realname = !1);
                h && (n.realid = !1);
                var m = !0;
                ha(a,
                function(a) {
                    E("username", a)
                });
                E("password", qa(b));
                E("confirm", ra(c));
                e && sa(e,
                function(a) {
                    E("email", a)
                });
                g && E("realname", ta(g));
                h && E("realid", ua(h))
            }
        },
        getCookie: x,
        setCookie: s,
        deleteCookie: y,
        clearCookie: function(a, b) {
            for (var c = [], d = document.cookie.split(";"), g = 0; g < d.length; g++) {
                for (var h = d[g];
                " " == h.charAt(0);) h = h.substring(1, h.indexOf("="));
                c.push(h)
            }
            for (g in c) y(c[g], a, b)
        },
        getSite: function() {
            var a = x("uidsite");
            null !== a && (va(a), y("uidsite", "/", ".xd.com"));
            return "0" === x("Ak") ? "verycd": "xd"
        },
        setSite: va,
        bookmarkMe: function(a, b) {
            a = a || "//www.xd.com";
            b = b || "\u5fc3\u52a8\u6e38\u620f";
            window.sidebar ? window.sidebar.addPanel(b, a, "") : document.all ? window.external.AddFavorite(a, b) : alert("\u8bf7\u6309 Ctrl + D \u52a0\u5165\u6536\u85cf\u5939")
        },
        getParameterByName: la,
        capitaliseFirstLetter: function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        setDomain: function(a) {
            j = a
        },
        getPlayedHistory: function(a, b) {
            a && d.isFunction(b) && (V[a] ? b(V[a]) : m({
                url: j + "/games/history/" + a,
                dataType: "jsonp",
                success: function(a) {
                    if (a) if (d.isArray(a)) {
                        var e = "",
                        g;
                        for (g in a) a[g] = a[g].UserPlayHistory,
                        e = a[g].app;
                        V[e] = a
                    } else for (e in a) {
                        var h = a[e];
                        for (g in h) h[g] = h[g].UserPlayHistory;
                        V[e] = h
                    }
                    b(a)
                }
            }))
        },
        getCaptchaUrl: function() {
            x("A1") || (0 < da && m({
                url: j + "/remoteapi/get_session",
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a && s("A1", a, 30, "/", ".xd.com")
                }
            },
            !0), "undefined" != typeof _gaq && _gaq.push(["_trackEvent", "captcha", "show", da + " times with no session"]), da++);
            return j + "/security/captcha/" + Math.random()
        },
        qq_login: ma,
        qq_redirect: function(a) {
            r("/oauth/qq_redirect");
            a || (a = window.location.href);
            window.location.href = j + "/oauth/qq_redirect?return=" + a
        },
        weibo_login: function(a) {
            d.isFunction(a) || (a = function() {
                window.location.reload()
            });
            Y(j + "/oauth/weibo_login", a, "WeiboLogin", 585, 422);
            return ! 1
        },
        verycd_login: oa,
        qq_login_game: na,
        getdomain: function() {
            return j
        },
        getSslDomain: function() {
            return u
        },
        check_password_strongness: function(a) {
            return ! a ? !1 : -1 < d.inArray(a, "000000 111111 11111111 112233 123123 123321 123456 12345678 654321 666666 888888 abcdef abcabc abc123 a1b2c3 aaa111 123qwe qwerty qweasd admin password p@ssword passwd iloveyou 5201314 123456 111111 123456789 123123 a636654 3727997 qqq111 a123456 13e4e5sd aa123456 100200 131313 5897037 2281538 5201314 123abc 196299 456852 wolf8637 qqqqqq js77777 a520520 qq111111 1qaz2wsx 11111111 lnb5552436 111333 qq123123 xiaohe 216612 zz123456 123456aa e10adc3949ba59abbe56 556656 az123456 anglang qq666666 q1w2e3r4 25991314 qq11111 zzzxxx 1989617 4782633 112233abc qqqaaa 830415 ningbo 336699 wishing qw5555 1234567 198723 123321 xiao801013 19790219 yuyang11 521326 1314520 abc123456 123456789k jiangji l138071 abu131060 484848 dircls128 yuzhiyuan1 a42176488 deng1234 wy1981813 555444 zz12369 uni0728 7758521 5501146 159357 800528sd tang520qin 123aa123 li222222 hb000000 5211314 456456 123550 123456a liulan860420 zxcvbnm tyu78ju sd123456 121212 666666 1985516 zeng1013 popo999 asdasd 7878456 147258 woaini".split(" ")) ? 1 : a.match(/^\d+$/) || a.match(/^[a-z]+$/i) ? 4 : a.match(/^[0-9a-z]+$/i) ? 2 : 3
        },
        getSource: X,
        getCity: function(a) {
            aa ? a(aa) : m({
                url: j + "/users/getCity",
                dataType: "jsonp",
                success: function(b) {
                    aa = b;
                    a(aa)
                }
            })
        },
        registerForm: function(a, b, c, e, g, h, l, k, f, n) {
            function m() {
                xd.checkUsername(z.val(),
                function(a) {
                    p.username = a.valid;
                    var b = a.msg;
                    "undefined" != typeof f[a.msg] && (b = f[a.msg]);
                    0 < W.length ? (z.val(), W.show().html(b), W.removeClass("infoOk infoError"), z.removeClass("inputOk inputError"), W.addClass(a.valid ? "infoOk": "infoError"), z.addClass(a.valid ? "inputOk": "inputError")) : alert(b);
                    F()
                })
            }
            function q() {
                var a = "2-20\u4e2a\u4e2d\u82f1\u6587\u5b57\u7b26\u3001\u6570\u5b57\u6216\u4e0b\u5212\u7ebf";
                "undefined" != typeof f[a] && (a = f[a]);
                W.removeClass("infoOk infoError");
                z.removeClass("inputOk inputError");
                W.html(a);
                W.show()
            }
            function o() {
                var a = xd.checkPassword(G.val());
                p.password = a.valid;
                var b = a.msg;
                if (p.password) {
                    var b = G.val(),
                    c = "psstWeak";
                    if (b == z.val()) b = "\u5f3a\u5ea6\u5f31";
                    else {
                        var d = xd.check_password_strongness(b),
                        b = "\u5f3a\u5ea6\u5f31",
                        c = "psstWeak";
                        4 == d && (b = "\u5f3a\u5ea6\u4f4e", c = "psstLow");
                        2 == d ? (b = "\u5f3a\u5ea6\u4e2d", c = "psstNormal") : 3 == d && (b = "\u5f3a\u5ea6\u9ad8", c = "psstHigh")
                    }
                }
                "undefined" != typeof f[b] && (b = f[b]);
                0 < H.length ? (0 == G.val().length ? H.show() : H.html(b).show(), H.removeClass("infoOk infoError psstWeak psstNormal psstHigh"), G.removeClass("inputOk inputError psstWeak psstNormal psstHigh"), H.addClass(a.valid ? "infoOk": "infoError"), G.addClass(a.valid ? "inputOk": "inputError"), H.addClass(c)) : alert(b);
                0 < A.length && 0 < A.val().length && r();
                F()
            }
            function t() {
                var a = "\u81f3\u5c116\u4f4d\u5b57\u7b26(\u5b57\u6bcd,\u6570\u5b57,\u7b26\u53f7)";
                "undefined" != typeof f[a] && (a = f[a]);
                H.removeClass("infoOk infoError psstWeak psstNormal psstHigh");
                G.removeClass("inputOk inputError psstWeak psstNormal psstHigh");
                H.html(a);
                H.show()
            }
            function r() {
                var a = xd.checkConfirm(A.val());
                p.confirm = a.valid;
                var b = a.msg;
                "undefined" != typeof f[a.msg] && (b = f[a.msg]);
                0 < J.length ? (0 == A.val().length ? J.show() : J.html(b).show(), J.removeClass("infoOk infoError"), A.removeClass("inputOk inputError"), J.addClass(a.valid ? "infoOk": "infoError"), A.addClass(a.valid ? "inputOk": "inputError")) : alert(b);
                F()
            }
            function w() {
                var a = "\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801\uff0c\u786e\u4fdd\u5bc6\u7801\u4e00\u81f4";
                "undefined" != typeof f[a] && (a = f[a]);
                J.removeClass("infoOk infoError");
                A.removeClass("inputOk inputError");
                J.html(a);
                J.show()
            }
            function s() {
                var a = xd.checkRealname(K.val());
                p.realname = a.valid;
                var b = a.msg;
                "undefined" != typeof f[a.msg] && (b = f[a.msg]);
                0 < L.length ? (0 == K.val().length ? L.show() : L.html(b).show(), L.removeClass("infoOk infoError"), K.removeClass("inputOk inputError"), L.addClass(a.valid ? "infoOk": "infoError"), K.addClass(a.valid ? "inputOk": "inputError")) : alert(b);
                F()
            }
            function x() {
                var a = "\u8bf7\u8f93\u5165\u771f\u5b9e\u59d3\u540d";
                "undefined" != typeof f[a] && (a = f[a]);
                L.removeClass("infoOk infoError");
                K.removeClass("inputOk inputError");
                L.html(a);
                L.show()
            }
            function u() {
                var a = xd.checkRealid(M.val());
                p.realid = a.valid;
                var b = a.msg;
                "undefined" != typeof f[a.msg] && (b = f[a.msg]);
                0 < N.length ? (0 == M.val().length ? N.show() : N.html(b).show(), N.removeClass("infoOk infoError"), M.removeClass("inputOk inputError"), N.addClass(a.valid ? "infoOk": "infoError"), M.addClass(a.valid ? "inputOk": "inputError")) : alert(b);
                F()
            }
            function B() {
                var a = "\u8bf7\u8f93\u5165\u6709\u6548\u8eab\u4efd\u8bc1\uff0c\u6ce8\u518c\u540e\u5c06\u65e0\u6cd5\u66f4\u6539";
                "undefined" != typeof f[a] && (a = f[a]);
                N.removeClass("infoOk infoError");
                M.removeClass("inputOk inputError");
                N.html(a);
                N.show()
            }
            function y() {
                p.realname = !1;
                p.realid = !1;
                K.blur(s);
                M.blur(u);
                K.focus(x);
                M.focus(B);
                Q.show();
                X.show();
                C.realname = s;
                C.realid = u
            }
            function Y() {
                Q.hide();
                X.hide()
            }
            function ya() {
                xd.checkEmail(O.val(),
                function(a) {
                    p.email = a.valid;
                    var b = a.msg;
                    "undefined" != typeof f[a.msg] && (b = f[a.msg]);
                    0 < P.length ? (0 == O.val().length ? P.show() : P.html(b).show(), P.removeClass("infoOk infoError"), O.removeClass("inputOk inputError"), P.addClass(a.valid ? "infoOk": "infoError"), O.addClass(a.valid ? "inputOk": "inputError")) : alert(b);
                    F()
                })
            }
            function Ga() {
                var a = "\u5e38\u7528\u7684\u90ae\u7bb1\uff0c\u65b9\u4fbf\u60a8\u627e\u56de\u5bc6\u7801";
                "undefined" != typeof f[a] && (a = f[a]);
                P.removeClass("infoOk infoError");
                O.removeClass("inputOk inputError");
                P.html(a);
                P.show()
            }
            function za() {
                p.email = !1;
                O.blur(ya);
                O.focus(Ga);
                C.email = ya;
                S.show()
            }
            function Ha() {
                S.hide()
            }
            function Aa() {
                p.agreement = U.is(":checked");
                p.agreement ? 0 < ia.length && ia.hide() : ("undefined" != typeof f["\u8bf7\u540c\u610f\u7528\u6237\u534f\u8bae"] && (msg = f["\u8bf7\u540c\u610f\u7528\u6237\u534f\u8bae"]), 0 < ia.length ? ia.html("\u8bf7\u540c\u610f\u7528\u6237\u534f\u8bae").addClass("infoError").show() : alert("\u8bf7\u540c\u610f\u7528\u6237\u534f\u8bae"));
                F()
            }
            function Ba() {
                p.agreement = U.is(":checked");
                U.change(Aa);
                T.show();
                C.agreement = Aa
            }
            function Ia() {
                T.hide()
            }
            function v() {
                var a = d.trim(ba.val());
                p.captcha = 0 < a.length;
                a = "\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801";
                "undefined" != typeof f[a] && (a = f[a]);
                0 < ja.length ? (ja.html(a).show(), ja.removeClass("infoOk infoError"), ba.removeClass("inputOk inputError"), ja.addClass(p.captcha ? "infoOk": "infoError"), ba.addClass(p.captcha ? "inputOk": "inputError")) : alert(a);
                F()
            }
            function V() {
                ea.length ? ea.is(":hidden") && (p.captcha = !1, fa.attr("src", xd.getCaptchaUrl()), fa.click(function() {
                    fa.attr("src", xd.getCaptchaUrl())
                }), da.click(function() {
                    fa.attr("src", xd.getCaptchaUrl())
                }), ba.blur(v), ba.enter(function() {
                    v()
                }), ea.show(), C.captcha = v, ea.trigger("isVisible")) : "/users/register" != window.location.pathname && (window.location.href = j + "/users/register?continue=" + encodeURIComponent(window.location.href) + "&captcha=1")
            }
            function F(b) {
                "undefined" == typeof b && (b = !1);
                var c = !0,
                e = !0,
                f;
                for (f in p) if (!p[f]) {
                    c = !1;
                    if (!b) break;
                    if (!d(a + " ." + f + "Info").hasClass("infoError") && d.isFunction(C[f])) C[f]();
                    var g = a + " ." + f + "Input";
                    e && (e = !1, d(g).focus().addClass("inputError"))
                }
                return c
            }
            function $() {
                if (ka || !F(!0)) return ! 1;
                ka = !0;
                ga.trigger("isReging");
                xd.register(z.val(), G.val(), A.val(), O.val(), K.val(), M.val(), ba.val(),
                function(a) {
                    ga.trigger("isRegOk");
                    ka = !1;
                    d.isFunction(b) ? b(a) : c ? window.location = c: e ? window.location = xd.getPlayUrl(e) : document.referrer && (window.location = document.referrer)
                },
                function(a) {
                    ga.trigger("isRegError");
                    ka = !1;
                    var b = a.msg;
                    "undefined" != typeof f[b] && (b = f[b]);
                    ("\u56fe\u7247\u9a8c\u8bc1\u7801\u9519\u8bef" == a.msg || "\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801" == a.msg) && V();
                    ea.is(":visible") && fa.click();
                    0 < pa.length ? (pa.html(b).show(), pa.addClass("infoError")) : alert(b)
                });
                return ! 1
            }
            I(b, c, e);
            var ga = d(a);
            if (0 != ga.length) {
                var k = d(a + " .usernameField"),
                z = d(a + " .usernameInput"),
                W = d(a + " .usernameInfo");
                if (0 != k.length) {
                    var k = d(a + " .passwordField"),
                    G = d(a + " .passwordInput"),
                    H = d(a + " .passwordInfo");
                    if (0 != k.length) {
                        var aa = d(a + " .confirmField"),
                        A = d(a + " .confirmInput"),
                        J = d(a + " .confirmInfo"),
                        Q = d(a + " .realnameField"),
                        K = d(a + " .realnameInput"),
                        L = d(a + " .realnameInfo"),
                        X = d(a + " .realidField"),
                        M = d(a + " .realidInput"),
                        N = d(a + " .realidInfo"),
                        S = d(a + " .emailField"),
                        O = d(a + " .emailInput"),
                        P = d(a + " .emailInfo"),
                        T = d(a + " .agreementField"),
                        U = d(a + " .agreementInput"),
                        ia = d(a + " .agreementInfo"),
                        ea = d(a + " .captchaField"),
                        ba = d(a + " .captchaInput"),
                        fa = d(a + " .captchaImg"),
                        da = d(a + " .captchaRefresh"),
                        ja = d(a + " .captchaInfo");
                        d(a + " .submitInput");
                        var pa = d(a + " .submitInfo"),
                        k = d(a + " .qqField"),
                        ca = d(a + " .verycdField"),
                        p = {
                            username: !1,
                            password: !1
                        },
                        C = {};
                        f || (f = {});
                        z.blur(m);
                        z.focus(q);
                        C.username = m;
                        G.blur(o);
                        G.focus(t);
                        C.password = o;
                        0 < aa.length && (p.confirm = !1, A.blur(r), A.focus(w), A.enter(function() {
                            r()
                        }), C.confirm = r);
                        var D = [];
                        0 < Q.length && (g ? y() : D.push([y, Y]));
                        0 < S.length && (h ? za() : D.push([za, Ha]));
                        0 < T.length && (l ? Ba() : D.push([Ba, Ia]));
                        if (0 < D.length) if (g = window.location.search.match(/(\?|&)ads(=|$|&)/i) || window.location.search.match(/(\?|&)source=baidu_pinpai($|&)/i) ? !0 : !1, g) for (var ha in D) D[ha][1]();
                        else xd.getCity(function(a) {
                            a = a.substring(0, 2);
                            if (a == "\u4e0a\u6d77" || a == "\u5317\u4eac") for (var b in D) D[b][0]();
                            else for (b in D) D[b][1]()
                        });
                        1 == la("captcha") && V();
                        var ka = !1;
                        ga.submit($);
                        z.is(":visible") && z.focus();
                        0 < k.length && k.click(function() {
                            n ? na(function() {
                                I(b, c, e)
                            }) : ma(function() {
                                I(b, c, e)
                            })
                        });
                        0 < ca.length && ca.click(function() {
                            oa(function() {
                                I(b, c, e)
                            })
                        })
                    }
                }
            }
        },
        loginForm: function(a, b, c, e, g, h, j, k) {
            function f() {
                w.is(":hidden") && (s.click(f), w.show());
                s.attr("src", xd.getCaptchaUrl())
            }
            function l(a) {
                "undefined" != typeof h[a] && (a = h[a]);
                0 < u.length ? (u.html(a).addClass("infoError").show(), u.trigger("isInfoError")) : alert(a); - 1 !== a.indexOf("\u5bc6\u7801") ? q.val("").focus() : -1 !== a.indexOf("\u9a8c\u8bc1\u7801") ? t.val("").focus() : -1 !== a.indexOf("\u7528\u6237\u540d") && o.focus()
            }
            function n() {
                if (v) return ! 1;
                var a = o.val();
                if (!a) return l("\u8bf7\u8f93\u5165\u7528\u6237\u540d"),
                !1;
                var g = q.val();
                if (!g) return l("\u8bf7\u8f93\u5165\u5bc6\u7801"),
                !1;
                var h = "",
                k = "";
                if (w.is(":visible")) {
                    h = d.trim(t.val());
                    if (0 == h.length) return l("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                    !1;
                    var m = s.attr("src");
                    m && (k = m.substr(m.lastIndexOf("/") + 1))
                }
                m = r.is(":checked");
                v = !0;
                j || (j = window.location.href);
                xd.login(a, g, m,
                function(a) {
                    v = false;
                    if (d.isFunction(b)) b(a);
                    else if (c) window.location = c;
                    else if (e) window.location = xd.getPlayUrl(e);
                    else if (document.referrer) window.location = document.referrer
                },
                function(a) {
                    v = false;
                    a.needCaptcha && f();
                    l(a.error)
                },
                e, B, h, j, k);
                return ! 1
            }
            I(b, c, e);
            var m = d(a);
            if (0 != m.length) {
                var o = d(a + " .usernameInput");
                if (0 != o.length) {
                    var q = d(a + " .passwordInput");
                    if (0 != q.length) {
                        var r = d(a + " .rememberInput"),
                        w = d(a + " .captchaField"),
                        t = d(a + " .captchaInput"),
                        s = d(a + " .captchaImg");
                        d(a + " .submitInput");
                        var u = d(a + " .submitInfo"),
                        x = d(a + " .qqField"),
                        y = d(a + " .verycdField"),
                        B = d(a + " .siteInput").val();
                        h || (h = {});
                        0 < w.length && g && f();
                        var v = !1;
                        m.submit(n);
                        o.is(":visible") && o.focus();
                        0 < x.length && x.click(function() {
                            k ? na(function() {
                                I(b, c, e)
                            }) : ma(function() {
                                I(b, c, e)
                            })
                        });
                        0 < y.length && y.click(function() {
                            oa(function() {
                                I(b, c, e)
                            })
                        })
                    }
                }
            }
        },
        validateDate: function(a) {
            if (!a.match(/\d{8}/i)) return ! 1;
            var b = a.substr(0, 4),
            c = a.substr(4, 2),
            a = a.substr(6, 2),
            d = new Date(b + "-" + c + "-" + a);
            return b == d.getFullYear() && c == d.getMonth() + 1 && a == d.getDate() ? !0 : !1
        },
        ajax: m,
        sendAjaxQueue: T
    }
} ();

/*
** 此为kt v3版及相似模板的统一脚本
** 需要在调用前定义的变量：
**    avatar_default -- 用户默认头像地址
**    video_playlist_source -- 视频资源列表(不定义则默认为不含视频元素)
**    video_playlist_default -- 默认播放第几个资源(不定义则默认为0)
**    history_amount -- 显示历史服务器的数量(不定义则默认为3)
**  需要注意更新的变量 1. game_list -- 接口与域名不一致的游戏 2. preload_list -- 预加载列表 3. invided_list -- 需要检测帐号激活与否的游戏及接口列表
*/

(function($) {
    if (typeof xd == 'undefined') document.write('<script type="text/javascript" src="http://web.xdcdn.net/xd/js/layout/xd.js"></' + 'script>');

    var game_list = {
        'kt': 'ktpd',
        'sg': 'sssg',
        'td': 'tdyx'
    }; //接口与域名不一致的游戏
    var game_mobile_list = {
        'js': 'jsios'
    }
    var game = window.location.host.replace(/local\.|\.xd\.com|\.office|n/g, ''); //当前游戏域名
    var app = game; //游戏接口
    if (typeof game_list[game] !== 'undefined') {
        app = game_list[game];
    }
    var have_mobile_app = (typeof game_mobile_list[app] === 'undefined') ? false: true,
    app_mobile = have_mobile_app ? game_mobile_list[app] : ''; //是否同时包含移动端服务器（如将神）
    var app_str = have_mobile_app ? (app + ',' + app_mobile) : app;

    var preload_list = 'kt,sy'; //预加载列表
    var history_amount = (typeof window.history_amount === 'undefined') ? 3 : window.history_amount;
    var invided_list = {},
    //需要检测帐号激活情况的游戏及接口列表
    check_invided = null,
    //帐号激活信息
    lock_invided = false,
    //检测激活时的锁
    skip_invided = typeof invided_list[game] === 'undefined'; //忽略检测帐号激活情况
    var domain = xd.getdomain(),
    sslDomain = xd.getSslDomain(); //官网域名
    var logonUser = null,
    checkLogin = false; //用户信息及是否登录
    var is_android = navigator.userAgent.indexOf('Android') > -1 ? true: false; //是否是安卓系统
    var servers_for_test = {}; //测试服列表
    var servers_part_tab = $('.part_panel_tab'),
    servers_part_tab_template = $('<li><div class="tab action" data-action="switch_server_panel"><span class="btn"></span></div></li>');
    var servers_all = {},
    servers_all_container = $('.choose_server .all').find('.list'),
    servers_all_template = $('<div class="floatLeft item"><a href="#" class="btn_third action sname" data-action="play_game"></a></div>'),
    //所有服务器列表
    servers_new_template = $('<span class="new"></span>'),
    //最新服
    servers_hot_template = $('<span class="hot"></span>'); //最热服
    var servers_history = [],
    servers_history_container = $('.choose_server .played').find('.list'),
    servers_history_template = $('<div class="floatLeft item"><a href="#" class="btn_secondary action" data-action="play_game"><div class="sname"></div><div class="user_detail hide"><span class="rolename no_break"></span>－<span class="level"></span>级</div></a></div>'),
    //当前用户玩过的服务器历史记录
    ServersMaxNumPerPanel = 100,
    //服务器全部列表中最大显示数目
    ServersTabNum = 6;
    var servers_select_container = $('select.servers_select'),
    servers_select_template = $("<option value=''></option>");
    var bottomId = 'goTop',
    goTopElem = $('#' + bottomId);
    var func_list = {},
    //点击鼠标时触发调用的函数集, 调用列表函数时需要将相应的函数名写入元素节点的data-action中，并添加class="action"具体的参数以data-的形式写在元素节点中
    body_height = $(document).height();

    // function 
    function action(func_name, args) {
        if (typeof func_list[func_name] !== 'undefined') {
            func_list[func_name](args);
        } else if (typeof window[func_name] !== 'undefined') {
            window[func_name](args);
        } else {
            var func = eval(func_name);
            if (func_name != "" && $.isFunction(func)) {
                func(args);
            }
        }
    }

    function update_servers_list() {
        update_servers_list_part(app, false, servers_history, servers_history_container, servers_history_template);
        update_servers_list_part(app, true, servers_all[app], servers_all_container.eq(0), servers_all_template);

        if (have_mobile_app) {
            update_servers_list_part(app_mobile, true, servers_all[app_mobile], servers_all_container.eq(1), servers_all_template);
        }

        return false;
    }

    function update_servers_list_part(app, isAll, arr, container, template) {
        var isAll = isAll || false;
        if (!isAll) arr = arr.slice(0, 3);
        container.empty();
        if (arr.length) {
            for (var i in arr) {
                var s = arr[i],
                curr_app = typeof s.app !== 'undefined' ? s.app: app;
                var tmp = template.clone();
                tmp.find('.action').addClass(app + "_" + s.sid.replace('.', '')).data('sid', s.sid).data('app', curr_app).end().find('.sname').text(s.sname);
                if (!isAll && typeof arr[i]['rolename'] !== 'undefined' && template.find('.rolename').length) {
                    tmp.find('.rolename').text(arr[i]['rolename']);
                    tmp.find('.level').text(arr[i]['level']);
                    tmp.find('.user_detail').removeClass('hide');
                    tmp.find('.sname').addClass('show_rolename');
                } else if (isAll && servers_select_container.length) {
                    var tmp2 = servers_select_template.clone();
                    tmp2.val(s.sid).text(s.sname).data('app', app);
                    servers_select_container.append(tmp2);
                }
                container.append(tmp);
            }
        }

        if (isAll) {
            set_server_part_panel(app, arr, container);
            container.find('.item:eq(0) .sname').append(servers_new_template.clone());
            if (game === 'sy') return false;
            container.find('.item:eq(1) .sname').append(servers_hot_template.clone());
        }
    }

    function set_server_part_panel(app, arr, container) {
        var count = arr.length;
        if (count > ServersMaxNumPerPanel) {
            count -= servers_for_test[app].length; //列表总数排除测试服
            var max = Math.ceil(count / (ServersMaxNumPerPanel * ServersTabNum - 1)) * ServersMaxNumPerPanel;
            var sum = 0,
            start = Math.ceil((count + 1) / max) * max - 1,
            pItem = container.parent();
            var tab = container.siblings();
            tab.empty();
            do {
                var end = start > max ? (start - max + 1) : 1, str = end + '-' + start + "区";
                var tmp = servers_part_tab_template.clone(), name = app + '_part_panel_' + sum;
                tmp.find('.tab').data('part', name).find('.btn').text(str);
                tab.append(tmp);
                pItem.find('.list>.item:lt(' + ((start != count) ? (count - end + 1) : max) + ')').wrapAll('<div class="part_panel clearfix ' + name + '"></div>');
                sum++;
                start = start - max;
                count = start;
            } while ( start > 0 );
            tab.show().find('.tab:first').addClass('on');
            pItem.find('.part_panel').hide().first().show();
        }

        for (var i in servers_history) {
            $('.' + app + '_' + servers_history[i].sid.replace('.', '')).addClass('played_server');
        }
    }

    function get_servers() {
        if (typeof servers_all[app] !== 'undefined' && servers_all[app].length > 0) {
            update_servers_list();
            return false;
        }
        xd.getServers(app_str,
        function(server) {
            if (typeof server['now'] !== "undefined") {
                server = server['now'];
            }

            var arr = {},
            is_empty = true;
            if (have_mobile_app) {
                arr = server;
            } else {
                arr[app] = server;
            }

            for (var key in arr) {
                var tmp = [],
                tsid = [];
                for (var i in arr[key]) {
                    var n = i.toLocaleUpperCase();
                    if (n.indexOf('S0') > -1 || n.indexOf('T') > -1) {
                        tsid.push(i);
                    }
                    tmp.push({
                        'sid': i,
                        'sname': arr[key][i]
                    });
                    is_empty = false;
                }
                tmp.reverse();
                servers_all[key] = tmp;
                servers_for_test[key] = tsid;
            }
            if (!is_empty) {
                get_servers();
            }
            return false;
        });
    }

    function checkIsInvided(callback) {
        if (skip_invided) {
            if ($.isFunction(callback)) {
                callback();
            }
        } else if (check_invided === null && !lock_invided && checkLogin) {
            lock_invided = true;
            $.ajax({
                url: domain + '/games/' + invided_list[game] + '/',
                dataType: 'jsonp',
                success: function(data) {
                    $.fancybox.hideActivity();
                    lock_invided = false;
                    check_invided = data;
                    if ($.isFunction(callback)) {
                        callback(check_invided);
                    }
                }
            });
        } else if (check_invided !== null && $.isFunction(callback)) {
            callback(check_invided)
        } else if (lock_invided) {
            $.fancybox.showActivity();
        }
    }

    function settip(text, btntxt, btnaction) {
        if (!$.trim(text) || !$.trim(btntxt) || !$.trim(btnaction)) {
            return false;
        }
        $('#popup_tip').find('.tip').text(text);
        $('#popup_tip .body').find('.btn').text(btntxt).data('action', btnaction);
    }

    function showtip() {
        $.fancybox({
            href: '#popup_tip',
            modal: true,
            padding: 0,
            hideOnOverlayClick: true,
            transitionIn: 'none',
            transitionOut: 'none',
            changeFade: 'fast'
        });
    }

    function after_login(user) {
        logonUser = user;
        checkLogin = true;

        var nickname = user.username;
        if (user.nickname) {
            nickname = user.nickname;
        }

        $(".comment_content").load(window.location.href, {
            'page': 1
        });
        $('.username').filter(function(index) {
            return $(this).parents('.comment_content').length == 0
        }).text(cutstr(nickname, 12)).attr('title', nickname);
        $('.usernameWrapper').text(nickname).attr('title', nickname);
        $('.logging').hide();
        $('.no_login').hide();
        $('.yes_login').show();
        commonLogin();
        $('.close:visible').trigger('click');
        servers_history = typeof logonUser.history != 'undefined' ? logonUser.history: [];
        if (servers_history.length == 0) {
            servers_history_container.parent().hide();
        } else if (servers_history_container.parent().is(':hidden')) {
            servers_history_container.parent().show();
        }
        checkIsInvided();
        get_servers();
        var avatar = 'http://bbs.xd.com/ucenter/avatar.php?uid=' + logonUser.id + '&&size=small';
        $('#avatar img').attr('src', avatar);
        if ( !! logonUser.lastserver) {
            $('.lately_server').text(logonUser.lastserver).closest('a.action').data('sid', logonUser.lastsid).data('app', typeof logonUser.lastapp === 'undefined' ? logonUser.app: logonUser.lastapp);
        } else if ( !! logonUser.newserver) {
            $('.lately_server').text(logonUser.newserver);
        } else {
            $('.lately_server').text('');
        }

        if (user.dangerCity && xd.getCookie('xd[Ai]') !== '1') {
            showDangerCity(user.dangerCity);
        } else if (user.psst == '1') {
            showWarning();
        } else if (user.passwordLeaked) {
            showCsdnUser(user.username);
        } else if (user.twoauth == 'remindTwoauth') {
            $('#twoauth_user').html('&nbsp;' + user.username);
            var ShowDialog = xd.getCookie('xd[Ah]');
            if (ShowDialog !== '0') {
                showTwoauthRemind(user);
            }
        }
    }

    function after_logout() {
        var avatar_addr = typeof avatar_default == 'undefined' ? '': avatar_default;
        logonUser = null;
        checkLogin = false;
        servers_history = [];
        servers_all = {};
        $('#avatar img').attr('src', avatar_addr);
        $('.no_login').show();
        $('.logging').hide();
        $('.yes_login').hide();
        check_invided = null;
        commonLogout();
        $('.username').filter(function(index) {
            return $(this).parents('.comment_content').length == 0
        }).text('').attr('title', '');
        $('.comment_textarea').find('.username').text("请先登录").attr('title', '');
        $('.lately_server').text('');
        $('.error').hide();
    }

    function showUserInfo(user) {
        /*显示登录信息*/
        if (user && user.id > 0) {
            after_login(user);
        } else {
            after_logout();
        }
    }

    function popup_login() { //弹出登录框
        $('#header .no_login').find('.action:[data-action=showLogin]').trigger('click');
        return false;
    }

    window.logout = function() {
        xd.logout(logout_refresh);
        after_logout();
    }

    function logout_refresh() {
        $(".comment_content").load(window.location.href, {
            'page': 1
        });
    }

    function fancybox_resize_body() {
        var h = $('#fancybox-wrap').outerHeight() + $('#fancybox-wrap').offset().top;
        if (body_height <= h) {
            $('body').height(h);
            $('#fancybox-overlay').height(h);
        } else {
            $('body').height('auto');
            $('#fancybox-overlay').height(body_height);
        }
    }

    func_list.play_game = function(args) {
        if (checkLogin) {
            checkIsInvided(function(data) {
                if (skip_invided || data) {
                    if (typeof args.sid != 'undefined') {
                        var url = xd.getPlayUrl(args.app, args.sid);
                    } else {
                        var url = xd.getPlayUrl(app);
                    }
                    window.open(url);
                    commonLogin();
                    $('.close:visible').trigger('click');
                } else if (!data) {
                    settip('您的账号还没有激活，请点击下面的按钮激活账号', '激活账号', 'filter_link');
                    check_invided = null;
                    showtip();
                }
            })
        } else if (checkLogin === false && !$('.logging:visible').length) {
            popup_login();
        }
        return false;
    }

    func_list.switch_server_panel = function(args) {
        if (args._this.hasClass('on') || typeof args.part == 'undefined') return false;
        var self = args._this;
        servers_part_tab.find('.on').removeClass('on');
        self.addClass('on');
        $('.' + args.part).show().siblings().hide();
        var h = $('#fancybox-wrap').outerHeight() + $('#fancybox-wrap').offset().top;
        fancybox_resize_body();
    }
    func_list.text_changer = function(args) {
        if (args._this.hasClass('on')) return false;
        var size = args['size'] || 14;
        $('#single .article .body').css('font-size', size);
        xd.setCookie('BA', size, 36500, '/', window.location.host);
        args._this.addClass('on').siblings('.text_changer').removeClass('on');
    }

    func_list.check_before_search = function(args) {
        var self = args._this;
        var form = self.parents('form');
        var has_error = false;
        if (self.siblings('.input').length) {
            self.siblings('.input').each(function() {
                if ($.trim($(this).val()) == '') {
                    $(this).trigger('focus');
                    has_error = true;
                    return;
                }
            })
        }

        if (!has_error) {
            form.trigger('submit');
        }

        return false;
    }

    func_list.switch_page = function(args) {
        if (typeof args.page == 'undefined' || typeof args.container == 'undefined') return false;
        var isappend = args.append || false;
        var container = $('.' + args.container);
        if (!isappend) {
            container.load(location.href, {
                'page': args['page']
            });
        } else {
            var self = args._this;
            container.find('.loadding').removeClass('hide');
            self.hide().remove();
            $('<div>').load(location.href, {
                'page': args['page']
            },
            function(data) {
                container.find('.page_nav').remove().end().append(data);
            })
        }
    }

    func_list.popup = function(args) { //弹出层显示
        if (servers_all[app].length == 0) {
            settip('服务器未开放', '我知道了', '$.fancybox.close');
            return false;
        }
        $.fancybox({
            href: '#popup_choose',
            modal: true,
            padding: 0,
            hideOnOverlayClick: true,
            onComplete: fancybox_resize_body,
            onClosed: fancybox_resize_body
        });
        return false;
    }

    func_list.popoff = function(args) { //弹出层关闭
        if (typeof args.target == 'undefined') return false;
        var tar = args.target,
        time_fadeout = args.fadeout || 200;
        $('.' + tar).stop().fadeOut(time_fadeout);
        $('.black_drop').fadeOut(time_fadeout + 300);
        return false;
    }

    func_list.pop_tip = function(args) {
        if ($.trim(args.tip) == '') return false;
        $('#popup_tip').find('.tip').text(args.tip);
        if (typeof args.btntext != 'undefined') {
            $('#popup_tip .body').find('.btn').text(args.btntext).data('action', args.btnaction);
        }
        showtip();
    }

    func_list.filter_link = function(args) {
        var tar = args._this.attr('href');
        if ($.trim(tar) == '') return false;
        if (checkLogin) {
            window.open(tar);
            commonLogin();
            $('.close:visible').trigger('click');
        } else {
            popup_login();
        }
        return false;
    }

    func_list.getNewbieCard = function(args) {
        if (!checkLogin) {
            popup_login();
            return false;
        } else {
            var uid = logonUser.id,
            select_item = args._this.siblings('select.servers_select');
            if (!select_item.length) return false;
            var sid = select_item.val(),
            app = select_item.find('option:selected').data('app');
            var serverExist = false;
            for (var i in servers_all[app]) {
                if (servers_all[app][i]['sid'] === sid) {
                    serverExist = true;
                    break;
                }
            }
            if (!serverExist) {
                settip('请选择服务器', '我知道了', '$.fancybox.close');
                showtip();
                return;
            }
            $.ajax({
                url: '/wp-content/themes/templates/getcard.php',
                data: {
                    'getNewbieCard': true,
                    'uid': uid,
                    'sid': sid,
                    'app': app,
                    'game': game
                },
                dataType: 'json',
                success: function(data) {
                    $('#newbie_card').html(data);
                }
            });
        }
    }

    if (goTopElem) {
        var ie6 = !!window.ActiveXObject && !window.XMLHttpRequest;
        var limit = 0;
        var goTopElemWidth = goTopElem.width(),
        goTopElemHeight = goTopElem.height();
        var resizeLock = false,
        resizeTimerID = null,
        scrollLock = false,
        scrollTimerID = null;
        var layoutX = $('#main .layout .bg').width() * 0.5 + 10;
        var rollerY, screenX, screenY, documentY, posX;
        var footerH = $('#foot').outerHeight(),
        pOffsetTop = 40;
        function init() {
            rollerY = $(window).scrollTop();
            screenX = $(window).width();
            screenY = $(window).height();
            documentY = $(document).height();
            posX = screenX * 0.5 + layoutX;
            if (rollerY < 200) {
                goTopElem.hide();
            } else {
                goTopElem.show();
            }
            if (!ie6) {
                if (documentY - rollerY - screenY <= footerH + limit) {
                    goTopElem.css({
                        'position': 'absolute',
                        'bottom': footerH + limit + 'px'
                    });
                } else {
                    goTopElem.css({
                        'position': 'fixed',
                        'bottom': '0'
                    });
                }
            }
        }

        function setpos() {
            if (!ie6) {
                goTopElem.stop().animate({
                    'left': posX + "px"
                },
                500);
            } else {
                var top = (documentY - rollerY - screenY - limit) > footerH ? (rollerY + screenY - goTopElemHeight) : (documentY - footerH - limit - goTopElemHeight);
                goTopElem.stop().animate({
                    'left': posX + 'px',
                    'top': top - pOffsetTop + 'px'
                },
                500);
            }
        }

        goTopElem.live('click',
        function() {
            $("html, body").animate({
                scrollTop: 0
            },
            1000);
            return false;
        });

        $(window).resize(function() {
            init()
            if (resizeTimerID != null) {
                clearTimeout(resizeTimerID);
            }
            resizeTimerID = setTimeout(function() {
                setpos();
                clearTimeout(resizeTimerID);
                resizeTimerID = null;
            },
            50)
        }).scroll(function() {
            init()
            if (scrollTimerID != null) {
                clearTimeout(scrollTimerID);
            }
            scrollTimerID = setTimeout(function() {
                setpos();
                clearTimeout(scrollTimerID)
                scrollTimerID = null;
            },
            50)
        }).load(function() {
            init();
            goTopElem.css({
                'left': posX + 'px'
            });
            if (ie6) {
                var t = (documentY - rollerY - screenY - limit) > footerH ? (rollerY + screenY - goTopElemHeight) : (documentY - footerH - limit - goTopElemHeight);
                goTopElem.css({
                    'top': t - pOffsetTop + 'px'
                });
            }
        })
    }

    function custom_diff_time(from, to) { //比较时间，显示与当前时间的差值
        if (typeof to === 'undefined') {
            to = new Date().getTime();
        }

        var diff = Math.abs(to - from),
        since = '',
        s;
        if (diff > 604800000) {
            s = new Date(from);
            return s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();
        } else {
            if (diff <= 3600000) {
                s = Math.round(diff / 60000);
                since = '分钟';
            } else if ((diff <= 86400000) && (diff > 3600000)) {
                s = Math.round(diff / 3600000);
                since = '小时';
            } else if ((diff <= 604800000) && diff >= 86400000) {
                s = Math.round(diff / 86400000);
                since = '天';
            }
            if (s <= 1) {
                s = 1;
            }
            return s + since + '前';
        }
    }

    //js截取字符串，中英文都能用
    // @param str：需要截取的字符串
    //@param len: 需要截取的长度
    function cutstr(str, len) {
        var str_length = 0,
        str_len = 0,
        str_cut = new String();
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；
        if (str_length < len) {
            return str;
        }
    }

    function window_reload() {
        window.location.reload();
    }

    $(document).ready(function() {
        var logging = false; //登录状态
        var currentSize = xd.getCookie('BA') || 14; //当前字体大小
        var sizeNumList = {
            16 : 'big',
            14 : 'mid',
            12 : 'small'
        }; //字体大小数字列表
        var fancybox_configure = {
            'centerOnScroll': true,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'changeSpeed': 0
        };
        xd.setOption('history_amount', history_amount);
        xd.setOption('need_detail', true);
        xd.loginForm("#loginForm", showUserInfo, null, app_str);
        xd.registerForm('#registerForm', window_reload, '', '', true, true, true, false);
        $('.action').live('click',
        function() {
            if ( !! $(this).data('action')) {
                var args = $(this).data();
                args['_this'] = $(this);
                action($(this).data('action'), args);
            }
            return false;
        })

        if (currentSize) {
            $('#' + sizeNumList[currentSize]).trigger('click');
        }

        $('a.special-title').live('click',
        function() {
            return false;
        });

        $('#commentform .submit').click(function() {
            if (!checkLogin) {
                popup_login();
                return false;
            }
            $('#xd_user_id').val(logonUser.id);

            var nickname = logonUser.username;
            if (logonUser.nickname) {
                nickname = logonUser.nickname;
            }

            $('#xd_user_name').val(nickname);
            if ($.trim($('#comment').val()) == "") {
                $('#comment').trigger('focus');
                return false;
            }
            $('form#commentform').trigger('submit');
            return false;
        })

        if ($('.custom_content_display img').length) { //文章内容中图片的预览功能
            $('.custom_content_display').find('img').each(function() {
                var src = $(this).attr('src');
                if ($(this).parent('a').length) {
                    $(this).parent().addClass('custom_content_display_image').attr({
                        'rel': 'group'
                    });
                } else {
                    $(this).wrap('<a class="custom_content_display_image" rel="group" href="' + src + '"></a>');
                }
            })

            $('a.custom_content_display_image').fancybox(fancybox_configure);
        }

        $('.tab-nav-item').live('click',
        function() {
            if ($(this).hasClass('on')) {
                return false;
            } else {
                var tar_id = "#" + $(this).data('for-id');
                var ori_id = "#" + $(this).siblings('.on').data('for-id')
                $(tar_id).show();
                $(ori_id).hide();
                $(this).addClass('on').siblings('.on').removeClass('on');
            }
            return false;
        })

        if ($('#popup_video_container').length && typeof video_playlist_source !== 'undefined') {
            var video_playlist_default = typeof window.video_playlist_default === 'undefined' ? 0 : window.video_playlist_default;
            var video_playlist_size = (typeof window.video_playlist_size !== 'undefined' && window.video_playlist_size instanceof Array && window.video_playlist_size.length === 2) ? window.video_playlist_size: [500, 500];
            jwplayer.key = "j5y+8VVgraTUXQo6O/GKYivBmM2k9kvRwbzvhg=="; //jwplayer key
            $('#topbanner').fancybox({
                padding: 0,
                onComplete: function() {
                    if ($('#popup_video_wrapper').length == 0) {
                        jwplayer('popup_video').setup({
                            width: video_playlist_size[0],
                            height: video_playlist_size[1],
                            primary: "flash",
                            playlist: [{
                                sources: video_playlist_source
                            }],
                            autostart: true
                        });
                        jwplayer().onQualityLevels(function() {
                            this.setCurrentQuality(video_playlist_default);
                        });
                    }
                }
            })
        }

    });
    if (preload_list.indexOf(game) > -1 && !is_android) {
        last_onload = window.onload;
        window.onload = function() {
            if (typeof last_onload == "function") last_onload();
            $('<iframe src="http://preload.' + game + '.xd.com/preload" width=0 height=0 style="display: none"></iframe>').appendTo('body');
        }
    }
})(jQuery);

(function($) {
    $(document).ready(function() {
        /*
         * 鼠标悬停计时
         *
         * 调用方法$(el).hoverHolding(func, time, unit);
         * 调用方法$(el).hoverLeaving(func, time, unit);
         * @param function func required 悬停时间超过time后触发
         * @param int      time required 定时的时长
         * @param int      unit optional 毫秒的倍数，定时的时长，默认1000倍 == 秒
         *
         */
        var timer;
        $.fn.clearHoverTimer = function() {
            window.clearInterval(timer);
        }
        $.fn.hoverHolding = function(func, time, unit) {
            unit = typeof unit == 'undefined' ? 1000 : unit;
            if (typeof func == 'undefined') return;
            if (typeof time == 'undefined') return;
            var counter = 0;
            var ele = this;
            ele.func = func;

            $(this).mouseover(function() {
                window.clearInterval(timer);
                timer = window.setInterval(function() {
                    counter++;
                    if (counter >= time) {
                        window.clearInterval(timer);
                        ele.func();
                    }
                },
                unit);
            });
            $(this).mouseout(function() {
                counter = 0;
                window.clearInterval(timer);
            });
        }
        $.fn.hoverLeaving = function(func, time, unit) {
            unit = (typeof unit == 'undefined') ? 1000 : unit;
            if (typeof func == 'undefined') return;
            if (typeof time == 'undefined') return;
            var counter = 0;
            var ele = this;
            ele.func = func;

            $(this).mouseover(function() {
                counter = 0;
                window.clearInterval(timer);
            });
            $(this).mouseout(function() {
                window.clearInterval(timer);
                timer = window.setInterval(function() {
                    counter++;
                    if (counter >= time) {
                        window.clearInterval(timer);
                        ele.func();
                    }
                },
                unit);
            });
        }

        $('.switcher_container .switcher').live('click',
        function() {
            if ($(this).hasClass('chosen')) {
                return;
            } else {
                var guideContent = $('.switch_content .item');
                var index = $(this).index('.switcher');
                $(this).addClass('chosen').siblings('.chosen').removeClass('chosen');
                $(guideContent[index]).addClass('chosen').siblings('.chosen').removeClass('chosen');
            }
        })

        $('.usercontroller .usernameWrapper').live('click',
        function() {
            $(this).clearHoverTimer();
            $(this).toggleClass('active');
            $(this).siblings('ul.list').toggle();
        });

        $('form').has('a[onclick*="submit()"]').keydown(function(event) {
            if (event.which == 13) {
                return $(this).submit();
            }
        });

        $('.usercontroller .list a').live('click',
        function() {
            $('.usercontroller .usernameWrapper').toggleClass('active');
            $('.usercontroller .list').toggle();
        });

        $('.usercontroller .list').hoverLeaving(function() {
            $(this).siblings('.usernameWrapper').toggleClass('active');
            $(this).toggle();
        },
        3, 100);

        if ($('.passwordStrangth').length > 0) {
            setTimeout(function() {
                //准备页面元素
                var width = parseInt($('.passwordStrangth').width()) - 30 + parseInt($('.passwordStrangth').css('padding-right'));
                $('.passwordStrangth').css({
                    'padding-right': '30px',
                    'width': width + 'px'
                });
                $('.passwordStrangth').parent().css('position', 'relative');
                $('.passwordStrangth').parent().append($('<div class="password_strangth_level clearfix">').append('<span></span><span></span><span></span><span></span>'));
                var password_strangth_level = $('.password_strangth_level');
                var background_color = password_strangth_level.find('span:eq(0)').css('color');
                if (!background_color) {
                    background_color = '#dadada';
                }
                if ($('.passwordStrangth').attr('data-pwleft')) {
                    password_strangth_level.css('left', $('.passwordStrangth').attr('data-pwleft'));
                }
                // the end 
                $('.passwordStrangth').keyup(function() {
                    var password = $(this).val();
                    password_strangth_level.find('span').css('background-color', background_color);
                    var checked = xd.checkPassword(password);

                    if (checked.valid != true) {
                        $('#password_info').removeClass('infoOk').addClass('infoError').html(checked.msg);
                        return false;
                    }
                    $('#password_info').removeClass('infoError').addClass('infoOk').html(checked.msg);

                    switch (xd.check_password_strongness(password)) {
                    case 1:
                        //weak
                        password_strangth_level.find('span:eq(0)').css('background-color', '#ed1c24');
                        break;
                    case 4:
                        //low
                        password_strangth_level.find('span:lt(2)').css('background-color', '#ff6600');
                        break;
                    case 2:
                        //normal
                        password_strangth_level.find('span:lt(3)').css('background-color', '#ff6600');
                        break;
                    case 3:
                        //high
                        password_strangth_level.find('span').css('background-color', '#549019');
                        break;
                    }
                });
            },
            0);
        }

        if ($('.progress_bar').length > 0) {
            function removeProgressLink(the) {
                var a = $(the).find('a');
                if (!a.attr('href') && !a.attr('class')) return;
                var href = a.attr('href');
                var cls = a.attr('class');
                a.removeAttr('href');
                a.attr('data-href', href);
                a.attr('data-cls', cls);
                a.attr('class', 'unable');
            }
            function addProgressLink(the) {
                var a = $(the).find('a');
                if (!a.attr('data-href') && !a.attr('data-cls')) return;
                var href = a.attr('data-href');
                var cls = a.attr('data-cls');
                a.attr('href', href);
                a.attr('class', cls);
            }

            $('.progress_bar').each(function() {
                var active = $(this).find('.active');
                if (active.next() && active.next().not('.after_active')) {
                    active.next().addClass('after_active');
                }
                removeProgressLink(active);
                active.nextAll().each(function() {
                    removeProgressLink(this);
                });
            });
            $.fn.extend({
                xd_progress_set: function(i) {
                    if (!$(this).is('.progress_bar')) return;
                    if (!$(this).find(':eq(' + i + ')').length) return;

                    $(this).find('.active, .after_active').removeClass('active after_active');
                    $(this).find('li:eq(' + i + ')').addClass('active');
                    $(this).find('li:eq(' + (i + 1) + ')').addClass('after_active');

                    $(this).find('li:gt(' + (i - 1) + ')').each(function() {
                        removeProgressLink(this);
                    });
                    $(this).find('li:lt(' + (i) + ')').each(function() {
                        addProgressLink(this);
                    });
                },
                xd_progress_next: function() {
                    var i = $(this).find('.active').index();
                    $(this).xd_progress_set(i + 1);
                },
                xd_progress_prev: function() {
                    var i = $(this).find('.active').index();
                    $(this).xd_progress_set(i - 1);
                }
            });
        }
        if (! ('placeholder' in document.createElement('input'))) {
            var inputs = $('input[placeholder],textarea[placeholder]');
            function set_placeholder(ele) {
                if (ele.attr('rel_placeholder')) {
                    $('#placeholder_' + ele.attr('rel_placeholder')).show().val(ele.attr('placeholder'));
                } else {
                    ele.parent().css('position', 'relative');
                    $("<div>", {
                        id: 'placeholder_' + set_placeholder.index
                    }).css({
                        position: 'absolute',
                        width: ele.css('width') + 'px',
                        height: ele.css('height') + 'px',
                        top: parseInt(ele.parent().css('padding-top')) + parseInt(ele.css('border-top-width') == 'auto' ? 0 : ele.css('border-top-width')) + parseInt(ele.css('margin-top') == 'auto' ? 0 : ele.css('margin-top')) + parseInt(ele.css('padding-top') == 'auto' ? 0 : ele.css('padding-top')) + parseInt(ele.css('top') == 'auto' ? 0 : ele.css('top')) + 'px',
                        left: parseInt(ele.parent().css('padding-left')) //ie6子元素绝对定位受父元素padding影响,当父元素hasLayout被激活时则不受影响,tbc
                        + parseInt(ele.css('border-left-width') == 'auto' ? 0 : ele.css('border-left-width')) + parseInt(ele.css('margin-left') == 'auto' ? 0 : ele.css('margin-left')) + parseInt(ele.css('padding-left') == 'auto' ? 0 : ele.css('padding-left')) + parseInt(ele.css('left') == 'auto' ? 0 : ele.css('left')) + 'px',
                        fontSize: ele.css('fontSize'),
                        color: ele.css('color'),
                        verticalAlign: 'middle',
                        lineHeight: ele.css('lineHeight')
                    }).focus(function() {
                        $(this).hide();
                        ele.focus();
                    }).appendTo(ele.parent()).text(ele.attr('placeholder')).addClass('placeholder');
                    ele.attr('rel_placeholder', set_placeholder.index).focus(function() {
                        $('#placeholder_' + $(this).attr('rel_placeholder')).hide();
                    });
                    if ($.trim(ele.val()) != '') {
                        $('#placeholder_' + set_placeholder.index).hide();
                    }
                    set_placeholder.index++;
                }
            }

            set_placeholder.index = 1;

            inputs.each(function() {
                set_placeholder($(this));
            });
            inputs.live('blur',
            function() {
                if ($(this).val() == '' && !$(this).data('noMainjsPlaceholder')) {
                    set_placeholder($(this));
                }
            });

        }

        //全局focus会导致order页面选中“自定义”
        //$(':text:visible:eq(0)').focus();
    });
    (function() {
        var classes = 'fxb_white fxb_30_red fxb_bigger fxb_b_red';
        var removed = [];
        var loadding = '<img src="http://web.xdcdn.net/xd/imgs/v3/fxb_white_loading.gif"/>';
        var textHolder = '';
        $.fn.fxb_able = function() {
            if (this.is('.fxb_30_unable')) {
                this.addClass(removed.join(' '));
                this.removeClass('fxb_30_unable');
                this.find('span').text(textHolder);
            }
        }
        $.fn.fxb_unable = function() {
            removed = [];
            var the = this;
            the.css('width', the.width() + 'px');
            if (the.is('.flexible_x_button.fxb_30')) {
                $.each(classes.split(' '),
                function(i, v) {
                    if (v && the.is('.' + v)) {
                        the.removeClass(v);
                        removed.push(v);
                    }
                });
                this.addClass('fxb_30_unable');
                textHolder = this.find('span').text();
                if (!$.browser.msie || parseInt($.browser.version) >= 8) {
                    this.find('span').html(loadding);
                }
            }
        }
    })();

    $('.backToHome').click(function() {
        location = '/';
    });
})(jQuery);

//qq登录
$('#qq_log').click(function() {
    xd.qq_login();
    return false;
})
//verycd登录
$('#verycd_login').click(function() {
    xd.verycd_login();
    return false;
})
//登入后退出
$('.logout, #logout , #head_logout').click(function() {
    xd.logout(function() {
        window.location.reload();
    });
    return false;
});

function toEmail(email) {
    var s1 = email.split('@');
    var target = s1[1];
    var emails = {};
    emails['verycd.com'] = 'http://mail.google.com';
    emails['qq.com'] = 'http://mail.qq.com';
    emails['vip.qq.com'] = 'http://mail.qq.com';
    emails['foxmail.com'] = 'http://mail.qq.com';
    emails['163.com'] = 'http://mail.163.com';
    emails['126.com'] = 'http://www.126.com';
    emails['gmail.com'] = 'http://mail.google.com';
    emails['yahoo.com.cn'] = 'http://mail.cn.yahoo.com/';
    emails['yahoo.cn'] = 'http://mail.cn.yahoo.com/';
    emails['hotmail.com'] = 'http://www.hotmail.com';
    emails['LIVE.COM'] = 'http://www.hotmail.com';
    emails['LIVE.CN'] = 'http://www.hotmail.com';
    emails['sina.com'] = 'http://mail.sina.com.cn/';
    emails['vip.sina.com'] = 'http://mail.sina.com.cn/';
    emails['139.com'] = 'http://mail.10086.cn/';
    emails['tom.com'] = 'http://mail.tom.com/';
    emails['21cn.com'] = 'http://mail.21cn.com/';
    emails['sogou.com'] = 'http://mail.sogou.com/';
    emails['189.com'] = 'http://www.189.cn/webmail/';
    emails['yeah.net'] = 'http://www.yeah.net/';
    emails['sohu.com'] = 'http://mail.sohu.com/';
    emails['eyou.com'] = 'http://www.eyou.com';

    return emails[target];
}
$('.qq_wpa, .qq_kefu, .qq_talk').live('click',
function() {
    window.open('http://crm2.qq.com/page/portalpage/wpa.php?uin=800030880&pt=%E5%BF%83%E5%8A%A8%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D&f=1&ty=1&ap=&as=&aty=0&a=&dm=xd.com&sv=4&ref=' + encodeURIComponent(document.location), '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    return false;
});

$('.kefu-qq-link').live('click',
function() {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=800030880&site=qq&menu=yes', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    return false;
});

function ajax_login_form(callback) {
    $.fancybox({
        href: '/users/ajax_login',
        modal: true,
        padding: 0,
        onComplete: function() {
            $('#ajaxLoginForm').click(function() {});
        }
    });
}

function popup_error(msg) {
    popup_message(msg, '错误');
}
function popup_success(msg) {
    popup_message(msg, '成功');
}

function popup_message(msg, title, controller_html) {
    title = title || '错误';
    setTimeout(function() {
        $.fancybox({
            content: '<div class="widget widgetPopup">' + '<div class="header clearfix">' + '<div class="title">' + title + '</div>' + '<div class="addition"><a href="#!" class="close">关闭</a></div>' + '</div>' + '<div class="body noticeBody">' + '<h1 style="margin:15px;font-size: 14px;font-weight:normal">' + msg + '</h1>' + (controller_html ? '<div class="div" style="margin-left:15px">' + controller_html + '</div>': '') + '</div>' + '</div>',
            modal: true,
            padding: 0
        })
    },
    0);
}

var loggingTimeout = false;
function topnav_success_logged_in(user) {
    if (user && user.id > 0) {
        $('.no_login').hide();
        $('.logging').hide();
        $('#topnav .yes_login').show().find('.usernameWrapper').text(user.username);
    } else {
        if ($('.logging:visible:not(.doing_login)').length > 0) {
            $('.no_login').show();
            $('.logging').hide();
        }
        if (typeof loggingTimeout != 'undefined' && loggingTimeout !== false) {
            clearTimeout(loggingTimeout);
            loggingTimeout = false;
        }
    }
}
function topnav_user_check(user) {
    topnav_success_logged_in(user);
}
$(function() {
    loggingTimeout = setTimeout(function() {
        if ($('.logging:visible:not(.doing_login)').length > 0) {
            $('.no_login').show();
            $('.logging').hide();
            loggingTimeout = false;
        }
    },
    3000);
    var href = window.location.href;
    var topnav_login = document.getElementById('topnav_login');
    var topnav_register = document.getElementById('topnav_register');
    topnav_login.href = topnav_login.href.replace('mark_continue', href);
    topnav_register.href = topnav_register.href.replace('mark_continue', href);
    var s_text = '敬请期待';

    xd.getServers('sxd',
    function(data) {
        add_server_to_element('topnav_sxd_server', 'sxd', data)
    });
    xd.getServers('sssg',
    function(data) {
        add_server_to_element('topnav_sssg_server', 'sssg', data)
    });
    xd.getServers('tdyx',
    function(data) {
        add_server_to_element('topnav_tdyx_server', 'tdyx', data)
    });
    xd.getServers('ktpd',
    function(data) {
        add_server_to_element('topnav_ktpd_server', 'ktpd', data['now'])
    },
    true);
    xd.getServers('js',
    function(data) {
        add_server_to_element('topnav_js_server', 'js', data)
    });

    var game_list = document.getElementById('top_nav_game_list_container');
    document.getElementById('top_nav_game_link').parentElement.onmouseover = function() {
        if (game_list.className.length > 0) {
            game_list.className += ' ';
        }
        game_list.className += 'active';
    }
    document.getElementById('top_nav_game_link').parentElement.onmouseout = function() {
        game_list.className = game_list.className.replace(/ ?active/, '');
    }

    function add_server_to_element(id, game, data) {
        var server = null;
        var url = null;
        for (var s in data) {
            server = s;
        }
        if (server !== null) {
            url = xd.getPlayUrl(game, server);
            if (game == 'sssg') {
                url += '&client=web';
            }
            document.getElementById(id).innerHTML = "<a class='primaryColor' href='" + url + "' target='_blank'>" + data[server] + " >></a>";
        } else {
            document.getElementById(id).innerText = s_text;
        }
    }

    var topnav_lis = document.getElementById('top_nav_game_list').getElementsByTagName('li');
    for (var i = 0; i < topnav_lis.length; i++) {
        topnav_lis[i].onmouseover = function() {
            if (this.className.length > 0) {
                this.className += ' ';
            }
            this.className += 'hover';
        }
        topnav_lis[i].onmouseout = function() {
            this.className = this.className.replace(/ ?hover/, '');
        }
    }

    if (typeof window.logout !== "function") {
        window.logout = function() {
            xd.logout();
            $('.no_login').show();
            $('.yes_login').hide();
            $('.logging').hide();
        }
    }
});
(function() {
    var block_init = null,
    changing = true;
    if ($('div#calendar').length) {
        var calendarItem = $('div#calendar'),
        monthItem = calendarItem.find('div#year_month'),
        dateItem = calendarItem.find('ul.content'),
        activityItem = $('#activity').find('ul.activity');
        var fillClass = "fill",
        todayClass = "today",
        specialClass = "special",
        chosenClass = "chosen",
        attentionType = 1,
        attentionClass = "attention",
        warningType = 2,
        warningClass = "warning";
        var dateTemplateItem = dateItem.find('li:first-child').clone(),
        activityTemplateItme = $('<li class="clearfix"><a target="_blank" class="text"></a><span class="textCenter period"></span></li>');
        var inityear = year = monthItem.data('year'),
        initmonth = month = monthItem.data('month'),
        initday = new Date().getDate(),
        week = monthItem.data('week'),
        current_days = monthItem.data('days'),
        previous_days = 0,
        next_days = 0,
        lock = false;
        var special_activity = activity_calendar_special_activity || {},
        daily_activity = activity_calendar_daily_activity || {},
        week_activity = {
            1 : [],
            2 : [],
            3 : [],
            4 : [],
            5 : [],
            6 : [],
            7 : []
        };
        var overlapHeight = dateItem.find('li:eq(0)').outerHeight(),
        dateItemHeight = Math.ceil((current_days + week % 7) / 7) * overlapHeight,
        animate_time = 300; //日历与活动切换时的动画时间
        var maxTs = Date.parse(((initmonth + 1) % 12 + 1) + '/1/' + (initmonth == 11 ? (inityear + 1) : inityear)); //以当前月为参照，第二个月及之后的活动不显示
        dateTemplateItem.removeClass().find('span').text('');
        previous_days = (new Date(Date.parse(month + '/1/' + year) - 1)).getDate();
        next_days = (new Date(Date.parse(((month + 1) % 12 + 1) + '/1/' + (month == 11 ? (year + 1) : year)) - 1)).getDate();

        function parse_to_timestamp(y, m, d, h, min, s) { //返回指定日期的时间戳
            h = h || 0;
            min = min || 0;
            s = s || 0;
            // return new Date(y, m, d, h, min, s).getTime();
            return Date.parse(m + '/' + d + '/' + y + ' ' + h + ':' + min + ':' + s);
        }

        function set_date(isNext) { //设置日历
            var time;
            if (isNext) {
                month = month % 12 + 1;
                year = month === 1 ? year + 1 : year;
                time = new Date(Date.parse(month + '/1/' + year));
                previous_days = current_days;
                current_days = next_days;
                next_days = (new Date(Date.parse(((month + 1) % 12 + 1) + '/1/' + (month == 11 ? (year + 1) : year)) - 1)).getDate();
            } else {
                time = new Date(Date.parse(month + '/1/' + year) - 1);
                month = time.getMonth() + 1;
                year = time.getFullYear();
                next_days = current_days;
                current_days = time.getDate();
                time = new Date(Date.parse(month + '/1/' + year));
                previous_days = (new Date(Date.parse(month + '/1/' + year) - 1)).getDate();
            }
            week = time.getDay() || 7;
        }

        function switch_month(isNext, chosen_day) { //切换日历
            var isNext = isNext || false,
            chosen_day = chosen_day || 1;
            set_date(isNext);
            var start = 0 - (week % 7),
            line_num = Math.ceil((current_days + week % 7) / 7),
            sum = line_num * 7 + start,
            w = 6;
            monthItem.data({
                'month': month,
                'year': year,
                'days': current_days
            }).find('.year').text(year).end().find('.month').text(zeroing(month));
            dateItemHeight = dateItem.height();
            var curr = dateItem.clone(),
            pItem = dateItem.parent(),
            chosen_item = null;
            var isoverlap = isNext ? (start < 0 ? true: false) : (sum > current_days ? true: false); //是否有重叠
            var currHeight = line_num * overlapHeight,
            top_rel = ((isNext ? dateItemHeight: currHeight) - overlapHeight * isoverlap) * (isNext ? 1 : -1);
            curr.empty().css('top', top_rel);
            dateItem.find('.' + chosenClass).removeClass(chosenClass);
            //生成所切月份日历
            for (var i = start; i < sum;) {
                i++;
                var tmp = dateTemplateItem.clone();
                w = w % 7 + 1;
                tmp.data('week', w)
                if (i < 1) { //last month
                    tmp.addClass(fillClass).find('span').text(i + previous_days);
                } else if (i <= current_days) { //current month
                    tmp.find('span').text(zeroing(i));
                    var key = year + '-' + zeroing(month) + '-' + zeroing(i);
                    if (month == initmonth && year == inityear && initday == i) {
                        tmp.addClass(todayClass);
                    }
                    if (i == chosen_day) {
                        chosen_item = tmp;
                    }
                } else { //next month
                    tmp.addClass(fillClass).find('span').text('0' + (i - current_days));
                }
                curr.append(tmp).css('opacity', 0);
            }

            if (isNext) {
                dateItem.after(curr);
            } else {
                dateItem.before(curr);
            }
            chosen_item.addClass(chosenClass);
            set_activity(year, month, chosen_item.data('week'), chosen_item.text());
            pItem.animate({
                height: currHeight
            },
            animate_time);
            dateItem.animate({
                top: -1 * top_rel
            },
            animate_time);
            curr.animate({
                top: 0,
                opacity: 1
            },
            animate_time,
            function() {
                dateItem.stop().remove();
                dateItem = curr;
                lock = false;
                if (maxTs > parse_to_timestamp(year, month, 1)) {
                    mask_special_activity();
                }
            })
        }

        function zeroing(n, limit) { //补前导零
            limit = limit || 10;
            n = parseInt(n, 10);
            return (n < limit) ? ('0' + n) : n;
        }

        function sort_activity(arr) { //活动按开始时间排序，若开始时间相同则先结束的活动排在前面
            if ($.isArray(arr) && arr.length > 1) {
                var len = arr.length,
                n = 0;
                for (var i = 0; i < len - 1; i++) {
                    n = i;
                    for (var t = i + 1; t < len; t++) {
                        if (arr[t]['startTimer'] < arr[n]['startTimer']) {
                            n = t;
                        } else if (arr[t]['startTimer'] == arr[n]['startTimer']) {
                            if (arr[t]['endTimer'] < arr[n]['endTimer']) {
                                n = t;
                            }
                        }
                    }
                    if (n != i) {
                        var tmp = arr[n];
                        arr[n] = arr[i];
                        arr[i] = tmp;
                    }
                }
            }
            return arr;
        }

        function mask_special_activity() { //标记当月特殊事件
            var sTs = parse_to_timestamp(year, month, 1);
            var eTs = parse_to_timestamp(year, month, current_days);
            for (var i in special_activity) {
                var tmp = special_activity[i];
                if (! (tmp.startDate > eTs || tmp.endDate < sTs)) {
                    var startTimer = tmp.startDate < sTs ? sTs: tmp.startDate,
                    endTimer = tmp.endDate > eTs ? eTs: tmp.endDate,
                    sDay = (startTimer - sTs) / 86400000,
                    durDay = (endTimer - startTimer) / 86400000;

                    $('.calendar').find('li:not(.fill)').each(function(index) {
                        if (index >= sDay && index <= (sDay + durDay) && !$(this).hasClass(specialClass)) {
                            $(this).addClass(specialClass);
                        }
                    })
                }
            }
        }

        function show_activity(arr) { //显示活动
            if (activityItem.length == 0) return false;
            activityItem.slideUp(animate_time,
            function() {
                $(this).empty();
                var ts = parse_to_timestamp(year, month, 1);
                if (arr.length == 0 || ts >= maxTs) {
                    var tmp = activityTemplateItme.clone();
                    tmp.empty().addClass('textCenter no_activity').text('今日暂无活动');
                    activityItem.append(tmp).slideDown(animate_time);
                    return false;
                }
                for (var i in arr) {
                    var tmp = activityTemplateItme.clone(),
                    d = 23 * 60 * 60 * 1000;
                    tmp.find('.text').text(arr[i]['description']).attr('title', arr[i]['description']);
                    if (typeof arr[i]['url'] != 'undefined' && $.trim(arr[i]['url']) != '') {
                        tmp.find('a').attr('href', arr[i]['url']).addClass('have-link');
                    } else {
                        tmp.find('a').attr('onclick', 'return false;');
                    }
                    if (arr[i]['endTimer'] - arr[i]['startTimer'] > d) {
                        tmp.find('.period').text('全天');
                    } else if (arr[i]['endTimer'] - arr[i]['startTimer'] <= 60000) {
                        tmp.find('.period').text(zeroing(arr[i]['startHour']) + ":" + zeroing(arr[i]['startMinute']));
                    } else {
                        var s = zeroing(arr[i]['startHour']) + ":" + zeroing(arr[i]['startMinute']) + "-" + zeroing(arr[i]['endHour']) + ":" + zeroing(arr[i]['endMinute']);
                        tmp.find('.period').text(s);
                    }
                    if (typeof arr[i]['type'] != 'undefined' && arr[i]['type'] > 0) {
                        if (arr[i]['type'] == attentionType) {
                            tmp.addClass(attentionClass);
                        } else if (arr[i]['type'] == warningType) {
                            tmp.addClass(warningClass);
                        }
                    }
                    activityItem.append(tmp).slideDown(animate_time,
                    function() {
                        if ($.isFunction(block_init)) {
                            changing = false;
                            block_init();
                        }
                    });
                }
            });
        }

        function set_activity(y, m, w, d) { //设置活动
            changing = true;
            if (!week_activity[w]) {
                return false;
            }
            var ts = parse_to_timestamp(y, m, d);
            m = zeroing(parseInt(m)),
            d = zeroing(parseInt(d, 10));
            var arr = [];
            var key = y + '-' + m + '-' + d;
            for (var i in special_activity) {
                if (special_activity[i].startDate <= ts && special_activity[i].endDate >= ts) {
                    var tmp = special_activity[i],
                    sH = tmp['startHour'],
                    sM = tmp['startMinute'],
                    eH = tmp['endHour'],
                    eM = tmp['endMinute'];
                    tmp.startTimer = parse_to_timestamp(y, m, d, sH, sM);
                    tmp.endTimer = parse_to_timestamp(y, m, d, eH, eM);
                    arr.push(tmp);
                }
            }
            for (var i in week_activity[w]) {
                var k = week_activity[w][i],
                tmp = daily_activity[k];
                var sH = tmp['startHour'],
                sM = tmp['startMinute'],
                eH = tmp['endHour'],
                eM = tmp['endMinute'];
                tmp.startTimer = parse_to_timestamp(y, m, d, sH, sM);
                tmp.endTimer = parse_to_timestamp(y, m, d, eH, eM);
                arr.push(tmp);
            }
            arr = sort_activity(arr);
            show_activity(arr);
        }

        function init_activity() { //初始化活动数组
            var arr = [];
            for (var i = 0; i < daily_activity.length; i++) {
                for (var t in daily_activity[i]['week']) {
                    var n = daily_activity[i]['week'][t];
                    week_activity[n].push(i);
                }
            }
            for (var i in special_activity) {
                var tmp = special_activity[i];
                if (tmp.startDate * 1000 < maxTs) {
                    tmp.startDate *= 1000;
                    tmp.endDate *= 1000;
                    arr.push(tmp);
                }
            }

            special_activity = arr;
            $('.calendar').find('.today').trigger('click');
        }

        $('div.controller').live('click',
        function() {
            if (lock) return false;
            lock = true;
            switch_month($(this).hasClass('next'));
            return false;
        })

        $('.calendar').find('li:not(.fill)').live('click',
        function() {
            if ($(this).hasClass(chosenClass)) return false;
            $('.calendar').find('.' + chosenClass).removeClass(chosenClass);
            $(this).addClass(chosenClass);
            set_activity(year, month, $(this).data('week'), $(this).text());
            return false;
        })

        $('.calendar').find('li.fill').live('click',
        function() {
            if ($(this).find('span').text() > 7) {
                switch_month(false, $(this).find('span').text());
            } else {
                switch_month(true, $(this).find('span').text());
            }
        })

        $(window).load(function() {
            dateItem.parent().animate({
                height: dateItemHeight
            },
            animate_time);
            init_activity();
            mask_special_activity();
        });
    }

    if ($('.activity').length) {
        var cbody = $('#activity .body');
        var cbody_height = cbody.height();
        var offset, el, el_h, margin_top, length, ratio, moving, y, revert, vector, expand_area = 60,
        leaving;
        $.extend($.easing, {
            eric: function(a, b, e, c, d) {
                return - c / 2 * (Math.cos(Math.PI * b / d) - 1) + e
            }
        });

        function stop_check() {
            el.stop();
            clearInterval(moving);
            moving = true;
        }

        function calendar_leave() {
            if (leaving !== true) {
                if (moving) {
                    stop_check();
                    moving = null;
                }
                if (y < 0 || cbody_height - el_h - margin_top + 10 > 0) {
                    el.animate({
                        top: 0
                    },
                    300, 'eric');
                } else if (y > cbody_height) {
                    el.animate({
                        top: length
                    },
                    300, 'eric');
                }
                leaving = true;
            }
        }

        block_init = function() {
            offset = cbody.offset();
            el = cbody.find('ul.activity');
            el_h = el.height();
            margin_top = parseInt(el.css('margin-top'), 10);
            length = cbody_height - el_h - margin_top - 5;
            if (length > -30) ratio = length = -30;
            ratio = length / cbody_height;

            //鼠标事件
            if (!$('html.touchScreen').length) {
                $('#sidebar').live('mouseleave',
                function(e) {
                    y = e.pageY - offset.top;
                    calendar_leave();
                });
                $('#sidebar').live('mousemove',
                function(e) {
                    if (changing) return;
                    y = e.pageY - offset.top;
                    if (y < -expand_area || y > cbody_height + expand_area) {
                        calendar_leave();
                        return;
                    }
                    if (!moving) {
                        if (y <= 0 || y >= cbody_height || el_h < cbody_height + margin_top - 5) {
                            return;
                        }
                        leaving = false;
                        moving = true;
                        //移动到极点
                        var diff = (parseInt(el.css('top')) - ratio * y, 10) / length;
                        if (diff < 0) {
                            vector = 'down';
                            el.stop().animate({
                                top: length + ratio * expand_area
                            },
                            300, 'linear');
                        } else {
                            vector = 'up';
                            el.stop().animate({
                                top: -expand_area * ratio
                            },
                            300, 'linear');
                        }
                        //检查是否转移控制权给鼠标
                        moving = setInterval(function() {
                            if (vector == 'down' && parseInt(el.css('top'), 10) < ratio * y) {
                                stop_check();
                            } else if (vector == 'up' && parseInt(el.css('top'), 10) > ratio * y) {
                                stop_check();
                            }
                        },
                        10);
                    } else if (moving === true) {
                        if (y < 0 && y > cbody_height) {
                            el.css({
                                top: y * ratio
                            });
                        } else if (y < 0) {
                            el.css({
                                top: y * ratio
                            });
                        } else {
                            el.css({
                                top: y * ratio
                            });
                        }
                    }
                });
            }
        }
        $(window).load(function() {
            block_init();
            changing = false;
        }).resize(block_init);
    }
})();
function showWarning() {
    $.fancybox({
        href: '#popup_warning',
        modal: true,
        padding: 0
    });
}
function showDangerCity(city) {
    $.fancybox({
        href: '#popup_danger_city',
        modal: true,
        padding: 0
    });
    $('#danger_city').html(city);
}

function showCsdnUser(username) {
    $.fancybox({
        href: '#popup_csdn_user',
        modal: true,
        padding: 0
    });
    $('#csdn_user').html(username);

}

function showTwoauthRemind(user) {
    $.fancybox({
        href: '#twoauth_dialog_box',
        modal: true,
        padding: 0
    });
    $('#twoauth_user').html(user.username);
    var urldomain = xd.getdomain();
    $('#noOpenTwoauth').click(function() {
        $.ajax({
            url: urldomain + '/twoauth/closeRemind',
            dataType: 'jsonp',
            success: function(data) {},
            data: {
                format: 'jsonp'
            }
        });
        xd.setCookie('Ah', '0', false);
    });
}

$(document).ready(function() {
    $('#popup_danger_city .close').live('click',
    function() {
        xd.setCookie('Ai', '1', 30, '/', '.xd.com');
        $.fancybox.close();
        return false;
    });

    $('.popup .close').live('click', $.fancybox.close);
})
var prevent_clear = false,
handle_clear = null,
timer_clear = 5000;
function showLogin() {
    if (handle_clear !== null) {
        clearTimeout(handle_clear);
        handle_clear = null;
        prevent_clear = false;
    }
    $.fancybox({
        href: '#popup_login_window',
        modal: true,
        padding: 0,
        onComplete: function() {
            $('#popup_login_window input').eq(0).focus();
        }
    });
    return false;
}

function showRegister() {
    $.fancybox({
        href: '#popup_register_window',
        modal: true,
        padding: 0,
        onComplete: function() {
            $('#popup_register_window input').eq(0).focus();
        }
    });
    return false;
}

function commonLogin() {
    prevent_clear = true;
    $('.popup_window .close').trigger('click');
    return false;
}

function commonLogout() {
    handle_clear = setTimeout(function() {
        $('.popup_window').find('input.input').val('');
        prevent_clear = false;
    },
    timer_clear);
}

$(document).ready(function() {
    var handle_loading = null,
    timer_loading = 500;
    $('.popup_window .close').live('click',
    function() {
        $.fancybox.close();
        $('.submitInput:visible').trigger('stopLoading');
        var pItem = $(this).parents('.popup_window');
        if (!prevent_clear) {
            pItem.find('input.input').val('');
        }
        pItem.find('.captchaField').hide();
        pItem.find('.error').empty();
        return false;
    });
    //qq登录
    $('.qqField').live('click',
    function() {
        $('.submitInput:visible').trigger('stopLoading');
        xd.qq_login();
        return false;
    })
    //verycd登录
    $('.verycdField').live('click',
    function() {
        $('.submitInput:visible').trigger('stopLoading');
        xd.verycd_login();
        return false;
    })
    //注册登录切换
    $('.switch').live('click',
    function() {
        $('.submitInput:visible').trigger('stopLoading');
        $.fancybox.close;
        $(this).parents('.popup_window').find('.error').empty();
        if ($(this).data('switch') == 'login') showLogin();
        if ($(this).data('switch') == 'signup') showRegister();
        return false;
    })

    $('.submitInput').live('click',
    function() {
        if (handle_loading !== null) return false;
        $(this).trigger('startLoading').siblings('input[type=submit]').click();
        return false;
    }).live('stopLoading',
    function() {
        clearTimeout(handle_loading);
        handle_loading = null;
        $(this).removeClass('fxb_unable');
        return false;
    }).live('startLoading',
    function() {
        handle_loading = setTimeout(function() {
            $('.submitInput:visible').addClass('fxb_unable');
        },
        timer_loading);
    })

    $('.submitInfo').live('isInfoError',
    function() {
        $('.submitInput:visible').trigger('stopLoading');
        return false;
    });

    $('#registerForm').submit(function() {
        var tmp, register_error_div = $('#register_error_div');
        register_error_div.empty();
        if ($('.usernameInfo').text() != '用户名可用') {
            tmp = $('.usernameInfo').text();
        } else if ($.inArray($('.passwordInfo').text(), ['强度弱', '强度低', '强度中', '强度高', '密码可用']) == -1) {
            tmp = $('.passwordInfo').text();
        } else if ($('.confirmInfo').text() != '密码一致') {
            tmp = $('.confirmInfo').text();
        } else if ($('.realnameInfo').text() != '真实姓名') {
            tmp = $('.realnameInfo').text();
        } else if ($('.realidInfo').text() != '有效身份证') {
            tmp = $('.realidInfo').text();
        } else if ($('.emailInfo').text() != '邮箱可用') {
            tmp = $('.emailInfo').text();
        } else if (!$('#agreement').prop('checked')) {
            tmp = '请同意用户协议';
        }
        if ( !! tmp) {
            $('.submitInput:visible').trigger('stopLoading');
            setTimeout(function() {
                register_error_div.show().text(tmp)
            },
            100);
            return false;
        }
    })

    $('.popup_window input').keydown(function(event) {
        var $that = $(this);
        if (event.keyCode == 13) {
            $('input').trigger('blur');
            setTimeout(function() {
                $that.parents('.popup_window').find('.submit_button').trigger('click');
            },
            100);
        };
    })
    $('body').keydown(function(e) {
        if (e.keyCode == 27) {
            $('#popup_login_window .close, #popup_register_window .close, #popup_close').trigger('click');
        };
    })
})
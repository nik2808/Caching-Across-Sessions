!(function () {
  var e = {
      51: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            s = "function" === typeof Symbol ? Symbol : {},
            a = s.iterator || "@@iterator",
            i = s.asyncIterator || "@@asyncIterator",
            o = s.toStringTag || "@@toStringTag";
          function c(e, t, n, r) {
            var s = t && t.prototype instanceof g ? t : g,
              a = Object.create(s.prototype),
              i = new C(r || []);
            return (
              (a._invoke = (function (e, t, n) {
                var r = h;
                return function (s, a) {
                  if (r === f) throw new Error("Generator is already running");
                  if (r === d) {
                    if ("throw" === s) throw a;
                    return q();
                  }
                  for (n.method = s, n.arg = a; ; ) {
                    var i = n.delegate;
                    if (i) {
                      var o = R(i, n);
                      if (o) {
                        if (o === p) continue;
                        return o;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === h) throw ((r = d), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = f;
                    var c = u(e, t, n);
                    if ("normal" === c.type) {
                      if (((r = n.done ? d : l), c.arg === p)) continue;
                      return { value: c.arg, done: n.done };
                    }
                    "throw" === c.type &&
                      ((r = d), (n.method = "throw"), (n.arg = c.arg));
                  }
                };
              })(e, n, i)),
              a
            );
          }
          function u(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (r) {
              return { type: "throw", arg: r };
            }
          }
          e.wrap = c;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            d = "completed",
            p = {};
          function g() {}
          function m() {}
          function y() {}
          var w = {};
          w[a] = function () {
            return this;
          };
          var v = Object.getPrototypeOf,
            _ = v && v(v(T([])));
          _ && _ !== n && r.call(_, a) && (w = _);
          var b = (y.prototype = g.prototype = Object.create(w));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function E(e, t) {
            function n(s, a, i, o) {
              var c = u(e[s], e, a);
              if ("throw" !== c.type) {
                var h = c.arg,
                  l = h.value;
                return l && "object" === typeof l && r.call(l, "__await")
                  ? t.resolve(l.__await).then(
                      function (e) {
                        n("next", e, i, o);
                      },
                      function (e) {
                        n("throw", e, i, o);
                      }
                    )
                  : t.resolve(l).then(
                      function (e) {
                        (h.value = e), i(h);
                      },
                      function (e) {
                        return n("throw", e, i, o);
                      }
                    );
              }
              o(c.arg);
            }
            var s;
            this._invoke = function (e, r) {
              function a() {
                return new t(function (t, s) {
                  n(e, r, t, s);
                });
              }
              return (s = s ? s.then(a, a) : a());
            };
          }
          function R(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  R(e, n),
                  "throw" === n.method)
                )
                  return p;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var s = u(r, e.iterator, n.arg);
            if ("throw" === s.type)
              return (
                (n.method = "throw"), (n.arg = s.arg), (n.delegate = null), p
              );
            var a = s.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  p)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                p);
          }
          function L(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function k(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function C(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(L, this),
              this.reset(!0);
          }
          function T(e) {
            if (e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var s = -1,
                  i = function n() {
                    for (; ++s < e.length; )
                      if (r.call(e, s))
                        return (n.value = e[s]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: q };
          }
          function q() {
            return { value: t, done: !0 };
          }
          return (
            (m.prototype = b.constructor = y),
            (y.constructor = m),
            (y[o] = m.displayName = "GeneratorFunction"),
            (e.isGeneratorFunction = function (e) {
              var t = "function" === typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), o in e || (e[o] = "GeneratorFunction")),
                (e.prototype = Object.create(b)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(E.prototype),
            (E.prototype[i] = function () {
              return this;
            }),
            (e.AsyncIterator = E),
            (e.async = function (t, n, r, s, a) {
              void 0 === a && (a = Promise);
              var i = new E(c(t, n, r, s), a);
              return e.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            x(b),
            (b[o] = "Generator"),
            (b[a] = function () {
              return this;
            }),
            (b.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = T),
            (C.prototype = {
              constructor: C,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function s(r, s) {
                  return (
                    (o.type = "throw"),
                    (o.arg = e),
                    (n.next = r),
                    s && ((n.method = "next"), (n.arg = t)),
                    !!s
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    o = i.completion;
                  if ("root" === i.tryLoc) return s("end");
                  if (i.tryLoc <= this.prev) {
                    var c = r.call(i, "catchLoc"),
                      u = r.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return s(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return s(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return s(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return s(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var s = this.tryEntries[n];
                  if (
                    s.tryLoc <= this.prev &&
                    r.call(s, "finallyLoc") &&
                    this.prev < s.finallyLoc
                  ) {
                    var a = s;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  p
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), k(n), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var s = r.arg;
                      k(n);
                    }
                    return s;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: T(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  p
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          Function("r", "regeneratorRuntime = r")(t);
        }
      },
      913: function () {
        "use strict";
        try {
          self["workbox:core:6.5.2"] && _();
        } catch (e) {}
      },
      550: function () {
        "use strict";
        try {
          self["workbox:expiration:6.5.2"] && _();
        } catch (e) {}
      },
      977: function () {
        "use strict";
        try {
          self["workbox:precaching:6.5.2"] && _();
        } catch (e) {}
      },
      80: function () {
        "use strict";
        try {
          self["workbox:routing:6.5.2"] && _();
        } catch (e) {}
      },
      873: function () {
        "use strict";
        try {
          self["workbox:strategies:6.5.2"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var a = (t[r] = { exports: {} }),
      i = !0;
    try {
      e[r](a, a.exports, n), (i = !1);
    } finally {
      i && delete t[r];
    }
    return a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var e = n(51),
        t = n.n(e);
      n(913);
      const r = (e, ...t) => {
        let n = e;
        return t.length > 0 && (n += ` :: ${JSON.stringify(t)}`), n;
      };
      class s extends Error {
        constructor(e, t) {
          super(r(e, t)), (this.name = e), (this.details = t);
        }
      }
      const a = new Set();
      const i = {
          googleAnalytics: "googleAnalytics",
          precache: "precache-v2",
          prefix: "workbox",
          runtime: "runtime",
          suffix: "undefined" !== typeof registration ? registration.scope : "",
        },
        o = (e) =>
          [i.prefix, e, i.suffix].filter((e) => e && e.length > 0).join("-"),
        c = (e) => e || o(i.precache),
        u = (e) => e || o(i.runtime);
      function h(e, t) {
        const n = new URL(e);
        for (const r of t) n.searchParams.delete(r);
        return n.href;
      }
      let l;
      function f(e) {
        e.then(() => {});
      }
      class d {
        constructor() {
          this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      const p = (e) =>
        new URL(String(e), location.href).href.replace(
          new RegExp(`^${location.origin}`),
          ""
        );
      function g(e, t) {
        const n = t();
        return e.waitUntil(n), n;
      }
      async function m(e, t) {
        let n = null;
        if (e.url) {
          n = new URL(e.url).origin;
        }
        if (n !== self.location.origin)
          throw new s("cross-origin-copy-response", { origin: n });
        const r = e.clone(),
          a = {
            headers: new Headers(r.headers),
            status: r.status,
            statusText: r.statusText,
          },
          i = t ? t(a) : a,
          o = (function () {
            if (void 0 === l) {
              const t = new Response("");
              if ("body" in t)
                try {
                  new Response(t.body), (l = !0);
                } catch (e) {
                  l = !1;
                }
              l = !1;
            }
            return l;
          })()
            ? r.body
            : await r.blob();
        return new Response(o, i);
      }
      let y, w;
      const v = new WeakMap(),
        _ = new WeakMap(),
        b = new WeakMap(),
        x = new WeakMap(),
        E = new WeakMap();
      let R = {
        get(e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return _.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || b.get(e);
            if ("store" === t)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return C(e[t]);
        },
        set: (e, t, n) => ((e[t] = n), !0),
        has: (e, t) =>
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e,
      };
      function L(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              w ||
              (w = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
            ? function (...t) {
                return e.apply(T(this), t), C(v.get(this));
              }
            : function (...t) {
                return C(e.apply(T(this), t));
              }
          : function (t, ...n) {
              const r = e.call(T(this), t, ...n);
              return b.set(r, t.sort ? t.sort() : [t]), C(r);
            };
      }
      function k(e) {
        return "function" === typeof e
          ? L(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (_.has(e)) return;
                const t = new Promise((t, n) => {
                  const r = () => {
                      e.removeEventListener("complete", s),
                        e.removeEventListener("error", a),
                        e.removeEventListener("abort", a);
                    },
                    s = () => {
                      t(), r();
                    },
                    a = () => {
                      n(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        r();
                    };
                  e.addEventListener("complete", s),
                    e.addEventListener("error", a),
                    e.addEventListener("abort", a);
                });
                _.set(e, t);
              })(e),
            (t = e),
            (
              y ||
              (y = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some((e) => t instanceof e)
              ? new Proxy(e, R)
              : e);
        var t;
      }
      function C(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, n) => {
              const r = () => {
                  e.removeEventListener("success", s),
                    e.removeEventListener("error", a);
                },
                s = () => {
                  t(C(e.result)), r();
                },
                a = () => {
                  n(e.error), r();
                };
              e.addEventListener("success", s), e.addEventListener("error", a);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && v.set(t, e);
                })
                .catch(() => {}),
              E.set(t, e),
              t
            );
          })(e);
        if (x.has(e)) return x.get(e);
        const t = k(e);
        return t !== e && (x.set(e, t), E.set(t, e)), t;
      }
      const T = (e) => E.get(e);
      const q = ["get", "getKey", "getAll", "getAllKeys", "count"],
        D = ["put", "add", "delete", "clear"],
        N = new Map();
      function S(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
          return;
        if (N.get(t)) return N.get(t);
        const n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          s = D.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          (!s && !q.includes(n))
        )
          return;
        const a = async function (e, ...t) {
          const a = this.transaction(e, s ? "readwrite" : "readonly");
          let i = a.store;
          return (
            r && (i = i.index(t.shift())),
            (await Promise.all([i[n](...t), s && a.done]))[0]
          );
        };
        return N.set(t, a), a;
      }
      R = ((e) => ({
        ...e,
        get: (t, n, r) => S(t, n) || e.get(t, n, r),
        has: (t, n) => !!S(t, n) || e.has(t, n),
      }))(R);
      n(550);
      const O = "cache-entries",
        U = (e) => {
          const t = new URL(e, location.href);
          return (t.hash = ""), t.href;
        };
      class j {
        constructor(e) {
          (this._db = null), (this._cacheName = e);
        }
        _upgradeDb(e) {
          const t = e.createObjectStore(O, { keyPath: "id" });
          t.createIndex("cacheName", "cacheName", { unique: !1 }),
            t.createIndex("timestamp", "timestamp", { unique: !1 });
        }
        _upgradeDbAndDeleteOldDbs(e) {
          this._upgradeDb(e),
            this._cacheName &&
              (function (e, { blocked: t } = {}) {
                const n = indexedDB.deleteDatabase(e);
                t && n.addEventListener("blocked", () => t()),
                  C(n).then(() => {});
              })(this._cacheName);
        }
        async setTimestamp(e, t) {
          const n = {
              url: (e = U(e)),
              timestamp: t,
              cacheName: this._cacheName,
              id: this._getId(e),
            },
            r = (await this.getDb()).transaction(O, "readwrite", {
              durability: "relaxed",
            });
          await r.store.put(n), await r.done;
        }
        async getTimestamp(e) {
          const t = await this.getDb(),
            n = await t.get(O, this._getId(e));
          return null === n || void 0 === n ? void 0 : n.timestamp;
        }
        async expireEntries(e, t) {
          const n = await this.getDb();
          let r = await n
            .transaction(O)
            .store.index("timestamp")
            .openCursor(null, "prev");
          const s = [];
          let a = 0;
          for (; r; ) {
            const n = r.value;
            n.cacheName === this._cacheName &&
              ((e && n.timestamp < e) || (t && a >= t) ? s.push(r.value) : a++),
              (r = await r.continue());
          }
          const i = [];
          for (const o of s) await n.delete(O, o.id), i.push(o.url);
          return i;
        }
        _getId(e) {
          return this._cacheName + "|" + U(e);
        }
        async getDb() {
          return (
            this._db ||
              (this._db = await (function (
                e,
                t,
                { blocked: n, upgrade: r, blocking: s, terminated: a } = {}
              ) {
                const i = indexedDB.open(e, t),
                  o = C(i);
                return (
                  r &&
                    i.addEventListener("upgradeneeded", (e) => {
                      r(
                        C(i.result),
                        e.oldVersion,
                        e.newVersion,
                        C(i.transaction)
                      );
                    }),
                  n && i.addEventListener("blocked", () => n()),
                  o
                    .then((e) => {
                      a && e.addEventListener("close", () => a()),
                        s && e.addEventListener("versionchange", () => s());
                    })
                    .catch(() => {}),
                  o
                );
              })("workbox-expiration", 1, {
                upgrade: this._upgradeDbAndDeleteOldDbs.bind(this),
              })),
            this._db
          );
        }
      }
      class P {
        constructor(e, t = {}) {
          (this._isRunning = !1),
            (this._rerunRequested = !1),
            (this._maxEntries = t.maxEntries),
            (this._maxAgeSeconds = t.maxAgeSeconds),
            (this._matchOptions = t.matchOptions),
            (this._cacheName = e),
            (this._timestampModel = new j(e));
        }
        async expireEntries() {
          if (this._isRunning) return void (this._rerunRequested = !0);
          this._isRunning = !0;
          const e = this._maxAgeSeconds
              ? Date.now() - 1e3 * this._maxAgeSeconds
              : 0,
            t = await this._timestampModel.expireEntries(e, this._maxEntries),
            n = await self.caches.open(this._cacheName);
          for (const r of t) await n.delete(r, this._matchOptions);
          (this._isRunning = !1),
            this._rerunRequested &&
              ((this._rerunRequested = !1), f(this.expireEntries()));
        }
        async updateTimestamp(e) {
          await this._timestampModel.setTimestamp(e, Date.now());
        }
        async isURLExpired(e) {
          if (this._maxAgeSeconds) {
            const t = await this._timestampModel.getTimestamp(e),
              n = Date.now() - 1e3 * this._maxAgeSeconds;
            return void 0 === t || t < n;
          }
          return !1;
        }
        async delete() {
          (this._rerunRequested = !1),
            await this._timestampModel.expireEntries(1 / 0);
        }
      }
      class I {
        constructor(e = {}) {
          (this.cachedResponseWillBeUsed = async ({
            event: e,
            request: t,
            cacheName: n,
            cachedResponse: r,
          }) => {
            if (!r) return null;
            const s = this._isResponseDateFresh(r),
              a = this._getCacheExpiration(n);
            f(a.expireEntries());
            const i = a.updateTimestamp(t.url);
            if (e)
              try {
                e.waitUntil(i);
              } catch (o) {
                0;
              }
            return s ? r : null;
          }),
            (this.cacheDidUpdate = async ({ cacheName: e, request: t }) => {
              const n = this._getCacheExpiration(e);
              await n.updateTimestamp(t.url), await n.expireEntries();
            }),
            (this._config = e),
            (this._maxAgeSeconds = e.maxAgeSeconds),
            (this._cacheExpirations = new Map()),
            e.purgeOnQuotaError &&
              (function (e) {
                a.add(e);
              })(() => this.deleteCacheAndMetadata());
        }
        _getCacheExpiration(e) {
          if (e === u()) throw new s("expire-custom-caches-only");
          let t = this._cacheExpirations.get(e);
          return (
            t ||
              ((t = new P(e, this._config)), this._cacheExpirations.set(e, t)),
            t
          );
        }
        _isResponseDateFresh(e) {
          if (!this._maxAgeSeconds) return !0;
          const t = this._getDateHeaderTimestamp(e);
          if (null === t) return !0;
          return t >= Date.now() - 1e3 * this._maxAgeSeconds;
        }
        _getDateHeaderTimestamp(e) {
          if (!e.headers.has("date")) return null;
          const t = e.headers.get("date"),
            n = new Date(t).getTime();
          return isNaN(n) ? null : n;
        }
        async deleteCacheAndMetadata() {
          for (const [e, t] of this._cacheExpirations)
            await self.caches.delete(e), await t.delete();
          this._cacheExpirations = new Map();
        }
      }
      n(873);
      function A(e) {
        return "string" === typeof e ? new Request(e) : e;
      }
      class K {
        constructor(e, t) {
          (this._cacheKeys = {}),
            Object.assign(this, t),
            (this.event = t.event),
            (this._strategy = e),
            (this._handlerDeferred = new d()),
            (this._extendLifetimePromises = []),
            (this._plugins = [...e.plugins]),
            (this._pluginStateMap = new Map());
          for (const n of this._plugins) this._pluginStateMap.set(n, {});
          this.event.waitUntil(this._handlerDeferred.promise);
        }
        async fetch(e) {
          const { event: t } = this;
          let n = A(e);
          if (
            "navigate" === n.mode &&
            t instanceof FetchEvent &&
            t.preloadResponse
          ) {
            const e = await t.preloadResponse;
            if (e) return e;
          }
          const r = this.hasCallback("fetchDidFail") ? n.clone() : null;
          try {
            for (const e of this.iterateCallbacks("requestWillFetch"))
              n = await e({ request: n.clone(), event: t });
          } catch (i) {
            if (i instanceof Error)
              throw new s("plugin-error-request-will-fetch", {
                thrownErrorMessage: i.message,
              });
          }
          const a = n.clone();
          try {
            let e;
            e = await fetch(
              n,
              "navigate" === n.mode ? void 0 : this._strategy.fetchOptions
            );
            for (const n of this.iterateCallbacks("fetchDidSucceed"))
              e = await n({ event: t, request: a, response: e });
            return e;
          } catch (o) {
            throw (
              (r &&
                (await this.runCallbacks("fetchDidFail", {
                  error: o,
                  event: t,
                  originalRequest: r.clone(),
                  request: a.clone(),
                })),
              o)
            );
          }
        }
        async fetchAndCachePut(e) {
          const t = await this.fetch(e),
            n = t.clone();
          return this.waitUntil(this.cachePut(e, n)), t;
        }
        async cacheMatch(e) {
          const t = A(e);
          let n;
          const { cacheName: r, matchOptions: s } = this._strategy,
            a = await this.getCacheKey(t, "read"),
            i = Object.assign(Object.assign({}, s), { cacheName: r });
          n = await caches.match(a, i);
          for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
            n =
              (await o({
                cacheName: r,
                matchOptions: s,
                cachedResponse: n,
                request: a,
                event: this.event,
              })) || void 0;
          return n;
        }
        async cachePut(e, t) {
          const n = A(e);
          var r;
          await ((r = 0), new Promise((e) => setTimeout(e, r)));
          const i = await this.getCacheKey(n, "write");
          if (!t) throw new s("cache-put-with-no-response", { url: p(i.url) });
          const o = await this._ensureResponseSafeToCache(t);
          if (!o) return !1;
          const { cacheName: c, matchOptions: u } = this._strategy,
            l = await self.caches.open(c),
            f = this.hasCallback("cacheDidUpdate"),
            d = f
              ? await (async function (e, t, n, r) {
                  const s = h(t.url, n);
                  if (t.url === s) return e.match(t, r);
                  const a = Object.assign(Object.assign({}, r), {
                      ignoreSearch: !0,
                    }),
                    i = await e.keys(t, a);
                  for (const o of i)
                    if (s === h(o.url, n)) return e.match(o, r);
                })(l, i.clone(), ["__WB_REVISION__"], u)
              : null;
          try {
            await l.put(i, f ? o.clone() : o);
          } catch (g) {
            if (g instanceof Error)
              throw (
                ("QuotaExceededError" === g.name &&
                  (await (async function () {
                    for (const e of a) await e();
                  })()),
                g)
              );
          }
          for (const s of this.iterateCallbacks("cacheDidUpdate"))
            await s({
              cacheName: c,
              oldResponse: d,
              newResponse: o.clone(),
              request: i,
              event: this.event,
            });
          return !0;
        }
        async getCacheKey(e, t) {
          const n = `${e.url} | ${t}`;
          if (!this._cacheKeys[n]) {
            let r = e;
            for (const e of this.iterateCallbacks("cacheKeyWillBeUsed"))
              r = A(
                await e({
                  mode: t,
                  request: r,
                  event: this.event,
                  params: this.params,
                })
              );
            this._cacheKeys[n] = r;
          }
          return this._cacheKeys[n];
        }
        hasCallback(e) {
          for (const t of this._strategy.plugins) if (e in t) return !0;
          return !1;
        }
        async runCallbacks(e, t) {
          for (const n of this.iterateCallbacks(e)) await n(t);
        }
        *iterateCallbacks(e) {
          for (const t of this._strategy.plugins)
            if ("function" === typeof t[e]) {
              const n = this._pluginStateMap.get(t),
                r = (r) => {
                  const s = Object.assign(Object.assign({}, r), { state: n });
                  return t[e](s);
                };
              yield r;
            }
        }
        waitUntil(e) {
          return this._extendLifetimePromises.push(e), e;
        }
        async doneWaiting() {
          let e;
          for (; (e = this._extendLifetimePromises.shift()); ) await e;
        }
        destroy() {
          this._handlerDeferred.resolve(null);
        }
        async _ensureResponseSafeToCache(e) {
          let t = e,
            n = !1;
          for (const r of this.iterateCallbacks("cacheWillUpdate"))
            if (
              ((t =
                (await r({
                  request: this.request,
                  response: t,
                  event: this.event,
                })) || void 0),
              (n = !0),
              !t)
            )
              break;
          return n || (t && 200 !== t.status && (t = void 0)), t;
        }
      }
      class M {
        constructor(e = {}) {
          (this.cacheName = u(e.cacheName)),
            (this.plugins = e.plugins || []),
            (this.fetchOptions = e.fetchOptions),
            (this.matchOptions = e.matchOptions);
        }
        handle(e) {
          const [t] = this.handleAll(e);
          return t;
        }
        handleAll(e) {
          e instanceof FetchEvent && (e = { event: e, request: e.request });
          const t = e.event,
            n =
              "string" === typeof e.request
                ? new Request(e.request)
                : e.request,
            r = "params" in e ? e.params : void 0,
            s = new K(this, { event: t, request: n, params: r }),
            a = this._getResponse(s, n, t);
          return [a, this._awaitComplete(a, s, n, t)];
        }
        async _getResponse(e, t, n) {
          let r;
          await e.runCallbacks("handlerWillStart", { event: n, request: t });
          try {
            if (((r = await this._handle(t, e)), !r || "error" === r.type))
              throw new s("no-response", { url: t.url });
          } catch (a) {
            if (a instanceof Error)
              for (const s of e.iterateCallbacks("handlerDidError"))
                if (((r = await s({ error: a, event: n, request: t })), r))
                  break;
            if (!r) throw a;
          }
          for (const s of e.iterateCallbacks("handlerWillRespond"))
            r = await s({ event: n, request: t, response: r });
          return r;
        }
        async _awaitComplete(e, t, n, r) {
          let s, a;
          try {
            s = await e;
          } catch (a) {}
          try {
            await t.runCallbacks("handlerDidRespond", {
              event: r,
              request: n,
              response: s,
            }),
              await t.doneWaiting();
          } catch (i) {
            i instanceof Error && (a = i);
          }
          if (
            (await t.runCallbacks("handlerDidComplete", {
              event: r,
              request: n,
              response: s,
              error: a,
            }),
            t.destroy(),
            a)
          )
            throw a;
        }
      }
      const W = {
        cacheWillUpdate: async ({ response: e }) =>
          200 === e.status || 0 === e.status ? e : null,
      };
      class B extends M {
        constructor(e = {}) {
          super(e),
            this.plugins.some((e) => "cacheWillUpdate" in e) ||
              this.plugins.unshift(W);
        }
        async _handle(e, t) {
          const n = t.fetchAndCachePut(e).catch(() => {});
          t.waitUntil(n);
          let r,
            a = await t.cacheMatch(e);
          if (a) 0;
          else {
            0;
            try {
              a = await n;
            } catch (i) {
              i instanceof Error && (r = i);
            }
          }
          if (!a) throw new s("no-response", { url: e.url, error: r });
          return a;
        }
      }
      function F(e, t, n, r, s, a, i) {
        try {
          var o = e[a](i),
            c = o.value;
        } catch (u) {
          return void n(u);
        }
        o.done ? t(c) : Promise.resolve(c).then(r, s);
      }
      function G(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, s) {
            var a = e.apply(t, n);
            function i(e) {
              F(a, r, s, i, o, "next", e);
            }
            function o(e) {
              F(a, r, s, i, o, "throw", e);
            }
            i(void 0);
          });
        };
      }
      importScripts(
        "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
      ),
        importScripts(
          "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"
        ),
        importScripts(
          "https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js"
        );
      var H = new idbKeyval.Store("GraphQL-Cache", "PostResponses");
      function $(e) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = G(
          t().mark(function e(n) {
            var r, s, a, i, o, c, u, h;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (
                        r = {},
                          s = !0,
                          a = !1,
                          i = void 0,
                          e.prev = 2,
                          o = n.headers.entries()[Symbol.iterator]();
                        !(s = (c = o.next()).done);
                        s = !0
                      )
                        (u = c.value), (r[u[0]] = u[1]);
                      e.next = 10;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(2)), (a = !0), (i = e.t0);
                    case 10:
                      (e.prev = 10),
                        (e.prev = 11),
                        s || null == o.return || o.return();
                    case 13:
                      if (((e.prev = 13), !a)) {
                        e.next = 16;
                        break;
                      }
                      throw i;
                    case 16:
                      return e.finish(13);
                    case 17:
                      return e.finish(10);
                    case 18:
                      return (
                        (h = {
                          headers: r,
                          status: n.status,
                          statusText: n.statusText,
                        }),
                        (e.next = 21),
                        n.json()
                      );
                    case 21:
                      return (h.body = e.sent), e.abrupt("return", h);
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [2, 6, 10, 18],
                [11, , 13, 17],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function J(e, t) {
        return V.apply(this, arguments);
      }
      function V() {
        return (V = G(
          t().mark(function e(n, r) {
            var s, a, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 4), n.json();
                    case 4:
                      return (
                        (s = e.sent),
                        (a = CryptoJS.MD5(
                          s.query + "" + s.variables.submit
                        ).toString()),
                        (e.t0 = s.query),
                        (e.next = 9),
                        $(r)
                      );
                    case 9:
                      (e.t1 = e.sent),
                        (e.t2 = Date.now()),
                        (i = { query: e.t0, response: e.t1, timestamp: e.t2 }),
                        idbKeyval.set(a, i, H),
                        (e.next = 18);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t3 = e.catch(0)),
                        console.log("data cached");
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function Y(e) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = G(
          t().mark(function e(n) {
            var r, s, a, i, o, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (s = 86400), (e.prev = 2), (e.next = 5), n.json();
                    case 5:
                      return (
                        (a = e.sent),
                        (i = CryptoJS.MD5(
                          a.query + "" + a.variables.submit
                        ).toString()),
                        (e.next = 9),
                        idbKeyval.get(i, H)
                      );
                    case 9:
                      if ((r = e.sent)) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 12:
                      if (
                        ((o = n.headers.get("Cache-Control")),
                        (c = o ? parseInt(o.split("=")[1]) : s),
                        !(Date.now() - r.timestamp > 1e3 * c))
                      ) {
                        e.next = 17;
                        break;
                      }
                      return (
                        console.log("Cache expired. Load from API endpoint."),
                        e.abrupt("return", null)
                      );
                    case 17:
                      return e.abrupt(
                        "return",
                        new Response(
                          JSON.stringify(r.response.body),
                          r.response
                        )
                      );
                    case 20:
                      return (
                        (e.prev = 20),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", null)
                      );
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 20]]
            );
          })
        )).apply(this, arguments);
      }
      function X(e) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = G(
          t().mark(function e(n) {
            var r, s;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return null, (e.next = 3), Y(n.request.clone());
                  case 3:
                    return (
                      (r = e.sent),
                      (s = fetch(n.request.clone())
                        .then(function (e) {
                          return J(n.request.clone(), e.clone()), e;
                        })
                        .catch(function (e) {
                          console.error(e);
                        })),
                      e.abrupt("return", r ? Promise.resolve(r) : s)
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      n(80);
      const ee = (e) => (e && "object" === typeof e ? e : { handle: e });
      class te {
        constructor(e, t, n = "GET") {
          (this.handler = ee(t)), (this.match = e), (this.method = n);
        }
        setCatchHandler(e) {
          this.catchHandler = ee(e);
        }
      }
      class ne extends te {
        constructor(e, t, n) {
          super(
            ({ url: t }) => {
              const n = e.exec(t.href);
              if (n && (t.origin === location.origin || 0 === n.index))
                return n.slice(1);
            },
            t,
            n
          );
        }
      }
      class re {
        constructor() {
          (this._routes = new Map()), (this._defaultHandlerMap = new Map());
        }
        get routes() {
          return this._routes;
        }
        addFetchListener() {
          self.addEventListener("fetch", (e) => {
            const { request: t } = e,
              n = this.handleRequest({ request: t, event: e });
            n && e.respondWith(n);
          });
        }
        addCacheListener() {
          self.addEventListener("message", (e) => {
            if (e.data && "CACHE_URLS" === e.data.type) {
              const { payload: t } = e.data;
              0;
              const n = Promise.all(
                t.urlsToCache.map((t) => {
                  "string" === typeof t && (t = [t]);
                  const n = new Request(...t);
                  return this.handleRequest({ request: n, event: e });
                })
              );
              e.waitUntil(n),
                e.ports &&
                  e.ports[0] &&
                  n.then(() => e.ports[0].postMessage(!0));
            }
          });
        }
        handleRequest({ request: e, event: t }) {
          const n = new URL(e.url, location.href);
          if (!n.protocol.startsWith("http")) return void 0;
          const r = n.origin === location.origin,
            { params: s, route: a } = this.findMatchingRoute({
              event: t,
              request: e,
              sameOrigin: r,
              url: n,
            });
          let i = a && a.handler;
          const o = e.method;
          if (
            (!i &&
              this._defaultHandlerMap.has(o) &&
              (i = this._defaultHandlerMap.get(o)),
            !i)
          )
            return void 0;
          let c;
          try {
            c = i.handle({ url: n, request: e, event: t, params: s });
          } catch (h) {
            c = Promise.reject(h);
          }
          const u = a && a.catchHandler;
          return (
            c instanceof Promise &&
              (this._catchHandler || u) &&
              (c = c.catch(async (r) => {
                if (u) {
                  0;
                  try {
                    return await u.handle({
                      url: n,
                      request: e,
                      event: t,
                      params: s,
                    });
                  } catch (a) {
                    a instanceof Error && (r = a);
                  }
                }
                if (this._catchHandler)
                  return this._catchHandler.handle({
                    url: n,
                    request: e,
                    event: t,
                  });
                throw r;
              })),
            c
          );
        }
        findMatchingRoute({ url: e, sameOrigin: t, request: n, event: r }) {
          const s = this._routes.get(n.method) || [];
          for (const a of s) {
            let s;
            const i = a.match({ url: e, sameOrigin: t, request: n, event: r });
            if (i)
              return (
                (s = i),
                ((Array.isArray(s) && 0 === s.length) ||
                  (i.constructor === Object && 0 === Object.keys(i).length) ||
                  "boolean" === typeof i) &&
                  (s = void 0),
                { route: a, params: s }
              );
          }
          return {};
        }
        setDefaultHandler(e, t = "GET") {
          this._defaultHandlerMap.set(t, ee(e));
        }
        setCatchHandler(e) {
          this._catchHandler = ee(e);
        }
        registerRoute(e) {
          this._routes.has(e.method) || this._routes.set(e.method, []),
            this._routes.get(e.method).push(e);
        }
        unregisterRoute(e) {
          if (!this._routes.has(e.method))
            throw new s("unregister-route-but-not-found-with-method", {
              method: e.method,
            });
          const t = this._routes.get(e.method).indexOf(e);
          if (!(t > -1)) throw new s("unregister-route-route-not-registered");
          this._routes.get(e.method).splice(t, 1);
        }
      }
      let se;
      const ae = () => (
        se || ((se = new re()), se.addFetchListener(), se.addCacheListener()),
        se
      );
      function ie(e, t, n) {
        let r;
        if ("string" === typeof e) {
          const s = new URL(e, location.href);
          0;
          r = new te(({ url: e }) => e.href === s.href, t, n);
        } else if (e instanceof RegExp) r = new ne(e, t, n);
        else if ("function" === typeof e) r = new te(e, t, n);
        else {
          if (!(e instanceof te))
            throw new s("unsupported-route-type", {
              moduleName: "workbox-routing",
              funcName: "registerRoute",
              paramName: "capture",
            });
          r = e;
        }
        return ae().registerRoute(r), r;
      }
      n(977);
      function oe(e) {
        if (!e) throw new s("add-to-cache-list-unexpected-type", { entry: e });
        if ("string" === typeof e) {
          const t = new URL(e, location.href);
          return { cacheKey: t.href, url: t.href };
        }
        const { revision: t, url: n } = e;
        if (!n) throw new s("add-to-cache-list-unexpected-type", { entry: e });
        if (!t) {
          const e = new URL(n, location.href);
          return { cacheKey: e.href, url: e.href };
        }
        const r = new URL(n, location.href),
          a = new URL(n, location.href);
        return (
          r.searchParams.set("__WB_REVISION__", t),
          { cacheKey: r.href, url: a.href }
        );
      }
      class ce {
        constructor() {
          (this.updatedURLs = []),
            (this.notUpdatedURLs = []),
            (this.handlerWillStart = async ({ request: e, state: t }) => {
              t && (t.originalRequest = e);
            }),
            (this.cachedResponseWillBeUsed = async ({
              event: e,
              state: t,
              cachedResponse: n,
            }) => {
              if (
                "install" === e.type &&
                t &&
                t.originalRequest &&
                t.originalRequest instanceof Request
              ) {
                const e = t.originalRequest.url;
                n ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
              }
              return n;
            });
        }
      }
      class ue {
        constructor({ precacheController: e }) {
          (this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
            const n =
              (null === t || void 0 === t ? void 0 : t.cacheKey) ||
              this._precacheController.getCacheKeyForURL(e.url);
            return n ? new Request(n, { headers: e.headers }) : e;
          }),
            (this._precacheController = e);
        }
      }
      class he extends M {
        constructor(e = {}) {
          (e.cacheName = c(e.cacheName)),
            super(e),
            (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
            this.plugins.push(he.copyRedirectedCacheableResponsesPlugin);
        }
        async _handle(e, t) {
          const n = await t.cacheMatch(e);
          return (
            n ||
            (t.event && "install" === t.event.type
              ? await this._handleInstall(e, t)
              : await this._handleFetch(e, t))
          );
        }
        async _handleFetch(e, t) {
          let n;
          const r = t.params || {};
          if (!this._fallbackToNetwork)
            throw new s("missing-precache-entry", {
              cacheName: this.cacheName,
              url: e.url,
            });
          {
            0;
            const s = r.integrity,
              a = e.integrity,
              i = !a || a === s;
            if (
              ((n = await t.fetch(new Request(e, { integrity: a || s }))),
              s && i)
            ) {
              this._useDefaultCacheabilityPluginIfNeeded();
              await t.cachePut(e, n.clone());
              0;
            }
          }
          return n;
        }
        async _handleInstall(e, t) {
          this._useDefaultCacheabilityPluginIfNeeded();
          const n = await t.fetch(e);
          if (!(await t.cachePut(e, n.clone())))
            throw new s("bad-precaching-response", {
              url: e.url,
              status: n.status,
            });
          return n;
        }
        _useDefaultCacheabilityPluginIfNeeded() {
          let e = null,
            t = 0;
          for (const [n, r] of this.plugins.entries())
            r !== he.copyRedirectedCacheableResponsesPlugin &&
              (r === he.defaultPrecacheCacheabilityPlugin && (e = n),
              r.cacheWillUpdate && t++);
          0 === t
            ? this.plugins.push(he.defaultPrecacheCacheabilityPlugin)
            : t > 1 && null !== e && this.plugins.splice(e, 1);
        }
      }
      (he.defaultPrecacheCacheabilityPlugin = {
        cacheWillUpdate: async ({ response: e }) =>
          !e || e.status >= 400 ? null : e,
      }),
        (he.copyRedirectedCacheableResponsesPlugin = {
          cacheWillUpdate: async ({ response: e }) =>
            e.redirected ? await m(e) : e,
        });
      class le {
        constructor({
          cacheName: e,
          plugins: t = [],
          fallbackToNetwork: n = !0,
        } = {}) {
          (this._urlsToCacheKeys = new Map()),
            (this._urlsToCacheModes = new Map()),
            (this._cacheKeysToIntegrities = new Map()),
            (this._strategy = new he({
              cacheName: c(e),
              plugins: [...t, new ue({ precacheController: this })],
              fallbackToNetwork: n,
            })),
            (this.install = this.install.bind(this)),
            (this.activate = this.activate.bind(this));
        }
        get strategy() {
          return this._strategy;
        }
        precache(e) {
          this.addToCacheList(e),
            this._installAndActiveListenersAdded ||
              (self.addEventListener("install", this.install),
              self.addEventListener("activate", this.activate),
              (this._installAndActiveListenersAdded = !0));
        }
        addToCacheList(e) {
          const t = [];
          for (const n of e) {
            "string" === typeof n
              ? t.push(n)
              : n && void 0 === n.revision && t.push(n.url);
            const { cacheKey: e, url: r } = oe(n),
              a = "string" !== typeof n && n.revision ? "reload" : "default";
            if (
              this._urlsToCacheKeys.has(r) &&
              this._urlsToCacheKeys.get(r) !== e
            )
              throw new s("add-to-cache-list-conflicting-entries", {
                firstEntry: this._urlsToCacheKeys.get(r),
                secondEntry: e,
              });
            if ("string" !== typeof n && n.integrity) {
              if (
                this._cacheKeysToIntegrities.has(e) &&
                this._cacheKeysToIntegrities.get(e) !== n.integrity
              )
                throw new s("add-to-cache-list-conflicting-integrities", {
                  url: r,
                });
              this._cacheKeysToIntegrities.set(e, n.integrity);
            }
            if (
              (this._urlsToCacheKeys.set(r, e),
              this._urlsToCacheModes.set(r, a),
              t.length > 0)
            ) {
              const e = `Workbox is precaching URLs without revision info: ${t.join(
                ", "
              )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
              console.warn(e);
            }
          }
        }
        install(e) {
          return g(e, async () => {
            const t = new ce();
            this.strategy.plugins.push(t);
            for (const [s, a] of this._urlsToCacheKeys) {
              const t = this._cacheKeysToIntegrities.get(a),
                n = this._urlsToCacheModes.get(s),
                r = new Request(s, {
                  integrity: t,
                  cache: n,
                  credentials: "same-origin",
                });
              await Promise.all(
                this.strategy.handleAll({
                  params: { cacheKey: a },
                  request: r,
                  event: e,
                })
              );
            }
            const { updatedURLs: n, notUpdatedURLs: r } = t;
            return { updatedURLs: n, notUpdatedURLs: r };
          });
        }
        activate(e) {
          return g(e, async () => {
            const e = await self.caches.open(this.strategy.cacheName),
              t = await e.keys(),
              n = new Set(this._urlsToCacheKeys.values()),
              r = [];
            for (const s of t)
              n.has(s.url) || (await e.delete(s), r.push(s.url));
            return { deletedURLs: r };
          });
        }
        getURLsToCacheKeys() {
          return this._urlsToCacheKeys;
        }
        getCachedURLs() {
          return [...this._urlsToCacheKeys.keys()];
        }
        getCacheKeyForURL(e) {
          const t = new URL(e, location.href);
          return this._urlsToCacheKeys.get(t.href);
        }
        getIntegrityForCacheKey(e) {
          return this._cacheKeysToIntegrities.get(e);
        }
        async matchPrecache(e) {
          const t = e instanceof Request ? e.url : e,
            n = this.getCacheKeyForURL(t);
          if (n) {
            return (await self.caches.open(this.strategy.cacheName)).match(n);
          }
        }
        createHandlerBoundToURL(e) {
          const t = this.getCacheKeyForURL(e);
          if (!t) throw new s("non-precached-url", { url: e });
          return (n) => (
            (n.request = new Request(e)),
            (n.params = Object.assign({ cacheKey: t }, n.params)),
            this.strategy.handle(n)
          );
        }
      }
      let fe;
      const de = () => (fe || (fe = new le()), fe);
      class pe extends te {
        constructor(e, t) {
          super(({ request: n }) => {
            const r = e.getURLsToCacheKeys();
            for (const s of (function* (
              e,
              {
                ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
                directoryIndex: n = "index.html",
                cleanURLs: r = !0,
                urlManipulation: s,
              } = {}
            ) {
              const a = new URL(e, location.href);
              (a.hash = ""), yield a.href;
              const i = (function (e, t = []) {
                for (const n of [...e.searchParams.keys()])
                  t.some((e) => e.test(n)) && e.searchParams.delete(n);
                return e;
              })(a, t);
              if ((yield i.href, n && i.pathname.endsWith("/"))) {
                const e = new URL(i.href);
                (e.pathname += n), yield e.href;
              }
              if (r) {
                const e = new URL(i.href);
                (e.pathname += ".html"), yield e.href;
              }
              if (s) {
                const e = s({ url: a });
                for (const t of e) yield t.href;
              }
            })(n.url, t)) {
              const t = r.get(s);
              if (t) {
                return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) };
              }
            }
          }, e.strategy);
        }
      }
      function ge(e, t, n, r, s, a, i) {
        try {
          var o = e[a](i),
            c = o.value;
        } catch (u) {
          return void n(u);
        }
        o.done ? t(c) : Promise.resolve(c).then(r, s);
      }
      function me(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, s) {
            var a = e.apply(t, n);
            function i(e) {
              ge(a, r, s, i, o, "next", e);
            }
            function o(e) {
              ge(a, r, s, i, o, "throw", e);
            }
            i(void 0);
          });
        };
      }
      importScripts(
        "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
      ),
        importScripts(
          "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"
        ),
        importScripts(
          "https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js"
        ),
        self.skipWaiting(),
        self.addEventListener("activate", () => self.clients.claim());
      var ye,
        we,
        ve,
        _e = [
          {
            revision: "a3b01ffb837aa1d1dfd5de0e9b228bb8",
            url: "/_next/static/ayorTiKakhsbxfz2nJ8-z/_buildManifest.js",
          },
          {
            revision: "fb2823d66b3e778e04a3f681d0d2fb19",
            url: "/_next/static/ayorTiKakhsbxfz2nJ8-z/_middlewareManifest.js",
          },
          {
            revision: "b6652df95db52feb4daf4eca35380933",
            url: "/_next/static/ayorTiKakhsbxfz2nJ8-z/_ssgManifest.js",
          },
          {
            revision: "538d0584b3347e0c",
            url: "/_next/static/chunks/57-538d0584b3347e0c.js",
          },
          {
            revision: "896ae32c6414e21d",
            url: "/_next/static/chunks/580-896ae32c6414e21d.js",
          },
          {
            revision: "bf9dbaf414a712f4",
            url: "/_next/static/chunks/959-bf9dbaf414a712f4.js",
          },
          {
            revision: "1f10003e17636e37",
            url: "/_next/static/chunks/framework-1f10003e17636e37.js",
          },
          {
            revision: "5035a05945ec0e6e",
            url: "/_next/static/chunks/main-5035a05945ec0e6e.js",
          },
          {
            revision: "aa3d4522357756fa",
            url: "/_next/static/chunks/pages/_app-aa3d4522357756fa.js",
          },
          {
            revision: "0a004b8b8498208d",
            url: "/_next/static/chunks/pages/_error-0a004b8b8498208d.js",
          },
          {
            revision: "623262fc8d04d585",
            url: "/_next/static/chunks/pages/charPage-623262fc8d04d585.js",
          },
          {
            revision: "44f834b9312965a4",
            url: "/_next/static/chunks/pages/character/%5Bchar%5D-44f834b9312965a4.js",
          },
          {
            revision: "f6661bc8dfbd635a",
            url: "/_next/static/chunks/pages/episode/%5Bepi%5D-f6661bc8dfbd635a.js",
          },
          {
            revision: "74bd1248b2f05574",
            url: "/_next/static/chunks/pages/episodePage-74bd1248b2f05574.js",
          },
          {
            revision: "0453f5a92b95b834",
            url: "/_next/static/chunks/pages/fallback-0453f5a92b95b834.js",
          },
          {
            revision: "041cca7bb526577f",
            url: "/_next/static/chunks/pages/index-041cca7bb526577f.js",
          },
          {
            revision: "99442aec5788bccac9b2f0ead2afdd6b",
            url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          },
          {
            revision: "9b0e45c24ba97727",
            url: "/_next/static/chunks/webpack-9b0e45c24ba97727.js",
          },
          {
            revision: "0efd987b8d534f0d",
            url: "/_next/static/css/0efd987b8d534f0d.css",
          },
          {
            revision: "2c295eff36a45524",
            url: "/_next/static/css/2c295eff36a45524.css",
          },
          {
            revision: "66d109157cbc6a85",
            url: "/_next/static/css/66d109157cbc6a85.css",
          },
          {
            revision: "c2a7b376da898eee",
            url: "/_next/static/css/c2a7b376da898eee.css",
          },
          {
            revision: "e4ea99fd8533e556",
            url: "/_next/static/css/e4ea99fd8533e556.css",
          },
          {
            revision: "f79e515cf37cb7d5",
            url: "/_next/static/css/f79e515cf37cb7d5.css",
          },
          { revision: "c30c7d42707a47a3f4591831641e50dc", url: "/favicon.ico" },
          {
            revision: "bfee8fce969a284fc262fc1e1d69862f",
            url: "/images/Background.png",
          },
          {
            revision: "a3e650de33442ade0f09c27af3fdecfe",
            url: "/images/BnWbg.jpeg",
          },
          {
            revision: "fa564f6d1601c73054930ed74eba64ca",
            url: "/images/Vector.png",
          },
          {
            revision: "b79533ce4ebae3f8cc81b566edaf3e99",
            url: "/images/Vector.svg",
          },
          {
            revision: "361b053f305a6cf7c32231d517a1c90e",
            url: "/images/bethSmith.jpeg",
          },
          {
            revision: "a79c9d1408bc15b8a5270206023835a9",
            url: "/images/cast.jpeg",
          },
          {
            revision: "d6b2ac6674b021be74a497b3e00e0238",
            url: "/images/character.jpg",
          },
          {
            revision: "ea8d9730eae8d3b7330f336e608b0c0e",
            url: "/images/comic.jpeg",
          },
          {
            revision: "c604f154c9fd9a88097bb8e741ac9ac3",
            url: "/images/comic2.jpeg",
          },
          {
            revision: "0aed3b1d02f80b379da673659a076022",
            url: "/images/comic3.avif",
          },
          {
            revision: "78d6f11387ae2e2ed26fff6916c4b077",
            url: "/images/episode.jpeg",
          },
          {
            revision: "9e48cea1092125da65a2add41b2afc6c",
            url: "/images/jerrySmith.jpg",
          },
          {
            revision: "b4f0beea35c3a7ec51d016174cd7fdef",
            url: "/images/location.jpeg",
          },
          {
            revision: "1e6e9308b6dbad1023289e8db5f9f0e1",
            url: "/images/mortySmith.jpg",
          },
          {
            revision: "9e7464b50f40a0291db42b3268b87429",
            url: "/images/offlineBackground.svg",
          },
          {
            revision: "c565d5e0bc5539f9fa405c340f1b94f6",
            url: "/images/pwa/pwa-extraLarge.png",
          },
          {
            revision: "a5e39c48e23751cfaedc61b45c5df5df",
            url: "/images/pwa/pwa-large.png",
          },
          {
            revision: "a306fe502fc6b63e833e31d7a2db1e58",
            url: "/images/pwa/pwa-medium.png",
          },
          {
            revision: "3c5815de52764998150fcc154cf4f6cf",
            url: "/images/pwa/pwa-small.png",
          },
          {
            revision: "b008d7ac13a811899c2adbd6b7260d98",
            url: "/images/rickMorty.jpeg",
          },
          {
            revision: "6d7482e0e621a9853a543949ce2b97d4",
            url: "/images/rickMortyHome.jpeg",
          },
          {
            revision: "05e35b2a9ddf9751b4a35719fb47f1bc",
            url: "/images/rickSanchez.jpg",
          },
          {
            revision: "792c547d2139bbb15b2012a3077eaba8",
            url: "/images/s1e1.jpeg",
          },
          {
            revision: "fac810d6961d9b7642db9d00b2a6b7a4",
            url: "/images/s5e5.jpeg",
          },
          {
            revision: "a0114556f779775a82413dd3050e7f8a",
            url: "/images/song.jpeg",
          },
          {
            revision: "6df4d619a09aaf5c1e7e0e6b286aab63",
            url: "/images/summerSmith.jpeg",
          },
          {
            revision: "342e35a40aa898946d2b191225d3c99b",
            url: "/manifest.json",
          },
          { revision: "d8efa791dfa657fb2cd84f529db38da2", url: "/sw.js" },
          { revision: "4b4f1876502eb6721764637fe5c41702", url: "/vercel.svg" },
        ];
      _e.push({ url: "/fallback", revision: "1234567890" }),
        (function (e) {
          de().precache(e);
        })(_e),
        (function (e) {
          const t = de();
          ie(new pe(t, e));
        })(ye),
        self.addEventListener("activate", (e) => {
          const t = c();
          e.waitUntil(
            (async (e, t = "-precache-") => {
              const n = (await self.caches.keys()).filter(
                (n) =>
                  n.includes(t) &&
                  n.includes(self.registration.scope) &&
                  n !== e
              );
              return await Promise.all(n.map((e) => self.caches.delete(e))), n;
            })(t).then((e) => {})
          );
        }),
        workbox
          ? console.log("Workbox is loaded")
          : console.log("Workbox didn't load"),
        workbox.routing.registerRoute(
          new RegExp("https://rickandmortyapi.com/graphql(/)?"),
          (function () {
            var e = me(
              t().mark(function e(n) {
                var r;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (r = n.event), e.abrupt("return", X(r));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          "POST"
        ),
        self.addEventListener("install", function (e) {
          (we = Date.now()),
            console.log("service worker has been installed", Date.now());
        }),
        self.addEventListener("activate", function (e) {
          console.log("service worker has been activated", Date.now() - we);
        }),
        self.addEventListener(
          "fetch",
          (function () {
            var e = me(
              t().mark(function e(n) {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        "POST" === n.request.method && n.respondWith(X(n));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        ie(
          "/",
          new B({
            cacheName: "start-url",
            plugins: [
              new I({
                maxEntries: 1,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
          new B({
            cacheName: "google-fonts",
            plugins: [
              new I({
                maxEntries: 40,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
          new B({
            cacheName: "static-font-assets",
            plugins: [
              new I({
                maxEntries: 40,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
          new B({
            cacheName: "static-image-assets",
            plugins: [
              new I({
                maxEntries: 264,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\.(?:js)$/i,
          new B({
            cacheName: "static-js-assets",
            plugins: [
              new I({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\.(?:css|less)$/i,
          new B({
            cacheName: "static-style-assets",
            plugins: [
              new I({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\.(?:json|xml|csv)$/i,
          new B({
            cacheName: "static-data-assets",
            plugins: [
              new I({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /\/api\/.*$/i,
          new B({
            cacheName: "apis",
            networkTimeoutSeconds: 86400,
            plugins: [
              new I({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        ie(
          /.*/i,
          new B({
            cacheName: "others",
            networkTimeoutSeconds: 86400,
            plugins: [
              new I({
                maxEntries: 320,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0,
              }),
            ],
          }),
          "GET"
        ),
        (ve = new B()),
        ae().setDefaultHandler(ve),
        (function (e) {
          ae().setCatchHandler(e);
        })(function (e) {
          var t;
          switch (e.event.request.destination) {
            case "document":
            case "image":
            case "font":
              return (t = "/fallback"), de().matchPrecache(t);
            default:
              return Response.error();
          }
        });
    })();
})();

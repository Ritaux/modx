(function(f, d, ba) {
		var ca;

		function x(a, b) {
				return function() {
						try {
								return a.apply(this, arguments)
						} catch (c) {
								("string" != typeof c.message || -1 == c.message.indexOf("NPObject") && -1 == c.message.indexOf("Too much time spent in unload handler")) && da(c, b)
						}
				}
		}

		function da(a, b) {
				if (0.01 > Math.random()) {
						var c = ["cp: " + b, a.name + ": " + a.message, "debug: " + za, "code: " + Ma, "stack: " + a.stack];
						(new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(c.join("; ").replace(/\r?\n/g, "\\n"))
				}
		}

		function M(a,
				b, c) {
				return f.setTimeout(x(a, c || "setTimeout"), b)
		}

		function w() {
				for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, k = c; k--;) a[b[k]] = "";
				try {
						for (var h = f.location, k = c; k--;) {
								var d = b[k];
								a[d] = "" + h[d]
						}
				} catch (e) {
						A && (a = A)
				}
				return a
		}

		function lb(a) {
				return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
		}

		function Aa(a) {
				return -1 !== ("" + f.navigator.userAgent).toLowerCase().search(a)
		}

		function na(a) {
				try {
						delete f[a]
				} catch (b) {
						f[a] = ba
				}
		}

		function oa(a) {
				var b = d.createElement("script");
				b.type = "text/javascript";
				b.async = !0;
				b.src = a;
				try {
						var c = d.getElementsByTagName("html")[0];
						d.getElementsByTagName("head")[0] || c.appendChild(d.createElement("head"));
						var k = d.getElementsByTagName("head")[0];
						k.insertBefore(b, k.firstChild)
				} catch (h) {}
		}

		function pa() {
				if (top != f && parent == top && f.postMessage && !Ya.Metrika_visorPlayerOn) {
						Ya.Metrika_visorPlayerOn = !0;
						var a = d.createElement("div");
						a.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
						var b = a.firstChild;
						M(function() {
								var c = d.body || d.documentElement;
								a.webkitCreateShadowRoot && (c.appendChild(a), c = a.webkitCreateShadowRoot(), Ya.Metrika_shadowAppRoot = c);
								c.appendChild(b);
								try {
										var k = b.contentWindow.document
								} catch (h) {}
								k && (c = Math.random(), f[c] = function(a, b, c, h, k) {
										try {
												c.postMessage && (a.onmessage = function(c) {
														c = c || a.event;
														try {
																var d = JSON.parse(c.data)
														} catch (f) {
																return
														}
														if (/(^|\.)yandex\.(ru|com|ua|kz|by|com\.tr)(:\d{4})?$/.test(c.origin) && d && "script" == d.name && d.data) {
																c = h.getElementsByTagName("head")[0];
																var e = h.createElement("base");
																e.href = d.data;
																c.appendChild(e);
																e = h.createElement("script");
																e.src = d.data;
																c.appendChild(e); - 1 < k.userAgent.indexOf("Firefox/3.6.") && b.removeEventListener("message", a.onmessage, !1);
																a.onmessage = null
														}
												}, -1 < k.userAgent.indexOf("Firefox/3.6.") && b.addEventListener("message", a.onmessage, !1), c.postMessage('{"name":"ping"}', "*"))
										} catch (d) {}
								}, k.open(), k.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">eval("(" + Function.prototype.toString.call(parent[' +
										c + ']) + ")")(window, parent, top, document, navigator);\x3c/script></body></html>'), k.close())
						}, 500)
				}
		}

		function Va(a, b, c, k, h, ma) {
				function kb(a) {
						var g = (new Date).getTime();
						a && g < a && (Wa += a - g + s);
						M(function() {
								kb(g)
						}, s, "timeCorrector")
				}

				function Na() {
						var a = (new Date).getTime() + Wa;
						a < Xa && (a = Xa + s / 2);
						return Xa = a
				}

				function z() {
						return Math.round((Na() - Ha) / I)
				}

				function u(a, g) {
						g = Math.max(0, Math.min(g, 65535));
						m.mergeArrays(a, [g >> 8, g & 255])
				}

				function q(a, g) {
						m.mergeArrays(a, [g & 255])
				}

				function n(a, g) {
						for (g = Math.max(0, g | 0); 127 <
								g;) m.mergeArrays(a, [g & 127 | 128]), g >>= 7;
						m.mergeArrays(a, [g])
				}

				function x(a, g) {
						255 < g.length && (g = g.substr(0, 255));
						m.mergeArrays(a, [g.length]);
						for (var b = 0; b < g.length; b++) u(a, g.charCodeAt(b))
				}

				function A(a, g) {
						n(a, g.length);
						for (var b = 0; b < g.length; b++) n(a, g.charCodeAt(b))
				}

				function y(a, g, b, c, p, r) {
						for (; b && (!b.offsetWidth || !b.offsetHeight);) b = l.getElementParent(b);
						if (!b) return null;
						var h = b[C];
						if (!h || 0 > h) return null;
						var t = {
								mousemove: ub,
								click: pa,
								dblclick: ja,
								mousedown: vb,
								mouseup: na,
								touch: wb
						}[g];
						if (!t) return null;
						var k = l.getElementXY(b);
						b = [];
						q(b, t);
						n(b, a);
						n(b, h);
						n(b, Math.max(0, c[0] - k[0]));
						n(b, Math.max(0, c[1] - k[1]));
						/^mouse(up|down)|click$/.test(g) && (a = p || r, q(b, 2 > a ? la : a == (p ? 2 : 4) ? xa : va));
						return b
				}

				function H(a, g, b, c) {
						g = g[C];
						if (!g || 0 > g) return null;
						var p = [];
						q(p, oa);
						n(p, a);
						n(p, g);
						n(p, b[0]);
						n(p, b[1]);
						q(p, 0);
						q(p, 0);
						q(p, c);
						return p
				}

				function K(a, g) {
						var b = [];
						q(b, xb);
						n(b, a);
						n(b, g[0]);
						n(b, g[1]);
						return b
				}

				function L(a, g, b) {
						var c = [];
						b = b[C];
						if (!b || 0 > b) return null;
						q(c, yb);
						n(c, a);
						n(c, g[0]);
						n(c, g[1]);
						n(c, b);
						return c
				}

				function Q(a,
						g, b) {
						var c = [];
						q(c, da);
						n(c, a);
						n(c, g[0]);
						n(c, g[1]);
						n(c, b[0]);
						n(c, b[1]);
						return c
				}

				function W(a, g, b, c) {
						var p = [];
						q(p, zb);
						n(p, a);
						u(p, g);
						q(p, b);
						a = c[C];
						if (!a || 0 > a) a = 0;
						n(p, a);
						return p
				}

				function $(a, g) {
						var b, c;
						0 == g.length ? c = b = "" : 100 >= g.length ? (b = g, c = "") : 200 >= g.length ? (b = g.substr(0, 100), c = g.substr(100)) : (b = g.substr(0, 97), c = g.substr(g.length - 97));
						var p = [];
						q(p, Ma);
						n(p, a);
						A(p, b);
						A(p, c);
						return p
				}

				function ea(a) {
						var g = [];
						q(g, La);
						n(g, a);
						return g
				}

				function S(a) {
						var g = [];
						q(g, wa);
						n(g, a);
						return g
				}

				function ba(a) {
						var g = [];
						q(g, ya);
						n(g, a);
						return g
				}

				function fa(a, g) {
						var b = [];
						q(b, Aa);
						n(b, a);
						n(b, g[C]);
						return b
				}

				function ca(a, g) {
						var b = [];
						q(b, Ia);
						n(b, a);
						n(b, g[C]);
						return b
				}

				function ia(a, g, b) {
						var c = [];
						q(c, Ka);
						n(c, a);
						n(c, g[C]);
						x(c, String(b));
						return c
				}

				function qa(a) {
						var g = a[C];
						if (!g || 0 > g || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || l.classNameExists(a.form, "-metrika-noform")) return null;
						var b = l.getFormNumber(a.form);
						if (0 > b) return null;
						var c;
						c = "INPUT" == a.nodeName ? {
								text: 0,
								color: 0,
								date: 0,
								datetime: 0,
								"datetime-local": 0,
								email: 0,
								number: 0,
								range: 0,
								search: 0,
								tel: 0,
								time: 0,
								url: 0,
								month: 0,
								week: 0,
								password: 2,
								radio: 3,
								checkbox: 4,
								file: 6,
								image: 7
						}[a.type] : {
								SELECT: 1,
								TEXTAREA: 5
						}[a.nodeName];
						if ("number" != typeof c) return null;
						for (var p = -1, r = a.form.elements, h = r.length, t = 0, k = 0; t < h; t++)
								if (r[t].name == a.name) {
										if (r[t] == a) {
												p = k;
												break
										}
										k++
								}
						if (0 > p) return null;
						r = [];
						q(r, Ab);
						n(r, g);
						n(r, b);
						n(r, c);
						A(r, a.name || "");
						n(r, p);
						return r
				}

				function V(a, g) {
						var b = l.getFormNumber(g);
						if (0 > b) return null;
						for (var c = g.elements, p = c.length, r = [], h = 0; h < p; h++)
								if (!l.isEmptyField(c[h])) {
										var t =
												c[h][C];
										t && 0 < t && m.mergeArrays(r, [t])
								}
						c = [];
						q(c, B);
						n(c, a);
						n(c, b);
						n(c, r.length);
						for (b = 0; b < r.length; b++) n(c, r[b]);
						return c
				}

				function ra() {
						var a = [];
						q(a, Bb);
						return a
				}

				function D(a, g, b) {
						a = a.apply(f, g);
						Ba.append(a, b)
				}

				function E(a) {
						if (a[C]) a: {
								var g = z(),
										b = a[C];
								if (0 < b) {
										var c = [];
										a = l.getElementRegion(a);
										var p = Oa[b],
												r = a[0] + "x" + a[1],
												h = a[2] + "x" + a[3];
										r != p.pos && (p.pos = r, q(c, Cb), n(c, g), n(c, b), n(c, a[0]), n(c, a[1]));
										h != p.size && (p.size = h, q(c, Db), n(c, g), n(c, b), n(c, a[2]), n(c, a[3]));
										if (c.length) {
												a = c;
												break a
										}
								}
								a = null
						} else {
								(b =
										l.getElementParent(a)) && E(b);
								a[C] = Za;
								Oa[Za] = {};
								Za++;
								if (a.nodeName)
										if (b = +a[C], !isFinite(b) || 0 >= b) g = null;
										else {
												var c = Va,
														p = 0,
														t = l.getElementParent(a),
														r = t && t[C] ? t[C] : 0;
												0 > r && (r = 0);
												var h = a.nodeName.toUpperCase(),
														k = Ga[h];
												k || (c |= Ta);
												var d = l.getElementNeighborPosition(a);
												d || (c |= Ua);
												var f = l.getElementRegion(a);
												(t = t ? l.getElementRegion(t) : null) && f[0] == t[0] && f[1] == t[1] && f[2] == t[2] && f[3] == t[3] && (c |= mb);
												Oa[b].pos = f[0] + "x" + f[1];
												Oa[b].size = f[2] + "x" + f[3];
												a.id && "string" == typeof a.id && (c |= nb);
												(t = l.calcTextChecksum(a)) &&
												(c |= za);
												var s = l.calcAttribChecksum(a);
												s && (p |= jb);
												var e;
												b: {
														e = l.getElementChildren(l.getElementParent(a), a.tagName);
														for (var G = 0; G < e.length; G++)
																if ((!e[G].id || "string" != typeof e[G].id) && l.calcAttribChecksum(e[G]) == s && l.calcTextChecksum(e[G]) == t) {
																		e = !0;
																		break b
																}
														e = !1
												}
												e && (c |= Ja, g = l.calcChildrenChecksum(a));
												e = [];
												q(e, ob);
												n(e, b);
												q(e, c);
												n(e, r);
												k ? q(e, k) : x(e, h);
												d && n(e, d);
												c & mb || (n(e, f[0]), n(e, f[1]), n(e, f[2]), n(e, f[3]));
												c & nb && x(e, a.id);
												t && u(e, t);
												c & Ja && u(e, g);
												q(e, p);
												s && u(e, s);
												g = e
										} else a[C] = -1, g = null;
								Ba.append(g, void 0);
								a = qa(a)
						}
						Ba.append(a, void 0)
				}

				function ga(a) {
						var g = F.getTarget(a);
						if (g && "SCROLLBAR" != g.nodeName) {
								if (g && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(g.tagName))
										if (g[C]) E(g);
										else {
												var b = g.form;
												if (b)
														for (var b = b.elements, c = b.length, p = 0; p < c; p++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[p].tagName) && !b[p][C] && E(b[p]);
												else E(g)
										} else E(g);
								D(y, [z(), a.type, g, F.getPos(a), a.which, a.button])
						}
				}

				function sa(a) {
						ga(a);
						var g, b;
						f.getSelection ? (a = f.getSelection(), g = a.toString(), b = a.anchorNode) : d.selection && d.selection.createRange &&
								(a = d.selection.createRange(), g = a.text, b = a.parentElement());
						if ("string" == typeof g) {
								for (; b && 1 != b.nodeType;) b = b.parentNode;
								b && X(b) || b && (/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className) || l.getElementsByClassName("-metrika-nokeys", b).length) || g == $a || ($a = g, D($, [z(), g]))
						}
				}

				function R(a) {
						var g = Na(),
								b = g - pb;
						if (!(b < N)) {
								var c = F.getPos(a),
										p = ab[0] - c[0],
										r = ab[1] - c[1],
										p = p * p + r * r;
								0 >= p || 16 > p && 100 > b || 20 > b && 256 > p || (pb = g, ab = c, ga(a))
						}
				}

				function Y() {
						var a = l.getDocumentScroll(),
								g = Na();
						g - qb < N || 10 > Math.abs(a[0] - bb[0]) && 10 >
								Math.abs(a[1] - bb[1]) || (qb = g, bb = a, D(K, [z(), a]))
				}

				function ta(a) {
						a = F.getTarget(a);
						var g = Math.random(),
								b = [a.scrollLeft, a.scrollTop];
						if (a.localId) {
								if (g = cb[a.localId], !g || 10 > Math.abs(b[0] - g[0]) && 10 > Math.abs(b[1] - g[1])) return
						} else {
								for (; cb[g];) g = Math.random();
								a.localId = g
						}
						cb[a.localId] = b;
						a !== d && (E(a), D(L, [z(), b, a]))
				}

				function ua() {
						D(Q, [z(), l.getViewportSize(), l.getDocumentSize()])
				}

				function ha() {
						D(ra, [], !0)
				}

				function v(a) {
						return (a.shiftKey ? rb : 0) | (a.ctrlKey ? db : 0) | (a.altKey ? sb : 0) | (a.metaKey ? Fa : 0) | (a.ctrlKey || a.altKey ?
								Pa : 0)
				}

				function X(a) {
						return "INPUT" == a.tagName ? "password" == a.type || a.name && tb.test(a.name) || a.id && tb.test(a.id) : !1
				}

				function T(a, g, b) {
						a = F.getTarget(a);
						X(a) || /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className) || (E(a), D(W, [z(), g, b, a]))
				}

				function aa(a) {
						var g = a.keyCode,
								b = v(a);
						if ({
										3: 1,
										8: 1,
										9: 1,
										13: 1,
										16: 1,
										17: 1,
										18: 1,
										19: 1,
										20: 1,
										27: 1,
										33: 1,
										34: 1,
										35: 1,
										36: 1,
										37: 1,
										38: 1,
										39: 1,
										40: 1,
										45: 1,
										46: 1,
										91: 1,
										92: 1,
										93: 1,
										106: 1,
										110: 1,
										111: 1,
										144: 1,
										145: 1
								}[g] || 112 <= g && 123 >= g || 96 <= g && 105 >= g || b & Pa) 19 == g && (b & ~Pa) == db && (g = 144), T(a, g, b | Pa), eb = !1,
								M(function() {
										eb = !0
								}, 1), 67 == g && b & db && !(b & sb || b & rb) && U()
				}

				function ka(a) {
						eb && !fb && 0 !== a.which && (T(a, a.charCode || a.keyCode, v(a)), fb = !0, M(function() {
								fb = !1
						}, 1))
				}

				function U() {
						gb || (gb = !0, $a && D(ea, [z()]), M(function() {
								gb = !1
						}, 1))
				}

				function J() {
						Ca || (Ca = !0, D(S, [z()]))
				}

				function O() {
						Ca && (Ca = !1, D(ba, [z()]))
				}

				function Z(a) {
						(!Ca || a && !a.fromElement) && J()
				}

				function Da(a) {
						a && !a.toElement && O()
				}

				function P(a) {
						if ((a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
								if (a[C]) E(a);
								else {
										var g = a.form;
										if (g)
												for (var g =
																g.elements, b = g.length, c = 0; c < b; c++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(g[c].tagName) && !g[c][C] && E(g[c]);
										else E(a)
								}
								D(fa, [z(), a])
						}
				}

				function g(a) {
						(a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (E(a), D(ca, [z(), a]))
				}

				function p(a) {
						a = F.getTarget(a);
						if (!(X(a) || a && /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className)) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
								var g = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
								E(a);
								D(ia, [z(), a, g])
						}
				}

				function r(a) {
						a = F.getTarget(a);
						if (!l.classNameExists(a,
										"-metrika-noform") && "FORM" == a.nodeName) {
								for (var g = a.elements, b = 0; b < g.length; b++) l.isEmptyField(g[b]) || E(g[b]);
								D(V, [z(), a], !0)
						}
				}

				function t(a) {
						Y();
						if (a.touches && a.touches.length) {
								var g = F.getTarget(a);
								if (g) {
										E(g);
										for (var b = 0; b < a.touches.length; b++) D(y, [z(), "touch", g, [a.touches[b].pageX, a.touches[b].pageY], 0, 0])
								}
						}
				}

				function G(a) {
						var g = F.getTarget(a);
						if (g) {
								var b;
								"wheel" == a.type ? b = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (b = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
								b && (E(g), D(H, [z(), g, F.getPos(a), b]))
						}
				}
				var Ba = new Qa({
								protocol: a,
								counterId: b,
								counterType: c,
								meta: {
										url: w().href,
										hitId: h,
										timezone: Ra,
										timestamp: Ea
								}
						}),
						s = 20,
						I = 50,
						N = 10,
						ob = 1,
						ub = 2,
						xb = 3,
						yb = 16,
						vb = 4,
						zb = 5,
						Ab = 7,
						Cb = 9,
						Db = 10,
						B = 11,
						wb = 12,
						Bb = 13,
						wa = 14,
						ya = 15,
						Aa = 17,
						Ia = 18,
						Ka = 19,
						La = 27,
						da = 28,
						Ma = 29,
						na = 30,
						oa = 31,
						pa = 32,
						ja = 33,
						la = 1,
						va = 2,
						xa = 4,
						Ja = 1,
						Ta = 2,
						Ua = 4,
						mb = 8,
						za = 16,
						nb = 32,
						Va = 64,
						jb = 2,
						sb = 1,
						rb = 2,
						db = 4,
						Fa = 8,
						Pa = 16,
						Ga = {
								A: 1,
								ABBR: 2,
								ACRONYM: 3,
								ADDRESS: 4,
								APPLET: 5,
								AREA: 6,
								B: 7,
								BASE: 8,
								BASEFONT: 9,
								BDO: 10,
								BIG: 11,
								BLOCKQUOTE: 12,
								BODY: 13,
								BR: 14,
								BUTTON: 15,
								CAPTION: 16,
								CENTER: 17,
								CITE: 18,
								CODE: 19,
								COL: 20,
								COLGROUP: 21,
								DD: 22,
								DEL: 23,
								DFN: 24,
								DIR: 25,
								DIV: 26,
								DL: 27,
								DT: 28,
								EM: 29,
								FIELDSET: 30,
								FONT: 31,
								FORM: 32,
								FRAME: 33,
								FRAMESET: 34,
								H1: 35,
								H2: 36,
								H3: 37,
								H4: 38,
								H5: 39,
								H6: 40,
								HEAD: 41,
								HR: 42,
								HTML: 43,
								I: 44,
								IFRAME: 45,
								IMG: 46,
								INPUT: 47,
								INS: 48,
								ISINDEX: 49,
								KBD: 50,
								LABEL: 51,
								LEGEND: 52,
								LI: 53,
								LINK: 54,
								MAP: 55,
								MENU: 56,
								META: 57,
								NOFRAMES: 58,
								NOSCRIPT: 59,
								OBJECT: 60,
								OL: 61,
								OPTGROUP: 62,
								OPTION: 63,
								P: 64,
								PARAM: 65,
								PRE: 66,
								Q: 67,
								S: 68,
								SAMP: 69,
								SCRIPT: 70,
								SELECT: 71,
								SMALL: 72,
								SPAN: 73,
								STRIKE: 74,
								STRONG: 75,
								STYLE: 76,
								SUB: 77,
								SUP: 78,
								TABLE: 79,
								TBODY: 80,
								TD: 81,
								TEXTAREA: 82,
								TFOOT: 83,
								TH: 84,
								THEAD: 85,
								TITLE: 86,
								TR: 87,
								TT: 88,
								U: 89,
								UL: 90,
								VAR: 91,
								NOINDEX: 100
						},
						Wa = 0;
				kb(0);
				var Xa = 0,
						Za = 1,
						pb = 0,
						ab = [0, 0],
						qb = 0,
						bb = [0, 0],
						cb = {},
						tb = /^(password|passwd|pswd)$/,
						eb = !0,
						fb = !1,
						$a = "",
						gb = !1,
						Ca = !0,
						Ha = Na(),
						C = "metrikaId_" + Math.random(),
						Oa = {},
						Sa = ":submit" + Math.random();
				if ("MetrikaPlayer" != f.name) {
						e.on(d, "mousemove", R);
						e.on(d, "click,dblclick,mousedown", ga);
						e.on(d, "mouseup", sa);
						e.on(f, "scroll", Y);
						if ("onmousewheel" in d) e.on(d, "mousewheel", G);
						else e.on(d, "wheel", G);
						e.on(f, "beforeunload", ha);
						if (!hb) e.on(f,
								"unload", ha);
						e.on(f, "resize", ua);
						e.on(d, "keydown", aa);
						e.on(d, "keypress", ka);
						e.on(d, "copy", U);
						e.on(d, "touchmove,touchstart", t);
						d.attachEvent && !f.opera ? (e.on(d, "focusin", Z), e.on(d, "focusout", Da)) : (e.on(f, "focus", J), e.on(f, "blur", O), e.on(d, "blur", O));
						d.addEventListener ? (e.on(d, "scroll", ta), e.on(d, "focus", P), e.on(d, "blur", g), e.on(d, "change", p), e.on(d, "submit", r)) : d.attachEvent && (e.on(d, "focusin", P), e.on(d, "focusout", g), function() {
								for (var a = d.getElementsByTagName("form"), g = 0; g < a.length; g++) {
										for (var b =
														a[g].getElementsByTagName("*"), c = 0; c < b.length; c++)
												if (/^INPUT|SELECT|TEXTAREA$/.test(b[c].tagName)) e.on(b[c], "change", p);
										e.on(a[g], "submit", r)
								}
						}());
						(function() {
								var a = d.getElementsByTagName("form");
								if (a.length)
										for (var g = 0; g < a.length; g++) {
												var b = a[g].submit;
												if ("function" == typeof b || "object" == typeof b && /^\s*function submit\(\)/.test(String(b))) a[g][Sa] = b, a[g].submit = function() {
														r({
																target: this
														});
														return this[Sa]()
												}
										}
						})();
						"0:0" != l.getDocumentScroll().join(":") && Y();
						ua();
						ma.uploadPage = function(g) {
								if ("function" ==
										typeof f.toStaticHTML && -1 < f.toStaticHTML.toString().indexOf("NoScript")) return !1;
								var p = d.documentElement;
								if (p && 19E4 < ("" + p.innerHTML).length) return !1;
								var r = f.XMLHttpRequest ? new f.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
										t = l.getDocumentCharset(),
										p = "text/html" + (t ? ";charset=" + t : ""),
										k = new ib({
												protocol: a,
												counterId: b,
												counterType: c
										});
								if ("html" == g) return g = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), k.sendContent(l.getDocumentHTML().replace(g, ""), p, h, Ra, Ea), !0;
								r && (r.open("get",
										w().href, !0), r.onreadystatechange = function() {
										4 == r.readyState && k.sendContent(r.responseText, r.getResponseHeader("content-type"), h, Ra, Ea)
								}, r.overrideMimeType && t && r.overrideMimeType(p), r.send(null));
								return !0
						}
				}
				return {
						start: function() {
								Ba.activate()
						},
						stop: function() {
								Ba.clear();
								e.un(d, "mousemove", R);
								e.un(d, "click,dblclick,mousedown", ga);
								e.un(d, "mouseup", sa);
								e.un(d, "mousewheel,wheel", G);
								e.un(f, "scroll", Y);
								e.un(f, "beforeunload", ha);
								e.un(f, "unload", ha);
								e.un(f, "resize", ua);
								e.un(d, "keydown", aa);
								e.un(d, "keypress",
										ka);
								e.un(d, "copy", U);
								e.un(d, "touchmove,touchstart", t);
								e.un(d, "focusin", Z);
								e.un(d, "focusout", Da);
								e.un(f, "focus", J);
								e.un(f, "blur", O);
								e.un(d, "blur", O);
								d.removeEventListener ? (e.un(d, "scroll", ta), e.un(d, "focus", P), e.un(d, "blur", g), e.un(d, "change", p), e.un(d, "submit", r)) : d.detachEvent && (e.un(d, "focusin", P), e.un(d, "focusout", g), function() {
										for (var a = d.getElementsByTagName("form"), g = 0; g < a.length; g++) {
												for (var b = a[g].getElementsByTagName("*"), c = 0; c < b.length; c++) / ^ INPUT | SELECT | TEXTAREA$ / .test(b[c].tagName) && e.un(b[c],
														"change", p);
												e.un(a[g], "submit", r)
										}
								}());
								(function() {
										for (var a = d.getElementsByTagName("form"), g = 0; g < a.length; g++) a[g][Sa] && (a[g].submit = a[g][Sa])
								})()
						},
						uploadPages: function(a, g) {
								function b() {
										e.un(d, "DOMContentLoaded", b);
										e.un(f, "load", b);
										for (var c = a.split(/\n/), p = w().href, r = /regexp:/, t = 0; t < c.length; t++) {
												var h = c[t];
												if (h)
														if (r.test(h)) {
																h = lb(h.replace(r, ""));
																try {
																		var k = RegExp(h)
																} catch (s) {}
																if (k && k.test(p)) {
																		ma.uploadPage(g);
																		break
																}
														} else if (-1 !== p.indexOf(h)) {
														ma.uploadPage(g);
														break
												}
										}
								}
								"complete" == d.readyState ?
										b() : (e.on(d, "DOMContentLoaded", b), e.on(f, "load", b))
						}
				}
		}
		var jb = !1,
				za = "",
				hb = !Aa(/webkit/) && Aa(/gecko/),
				l = {
						getDocumentCharset: function() {
								return ("" + (d.characterSet || d.charset || "")).toLowerCase()
						},
						getDocumentHTML: function() {
								var a = "",
										b = "",
										a = d.documentElement,
										c = a.outerHTML;
								if (c) a = c;
								else {
										for (var c = a.attributes, k = "", h = 0; h < c.length; h++) {
												var f = c[h];
												f && (k += " " + f.name + '="' + (f.value || "") + '"')
										}
										a = "<html" + k + ">" + a.innerHTML + "</html>"
								}(c = d.doctype) && (b = "<!DOCTYPE " + c.name + (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (c.systemId ?
										' "' + c.systemId + '"' : "") + ">\n");
								return b + a
						},
						getRootElement: function() {
								var a = d.documentElement;
								return "CSS1Compat" == d.compatMode ? a : d.body || a
						},
						getViewportSize: function() {
								var a = l.getRootElement();
								return [a.clientWidth, a.clientHeight]
						},
						getDocumentSize: function() {
								var a = l.getRootElement(),
										b = l.getViewportSize();
								return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
						},
						getDocumentScroll: function() {
								return [f.pageXOffset || d.documentElement && d.documentElement.scrollLeft || d.body && d.body.scrollLeft || 0, f.pageYOffset ||
										d.documentElement && d.documentElement.scrollTop || d.body && d.body.scrollTop || 0
								]
						},
						getElementXY: function(a) {
								if (!a.ownerDocument || "PARAM" == a.tagName || a == d.body || a == d.documentElement) return [0, 0];
								if (a.getBoundingClientRect) {
										a = a.getBoundingClientRect();
										var b = l.getDocumentScroll();
										return [Math.round(a.left + b[0]), Math.round(a.top + b[1])]
								}
								for (var c = b = 0; a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
								return [b, c]
						},
						getElementParent: function(a) {
								return a == d.documentElement ? null : a == d.body ? d.documentElement : a.parentNode
						}
				},
				m = {
						isArray: function(a) {
								return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
						},
						mergeArrays: function(a) {
								for (var b = 1; b < arguments.length; b++)
										if (m.isArray(arguments[b]))
												for (var c = 0; c < arguments[b].length; c++) a[a.length] = arguments[b][c]
						}
				};
		l.getElementChildren = function(a, b) {
				var c = [];
				if (a) {
						var k = a.childNodes;
						if (k)
								for (var h = 0, d = k.length; h < d; h++) {
										var f = k[h];
										"INPUT" == f.nodeName && f.type && "hidden" == f.type.toLocaleLowerCase() || b && f.nodeName != b || m.mergeArrays(c, [f])
								}
				}
				return c
		};
		l.getElementNeighborPosition = function(a) {
				var b = l.getElementParent(a);
				if (b)
						for (var c = 0, k = 0; k < b.childNodes.length; k++)
								if (a.nodeName == b.childNodes[k].nodeName) {
										if (a == b.childNodes[k]) return c;
										c++
								}
				return 0
		};
		l.getElementSize = function(a) {
				return a == d.body || a == d.documentElement ? l.getDocumentSize() : [a.offsetWidth, a.offsetHeight]
		};
		l.getElementRegion = function(a) {
				var b = l.getElementXY(a);
				a = l.getElementSize(a);
				return [b[0], b[1], a[0], a[1]]
		};
		m.fletcher = function(a) {
				for (var b = a.length, c = 0, k = 255, h = 255; b;) {
						var d =
								21 < b ? 21 : b,
								b = b - d;
						do {
								var f = "string" == typeof a ? a.charCodeAt(c) : a[c];
								c++;
								if (255 < f) var e = f >> 8,
										f = f & 255,
										f = f ^ e;
								k += f;
								h += k
						} while (--d);
						k = (k & 255) + (k >> 8);
						h = (h & 255) + (h >> 8)
				}
				a = (k & 255) + (k >> 8) << 8 | (h & 255) + (h >> 8);
				return 65535 == a ? 0 : a
		};
		l.calcTextChecksum = function(a) {
				var b = "";
				a = a.childNodes;
				for (var c = 0, k = a.length; c < k; c++) a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
				return m.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
		};
		l.calcAttribChecksum = function(a) {
				var b = "",
						c = "width height align title alt name".split(" ");
				"IMG" == a.tagName &&
						(b += a.src.toLowerCase());
				"A" == a.tagName && (b += a.href.toLowerCase());
				for (var b = b + String(a.className || "").toLowerCase(), k = 0; k < c.length; k++) a.getAttribute && (b += String(a.getAttribute(c[k]) || "").toLowerCase());
				return m.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
		};
		l.calcChildrenChecksum = function(a) {
				return m.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
		};
		l.getFormNumber = function(a) {
				for (var b = d.getElementsByTagName("form"), c = 0, k = b.length; c < k; c++)
						if (b[c] == a) return c;
				return -1
		};
		l.classNameExists =
				function(a, b) {
						return RegExp("(?:^|\\s)" + b + "(?:\\s|$)").test(a.className)
				};
		l.isEmptyField = function(a) {
				return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
		};
		l.getElementsByClassName = function(a, b) {
				b = b || d;
				for (var c = b.getElementsByTagName("*"), k = [], h = 0; h < c.length; h++) l.classNameExists(c[h], a) && k.push(c[h]);
				return k
		};
		var F = {
				getPos: function(a) {
						var b =
								l.getRootElement(),
								c = l.getDocumentScroll();
						return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
				},
				getTarget: function(a) {
						return a.target || a.srcElement
				},
				getMouseButton: function(a) {
						return a.which || a.button == ba ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
				}
		};
		m.mixin = function(a) {
				for (var b = 1; b < arguments.length; b++)
						if (arguments[b]) {
								for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
								arguments[b].hasOwnProperty("toString") && (a.toString =
										arguments[b].toString)
						}
				return a
		};
		var K = function(a) {
				a = a || {};
				m.mixin(this, a);
				this._initComponent()
		};
		K.prototype._initComponent = function() {};
		K.inherit = function(a) {
				a = a || {};
				var b = "function" == typeof this ? this : Object;
				a.hasOwnProperty("constructor") || (a.constructor = function() {
						b.apply(this, arguments)
				});
				var c = function() {};
				c.prototype = b.prototype;
				a.constructor.prototype = new c;
				m.mixin(a.constructor.prototype, a);
				a.constructor.prototype.constructor = a.constructor;
				a.constructor.superclass = b.prototype;
				a.constructor.inherit =
						K.inherit;
				return a.constructor
		};
		var e = K.inherit({
				_initComponent: function() {
						e.superclass._initComponent.apply(this, arguments);
						this._listeners = []
				},
				on: function(a, b, c, k, h) {
						h = 5 > arguments.length ? !0 : !!h;
						for (var d = b.split(","), e = 0; e < d.length; e++) {
								var m = d[e],
										l = function(a) {
												c.call(k || this, a || f.event)
										};
								this._listeners[this._listeners.length] = [a, m, c, k, h, l];
								a.addEventListener ? a.addEventListener(m, l, h) : a.attachEvent && a.attachEvent("on" + m, l)
						}
				},
				un: function(a, b, c, k, h) {
						h = 5 > arguments.length ? !0 : !!h;
						for (var d = b.split(","),
										f = 0; f < d.length; f++)
								for (var e = d[f], m = 0; m < this._listeners.length; m++) {
										var l = this._listeners[m];
										if (l[0] == a && l[1] == e && l[2] == c && l[3] == k && l[4] == h) {
												this._listeners.splice(m, 1);
												this._removeListener(a, e, l[5], h);
												return
										}
								}
				},
				unAll: function() {
						for (var a = 0; a < this._listeners.length; a++) {
								var b = this._listeners[a];
								this._removeListener(b[0], b[1], b[5], b[4])
						}
						this._listeners.length = 0
				},
				_removeListener: function(a, b, c, k) {
						a.removeEventListener ? a.removeEventListener(b, c, k) : a.detachEvent && a.detachEvent("on" + b, c)
				}
		});
		e.on = function(a,
				b, c, k, h) {
				e._instance || (e._instance = new e);
				e._instance.on.apply(e._instance, arguments)
		};
		e.un = function(a, b, c, k, h) {
				e._instance && e._instance.un.apply(e._instance, arguments)
		};
		e.onDocumentVisible = function(a, b) {
				if ("prerender" == d.webkitVisibilityState) {
						var c = function() {
								"prerender" != d.webkitVisibilityState && (e.un(d, "webkitvisibilitychange", c), a.call(b, !0))
						};
						e.on(d, "webkitvisibilitychange", c)
				} else a.call(b, !1)
		};
		ca = null;
		var $ = K.inherit({
						counterId: "",
						_initComponent: function() {
								$.superclass._initComponent.apply(this,
										arguments);
								this._ls = null;
								try {
										this._ls = f.localStorage
								} catch (a) {}
						},
						set: function(a, b) {
								if (this.isEnabled()) try {
										!b || b && m.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), JSON.stringify(b))
								} catch (c) {}
						},
						get: function(a) {
								if (this.isEnabled()) try {
										return JSON.parse(this._ls.getItem(this._getLsKey(a)))
								} catch (b) {}
								return null
						},
						remove: function(a) {
								if (this.isEnabled()) try {
										this._ls.removeItem(this._getLsKey(a))
								} catch (b) {}
						},
						isEnabled: function() {
								return this._ls && f.JSON && "object" == typeof this._ls &&
										"object" == typeof f.JSON
						},
						getStorageId: function() {
								var a = this.get("lsid");
								a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
								return a
						},
						clearStorageId: function() {
								this.remove("lsid")
						},
						_getLsKey: function(a) {
								return "_ym" + this.counterId + "_" + a
						}
				}),
				ia = K.inherit({
						counterId: "",
						onlyCurrentDomain: !1,
						skipPrefix: !1,
						_initComponent: function() {
								ia.superclass._initComponent.apply(this, arguments);
								this._domain = null;
								if (!this.onlyCurrentDomain)
										for (var a = A.host.split("."), b = 2;;)
												if (b <= a.length) {
														if (this._domain = "." +
																a.slice(-b).join("."), b++, this.isEnabled()) break
												} else {
														this._domain = null;
														break
												}
						},
						create: function(a, b, c) {
								a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
								c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
								this._domain && a.push("domain=" + this._domain);
								a.push("path=/");
								try {
										d.cookie = a.join(";")
								} catch (k) {}
						},
						read: function(a) {
								try {
										var b = d.cookie
								} catch (c) {}
								return b && b.match(RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
						},
						erase: function(a) {
								this.create(a,
										"", -1)
						},
						isEnabled: function() {
								this.create("metrika_enabled", "1", 60);
								var a = !!this.read("metrika_enabled");
								this.erase("metrika_enabled");
								return a
						},
						_prepareName: function(a) {
								return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
						}
				});
		ia.isEnabled = function() {
				return (new ia({
						onlyCurrentDomain: !0
				})).isEnabled()
		};
		var y = K.inherit({
						transports: [],
						postParams: [],
						send: function(a, b, c, k) {
								c = c || function() {};
								(function ma(d) {
										if (d < this.transports.length) try {
												var f = new this.transports[d]({
														postParams: this.postParams
												});
												f.request(a, b, function(a, b) {
														a ? c.call(k, b) : ma.call(this, d + 1)
												}, this)
										} catch (e) {
												da(e, "send by " + (f && f.id)), ma.call(this, d + 1)
										}
								}).call(this, 0)
						}
				}),
				ja = {
						stringify: function(a) {
								var b = [],
										c;
								for (c in a)
										if (a.hasOwnProperty(c)) {
												var d = a[c];
												if (m.isArray(d))
														for (var h = 0; h < d.length; h++) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d[h])));
												else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
										}
								return b.join("&")
						}
				};
		m.forEachKey = function(a, b, c) {
				for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d],
						a)
		};
		m.inArray = function(a, b) {
				for (var c = 0; c < a.length; c++)
						if (a[c] == b) return !0;
				return !1
		};
		var ka = K.inherit({
						postParams: [],
						_buildUrl: function(a, b) {
								return a + (-1 < a.indexOf("?") ? "&" : "?") + ja.stringify(b)
						},
						_splitParams: function(a) {
								var b = {},
										c = {};
								m.forEachKey(a, function(a, h) {
										m.inArray(this.postParams, a) ? c[a] = h : b[a] = h
								}, this);
								return {
										get: b,
										post: c
								}
						}
				}),
				L = ka.inherit({
						id: "XHR",
						request: function(a, b, c, d) {
								if (f.opera && "function" == typeof f.opera.version) {
										var h = f.opera.version();
										if ("string" == typeof h && "12" == h.split(".")[0] &&
												/[^a-z0-9.:-]/.test(A.host)) return c.call(d, !1)
								}
								if (f.XMLHttpRequest) {
										var e = new XMLHttpRequest;
										if ("withCredentials" in e) {
												b = this._splitParams(b);
												a = this._buildUrl(a, b.get);
												e.open("POST", a, !0);
												e.withCredentials = !0;
												e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
												e.send(ja.stringify(b.post));
												(function() {
														4 == e.readyState ? c.call(d, 200 == e.status) : M(arguments.callee, 50, "TransportXHR.request")
												})();
												return
										}
								}
								c.call(d, !1)
						}
				});
		m.random = function(a, b) {
				2 > arguments.length && (b = a, a = 0);
				1 > arguments.length &&
						(b = 1073741824);
				return Math.floor(Math.random() * (b - a)) + a
		};
		var V = ka.inherit({
						id: "form",
						enctype: "application/x-www-form-urlencoded",
						htmlfileOnly: !1,
						_initComponent: function() {
								V.superclass._initComponent.apply(this, arguments);
								"_htmlfile" in V.prototype || (V.prototype._htmlfile = this._createHtmlfile());
								this._doc = this._htmlfile || (this.htmlfileOnly ? null : d)
						},
						request: function(a, b, c, d) {
								var h = this._doc;
								if (!h) return c.call(d, !1);
								b = this._splitParams(b);
								var f = "ifr" + m.random(),
										e = h.createElement("div");
								e.style.position =
										"absolute";
								e.style.left = "-99999px";
								e.style.top = "-99999px";
								var l = ['<iframe name="', f, '"></iframe>', '<form action="', this._buildUrl(a, b.get), '" method="post" target="', f, '" enctype="', this.enctype, '">'];
								m.forEachKey(b.post, function(a) {
										m.mergeArrays(l, ['<textarea name="', a, '"></textarea>'])
								});
								m.mergeArrays(l, ["</form>"]);
								e.innerHTML = l.join("");
								h.body.appendChild(e);
								var u = e.getElementsByTagName("form")[0];
								m.forEachKey(b.post, function(a, b) {
										u[a].value = b
								});
								u.submit();
								M(function() {
												h.body.removeChild(e)
										},
										1E4, "TransportForm.request.2");
								return c.call(d, !0)
						},
						_createHtmlfile: function() {
								try {
										if (f.ActiveXObject) {
												var a = new ActiveXObject("htmlfile");
												a.open();
												a.write("<html><body></body></html>");
												a.close();
												return a
										}
								} catch (b) {}
								return null
						}
				}),
				S = V.inherit({
						id: "htmlfile",
						htmlfileOnly: !0
				}),
				la = ka.inherit({
						id: "img",
						request: function(a, b, c, d) {
								a = this._buildUrl(a, b);
								b = new Image;
								b.onload = x(function() {
										c.call(d, !0)
								}, "TransportImage.request");
								b.onerror = x(function() {
										c.call(d, !1)
								}, "TransportImage.request");
								b.src = a
						}
				});
		m.defer =
				function(a, b, c, d, h) {
						return M(function() {
								a.apply(c, d || [])
						}, b, h)
				};
		var Q = y.inherit({
				protocol: "",
				host: "mc.yandex.ru",
				resource: "",
				counterId: "",
				counterType: 0,
				retry: !1,
				transports: [L, S, la],
				_initComponent: function() {
						Q.superclass._initComponent.apply(this, arguments);
						this.retry && (this._storage = new $)
				},
				send: function(a, b, c, d) {
						if (this.retry && this._storage.isEnabled()) {
								b.rqnl = b.rqnl || 0;
								b.rqnl++;
								for (var h = this._storage.get("retryReqs") || {}, f = 0; h[f];) f++;
								h[f] = {
										protocol: this.protocol,
										host: this.host,
										resource: this.resource,
										counterId: this.counterId,
										counterType: this.counterType,
										postParams: this.postParams,
										params: a,
										browserInfo: b,
										ghid: Ya._globalMetrikaHitId,
										time: +new Date
								};
								this._storage.set("retryReqs", h)
						}
						h = {};
						this.counterType && (h["cnt-class"] = this.counterType);
						m.mixin(h, a);
						b.st = Math.round((new Date).getTime() / 1E3);
						a = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join("");
						var e = [];
						b && (m.forEachKey(b, function(a, b) {
								"t" != a && m.mergeArrays(e, [a, b])
						}), b.t && m.mergeArrays(e, ["t", b.t]));
						e.length && (h["browser-info"] =
								e.join(":"));
						if (this.retry && this._storage.isEnabled()) var l = m.defer(function() {}, 1E4, this, [], "SenderBK.timeout");
						return Q.superclass.send.call(this, a, h, function() {
								if (this.retry && this._storage.isEnabled()) {
										clearTimeout(l);
										var a = this._storage.get("retryReqs") || {};
										a[f] && (delete a[f], this._storage.set("retryReqs", a))
								}
								c && c.apply(d, arguments)
						}, this)
				}
		});
		Q.retransmit = function() {
				var a = new $,
						b = a.get("retryReqs") || {};
				a.remove("retryReqs");
				m.forEachKey(b, function(a, b) {
						b.ghid && b.ghid != Ya._globalMetrikaHitId &&
								b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (new Q({
										protocol: b.protocol,
										host: b.host,
										resource: b.resource,
										counterId: b.counterId,
										counterType: b.counterType,
										postParams: b.postParams || [],
										retry: !0
								})).send(b.params, b.browserInfo)
				})
		};
		var T = {
						abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
						tail: "+/=",
						tailSafe: "*-_",
						encode: function(a, b) {
								for (var c = (T.abc + (b ? T.tailSafe : T.tail)).split(""), d = a.length, h = [], f = d - d % 3, e, l = 0; l < f; l += 3) e = (a[l] << 16) + (a[l + 1] << 8) + a[l + 2], m.mergeArrays(h, [c[e >>
										18 & 63], c[e >> 12 & 63], c[e >> 6 & 63], c[e & 63]]);
								switch (d - f) {
										case 1:
												e = a[f] << 4;
												m.mergeArrays(h, [c[e >> 6 & 63], c[e & 63], c[64], c[64]]);
												break;
										case 2:
												e = (a[f] << 10) + (a[f + 1] << 2), m.mergeArrays(h, [c[e >> 12 & 63], c[e >> 6 & 63], c[e & 63], c[64]])
								}
								return h.join("")
						}
				},
				Fa = {
						encode: function(a) {
								for (var b = [], c = 0, d = a.length; c < d; c++) {
										var h = a.charCodeAt(c);
										128 > h ? b.push(h) : (127 < h && 2048 > h ? b.push(h >> 6 | 192) : (b.push(h >> 12 | 224), b.push(h >> 6 & 63 | 128)), b.push(h & 63 | 128))
								}
								return b
						}
				},
				ib = Q.inherit({
						resource: "webvisor",
						transports: [L, V],
						postParams: ["wv-data"],
						sendContent: function(a, b, c, d, h, f, e) {
								if (!a) return !1; - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
								a = {
										"wv-type": 1,
										"page-url": w().href,
										"wv-hit": c,
										"wv-data": T.encode(Fa.encode(a))
								};
								return this.send(a, {
										z: d,
										i: h,
										pct: b || ""
								}, f, e)
						}
				});
		m.throttle = function(a, b, c, d) {
				var h, f, e;
				return function() {
						f = arguments;
						e = this;
						h || function() {
								h = null;
								f && (a.apply(c || e, f), f = null, h = M(arguments.callee, b, d))
						}()
				}
		};
		var va = K.inherit({
						storage: null,
						storageKey: "dataBuffer",
						maxBufferSize: 255,
						flushTimeout: 1E4,
						active: !0,
						meta: null,
						onFlush: function() {},
						onFlushCtx: null,
						bufferExpireTime: 864E5,
						_initComponent: function() {
								va.superclass._initComponent.apply(this, arguments);
								this._data = [];
								this._packetNumber = 0;
								this._flushTID = null;
								this._saveToStorageThrottled = m.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
								if (this.storage) {
										var a = this.storage.get(this.storageKey);
										a && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
										this.clear()
								}
						},
						append: function(a, b) {
								m.mergeArrays(this._data,
										a);
								this._saveToStorageThrottled();
								this.active && ((b || this._data.length >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = m.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
						},
						activate: function() {
								this.active || (this.active = !0, this.append([]))
						},
						clear: function() {
								this._data.length = 0;
								this._flushTID = null;
								this.storage && this.storage.remove(this.storageKey)
						},
						_flush: function() {
								this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
								this._packetNumber++;
								this.clear()
						},
						_saveToStorage: function() {
								this.storage && this._data.length && this.storage.set(this.storageKey, {
										data: this._data,
										meta: this.meta,
										pnum: this._packetNumber,
										time: +new Date
								})
						}
				}),
				Ga = Q.inherit({
						resource: "webvisor",
						retry: !0,
						postParams: ["wv-data"],
						sendPacket: function(a, b, c, d, f, e, l, u) {
								if (!a || !a.length) return !1;
								a = {
										rn: m.random(),
										"page-url": b,
										wmode: 0,
										"wv-type": 0,
										"wv-hit": c,
										"wv-part": d + 1,
										"wv-check": m.fletcher(a),
										"wv-data": T.encode(a, !0)
								};
								return this.send(a, {
										z: f,
										i: e
								}, l, u)
						}
				}),
				Qa = va.inherit({
						protocol: "",
						counterId: "",
						counterType: "",
						meta: null,
						maxBufferSize: 7500,
						flushTimeout: 3E4,
						storageKey: "visorbuff",
						active: !1,
						_initComponent: function() {
								this.storage = new $({
										counterId: this.counterId
								});
								this._sender = new Ga({
										protocol: this.protocol,
										counterId: this.counterId,
										counterType: this.counterType
								});
								Qa.superclass._initComponent.apply(this, arguments)
						},
						onFlush: function(a, b, c) {
								this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
						}
				});
		m.toJSON = function(a) {
				if (a === ba) return "";
				if (null === a) return "null";
				switch (a.constructor) {
						case Boolean:
								return a.toString();
						case Number:
								return isFinite(a) ? a.toString() : "null";
						case String:
								return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"';
						case Array:
								for (var b = [], c = 0, d = a.length; c < d; c++) b[b.length] = m.toJSON(a[c]);
								return "[" + b.join(",") + "]";
						case Object:
								b = [];
								for (c in a) a.hasOwnProperty(c) && a[c] !== ba && (b[b.length] = m.toJSON(c) + ":" + m.toJSON(a[c]));
								return "{" + b.join(",") + "}";
						default:
								return "null"
				}
		};
		m.array2Props = function(a) {
				for (var b = a.length, c = {}, d = c, f = 0; f < b - 1; f++) {
						var e = a[f];
						d[e] = {};
						f < b - 2 && (d = d[e])
				}
				d[e] =
						a[b - 1];
				return c
		};
		var u = {
						_jScriptVersion: 0,
						getJScriptVersion: function() {
								u._jScriptVersion || (u._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
								return u._jScriptVersion
						},
						isIE: function() {
								return 5.8 >= u.getJScriptVersion()
						}
				},
				wa = {
						log: function() {
								f.console && console.log && (-1 < A.href.indexOf("_ym_debug=1") || f._ym_debug) && console.log.apply(console, arguments)
						}
				},
				Ha = Q.inherit({
						resource: "clmap",
						retry: !0,
						transports: [la],
						sendClick: function(a, b, c, d) {
								this.send({
										"page-url": a,
										"pointer-click": b
								}, {}, c, d)
						}
				});
		m.trim = function(a, b) {
				a = String(a).replace(/^\s+|\s+$/g, "");
				b && a.length > b && (a = a.substr(0, b));
				return a
		};
		var Eb = K.inherit({
						filter: null,
						ignoreTags: [],
						quota: 0,
						urlFilter: null,
						isTrackHash: !1,
						protocol: "",
						counterId: 0,
						counterType: 0,
						startTime: 0,
						MAX_LEN_PATH: 128,
						TIMEOUT_CLICK: 50,
						TIMEOUT_SAME_CLICKS: 1E3,
						DELTA_SAME_CLICKS: 2,
						tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
						_initComponent: function() {
								this._lastClick = null;
								this.hasQuota = !!this.quota;
								this._quota = this.quota;
								this._ignoreTags = [];
								if (this.ignoreTags)
										for (var a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && m.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
								this._cacheTags = {};
								for (var a = 59, b = String.fromCharCode, c = 0; c < this.tags.length; c++) this._cacheTags[this.tags[c]] = b(a), b(a), a++;
								this._sender = new Ha({
										protocol: this.protocol,
										counterId: this.counterId,
										counterType: this.counterType
								});
								this._start = !1;
								this.start()
						},
						destroy: function() {
								this.stop()
						},
						start: function() {
								if (!this._start) e.on(d, "click", this._handler, this);
								this._start = !0
						},
						stop: function() {
								this._start && e.un(d, "click", this._handler, this);
								this._start = !1
						},
						setTrackHash: function(a) {
								this.isTrackHash = a
						},
						_handler: function(a) {
								a = {
										el: F.getTarget(a),
										pos: F.getPos(a),
										button: F.getMouseButton(a),
										time: +new Date
								};
								if (this._isTrackingClick(a)) {
										var b = l.getElementSize(a.el),
												c = l.getElementXY(a.el),
												b = ["rn", m.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] ||
														1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)],
												c = w().href;
										this.isTrackHash ? m.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
										"function" == typeof this.urlFilter && (c = this.urlFilter(c));
										this._sender.sendClick(m.trim(c, Ia), b.join(":"));
										this._lastClick = a
								}
						},
						_isTrackingClick: function(a) {
								if (f.ymDisabledClickmap || "MetrikaPlayer" == f.name) return !1;
								var b = a.el.tagName;
								if ((2 == a.button || 3 == a.button) && "A" != b || this.filter && !this.filter(a.el, b)) return !1;
								for (var c = 0; c < this._ignoreTags.length; c++)
										if (this._ignoreTags[c] == b) return !1;
								for (b = a.el; b;) {
										if (l.classNameExists(b, "ym-clickmap-ignore")) return !1;
										b = b.parentNode
								}
								if (this._lastClick) {
										if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
										var b = Math.abs(this._lastClick.pos[0] - a.pos[0]),
												c = Math.abs(this._lastClick.pos[1] - a.pos[1]),
												d = a.time - this._lastClick.time;
										if (this._lastClick.el == a.el && b < this.DELTA_SAME_CLICKS && c < this.DELTA_SAME_CLICKS && d < this.TIMEOUT_SAME_CLICKS) return !1
								}
								if (this.hasQuota) {
										if (!this._quota) return !1;
										this._quota--
								}
								return !0
						},
						_getElPath: function(a) {
								for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += l.getElementNeighborPosition(a) || "", a = a.parentNode;
								return m.trim(b, this.MAX_LEN_PATH)
						}
				}),
				xa = K.inherit({
						_initComponent: function() {
								xa.superclass._initComponent.apply(this, arguments);
								this._executedMsgs = {};
								e.on(f, "message", this.RemoteControl__onMessage, this)
						},
						RemoteControl__onMessage: function(a) {
								if (/^https?:\/\/(.*?\.)?(metr(i(ca?|ka))?|analytics|metrika-(dev|test|ps)\.haze)\.yandex\.(ru|ua|by|kz|com(\.tr)?)$/.test(a.origin)) {
										try {
												var b =
														(new Function("return " + a.data))()
										} catch (c) {}
										b && b.id && b.code && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, (new Function("evt", b.code))(a))
								}
						}
				});
		f.Ya = f.Ya || {};
		Ya._metrika = Ya._metrika || {};
		Ya._metrika.counters = Ya._metrika.counters || {};
		Ya._metrika.hitParam = Ya._metrika.hitParam || {};
		Ya._globalMetrikaHitId = m.random();
		var A = w(),
				Ra, Ea, H = f.navigator,
				aa = f.screen,
				W = "https:" == A.protocol ? "https:" : "http:",
				Ma = "ver587".slice(3),
				Ia = u.isIE() ? 512 : 2048,
				Fb = u.isIE() ? 512 : 2048,
				Ja = u.isIE() ? 100 : 400,
				Ka = "noindex",
				Ta = 50,
				Gb = 15E3,
				Ua = RegExp("\\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$", "i"),
				Hb = +new Date,
				La, ya;
		f.Ya.Metrika = function(a, b, c, k) {
				var h = this;
				return x(function() {
						function y(a, b) {
								if (!a || !b) return !1;
								for (var c = [], d = 0; d < b.length; d++) c.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
								return RegExp("\\.(" + c.join("|") + ")$", "i").test(a)
						}

						function F(a) {
								a = a.target || a.srcElement;
								if (!a) return !1;
								3 == a.nodeType && (a = a.parentNode);
								for (var b = a.nodeName.toString().toLowerCase(); a.parentNode &&
										a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);) a = a.parentNode, b = a.nodeName.toString().toLowerCase();
								return a.href ? a : !1
						}

						function L(a, b) {
								return (a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "")
						}

						function z(a, b) {
								function c(a) {
										a = a.split(":");
										a = a[1] || "";
										a = a.replace(/^\/*/, "").replace(/^www\./, "");
										return a.split("/")[0]
								}
								return a && b ? c(a) == c(b) : a || b ? !1 : !0
						}

						function S(g, b, c) {
								function d(a, g) {
										a && g && (c ? k[a] = g : k[k.length] = [a, g].join(":"))
								}

								function e(a) {
										d(a, b[a] ? "1" : "")
								}
								b = b || {};
								var k = c ? {} : [],
										s = -1 *
										(new Date).getTimezoneOffset(),
										I = n();
								Ea || (Ea = I, Ra = s);
								d("j", u.getJavaEnabled() ? "1" : "");
								aa && d("s", aa.width + "x" + aa.height + "x" + (aa.colorDepth || aa.pixelDepth));
								f.devicePixelRatio && d("sk", f.devicePixelRatio);
								d("f", u.getFlashVersion());
								d("l", u.getSilverlightVersion());
								d("fpr", u.getFingerPrint());
								b.pa || d("w", T() + "x" + V());
								d("z", s);
								d("i", I);
								d("et", Math.round((new Date).getTime() / 1E3));
								d("en", l.getDocumentCharset());
								d("v", Ma);
								d("c", H.cookieEnabled ? "1" : "");
								d("jv", u.getJScriptVersion());
								d("la", u.getLanguage());
								P && d("wh", "1");
								I = "ar ln dl ad nb pa".split(" ");
								for (s = 0; s < I.length; s++) e(I[s]);
								I = ["va", "vt", "sn", "sa", "he"];
								b.nb && I.push("cl");
								for (s = 0; s < I.length; s++) {
										var N = I[s];
										d(N, b[N])
								}
								b.reqNum && (s = new $({
										counterId: a
								}), s.isEnabled() && (I = s.getStorageId(), (N = s.get("reqNum")) ? N++ : N = 1, s.set("reqNum", N), s.get("reqNum") == N ? (d("ls", I), d("rqn", N)) : (s.remove("reqNum"), s.clearStorageId(), 1 < N && (d("ls", I), d("rqn", 0)))));
								d("rn", m.random());
								d("hid", sa);
								d("ds", na());
								h._firstPaint || (h._firstPaint = oa(), d("fp", h._firstPaint));
								if (h._webvisor) {
										f.name || (f.name = Math.round(65535 * Math.random()));
										if (s = +f.name) 0 > s && (s *= -1), s %= 65535;
										d("wn", s || m.fletcher(f.name));
										try {
												f.history && d("hl", String(f.history.length))
										} catch (ob) {}
								}
								g = "undefined" == typeof g ? (g = q()) ? m.trim(g, Ja) : "" : m.trim(g, Ja);
								d("t", g);
								return c ? k : k.join(":")
						}

						function q() {
								var a = d.title;
								"string" != typeof a && (a = (a = d.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
								return a
						}

						function n() {
								for (var a = new Date, a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(),
												a.getSeconds()
										], b = "", c = 0; c < a.length; c++) b += 10 > a[c] ? "0" + a[c] : a[c];
								return b
						}

						function T() {
								var a = -1;
								d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientWidth : d.body && (a = d.body.clientWidth);
								return a
						}

						function V() {
								var a = -1;
								d.documentElement && "CSS1Compat" == d.compatMode ? a = d.documentElement.clientHeight : d.body && (a = d.body.clientHeight);
								return a
						}

						function da() {
								var a = f.performance || f.webkitPerformance,
										b = [];
								if (a = a && a.timing) {
										var c = a.navigationStart;
										if (c)
												for (b = [a.domainLookupEnd - a.domainLookupStart,
																a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount
														], b.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading : null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), b.push(a.domComplete ? a.domComplete - c : null), b.push(a.loadEventStart ? a.loadEventStart - c : null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart :
																null), b.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - c : null), a = 0; a < b.length; a++) c = b[a], null !== c && (0 > c || 36E5 < c) && (b[a] = null)
								}
								return b
						}

						function na() {
								var a = [],
										b = h._lastPerformanceTiming,
										c = da();
								if (b)
										for (var d = 0, f = b.length; d < f; d++) null === c[d] ? a.push(c[d]) : a.push(b[d] === c[d] ? "" : c[d]);
								else a = c;
								h._lastPerformanceTiming = c;
								return a.join(",")
						}

						function oa() {
								var a;
								if ("object" == typeof f.chrome && f.chrome.loadTimes) {
										if (a = f.chrome.loadTimes(), a.requestTime && a.firstPaintTime) return ~~(1E3 * (a.firstPaintTime -
												a.requestTime))
								} else if (f.performance && f.performance.timing && (a = f.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
								return null
						}

						function pa(a) {
								var b = d.referrer || "";
								if (RegExp("^https?://" + A.host + "/").test(b)) return !1;
								for (var c = a.patterns, f = 0; f < c.length; f++)
										if (b.match(RegExp(c[f], "i"))) {
												var e = a.params || [];
												if (e.length)
														for (var h = ea((RegExp.$1 || "").replace(/\+/g, "%20")), s = 0; s < e.length; s++) {
																if (h == ea(e[s])) return !0
														} else return !0
										}
								return !1
						}

						function ja(a, b) {
								var c = !1;
								if (a && "string" != typeof a && a.length)
										for (var f = 0; f < a.length; f++) {
												var e = a[f].selector,
														h = a[f].text,
														s = e.charAt(0),
														e = e.slice(1);
												if ("#" == s) {
														if (s = d.getElementById(e)) c = !0, b && U.unshift([s, s.innerHTML]), s.innerHTML = h
												} else if ("." == s)
														for (s = l.getElementsByClassName(e), e = 0; e < s.length; e++) {
																var c = !0,
																		k = s[e],
																		m = h;
																b && U.unshift([k, k.innerHTML]);
																k.innerHTML = m
														}
										}
								return c
						}

						function la() {
								for (var a = 0; a < U.length; a++) U[a][0].innerHTML = U[a][1]
						}

						function va(a, b) {
								a = a && a.replace(/^\?/, "");
								b = b && b.replace(/^#/, "");
								var c = "";
								if (a)
										for (var d =
														a.split("&"), f = 0; f < d.length; f++) {
												var e = d[f].split("=");
												"_openstat" == e[0] && (c = e[1])
										}
								b && 0 == b.indexOf("_openstat=") && (c = b.slice(10));
								c && (c = -1 < c.indexOf(";") ? ea(c) : xa(c.replace(/[-*_]/g, function(a) {
										return {
												"*": "+",
												"-": "/",
												_: "="
										}[a] || a
								})));
								return c && (c = c.split(";"), 4 == c.length) ? {
										service: c[0],
										campaign: c[1],
										ad: c[2],
										source: c[3]
								} : null
						}

						function ea(a) {
								try {
										return decodeURIComponent(a)
								} catch (b) {
										return ""
								}
						}

						function xa(a) {
								for (; a.length % 4;) a += "=";
								var b, c, d, f, e, h = 0,
										k = "";
								do {
										b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
										c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
										f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
										e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
										if (0 > b || 0 > c || 0 > f || 0 > e) return null;
										d = b << 18 | c << 12 | f << 6 | e;
										b = d >> 16 & 255;
										c = d >> 8 & 255;
										d &= 255;
										k = 64 == f ? k + String.fromCharCode(b) : 64 == e ? k + String.fromCharCode(b, c) : k + String.fromCharCode(b, c, d)
								} while (h < a.length);
								a = k;
								f = "";
								for (b = k = h = e = 0; e <
										a.length;) h = a.charCodeAt(e), 128 > h ? (f += String.fromCharCode(h), e++) : 191 < h && 224 > h ? (k = a.charCodeAt(e + 1), f += String.fromCharCode((h & 31) << 6 | k & 63), e += 2) : (k = a.charCodeAt(e + 1), b = a.charCodeAt(e + 2), f += String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | b & 63), e += 3);
								return f
						}

						function za(g) {
								var p = !1;
								if (Ya._metrika.hitParam[R]) {
										if (1 != c || Ya._metrika.counters[R]) return !1;
										p = !0
								}
								Ya._metrika.counters[R] = h;
								Ya._metrika.hitParam[R] = 1;
								h._webvisor = !k && (v && v.webvisor || jb);
								h._directCampaign = v && v.directCampaign;
								v && v.trackHash && E(!0);
								if (!k &&
										!p) {
										h.replacePhones();
										var r = new ia({
														counterId: a
												}),
												t = r.read("visorc");
										"b" != t && "w" != t && (t = "");
										if (!r.isEnabled() || Aa("opera mini")) t = "b";
										La = +new Date;
										var p = new hb({
														protocol: W,
														counterType: c,
														counterId: a
												}),
												l = {
														ut: Y,
														he: v ? ~~v.httpError : 0,
														ad: 1 == c && f.Ya && f.Ya.Direct ? !0 : !1,
														saveRef: !0
												};
										wa.log("PageView. Counter " + a + ". URL: " + A.href + ". Referer: " + d.referrer, ". Params: ", b);
										p.sendHit(A.href, q(), d.referrer, b, l, t, g, function(a) {
												ya || (ya = +new Date);
												a = a || {};
												var b = a.webvisor || {};
												if (O) {
														var c = +b.recp;
														if (!isFinite(c) || 0 >
																c || 1 < c) t = "w";
														t || (t = sa % 1E4 / 1E4 < c ? "w" : "b");
														r.create("visorc", t, 30);
														"w" == t ? (O.start(), c = b.arch_type, (b = b.urls) && c && O.uploadPages(b, c)) : O.stop()
												}
												b = a.mp2;
												a = h;
												r.erase("mp2_substs");
												if (b) {
														b: if ((c = b.conditions) && c.length)
																		for (var g = 0; g < c.length; g++) {
																				var p;
																				if ("ref" == c[g].type) p = pa(c[g]);
																				else if (p = "adv" == c[g].type) {
																						var k = c[g],
																								l = Ya._metrika.counter._directCampaign,
																								n = k.ServiceNamePattern,
																								G = k.RefererPattern;
																						p = l ? k.direct_orders : k.direct_camp;
																						var u = d.referrer,
																								q = A.search,
																								q = q && q.replace(/^\?/, ""),
																								w = {};
																						if (q)
																								for (var q =
																												q.split("&"), v = 0; v < q.length; v++) {
																										var B = q[v].split("=");
																										w[ea(B[0])] = ea(B[1])
																								}
																						for (var q = va(A.search, A.hash), v = {}, B = ["source", "medium", "campaign", "term", "content"], x = 0; x < B.length; x++) w["utm_" + B[x]] && (v[B[x]] = w["utm_" + B[x]]);
																						x = l ? "direct.yandex.ru" : q && q.service || v.source;
																						B = !1;
																						if (!B && n && n.length)
																								for (var y = 0; y < n.length; y++)
																										if (RegExp(n[y], "i").test(x)) {
																												B = !0;
																												break
																										}
																						if (!B && G && G.length)
																								for (n = 0; n < G.length; n++)
																										if (RegExp(G[n], "i").test(u)) {
																												B = !0;
																												break
																										}!B && k.google_adwords && w.gclid && (B = !0);
																						!B && k.yandex_direct && w.yclid &&
																								(B = !0);
																						if (B && p && p.length && (B = !1, k = l || q && q.campaign || v && v.campaign))
																								for (l = 0; l < p.length; l++)
																										if (p[l] == k) {
																												B = !0;
																												break
																										}
																						p = B
																				}
																				if (p) {
																						c[g].track_id && r.create("mp2_track", c[g].track_id, 43200);
																						break b
																				}
																		}
																c = r.read("mp2_track");b = b.substs && b.substs[c];c && b ? (r.create("mp2_substs", m.toJSON(b)), b = ja(b), a.params("__ym", b ? "mp_trackid" : "mp_trackid_bad", c)) : la()
												} else la();
												e.on(f, "load", h.replacePhones, h);
												h._inited = !0
										})
								}
								Fa();
								v && (v.enableAll ? (fa(!0), qa(!0), ra()) : (v.clickmap && qa(v.clickmap), v.trackLinks && fa(v.trackLinks), v.accurateTrackBounce &&
										ra(v.accurateTrackBounce), v.ad && ad()));
								h._webvisor && (O = new Va(W, a, c, v, sa, h))
						}

						function fa(a) {
								var b = {
										delay: Ta
								};
								switch (typeof a) {
										case "string":
												b.on = !0;
												break;
										case "object":
												b.on = !0;
												b.delay = "number" != typeof a.delay ? Ta : a.delay;
												break;
										case "boolean":
												b.on = a;
												break;
										default:
												return
								}
								h._trackLinks = b
						}

						function Fa() {
								fa(!1);
								e.on(d, "click", function(a) {
										h._trackLinks.on && Ga(a)
								})
						}

						function Ga(a) {
								var b = F(a);
								if (b) {
										var c = !1,
												d = "" + b.href,
												e = d ? d.split(/\?/)[0] : "",
												k = function(a) {
														var c = lb(b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
														J.sendClickLink(d,
																d == c ? "" : c, a)
												},
												m = function() {
														var c;
														var d = b.target;
														c = !1;
														b.hostname ? (d && "_self" != d && "_top" != d && "_parent" != d || (c = !0), (d = a.shiftKey || a.ctrlKey || a.altKey) || a.modifiers && f.Event && (d = a.modifiers & f.Event.CONTROL_MASK || a.modifiers & f.Event.SHIFT_MASK || a.modifiers & f.Event.ALT_MASK), c = c && !d) : c = !1;
														return c ? h._trackLinks.delay : 0
												};
										if (Ua.test(e) || Ua.test(d) || y(d, Z) || y(e, Z)) c = !0;
										var n = l.classNameExists(b, "ym-disable-tracklink"),
												e = l.classNameExists(b, "ym-external-link");
										n || (n = {
												ln: !0,
												dl: c
										}, e ? (n.delay = m(), k(n)) : L(w().hostname,
												b.hostname) ? c && (n.ln = !1, n.delay = m(), k(n)) : d && -1 != d.search(/^ *(data|javascript):/i) || (n.ut = Ka, n.delay = m(), k(n)))
								}
						}

						function qa(b) {
								"undefined" == typeof b && (b = !0);
								!0 === b && (b = {});
								h._clickmap && h._clickmap.destroy();
								b && (h._clickmap = new Eb({
										filter: b.filter,
										ignoreTags: b.ignoreTags,
										quota: b.quota,
										urlFilter: b.urlFilter,
										isTrackHash: b.isTrackHash,
										protocol: ta,
										counterId: a,
										counterType: c,
										startTime: Hb
								}))
						}

						function Ha(a, b) {
								function c() {
										if (!A) {
												y && clearTimeout(y);
												var d = b,
														e;
												e = v ? w : w + +new Date - x;
												d -= e;
												0 > d && (d = 0);
												y = M(function() {
														A = !0;
														m(!1);
														a()
												}, d, "trackUserTime")
										}
								}

								function h() {
										v = n = q = !0;
										w += +new Date - x;
										x = +new Date;
										c()
								}

								function k() {
										n || q || (w = 0);
										x = +new Date;
										n = q = !0;
										v = !1;
										c()
								}

								function l() {
										q || (n = !0, v = !1, q = !0, c())
								}

								function m(a) {
										for (var b = 0; b < z.length; b += 3)
												if (a) e.on(z[b], z[b + 1], z[b + 2]);
												else e.un(z[b], z[b + 1], z[b + 2])
								}
								var n = !1,
										q = !1,
										v = !0,
										w = 0,
										x = +new Date,
										y = null,
										A = !1;
								if (u.isIE()) M(a, b, "trackUserTime");
								else {
										var z = [f, "blur", h, f, "focus", k, d, "click", l, d, "mousemove", l, d, "keydown", l, d, "scroll", l];
										m(!0);
										c()
								}
						}

						function ra(b) {
								"number" != typeof b && (b =
										Gb);
								if (!h._isAccurateTrackBounce) {
										h._isAccurateTrackBounce = !0;
										var c = new $({
														counterId: a
												}),
												e = c.get("lastHit");
										c.set("lastHit", +new Date);
										((c = c.get("lastHit")) && (!e || e < c - 18E5) || !z(d.referrer, w().href) || 0.1 > Math.random()) && Ha(function() {
												h.notBounce()
										}, b)
								}
						}

						function D(a) {
								function b() {
										var a = w().hash.split("#")[1];
										if ("undefined" == typeof a) return !1;
										var c = a.indexOf("?");
										0 < c && (a = a.substring(0, c));
										return a
								}
								var c = b();
								(function G() {
										var d = b();
										d !== c && (a(), c = d);
										Da = M(G, 200, "trackHash")
								})()
						}

						function E(a) {
								if (!1 === a) P &&
										("onhashchange" in f ? e.un(f, "hashchange", ga) : clearInterval(Da), P = !1);
								else if (a = ga, !P) {
										if ("onhashchange" in f) e.on(f, "hashchange", a);
										else D(a);
										P = !0
								}
								h._trackHash = P
						}

						function ga() {
								ha = ca = ua;
								var a = {
										ut: Y,
										ad: 1 == c && f.Ya && f.Ya.Direct ? !0 : !1,
										wh: !0,
										saveRef: !0
								};
								J.sendAjaxHit(w().href, q(), ha, a);
								ua = w().href
						}
						var sa = Math.round(1073741824 * Math.random()),
								R, Y = "",
								ta = W,
								ua = ca = A.href,
								ha = "",
								v;
						Ya._metrika.counter || (Ya._metrika.counter = h);
						"object" == typeof a && (v = a, k = a.defer, Y = a.ut, c = a.type, b = a.params, ta = a.onlyHttps ? "https:" : W,
								a = a.id);
						a = a || 0;
						/^\d+$/.test(a) || (a = 0);
						c = c || 0;
						R = a + ":" + c;
						if (Ya._metrika.counters[R]) return Ya._metrika.counters[R];
						u._silverlightVersion = "";
						u.getSilverlightVersion = function() {
								if (!u._silverlightVersion)
										if (f.ActiveXObject) try {
												var a = new ActiveXObject("AgControl.AgControl"),
														b = function(a, b, c, g) {
																for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += g;
																b[c] -= g
														},
														c = [1, 0, 0, 0];
												b(a, c, 0, 1);
												b(a, c, 1, 1);
												b(a, c, 2, 1E4);
												b(a, c, 2, 1E3);
												b(a, c, 2, 100);
												b(a, c, 2, 10);
												b(a, c, 2, 1);
												b(a, c, 3, 1);
												u._silverlightVersion = c.join(".")
										} catch (d) {} else if (a =
												H.plugins["Silverlight Plug-In"]) u._silverlightVersion = a.description;
								return u._silverlightVersion || ""
						};
						u._flashVersion = 0;
						u.getFlashVersion = function() {
								if (!u._flashVersion) {
										var a = f.navigator;
										if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
												var b = a.plugins["Shockwave Flash"].description;
												b && (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) && (u._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/,
														"."))
										} else if ("undefined" != typeof f.ActiveXObject) try {
												if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
														var c = b.GetVariable("$version");
														c && (u._flashVersion = c.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, ""))
												}
										} catch (d) {}
								}
								return u._flashVersion
						};
						u.getLanguage = function() {
								return (f.navigator && (H.language || H.browserLanguage) || "").toLowerCase()
						};
						u.getJavaEnabled = function() {
								try {
										return H.javaEnabled()
								} catch (a) {
										return !1
								}
						};
						m.fnv32a = function(a) {
								for (var b = 2166136261, c = 0, d = a.length; c < d; ++c) b ^= a.charCodeAt(c),
										b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
								return b >>> 0
						};
						u.getFingerPrint = function() {
								var a = [];
								if (H.plugins && H.plugins.length)
										for (var b = 0; b < H.plugins.length; b++) {
												var c = H.plugins[b];
												m.mergeArrays(a, [c.name, c.version, c.description, c.filename])
										}
								if (H.mimeTypes && H.mimeTypes.length)
										for (b = 0; b < H.mimeTypes.length; b++) c = H.mimeTypes[b], m.mergeArrays(a, [c.type, c.description, c.suffixes]);
								return m.fnv32a(a.join(";")) + "01"
						};
						var X = Q.inherit({
										trimParams: !1,
										resource: "watch",
										retry: !0,
										postParams: ["site-info"],
										sendHit: function(a,
												b, c, d, e) {
												this._hitExt(a, b, c, d, {
														ut: e,
														ar: !0,
														saveRef: !0
												})
										},
										sendAjaxHit: function(a, b, c, d) {
												this._hitExt(a, b, c, null, d)
										},
										sendParams: function(a) {
												this._hitExt(w().href, "", "", a, {
														ar: !0,
														pa: !0,
														onlyData: !0
												})
										},
										sendGoal: function(a, b) {
												if (!/[\/&=?#]/.test(a)) {
														var c = a ? "goal://" + w().hostname + "/" + encodeURIComponent(a) : w().href,
																e = q(),
																f = a ? w().href : d.referrer;
														this._hitExt(c, e, f, b, {
																ar: !0
														})
												}
										},
										sendClickLink: function(a, b, c) {
												this._hitExt(a, b, w().href, null, c)
										},
										sendExtLink: function(a, b, c, d) {
												this._hitExt(a, "", w().href, d, {
														ar: !0,
														ln: !0,
														ut: Ka
												})
										},
										sendFileUpload: function(a, b, c, d) {
												this._hitExt(a, "", w().href, d, {
														ar: !0,
														ln: !0,
														dl: !0
												})
										},
										sendNotBounce: function(a) {
												this._hitExt(w().href, "", "", null, {
														cl: a,
														ar: !0,
														nb: !0,
														onlyData: !0
												})
										},
										sendVideoAction: function(a, b, c, d) {
												this._hitExt(c, d || "", "", null, {
														ar: !0,
														va: a,
														vt: +b
												})
										},
										sendSocialClick: function(a, b, c) {
												this._hitExt(c || w().href, "", "", null, {
														ar: !0,
														sn: m.trim(a, 64),
														sa: m.trim(b, 64)
												})
										},
										_hitExt: function(a, b, c, d, e, h, k, l) {
												function n(a, b) {
														b && (q[a] = b)
												}
												e = e || {};
												h = h || {};
												if ("MetrikaPlayer" != f.name) {
														c = "undefined" !=
																typeof c ? c : ca;
														var q = {};
														e.ar && !e.onlyData && (c = this._prepareHitUrl(c), a = this._prepareHitUrl(a));
														e.reqNum = !0;
														n("page-ref", m.trim(c, Ia));
														n("page-url", m.trim(a, Ia)); - 1 != w().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? n("ut", Ka) : "undefined" != typeof e.ut && n("ut", m.trim(e.ut, 64));
														if (d)
																if (a = m.toJSON(d), this.trimParams && a.length > Fb) var u = !0;
																else n("site-info", a);
														e.saveRef && (ca = c);
														m.mixin(h, S(b, e, !0));
														this.send(q, h, function() {
																u && (new X({
																		protocol: this.protocol,
																		counterType: this.counterType,
																		counterId: this.counterId
																})).sendParams(d);
																k && k.apply(l, arguments)
														}, this)
												}
										},
										_prepareHitUrl: function(a) {
												var b = w(),
														c = b.host,
														b = b.href;
												if (!a) return b;
												if (-1 != a.search(/^\w+:\/\//)) return a;
												var d = a.charAt(0);
												if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
												if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
												if ("/" == d) {
														if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
												} else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
												return a
										}
								}),
								Qa = ka.inherit({
										id: "script",
										request: function(a, b,
												c, e) {
												var h = "_ymjsp" + m.random(),
														k = d.createElement("script");
												f[h] = x(function(a) {
														try {
																delete f[h]
														} catch (b) {
																f[h] = ba
														}
														c.call(e, !0, a);
														k.parentNode && k.parentNode.removeChild(k)
												}, "transport.script");
												k.type = "text/javascript";
												k.src = this._buildUrl(a, m.mixin({
														wmode: 5,
														callback: h
												}, b));
												a = d.getElementsByTagName("head")[0];
												a.insertBefore(k, a.firstChild);
												return !0
										}
								}),
								hb = X.inherit({
										transports: [Qa],
										trimParams: !0,
										sendHit: function(a, b, c, d, e, f, h, k, l) {
												var m = {};
												f && (m.vc = f);
												h && (m.pr = 1);
												this._hitExt(a, b, c, d, e, m, k, l)
										}
								}),
								ib = K.inherit({
										sampling: 0.01,
										counterId: 26302566,
										_initComponent: function() {
												ib.superclass._initComponent.apply(this, arguments);
												this._sender = new X({
														counterId: this.counterId,
														retry: !1
												})
										},
										log: function() {
												Math.random() < this.sampling && this._sender.sendHit(A.href, "", "", m.array2Props(arguments))
										}
								}),
								U = [];
						Q.retransmit();
						var J = new X({
										protocol: ta,
										counterType: c,
										counterId: a
								}),
								O;
						h.replacePhones = x(function() {
								try {
										var b = (new ia({
												counterId: a
										})).read("mp2_substs");
										if (b) {
												var c = (new Function("return " + b))();
												c && ja(c, !0)
										}
								} catch (d) {}
						}, "counter.replacePhones");
						h.reachGoal = x(function(b, c) {
								wa.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
								J.sendGoal(b, c);
								return !0
						}, "counter.reachGoal");
						h.trackLinks = x(function(a) {
								fa(a)
						}, "counter.trackLinks");
						h.hit = x(function(b, c, d, e, f) {
								b && (wa.log("PageView. Counter " + a + ". URL: " + b + ". Referer: " + d + ". Params: ", e), J.sendHit(b, c, d, e, f))
						}, "counter.hit");
						h.params = x(function(b) {
								b && (1 < arguments.length && (b = m.array2Props(arguments)), wa.log("User params. Counter " + a + ". Params: ", b), J.sendParams(b))
						}, "counter.params");
						h.file = x(function(a, b, c, d) {
								a && J.sendFileUpload(a, b, c, d)
						}, "counter.file");
						h.extLink = x(function(a, b, c, d) {
								a && J.sendExtLink(a, b, c, d)
						}, "counter.extLink");
						h.notBounce = x(function() {
								var a = 0;
								La && ya && (a = ya - La);
								J.sendNotBounce(a)
						}, "counter.notBounce");
						var Z = [];
						h.addFileExtension = function(a) {
								"string" == typeof a ? Z.push(a) : Z = Z.concat(a)
						};
						h.clickmap = function(a) {
								qa(a)
						};
						h.accurateTrackBounce = function(a) {
								ra(a)
						};
						var Da = null,
								P = !1;
						h.trackHash = function(a) {
								E(a)
						};
						h.video = x(function(a, b, c, d) {
								var e = ["end", "play", "pause", "seek"];
								if (a && c) {
										a: {
												for (var f = 0, h = e.length; f < h; f += 1)
														if (a === e[f]) {
																e = f;
																break a
														}
												e = -1
										} - 1 !== e && J.sendVideoAction(a, b, c, d)
								}
						}, "counter.video");
						h.social = x(function(a, b, c) {
								a && b && J.sendSocialClick(a, b, c)
						}, "counter.social");
						h.enableAll = function() {
								fa(!0);
								qa(!0);
								ra()
						};
						h.uploadPage = function() {};
						h._performanceTiming = da;
						if (a) e.onDocumentVisible(za)
				}, "init")()
		};
		f.Ya._metrika.remoteCtrlInited || (f.Ya._metrika.remoteCtrlInited = !0, new xa);
		f.Ya.Metrika.counters = function() {
				var a = [];
				m.forEachKey(f.Ya._metrika.counters, function(b,
						c) {
						var d = b.split(":");
						a.push({
								id: +d[0],
								type: +d[1],
								accurateTrackBounce: c._isAccurateTrackBounce,
								clickmap: c._clickmap && c._clickmap._start,
								oldCode: !!f.ya_cid,
								trackHash: !!c._trackHash,
								trackLinks: c._trackLinks && c._trackLinks.on,
								webvisor: !!c._webvisor
						})
				});
				return a
		};
		f.ya_cid && new Ya.Metrika(f.ya_cid, f.ya_params, f.ya_class);
		f.ya_cid && !f.ya_hit && (f.ya_hit = function(a, b) {
				Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
		});
		y = f.yandex_metrika_callback;
		L = f.yandex_metrika_callbacks;
		"function" == typeof y && y();
		if ("object" == typeof L)
				for (y = 0; y < L.length; y++)
						if (S = L[y]) L[y] = null, S();
		na("yandex_metrika_callback");
		na("yandex_metrika_callbacks");
		L = ["link", "click", "scroll", "res"];
		for (y = 0; y < L.length; y++)
				if (S = L[y] + "map", -1 != A.href.search("ym_playback=" + S)) {
						oa(W + "//metrika.yandex.ru/js/" + S + "/_loader.js");
						break
				}
		f.Ya.Metrika.informer = function(a) {
				var b = !!Ya.Metrika._informer;
				Ya.Metrika._informer = a;
				b || oa(W + "//mc.yandex.ru/metrika/informer.js")
		};
		(function() {
				var a = u.getJScriptVersion();
				if (!a || 5.8 < a)
						if ("complete" == d.readyState) pa();
						else e.on(f, "load", pa)
		})();
		(function() {
				var a = function() {
								var a = d.getElementsByTagName("body")[0],
										b = d.createElement("iframe");
								b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + m.random();
								b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
								a.appendChild(b);
								M(function() {
										a.removeChild(b)
								}, 1E4, "ad")
						},
						b = function() {
								f.removeEventListener("load", b, !1);
								a()
						},
						c = f.performance;
				m.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" ==
						W && "object" == typeof c && f.addEventListener && (c.timing && c.timing.loadEventStart ? a() : f.addEventListener("load", b, !1)))
		})()
})(this, this.document);
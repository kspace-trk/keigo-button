import { openBlock as r, createElementBlock as s } from "vue";
const _ = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, c] of o)
    n[e] = c;
  return n;
}, a = {};
function l(t, o) {
  return r(), s("button", null, "これがブットンだ！！！！");
}
const i = /* @__PURE__ */ _(a, [["render", l]]), f = {
  install(t, o = {}) {
    t.component("KeigoButton", i);
  }
};
export {
  f as default
};

const fs = require("fs");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];

global.requestAnimationFrame = (cb) => { cb(0); return 1; };
global.cancelAnimationFrame = () => {};
global.window = global;
global.localStorage = { getItem: () => null, setItem: () => {} };
global.navigator = { language: "en" };
global.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
global.location = { hash: "" };
global.scrollY = 0;
global.devicePixelRatio = 1;
global.AudioContext = null;
global.openWaitlist = () => {};

global.document = {
  documentElement: { lang: "", setAttribute() {}, classList: { toggle() {} } },
  title: "",
  body: { style: {} },
  getElementById(id) {
    const el = {
      id, style: { display: "" },
      classList: { add() {}, remove() {}, toggle() {}, contains: () => false, on: false },
      setAttribute() {}, getAttribute: () => null,
      addEventListener() {}, removeEventListener() {},
      querySelectorAll: () => [], querySelector: () => null,
      dataset: {}, innerHTML: "", textContent: "", hidden: false,
      appendChild() {}, removeAttribute() {}, click() {},
      matches: () => false, contains: () => false,
      getBoundingClientRect: () => ({ width: 800, height: 600, top: 0, left: 0 })
    };
    if (id === "engineTeaserScreen" || id === "engineGameCanvas") el._bound = false;
    return el;
  },
  querySelectorAll: () => [],
  querySelector: () => ({ classList: { toggle() {} } }),
  addEventListener() {}
};

try {
  eval(script);
  console.log("FULL SCRIPT OK");
} catch (e) {
  console.error("RUNTIME ERROR:", e.message);
  console.error(e.stack?.split("\n").slice(0, 8).join("\n"));
}

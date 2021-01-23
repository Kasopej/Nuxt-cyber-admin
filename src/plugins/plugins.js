import jsFunction from "../function/function";

let displayPlugin = {
  install(Vue) {
    Vue.m = jsFunction;
    Vue.prototype.$m = jsFunction;
  },
};

export default displayPlugin;

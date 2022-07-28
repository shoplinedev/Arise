(() => {
    "use strict";
    class ScriptLoad {
        constructor() {
            this.jsUrlList = {};
        }
        set(url) {
            if (this.jsUrlList[url]) return;
            this.jsUrlList[url] = url;
            ScriptLoad.loadScript(url);
        }
        static loadScript(url) {
            this.creatScriptTag(url);
        }
        static creatScriptTag(url) {
            const script = document.createElement("script");
            script.src = url;
            script.defer = false;
            script.async = false;
            script.onerror = err => {
                console.error(`asset file ${url} loading error`, err);
            };
            const handler = () => {
                document.body.appendChild(script);
            };
            if ("complete" === document.readyState) handler(); else {
                document.addEventListener("DOMContentLoaded", handler);
                script.onload = () => {
                    document.removeEventListener("DOMContentLoaded", handler);
                };
            }
            return script;
        }
    }
    window.__loaded_js__ = new ScriptLoad;
})();
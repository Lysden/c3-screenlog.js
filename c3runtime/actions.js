"use strict";

{
  C3.Plugins.LysdenArt_screenlogjs.Acts = {
    initlog(json) {
      function isJSON(str) {
        if (typeof str !== "string") {
          return false;
        }
        try {
          JSON.parse(str);
          return true;
        } catch (e) {
          return false;
        }
      }

      if (isJSON(json)) {
        let obj = JSON.parse(json);
        this.PostToDOM("init-log", { "json": obj });
      } else {
        console["warn"]("Screenlog-Plugin: String is not a valid JSON!");
      }
    },

    deleteLog() {
			this.PostToDOM("destroy-log");
		},

		clearLog() {
			this.PostToDOM("clear-log");
		},

    log(string) {
        this.PostToDOM("log", { "string": string.toString() });
    },

    warn(string) {
        this.PostToDOM("warn", { "string": string.toString() });
    },

    error(string) {
        this.PostToDOM("error", { "string": string.toString() });
    },
  };
}

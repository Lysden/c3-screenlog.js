"use strict";

{
  // Update the DOM_COMPONENT_ID to be unique to your plugin.
  // It must match the value set in instance.js as well.
  const DOM_COMPONENT_ID = "lysdenart_screenlogjs_plugin";

  // This class handles messages from the runtime, which may be in a Web Worker.
  const HANDLER_CLASS = class ScreenlogjsHandler extends self.DOMHandler {
    constructor(iRuntime) {
      super(iRuntime, DOM_COMPONENT_ID);

      
      this.AddRuntimeMessageHandlers([
        ["init-log", e => this._OnInitLog(e)],
        ["destroy-log", e => this._OnDestroyLog(e)],
        ["clear-log", e => this._OnClearLog(e)],
      ]);
    }
  
    _OnInitLog(e) {
      screenLog.init(e.json);
    }
  
    _OnDestroyLog(e) {
      screenLog.destroy();
    }

    _OnClearLog(e) {
      screenLog.clear();
    }
  };

  self.RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}

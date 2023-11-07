"use strict";

{
  const DOM_COMPONENT_ID = "lysdenart_screenlogjs_plugin";

  C3.Plugins.LysdenArt_screenlogjs.Instance = class ScreenlogjsInstance extends (
    C3.SDKInstanceBase
  ) {
    constructor(inst, properties) {
      super(inst, DOM_COMPONENT_ID);

     /*  this.AddDOMMessageHandler("InitLog", (e) => {
        console.log("from instance", e);
        //	this.Trigger(C3.Plugins.LysdenArt_GlobalVarsExposed.Cnds.OnGetData);
      }); */

			
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    LoadFromJson(o) {
      // load state for savegames
    }
  };
}

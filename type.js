"use strict";

{
  const SDK = self.SDK;

  const PLUGIN_CLASS = SDK.Plugins.LysdenArt_screenlogjs;

  PLUGIN_CLASS.Type = class LysdenArtScreenlogjsType extends SDK.ITypeBase {
    constructor(sdkPlugin, iObjectType) {
      super(sdkPlugin, iObjectType);
    }
  };
}

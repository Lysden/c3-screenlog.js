"use strict";

{
	const DOM_COMPONENT_ID = 'lysdenart_screenlogjs_plugin';
	
	C3.Plugins.LysdenArt_screenlogjs = class ScreenlogjsPlugin extends C3.SDKDOMPluginBase
	{
		constructor(opts)
		{
			super(opts, DOM_COMPONENT_ID);

			this.AddElementMessageHandler('OnInitLog', (sdkInst, e) => sdkInst._OnGetData(e));
		}
		
		Release()
		{
			super.Release();
		}
	};
}
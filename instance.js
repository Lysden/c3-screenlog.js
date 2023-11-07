"use strict";

{
	const SDK = self.SDK;

	const PLUGIN_CLASS = SDK.Plugins.LysdenArt_screenlogjs;
	
	PLUGIN_CLASS.Instance = class LysdenArtScreenLogInstance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)	{	super(sdkType, inst);	}
		
		Release(){}
		OnCreate(){}
		OnPropertyChanged(id, value){}
		
	};
}
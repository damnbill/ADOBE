
//Author: Vincent Laquerre
// fixing time remap by substracting one frame to last keyframe

// get the currently selected layer
var curComp = app.project.activeItem;
var selectedLayer = curComp.selectedLayers[0];

// Enable time remapping for the layer
selectedLayer.timeRemapEnabled = true;

//get value and time
var secondKeyframeValue = selectedLayer.property("ADBE Time Remapping").keyValue(2);
var secondKeyframeTime = selectedLayer.property("ADBE Time Remapping").keyTime(2);

//value - 1 frame
var newKeyframeValue = secondKeyframeValue - curComp.frameDuration;

// Set the new value for the second keyframe
selectedLayer.property("ADBE Time Remapping").setValueAtTime(secondKeyframeTime, newKeyframeValue);
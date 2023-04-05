// get the currently selected layer
var curComp = app.project.activeItem;
var selectedLayer = curComp.selectedLayers[0];

// split the duplicated layer in two
var compDuration = curComp.duration;
var splitTime = compDuration / 2;

// duplicate the selected layer
var fadeoutLayer = selectedLayer.duplicate();
var fadeinLayer = fadeoutLayer.duplicate();

// set names 
fadeoutLayer.name = "fadeout";
fadeinLayer.name = "fadein";

// move around
curComp.layer("fadeout").startTime = -compDuration/2 ;
curComp.layer("fadeout").inPoint = 0;
curComp.layer("fadeout").outPoint = 1;
curComp.layer("fadein").startTime = compDuration/2 ;
curComp.layer("fadein").inPoint = compDuration-1;

// keyframe opacity
curComp.layer("fadeout").property("Opacity").setValueAtTime(0, 100);
curComp.layer("fadeout").property("Opacity").setValueAtTime(1, 0);
curComp.layer("fadein").property("Opacity").setValueAtTime(compDuration, 100);
curComp.layer("fadein").property("Opacity").setValueAtTime(compDuration-1, 0);

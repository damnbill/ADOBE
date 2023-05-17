
//Author: Vincent Laquerre
// SAVE INCREMENTAL
function savedocincremental()
{
	const doc = app.activeDocument;

	//get filepath
	var outputFolderPath = doc.path;

    // get the filename and parse int
    var string = doc.name;
    var versionNumber = string.match(/\d+/);
    var incrementedVersion = parseInt(versionNumber) + 1;
    var incrementedString = string.replace(/\d+/, incrementedVersion);

    // DEBUG alert("new file name : " + incrementedString );
	
	//prompt for confirmation
	//var message = "Save to : " + outputFolderPath + "/" + incrementedString;
	var choice = confirm("Save to : " + outputFolderPath + "/" + incrementedString);
	
	if (choice == true ) {
		//save
		doc.saveAs(File(outputFolderPath + "/" + incrementedString));
    	doc.save();
	}
    else {
		
	}

}
savedocincremental();
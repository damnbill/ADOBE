
//Author: Vincent Laquerre
// INCREMENTAL VERSION SAVE FOR PSD

#target Photoshop
function incremetalversionsavePSD()
{
	const doc = app.activeDocument;

	//get filepath
	var outputFolderPath = decodeURI(doc.path);
	//debug// alert("The path to the current document is: " + outputFolderPath);
	
	// get the filename and parse int
    var string = doc.name;
    var versionNumber = string.match(/\d+/);
    var incrementedVersion = parseInt(versionNumber) + 1;
    var incrementedString = string.replace(/\d+/, incrementedVersion);
	
	//prompt for confirmation
	//var message = "Save to : " outputFolderPath + "/" + newFileName;
	var choice = confirm("Save to : " + outputFolderPath + "/" + incrementedString);
	
	if (choice == true ) {
		//save
		doc.saveAs(File(outputFolderPath + "/" + incrementedString));
    	doc.save();
	}
    else {
		
	}

}
incremetalversionsavePSD();
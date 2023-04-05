
//Author: Vincent Laquerre
// SAVE TOKENS (based on current date and folder structure) 

#target Photoshop
function SaveDocWithDateAndClientproject()
{
	const doc = app.activeDocument;

	//get the current date formatted like this: yyyymmddhhmin
	var today = new Date();
	var yyyy = today.getFullYear();
	var mm = today.getMonth()+1; //January is 0!
	var dd = today.getDate();
	var hh = today.getHours();
	var min = today.getMinutes();
	
	//assemble date
	var curDate = "_" + yyyy + mm + dd + hh + min ;

	//get filepath
	var outputFolderPath = decodeURI(doc.path);
	//debug// alert("The path to the current document is: " + outputFolderPath);
	
	
	//get clientName and projectName
	var clientName = outputFolderPath.split("/")[3];
	var projectName = outputFolderPath.split("/")[4];

	//assemble filename
	var newFileName = clientName + "-" + projectName + curDate + ".ai";

	//prompt for confirmation
	//var message = "Save to : " outputFolderPath + "/" + newFileName;
	var choice = confirm("Save to : " + outputFolderPath + "/" + newFileName);
	
	if (choice == true ) {
		//save
		doc.saveAs(File(outputFolderPath + "/" + newFileName));
    	doc.save();
	}
    else {
		
	}

}
SaveDocWithDateAndClientproject();
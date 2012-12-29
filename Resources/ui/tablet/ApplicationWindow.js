//Application Window Component Constructor
function ApplicationWindow(title) {
	//load component dependencies
	//var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:title
	});
		
	//construct UI
	//var firstView = new FirstView();
	//self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;

// Prototype Inhertitance
var MainClass = function()
{
	this.name = "lllll";
};
MainClass.prototype.getName = function()
{
	return "Main Name";
};
MainClass.prototype.setName = function(newName)
{
	this.name = newName;
}

var ChildClass = function()
{
	this.name = 'gggg';
	this.childname = 'cccc';
};
ChildClass.prototype = new MainClass();
ChildClass.prototype.constructor = ChildClass;
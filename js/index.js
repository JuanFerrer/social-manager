/* globals $, feather, Facebook, Twitter */

var facebook = new Facebook();
var twitter = new Twitter();

feather.replace();
$("#login-screen").parent().show();
$("#publish-screen").parent().hide();

function changeScreen() {
	$("#login-screen").parent().toggle();
	$("#publish-screen").parent().toggle();
}

function post(postContent) {
	facebook.login();
	facebook.post(postContent);
}
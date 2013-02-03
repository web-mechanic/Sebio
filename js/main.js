(function ($) {
    'use strict';
//---global vars

// --- methods
var initialize = function(){
 $('.lastStage').hide();
 $('#commandcConfirm').on('click',yes);
 popup();

};

var popup = function(e){
$('#commandcConfirm').on('click',yes);
};

var yes = function(){
$('.lastStage').show();
};


	$( function () {
	// --- onload routines
initialize();
	});
}(jQuery));
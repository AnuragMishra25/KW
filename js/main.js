/**************************************************************************/
/***************************** QUESTION 1 *********************************/
/**************************************************************************/

/** 
 * This method animates the text inside an element character by character.
 * @param  {HTMLElement} element
 * @param  {Number} duration Duration of animation in milliseconds
 */
function animateText(element, duration) {
	setInterval(function(){
		var text = element.innerText,
			firstChar = text[0];
		text = text.slice(1);
		text += firstChar;
		element.innerText = text;
	},duration);
}

animateText(document.querySelector('p'), 100);





/**************************************************************************/
/***************************** QUESTION 2 *********************************/
/**************************************************************************/

//Attach a scroll event on the body which prints `user scrolled in direction {up/down}`.

function scrolled(){
	var lastScroll = 0;
	window.addEventListener('scroll', function (event) {
		console.log('User has scrolled');
		var scroll = window.pageYOffset;
		if (scroll > lastScroll) {
			console.log('down scroll');
		} else {
			console.log('up scroll');
		}
		// console.log(scroll);
		lastScroll = scroll;
	});
}
scrolled();

/**************************************************************************/
/***************************** QUESTION 3 *********************************/
/**************************************************************************/

//dummyUrl = 'http://jsonplaceholder.typicode.com/posts/1'
function promiseAjax (options) {
  return $.ajax(options); 

}


function sampleEvent () {
	var callback = [];
	function on (name, cb) {
		if (!callback[name])
			callback[name] = [];
		callback[name].push(cb);
	}

	function trigger (name) {
		callback[name].forEach(function(cb) {
			cb();
		});
	}

	return {
		on: on,
		trigger: trigger
	}
}

var evt = new sampleEvent();
evt.on('sample', function () {console.log('Sample event triggered')});
evt.on('sample', function () {console.log('Sample1 event triggered')});
evt.trigger('sample');

/**************************************************************************/
/***************************** QUESTION 4 *********************************/
/**************************************************************************/

function debounce (func, wait, context) {

}

function throttle(func, wait, context) {

}








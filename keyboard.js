/*
Copyright (C) 2012 David Arbuckle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {
	"use strict";
	var posts = document.getElementsByClassName('title'),
		selected = 0,
		initialized = false,
		focusedArticle,
		focusedComment;

	function getArticle() {
		posts[selected].innerHTML = "&#x25BA;" + posts[selected].innerHTML;
		focusedArticle = posts[selected + 1].childNodes[0];
		focusedArticle.focus();
		focusedComment = posts[selected].parentNode.nextSibling.childNodes[1].lastChild;
	}

	function clearArrow() {
		posts[selected].innerHTML = posts[selected].innerHTML.substr(1);
	}

	function handler(event) {
		var keycodes = [9, 27, 37, 38, 39, 40];
		if (initialized && keycodes.indexOf(event.keyCode) !== -1) {
			event.preventDefault();
		} else if (!initialized && event.keyCode !== 9) {
			return;
		}

		/*Tab to enter keyboard navigation mode (with apologies to Mr Tesler).*/
		if (event.keyCode === 9 && !initialized && posts.length) {
			if (window.location.href.indexOf('/item/') === -1) {
				event.preventDefault();
			} else {
				return;
			}
			getArticle();
			initialized = true;
		}

		/*Esc to exit keyboard navigation modevent.*/
		if (event.keyCode === 27 && initialized) {
			clearArrow();
			initialized = false;
			selected = 0;
		}

		/*Up Arrow to navigate articles*/
		if (event.keyCode === 38 && initialized) {
			clearArrow();
			selected === 0 ? selected = posts.length - 3 : selected -= 2;
			getArticle();
		}

		/*Down Arrow to navigate threads*/
		if (event.keyCode === 40 && initialized) {
			clearArrow();
			selected === posts.length - 3 ? selected = 0 : selected += 2;
			getArticle();
		}

		/*Right Arrow to select comments link*/
		if (event.keyCode === 39 && initialized) {
			focusedComment.focus();
		}

		/*Left Arrow to select to article link*/
		if (event.keyCode === 37 && initialized) {
			focusedArticle.focus();
		}
	}

	window.addEventListener('keydown', handler);
}());
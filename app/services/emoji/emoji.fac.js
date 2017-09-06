// This module consists of a factory:
	// The factory declares a list of emoji
	// Has methods to:
		// select n randomly
		// randomize an array passed in

// emoji CSS from: 
// https://afeld.github.io/emoji-css/


(function() {
	'use strict';
	angular.module('factory.emoji', [])
	.factory('emojiFactory', function () {
		var emojiList = [
			{id: 1, name: 'em-heart_eyes_cat'},
			{id: 2, name: 'em-kissing-cat'},
			{id: 3, name: 'em-joy-cat'},
			{id: 4, name: 'em-cat'},
			{id: 5, name: 'em-crying_cat_face'},
			{id: 6, name: 'em-person_with_pouting_face'},   //Should be shrugging or whatever the woman is doing
			{id: 7, name: 'em-cocktail'},
			{id: 8, name: 'em-moneybag'},
			{id: 9, name: 'em-cold_sweat'},
			{id: 10, name: 'em-christmas_tree'},
			{id: 11, name: 'em-raised_hands'},
			{id: 12, name: 'em-tired_face'}, 								// Can't find what nerd is called
			{id: 13, name: 'em-pill'},											// Can't find puking face
			{id: 14, name: 'em-rage'},
			{id: 15, name: 'em-fire'},											// Can't find shock/wow/wtf face
			{id: 16, name: 'em-trolleybus'}, 								// Can't find eye roll. These must be old.
			{id: 17, name: 'em-dancer'},
			{id: 18, name: 'em-no_good'},
			{id: 19, name: 'em-dancers'},
			{id: 20, name: 'em-octocat'},										//Can't find lion face
			{id: 21, name: 'em-snowman'},
			{id: 22, name: 'em-strawberry'},
			{id: 23, name: 'em-sweet_potato'},
			{id: 24, name: 'em-trophy'},										//Can't find wedge of cheese
			{id: 25, name: 'em-beers'},
			{id: 26, name: 'em-kissing_heart'},
			{id: 27, name: 'em-wolf'},
			{id: 28, name: 'em-ghost'}
		];

		// randomly shuffle emojiList so it's ready for all the methods that require it
		// still very easy to grab specific emoji using its name or id
		emojiList.randomize = function(myArray) {
			var i, j, tmp;
			var n = myArray.length;
			for (i=n-1; i>0; i--) {
				j = Math.floor(Math.random()*i);
				tmp = myArray[j];
				myArray[j] = myArray[i];
				myArray[i] = tmp;
				//if the first element ends up with id 1, swap elements 1 and 2
				//so not totally random, but easier to test
			};
			if (myArray[0].id===1) {
				tmp = myArray[0];
				myArray[1] = myArray[0];
				myArray[0] = tmp;
			};
			return myArray;
		};

		emojiList.get = function(n) {
			return emojiList.slice(0,n);
		}

		return emojiList;

	});
//



})();
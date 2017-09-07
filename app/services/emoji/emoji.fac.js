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
		var emojiListOld = [
			{id: 1, name: 'em-heart_eyes_cat'},
			{id: 2, name: 'em-kissing_cat'},
			{id: 3, name: 'em-joy_cat'},
			{id: 4, name: 'em-cat'},
			{id: 5, name: 'em-crying_cat_face'},
			{id: 6, name: 'em-person_with_pouting_face'},   //Should be shrugging or whatever the woman is doing
			{id: 7, name: 'em-cocktail'},
			{id: 8, name: 'em-moneybag'},
			{id: 9, name: 'em-cold_sweat'},
			{id: 10, name: 'em-christmas_tree'},
			{id: 11, name: 'em-raised_hands'},
			{id: 12, name: 'em-tired_face'}, 								// Can't find nerd
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

		var emojiList = [
			{unicode: '1f004', name:'mahjong red dragon'},
			{unicode: '1f937', name:'person shrugging'},
			{unicode: '1f645', name:'woman gesturing NO'},
			{unicode: '1f9dd', name:'woman elf'},
			{unicode: '1f9dc', name:'mermaid'},
			{unicode: '1f9db', name:'man vampire'},
			{unicode: '1f9da', name:'man fairy'},
			{unicode: '1f575', name:'woman detective'},
			{unicode: '1f469', name:'woman firefighter; medium skin tone'},
			{unicode: '1f468', name:'man astronaut; medium-dark skin tone'},
			{unicode: '1f63f', name:'crying cat face'},
			{unicode: '1f638', name:'grinning cat face with smiling eyes'},
			{unicode: '1f916', name:'robot face'},
			{unicode: '1f47a', name:'goblin'},
			{unicode: '1f913', name:'nerd face'},
			{unicode: '1f620', name:'angry face'},
			{unicode: '1f922', name:'nauseated face'},
			{unicode: '1f633', name:'flushed face'},
			{unicode: '1f62d', name:'loudly crying face'},
			{unicode: '1f615', name:'confused face'},
			{unicode: '1f612', name:'unamused face'},
			{unicode: '1f910', name:'zipper-mouth face'},
			{unicode: '1f914', name:'thinking face'},
			{unicode: '1f618', name:'face blowing a kiss'},
			{unicode: '1f60e', name:'smiling face with sunglasses'},
			{unicode: '1f602', name:'face with tears of joy'},
			{unicode: '1f3c3', name:'person running'},
			{unicode: '1f483', name:'woman dancing'},
			{unicode: '1f46f', name:'people with bunny ears'},
			{unicode: '1f9d7', name:'person climbing'},
			{unicode: '1f465', name:'busts in silhouette'},
			{unicode: '1f3c2', name:'snowboarder'},
			{unicode: '1f3ca', name:'person swimming'},
			{unicode: '1f938', name:'person cartwheeling'},
			{unicode: '1f939', name:'person juggling'},
			{unicode: '1f933', name:'selfie'},
			{unicode: '1f4aa', name:'flexed bicep'},
			{unicode: '1f44d', name:'thumbs up; medium skin tone'},
			{unicode: '1f44a', name:'oncoming fist; medium skin tone'},
			{unicode: '1f444', name:'mouth'},
			{unicode: '1f498', name:'heart with arrow'},
			{unicode: '1f4a3', name:'bomb'},
			{unicode: '1f457', name:'dress'},
			{unicode: '1f459', name:'bikini'},
			{unicode: '1f451', name:'crown'},
			{unicode: '1f3a9', name:'top hat'},
			{unicode: '1f43a', name:'wolf face'},
			{unicode: '1f981', name:'lion face'},
			{unicode: '1f42e', name:'cow face'},
			{unicode: '1f423', name:'hatching chick'},
			{unicode: '1f433', name:'spouting whale'},
			{unicode: '1f34e', name:'red apple'},
			{unicode: '1f9c0', name:'cheese wedge'},
			{unicode: '1f360', name:'roasted sweet potato'},
			{unicode: '1f37b', name:'clinking beer mugs'},
			{unicode: '1f943', name:'tumbler glass'},
			{unicode: '1f377', name:'wine glass'},
			{unicode: '1f378', name:'cocktail'},
			{unicode: '1f379', name:'tropical drink'},
			{unicode: '1f30b', name:'volcano'},
			{unicode: '1f525', name:'fire'}
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
			var localList;
			//Randomize them
			localList = emojiList.randomize(emojiList);
			//Get first n
			return emojiList.slice(0,n);
		}

		return emojiList;

	});
//



})();
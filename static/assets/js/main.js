/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);

/* time line viewport js*/
(function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
                console.log("trigerd");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

var window_height;
function initScrollAnimation() {

    $('[class*="add-animation"]').each(function () {
        offset_diff = 30;

        var waypoints = $(this).waypoint(function (direction) {
            if (direction == 'down') {
                $(this.element).addClass('animate');
            } else {
                $(this.element).removeClass('animate');
            }
        }, {
            offset: window_height - offset_diff
        });
    });

};

$(window).load(function(){

    //after the content is loaded we reinitialize all the waypoints for the animations
    initScrollAnimation();

});


$('#test_type').typeIt({
    strings: ['summon bot', 'play youtube link', 'make your own playlist'],
    speed: 80,
	loop: true,
    breakLines: false,
    autoStart: false
});

function run() {

	var  target = document.getElementById('patch_note');
	var converter = new showdown.Converter(),
        text      = '# New note for Melody v0.4 (Beta)\n' +
            '\n' +
            '#### 1. Password field input is deleted.\n' +
            'The Password field is deleted from the Playlist management function, which is inconvenient for user experience (UX).\n' +
            'The addition and deletion of individual items for the playlist and the destruction of the playlist have been changed so that they are created only for the user who created it.\n' +
            '\n' +
            '#### 2. You can use duplicate playlist_name with another user.\n' +
            'In previous versions, I could not use the playlist_name created by another user.\n' +
            'playlist_name We assumed that the preemption type is unreasonable, so we can use duplicate playlist_name with other users, but we updated to keep different playlist information.\n' +
            '\n' +
            '#### 3. Melody tries to talk to the user.\n' +
            '2-1) After the result of the playlist show command, it asks whether to execute the load command for the corresponding playlist. The user can easily call the playlist load function with the expression yes.\n' +
            '2-2) After the result of the playlist search command, it selects one of the retrieved playlists and asks whether to execute the load command. You can easily call the playlist load function by typing only numbers.\n' +
            '\n' +
            '#### 4. Melody\'s representative thumbnail has changed.\n' +
            '#### 5. Melody works 24 hours a day.\n' +
            'We will inform you of the period of regular maintenance for upgrading the new version and resolving errors.\n' +
            '\n' +
            '#### 6. Melody now supports language settings. (Korean added)\n' +
            'You can set the language for the server by calling !!language. If you do not use the function, it is set to English by default.\n' +
            '\n' +
            '#### 7. Added the ability to view the status of the currently playing queue.\n' +
            'When you are playing, please use !! now command. You can see at a glance which songs have been added.\n' +
            '\n' +
            '#### 8. Improved UI to output to personal DM when using help command.\n' +
            '#### 9. Fixed a bug where the information about the music remaining in the queue was transmitted to the Text Channel in bulk when the stop command was executed.\n' +
            '#### 10. Message UX at playlist play becomes easier\n' +
            'When you play a youtube playlist or a melody playlist, you do not send a large number of Text Channel messages, but now process them in a single line.\n' +
            '\n' +
            '#### 11. We now support youtube\'s playlist.\n' +
            'You can easily store it in simple play, Melody\'s playlist add, also using youtube playlist.',
        html      = converter.makeHtml(text);

    target.innerHTML = html;
}

run();




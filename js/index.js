// Initial the heroIndex to 0
var heroIndex = 0;

// The array of strings corresponding to the source location of your images; you can also use URLs pointing to your project here too
var heroImages = [
  'http://manninghamvet.com.au/sites/default/files/styles/large/public/images/article/cats.jpg',
  'https://static1.squarespace.com/static/50c8c55be4b0a1d4330d16f8/t/5577357ae4b000535469c1c1/1401647944177/Black-White-Cat-Kitten-Wallpaper-Desktop.jpg',
  'http://www.catprotection.com.au/wp-content/uploads/2014/11/5507692-cat-m.jpg',
  'https://www.petfinder.com/wp-content/uploads/2013/03/101888324-632x353-flipped.jpg'
];

$(document).ready(pageReady);

// This updates the index 
function updateHeroIndex() {
  heroIndex++;

  // A bit of conditional logic to reset to 0
  if (heroIndex >= heroImages.length) heroIndex = 0;
}

// This function handles the updating of the hero using the array of source strings we defined at the top and the heroIndex
function updateHero() {
  var heroSource = heroImages[heroIndex];
  var backgroundUrl = 'url(' + heroSource + ')';
  $('.hero').css('background-image', backgroundUrl);
  updateHeroIndex();
}

function pageReady() {

	 updateHero();
  
  // This is how to repeatedly call the updateHero function on a timer
  // This will call our updateHero() function every 1000 milliseconds (1 second)
  setInterval(updateHero, 5000);
}

	$(".dropbtn").hover(function showRollover() {
		 event.preventDefault();
    // $(this).addClass("dropdown-content");
    // $(this).show("thickline");

 }, function removeRollover() {
 		 event.preventDefault();
    $(this).removeClass("rollover");
} );

		// Set up click listener on mobile nav button
	$(".nav-toggle").click(toggleMobileNav);

	function toggleMobileNav() {

		// Toggle sliding the mobile nav container to reveal/hide
		$(".nav-menu").slideToggle();

		// Toggle applying class to the hamburger lines to trigger animation

		// $(".circle").toggle();
		    if ($(window).width() > 768) {
      	$(".icon").toggle();
    	}
	}

	$(window).resize(windowResize);

	function windowResize() {
		if ($(window).width() > 768) {
			$(".nav-menu").show();
			$(".nav-menu").css("display", "flex");
		} else{
			$(".nav-menu").css("display", "block");
			$(".nav-menu").hide();
		}
	}

	


///nav links

// $(".navline").hover(function showRollover() {
// 		 event.preventDefault();
//     $(this).addClass("rollover");
//     // $(this).show("thickline");

//  }, function removeRollover() {
//  		 event.preventDefault();
//     $(this).removeClass("rollover");
// } );


// $(".nav-toggl").click(mobileNavToggle);
	
// 	function mobileNavToggle() {
// 		$(".nav-menu").slideToggle();
// 		$(".line").toggleClass("active");
// 		$("#logo").toggle();
// 		    if ($(window).width() > 768) {
//       	$(".orders").toggle();
//     	}
// 	}

// }




// function clickHandler() {
//     $('#hide').toggle();
//     $('#show').toggle();
//     $('.orders').toggle();
// }
    
// $(document).ready(function(){
//     $('#show').hide();
    
//     $('#hide, #show').on('click', clickHandler);
// });
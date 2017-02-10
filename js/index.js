// Initial the heroIndex to 0
var heroIndex = 0;

// The array of strings corresponding to the source location of your images; you can also use URLs pointing to your project here too
var heroImages = [
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka3.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka1.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka7.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka6.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka14.jpg', 
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka17.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka19.jpg',
  'https://quebell7.github.io/TregoED-2017/images/sewanhaka9.jpg',
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
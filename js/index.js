$(document).ready(pageReady);

function pageReady() {

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
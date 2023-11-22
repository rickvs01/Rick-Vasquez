
// Count the number of items in the footer list with a class of footerLinks (4)
var numberOfNavItems = document.querySelectorAll(".footer-links").length

// For each instance of the list numberOfNavItems, add two event listeners one to add the highlight, and another to remove it
for (var i =0 ; i <numberOfNavItems; i++){
    footerLinks = document.querySelectorAll(".footer-links")[i]
    footerLinks.addEventListener(
        "mouseover",
        (event) => {
          event.target.classList.add("highlight");
        },
        false,
      );
      footerLinks.addEventListener(
        "mouseout",
        (event) => {
          // highlight the mouseover target
          event.target.classList.remove("highlight");
        },
        false,
      );    

}

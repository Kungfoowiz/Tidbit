$(function() {
  
  var nav = $(".top_nav");
  
  var collapseMenu = function(){
    nav.animate( { height:"18px" }, { queue:false, duration:500 });
  }
  
  var expandMenu = function(){
    nav.animate( { height:"52px" }, { queue:false, duration:500 });
  }
  
  collapseMenu();
  
  nav.on( "mouseover", function() {
        expandMenu();
  });
  
  nav.on( "mouseout", function() {
        collapseMenu();
  });
  
  
});
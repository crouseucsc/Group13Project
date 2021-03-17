// Images are opaque, this fades them in
function fade() {
  $("img").fadeTo("slow",1, function() {
    console.log('anim');
  });
}

setTimeout(function() {
  fade();
}, 500);

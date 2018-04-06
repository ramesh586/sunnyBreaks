$(function(){
  $('body').on('click', 'a[href*=\\#]', function (e) {
      e.preventDefault()
  });


setInterval(function(){
  subscribeModal();
},3000)
function subscribeModal(){
  var subscribe = localStorage.getItem('subscribe');
  if(subscribe == "true"){
      $('#subscribeModal').modal('show');
  }else{
    localStorage.setItem('subscribe',true);
  }
}

$('#subscribeModal').on('hidden.bs.modal', function() {
  localStorage.setItem('subscribe',false);
  $('#subscribeModal').remove()
});
$('#subscribeModal').on('shown.bs.modal', function() {
  localStorage.setItem('subscribe',true);
});



});
function packageCarousel(){
  $('#myCarousel').carousel({
      interval: 5000
  });
  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    try {
        var id = /-(\d+)$/.exec(id_selector)[1];
        console.log(id_selector, id);
        jQuery('#myCarousel').carousel(parseInt(id));
    } catch (e) {
        console.log('Regex failed!', e);
    }
  });
  // When the carousel slides, auto update the text
  $('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-'+id).html());
  });
}

function scrolltop() {
  $("html, body").animate({
      scrollTop: 0
  }, 600);
  return false;
}

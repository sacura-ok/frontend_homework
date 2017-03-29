$(function(){

  var $grid = $('.image').masonry({
          itemSelector: '.image__holiday',
          columnWidth : '.grid-sizer',
          gutter: 10,
          percentPosition : true
        });
  var $numberImg = 9;
  var $body = $('body');
  var $modal;
  var $close;
  var $overlay = $('<div class="overlay"></div>');
  var $modal = $('<div class="modal-result">'+
                    '<button type="button" class="close">x</button>'+
                    '<div class="modal__title">Nothing found on your request</div>'+
                  '</div>');

   function showModal(e){
     $body.append($overlay);
     $body.append($modal);
     $('.close').on('click',closeModal);
   }

   function closeModal(){
     $modal.remove();
     $overlay.remove();
   }

  $('input').focus(function() {
    $(this).val('');
  });

  var API_KEY = '4779313-cf91834b18ea796b767f4be16';
  var reseach = 'holiday';
  var $grid = $('.image');
  $('.image__holiday').remove();

  $.ajax({
     url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
     dataType: 'jsonp',
     type: 'GET',
     success: function(result){
       console.log(result);

       if (result.hits.length === 0){
          showModal();
       } else {
          for( n = 0; n < $numberImg; n++){
            var  $items = $('<div class="image__holiday"><img class="image__grid-item" src="'+result.hits[n].webformatURL+'">'
              +'<div class="image__title">'+result.hits[n].tags+'</div><div class="image__overlay"></div></div>'); // append items to grid
              $grid.append($items).masonry('appended', $items);
              $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
              });

          }
      }
    },
     error: function(result){
       console.log(result);
    }
  });

  $('button').on('click',function(){

    var API_KEY = '4779313-cf91834b18ea796b767f4be16';
    var reseach = $('input').val();
    $('.image__holiday').remove();

    $.ajax({
	     url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	     dataType: 'jsonp',
	     type: 'GET',
	     success: function(result){
         if (result.hits.length === 0){
            showModal();
         } else {
            for( n = 0; n < $numberImg; n++){
            var  $items = $('<div class="image__holiday"><img class="image__grid-item" src="'+result.hits[n].webformatURL+'">'
              +'<div class="image__title">'+result.hits[n].tags+'</div><div class="image__overlay"></div></div>'); // append items to grid
              $grid.append($items).masonry('appended', $items);
              $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
              });

		        }
        }
	    },
	     error: function(result){
		     console.log(result);
	    }
    });
});

  $('input').keypress(function(event){

    if(event.keyCode==13){

      event.preventDefault();

      var API_KEY = '4779313-cf91834b18ea796b767f4be16';
      var reseach = $('input').val();
      $('.image__holiday').remove();

      $.ajax({
	       url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	       dataType: 'jsonp',
	       type: 'GET',
	       success: function(result){
           if (result.hits.length === 0){
                showModal();
           } else {
             for( n = 0; n < $numberImg; n++){
             var  $items = $('<div class="image__holiday"><img class="image__grid-item" src="'+result.hits[n].webformatURL+'">'
               +'<div class="image__title">'+result.hits[n].tags+'</div><div class="image__overlay"></div></div>'); // append items to grid
               $grid.append($items).masonry('appended', $items);
               $grid.imagesLoaded().progress(function () {
                 $grid.masonry('layout');
               });

		         }
           }
	       },
	       error: function(result){
		         console.log(result);
	       }
       });
     }
   });
});

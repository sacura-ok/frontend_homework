$(function(){

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

  $('button').on('click',function(){

    $('.block-images__image').remove();

    var API_KEY = '4779313-cf91834b18ea796b767f4be16';
    var reseach = $('input').val();

    $.ajax({
	     url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	     dataType: 'jsonp',
	     type: 'GET',
	     success: function(result){
         if (result.hits.length === 0){
            showModal();
         } else {
            for( n = 0; n < result.hits.length; n++){
              $('.block-images').append('<div class="block-images__image"><img src="'+result.hits[n].webformatURL+'"></div>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
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

      $('.block-images__image').remove();

      var API_KEY = '4779313-cf91834b18ea796b767f4be16';
      var reseach = $('input').val();

      $.ajax({
	       url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	       dataType: 'jsonp',
	       type: 'GET',
	       success: function(result){
           if (result.hits.length === 0){
                showModal();
           } else {
             for( n = 0; n < result.hits.length; n++){
               $('.block-images').append('<div class="block-images__image"><img src="'+result.hits[n].webformatURL+'"></div>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
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

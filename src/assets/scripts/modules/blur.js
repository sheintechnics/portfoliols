window.onload = function(){
  blur().set();
}

window.addEventListener('resize', function(){
  blur().set();
})

function blur(){
  var wrapper = document.querySelector('.container--form');
  var form = document.querySelector('.form-blur');
  var bg = document.querySelector('.feedback');
  var img = document.querySelector('.feedback-img');

  function setBlur(){
    var bgWidth = bg.offsetWidth;
    var bgHeight = bg.offsetHeight;
    var imgHeight = img.offsetHeight;
    var posLeft = wrapper.offsetLeft-wrapper.offsetWidth/2;
    var posBottom = bgHeight-wrapper.offsetTop-wrapper.offsetHeight;
    form.style.backgroundSize = bgWidth + 'px' + ' auto';
    form.style.backgroundPosition = -posLeft + 'px ' + -(imgHeight-wrapper.offsetHeight-posBottom) + 'px';
  
  }

  return {
    set: setBlur
  }
}
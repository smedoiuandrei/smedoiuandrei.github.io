(function(){
  var cards=[].slice.call(document.querySelectorAll('.card'));
  var triggers=[].slice.call(document.querySelectorAll('[data-f]'));
  function apply(f){
    cards.forEach(function(c){
      var ok=!f||c.dataset.tags.split(' ').indexOf(f)>-1;
      c.classList.toggle('hide',!ok);
    });
    triggers.forEach(function(t){t.classList.toggle('on',!!f&&t.dataset.f===f);});
  }
  triggers.forEach(function(t){
    t.addEventListener('click',function(){
      var same=t.classList.contains('on');
      apply(same?null:t.dataset.f);
      document.getElementById('grid').scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
  document.getElementById('all').addEventListener('click',function(){apply(null);});
})();
window.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.header-btn');
  const domContainer = document.querySelector('#global-container');
  const coverContainer = document.querySelector('#container-cover');
  const body = document.querySelector('body');

  btn.addEventListener('click', function() {
    domContainer.classList.add('navOpen');

    if(domContainer.className == "navOpen") {
      body.classList.add('hidden');

      coverContainer.addEventListener('click', function() {
        domContainer.classList.remove('navOpen');
        body.classList.remove('hidden');
      })
    };
  })

})


//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    autoplay: {
      delay:2500
    }
  });


 //io 
class MoveObserver {
  constructor(els,cb,options){
    this.els = document.querySelectorAll(els);
    this.cb = cb;
    let DefaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    this.options = Object.assign(DefaultOptions, options);
    this._init()
  }

  _init() {
    const callBack = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log(this);
          this.cb(entry.target, entry.isIntersecting)
        } else {
          this.cb(entry.target, entry.isIntersecting)
        }
      })
    };

    const io = new IntersectionObserver(callBack.bind(this), this.options);

    this.els.forEach(el => io.observe(el));
  }
};

const cb = (el, isIntersecting) => {
  if(isIntersecting) {
    el.classList.add('move');
  } else {
    el.classList.remove('move');
  }
}

const mo = new MoveObserver('.io', cb);






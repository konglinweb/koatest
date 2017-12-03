import Zanbutton from './index.es';
// import { setTimeout } from 'core-js/library/web/timers';
const f = new Zanbutton;
xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">'+
    '<div class="finger"></div>'+
    '<div class="arm"></div>'+
    '</div>'+
    '<p id="plus">+1</p>',
    methods: {
      praise: function(){
        let _this = this;
        f.clickZan();
        let plus = _this.querySelector('#plus');
        plus.className = 'animate';
        setTimeout(function(){
          plus.className = '';
        },1000);
      }
    },
    events: {
      click:fuction(e){
        let _this = this;
        if(e.target.id == 'thumb'){
          let t = "";
          if(t){
            clearTimeout(t)
          };
          t = setTimeout(()=>{
            _this.praise()
          },500);
        }
      }
    }
  });
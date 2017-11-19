let f = '';
class Zanbutton {
	constructor(count, elem) {
		this.count = count;
		this.elem = elem;
	}
	clickZan() {
		this.elem.onclick = () => {
            if(f){
                clearTimeout(f)
            }
            f = setTimeout(()=>{
                if(this.count < 10) {
				this.elem.className = 'hand';
				this.count = add(this.count);
				console.log(this.count)
				var plusone = document.getElementById('plus');
				plusone.className = 'animate';
				setTimeout(function(){
					plusone.className = '';
				},1000);
                axios.get('/index/update')
					.then(function (response) {
					  console.log(response);
					})
					.catch(function (error) {
					  console.log(error);
					});
			} else {
				this.elem.className = 'hand gray';
				this.count = 0;
			}
            },800)
			
		}
	}
}

class Thumb extends Zanbutton {
	constructor(count, elem) {
		super(count, elem)
	}
}
export default {
	Thumb
}


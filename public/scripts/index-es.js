'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = '';

var Zanbutton = function () {
	function Zanbutton(count, elem) {
		_classCallCheck(this, Zanbutton);

		this.count = count;
		this.elem = elem;
	}

	_createClass(Zanbutton, [{
		key: 'clickZan',
		value: function clickZan() {
			var _this = this;

			this.elem.onclick = function () {
				if (f) {
					clearTimeout(f);
				}
				f = setTimeout(function () {
					if (_this.count < 10) {
						_this.elem.className = 'hand';
						_this.count = add(_this.count);
						console.log(_this.count);
						var plusone = document.getElementById('plus');
						plusone.className = 'animate';
						setTimeout(function () {
							plusone.className = '';
						}, 1000);
						axios.get('/index/update').then(function (response) {
							console.log(response);
						}).catch(function (error) {
							console.log(error);
						});
					} else {
						_this.elem.className = 'hand gray';
						_this.count = 0;
					}
				}, 800);
			};
		}
	}]);

	return Zanbutton;
}();

var Thumb = function (_Zanbutton) {
	_inherits(Thumb, _Zanbutton);

	function Thumb(count, elem) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, count, elem));
	}

	return Thumb;
}(Zanbutton);

exports.default = {
	Thumb: Thumb
};

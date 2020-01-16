var app = new Vue({
	el: '#app',
	data: {
		cvv_flag: false,
		numSelected: false,
		monthSelected: false,
		yearSelected: false,
		holderSelected: false,
		cvv: '',
		month: '',
		year: '',
		holder: '',
		card_num:'',
		cc_text: '#### #### #### ####',
	},
	methods: {
		cc_fill: function () {
			var str="";
			for (var i = 0; i < 16; i++) {
				if (i===4 || i===8 || i===12) str += " ";
				str += (this.card_num.charAt(i) !== '') ? this.card_num.charAt(i) : "#";
			}
			this.cc_text = str;
		}
	}
})
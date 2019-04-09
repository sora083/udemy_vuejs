var app = new Vue({
	el: '#app',
	data: {
		colors: [
			{name: 'Red'},
			{name: 'Green'},
			{name: 'Blue'}
		]
	},
	watch: {
		colors: {
			handler: function(newValue, oldValue) {
				console.log('Update!')
				console.log('new: %s, oldValue: %s'
					, JSON.stringify(newValue, null, '	')
					, JSON.stringify(oldValue, null, '	'))
			},
			deep: true,
			immediate: true
		}
	}
 })

window.vm = new Vue({
	el: '#app',
	components: {
		'users-list': {
			template: '#userListTpl',
			props: {
				users: {
					required: true,
					type: Array
				}
			},
			data: function() {
				return {
					isShow: true
				}
			},
			methods: {
			  toggleUserList: function() {
				this.isShow = !this.isShow;
			  }
			},
		},
		'user-edit': {
			template: '#editFormTpl',
			props: {
				user: {
					required: true,
					type: Object
				}
			},
		}
	},
	data: function() {
	  return {
		noPic: 'https://www.esvika.ee/wp-content/uploads/anon.png',
		users: [{}],
	  };
	},
	methods: {
		loadData: function() {
			var self = this;
			
			axios.get('http://jsonplaceholder.typicode.com/users')
				.then(function(response) {
					console.log('Данные загружены!');
					self.users = response.data;
				});
		}
	},
	computed: {
	  countUsers: function() {
		return this.users.length;
	  }
	},
	filters: {
	  uppercase: function(str) {
		if (!str) {
		  return '';
		}
		
		return str.toUpperCase();
	  }
	},
	created: function() {
		this.loadData();
	}
  });
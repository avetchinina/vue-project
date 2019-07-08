var usersList = {
	template: '#userListTpl',
	props: {
		users: {
			required: true,
			type: Array
		},
	},
	data: function() {
		return {
			isShow: true
		}
	},
	computed: {
	  haveUsers: function() {
		return this.users.length > 0;
	  }
	},
	methods: {
	  toggleUserList: function() {
		this.isShow = !this.isShow;
	  }
	},
	filters: {
		uppercase: function(str) {
			if (!str) {
			  return '';
			}
			
			return str.toUpperCase();
		}
	}
};
var usersEdit = {
	template: '#editFormTpl',
	props: {
		user: {
			required: true,
			type: Object,
			default: function() {
				return {};
			}
		},
		load: Boolean
	},
	computed: {
	  ifUser: function() {
		return Object.keys(this.user).length > 0;
	  }
	},
};

window.vm = new Vue({
	el: '#app',
	components: {
		'users-list': usersList,
		'user-edit': usersEdit
	},
	data: function() {
	  return {
		noPic: 'https://www.esvika.ee/wp-content/uploads/anon.png',
		users: [],
		wasLoaded: false
	  };
	},
	methods: {
		loadData: function() {
			var self = this;
			
			axios.get('https://jsonplaceholder.typicode.com/users')
				.then(function(response) {
					console.log('Данные загружены!');
					self.wasLoaded = true;
					self.users = response.data;
				});
		}
	},
	computed: {
	  countUsers: function() {
		return this.users.length;
	  }
	},
	created: function() {
		this.loadData();
	}
  });
var vm = new Vue({
	el: '#app',
	data: function() {
	  return {
		users: [],
		noPic: 'https://www.esvika.ee/wp-content/uploads/anon.png',
		isShow: true,
	  };
	},
	methods: {
	  getFullName: function(user) {
		return user.surname + ' ' + user.name + ' ' + user.midName;
	  },
	  toggleUserList: function() {
		this.isShow = !this.isShow;
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
	  this.users = [
		  {id: 1, surname: 'Иванов', name: 'Иван', midName: 'Иванович', pic: 'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png'},
		  {id: 2, surname: 'Юрьев', name: 'Алексей', midName: 'Александрович', pic: ''},
		  {id: 3, surname: 'Петров', name: 'Федор', midName: 'Юрьевич', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXblHsRy_JIWpIpJ0gB_B-ov43YtiTIbGnK4xlgTF1sXtTRTCL'},
		  {id: 4, surname: 'Виноградова', name: 'Валентина', midName: 'Михайловна', pic: 'https://icons8.com/iconizer/files/Free_pretty_office_Icons_part_4/orig/female-user-help.png'},
		  {id: 5, surname: 'Иванова', name: 'Людмила', midName: 'Дмитриевна', pic: 'https://pandia.ru/user/content/user/12400/photo/1449311674qoh8k.png'},
		  {id: 6, surname: 'Курочкин', name: 'Павел', midName: 'Петрович'}
		];
	}
  });
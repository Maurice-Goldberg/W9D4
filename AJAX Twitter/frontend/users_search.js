const APIUtil = require('./api_util');

class UsersSearch {
  constructor (el) {
    this.$el = $(el);
    this.$ul = this.$el.find('.users');
    this.$input = $('input.users-search');
    this.handleInput();
  }

  handleInput() {
    this.$input.on("input", (e) => {
      APIUtil.searchUsers(this.$input.val()).then(this.success.bind(this));
    });
  }

  success(users) {
    this.render(users);
  }

  render(users) {
    this.$ul.empty();
    users.forEach(user => {
       this.$ul.append(`<li>${user.username}</li>`);
    });
  }
}

module.exports = UsersSearch;
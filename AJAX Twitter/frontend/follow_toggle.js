const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userID = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {
    let button_text = this.followState ? "Unfollow!" : "Follow!";
    this.$el.text(button_text);
  }

  handleClick() {
    this.$el.on('click', (e) => {
      e.preventDefault();
      this.$el.prop("disabled", true);
      if (this.followState) {
        APIUtil.unfollowUser(this.userID).then(this.success.bind(this));
      } else {
        APIUtil.followUser(this.userID).then(this.success.bind(this));
      }
    });
  }
  
  toggleFollowState() {
    this.followState = !this.followState;
  }
  
  success () {
    this.$el.prop("disabled", false);
    this.toggleFollowState();
    this.render();
  }
}

module.exports = FollowToggle;
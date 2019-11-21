const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(()=>{
  let toggles = [];
  $('.follow-toggle').each((i, ele) => {
    toggles.push(new FollowToggle(ele));
  });

  let searches = [];
  $('.users-search').each((i, ele) => {
    searches.push(new UsersSearch(ele));
  });
});
const APIUtil = {
  unfollowUser: function (id) {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "JSON"
    });  
  },
  followUser: function (id) {
    return $.ajax({
    method: "POST",
    url: `/users/${id}/follow`,
      dataType: "JSON"
    });
  },
  searchUsers: function(queryVal) {
    return $.ajax({
      method: "GET",
      url: `/users/search`,
      data: {query: queryVal},
      dataType: "JSON"
    });
  }
};

module.exports = APIUtil;
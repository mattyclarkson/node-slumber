// Generated by CoffeeScript 1.10.0
(function() {
  var api, slumber;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  slumber = require('..');

  api = slumber.API('http://slumber.in/api/v1/', {
    auth: ['demo', 'demo']
  }, function() {
    var new_post, title__startswith;
    api('note').get();
    new_post = api('note').post({
      'title': 'My Test Note',
      'content': 'This is the content of my Test Note!'
    });
    console.log(new_post);
    return;
    api('note')(new_post['id']).put({
      'content': 'I just changed the content of my Test Note!'
    });
    api('note')(new_post['id']).patch({
      'content': 'Wat!'
    });
    api('note')(new_post['id']).get();
    api('note')(new_post['id'])["delete"]();
    api('resource').get({
      username: "example",
      api_key: "1639eb74e86717f410c640d2712557aac0e989c8"
    });
    return api('note').get(title__startswith = "Bacon");
  });

}).call(this);

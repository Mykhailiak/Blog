import admin from './../admin';


admin.controller('AdminUsersCtrl', ($scope, Users) => {
    $scope.usersPromise = Users.query().$promise.then((users) => {
      $scope.users = users;
      console.log(users);
    }).catch((err) => {
      console.error('Users error:', err);
    });
});

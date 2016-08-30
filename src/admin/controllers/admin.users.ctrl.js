import admin from './../admin';


admin.controller('AdminUsersCtrl', ($scope, Users) => {
    $scope.usersPromise = Users.query().$promise.then((users) => {
      $scope.users = users;
      console.log(users);
    }).catch((err) => {
      console.error('Users error:', err);
    });

    $scope.deleteUser = (user, id) => {
      Users.delete({id: id}).$promise.then((data) => {
        $scope.users.splice($scope.users.indexOf(user), 1);
      }).catch((err) => {
        console.error('Delete user', err);
      });
    };

});

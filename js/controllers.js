angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DeviceCtrl', function($ionicPlatform, $scope, $cordovaDevice) {

        $ionicPlatform.ready(function() {

            $scope.$apply(function() {

                // sometimes binding does not work! :/

                // getting device infor from $cordovaDevice
                var device = $cordovaDevice.getDevice();

                $scope.manufacturer = device.manufacturer;
                $scope.model = device.model;
                $scope.platform = device.platform;
                $scope.uuid = device.uuid;

            });

        });
})

.controller('BatteryCtrl', function ($ionicPlatform, $rootScope, $scope, $cordovaBatteryStatus, $cordovaSplashscreen) {

        $ionicPlatform.ready(function() {

            $cordovaSplashscreen.show();

            console.log('i m in battery');
            $rootScope.$on('$cordovaBatteryStatus:status', function(result) {
                $scope.$apply(function() {
                    // sometimes binding does not work! :/

                    $scope.batteryLevel = result.level; // (0 - 100)
                    $scope.isPluggedIn = result.isPlugged; // bool
                });
            });

        });

    })

    .controller('NotificationsCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaLocalNotification) {
        $ionicPlatform.ready(function() {
            console.log('i m in notify for ionic platform');
            $scope.$apply = function() {
                console.log('i will notify');
                $cordovaLocalNotification.add({
                    id: 'welcome_notif',
                    title: "This is a local notification",
                    text: 'Notification text'
                }).then(function() {
                    console.log('notification fired');
                });
            };


        });
    })

    .controller('ToastCtrl', function($ionicPlatform, $scope, $cordovaToast) {
        $ionicPlatform.ready(function() {
            $cordovaToast.showShortTop('Hello World!!');

            $scope.showToast = function() {
                $cordovaToast
                    .show('You clicked a button!!', 'long', 'center');
            }
        });
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

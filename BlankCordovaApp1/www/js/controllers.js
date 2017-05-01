/*
 * 控制器模块
 */
angular.module('starter.controllers', [])
.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    $scope.loginData = {};
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    $scope.login = function () {
        $scope.modal.show();
    };

    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})
.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})
.controller('PlaylistCtrl', function ($scope, $stateParams) {
})
.controller('DashCtrl', function ($scope) { })
.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})
.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
    })
.controller('MapCtrl', function ($scope) {
            var map = new BMap.Map("allmap");                         // 创建Map实例
            var point = new BMap.Point(116.404, 39.915) ;         // 创建点坐标
            $scope.ret = { latitude: 39.915, longitude: 116.404 };

            map.centerAndZoom(point, 19);                              // 初始化地图,用城市名设置地图中心点
            var marker = new BMap.Marker(point);                      // 创建标注
            map.addOverlay(marker);                                   // 将标注添加到地图中


      //     var local = new BMap.LocalSearch("重庆市",   
      //         {renderOptions: {map: map,autoViewport: true},pageCapacity: 8});      
      //     local.search("谢家湾");


            $scope.getpoint = function () {
                var baidu_location = new BMap.Geolocation();
              baidu_location.getCurrentPosition(function (data) {
                  $scope.ret = { longitude: data.longitude, latitude: data.latitude };
   
                  var map = new BMap.Map("allmap");                           // 创建Map实例
                  var point = new BMap.Point(data.longitude, data.latitude);  // 创建点坐标
                  map.centerAndZoom(point, 19);
   
                  var marker = new BMap.Marker(point);                        // 创建标注
                  map.addOverlay(marker);                                     // 将标注添加到地图中
   
          }, function (err) {
                  alert("错误：" + err)
              });
           };
            $scope.tirarFoto = function () {
                /*alert("开始定位");*/
                var map = new BMap.Map("allmap");
                map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
                map.enableScrollWheelZoom(true);
                baidu_location.getCurrentPosition(function (data) {
                    $scope.data = data;
                    $rootScope.team = data;
                }, function (err) {
                    alert("错误：" + err)
                });
            };
        })
    ;
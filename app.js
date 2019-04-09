(function(){
    angular.module('MyApp', ['angular-sortable-view'])
        .controller('MyController', MyController)
        .service('DataService', DataService);

    MyController.$inject = ['DataService', '$q', '$scope'];
    DataService.$inject = ['$http'];

    function MyController(DataService, $q, $scope){
        var vm = this;

        activate();
        function activate() {
            var promises = [get_data()];
            return $q.all(promises).then(function() {
                // promise被resolve时的处理
            });
        }

        function get_data(){
            // 我这里只是示范,真正的promise不是这样写的
            vm.items = DataService.get_data();
            console.log(vm.items);
        }

    }

    function DataService($http){
        // 为了简单起见,我没有真正的发送一个http请求,而是使用了假数据.

        /*var url = 'http://example.com';
        var params = {
            key: 'your_key'
        };

        var service = {
            get_data: get_data
        };

        return service;

        function get_data(){
            // 你使用$http获取数据
            return $http.get(url, params)
                .then(function(res){
                    // 你的处理
                });
        }*/


        // 上面是实际中会用到的,我下面使用了假数据

        var data = [
            {name: 'dreamapple1', age: 1},
            {name: 'dreamapple2', age: 2},
            {name: 'dreamapple3', age: 3},
            {name: 'dreamapple4', age: 4},
            {name: 'dreamapple5', age: 5},
            {name: 'dreamapple6', age: 6}
        ];

        var service = {
            get_data : get_data
        };

        return service;

        function get_data(){
            return data;
        }

    }

})();
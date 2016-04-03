angular.module('gameApp', [])
    .controller('ctrl', control);

control.$inject = ['$scope'];

function control($scope) {
    var vm = this;
    vm.grid = new Array();

    vm.firstLevel = function(argument) {

            vm.row = 4;
            vm.col = 4;

            for (var i = 0; i < vm.row; i++) {
                vm.grid[i] = new Array();
                for (var j = 0; j < vm.col; j++) {
                    var isMarked = Math.random() >= 0.6;
                    vm.grid[i][j] = {
                        "isMarked":isMarked
                    };

                }

            }
};

vm.firstLevel();

}
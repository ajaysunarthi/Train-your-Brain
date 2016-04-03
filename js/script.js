angular.module('gameApp', [])
    .controller('ctrl', control);

control.$inject = ['$scope'];

function control($scope) {
    var vm = this;
    vm.level = 1;
    vm.toBeFound = 0;
    vm.found = 0;
    vm.initRows = 3;
    vm.initCols = 3;
    vm.maxRows = 6;
    vm.maxCols = 6;
    vm.rows = vm.initRows;
    vm.cols = vm.initCols;
    vm.showGrid = true;
    vm.disableButton = false;
    vm.grid = new Array();

    vm.beginLevel = function() {
        vm.revealGrid();
        window.setTimeout(function() {
            vm.$apply(vm.concealGrid);
        }, 4000);
    };

    vm.revealGrid = function() {

    };

    vm.concealGrid = function() {

    };

    vm.newGrid = function() {
        vm.disableButton = false;
        vm.toBeFound = 0;
        for (var i = 0; i < vm.rows; i++) {
            vm.grid[i] = new Array();
            for (var j = 0; j < vm.cols; j++) {
                var isMarked = Math.random() >= 0.6;
                if (isMarked) { vm.toBeFound++ }
                vm.grid[i][j] = { "marked": isMarked, "chosen": false, "win": false, "lose": false, "disabled": false };

            }

        }
    };

    vm.newGrid();

}

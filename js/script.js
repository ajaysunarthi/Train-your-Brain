angular.module('gameApp', [])
    .controller('ctrl', control);

control.$inject = ['$scope'];

function control($scope) {
    // defining variables to register execution
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
    // disable button will allow show button to be pressed only once on each level
    vm.disableButton = false;
    vm.grid = new Array();

    vm.beginLevel = function() {
        vm.revealGrid();
        window.setTimeout(function() {
            $scope.$apply(vm.concealGrid);
        }, 4000);
    };

    // new grid is starting function for every level sets the grid elements
    vm.newGrid = function() {
        vm.disableButton = false;
        vm.toBeFound = 0;
        for (var i = 0; i < vm.rows; i++) {
            vm.grid[i] = new Array();
            for (var j = 0; j < vm.cols; j++) {
                var isMarked = Math.random() >= 0.6;
                if (isMarked) { vm.toBeFound++ }
                // fill grid elements disabled to allow click only once
                // win to establish that the cell contains right value
                // similarly for lose.. ohh yeah cool english
                // is marked is to know whether the cell is filled or not
                // 'chosen' to know if its the right choice baby                      
                vm.grid[i][j] = { "marked": isMarked, "chosen": false, "win": false, "lose": false, "disabled": false };

            }

        }
    };


    vm.revealGrid = function() {
        vm.disableButton = true;
        for (var i = 0; i < vm.grid.length; i++) {
            var row = vm.grid[i];
            for (var j = 0; j < row.length; j++) {
                var cell = row[j];
                // Make every cell unclickable while the grid is being revealed                
                cell.disabled = true;
                // All those are marked assign their 'win' as true                
                if (cell.marked) {
                    cell.win = true;
                }
            }
        }
        vm.showGrid = false;
    };
    // Make the cells clickable when the grid again returns to default i.e. after reveal
    vm.concealGrid = function() {
        for (var i = 0; i < vm.grid.length; i++) {
            var row = vm.grid[i];
            for (var j = 0; j < row.length; j++) {
                var cell = row[j];
                cell.disabled = false;
                if (!cell.chosen) {
                    cell.win = false;
                    cell.lose = false;
                }
            }
        }
        $scope.showGrid = true;
    };

    vm.checkCell = function(cell) {

        if (!cell.chosen) {
            cell.chosen = true;
            if (cell.marked) {
                cell.win = true;
                cell.lose = false;                
                vm.found++;
            }

            else {
                cell.win = false;
                cell.lose = true;
                }

        }

        console.log(vm.found,vm.toBeFound);
    }

    vm.newGrid();

}

///<reference path="DataUtil.ts"/>
/**
 * Created by Chin on 08-Apr-17.
 */
var PersonaListController = /** @class */ (function () {
    function PersonaListController($scope) {
        this.$scope = $scope;
        $scope.fullPersonaList = fullPersonaList;
        $scope.saveFuse = this.saveFuse;
        $scope.saveOwn = this.saveOwn;
        $scope.saveBuy = this.saveBuy;
        // set the default sort param
        $scope.sortBy = 'level';
        $scope.sortReverse = false;
        $scope.sortFunc = this.getSortValue.bind(this);
        for (var i = 0; i < fullPersonaList.length; i++) {
            fullPersonaList[i].fuse = (isPersonaFuse(fullPersonaList[i].name) ? "y" : "n");
            fullPersonaList[i].buy = (isPersonaBuy(fullPersonaList[i].name) ? "y" : "n");
            fullPersonaList[i].own = (isPersonaOwn(fullPersonaList[i].name) ? "y" : "n");
        }
    }
    PersonaListController.prototype.getSortValue = function (item) {
        var sortBy = this.$scope.sortBy;
        if (sortBy === "arcana") {
            return item.arcana + (item.level >= 10 ? item.level : ("0" + item.level));
        }
        else {
            return item[sortBy];
        }
    };
    PersonaListController.prototype.saveFuse = function () {
        var config = {};
        var checkboxes = document.getElementsByClassName("fuseCheckbox");
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            config[checkbox.name] = checkbox.checked;
            localStorage["fusePersona"] = JSON.stringify(config);
        }
    };
    PersonaListController.prototype.saveOwn = function () {
        var config = {};
        var checkboxes = document.getElementsByClassName("ownCheckbox");
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            config[checkbox.name] = checkbox.checked;
            localStorage["ownPersona"] = JSON.stringify(config);
        }
        console.log((config));
    };
    PersonaListController.prototype.saveBuy = function () {
        var config = {};
        var checkboxes = document.getElementsByClassName("buyCheckbox");
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            config[checkbox.name] = checkbox.checked;
            localStorage["buyPersona"] = JSON.stringify(config);
        }
    };
    return PersonaListController;
}());

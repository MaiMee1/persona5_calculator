///<reference path="DataUtil.ts"/>
/**
 * Created by Chin on 08-Apr-17.
 */
class PersonaListController {
    $scope;
    constructor($scope) {
        this.$scope = $scope;
        $scope.fullPersonaList = fullPersonaList;
        $scope.saveFuse = this.saveFuse;
        $scope.saveOwn = this.saveOwn;
        $scope.saveBuy = this.saveBuy;

        // set the default sort param
        $scope.sortBy = 'level';
        $scope.sortReverse = false;
        $scope.sortFunc = this.getSortValue.bind(this);

        for (let i = 0; i < fullPersonaList.length; i++) {
            fullPersonaList[i].fuse = (isPersonaFuse(fullPersonaList[i].name)? "y" : "n");
            fullPersonaList[i].buy = (isPersonaBuy(fullPersonaList[i].name)? "y" : "n");
            fullPersonaList[i].own = (isPersonaOwn(fullPersonaList[i].name)? "y" : "n");
        }
    }

    private getSortValue(item) {
        let sortBy = this.$scope.sortBy;
        if (sortBy === "arcana") {
            return item.arcana + (item.level >= 10? item.level : ("0" + item.level));
        }
        else {
            return item[sortBy];
        }
    }

    saveFuse() {
        let config = {};
        let checkboxes = document.getElementsByClassName("fuseCheckbox");
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = (<HTMLInputElement>checkboxes[i]);
            config[checkbox.name] = checkbox.checked;
            localStorage["fusePersona"] = JSON.stringify(config);
        }
    }

    saveOwn() {
        let config = {};
        let checkboxes = document.getElementsByClassName("ownCheckbox");
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = (<HTMLInputElement>checkboxes[i]);
            config[checkbox.name] = checkbox.checked;
            localStorage["ownPersona"] = JSON.stringify(config);
        }
        console.log((config));
    }

    saveBuy() {
        let config = {};
        let checkboxes = document.getElementsByClassName("buyCheckbox");
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = (<HTMLInputElement>checkboxes[i]);
            config[checkbox.name] = checkbox.checked;
            localStorage["buyPersona"] = JSON.stringify(config);
        }
    }
}

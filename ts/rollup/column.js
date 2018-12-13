var ColumnInfo = /** @class */ (function () {
    function ColumnInfo() {
        this.formats = [];
    }
    return ColumnInfo;
}());
export { ColumnInfo };
var Sort;
(function (Sort) {
    Sort[Sort["none"] = 0] = "none";
    Sort[Sort["asc"] = 1] = "asc";
    Sort[Sort["desc"] = 2] = "desc";
})(Sort || (Sort = {}));
var Col = /** @class */ (function () {
    function Col(json_in) {
        this.Group = {
            show: false,
            formats: []
        };
        this.Detail = {
            show: true,
            formats: []
        };
        this.SubTotal = {
            show: false,
            formats: []
        };
        this.FinalTotal = {
            show: false,
            formats: []
        };
        this.IsNumber = false;
        this.ShowSettingsIcon = false;
        this.IsRowTotalColumn = false;
        this.Attribute = {};
        $.extend(this, json_in);
    }
    return Col;
}());
export { Col };

// export class CardInfo {
//     show: boolean;
//     formats: IFormat[] = [];
// }
export var Bucket;
(function (Bucket) {
    Bucket[Bucket["A"] = 0] = "A";
    Bucket[Bucket["B"] = 1] = "B";
    Bucket[Bucket["C"] = 2] = "C";
})(Bucket || (Bucket = {}));
var Card = /** @class */ (function () {
    function Card(json_in) {
        $.extend(this, json_in);
    }
    return Card;
}());
export { Card };

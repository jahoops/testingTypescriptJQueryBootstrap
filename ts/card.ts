import {IFormat} from "./format";

export class CardInfo {
    show: boolean;
    formats: IFormat[] = [];
}
enum Sort {
    none,
    asc,
    desc
}
export class Card {
    Header ? : string;
    Index: number;
    Position: number;
    Sort ? : Sort;
    Group ? : CardInfo = {
        show: false,
        formats: []
    };
    Detail ? : CardInfo = {
        show: true,
        formats: []
    };
    SubTotal ? : CardInfo = {
        show: false,
        formats: []
    };
    FinalTotal ? : CardInfo = {
        show: false,
        formats: []
    };
    IsNumber ? : boolean = false;
    ShowSettingsIcon ? : boolean = false;
    IsRowTotalColumn ? : boolean = false;
    Attribute ? : object = {};
    constructor(json_in: any) {
        $.extend(this, json_in);
    }
}

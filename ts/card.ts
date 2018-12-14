// export class CardInfo {
//     show: boolean;
//     formats: IFormat[] = [];
// }
export enum Bucket {
    A,
    B,
    C
}
export class Card {
    Q : string;
    A : string;
    constructor(json_in: any) {
        $.extend(this, json_in);
    }
}

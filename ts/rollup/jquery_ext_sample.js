// simple typescript jquery extension, the rollup output in assets/js
// will need the top and bottom lines per this example: 
//
// (function ($) {
//     $.fn.{function name} = function({options}) {
//         return this;
//     }
// })( jQuery );
//
$.fn.ApplyClass = function (bgcolor) {
    return this.css({
        backgroundColor: bgcolor
    });
};

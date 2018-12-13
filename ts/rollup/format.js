export function ApplyFormat(formats, data) {
    var formatReturn = {
        classes: "",
        formatted: data
    };
    for (var _i = 0, formats_1 = formats; _i < formats_1.length; _i++) {
        var format = formats_1[_i];
        switch (format.type) {
            case "class":
                formatReturn.classes += format.type === "class" ? format.value + " " : "";
                break;
            case "number":
                switch (format.value) {
                    case ".99":
                        formatReturn.formatted = Number(data) ? data.toFixed(2) : data;
                        break;
                    case "n":
                        formatReturn.formatted = Number(data) ? data : 0;
                        break;
                }
                break;
            case "date":
                formatReturn.formatted = moment(data).format(format.value);
                break;
            case "addtext":
                var tarray = format.value.split("{val}");
                if (tarray.length === 0) {
                    formatReturn.formatted = tarray[0];
                }
                else {
                    var tbuilder = "";
                    for (var i = 0; i < tarray.length - 1; i++) {
                        tbuilder += tarray[i] + data;
                    }
                    tbuilder += tarray[tarray.length - 1];
                    formatReturn.formatted = tbuilder;
                }
                break;
            default:
                console.log("applyFormat received an undefined format.type");
        }
    }
    formatReturn.classes = formatReturn.classes ? " class=\"" + formatReturn.classes.slice(0, -1) + "\"" : "";
    return formatReturn;
}
export function FormatSelectForm() {
    var backgroundcolor = ["bg-hilite", "bg-navy", "bg-blue", "bg-aqua", "bg-teal", "bg-olive", "bg-green",
        "bg-lime", "bg-yellow", "bg-orange", "bg-red", "bg-fuchsia", "bg-purple", "bg-maroon", "bg-white",
        "bg-gray", "bg-silver", "bg-black"];
    var backgroundcolors = "";
    for (var i = 0; i < backgroundcolor.length; i++) {
        var f = backgroundcolor[i];
        backgroundcolors += "<li class=\"dropdown-item " + f + "\"><a class=\"addformatitem\" href=\"#\" cformat=\"" + f + "\">" + f + "</a></li>";
    }
    var textcolor = ["navy", "blue", "aqua", "teal", "olive", "green", "lime", "yellow", "orange", "red",
        "fuchsia", "purple", "maroon", "white", "silver", "gray", "black"];
    var textcolors = "";
    for (var i = 0; i < textcolor.length; i++) {
        var f = textcolor[i];
        textcolors += "<li class=\"dropdown-item " + f + "\"><a class=\"addformatitem\" href=\"#\" cformat=\"" + f + "\">" + f + "</a></li>";
    }
    var textalign = ["text-left", "text-center", "text-right"];
    var textaligns = "";
    for (var i = 0; i < textalign.length; i++) {
        var f = textalign[i];
        textaligns += "<li class=\"dropdown-item " + f + "\"><a class=\"addformatitem\" href=\"#\" cformat=\"" + f + "\">" + f + "</a></li>";
    }
    var texttransform = ["text-lowercase", "text-uppercase", "text-capitalize"];
    var texttransforms = "";
    for (var i = 0; i < texttransform.length; i++) {
        var f = texttransform[i];
        texttransforms += "<li class=\"dropdown-item " + f + "\"><a class=\"addformatitem\" href=\"#\" cformat=\"" + f + "\">" + f + "</a></li>";
    }
    var textfont = ["font-weight-bold", "font-weight-normal", "font-weight-light", "font-italic"];
    var textfonts = "";
    for (var i = 0; i < textfont.length; i++) {
        var f = textfont[i];
        textfonts += "<li class=\"dropdown-item " + f + "\"><a class=\"addformatitem\" href=\"#\" cformat=\"" + f + "\">" + f + "</a></li>";
    }
    var numberformat = ["number", "two decimal"];
    var numberformats = "";
    for (var i = 0; i < numberformat.length; i++) {
        var f = numberformat[i];
        numberformats += "<li class=\"dropdown-item\"><a class=\"addformatitem\" href=\"#\" nformat=\"" + f + "\">" + f + "</a></li>";
    }
    var dateformat = ["MM-DD-YYYY", "MM-YYYY"];
    var dateformats = "";
    for (var i = 0; i < dateformat.length; i++) {
        var f = dateformat[i];
        dateformats += "<li class=\"dropdown-item\"><a class=\"addformatitem\" href=\"#\" dformat=\"" + f + "\">" + f + "</a></li>";
    }
    var form = "\n        <div id=\"formatSelectForm\" class=\"position-absolute bg-info border rounded border--dark\" style=\"z-index:1002;\">\n            <div class=\"dropdown\">\n                <ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n                    <li class=\"dropdown-item\"><a class=\"addformatitem\" href=\"#\" tformat=\"addtext\">Add Text</a></li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Number Formats</a>\n                        <ul class=\"dropdown-menu\">\n                        " + numberformats + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Date Formats</a>\n                        <ul class=\"dropdown-menu\">\n                        " + dateformats + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Text Alignment</a>\n                        <ul class=\"dropdown-menu\">\n                        " + textaligns + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Text Transform</a>\n                        <ul class=\"dropdown-menu\">\n                        " + texttransforms + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Text Bold/Italic</a>\n                        <ul class=\"dropdown-menu\">\n                        " + textfonts + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Text Color</a>\n                        <ul class=\"dropdown-menu\">\n                        " + textcolors + "\n                        </ul>\n                    </li>\n                    <li class=\"dropdown-submenu\"><a class=\"dropdown-item\" tabindex=\"-1\" href=\"#\">Background Color</a>\n                        <ul class=\"dropdown-menu\">\n                        " + backgroundcolors + "\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>";
    return form;
}

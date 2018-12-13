import { Col } from "./column";
import { ApplyFormat, FormatSelectForm } from "./format";
var Report = /** @class */ (function () {
    function Report(dataCall, rowData, columnInfo, id, name, version) {
        this.ReportCols = [];
        this.ReportRows = [];
        this.ReportDataCall = dataCall;
        for (var r = 0; r < rowData.length; r++) {
            this.ReportRows.push(rowData[r]);
        }
        if (columnInfo) {
            for (var _i = 0, columnInfo_1 = columnInfo; _i < columnInfo_1.length; _i++) {
                var c = columnInfo_1[_i];
                this.ReportCols.push(new Col(c));
            }
            this.ReportID = id ? id : -1;
            this.ReportName = name ? name : "Report Builder";
            this.ReportVersion = version ? version : "1.0";
        }
        else {
            var numCols = this.ReportRows[0].length;
            var modCols = new Array(numCols);
            for (var c = 0; c < numCols; c++) {
                var val = this.ReportRows[1][c];
                if ($.isNumeric(val)) {
                    modCols[c] = {
                        Index: c,
                        Position: c,
                        IsNumber: true,
                        Detail: { show: true, formats: [{ type: "class", value: "text-right" }, { type: "number", value: "number" }] },
                        SubTotal: { show: true, formats: [{ type: "class", value: "text-right" }, { type: "number", value: "number" }] },
                        FinalTotal: { show: true, formats: [{ type: "class", value: "text-right" }, { type: "number", value: "number" }] },
                    };
                }
                else {
                    modCols[c] = {
                        Index: c,
                        Position: c,
                        IsNumber: false
                    };
                }
            }
            var typeid = this.ReportRows[0].indexOf('REQUESTTYPEID');
            var typename = this.ReportRows[0].indexOf('REQUESTTYPENAME');
            var catid = this.ReportRows[0].indexOf('PROBCLASSID');
            var catname = this.ReportRows[0].indexOf('PROBCLASSNAME');
            if (typeid > -1 && typename > -1) {
                $.extend(modCols[typename], { Attribute: { attr: 'typeid', index: typeid } });
                $.extend(modCols[typeid], { Position: -1 });
            }
            if (catid > -1 && catname > -1) {
                $.extend(modCols[catname], { Attribute: { attr: 'catid', index: catid } });
                $.extend(modCols[catid], { Position: -1 });
            }
            for (var _a = 0, modCols_1 = modCols; _a < modCols_1.length; _a++) {
                var ci = modCols_1[_a];
                $.extend(ci, {
                    Header: this.ReportRows[0][ci.Index],
                    ShowSettingsIcon: true
                });
                this.ReportCols.push(new Col(ci));
            }
        }
    }
    Report.prototype.Clear = function () {
        this.ReportID = -1;
        this.ReportName = "";
        this.ReportCols = [];
        this.ReportRows = [];
        this.ReportVersion = "string";
        return;
    };
    Report.prototype.Render = function (el, reRender) {
        var groupValues = [];
        var subTotals = [];
        var hasSubTotals = false;
        var hasSubTotalsByGroup = [];
        var finalTotals = [];
        var hasFinalTotals = false;
        this.UpdateRowTotalCol();
        this.SortAll();
        var cols = this.ReportCols.filter(function (col) {
            return col.Position > -1;
        });
        cols.sort(function (a, b) {
            return a.Position - b.Position;
        });
        for (var i = 0; i < cols.length; i++) {
            var c = cols[i];
            if (c.Group.show) {
                groupValues.push(undefined);
            }
            if (c.FinalTotal.show) {
                hasFinalTotals = true;
                finalTotals.push(0);
            }
        }
        for (var g = 0; g < groupValues.length; g++) {
            subTotals.push([]);
            hasSubTotalsByGroup[g] = false;
            for (var i = 0; i < cols.length; i++) {
                var c = cols[i];
                if (c.SubTotal.show) {
                    hasSubTotals = true;
                    hasSubTotalsByGroup[g] = true;
                    subTotals[g].push(0);
                }
            }
        }
        var thead = "<thead><tr>";
        for (var i = 0; i < cols.length; i++) {
            var c = cols[i];
            var cls = c.Sort ? (c.Sort === 1 ? "class=\"asc\"" : "class=\"desc\"") : "";
            thead += c.ShowSettingsIcon ?
                "<th " + cls + " colposition=\"" + c.Position + "\" colindex=\"" + c.Index + "\"><span>" + c.Header + "</span></th>" : "<th>" + c.Header + "</th>";
        }
        thead += "</tr></thead>";
        var tbody = reRender === "body" ? "" : "<tbody>";
        for (var ir = 1; ir < this.ReportRows.length; ir++) {
            var r = this.ReportRows[ir];
            var group = 0;
            var subtot = 0;
            var fintot = 0;
            // save next row in detailrow
            var detailrow = "<tr>";
            for (var ic = 0; ic < cols.length; ic++) {
                var c = cols[ic];
                // calculated field check
                var thisVal = r[c.Index];
                if (c.SubTotal.show) {
                    for (var gg = 0; gg < subTotals.length; gg++) {
                        subTotals[gg][subtot] += Number(thisVal);
                    }
                    subtot++;
                }
                if (c.FinalTotal.show) {
                    finalTotals[fintot] += Number(thisVal);
                    fintot++;
                }
                // insert group header/subtotals to tbody before detailrow
                if (c.Group.show) {
                    var thisCol = c.Index;
                    // on group break
                    if (groupValues[group] !== thisVal) {
                        // if it is NOT the first record, and any column shows subtotals, insert subtotal to tbody now
                        if (groupValues[group] !== undefined) {
                            if (hasSubTotalsByGroup[group]) {
                                tbody += this.subTotalRow(this.ReportCols, subTotals[group]);
                            }
                        }
                        // insert group header row to tbody now
                        var grouprow = "<tr>";
                        for (var g = 0; g < cols.length; g++) {
                            var group_c = cols[g];
                            var format = ApplyFormat(c.Group.formats);
                            grouprow += thisCol === group_c.Index ? "<td" + format.classes + ">" + thisVal + "</td>" : "<td></td>";
                        }
                        grouprow += "</tr>";
                        tbody += grouprow;
                        groupValues[group] = thisVal;
                        for (var cg = group + 1; cg < groupValues.length; cg++) {
                            groupValues[cg] = undefined;
                        }
                    }
                    group++;
                }
                // keep building detailrow
                if (c.Detail.show) {
                    var format = ApplyFormat(c.Detail.formats, r[c.Index]);
                    var attr = c.Attribute ? ' ' + c.Attribute['attr'] + '="' + r[c.Attribute['index']] + '"' : '';
                    detailrow += "<td" + format.classes + attr + ">" + format.formatted + "</td>";
                }
                else {
                    detailrow += "<td></td>";
                }
            }
            // now add the detail row
            detailrow += "</tr>";
            if (detailrow.replace(/<tr>/g, "").replace(/<td>/g, "").replace(/<\/td>/g, "").replace(/<\/tr>/g, "").length > 0) {
                tbody += detailrow;
            }
        }
        if (hasSubTotals && hasSubTotalsByGroup[groupValues.length - 1]) {
            tbody += this.subTotalRow(this.ReportCols, subTotals[groupValues.length - 1]);
        }
        if (hasFinalTotals) {
            tbody += this.finalTotalRow(this.ReportCols, finalTotals);
        }
        tbody += reRender === "body" ? "" : "</tbody>";
        reRender === "body" ? $(el).html(tbody) : $(el).append(thead + tbody);
    };
    Report.prototype.ExportData = function () {
        //this exports the data that is showing in the table, without grouping/subtotals/etc...
        var returnobject = [];
        for (var r = 0; r < this.ReportRows.length; r++) {
            returnobject[r] = [];
            var i = 0;
            for (var c = 0; c < this.ReportCols.length; c++) {
                if (this.ReportCols[c].Position > -1) {
                    returnobject[r][i] = this.ReportRows[r][c];
                    i++;
                }
            }
        }
        return returnobject;
    };
    Report.prototype.ColEditFormats = function (colindex, section, formatsonly) {
        var colinfo = this.ReportCols[colindex][section];
        var formatdiv = "";
        var formats = "";
        formatdiv += "<div class=\"formatsdiv d-flex flex-wrap m-0\" colindex=\"" + colindex + "\" section=\"" + section + "\" >";
        if (colinfo.formats && colinfo.formats.length > 0) {
            for (var j = 0; j < colinfo.formats.length; j++) {
                formats += "<div class=\"border rounded font-weight-light font-italic small m-1 px-1 bg-creps\">" + colinfo.formats[j].value + "\n                 <i class=\"removeformat fa fa-remove ml-1 clickable\" style=\"height: 4px\" formatindex=\"" + j + "\"></i></div>";
            }
            formatdiv += formats;
        }
        formatdiv += "</div>";
        return formatsonly ? formats : formatdiv;
    };
    Report.prototype.ColEditForm = function (posindex) {
        if (!$.isNumeric(posindex)) {
            return;
        }
        var position = Number(posindex);
        var cols = this.ReportCols.filter(function (col) { return col.Position > -1; });
        cols.sort(function (a, b) {
            return a.Position - b.Position;
        });
        var col = cols.filter(function (col) { return col.Position === position; });
        var prev_col = col[0].Position > 0 ? cols[col[0].Position - 1] : null;
        var next_col = col[0].Position < cols.length - 1 ? cols[col[0].Position + 1] : null;
        var form = "\n            <div class=\"columneditform btn-group dropright btn-group-sm pl-2\">\n                <a class=\"btn excludecheckbox\" section=\"" + "Exclude" + "\" colposition=\"" + col[0].Position + "\" colindex=\"" + col[0].Index + "\"\n                 href=\"#\"><i class=\"fa fa-check-square-o\"></a></i>\n                <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><i class=\"fa fa-gear\"></i></a>\n                <ul class=\"dropdown-menu\" colposition=\"" + col[0].Position + "\" colindex=\"" + col[0].Index + "\">";
        for (var _i = 0, _a = ["Header"]; _i < _a.length; _i++) {
            var section = _a[_i];
            form += "<div class=\"p-0 m-0 text-center\">";
            form += col[0].Position > 0 && !col[0].Group.show && (prev_col && !prev_col.Group.show) ?
                "<i class=\"moveleft clickable fa fa-arrow-left\"></i>" : "<i class=\"moveleft gray fa fa-arrow-left\"></i>";
            form += col[0].Group.show ? " grouped " : " move ";
            form += col[0].Position < cols.length - 1 && !col[0].Group.show && (next_col && !next_col.Group.show) ?
                "<i class=\"moveright clickable fa fa-arrow-right\"></i></div>" :
                "<i class=\"moveright gray fa fa-arrow-right\"></i></div>";
            form += "<li class=\"p-2\">" + section + ":<input class=\"rg-watch\" type=\"text\" section=\"" + section + "\"\n                     value=\"" + col[0][section] + "\"></li>";
        }
        for (var _b = 0, _c = ["Detail", "Group", "SubTotal", "FinalTotal"]; _b < _c.length; _b++) {
            var section = _c[_b];
            var colinfo = col[0][section];
            var checked = colinfo.show ? " checked=checked" : "";
            form += "<li class=\"px-2\">" + section + ":<div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input rg-watch ml-2\" section=\"" + section + "\" type=\"checkbox\" " + checked + "}\">\n                    <a href=\"#\" class=\"addformatlink font-weight-light font-italic small ml-2\" section=\"" + section + "\">add format</a></li>";
            form += this.ColEditFormats(col[0].Index, section);
        }
        form += "</ul>\n            </div>";
        return form;
    };
    Report.prototype.SetGroupColumns = function () {
        var groups = this.ReportCols.filter(function (col) { return col.Group.show && col.Position > -1; });
        groups.sort(function (a, b) {
            return a.Position - b.Position;
        });
        for (var i = 0; i < groups.length; i++) {
            this.MoveToPosition(groups[i].Position, i);
        }
    };
    Report.prototype.SwitchPosition = function (fromposition, toposition) {
        if (fromposition === toposition) {
            return;
        }
        var from = this.ReportCols.filter(function (col) { return col.Position === fromposition; });
        var to = this.ReportCols.filter(function (col) { return col.Position === toposition; });
        if (from[0]) {
            from[0].Position = toposition;
        }
        if (to[0]) {
            to[0].Position = fromposition;
        }
    };
    Report.prototype.MoveToPosition = function (fromposition, toposition) {
        if (fromposition === toposition) {
            return;
        }
        this.SwitchPosition(fromposition, toposition);
        while (toposition - 1 > fromposition) {
            toposition--;
            this.SwitchPosition(fromposition, toposition);
        }
        while (toposition + 1 < fromposition) {
            toposition++;
            this.SwitchPosition(fromposition, toposition);
        }
    };
    Report.prototype.FormatSelectForm = function () {
        return FormatSelectForm();
    };
    Report.prototype.SortAll = function () {
        var saveheaders = this.ReportRows.shift();
        var cols = this.ReportCols.filter(function (col) { return col.Position > -1; });
        cols.sort(function (a, b) {
            return a.Position - b.Position;
        });
        for (var i = cols.length - 1; i > -1; i--) {
            var c = cols[i];
            if (c.Group.show && !c.Sort) {
                c.Sort = 1;
            }
            if (c.Sort) {
                this.SortData(c.Sort, c);
            }
        }
        this.ReportRows.unshift(saveheaders);
    };
    Report.prototype.SortData = function (direction, col) {
        function asc(a, b) {
            var colA = a[col.Index];
            colA = $.isNumeric(colA) ? colA : colA.toUpperCase();
            var colB = b[col.Index];
            colB = $.isNumeric(colB) ? colB : colB.toUpperCase();
            var comparison = 0;
            if (colA > colB) {
                comparison = 1;
            }
            else if (colA < colB) {
                comparison = -1;
            }
            return comparison;
        }
        function desc(a, b) {
            var colA = a[col.Index];
            colA = $.isNumeric(colA) ? colA : colA.toUpperCase();
            var colB = b[col.Index];
            colB = $.isNumeric(colB) ? colB : colB.toUpperCase();
            var comparison = 0;
            if (colA < colB) {
                comparison = 1;
            }
            else if (colA > colB) {
                comparison = -1;
            }
            return comparison;
        }
        this.ReportRows = direction === "ascending" || direction === 1 ? this.ReportRows.sort(asc) : this.ReportRows.sort(desc);
    };
    Report.prototype.AddRowCol = function () {
        var c = {
            Header: "Total",
            Index: this.ReportCols.length,
            Position: this.ReportCols.length,
            ShowSettingsIcon: true,
            IsRowTotalColumn: true
        };
        var newCol = new Col(c);
        newCol.Detail.formats.push({ type: "class", value: "text-right" });
        newCol.SubTotal.formats.push({ type: "class", value: "text-right" });
        newCol.FinalTotal.formats.push({ type: "class", value: "text-right" });
        newCol.Detail.formats.push({ type: "number", value: "number" });
        newCol.SubTotal.formats.push({ type: "number", value: "number" });
        newCol.FinalTotal.formats.push({ type: "number", value: "number" });
        this.ReportCols.push(newCol);
        this.ReportRows[0].push("Total");
        for (var r = 1; r < this.ReportRows.length; r++) {
            var calcval = 0;
            for (var ci = 0; ci < this.ReportCols.length; ci++) {
                if (this.ReportCols[ci].Position > -1 && $.isNumeric(this.ReportRows[r][ci])) {
                    calcval += Number(this.ReportRows[r][ci]);
                }
            }
            this.ReportRows[r].push(calcval);
        }
    };
    Report.prototype.UpdateRowTotalCol = function () {
        var cols = this.ReportCols.filter(function (col) { return col.Position > -1 && col.IsRowTotalColumn; });
        if (!cols.length) {
            return;
        }
        var colindex = cols[0].Index;
        for (var r = 1; r < this.ReportRows.length; r++) {
            var calcval = 0;
            for (var ci = 0; ci < this.ReportCols.length; ci++) {
                if (ci !== colindex && this.ReportCols[ci].Position > -1 &&
                    $.isNumeric(this.ReportRows[r][ci])) {
                    calcval += Number(this.ReportRows[r][ci]);
                }
            }
            this.ReportRows[r][colindex] = calcval;
        }
    };
    Report.prototype.subTotalRow = function (ReportCols, subtotals) {
        var subtot = 0;
        var subtotalrow = "<tr>";
        for (var i = 0; i < ReportCols.length; i++) {
            var c = ReportCols[i];
            if (c.Position < 0) {
                continue;
            }
            var subformat = void 0;
            if (c.SubTotal.show) {
                subformat = ApplyFormat(c.SubTotal.formats, subtotals[subtot]);
                subtotals[subtot] = 0;
                subtot++;
            }
            else {
                subformat = ApplyFormat(c.SubTotal.formats, "");
            }
            subtotalrow += c.SubTotal.show ? "<td" + subformat.classes + ">" + subformat.formatted + "</td>" : "<td></td>";
        }
        subtotalrow += "</tr>";
        return subtotalrow;
    };
    Report.prototype.finalTotalRow = function (ReportCols, finalTotals) {
        var fintot = 0;
        var finaltotalrow = "<tr>";
        var finalformat;
        for (var i = 0; i < ReportCols.length; i++) {
            var c = ReportCols[i];
            if (c.Position < 0) {
                continue;
            }
            if (c.FinalTotal.show) {
                finalformat = ApplyFormat(c.FinalTotal.formats, finalTotals[fintot]);
                fintot++;
            }
            else {
                finalformat = ApplyFormat(c.FinalTotal.formats, "");
            }
            finaltotalrow += c.FinalTotal.show ? "<td" + finalformat.classes + ">" + finalformat.formatted + "</td>" : "<td></td>";
        }
        finaltotalrow += "</tr>";
        return finaltotalrow;
    };
    return Report;
}());
export default Report;

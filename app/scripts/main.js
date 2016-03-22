'use strict';

function getDemoTheme() {
    var theme = document.body ? $.data(document.body, 'theme') : null
    if (theme == null) {
        theme = '';
    }
    else {
      return theme;
    }
    var themestart = window.location.toString().indexOf('?');
    if (themestart === -1) {
        return '';
    }

    var theme = window.location.toString().substring(1 + themestart);
    if (theme.indexOf('(') >= 0)
    {
        theme = theme.substring(1);
    }
    if (theme.indexOf(')') >= 0) {
        theme = theme.substring(0, theme.indexOf(')'));
    }

    var url = '../../jqwidgets/styles/jqx.' + theme + '.css';
    if (window.location.href.toString().indexOf('angularjs') >= 0) {
        var loc = window.location.href.toString();
        if (loc.indexOf('button') >= 0 ||
        loc.indexOf('grid') >= 0 ||
        loc.indexOf('dropdownlist') >= 0 ||
        loc.indexOf('combobox') >= 0 ||
        loc.indexOf('datatable') >= 0 ||
        loc.indexOf('listbox') >= 0 ||
        loc.indexOf('tabs') >= 0 ||
        loc.indexOf('menu') >= 0 ||
        loc.indexOf('calendar') >= 0 ||
        loc.indexOf('datetimeinput') >= 0 ||
        (loc.indexOf('chart') >= 0 && loc.indexOf('bulletchart') === -1)) {
            url = '../../../jqwidgets/styles/jqx.' + theme + '.css';
        }
    }

    if (document.createStyleSheet !== undefined) {
        var hasStyle = false;
        $.each(document.styleSheets, function (index, value) {
            if (value.href !== undefined && value.href.indexOf(theme) !== -1) {
                hasStyle = true;
                return false;
            }
        });
        if (!hasStyle) {
            document.createStyleSheet(url);
        }
    }
    else {
        var hasStyle = false;
        if (document.styleSheets) {
            $.each(document.styleSheets, function (index, value) {
                if (value.href !== undefined && value.href.indexOf(theme) !== -1) {
                    hasStyle = true;
                    return false;
                }
            });
        }
        if (!hasStyle) {
            var link = $('<link rel="stylesheet" href="' + url + '" media="screen" />');
            link[0].onload = function () {
                if ($.jqx && $.jqx.ready) {
                    $.jqx.ready();
                };
            }
            $(document).find('head').append(link);
        }
    }
    $.jqx = $.jqx || {};
    $.jqx.theme = theme;
    return theme;
};
var theme = '';
try
{
    if (jQuery) {
        theme = getDemoTheme();
        if (window.location.toString().indexOf('file://') >= 0) {
            var loc = window.location.toString();
            var addMessage = false;
            if (loc.indexOf('grid') >= 0 || loc.indexOf('chart') >= 0 || loc.indexOf('tree') >= 0 || loc.indexOf('list') >= 0 || loc.indexOf('combobox') >= 0 || loc.indexOf('php') >= 0 || loc.indexOf('adapter') >= 0 || loc.indexOf('datatable') >= 0 || loc.indexOf('ajax') >= 0) {
                addMessage = true;
            }

            if (addMessage) {
                $(document).ready(function () {
                    setTimeout(function () {
                        $(document.body).prepend($('<div style="font-size: 12px; font-family: Verdana;">Note: To run a sample that includes data binding, you must open it via "http://..." protocol since Ajax makes http requests.</div><br/>'));
                    }
                    , 50);
                });
            }
        }
    }
    else {
        $(document).ready(function () {
            theme = getDemoTheme();
        });
    }
}
catch (error) {
    var er = error;
}

var creditCatalog = [
  { 'id': '1', 'parentid': '-1', 'text': '信用目录', 'code': '1', 'icon': '../../images/jqwidgets/folder.png', 'expanded': true},
  { 'id': '2', 'parentid': '1', 'text': 'AA-失信信息', 'code': 'AA', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '3', 'parentid': '1', 'text': 'AB-一般信息', 'code': 'AB', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '4', 'parentid': '1', 'text': 'AC-荣誉信息', 'code': 'AC', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '5', 'parentid': '1', 'text': 'BA-失信信息', 'code': 'BA', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '6', 'parentid': '1', 'text': 'BB-一般信息', 'code': 'BB', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '7', 'parentid': '1', 'text': 'BC-荣誉信息', 'code': 'BC', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '31', 'code': 'AB01', 'parentid': '3', 'text': 'AB01-登记/注册/备案信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '32', 'code': 'AB02', 'parentid': '3', 'text': 'AB02-分类监管信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '33', 'code': 'AB03', 'parentid': '3', 'text': 'AB03-行政许可信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '34', 'code': 'AB04', 'parentid': '3', 'text': 'AB04-专项或周期性检验/检测/检疫/检查（含年报年审）结果信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '35', 'code': 'AB05', 'parentid': '3', 'text': 'AB05-资质/资格信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '21', 'code': 'AA01', 'parentid': '2', 'text': 'AA01-失信信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '22', 'code': 'AA02', 'parentid': '2', 'text': 'AA02-行政裁决/裁定信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '23', 'code': 'AA03', 'parentid': '2', 'text': 'AA03-行政处罚信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '24', 'code': 'AA04', 'parentid': '2', 'text': 'AA04-行政强制信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '25', 'code': 'AA05', 'parentid': '2', 'text': 'AA05-黑榜信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '26', 'code': 'AA06', 'parentid': '2', 'text': 'AA06-违法信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '27', 'code': 'AA07', 'parentid': '2', 'text': 'AA07-未履行法定义务、违约的信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '41', 'code': 'AC01', 'parentid': '4', 'text': 'AC01-表彰信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '42', 'code': 'AC02', 'parentid': '4', 'text': 'AC02-红榜信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61', 'code': 'BB01', 'parentid': '6', 'text': 'BB01-登记/注册/备案信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62', 'code': 'BB02', 'parentid': '6', 'text': 'BB02-分类监管信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63', 'code': 'BB03', 'parentid': '6', 'text': 'BB03-行政许可信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '64', 'code': 'BB04', 'parentid': '6', 'text': 'BB04-专项或周期性检验/检测/检疫/检查（含年报年审）结果信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65', 'code': 'BB05', 'parentid': '6', 'text': 'BB05-资格证书信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '66', 'code': 'BB06', 'parentid': '6', 'text': 'BB06-社会保障信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '67', 'code': 'BB07', 'parentid': '6', 'text': 'BB07-身份信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '68', 'code': 'BB08', 'parentid': '6', 'text': 'BB08-执业注册信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '51', 'code': 'BA01', 'parentid': '5', 'text': 'BA01-行政处罚信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '52', 'code': 'BA02', 'parentid': '5', 'text': 'BA02-行政强制信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '53', 'code': 'BA03', 'parentid': '5', 'text': 'BA03-黑榜信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '54', 'code': 'BA04', 'parentid': '5', 'text': 'BA04-未履行法定义务、违约的信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '71', 'code': 'BC01', 'parentid': '7', 'text': 'BC01-表彰信息', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '72', 'code': 'BC02', 'parentid': '7', 'text': 'BC02-红榜信息', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '61001', 'code': 'BB01001', 'parentid': '61', 'text': 'BB01001-公证类登记', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61002', 'code': 'BB01002', 'parentid': '61', 'text': 'BB01002-户政类登记', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61003', 'code': 'BB01003', 'parentid': '61', 'text': 'BB01003-交管类备案', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61004', 'code': 'BB01004', 'parentid': '61', 'text': 'BB01004-交管类登记', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61005', 'code': 'BB01005', 'parentid': '61', 'text': 'BB01005-救助类登记', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61006', 'code': 'BB01006', 'parentid': '61', 'text': 'BB01006-律师管理类备案', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61007', 'code': 'BB01007', 'parentid': '61', 'text': 'BB01007-食药类注册', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61008', 'code': 'BB01008', 'parentid': '61', 'text': 'BB01008-医政医管类注册', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61009', 'code': 'BB01009', 'parentid': '61', 'text': 'BB01009-造价管理类登记', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61010', 'code': 'BB01010', 'parentid': '61', 'text': 'BB01010-造价管理类注册', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '61011', 'code': 'BB01011', 'parentid': '61', 'text': 'BB01011-招投标备案', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '62001', 'code': 'BB02001', 'parentid': '62', 'text': 'BB02001-教师培训监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62002', 'code': 'BB02002', 'parentid': '62', 'text': 'BB02001-交管类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62003', 'code': 'BB02003', 'parentid': '62', 'text': 'BB02001-出入境类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62004', 'code': 'BB02004', 'parentid': '62', 'text': 'BB02001-律师管理类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62005', 'code': 'BB02005', 'parentid': '62', 'text': 'BB02001-司法鉴定类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62006', 'code': 'BB02006', 'parentid': '62', 'text': 'BB02001-公证类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62007', 'code': 'BB02007', 'parentid': '62', 'text': 'BB02001-基层工作类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62008', 'code': 'BB02008', 'parentid': '62', 'text': 'BB02001-公共人事类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62009', 'code': 'BB02009', 'parentid': '62', 'text': 'BB02001-土地利用类监管行政确认', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62010', 'code': 'BB02010', 'parentid': '62', 'text': 'BB02001-国土规划类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62011', 'code': 'BB02011', 'parentid': '62', 'text': 'BB02001-勘察设计类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62012', 'code': 'BB02012', 'parentid': '62', 'text': 'BB02001-资质管理类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62013', 'code': 'BB02013', 'parentid': '62', 'text': 'BB02001-造价管理类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62014', 'code': 'BB02014', 'parentid': '62', 'text': 'BB02001-安全管理类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62015', 'code': 'BB02015', 'parentid': '62', 'text': 'BB02001-建筑业管理类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62016', 'code': 'BB02016', 'parentid': '62', 'text': 'BB02001-交通运输类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62017', 'code': 'BB02017', 'parentid': '62', 'text': 'BB02001-农业生态类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62018', 'code': 'BB02018', 'parentid': '62', 'text': 'BB02001-市出资企业类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62019', 'code': 'BB02019', 'parentid': '62', 'text': 'BB02001-计量工作类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62020', 'code': 'BB02020', 'parentid': '62', 'text': 'BB02001-住房公积金类监管', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62021', 'code': 'BB02021', 'parentid': '62', 'text': 'BB02001-烟草行政监督检查', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '62022', 'code': 'BB02022', 'parentid': '62', 'text': 'BB02001-路桥收费类监管', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '63001', 'code': 'BB03001', 'parentid': '63', 'text': 'BB03001-治安类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63002', 'code': 'BB03002', 'parentid': '63', 'text': 'BB03002-交管类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63003', 'code': 'BB03003', 'parentid': '63', 'text': 'BB03003-基层工作类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63004', 'code': 'BB03004', 'parentid': '63', 'text': 'BB03004-城乡就业类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63005', 'code': 'BB03005', 'parentid': '63', 'text': 'BB03005-国土规划类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63006', 'code': 'BB03006', 'parentid': '63', 'text': 'BB03006-环境卫生类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63007', 'code': 'BB03007', 'parentid': '63', 'text': 'BB03007-交通运输类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63008', 'code': 'BB03008', 'parentid': '63', 'text': 'BB03008-文化产业类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63009', 'code': 'BB03009', 'parentid': '63', 'text': 'BB03009-妇幼健康类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63010', 'code': 'BB03010', 'parentid': '63', 'text': 'BB03010-医政医管类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63011', 'code': 'BB03011', 'parentid': '63', 'text': 'BB03011-计量工作类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63012', 'code': 'BB03012', 'parentid': '63', 'text': 'BB03012-特种设备类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63013', 'code': 'BB03013', 'parentid': '63', 'text': 'BB03013-综合安全监管类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '63014', 'code': 'BB03014', 'parentid': '63', 'text': 'BB03014-资源管理类行政许可', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '65001', 'code': 'BB05001', 'parentid': '65', 'text': 'BB05001-教育类资格证书', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65002', 'code': 'BB05002', 'parentid': '65', 'text': 'BB05002-交管类行政许可', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65003', 'code': 'BB05003', 'parentid': '65', 'text': 'BB05003-司法鉴定类资格', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65004', 'code': 'BB05004', 'parentid': '65', 'text': 'BB05004-律师管理类服务', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65005', 'code': 'BB05005', 'parentid': '65', 'text': 'BB05005-律师管理类备案', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65006', 'code': 'BB05006', 'parentid': '65', 'text': 'BB05006-人才服务类资质', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65007', 'code': 'BB05007', 'parentid': '65', 'text': 'BB05007-社会保险类资质', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65008', 'code': 'BB05008', 'parentid': '65', 'text': 'BB05008-燃气热力类资质', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65009', 'code': 'BB05009', 'parentid': '65', 'text': 'BB05009-交通运输类资格证书', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65010', 'code': 'BB05010', 'parentid': '65', 'text': 'BB05010-经济经营类资格', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65011', 'code': 'BB05011', 'parentid': '65', 'text': 'BB05011-运动员等级资质', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65012', 'code': 'BB05012', 'parentid': '65', 'text': 'BB05012-指导员等级资质', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65013', 'code': 'BB05013', 'parentid': '65', 'text': 'BB05013-体育从业人员资格', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '65014', 'code': 'BB05014', 'parentid': '65', 'text': 'BB05014-《残疾人证》资格证书', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '51001', 'code': 'BA05001', 'parentid': '51', 'text': 'BA05001-教育类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51002', 'code': 'BA05002', 'parentid': '51', 'text': 'BA05002-知识产权类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51003', 'code': 'BA05003', 'parentid': '51', 'text': 'BA05003-民宗类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51004', 'code': 'BA05004', 'parentid': '51', 'text': 'BA05004-扰乱社会治安的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51005', 'code': 'BA05005', 'parentid': '51', 'text': 'BA05005-危害公共安全的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51006', 'code': 'BA05006', 'parentid': '51', 'text': 'BA05006-交通违法的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51007', 'code': 'BA05007', 'parentid': '51', 'text': 'BA05007-地名管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51008', 'code': 'BA05008', 'parentid': '51', 'text': 'BA05008-基层工作类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51009', 'code': 'BA05009', 'parentid': '51', 'text': 'BA05009-法律援助类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51010', 'code': 'BA05010', 'parentid': '51', 'text': 'BA05010-公证类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51011', 'code': 'BA05011', 'parentid': '51', 'text': 'BA05011-律师管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51012', 'code': 'BA05012', 'parentid': '51', 'text': 'BA05012-会计类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51013', 'code': 'BA05013', 'parentid': '51', 'text': 'BA05013-监督检查类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51014', 'code': 'BA05014', 'parentid': '51', 'text': 'BA05014-政府采购类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51015', 'code': 'BA05015', 'parentid': '51', 'text': 'BA05015-土地利用类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51016', 'code': 'BA05016', 'parentid': '51', 'text': 'BA05016-地质矿产类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51017', 'code': 'BA05017', 'parentid': '51', 'text': 'BA05017-测绘勘察类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51018', 'code': 'BA05018', 'parentid': '51', 'text': 'BA05018-污染防治类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51019', 'code': 'BA05019', 'parentid': '51', 'text': 'BA05019-勘察设计类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51020', 'code': 'BA05020', 'parentid': '51', 'text': 'BA05020-质量管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51021', 'code': 'BA05021', 'parentid': '51', 'text': 'BA05021-造价管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51022', 'code': 'BA05022', 'parentid': '51', 'text': 'BA05022-资质管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51023', 'code': 'BA05023', 'parentid': '51', 'text': 'BA05023-环境卫生类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51024', 'code': 'BA05024', 'parentid': '51', 'text': 'BA05024-燃气热力类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51025', 'code': 'BA05025', 'parentid': '51', 'text': 'BA05025-建筑垃圾类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51026', 'code': 'BA05026', 'parentid': '51', 'text': 'BA05026-运输违规违法类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51027', 'code': 'BA05027', 'parentid': '51', 'text': 'BA05027-水资源类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51028', 'code': 'BA05028', 'parentid': '51', 'text': 'BA05028-污水类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51029', 'code': 'BA05029', 'parentid': '51', 'text': 'BA05029-水利水保类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51030', 'code': 'BA05030', 'parentid': '51', 'text': 'BA05030-农产品质量安全类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51031', 'code': 'BA05031', 'parentid': '51', 'text': 'BA05031-畜牧兽医类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51032', 'code': 'BA05032', 'parentid': '51', 'text': 'BA05032-水产类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51033', 'code': 'BA05033', 'parentid': '51', 'text': 'BA05033-新闻出版类行政处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51034', 'code': 'BA05034', 'parentid': '51', 'text': 'BA05034-广播影视类行政处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51035', 'code': 'BA05035', 'parentid': '51', 'text': 'BA05035-文物博览类行政处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51036', 'code': 'BA05036', 'parentid': '51', 'text': 'BA05036-疾控类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51037', 'code': 'BA05037', 'parentid': '51', 'text': 'BA05037-医政医管类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51038', 'code': 'BA05038', 'parentid': '51', 'text': 'BA05038-计生类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51039', 'code': 'BA05039', 'parentid': '51', 'text': 'BA05039-妇幼健康类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51040', 'code': 'BA05040', 'parentid': '51', 'text': 'BA05040-基层卫生类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51041', 'code': 'BA05041', 'parentid': '51', 'text': 'BA05041-卫生类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51042', 'code': 'BA05042', 'parentid': '51', 'text': 'BA05042-中医类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51043', 'code': 'BA05043', 'parentid': '51', 'text': 'BA05043-药品类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51044', 'code': 'BA05044', 'parentid': '51', 'text': 'BA05044-化妆品类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51045', 'code': 'BA05045', 'parentid': '51', 'text': 'BA05045-优秀历史建筑类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51046', 'code': 'BA05046', 'parentid': '51', 'text': 'BA05046-房屋安全类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51047', 'code': 'BA05047', 'parentid': '51', 'text': 'BA05047-房地产市场管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51048', 'code': 'BA05048', 'parentid': '51', 'text': 'BA05048-特种设备类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51049', 'code': 'BA05049', 'parentid': '51', 'text': 'BA05049-质监类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51050', 'code': 'BA05050', 'parentid': '51', 'text': 'BA05050-旅游市场类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51051', 'code': 'BA05051', 'parentid': '51', 'text': 'BA05051-整理保管类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51052', 'code': 'BA05052', 'parentid': '51', 'text': 'BA05052-资源管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51053', 'code': 'BA05053', 'parentid': '51', 'text': 'BA05053-动物保护类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51054', 'code': 'BA05054', 'parentid': '51', 'text': 'BA05054-森林防火类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51055', 'code': 'BA05055', 'parentid': '51', 'text': 'BA05055-湿地保护类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51056', 'code': 'BA05056', 'parentid': '51', 'text': 'BA05056-治安类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51057', 'code': 'BA05057', 'parentid': '51', 'text': 'BA05057-住房公积金类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51058', 'code': 'BA05058', 'parentid': '51', 'text': 'BA05058-烟草营销管理类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51059', 'code': 'BA05059', 'parentid': '51', 'text': 'BA05059-路桥收费类的处罚', 'icon': '../../images/jqwidgets/folder.png' },
  { 'id': '51060', 'code': 'BA05060', 'parentid': '51', 'text': 'BA05060-招投标类的处罚', 'icon': '../../images/jqwidgets/folder.png' },

  { 'id': '71001', 'code': 'BC01001', 'parentid': '71', 'text': 'BC01001-名师表彰', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '71002', 'code': 'BC01002', 'parentid': '71', 'text': 'BC01002-社会保险类奖励', 'icon': '../../images/jqwidgets/folder.png'},
  { 'id': '71003', 'code': 'BC01003', 'parentid': '71', 'text': 'BC01003-质量贡献奖', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '6300101', 'code': 'B07001', 'parentid': '63001', 'text': 'B07001-集会、游行、示威许可', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '6300102', 'code': 'B07002', 'parentid': '63001', 'text': 'B07002-爆破作业人员许可', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '6300103', 'code': 'B07003', 'parentid': '63001', 'text': 'B07003-养犬许可', 'icon': '../../images/jqwidgets/settings.png'},

  { 'id': '68001', 'code': 'BB08001', 'parentid': '68', 'text': 'BB08001-教育系统执业', 'icon': '../../images/jqwidgets/folder.png'},

  { 'id': '72001', 'code': 'BC02001', 'parentid': '72', 'text': 'BC02001-各部门通用指标', 'icon': '../../images/jqwidgets/folder.png'},

  // 市教育局
  { 'id': '6500101', 'code': 'B04001', 'parentid': '65001', 'text': 'B04001-教师资格认定（高中阶段）', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '6200101', 'code': 'B04002', 'parentid': '62001', 'text': 'B04002-对全市教育系统干部及中小学、幼儿园骨干教师市级参加培训的认定', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '6800101', 'code': 'B04003', 'parentid': '68001', 'text': 'B04003-全市教育系统录用高校毕业生的就职情况', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '5100101', 'code': 'B04004', 'parentid': '51001', 'text': 'B04004-对弄虚作假、骗取教师资格或者品行不良、侮辱学生的教师的处罚', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '5100102', 'code': 'B04005', 'parentid': '51001', 'text': 'B04005-对在国家教育考试中作弊的处罚（18周岁以下的未成年人除外）', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '7100101', 'code': 'B04006', 'parentid': '71001', 'text': 'B04006-市学科带头人、市优秀青年教师评审认定', 'icon': '../../images/jqwidgets/settings.png'},
  { 'id': '7100102', 'code': 'B04007', 'parentid': '71001', 'text': 'B04007-武汉市名校长评审认定', 'icon': '../../images/jqwidgets/settings.png'},

  { 'id': '7200101', 'code': 'B00001', 'parentid': '72001', 'text': 'B00001-诚信红榜', 'icon': '../../images/jqwidgets/settings.png'}


];

var creditCatalogSource =
{
  datatype: 'json',
  datafields: [
    {name: 'id'},
    {name: 'parentid'},
    {name: 'text'},
    {name: 'code'},
    {name: 'icon'},
    {name: 'expanded'}
  ],
  id: 'id',
  localdata: creditCatalog
};

// create data adapter.
var creditCatalogDataAdapter = new $.jqx.dataAdapter(creditCatalogSource);
// perform Data Binding.
creditCatalogDataAdapter.dataBind();
// get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents
// the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter
// specifies the mapping between the 'text' and 'label' fields.
var creditCatalogRecords = creditCatalogDataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);
//usage: $('#creditCatalogTree').jqxTree({ source: creditCatalogRecords, width: '300px'});

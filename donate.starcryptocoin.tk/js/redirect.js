var CRedirectName = 'page_id_mirntk';
var redirectLastPage = true;



var cookee_page_id;
var pages = [
    { id: 0, page: "index.php" },
    { id: 1, page: "omn1ex.php"},
    { id: 2, page: "cab1tksn.php"},
    { id: 3, page: "omn01tex.php"},
    { id: 4, page: "cab2ctym.php"},
    { id: 5, page: "omn02tbx.php"},
    { id: 6, page: "cab3ysnh.php"},
    { id: 7, page: "omn03zkdu.php"},
    { id: 8, page: "cab4ztmn.php"},
    { id: 9, page: "omn04cmdu.php"},
    { id: 10, page: "cab5anhg.php"},
    { id: 11, page: "omn05cxxu.php"},
    { id: 12, page: "cab6anmg.php"},
    { id: 13, page: "omn06vlzu.php"},
    { id: 14, page: "cab7zopc.php"},
    { id: 15, page: "omn07clon.php"},
    { id: 16, page: "cab8jycv.php"},
    { id: 17, page: "omn08klpx.php"},
    { id: 18, page: "cab9mzpb.php"},
    { id: 19, page: "omn09nxz.php"},
    { id: 20, page: "cab10hapv.php" },
    { id: 21, page: "omn10xxzu.php" },
    { id: 22, page: "cab11zocz.php" },
    { id: 23, page: "omn11ffcl.php" },
    { id: 24, page: "cab12ophbg.php" },
    { id: 25, page: "omn12lknm.php" },
    { id: 26, page: "cab13zmvb.php" },
    { id: 27, page: "omn13mzit.php" },
    { id: 28, page: "cab14mzub.php" },
    { id: 29, page: "omn14mzzb.php" },
    { id: 30, page: "cab15vxzm.php" },
    { id: 31, page: "omn15kvzm.php" },
    { id: 32, page: "cab16obzm.php" },
    { id: 33, page: "omn16mzrf.php" },
    { id: 34, page: "cab17bbzl.php" },
    { id: 35, page: "omn17mzql.php" },
    { id: 36, page: "cab18mzmc.php" },
    { id: 37, page: "omn18mzbb.php" },
    { id: 38, page: "cab19unvx.php" },
    { id: 39, page: "omn19ztob.php" },
    { id: 40, page: "cab20gnvx.php" },
    { id: 41, page: "omn20slob.php" },
    { id: 42, page: "cab21nzw.php" },
    { id: 43, page: "omn21nzw.php" },
    { id: 44, page: "cab22nzie.php" },
    { id: 45, page: "omn22mziy.php" },
    { id: 46, page: "cab23lert.php" },
    { id: 47, page: "omn23zmtn.php" },
    { id: 48, page: "cab24mznk.php" },
    { id: 49, page: "omn24mbzi.php" },
    { id: 50, page: "cab25kfmi.php" },
    { id: 51, page: "omn25nzvt.php" },
    { id: 52, page: "cab26mzit.php" },
    { id: 53, page: "omn26lkio.php" },
    { id: 54, page: "cab27lkib.php" },
    { id: 55, page: "omn27mncv.php" },
    { id: 56, page: "cab28vzik.php" },
    { id: 57, page: "omn28nzv.php" },
    { id: 58, page: "cab29mzor.php" },
    { id: 59, page: "omn29mzit.php" },
    { id: 60, page: "cab30vpor.php" },
    { id: 61, page: "omn30mzoit.php" },
    { id: 62, page: "cab31lopn.php" },
    { id: 63, page: "omn31bipz.php" },
    { id: 64, page: "cab32mopv.php" },
    { id: 65, page: "omn32lkxm.php" },
    { id: 66, page: "cab33bytv.php" },
    { id: 67, page: "omn33znit.php" },
    { id: 68, page: "cab34btzr.php" },
    { id: 69, page: "omn34nbzi.php" },
    { id: 70, page: "cab35zzbu.php" },
    { id: 71, page: "omn35czkfi.php" },
    { id: 72, page: "cab36mzor.php" },
    { id: 73, page: "omn36bzmu.php" },
    { id: 74, page: "cab37nytz.php" },
    { id: 75, page: "omn37mzip.php" },
    { id: 76, page: "cab38cvtz.php" },
    { id: 77, page: "omn38mzqp.php" },
    { id: 78, page: "cab39nziz.php" },
    { id: 79, page: "omn39bzur.php" },
    { id: 80, page: "cab40buam.php" },
    { id: 81, page: "omn40grtc.php" },
    { id: 82, page: "cab41mzam.php" },
    { id: 83, page: "omn41mnzi.php" },
    { id: 84, page: "cab42iver.php" },
    { id: 85, page: "omn42vter.php" },
    { id: 86, page: "cab43nytv.php" },
    { id: 87, page: "omn43lkxr.php" },
    { id: 88, page: "cab44mlzv.php" },
    { id: 89, page: "omn44katr.php" },
    { id: 90, page: "cab45khyt.php" },
    { id: 91, page: "omn45mitg.php" },
    { id: 92, page: "cab46mrtc.php" },
    { id: 93, page: "omn46ntxz.php" },
    { id: 94, page: "cab47nipc.php" },
    { id: 95, page: "omn47mvmv.php" },
    { id: 96, page: "cab48tiob.php" },
    { id: 97, page: "omn48mipx.php" },
    { id: 98, page: "cab49jipx.php" },
    { id: 99, page: "omn49mztk.php" },
    { id: 100, page: "cab50mzob.php" },
    { id: 101, page: "omn50pzmc.php" },
    { id: 102, page: "cab51mzit.php" },
    { id: 103, page: "omn51zitv.php" },
    { id: 104, page: "cab52mzbt.php" },
    { id: 105, page: "omn52mzpa.php" },
    { id: 106, page: "cab53bazp.php" },
    { id: 107, page: "omn53kapc.php" },
    { id: 108, page: "cab54klot.php" },
    { id: 109, page: "omn54ccfe.php" },
    { id: 110, page: "cab55mutb.php" },
    { id: 111, page: "omn55mzpo.php" },
    { id: 112, page: "cab56kapl.php" },
];



/* history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
}; */





/*
$(document).ready(function() {
    const timePay = 45;
    const printTime = 5;
    const linkPay = 'https://shorturl.services';
    var autoPay = false;
    $('body .autoPay').each(function(el, i) {
        autoPay = true;
    });
    if (autoPay) {
        var t = timePay;
        setInterval(function() {
            t -= 1;
            if (t <= 0) {
                window.location.href = linkPay;
                document.location = linkPay;
            }
            else if (t <= printTime) {
                var text = 'Вы будете перенаправлены на оплату через ' + t + '...';
                $('body .autoPay').html(text);
                $('body .autoPay').val(text);
            }
        }, 1000);
    }
});
*/








function setCookie(name, value, days) {
    localStorage[name] = value;
}

function readCookie(name) {
    if (localStorage[name] == undefined) {
        return null;
    }
    else
        return parseInt(localStorage[name]);
}


function redirectPage(page_idLocal) {
    var page = '';


    if (page_idLocal > pages.length) {
        page_idLocal = pages.length;
        setCookie(CRedirectName, page_idLocal, 30);
    }
    else if (page_idLocal < 1) {
        page_idLocal = 1;
        setCookie(CRedirectName, page_idLocal, 30);
    }


    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == page_idLocal) {
            page = pages[i].page;
            break;
        }
    }
    if (redirectLastPage) {
        window.location.href = page;
        document.location = page;
    }

    // location.reload();
}

function load() {
    cookee_page_id = readCookie(CRedirectName);
    if (cookee_page_id == null) {
        setCookie(CRedirectName, page_id, 30);
    }
    // console.log(cookee_page_id);
}

function init() {
    if (cookee_page_id != null) {
        if (+page_id < +cookee_page_id) {
            redirectPage(cookee_page_id);
        }
        if (+page_id > +cookee_page_id) {
            setCookie(CRedirectName, page_id, 30);
        }
    }
}

window.onload = function () {
    load(),
        init();




    uprBonus();

};
load();
init();





var waitTUpdateVal = 0;
function waitTUpdate() {
    if (waitTUpdateVal == 1)
        $('.pointsSC').text('..');
    else if (waitTUpdateVal == 2)
        $('.pointsSC').text('...');
    else {
        waitTUpdateVal = 0;
        $('.pointsSC').text('.');
    }
    waitTUpdateVal++;
    return setTimeout("waitTUpdate()", 700);
}
waitTUpdate();

var notificationDiv = $('<div class="notificationNewTH"><img src="img/coin.gif"><span></span><img src="img/coin.gif"></div>');
notificationDiv.appendTo('html');

// notificationDiv.click(function(){notificationHide()});

var notificationHideShow = false;
var notificationHideInt = 0;
function notificationShow(name, money) {
    notificationHideInt++;
    notificationHideShow = true;
    notificationDiv.find('span').html('<strong>' + name + '</strong> вывел(а) <strong>' + money.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб </strong>');
    notificationDiv.addClass('show');
    if (notificationHideTime > 0) {
        var lid = notificationHideInt;
        setTimeout(function () { notificationHide(lid); }, notificationHideTime);
    }
    return 1;
}
function notificationHide(iIBH) {
    if (notificationHideInt == iIBH || iIBH == 0 || iIBH == undefined) {
        notificationDiv.removeClass('show');
        notificationHideShow = false;
        return 1;
    }
    else {
        return 0;
    }
}

var isAddNotificationPage = false;
function addNotificationPage() {
    var time = notificationInterval + (notificationInterval / 2) * Math.random();
    var id = Math.round(mDataNotification.length * Math.random());
    if (id >= mDataNotification.length)
        id = mDataNotification.length - 1;

    var name = mDataNotification[id].name;
    var money = Math.round((moneyNotIn[0] + ((moneyNotIn[1] - moneyNotIn[0]) * Math.random())) / 500) * 500 /* Сумма кратная 500 */;

    if (!isAddNotificationPage) {
        isAddNotificationPage = true;
    }
    else {
        if (uprBonus(money))
            notificationShow(name, money);
    }
    setTimeout("addNotificationPage()", time);
}

function uprBonus(money = 0) {
    var m = parseInt(localStorage['upriMoney']);
    var r = true;

    m += money;
    $('#upriMoney').text(m.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб');
    $('#upriTime').text(getTime());

    localStorage['upriMoney'] = m;

    return r;
}



function getTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    return h + ':' + m;
}
$('#upriTime').text(getTime());
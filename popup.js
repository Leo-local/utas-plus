var xhr = new XMLHttpRequest();
var urls = new Array();
var sb = new Array();
const tmp = "https://utas.adm.u-tokyo.ac.jp";
xhr.responseType  = "document";

xhr.onload = function(e){
    var dom = e.target.responseXML;
    var s1 = dom.querySelectorAll('#jugyo_portfolio_div table tbody tr td a');
    for (var i = 0; i < s1.length; i++) {
        var url = s1[i].getAttribute('href');
        url = tmp + url;
        urls.push(url);
    }

    //すべての授業先のurlへ
    for(var i=0; i < urls.length; i++){
        var xhr2 = new XMLHttpRequest();
        xhr2.responseType = "document";

        xhr2.onload = function(e){
            var dom2 = e.target.responseXML;
            var s2 = dom2.querySelectorAll('#detail ul.item li');

            for (var j = 0; j < s2.length; j++) {
                var urls2 = s2[j].getAttribute('onclick');
                urls2 = urls2.match(/\((.+)\)/)[1].slice(1,-1);
                urls2 = tmp + urls2;

                var xhr3 = new XMLHttpRequest();
                xhr3.responseType = "document";

                xhr3.onload = function(e){
                    var dom3 = e.target.responseXML;
                    var s3_1 = dom3.querySelectorAll('#tabs-1 table tbody tr td');
                    var s3_2 = dom3.querySelectorAll('#tabs-2 table tbody tr td');

                    $('#c1').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_1[3].innerText}<br>${s3_1[4].innerText}</td></tr>`);
                    $('#c2').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_1[5].innerText}<br>${s3_1[6].innerText}</td></tr>`);
                    $('#c3').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_1[10].innerText}</td></tr>`);
                    $('#c4').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_1[11].innerText}</td></tr>`);
                    $('#c5').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_1[12].innerText}</td></tr>`);
                    $('#c6').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[0].innerText}<br>${s3_2[1].innerText}</td></tr>`);
                    $('#c7').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[5].innerText}<br>${s3_2[6].innerText}<br>${s3_2[7].innerText}</td></tr>`);
                    $('#c8').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[8].innerText}<br>${s3_2[9].innerText}</td></tr>`);
                    $('#c9').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[10].innerText}</td></tr>`);
                    $('#c10').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[13].innerText}<br>${s3_2[14].innerText}</td></tr>`);
                    $('#c11').append(`<tr><th class="syllabus-prin" width="200">${s3_1[0].innerText}</th><td class="syllabus-break-word">${s3_2[22].innerText}<br>${s3_2[23].innerText}<br>${s3_2[24].innerText}</td></tr>`);
                };

                xhr3.open("get", urls2);
                xhr3.send();
            }
        };

        xhr2.open("get", urls[i]);
        xhr2.send();
    };
};

xhr.open("get", "https://utas.adm.u-tokyo.ac.jp/campusweb/campussquare.do?_flowId=JPW0001000-flow");//2023S
//xhr.open("get", "https://utas.adm.u-tokyo.ac.jp/campusweb/campussquare.do?_flowExecutionKey=_c319C668E-09E4-743E-10AA-75424B4ED39E_k47C5BA96-330F-00DD-BAEE-8E8A62168507"); //2022S
//履修科目一覧からソース表示して同定する。
xhr.send();
$(window).load(function(){
    // var data = "每個人的體質不一樣，有些人感染登革熱時，症狀輕微，甚至不會出現生病症狀。而典型登革熱的症狀則是會有突發性的高燒（≧38℃）、後眼窩痛、肌肉痛、關節痛及出疹等現象；然而，若是先後感染不同型別之登革病毒，有更高機率導致較嚴重的臨床症狀，如果沒有及時就醫或治療，死亡率可以高達20%以上，所以民眾千萬不能掉以輕心！發病後的第3~5天，若病情突然加劇，如發生劇烈疼痛、抽搐、昏迷、意識狀況及血壓改變等，須注意是否進展為登革熱重症。  ";

    var dl_A = new Array("發燒", "頭痛", "後眼窩痛", "嘔吐", "喉嚨痛", "出現幻覺", "吸奶困難", "牙關緊閉", "頭皮發癢");
    var dl_B = new Array("咳血", "鼻炎", "耳聾", "青光眼", "白內障", "腮腺疼痛", "喉痛", "頸部僵硬", "意識不清", "腦膜炎", "喪失平衡感", "抽搐");
    var dl_C = new Array("結膜炎", "精神不安", "病毒性腦炎", "厭食", "食慾不振", "咳嗽", "昏睡", "眼瞼下垂", "吞嚥困難", "視力模糊", "畏光", "貧血", "鐡鏽色痰");
    var dl_D = new Array("出疹", "淋巴結腫大", "盜汗", "食慾不振", "腹瀉", "惡寒", "虛脫", "紅斑", "冷顫", "斑丘疹");
    var dl_E = new Array("皮疹", "水皰", "心肌炎", "出血性腹瀉", "腎衰竭", "心律減慢", "脾臟腫大", "便秘", "心律徐緩");
    var dl_F = new Array("胃痛", "丘狀樣紅疹", "肝脾腫大", "肌肉痛", "關節痛", "頸僵直", "膽管阻塞", "腸道阻塞", "寒顫", "胸痛", "肛門癢", "脹氣", "蜂窩組織炎");
    var dl_G = new Array("會厭炎", "菌血症", "肺炎", "前列腺發炎", "尿道炎", "子宮頸炎", "膀胱炎", "黃疸", "茶色尿", "痙攣", "黑色焦痂");
    var dl_H = new Array("水腫", "水泡", "急性皮膚化膿", "腹部僵硬", "皮膚劇癢", "膿瘍性丘疹", "低血壓", "自發性出血", "下痢", "裏急後重", "癲癇", "劇烈抽動");

    function search(str1, str2) {
        //var have=false;

        if (str2.indexOf(str1) != -1)
            return true;
        else
            return false;
    }

    function show_dl(){
        var data = $("#intro").text();
        $('#dl_A').text("");
        $('#dl_B').text("");
        $('#dl_C').text("");
        $('#dl_D').text("");
        $('#dl_E').text("");
        $('#dl_F').text("");
        $('#dl_G').text("");
        $('#dl_H').text("");
        $('#dl_A').hide('100');
        $('#svg_2').hide('100');
        $('#svg_5').hide('100');
        $('#dl_B').hide('100');
        $('#svg_9').hide('100');
        $('#svg_10').hide('100');
        $('#dl_C').hide('100');
        $('#svg_8').hide('100');
        $('#svg_7').hide('100');
        $('#dl_D').hide('100');
        $('#svg_12').hide('100');
        $('#svg_13').hide('100');
        $('#dl_E').hide('100');
        $('#svg_22').hide('100');
        $('#svg_23').hide('100');
        $('#dl_F').hide('100');
        $('#svg_16').hide('100');
        $('#svg_17').hide('100');


        $('#dl_G').hide('100');
        $('#svg_25').hide('100');
        $('#svg_26').hide('100');
        $('#dl_H').hide('100');
        $('#svg_29').hide('100');
        $('#svg_30').hide('100');
        for (var i = 0; i <= dl_A.length; i++) {
            if (search(dl_A[i], data)) {
                $('#dl_A').show('100');
                $('#svg_2').show('100');
                $('#svg_5').show('100');
                $('#dl_A').text($('#dl_A').text() + " " + dl_A[i]);
                console.log("got1");
            }
        }
        for (var i = 0; i <= dl_B.length; i++) {
            if (search(dl_B[i], data)) {
                $('#dl_B').show('100');
                $('#svg_9').show('100');
                $('#svg_10').show('100');
                $('#dl_B').text($('#dl_B').text() + " " + dl_B[i]);
                console.log("got2");
            }
        }
        for (var i = 0; i <= dl_C.length; i++) {
            if (search(dl_C[i], data)) {
                $('#dl_C').show('100');
                $('#svg_8').show('100');
                $('#svg_7').show('100');
                $('#dl_C').text($('#dl_C').text() + " " + dl_C[i]);
                console.log("got3");
            }
        }
        for (var i = 0; i <= dl_D.length; i++) {
            if (search(dl_D[i], data)) {
                $('#dl_D').show('100');
                $('#svg_12').show('100');
                $('#svg_13').show('100');
                $('#dl_D').text($('#dl_D').text() + " " + dl_D[i]);
                console.log("got4");
            }
        }
        for (var i = 0; i <= dl_E.length; i++) {
            if (search(dl_E[i], data)) {
                $('#dl_E').show('100');
                $('#svg_22').show('100');
                $('#svg_23').show('100');
                $('#dl_E').text($('#dl_E').text() + " " + dl_E[i]);
                console.log("got5");
            }
        }
        for (var i = 0; i <= dl_F.length; i++) {
            if (search(dl_F[i], data)) {
                $('#dl_F').show('100');
                $('#svg_16').show('100');
                $('#svg_17').show('100');
                $('#dl_F').text($('#dl_F').text() + " " + dl_F[i]);
                console.log("got6");
            }
        }
        for (var i = 0; i <= dl_G.length; i++) {
            if (search(dl_G[i], data)) {
                $('#dl_G').show('100');
                $('#svg_25').show('100');
                $('#svg_26').show('100');
                $('#dl_G').text($('#dl_G').text() + " " + dl_G[i]);
                console.log("got7");
            }
        }
        for (var i = 0; i <= dl_H.length; i++) {
            if (search(dl_H[i], data)) {
                $('#dl_H').show('100');
                $('#svg_29').show('100');
                $('#svg_30').show('100');
                $('#dl_H').text($('#dl_H').text() + " " + dl_H[i]);
                console.log("got8");
            }
        }
    }
    show_dl();


});

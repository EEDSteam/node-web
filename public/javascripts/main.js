$(document).ready(function() {




    //----------------------------------------------- header-water---------------------------------------------
    $(function() {
        $('#demo-menu-lower-left').click(function() {
            $('#overlay').fadeIn(200, function() {
                $('#box').animate({
                    'top': '100px'
                }, 200);
            });
            return false;
        });
        $('#boxclose').click(function() {
            $('#box').animate({
                'top': '-800px'
            }, 500, function() {
                $('#overlay').fadeOut('fast');
            });
        });

    });

    $(".buttonHolder").hide();
    $(".wine").click(function() {
        $(".wine").addClass("disapear").delay(3000).queue(function() {
            $(".fly").hide("slow").dequeue();

        });
        $(".buttonHolder").show("slow");


    });




    //----------------------------------------------Type--------------------------------------------------
    if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
    }
    var active1 = 0;
    var active2 = 0;
    var active3 = 0;
    $('.mask2').click(function() {

        var act1 = false;
        var act2 = false;
        var act3 = false;
        if (active1 == 0)
            $('.circle_manu').find('.test1').css({
                'background-color': 'gray',
                'transform': 'translate(0px,125px)'
            });

        $('.test1').on('mousedown touchstart', function() {
            if (!act1) {
                $(this).find('.3rd_circlemenu1_1').css({
                    'background-color': 'gray',
                    'transform': 'translate(0px,125px)'
                });
                $('.test3').find(".testbutton").css({
                    'transform': 'none'
                });
                act3 = !act3;
                $('.test2').find(".testbutton").css({
                    'transform': 'none'
                });
                act2 = !act2;
            } else
                $(this).find('.3rd_circlemenu1_1').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act1)
                $(this).find('.3rd_circlemenu1_2').css({
                    'background-color': 'gray',
                    'transform': 'translate(-60px,105px)'
                });
            else
                $(this).find('.3rd_circlemenu1_2').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act1)
                $(this).find('.3rd_circlemenu1_3').css({
                    'background-color': 'gray',
                    'transform': 'translate(-105px,60px)'
                });
            else
                $(this).find('.3rd_circlemenu1_3').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act1)
                $(this).find('.3rd_circlemenu1_4').css({
                    'background-color': 'gray',
                    'transform': 'translate(-125px,0px)'
                });
            else
                $(this).find('.3rd_circlemenu1_4').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            act1 = !act1;
        }); //第一個

        if (active1 == 1) {
            $('.circle_manu').find('.test1').css({
                'background-color': 'dimGray',
                'transform': 'none'
            });
            $('.test3').find(".testbutton").css({
                'transform': 'none'
            });
            act3 = !act3;
            $('.test2').find(".testbutton").css({
                'transform': 'none'
            });
            act2 = !act2;
        }

        if (active2 == 0)
            $('.circle_manu').find('.test2').css({
                'background-color': 'gray',
                'transform': 'translate(0px,250px)'
            });

        $('.test2').on('mousedown touchstart', function() {
            if (!act2) {
                $(this).find('.3rd_circlemenu2_1').css({

                    'transform': 'translate(-75px,-100px)'
                });
                $('.test3').find(".testbutton").css({
                    'transform': 'none'
                });
                act3 = !act3;
            } else
                $(this).find('.3rd_circlemenu2_1').css({

                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.3rd_circlemenu2_2').css({

                    'transform': 'translate(-115px,-55px)'
                });
            else
                $(this).find('.3rd_circlemenu2_2').css({
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.3rd_circlemenu2_3').css({
                    'transform': 'translate(-125px,0px)'
                });
            else
                $(this).find('.3rd_circlemenu2_3').css({
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.3rd_circlemenu2_4').css({
                    'transform': 'translate(-115px,55px)'
                });
            else
                $(this).find('.3rd_circlemenu2_4').css({
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.3rd_circlemenu2_5').css({
                    'transform': 'translate(-75px,100px)'
                });
            else
                $(this).find('.3rd_circlemenu2_5').css({
                    'transform': 'none'
                });
            act2 = !act2;
        }); //中間第二層
        if (active2 == 1)
            $('.circle_manu').find('.test2').css({
                'background-color': 'darkGray',
                'transform': 'none'
            });
        if (active3 == 0)
            $('.circle_manu').find('.test3').css({
                'background-color': 'gray',
                'transform': 'translate(0px,375px)'
            });
        $('.test3').on('mousedown touchstart', function() {
            if (!act3) {
                $(this).find('.3rd_circlemenu3_1').css({
                    'transform': 'translate(-75px,-100px)'
                });
                $('.test2').find(".testbutton").css({
                    'transform': 'none'
                });
                act2 = !act2;
            } else
                $(this).find('.3rd_circlemenu3_1').css({
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.3rd_circlemenu3_2').css({
                    'transform': 'translate(-115px,-55px)'
                });
            else
                $(this).find('.3rd_circlemenu3_2').css({
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.3rd_circlemenu3_3').css({
                    'transform': 'translate(-125px,0px)'
                });
            else
                $(this).find('.3rd_circlemenu3_3').css({
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.3rd_circlemenu3_4').css({
                    'transform': 'translate(-115px,55px)'
                });
            else
                $(this).find('.3rd_circlemenu3_4').css({
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.3rd_circlemenu3_5').css({
                    'transform': 'translate(-75px,100px)'
                });
            else
                $(this).find('.3rd_circlemenu3_5').css({
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.3rd_circlemenu3_6').css({
                    'transform': 'translate(-180px,-25px)'
                });
            else
                $(this).find('.3rd_circlemenu3_6').css({
                    'transform': 'none'
                });
            act3 = !act3;
        }); //上方第二層
        if (active3 == 1)
            $('.circle_manu').find('.test3').css({
                'background-color': 'silver',
                'transform': 'none'
            });

        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
    });


    // name----------------------------------------------------------------------------
    var disease_data = [3];
    disease_data[0] = ["第一類法定傳染病", "第二類法定傳染病", "第三類法定傳染病",
        "第四類法定傳染病", "第五類法定傳染病", "其他傳染病"
    ];


    //法定疾病
    disease_data[0][0] = "天花,嚴重急性呼吸道症候群,鼠疫,狂犬病";
    disease_data[0][1] = "登革熱,德國麻疹,霍亂,流行性斑疹傷寒,白喉,流行性腦脊髓膜炎,西尼羅熱,傷寒,副傷寒,小兒麻痺症/急性無力肢體麻痺,桿菌性痢疾,阿米巴性痢疾,瘧疾,麻疹,急性病毒性Ａ型肝炎,腸道出血性大腸桿菌感染症,漢他病毒症候群,多重抗藥性結核病,屈公病,炭疽病";


    disease_data[0][2] = "腸病毒感染併發重症,結核病,人類免疫缺乏病毒感染,漢生病,百日咳,新生兒破傷風,破傷風,急性病毒性Ｂ型肝炎,急性病毒性Ｃ型肝炎,急性病毒性Ｄ型肝炎,急性病毒性Ｅ型肝炎,流行性腮腺炎,梅毒,淋病,侵襲性ｂ型嗜血桿菌感染症,退伍軍人病,先天性德國麻疹症候群,日本腦炎";

    disease_data[0][3] = "流感併發重症,肉毒桿菌中毒,庫賈氏病,鉤端螺旋體病,萊姆病,類鼻疽,地方性斑疹傷寒,Ｑ熱,水痘併發症,恙蟲病,兔熱病,侵襲性肺炎鏈球菌感染症,疱疹B病毒感染症,弓形蟲感染症,布氏桿菌病";

    disease_data[0][4] = "新型A型流感,中東呼吸症候群冠狀病毒感染症,黃熱病,伊波拉病毒感染,拉薩熱,馬堡病毒出血熱,裂谷熱";

    disease_data[0][5] = "棘狀阿米巴,茲卡病毒感染,福氏內格里阿米巴腦膜腦炎,貓抓病,NDM-1腸道菌感染症,發熱伴血小板減少綜合症,細菌性腸胃炎,常見腸道寄生蟲病簡介,中華肝吸蟲感染症,旋毛蟲感染症,肺吸蟲感染症,廣東住血線蟲感染症,鸚鵡熱,亨德拉病毒及立百病毒感染症,第二型豬鏈球菌感染症,病毒性腸胃炎,沙門氏菌感染症,疥瘡感染症,頭蝨感染症,李斯特菌症,隱球菌症,RE抗藥性檢測,VISA/VRSA抗藥性檢測,肺囊蟲肺炎,淋巴絲蟲病";
    //傳染疾病
    disease_data[1] = ["蟲媒傳染", "食物或飲水傳染", "空氣或飛沫傳染",
        "性接觸或血液傳染", "接觸傳染"
    ];

    disease_data[1][0] = "登革熱,日本腦炎,西尼羅熱,萊姆病,裂谷熱,屈公病,鼠疫,地方性斑疹傷寒,黃熱病,發熱伴血小板減少綜合症,瘧疾,恙蟲病,流行性斑疹傷寒,茲卡病毒感染,淋巴絲蟲病";

    disease_data[1][1] = "腸病毒感染併發重症,副傷寒,阿米巴性痢疾,庫賈氏病,急性病毒性Ａ型肝炎,弓形蟲感染症,第二型豬鏈球菌感染症,旋毛蟲感染症,人芽囊原蟲感染,腸道出血性大腸桿菌感染症,沙門氏菌感染症,霍亂,病毒性腸胃炎,急性病毒性Ｅ型肝炎,李斯特菌症,常見腸道寄生蟲病簡介,肺吸蟲感染症,傷寒,桿菌性痢疾,肉毒桿菌中毒,細菌性腸胃炎,小兒麻痺症/急性無力肢體麻痺,布氏桿菌病,中華肝吸蟲感染症,廣東住血線蟲感染症";

    disease_data[1][2] = "新型A型流感,多重抗藥性結核病,嚴重急性呼吸道症候群,先天性德國麻疹症候群,百日咳,流行性腦脊髓膜炎,漢他病毒症候群,Ｑ熱,水痘併發症,流感,麻疹,流行性腮腺炎,侵襲性肺炎鏈球菌感染症,退伍軍人病,肺囊蟲肺炎,鸚鵡熱,結核病,中東呼吸症候群冠狀病毒感染症,德國麻疹,白喉,侵襲性ｂ型嗜血桿菌感染症,天花,隱球菌症";

    disease_data[1][3] = "人類免疫缺乏病毒感染,急性病毒性Ｂ型肝炎,梅毒,急性病毒性Ｃ型肝炎,淋病,急性病毒性Ｄ型肝炎";

    disease_data[1][4] = "福氏內格里阿米巴腦膜腦炎,類鼻疽,新生兒破傷風,漢生病,疱疹B病毒感染症,馬堡病毒出血熱,狂犬病,鉤端螺旋體病,疥瘡感染症,貓抓病,亨德拉病毒及立百病毒感染症,伊波拉病毒感染,炭疽病,破傷風,頭蝨感染症,兔熱病,拉薩熱";

    //常見疾病
    disease_data[2] = ["登革熱", "流感 ", "腸病毒感染併發重症", "新型A型流感"];



    //alan
    //desktop
    var disease_name = new Array(40);
    var disease_list_length = disease_name.length;
    var list_show = 0;
    var list_index = 0;
    var disease_click_index = 0;
    var list_show_index = 0; //用於切換各種疾病種類用
    var d_show = 0;

    //mobile
    var mlist_show = 0;
    var mlist_index = 0;
    var mdisease_click_index = 0;
    var mlist_show_index = 0; //用於切換各種疾病種類用
    var md_show = 0;
    //alan

    //lee
    var d0 = $('.dd');
    var index = 0;
    var r = 30,
        n = 5,
        a = 66;
    //lee
    //   var act=0; 
    d0.click(function() {
        var str = "";
        //  act=!act;
        //  if(act==1){
        //    $(".testbutton").css({
        //          transform: 'none'     
        //      });
        //      $(".test3").css({
        //         transform: 'none'     
        //      });
        //      $(".test2").css({
        //          transform: 'none'     
        //    });
        //      $(".test1").css({
        //         transform: 'none'     
        //     });
        // }
        if ($(this).data("c") == 2) { //common disease
            for (var i = 0; i < 4; i++) //import the data
                disease_name[i] = disease_data[2][i];
            disease_list_length = 4;
        }


        if ($(this).data("c") < 2) {
            var str = disease_data[$(this).data("c")][$(this).data("l") - 1].split(",");
            for (var i = 0; i < disease_data[$(this).data("c")][$(this).data("l") - 1].length; i++) //import the data
                disease_name[i] = str[i];
            disease_list_length = str.length;
        }

        /// disease_list_length=str.length;
        if (list_show == 0 || (list_show != 0 && list_show_index != $(this).data("l"))) {
            //將list btn 縮回去
            $('lf_btn').delay(2).hide('10');
            $('up_btn').delay(2).hide('10');
            for (var i = 1; i <= 4; i++)
                $('d_list' + i).delay(2 + i * 1).hide('10');
            for (var i = 1; i <= 12; i++)
                $('md_list' + i).delay(2 + i * 1).hide('10');
            $('rg_btn').delay(7).hide('10');
            $('dn_btn').delay(7).hide('10');
            list_show = 0;

            $('#mobile_block').delay(10).hide('10');

            reset();
            mlist_index = 0;
            //將list btn 跳出來
            $('#mobile_block').delay(50).show('50');
            $('lf_btn').delay(100).show('50');
            $('up_btn').delay(100).show('50');
            for (var i = 1; i <= 4; i++)
                $('d_list' + i).delay(100 + i * 50).show('50');


            var max = 6;
            for (var i = 1; i <= max; i++) {

                if (disease_list_length - mlist_index < 6)
                    max = disease_list_length - mlist_index;
                $('md_list' + i).delay(100 + i * 50).show('50');


            }
            $('rg_btn').delay(350).show('50');
            $('dn_btn').delay(350).show('50');



            show_name(0);
            list_show = 1;

            list_show_index = $(this).data("l");

            //mobile
            mlist_show = 1;
            mlist_show_index = $(this).data("l");
        } else {
            $('up_btn').delay(200).hide('100');
            $('lf_btn').delay(200).hide('100');
            for (var i = 1; i <= 4; i++)
                $('d_list' + i).delay(200 + i * 100).hide('100');
            for (var i = 1; i <= 6; i++)
                $('md_list' + i).delay(200 + i * 100).hide('100');
            $('rg_btn').delay(700).hide('100');
            $('dn_btn').delay(700).hide('100');

            $('#mobile_block').delay(10).hide('10');
            list_show = 0;
            mlist_show = 1;
            reset();
        }

    })

    $('lf_btn').click(function() {
        if (list_index >= 4)
            list_index = (list_index - 4) % (disease_list_length);
        reset();
        show_name(list_index);
    })

    //換下4個disease list
    $('rg_btn').click(function() {
        var tmp = list_index;
        list_index = (list_index + 4) % (disease_list_length);
        if (tmp > list_index)
            list_index = 0;
        reset();
        show_name(list_index);
    })

    //mobile

    var ne = MonoEvent,
        $m_box = ne('#mobile_block'),
        $btn = ne('#btn'),
        log = document.getElementById('log');


    $m_box.on('swipeDown', function() {
        var tmp = mlist_index;
        if ((mlist_index + 6) < disease_list_length)
            mlist_index = (mlist_index + 6) % (disease_list_length); //% avoid overflow
        if (disease_list_length - mlist_index < 6)
            for (var i = 6; i >= (disease_list_length - mlist_index + 1); i--)
                $('md_list' + i).css({
                    'display': 'none'
                });
        reset();
        show_name(mlist_index);


    });

    $m_box.on('swipeUp', function() {
        if (mlist_index >= 6)
            mlist_index = (mlist_index - 6) % (disease_list_length);
        var max = 6;
        if (disease_list_length - mlist_index < 6)
            max = disease_list_length - mlist_index;

        for (var i = 1; i <= max; i++)
            $('md_list' + i).css({
                'display': 'inline-block;'
            });


        reset();
        show_name(mlist_index);


    });


    $('dn_btn').click(function() {
        var tmp = mlist_index;
        if ((mlist_index + 6) < disease_list_length)
            mlist_index = (mlist_index + 6) % (disease_list_length); //% avoid overflow
        if (disease_list_length - mlist_index < 6)
            for (var i = 6; i >= (disease_list_length - mlist_index + 1); i--)
                $('md_list' + i).css({
                    'display': 'none'
                });
        reset();
        show_name(mlist_index);
    })

    $('up_btn').click(function() {
        if (mlist_index >= 6)
            mlist_index = (mlist_index - 6) % (disease_list_length);
        var max = 6;
        if (disease_list_length - mlist_index < 6)
            max = disease_list_length - mlist_index;

        for (var i = 1; i <= max; i++)
            $('md_list' + i).css({
                'display': 'inline'
            });


        reset();
        show_name(mlist_index);
    })
    for (var j = 1; j <= 4; j++) {
        $('d_list' + j).click(function() {

            $('lf_btn').delay(2).hide('10');
            $('up_btn').delay(2).hide('10');
            for (var i = 1; i <= 4; i++)
                $('d_list' + i).delay(2 + i * 1).hide('10');
            $('rg_btn').delay(7).hide('10');
            $('dn_btn').delay(7).hide('10');
            list_show = 0;

            $('#mobile_block').delay(10).hide('10');
            reset();



            /*
    
    if($(this).data("l")!=disease_click_index)
    {   //若click為非放大的則將原本放大的縮小

    $('d_list'+disease_click_index).css({
    'background-color': '#7B7777','border-bottom': '5px solid #464242'
    }); 
        disease_click_index=$(this).data("l");

    $(this).css({
        'background-color': '#BD4646','border-bottom': '5px solid #7D2F2F'
    });
    }*/
        })

        $('d_list' + j).mouseover(function() {
            //放大
            $(this).css({
                'background-color': '#BD4646',
                'border-bottom': '5px solid #7D2F2F'
            });

        })


        $('d_list' + j).mouseout(function() {
            if ($(this).data("l") != disease_click_index)
                $(this).css({
                    'background-color': '#7B7777',
                    'border-bottom': '5px solid #464242'
                });

        })


    }


    //mobile
    for (var j = 1; j <= 6; j++) {
        $('md_list' + j).click(function() {


            $('up_btn').delay(2).hide('10');
            for (var mi = 1; mi <= 6; mi++)
                $('md_list' + mi).delay(2 + mi * 1).hide('10');
            $('dn_btn').delay(10).hide('10');
            mlist_show = 0;

            $('#mobile_block').delay(10).hide('10');
            reset();
        })

        $('md_list' + j).mouseover(function() {
            //放大
            $(this).css({
                'background-color': '#BD4646',
                'border-bottom': '5px solid #7D2F2F'
            });

        })


        $('md_list' + j).mouseout(function() {
            if ($(this).data("l") != disease_click_index)
                $(this).css({
                    'background-color': '#7B7777',
                    'border-bottom': '5px solid #464242'
                });

        })
    }


    function reset() {

        disease_click_index = 0;
        for (var z = 1; z <= 4; z++) {

            $('d_list' + z).css({
                'background-color': '#7B7777',
                'border-bottom': '5px solid #464242'
            });
        }

        //mobile
        mdisease_click_index = 0;
        for (var z = 1; z <= 6; z++) {

            $('md_list' + z).css({
                'background-color': '#7B7777',
                'border-bottom': '5px solid #464242'
            });
        }

    }


    function show_name(index) {
        var str = $('d_list' + i).text();


        for (var i = 1; i <= 4; i++) {
            if ((index + i - 1) <= (disease_list_length - 1)) {

                if (disease_name[index + i - 1].length < 5)
                //alert(disease_name[index+i-1].length);
                    $('d_list' + i).css({
                    'font-size': '22px',
                    'line-height': '30px'
                });
                else if (disease_name[index + i - 1].length <= 7 && disease_name[index + i - 1].length >= 5)
                    $('d_list' + i).css({
                        'font-size': '16px',
                        'line-height': '30px'
                    });
                else if (disease_name[index + i - 1].length <= 9 && disease_name[index + i - 1].length > 7)
                    $('d_list' + i).css({
                        'font-size': '13px',
                        'line-height': '30px'
                    });

                else
                    $('d_list' + i).css({
                        'font-size': '13px',
                        'line-height': '20px'
                    });
                $('d_list' + i).text(disease_name[index + i - 1]);


            } else
                $('d_list' + i).text("");
        }


        //mobile        
        for (var i = 1; i <= 6; i++) {
            if ((index + i - 1) <= (disease_list_length - 1)) {
                if (disease_name[index + i - 1].length < 5)
                    $('md_list' + i).css({
                        'font-size': '19px',
                        'line-height': '30px'
                    });
                else if (disease_name[index + i - 1].length <= 7 && disease_name[index + i - 1].length >= 5)
                    $('md_list' + i).css({
                        'font-size': '16px',
                        'line-height': '30px'
                    });
                else if (disease_name[index + i - 1].length <= 9 && disease_name[index + i - 1].length > 7)
                    $('md_list' + i).css({
                        'font-size': '13px',
                        'line-height': '30px'
                    });

                else
                    $('md_list' + i).css({
                        'font-size': '13px',
                        'line-height': '20px'
                    });

                $('md_list' + i).text(disease_name[index + i - 1]);

            } else
                $('md_list' + i).text("");
        }

    }


    //-----------------------------------------------slide-----------------------------------------------
    // slidebutton.addEventListener("click", changeslide, false);
    width = $(window).width();
    // $(".textactive").find("i").css("display", "none");
    $(".textactive").find("span").fadeIn("500");

    $(".slidebutton").click(function() {
        // $(this).css({"background-color":"yellow","font-size":"200%"});
        var movetoright = $(this).css('margin-left');
        // var url= "http://res.freestockphotos.biz/pictures/8/8453-a-blue-sky-with-white-clouds-pv.jpg"
        $("#cr-li-slide").animate({
            marginLeft: movetoright
        });
        var lastchoose = $(".textactive");
        lastchoose.removeClass("textactive");
        lastchoose.css("backgroundColor", "white");
        // lastchoose.find("span").fadeOut("500");
        // lastchoose.find("i").delay("500").fadeIn("fast");
        $(this).addClass("textactive");
        $(this).css("backgroundColor", "#4caf50");
    });

    $(".slidebutton").mouseover(function() {
        // $(this).find("i").css("display", "none");
        // $(this).find("span").fadeIn("500");
    });
    $(".slidebutton").mouseleave(function() {
        // if ($(this).hasClass("textactive")) {} else {
        //     $(this).find("span").fadeOut("500");
        //     $(this).find("i").delay("500").fadeIn("fast");
        // }
    });




});

$(document).ready(function() {
    var currentname = "登革熱";
    for (var i = 1; i <= 4; i++) {
        $('d_list'+i).click(function() {
            currentname = $(this).text();
            var intro = 'http://127.0.0.1:3000/users/intro/'+currentname;
            var ways = 'http://127.0.0.1:3000/users/ways/'+currentname;
            var defeat = 'http://127.0.0.1:3000/users/defeat/'+currentname;
            var infect = 'http://127.0.0.1:3000/users/infect/'+currentname;
            // $("iframe")[0].setAttribute("src", "http://www.w3schools.com/js/js_output.asp");
            $("iframe")[1].setAttribute("src", "users/intro/"+currentname);
            $("iframe")[2].setAttribute("src", "users/ways/"+currentname);
            $("iframe")[3].setAttribute("src", "users/defeat/"+currentname);
            $("iframe")[4].setAttribute("src", "users/infect/"+currentname);
            // alert(intro);
            console.log(intro);
            var  introimg = $("iframe").contents().find("img");
            introimg.setAttribute("src", "/images/intro/"+currentname+".jpg");

            var waysimg = $("iframe")[2].contents().find("img");
            waysimg.setAttribute("src", "/images/ways/"+currentname+".jpg");

            var defeatimg = $("iframe")[3].contents().find("img");
            defeatimg.setAttribute("src", "/images/defeat/"+currentname+".jpg");

            var infectimg = $("iframe")[4].contents().find("img");
            infectimg.setAttribute("src", "/images/infect/"+currentname+".jpg");

        });

    }
});

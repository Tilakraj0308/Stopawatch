$(() => {
    var hours , min , sec , mili , x , count = 0;
    var isstart = false;
    function update(h, m, s, mi) {
        ho = h.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })
        min = m.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })
        se = s.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })
        mil = mi.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })
        $("p").html(ho + ":" + min + ":" + se + "<span style='font-size:xx-large;'>"+mil+"</span>");
    }
    function start() {
        hours = 0, min = 0, sec = 0, mili = 0;
        x =  setInterval(() => {
            mili += 1;
            if (mili == 100) {
                sec += 1;
                mili = 0;
            }
            if (sec == 60) {
                min += 1;
                sec = 0;
            }
            if (min == 60) {
                hours += 1;
                min = 0;
            }
            update(hours, min, sec, mili);
        }, 10)
    }
    function getTime(){
        var str = hours.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        }) + ":" + min.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        }) + ":" + sec.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        }) + ":" + mili.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })
        // var str = hours + ":" + min + ":" + sec + ":" + mili;
        return str; 
    }
    $("#start").click(() => {
        if(!isstart){
            $("#start").html("Stop");
            start();
            isstart = true;
        }
        else{
            clearInterval(x);
            isstart = false;
            $("#start").html("Start");
        }
        $("#reset").removeAttr("disabled");
        $("#split").removeAttr("disabled");
        // $("#reset").prop("disabled", "false");

    })
    $("#reset").click(()=>{
        clearInterval(x);
        $("p").html("00:00:00<span style='font-size:xx-large;'>00</span>");
        isstart = false;
        $("#start").html("Start");
        $("#reset").attr("disabled" , "disabled");
        $("#split").attr("disabled" , "disabled");
    })
    $("#split").click(()=>{
        var initial = getTime();
        count += 1;
        $(".table").append("<tr><td>#" +count+"</td><td>" + initial + "</td></tr>");
        // $(".table").html("<tr><td>1<td><td>" + initial + "</td></tr>");
    })
})
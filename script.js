

var STI_id = setInterval(()=>{
    var time = new Date();
    let a;
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour <= 9? '0'+hour : hour;
    min = min  <= 9? '0'+min : min;
    sec = sec  <= 9? '0'+sec : sec;

    a = hour+':'+min+':'+sec;
    var newtime = document.getElementById('mypara');

    newtime.innerText = a;





}, 1000);

stop =()=>{
    clearInterval(STI_id);
    document.getElementById('btn1').style.background = 'grey';
    document.getElementById('btn2').style.background = '';

}

var ev_listner = document.getElementById('btn1');

ev_listner.addEventListener('mousedown',function(){
    document.getElementById('btn1').style.background = 'red';

})

var ev_listner2 = document.getElementById('btn2');

ev_listner2.addEventListener('mousedown',function(){
    document.getElementById('btn2').style.background = 'green';
})


var ev_listner3 = document.getElementById('btn_lap');

ev_listner3.addEventListener('mousedown',function(){
    document.getElementById('btn_lap').style.background = 'blue';
})

var ev_listner4 = document.getElementById('btn_lap');
ev_listner4.addEventListener('mouseup',function(){
    document.getElementById('btn_lap').style.background = '';
})

var ev_listner6 = document.getElementById('reset');

ev_listner6.addEventListener('mousedown',function(){
    document.getElementById('reset').style.background = 'blue';
})

var ev_listner5 = document.getElementById('reset');
ev_listner5.addEventListener('mouseup',function(){
    document.getElementById('reset').style.background = '';
})


restart=()=>{
    document.getElementById('btn2').style.background = '';
    document.getElementById('btn1').style.background = '';
    STI_id = setInterval(()=>{
        var time = new Date();
        let a;
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        hour = hour <= 9? '0'+hour : hour;
        min = min  <= 9? '0'+min : min;
        sec = sec  <= 9? '0'+sec : sec;
    
        a = hour+':'+min+':'+sec;
        var newtime = document.getElementById('mypara');
        newtime.innerText = a;

    }, 1000);
}
var count = 4;
var stpwtch_id;
function newFunction() {
    stop = () => {
        clearInterval(STI_id);
        document.getElementById('btn1').style.background = 'grey';
        document.getElementById('btn2').style.background = '';

    };
}

function start(){

    document.getElementById('start').style.background = 'grey';
    document.getElementById('stpstwch').style.background = '';
    var milisec1 = 00;
    var sec1 = 00;
    var min1 = 00;
    var hour1 = 00;

     stpwtch_id = setInterval(()=>{
        if(milisec1 < 1000){
            milisec1 = milisec1+10;
        }
        else if(milisec1 == 1000){
            sec1++;
            milisec1 = 0;

            if(sec1 >= 60){
                sec1 = 0;
                min1++;
                min1 =min1?( min1 <= 9 ? "0"+min1 : min1) : "00";
                
                if(min1 >= 60){
                    hour1++;
                    min1 = 0;
                    hour1 =hour1?( hour1 <= 9 ? "0"+hour1 : hour1) : "00";
                }
            }
        } 


        var stpwch =  ('0'+hour1).slice(-2)+':'+('0'+min1).slice(-2)+':'+('0'+sec1).slice(-2)+':'+('0'+milisec1).slice(-3); 
        var stpwtch_update =  document.getElementById('mypara2');
        stpwtch_update.innerText = stpwch;

        
        lapdata=()=>{
            count--;
            if(count == 3){
            document.getElementById('para1').innerText = stpwch;
            }

            if(count == 2){
                document.getElementById('para2').innerText = stpwch;
            }
            if(count == 1){
                document.getElementById('para3').innerText = stpwch;
                
            }
            if(count == 0){
                document.getElementById('para4').innerText = stpwch;
            }
        }

    },10);
}



stpwtch=()=>{
    clearInterval(stpwtch_id);
    document.getElementById('stpstwch').style.background = 'grey';
    document.getElementById('start').style.background = '';
}

reset=()=>{
    var resetTimer = document.getElementById('mypara2');
    resetTimer.innerHTML = "00:00:00:00";
    document.getElementById('reset').style.background = '';
    document.getElementById('stpstwch').style.background = '';
    document.getElementById('start').style.background = '';
    document.getElementById('btn_lap').style.background = '';
    document.getElementById('reset').style.background = '';
    document.getElementById('para1').innerText = 'Lap 1';
    document.getElementById('para2').innerText = 'Lap 2';
    document.getElementById('para3').innerText = 'Lap 3';
    document.getElementById('para4').innerText = 'Lap 4';
}


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


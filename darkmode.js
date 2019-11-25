var Body = { //다크모드를 실행시키기 위한 함수
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

// var Card = {
//     setColorImg:function (){
//         document.getElementsByClassName('content__card').style.boxShadow = "5px 10px 15px #69d2e7"
//     }
// }

var Handler = { //input 변경을 위한 함수
    setColorHandler:function (color){
        document.getElementById('dark_white').style.color = color;
    },
    setBackgroundColorHandler:function (color){
        document.getElementById('dark_white').style.backgroundColor = color;
    }
}

function DarkHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'dark'){
        Body.setBackgroundColor('black');
        Body.setColor('#FF55A1')
        self.value = 'acua';

        //다크모드 변경할 때 배경과 텍스트 색상
        Handler.setColorHandler('black');
        Handler.setBackgroundColorHandler('#69d2e7');
        // Card.style.boxShadow('5px 10px 15px #69d2e7');
    } else {
        Body.setBackgroundColor('#69d2e7');
        Body.setColor('black');
        self.value = 'dark';

        //다크모드 변경할 때 배경과 텍스트 색상
        Handler.setColorHandler('#69d2e7');
        Handler.setBackgroundColorHandler('black');
        // Card.style.boxShadow('0 8px 16px 0 rgba(0,0,0,0.2)');
    }
}

// function CardHandler(self){
//     var target = document.getElementsByClassName('content__card');
//     if(self.value === 'dark'){
//         Card.style["boxShadow"]('5px 10px 15px #69d2e7');
//     } else {
//         Card.style["boxShadow"]('0 8px 16px 0 rgba(0,0,0,0.2)');
//     }
// }


var Body = {
  //화면 전체 배경색을 바꾸기 위한 함수
  setColor: function(color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function(color) {
    document.querySelector("body").style.backgroundColor = color;
  }
};

const headerHandler = {
  //header 배경색을 변경하기 위한 함수
  setBackgroundColorHandler: function(color) {
    document.getElementsByClassName("header")[0].style.backgroundColor = color;
  }
};

var Handler = {
  //input 내부 배경색과 텍스트 색상 변경을 위한 함수
  setColorHandler: function(color) {
    document.getElementById("dark_white").style.color = color;
    document.getElementById("name").style.color = color;
  },
  setBackgroundColorHandler: function(color) {
    document.getElementById("dark_white").style.backgroundColor = color;
    document.getElementById("name").style.backgroundColor = color;
  }
};

function DarkHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "dark") {
    Body.setBackgroundColor("black");
    Body.setColor("#FF55A1");
    self.value = "acua";

    //다크모드로 변경할 때 배경과 텍스트 색상
    Handler.setColorHandler("black");
    Handler.setBackgroundColorHandler("#69d2e7");
    
    headerHandler.setBackgroundColorHandler("black");

  } else {
    Body.setBackgroundColor("#69d2e7");
    Body.setColor("black");
    self.value = "dark";

    //아쿠아모드 변경할 때 배경과 텍스트 색상
    Handler.setColorHandler("#69d2e7");
    Handler.setBackgroundColorHandler("black");
    
    headerHandler.setBackgroundColorHandler("#2a2c2b");

  }
};

function inputName() {
  const nameValue = document.getElementById("name").value;
  if (event.keyCode == 13) {
    if (nameValue == "김승현") {
      alert("음..비슷함");
    } else {
      alert("틀렸음");
    }
  }
};

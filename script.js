$("input").focus(function() {
  if ($(this).val() == "Введите число") {
      $(this).val("");
  };
});
$("input").blur(function() {
  if ($(this).val() == "") {
    $(this).val("Введите число");
  };
});

$("[type=radio]").click(function() {
  $(".result").text("");
  $("[type=text]").val("Введите число");
});

$(".low").click(function() {
  $(".damper").removeAttr("checked");
});

$(".damper").click(function() {
  $(".low").removeAttr("checked");
});


$(".button").click(function() {
  let length = Number($(".length").val());
  let width = Number($(".width").val());
  let area = length * width;
  let angle = Number($("input.angle").val());
  let height = Number($(".height").val());
  let step;
  let result;
  if ($(".damper").is(':checked')) {
    step = ((height-190)/100)*Math.tan(angle/2*Math.PI/180)*2;
    result = Math.ceil(area*(1/step));
  }else {
    let angleN = (90-angle)*2;
    let diameter = (height/100)*Math.tan(angleN/2*Math.PI/180)*2;
    step = ((height-190)/100)*Math.tan(angleN/2*Math.PI/180)*2;
    result = Math.ceil(area*(1/step));
  };
  if (isNaN(result)) {
    $(".result").text("Проверьте, что ввели в поля числа");
  }else {
    $(".result").text("Количество камер с углом обзора " + angle + " : " + result);
  };
});

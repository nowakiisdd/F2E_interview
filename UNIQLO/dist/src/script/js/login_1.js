"use strict";define(["jquery.min"],function(){return{log:(p=!1,$(".h-combo-box").on("click",function(){(p=!p)?$(".popup-container").append('<div class="h-popup h-combo-box-popup" style="min-width: 399px; left: 155.5px; top: 229px;"><ul><li class="active"><span style="margin-right: 50px;">中国内地</span><span style="position: absolute; right: 7px;">+86</span></li><li><span style="margin-right: 50px;">中国香港</span><span style="position: absolute; right: 7px;">+852</span></li><li><span style="margin-right: 50px;">中国澳门</span><span style="position: absolute; right: 7px;">+853</span></li></ul></div>'):$(".popup-container").empty()}),$(".popup-container").on("mouseover",".h-popup li",function(){$(this).addClass("active").siblings().removeClass("active")}),void $(".popup-container").on("click",".h-popup li",function(){$(this).children("span").each(function(){var p=$(this).index();$(".h-combo-box-editor-inner span").eq(p).text($(this).text())}),$(".popup-container").empty(),p=!p}))};var p});
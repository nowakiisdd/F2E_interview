"use strict";define(["jquery.min"],function(){return{tab:(a=$(".L1-tab .tab-heading .tab-heading__items"),e=$(".L1-tab .tab-content"),void $(".L1-tab").each(function(){var t=$(this);$(this).find(".tab-heading__items li a").on("click",function(){var i=t.find(".tab-heading__items li a").index($(this));a.each(function(){$(this).find("li a").removeClass("active").eq(i).addClass("active")}),e.each(function(){1<$(this).children("div").length&&$(this).children("div").removeClass("active").eq(i).addClass("active")})})}))};var a,e});
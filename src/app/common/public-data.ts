import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";

/***********************接口地址前缀*********************/
export const beforeUrl = "http://172.16.100.80:88";

//页面跳转动画
export const pageAnimation = trigger("pageAnimation", [
  state("start", style({transform: "translateY(50px)", opacity: 0})),
  state("end", style({transform: "translateY(0)", opacity: 1})),
  transition("start =>end", animate("500ms ease-out")),
]);
//rotateY 90 度动画
export const rotateY90Animation = trigger("rotateY90Animation", [
  state("start", style({transform: "rotateY(90deg)"})),
  state("end", style({transform: "rotateY(0deg)"})),
  transition("start => end", animate("500ms ease-out"))
]);
//right25度动画
export const right25Animation = trigger("right25Animation", [
  state("start", style({transform: "translateX(-25px)"})),
  state("end", style({transform: "translateX(0)"})),
  transition("start => end", animate("500ms ease-out"))
]);
//left25度动画
export const left25Animation = trigger("left25Animation", [
  state("start", style({transform: "translateX(25px)"})),
  state("end", style({transform: "translateX(0)"})),
  transition("start => end", animate("500ms ease-out"))
]);

//日期搜索中文化
export const China = {
  firstDayOfWeek: 0,
  dayNames: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  dayNamesShort: ["一", "二", "三", "四", "五", "六", "日"],
  dayNamesMin: ["一", "二", "三", "四", "五", "六", "日"],
  monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
};

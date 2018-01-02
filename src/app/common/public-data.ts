import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

/***********************接口地址前缀*********************/
export const beforeUrl = '';
export const imgReadUrl = 'http://vr.weiruict.com';

//页面跳转动画
export const pageAnimation = trigger('pageAnimation', [
  state('in', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    style({
      opacity: 1,
      transform: 'translateY(40px)'
    }),
    animate('400ms  ease-out')
  ]),
  transition('* => void', [
    animate('400ms  ease-out', style({
      opacity: 0,
      transform: 'translateY(40px)'
    }))
  ])
]);
//rotateY 90 度动画
export const tagAnimation = trigger('tagAnimation', [
  state('inactive', style({transform: 'rotateY(0deg)'})),
  state('active', style({transform: 'rotateY(90deg)'})),
  transition('active => inactive', animate('300ms ease-out'))
]);
//right25度动画
export const right25Animation = trigger('right25Animation', [
  state('inactive', style({transform: 'translateX(0)'})),
  state('active', style({transform: 'translateX(-25px)'})),
  transition('inactive <=> active', animate('400ms ease-out'))
]);
//left25度动画
export const left25Animation = trigger('left25Animation', [
  state('inactive', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({
      transform: 'translateX(25px)'
    }),
    animate('500ms 200ms ease-out')
  ]),
  transition('* => void', [
    animate('500ms  200ms ease-out', style({
      transform: 'translateX(25px)'
    }))
  ])
]);

//日期搜索中文化
export const China = {
  firstDayOfWeek: 0,
  dayNames: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
  dayNamesShort: ['一', '二', '三', '四', '五', '六', '日'],
  dayNamesMin: ['一', '二', '三', '四', '五', '六', '日'],
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};

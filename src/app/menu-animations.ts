import {
  trigger,
  transition,
  style,
  query,
  animate
} from "@angular/animations";

export const slider = (duration) =>
  trigger("menuAnimation", [
    transition("* => toLeft", [
      query("app-page-header #header-page-list", [
        style({
          transform: `translateX(0)`,
          opacity: 1
        }),
        animate(
          `${duration} ease`,
          style({
            transform: `translateX(100%)`,
            opacity: 0.5
          })
        )
      ])
    ]),
    transition("* => toRight", [
      query("app-page-header #header-page-list", [
        style({
          transform: `translateX(100%)`,
          opacity: 0.5
        }),
        animate(
          `${duration} ease`,
          style({
            transform: `translateX(0)`,
            opacity: 1
          })
        )
      ])
    ])
  ]);

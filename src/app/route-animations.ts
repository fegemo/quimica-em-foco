import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from "@angular/animations";

export const fader = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          left: 0,
          opacity: 0,
          width: "100%",
          transform: "scale(0) translateY(100%)"
        })
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        animate(
          "600ms ease",
          style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          })
        )
      ],
      { optional: true }
    )
  ])
]);

export const slider = () =>
  trigger("routeAnimations", [
    transition("* => toLeft", slideTo("left")),
    transition("* => toRight", slideTo("right"))
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          [direction]: 0,
          width: "100%"
        })
      ],
      optional
    ),
    query(
      ":enter",
      [
        style({
          [direction]: "-100%"
        })
      ],
      optional
    ),
    group([
      query(
        ":leave",
        [animate("600ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(
        ":enter",
        [animate("600ms ease", style({ [direction]: "0%" }))],
        optional
      )
    ])
  ];
}

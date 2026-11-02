---
name: gpu-motion-performance
description: "Trigger: animation performance, motion performance, GPU-only motion, reduced motion, Framer Motion, GSAP. Enforce compositor-only animation and accessible motion behavior for Summer Camp 2027."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Activation Contract

Use this skill whenever creating, reviewing, or modifying animations, transitions, parallax, scroll effects, hover motion, or motion-driven interactions in this project.

Do not use it for static layouts or non-animated visual styling.

## Hard Rules

- Animate only `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
- Never animate `width`, `height`, `margin`, `padding`, `top`, or `left`.
- Apply `transform: translateZ(0)` or `will-change: transform, opacity` only during intense interaction sequences.
- Use `cubic-bezier(0.16, 1, 0.3, 1)` for the standard deceleration curve.
- Respect `prefers-reduced-motion` through Framer Motion's `useReducedMotion` hook or Tailwind's `motion-safe:` and `motion-reduce:` modifiers.

## Decision Gates

| Situation | Action |
| --- | --- |
| Property would trigger layout work | Rewrite the motion using `transform` or `opacity` |
| Property would trigger paint work | Rewrite the motion using `transform` or `opacity` |
| Intense interaction sequence | Add temporary GPU-accelerated hints only while needed |
| User may prefer reduced motion | Add an explicit reduced-motion path |
| Standard smooth deceleration is required | Use `cubic-bezier(0.16, 1, 0.3, 1)` |

## Execution Steps

1. Identify every animated property in the implementation.
2. Reject layout-affecting properties and replace them with compositor-safe transforms.
3. Confirm the chosen easing matches the standard curve.
4. Add GPU acceleration only for intense interaction sequences.
5. Implement the reduced-motion behavior with the animation library hook or Tailwind modifier.
6. Verify keyboard and assistive-technology behavior remain unaffected.

## Output Contract

Report:

- animated properties used;
- reduced-motion behavior implemented;
- GPU-acceleration strategy, if any;
- verification performed and any unresolved risks.

## References

- Project design tokens and motion requirements in the Summer Camp 2027 project specification.

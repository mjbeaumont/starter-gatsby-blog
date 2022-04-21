const PREFERS_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export enum Behavior {
  auto = 'auto',
  smooth = 'smooth',
}

export function getPreferredScrollBehavior(): Behavior | undefined {
  const mediaQuery = window.matchMedia(PREFERS_REDUCED_MOTION_QUERY);
  const behavior = mediaQuery.matches ? Behavior.auto : Behavior.smooth;

  return behavior;
}

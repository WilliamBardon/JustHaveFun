export function vibrate(pulses: number[]) {
  navigator.vibrate(pulses);
}

export async function fadeIn(duration: number) {
  var pulses: number[] = [],
    d: number,
    i: number;

  if (duration < 100) {
    pulses = [duration];
  } else {
    d = duration / 100;
    for (i = 1; i <= 10; i += 1) {
      pulses.push(i * d);
      if (i < 10) {
        pulses.push((10 - i) * d);
      }
    }
  }
  vibrate(pulses);
}

export function fadeOut(duration: number) {
  var pulses: number[] = [],
    d: number,
    i: number;

  if (duration < 100) {
    pulses = [duration];
  } else {
    d = duration / 100;
    for (i = 1; i <= 10; i += 1) {
      pulses.push(i * d);
      if (i < 10) {
        pulses.push((10 - i) * d);
      }
    }
    pulses.reverse();
  }
  vibrate(pulses);
}

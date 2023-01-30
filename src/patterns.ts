import { fadeIn, fadeOut, vibrate } from "./animations";

export function wavePattern(timeouts: NodeJS.Timeout[]) {
  fadeIn(1000);
  timeouts.push(
    setTimeout(() => {
      fadeOut(1000);
    }, 1000)
  );
  timeouts.push(
    setTimeout(() => {
      fadeIn(1250);
    }, 2000)
  );
  timeouts.push(
    setTimeout(() => {
      fadeOut(1250);
    }, 3250)
  );
  timeouts.push(
    setTimeout(() => {
      fadeIn(1500);
    }, 4500)
  );
  timeouts.push(
    setTimeout(() => {
      fadeOut(1500);
    }, 6000)
  );
  timeouts.push(
    setTimeout(() => {
      fadeIn(1250);
    }, 7500)
  );
  timeouts.push(
    setTimeout(() => {
      fadeOut(1250);
    }, 8750)
  );
  timeouts.push(
    setTimeout(() => {
      fadeIn(1000);
    }, 10000)
  );
  timeouts.push(
    setTimeout(() => {
      fadeOut(1000);
    }, 11000)
  );
}

// export function ascendentPattern() {
//   fadeIn(1000);
//   setTimeout(() => {
//     fadeOut(1000);
//   }, 1000);
//   setTimeout(() => {
//     fadeIn(1250);
//   }, 2000);
//   setTimeout(() => {
//     fadeOut(1250);
//   }, 3250);
//   setTimeout(() => {
//     fadeIn(1500);
//   }, 4500);
//   setTimeout(() => {
//     vibrate([10000]);
//   }, 6000);
//   setTimeout(() => {
//     fadeOut(1000);
//   }, 16000);
// }

export function windPattern() {
  vibrate([200, 400]);
}

export function descendentPattern() {
  vibrate([100, 50, 100, 50, 200, 10, 200, 10]);
}

export function callPattern() {
  vibrate([400, 200, 1000, 200, 400]);
}

export function sosPattern() {
  vibrate([
    100,
    30,
    100,
    30,
    100,
    30,
    200,
    30,
    200,
    30,
    200,
    30,
    100,
    30,
    100,
    30,
    100
  ]);
}

export function heartbeatPattern() {
  vibrate([500, 500, 500]);
}

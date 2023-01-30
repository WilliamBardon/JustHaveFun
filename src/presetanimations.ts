import { vibrate } from "./animations";
import {
  descendentPattern,
  callPattern,
  wavePattern,
  windPattern,
  sosPattern,
  heartbeatPattern
} from "./patterns";

let timeouts: NodeJS.Timeout[] = [];

export function continuous(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    vibrate([9000]);
    timeouts.push(
      setTimeout(() => {
        continuous(true);
      }, 9000)
    );
  } else {
    vibrate([0]);
  }
}

export function wave(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    wavePattern(timeouts);
    timeouts.push(
      setTimeout(() => {
        wave(isActive);
      }, 11100)
    );
  } else {
    vibrate([0]);
  }
}

export function wind(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    windPattern();
    timeouts.push(
      setTimeout(() => {
        wind(isActive);
      }, 600)
    );
  } else {
    vibrate([0]);
  }
}

export function descendent(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    descendentPattern();
    timeouts.push(
      setTimeout(() => {
        descendent(isActive);
      }, 620)
    );
  } else {
    vibrate([0]);
  }
}

export function call(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    callPattern();
    timeouts.push(
      setTimeout(() => {
        call(isActive);
      }, 2200)
    );
  } else {
    vibrate([0]);
  }
}

export function sos(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    sosPattern();
    timeouts.push(
      setTimeout(() => {
        sos(isActive);
      }, 1340)
    );
  } else {
    vibrate([0]);
  }
}

export function heartbeat(isActive: boolean) {
  vibrate([0]);
  if (isActive) {
    heartbeatPattern();
    timeouts.push(
      setTimeout(() => {
        heartbeat(isActive);
      }, 1500)
    );
  } else {
    vibrate([0]);
  }
}

export function resetPresetAnimations() {
  vibrate([0]);
  wave(false);
  wind(false);
  descendent(false);
  call(false);
  sos(false);
  heartbeat(false);
  timeouts.forEach((x) => {
    clearTimeout(x);
  });
  timeouts = [];
}

Elm.Native = Elm.Native || {};
Elm.Native.DeviceOrientation = Elm.Native.DeviceOrientation || {};
Elm.Native.DeviceOrientation.make = function(localRuntime) {
  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.DeviceOrientation = localRuntime.Native.DeviceOrientation || {};

  if (localRuntime.Native.DeviceOrientation.values) {
    return localRuntime.Native.DeviceOrientation.values;
  }

  var NativeSignal = Elm.Native.Signal.make(localRuntime);
  var Utils = Elm.Native.Utils.make(localRuntime);

  // returns the amount of acceleration recorded by the device
  var acceleration = NativeSignal.input('DeviceOrientation.acceleration', { x: 0.0, y: 0.0, z: 0.0 });

  localRuntime.addListener([acceleration.id], window, 'devicemotion', function move(e) {
    if (e && e.acceleration) {
      localRuntime.notify(acceleration.id, {
        x: e.acceleration.x || 0,
        y: e.acceleration.y || 0,
        z: e.acceleration.z || 0
      });
    }
  });

  return localRuntime.Native.DeviceOrientation.values = {
    acceleration: acceleration
  };
}

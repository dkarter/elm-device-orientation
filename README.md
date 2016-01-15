# Elm Device Orientation

An Elm wrapper for [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)

## Usage

To get device acceleration for each coordinate:

```elm
import DeviceOrientation

main =
  Signal.map show DeviceOrientation.acceleration
```


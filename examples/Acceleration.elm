module Acceleration where

import DeviceOrientation
import Graphics.Element exposing (show)

main =
  Signal.map show DeviceOrientation.acceleration

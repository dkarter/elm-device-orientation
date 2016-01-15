module DeviceOrientation (acceleration, x, y, z) where

{-| Library for working with device accelorometer on mobile browsers

# Acceleration
@docs acceleration, x, y, z

-}

import Native.DeviceOrientation
import Signal exposing (Signal)

{-| The current device acceleration. -}
acceleration : Signal { x: Float, y: Float, z: Float }
acceleration =
  Native.DeviceOrientation.acceleration

{-| The acceleration upon the x axis which is the west to east axis -}
x : Signal Float
x =
  Signal.map .x acceleration

{-| The acceleration upon the y axis which is the south to north axis -}
y : Signal Float
y =
  Signal.map .y acceleration

{-| The acceleration upon the z axis which is the down to up axis -}
z : Signal Float
z =
  Signal.map .z acceleration

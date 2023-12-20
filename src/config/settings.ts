import { UnitySettings, UnitySettingsKeys } from '../interfaces/settings';

// default settings object
export const DEFAULT_UNITY_SETTINGS: UnitySettings = {
  [UnitySettingsKeys.ShowPlayPauseButton]: true,
  [UnitySettingsKeys.ShowResetButton]: true,
  [UnitySettingsKeys.ShowTimeControl]: true,

  [UnitySettingsKeys.Camera]: {
    [UnitySettingsKeys.Position]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 6.5,
      [UnitySettingsKeys.Z]: -8,
    },
    [UnitySettingsKeys.Rotation]: {
      [UnitySettingsKeys.X]: 35,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.ShowCameraControl]: true,
    [UnitySettingsKeys.IsLockedOnObject]: true,
  },

  [UnitySettingsKeys.ShowReferenceFrame]: false,

  [UnitySettingsKeys.PhysicsObject]: {
    [UnitySettingsKeys.ShowTrace]: false,
    [UnitySettingsKeys.TraceIsInteractive]: true,
    [UnitySettingsKeys.InitialPosition]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.InitialRotation]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.ShowVelocityVector]: true,
    [UnitySettingsKeys.InitialVelocity]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.VelocityVectorIsInteractive]: false,
    [UnitySettingsKeys.ShowVelocityLabel]: false,
    [UnitySettingsKeys.ShowVelocityEquation]: false,
  },

  [UnitySettingsKeys.PushForce]: {
    [UnitySettingsKeys.IsActive]: false,
    [UnitySettingsKeys.IsInteractive]: true,
    [UnitySettingsKeys.IsConfigurable]: true,
    [UnitySettingsKeys.ShowVector]: true,
    [UnitySettingsKeys.ShowLabel]: false,
    [UnitySettingsKeys.ShowEquation]: false,
    [UnitySettingsKeys.InitialMagnitude]: 1,
  },

  [UnitySettingsKeys.FrictionStaticIsInteractive]: true,
  [UnitySettingsKeys.FrictionKineticIsInteractive]: true,
  [UnitySettingsKeys.FrictionStaticCoeff]: 0.3,
  [UnitySettingsKeys.FrictionKineticCoeff]: 0.2,
  [UnitySettingsKeys.FrictionLabel]: false,
  [UnitySettingsKeys.FrictionVector]: true,
  [UnitySettingsKeys.FrictionEquation]: false,
};

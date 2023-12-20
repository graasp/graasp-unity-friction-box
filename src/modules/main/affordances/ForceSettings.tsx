import { useTranslation } from 'react-i18next';

import { Icon, Stack } from '@mui/material';

import { PhysicsUnits } from '@/config/physicsUnits';
import { UnitySettingsKeys } from '@/interfaces/settings';

import CustomCheckbox from '../components/CustomCheckbox';
import NumberInput from '../components/NumberInput';

const ForceSettings = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      alignItems="center" // Alignement vertical au centre
      justifyContent="center" // Alignement horizontal au centre
      spacing={2}
      width="100%"
    >
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.IsActive]}
        label={t('IsPushActive')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.IsInteractive]}
        label={t('PushButton')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.IsConfigurable]}
        label={t('IsConfigurable')}
        icon={<Icon />}
      />
      <NumberInput
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.InitialMagnitude]}
        label={t('InitialMagnitude')}
        unit={PhysicsUnits.Force}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.ShowVector]}
        label={t('ShowPushVector')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.ShowLabel]}
        label={t('ShowPushLabel')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.PushForce, UnitySettingsKeys.ShowEquation]}
        label={t('ShowEquation')}
        icon={<Icon />}
      />
    </Stack>
  );
};
export default ForceSettings;

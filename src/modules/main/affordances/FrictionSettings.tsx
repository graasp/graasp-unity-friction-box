import { useTranslation } from 'react-i18next';

import { Icon, Stack } from '@mui/material';

import { UnitySettingsKeys } from '@/interfaces/settings';

import BindedNumberInput from '../components/BindedNumberInput';
import CustomCheckbox from '../components/CustomCheckbox';
import NumberInput from '../components/NumberInput';

const FrictionSettings = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      alignItems="center" // Alignement vertical au centre
      justifyContent="center" // Alignement horizontal au centre
      spacing={2}
      width="100%"
    >
      <NumberInput
        path={[UnitySettingsKeys.FrictionStaticCoeff]}
        label={t('FrictionStaticCoeff')}
        restricted
        minValue={0}
        maxValue={1}
        divider
      />
      <BindedNumberInput
        path={[UnitySettingsKeys.FrictionKineticCoeff]}
        bindPath={[UnitySettingsKeys.FrictionStaticCoeff]}
        label={t('FrictionKineticCoeff')}
        restricted
        minValue={0}
        maxValue={1}
        divider
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.FrictionStaticIsInteractive]}
        label={t('FrictionStaticIsInteractive')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.FrictionKineticIsInteractive]}
        label={t('FrictionKineticIsInteractive')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.FrictionVector]}
        label={t('DisplayFrictionVector')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.FrictionLabel]}
        label={t('DisplayFrictionLabel')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.FrictionEquation]}
        label={t('DisplayFrictionEquation')}
        icon={<Icon />}
      />
    </Stack>
  );
};
export default FrictionSettings;

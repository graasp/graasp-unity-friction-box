import { useTranslation } from 'react-i18next';

import {
  InfoOutlined,
  Tune,
  VideoCameraBackOutlined,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';

import CameraSettings from '@/modules/main/affordances/CameraSettings';
import CubeSettings from '@/modules/main/affordances/CubeSettings';
import ForceSettings from '@/modules/main/affordances/ForceSettings';
import FrictionSettings from '@/modules/main/affordances/FrictionSettings';
import GeneralSettings from '@/modules/main/affordances/GeneralSettings';
import UnityTipsView from '@/modules/main/affordances/UnityTipsView';

export interface ListAffordances {
  label: string;
  icon: React.ReactNode;
  components: React.ReactNode;
}

const imgFilterBlue = `brightness(0) saturate(100%) invert(27%) sepia(68%) saturate(1232%) hue-rotate(216deg) brightness(98%) contrast(86%)`;
const imgFilterGreen = `brightness(0) saturate(100%) invert(59%) sepia(12%) saturate(1058%) hue-rotate(78deg) brightness(96%) contrast(86%)`;

export function GetAffordancesList(): ListAffordances[] {
  const { t } = useTranslation();
  return [
    {
      label: t('SimulationInf'),
      icon: <InfoOutlined />,
      components: <UnityTipsView />,
    },
    {
      label: t('General Settings'),
      icon: <Tune />,
      components: <GeneralSettings />,
    },
    {
      label: t('CameraSettings'),
      icon: <VideoCameraBackOutlined />,
      components: <CameraSettings />,
    },
    {
      label: t('PhysicsObjectSettings'),
      icon: (
        <Avatar
          variant="square"
          sx={{ width: 24, height: 30, backgroundColor: 'transparent' }}
        >
          <img
            src="./graphics/cube2.png"
            alt="cube img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Avatar>
      ),
      components: <CubeSettings />,
    },
    {
      label: t('ForceSettings'),
      icon: (
        <Avatar
          variant="square"
          sx={{ width: 24, height: 24, backgroundColor: 'transparent' }}
        >
          <img
            src="./graphics/force_vector.svg"
            alt="vector img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: imgFilterBlue,
            }}
          />
        </Avatar>
      ),
      components: <ForceSettings />,
    },
    {
      label: t('FrictionSettings'),
      icon: (
        <Avatar
          variant="square"
          sx={{ width: 24, height: 24, backgroundColor: 'transparent' }}
        >
          <img
            src="./graphics/force_vector.svg"
            alt="vector img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: imgFilterGreen,
            }}
          />
        </Avatar>
      ),
      components: <FrictionSettings />,
    },
  ];
}

import { useTranslation } from 'react-i18next';

import { Button, Stack } from '@mui/material';

import { hooks } from '@/config/queryClient';
import { ANALYTICS_VIEW_CY, RELOAD_ANALYTICS_CY } from '@/config/selectors';

import SimulationRatings from './analytics/SimulationRatings';
import UniqueUnityVisitor from './analytics/UniqueUnityVisitor';
import UnityAnalyticsView from './analytics/UnityAnalyticsView';
import UserUnityRunStats from './analytics/UserUnityRunStats';

const AnalyticsView = (): JSX.Element => {
  const { t } = useTranslation();
  const { refetch } = hooks.useAppActions();
  return (
    <Stack direction="column" data-cy={ANALYTICS_VIEW_CY} spacing={2}>
      <Button
        data-cy={RELOAD_ANALYTICS_CY}
        variant="outlined"
        onClick={() => refetch()}
        sx={{ width: 'fit-content' }}
      >
        {t('ReloadAnalytics')}
      </Button>
      <Stack direction="row" width="100%" spacing={2}>
        <Stack width="20%" direction="column" spacing={2}>
          <UniqueUnityVisitor />
          <SimulationRatings />
          <UserUnityRunStats />
        </Stack>
        <Stack width="100%" spacing={2}>
          <UnityAnalyticsView />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default AnalyticsView;

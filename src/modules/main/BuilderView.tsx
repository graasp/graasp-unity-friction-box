import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Analytics, Settings, ViewInArOutlined } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Stack, Tab } from '@mui/material';

import { useLocalContext } from '@graasp/apps-query-client';
import { PermissionLevel } from '@graasp/sdk';

import { BUILDER_VIEW_CY } from '@/config/selectors';

import AnalyticsView from './AnalyticsView';
import PlayerView from './PlayerView';
import SettingsView from './SettingsView';
import UnityView from './UnityView';

enum Tabs {
  SIM_ANALYTICS_VIEW = 'SIM_ANALYTICS_VIEW',
  SIM_SETTINGS_VIEW = 'SIM_SETTINGS_VIEW',
  SIM_DEMO_VIEW = 'SIM_DEMO_VIEW',
}

const BuilderView = (): JSX.Element => {
  const { t } = useTranslation();
  const { permission } = useLocalContext();

  const [activeTab, setActiveTab] = useState(Tabs.SIM_SETTINGS_VIEW);
  if (permission === PermissionLevel.Admin) {
    return (
      <Stack data-cy={BUILDER_VIEW_CY}>
        <TabContext data-cy={BUILDER_VIEW_CY} value={activeTab}>
          <TabList
            onChange={(_, newTabs) => setActiveTab(newTabs)}
            centered
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              value={Tabs.SIM_ANALYTICS_VIEW}
              label={t('Analytics')}
              icon={<Analytics />}
              iconPosition="start"
            />
            <Tab
              value={Tabs.SIM_SETTINGS_VIEW}
              label={t('Settings')}
              icon={<Settings />}
              iconPosition="start"
            />
            <Tab
              value={Tabs.SIM_DEMO_VIEW}
              label={t('Preview')}
              icon={<ViewInArOutlined />}
              iconPosition="start"
            />
          </TabList>
          <TabPanel value={Tabs.SIM_ANALYTICS_VIEW}>
            <AnalyticsView />
          </TabPanel>
          <TabPanel value={Tabs.SIM_SETTINGS_VIEW}>
            <SettingsView />
          </TabPanel>
          <TabPanel value={Tabs.SIM_DEMO_VIEW}>
            <UnityView recordingComponent saveUnityTraceToAppAction />
          </TabPanel>
        </TabContext>
      </Stack>
    );
  }
  return <PlayerView />;
};
export default BuilderView;

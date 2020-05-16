import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TabsBar({ source, activeId, onClick }) {
  TabsBar.testId = 'tabs-bar-test';
  return (
    <Tabs
      data-testid={TabsBar.testId}
      value={activeId}
      indicatorColor="secondary"
      textColor="secondary"
      onChange={onClick}
      aria-label="disabled tabs example"
    >
      {source.map((tab) => <Tab label={tab.label} key={tab.label} />)}
    </Tabs>
  );
}

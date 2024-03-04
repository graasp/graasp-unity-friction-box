import React, { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Card, ListItemButton, ListItemIcon } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { GetAffordancesList, ListAffordances } from '@/config/affordances';

const AffordancesView: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  const handleItemClick = (id: string): void => {
    setVisibleItems(
      (prevVisibleItems) =>
        prevVisibleItems.includes(id)
          ? prevVisibleItems.filter((itemId) => itemId !== id) // filter/remove the index if already in list
          : [...prevVisibleItems, id], // add index if not already present
    );
  };

  const data: ListAffordances[] = GetAffordancesList();

  return (
    <List>
      {data.map(({ id, icon, label, components }) => (
        <Card sx={{ margin: 2 }} key={id}>
          <ListItemButton onClick={() => handleItemClick(id)}>
            <ListItemIcon sx={{ color: 'black' }}>{icon}</ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{ sx: { fontWeight: 'medium' } }}
            />
            {visibleItems.includes(id) ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </ListItemButton>
          {visibleItems.includes(id) && <ListItem>{components}</ListItem>}
        </Card>
      ))}
    </List>
  );
};

export default AffordancesView;

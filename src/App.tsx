import Api from './Api';
import CustomButton from './components/CustomButton/CustomButton';
import { titles } from './components/translations/translations';
import { CategoryState } from './types/type';

import List from '@mui/material/List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AppBar, Box, Toolbar } from '@mui/material';

export default function App(): JSX.Element {
    const [stateButtons, setStateButtons] = useState<CategoryState>({
    Peoples: true,
    Planets: false,
    Starships: false
  });

  const renderButton = titles.map((itemMap) => (
      <CustomButton
          key={uuidv4()}
          itemMaps={stateButtons}
          title={itemMap.title}
          stateButtons={(): void => changeButtons(itemMap)}
      />
  ));
  function changeButtons(itemMap: { title: string }): void {
    return setStateButtons({
      ...stateButtons,
      [titles.filter((itemFilter) => itemFilter.title !== itemMap.title)[0]
          .title]: false,
      [titles.filter((itemFilter) => itemFilter.title !== itemMap.title)[1]
          .title]: false,
      [itemMap.title]: !stateButtons[itemMap.title]
    });
  }
  return (
      <Box>
        <AppBar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {renderButton}
          </Toolbar>
        </AppBar>
        <List dense sx={{ marginTop: 15 }}>
          <Api stateCategories={stateButtons} />
        </List>
      </Box>
  );
}

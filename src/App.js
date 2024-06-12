import React, { useState } from 'react';
import IconPicker from './Components/IconPicker';
import * as Icons from 'react-feather';
import './App.css';

const App = () => {
  const [view, setview] = useState(false);
  const [IconComponent, setIconComponent] = useState(null);

  const handleSelect = (icon) => {
    setview(false);
    setIconComponent(Icons[icon]);
  };

  return (
    <div className="app">
      {view ? (
        <IconPicker
          rowsInOnePage={4}
          columnsInOnePage={8}
          iconHeight={60}
          iconWidth={60}
          pickerHeight="350px"
          pickerWidth="600px"
          onSelectIcon={handleSelect}
        />
      ) : (
        <div className="icon-container" onClick={() => setview(true)}>
          {IconComponent ? (<IconComponent />) : (
            <p>Icons</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

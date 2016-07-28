import * as React from 'react';

import Option from './Option';

interface OptionsProps {
  options: BulkActionPanelOption[];
  onChange: (newValue: string) => void;
}

const Options: React.StatelessComponent<OptionsProps> = ({ options, onChange }) => (
  <select
    name='action'
    id='BulkActionPanel-selector-top'
  >
    {options.map(option => {
      return (
        <Option
          option={option}
          onClick={() => onChange(option.value)}
          key={option.value}
        />
      );
    })}
  </select>
);

export default Options;

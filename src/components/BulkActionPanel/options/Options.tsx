import * as React from 'react';

import Option from './Option';

interface OptionsProps {
  options: BulkActionPanelOption[]
}

const Options: React.StatelessComponent<OptionsProps> = (props) => (
  <select
    name='action'
    id='BulkActionPanel-selector-top'
  >
    {props.options.map(option => {
      return (
        <Option
          option={option}
          key={option.value}
        />
      );
    })}
  </select>
);

export default Options;

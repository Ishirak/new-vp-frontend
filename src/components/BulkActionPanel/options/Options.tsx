import * as React from 'react';

import Option from './Option';

interface OptionsProps {
  options: BulkActionPanelOption[];
  onChange(newValue: string): void;
}

export default class Options extends React.Component<OptionsProps, {}> {

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <select
        name='action'
        id='BulkActionPanel-selector-top'
        onChange={this.onChange}
      >
        {this.props.options.map(option => {
          return (
            <Option
              option={option}
              key={option.value}
            />
          );
        })}
      </select>
    );
  }

}

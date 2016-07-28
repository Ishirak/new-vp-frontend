/// <reference path='../Commits/Commits.d.ts' />
/// <reference path='../../interfaces/StateInterfaces.d.ts' />

import * as React from 'react';

import './BulkActionPanel.less';

import Title from './Title';
import Options from './options/Options';
import Submit from './Submit';
import ClearSelection from './ClearSelection';

interface BulkActionPanelProps extends React.Props<JSX.Element> {
  enableActions: boolean;
  onBulkAction: (action: string) => void;
  onClearSelection: () => void;
  selectedCommits: Commit[];
}

interface BulkActionPanelState {
  options: BulkActionPanelOption[];
}

export default class BulkActionPanel extends React.Component<BulkActionPanelProps, BulkActionPanelState> {

  state = {
    options: [
      {
        title: 'Bulk Actions',
        value: '-1',
        isSelected: true
      },
      {
        title: 'Undo',
        value: 'undo',
        isSelected: false
      }
    ]
  }

  onSelectedValueChange = (newValue: string) => {
    const newOptions = this.state.options.map(option => {
      return {
        title: option.title,
        value: option.value,
        isSelected: option.value === newValue
      }
    });

    this.setState({
      options: newOptions
    });
  }

  onSubmitClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const selectedOption = this.state.options.find(option => option.isSelected);

    if (selectedOption.value === '-1') {
      return;
    }

    this.props.onBulkAction(selectedOption.value);
  }

  onClearSelectionClick = (e: React.MouseEvent) => {
    e.preventDefault();

    this.props.onClearSelection();
  }

  render() {
    const { selectedCommits, enableActions } = this.props;
    const { options } = this.state;

    return (
      <div className='BulkActionPanel'>
        <div className='alignleft actions bulkactions'>
          <Title />
          <Options
            options={options}
            onChange={this.onSelectedValueChange}
          />
          <Submit
            onClick={this.onSubmitClick}
            isDisabled={!enableActions || selectedCommits.length === 0}
          />
          <ClearSelection
            changes={selectedCommits.length}
            onClick={this.onClearSelectionClick}
          />
        </div>
      </div>
    );
  }

}

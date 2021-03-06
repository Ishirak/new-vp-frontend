import * as React from 'react';

interface OptionProps {
  option: BulkActionPanelOption;
}

const Option = ( props: OptionProps ) => (
  <option value={props.option.value}>
    {props.option.title}
  </option>
);

export default Option;

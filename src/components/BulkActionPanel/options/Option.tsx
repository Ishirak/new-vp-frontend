import * as React from 'react';

interface OptionProps {
  option: BulkActionPanelOption
}

const Option: React.StatelessComponent<OptionProps> = (props) => {
  const { value, title } = props.option;

  return (
    <option value={value}>
      {title}
    </option>
  );
}

export default Option;

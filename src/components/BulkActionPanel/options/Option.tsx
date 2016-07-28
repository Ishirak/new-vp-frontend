import * as React from 'react';

interface OptionProps {
  option: BulkActionPanelOption;
  onClick: () => void;
}

const Option: React.StatelessComponent<OptionProps> = ({ option, onClick }) => (
  <option
    value={option.value}
    onClick={onClick}
  >
    {option.title}
  </option>
);

export default Option;

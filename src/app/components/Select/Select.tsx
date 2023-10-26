import React, { ChangeEvent } from 'react';

type Props = {
  name: string;
  label: string;
  defaultValue: string;
  options: string[];
  onChange(e: ChangeEvent): void;
};

function Select({ name, label, defaultValue, options, onChange }: Props) {
  return (
    <label htmlFor={name}>
      {label}
      <select name={name} onChange={onChange} defaultValue={defaultValue}>
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;

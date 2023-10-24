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
      <select name={name} onChange={onChange} defaultValue="">
        <option hidden disabled value={defaultValue}>
          select option
        </option>
        {options.map((option) => (
          <option value={option} key={crypto.randomUUID()}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;

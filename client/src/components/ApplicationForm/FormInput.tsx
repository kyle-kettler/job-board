import { FormEvent } from 'react';

type FormInputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  className: string;
  placeholder?: string;
  onChange: (e: FormEvent) => void;
};

export default function FormBasicInput({
  label,
  type,
  name,
  value,
  className,
  onChange,
  placeholder,
}: FormInputProps) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

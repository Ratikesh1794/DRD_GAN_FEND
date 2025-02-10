interface FormInputProps {
  label: string
  name: string
  type?: string
  value: string | null | File
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  pattern?: string
  min?: number
  max?: number
  placeholder?: string
  options?: Array<{ value: string, label: string }>
}

const FormInput = ({ label, name, type = "text", value, required = false, onChange, pattern, min, max, placeholder, options }: FormInputProps) => {
  if (type === "select") {
    return (
      <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-medium text-neutral-300 text-left">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
          id={name}
          name={name}
          value={value?.toString() ?? ''}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 focus:ring-2 focus:ring-primary-500/50 focus:border-transparent"
        >
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-neutral-300 text-left">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value?.toString() ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        min={min}
        max={max}
        className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 hover:border-neutral-600/50 transition-colors"
      />
    </div>
  )
}

export default FormInput 
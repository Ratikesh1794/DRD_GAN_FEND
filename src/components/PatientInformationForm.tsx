import { PatientForm } from '../types/patient'
import FormInput from './FormInput'

interface FormField {
  label: string
  name: string
  type?: string
  required?: boolean
  pattern?: string
  min?: number
  max?: number
  options?: Array<{ value: string, label: string }>
}

interface PatientInformationFormProps {
  form: PatientForm
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

const PatientInformationForm = ({ form, onInputChange, onSubmit }: PatientInformationFormProps) => {
  const formSections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Patient Name", name: "patient_name", required: true },
        { label: "Patient ID", name: "patient_id", required: true },
        { label: "Date of Birth", name: "date_of_birth", type: "date", required: true },
        { 
          label: "Gender", 
          name: "gender", 
          type: "select",
          options: [
            { value: "", label: "Select Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" }
          ],
          required: true 
        },
      ] as FormField[]
    },
    {
      title: "Vision Information",
      fields: [
        { label: "Vision Problems", name: "vision_problems", required: true },
        { label: "Right Eye Visual Acuity", name: "visual_acuity_right", type: "number", required: true, min: 0, max: 1 },
        { label: "Left Eye Visual Acuity", name: "visual_acuity_left", type: "number", required: true, min: 0, max: 1 },
      ] as FormField[]
    },
    {
      title: "Additional Health Information",
      fields: [
        { label: "Fasting Blood Sugar", name: "blood_sugar_fasting", type: "number", min: 0 },
        { label: "Blood Pressure", name: "blood_pressure" },
      ] as FormField[]
    }
  ] as const

  return (
    <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-xl">
      <h2 className="text-2xl font-semibold text-neutral-200 mb-8 text-left">Medical Information</h2>
      <form onSubmit={onSubmit} className="space-y-8">
        {formSections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h3 className="text-lg font-medium text-neutral-300 text-left border-b border-neutral-800 pb-2">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields.map((field) => (
                <FormInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={form[field.name as keyof PatientForm]}
                  onChange={onInputChange}
                  required={field.required}
                  pattern={field.pattern}
                  min={field.min}
                  max={field.max}
                  options={field.options}
                />
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 focus:ring-2 focus:ring-primary-500/50"
        >
          Save Patient Information
        </button>
      </form>
    </div>
  )
}

export default PatientInformationForm 
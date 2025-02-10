import { useState } from 'react'
import { motion } from 'framer-motion'
import { PatientForm, initialPatientForm, requiredFields } from '../types/patient'
import PatientInformationForm from '../components/PatientInformationForm'
import ImageUploadForm from '../components/ImageUploadForm'
import { apiRequest } from '../services/api'

const DrConsole = () => {
  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState<PatientForm>(initialPatientForm)
  const [preview, setPreview] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setForm(prev => ({
        ...prev,
        image: file
      }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePatientFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !form[key as keyof PatientForm])
      .map(([ , label]) => label)

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields:\n${missingFields.join('\n')}`)
      return
    }

    try {
      const payload = {
        patient_name: form.patient_name,
        patient_id: form.patient_id,
        date_of_birth: form.date_of_birth,
        gender: form.gender.toLowerCase(),
        vision_problems: form.vision_problems,
        visual_acuity_right: parseFloat(form.visual_acuity_right),
        visual_acuity_left: parseFloat(form.visual_acuity_left),
        blood_sugar_fasting: form.blood_sugar_fasting ? parseFloat(form.blood_sugar_fasting) : null,
        blood_pressure: form.blood_pressure || null
      }

      const data = await apiRequest('/create-patient', {
        method: 'POST',
        body: payload
      })
      console.log('Patient information saved:', data)
      
      // Move to next step
      setStep(2)
    } catch (error) {
      console.error('Error saving patient information:', error)
      alert('Failed to save patient information. Please try again.')
    }
  }

  const handleImageFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.image) {
      alert('Please upload an image')
      return
    }

    try {
      // Prepare the request payload
      const payload = {
        patient_name: form.patient_name,
        patient_id: form.patient_id,
        date_of_birth: form.date_of_birth,
        gender: form.gender.toLowerCase(),
        vision_problems: form.vision_problems,
        visual_acuity_right: parseFloat(form.visual_acuity_right),
        visual_acuity_left: parseFloat(form.visual_acuity_left),
        blood_sugar_fasting: form.blood_sugar_fasting ? parseFloat(form.blood_sugar_fasting) : null,
        blood_pressure: form.blood_pressure || null
      }

      const data = await apiRequest('/create-patient', {
        method: 'POST',
        body: payload
      })
      console.log('Patient information saved:', data)
      alert('Patient information saved successfully!')

      // TODO: Handle image upload separately or implement multipart form data
      
    } catch (error) {
      console.error('Error saving patient information:', error)
      alert('Failed to save patient information. Please try again.')
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-4">
      <h1 className="text-4xl font-bold text-neutral-200 text-left">Patient Information</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {step === 1 ? (
          <PatientInformationForm
            form={form}
            onInputChange={handleInputChange}
            onSubmit={handlePatientFormSubmit}
          />
        ) : (
          <ImageUploadForm
            preview={preview}
            onImageChange={handleImageChange}
            onSubmit={handleImageFormSubmit}
            onBack={() => setStep(1)}
          />
        )}
      </motion.div>
    </div>
  )
}

export default DrConsole 
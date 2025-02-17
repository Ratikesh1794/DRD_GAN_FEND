import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PatientForm, initialPatientForm, requiredFields } from '../types/patient'
import PatientInformationForm from '../components/PatientInformationForm'
import ImageUploadForm from '../components/ImageUploadForm'
import Popup from '../components/Popup'
import { apiRequest, uploadImage } from '../services/api'

const DrConsole = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState<PatientForm>(initialPatientForm)
  const [preview, setPreview] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [popup, setPopup] = useState<{ isOpen: boolean; type: 'success' | 'error'; message: string }>({
    isOpen: false,
    type: 'success',
    message: ''
  })

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
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Please complete the following required fields before proceeding:\n' + missingFields.join('\n')
      })
      return
    }

    setIsLoading(true)
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
      
      setPopup({
        isOpen: true,
        type: 'success',
        message: 'Patient information has been successfully saved. You can now proceed with the retinal image upload.'
      })
      setStep(2)
    } catch (error) {
      console.error('Error saving patient information:', error)
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Unable to save patient information. Please check your entries and try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.image) {
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Please select a retinal image to upload before proceeding with the detection.'
      })
      return
    }

    setIsLoading(true)
    try {
      await uploadImage(form.patient_id, form.image)
      
      setPopup({
        isOpen: true,
        type: 'success',
        message: 'Retinal image uploaded successfully! You will be redirected to the detection report shortly.'
      })
      
      setTimeout(() => {
        navigate('/reports')
      }, 2000)
    } catch (error) {
      console.error('Error uploading image:', error)
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Failed to upload the retinal image. Please ensure the image is in the correct format and try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-4">
      <h1 className="text-4xl font-bold text-neutral-200 text-left">Patient Information</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 relative"
      >
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-2xl z-10">
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-neutral-300">Processing...</p>
            </div>
          </div>
        )}

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

      <Popup
        isOpen={popup.isOpen}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  )
}

export default DrConsole 
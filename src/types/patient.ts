// Patient form field types
export interface PatientForm {
  // Required Personal Information
  patient_name: string
  patient_id: string
  date_of_birth: string
  gender: string
  
  // Vision Information
  vision_problems: string
  visual_acuity_right: string
  visual_acuity_left: string
  
  // Optional Health Information
  blood_sugar_fasting: string
  blood_pressure: string
  
  // Detection Results
  dr_detection_result: string
  image: File | null
}

// Initial form state
export const initialPatientForm: PatientForm = {
  patient_name: '',
  patient_id: '',
  date_of_birth: '',
  gender: '',
  vision_problems: '',
  visual_acuity_right: '',
  visual_acuity_left: '',
  blood_sugar_fasting: '',
  blood_pressure: '',
  dr_detection_result: '',
  image: null
}

// Required fields validation
export const requiredFields = {
  patient_name: 'Patient Name',
  patient_id: 'Patient ID',
  date_of_birth: 'Date of Birth',
  gender: 'Gender',
  visual_acuity_right: 'Right Eye Visual Acuity',
  visual_acuity_left: 'Left Eye Visual Acuity',
  vision_problems: 'Vision Problems'
} 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReportCard from '../components/ReportCard'
import { apiRequest } from '../services/api'

interface Report {
  _id: string
  patient_id: string
  patient_name: string
  created_at: string
  dr_status: string
  severity_level: string
  confidence: number
  blood_pressure?: string
  blood_sugar_fasting?: number
  classification_details?: string
  dr_status_analysis?: string
  follow_up_plan?: string
  gender?: string
  image_url?: string
  patient_medical_assessment?: string
  recommendations?: string
  report_id?: string
  risk_assessment?: string
  vulnerable_areas_analysis?: string
  vision_problems?: string
  visual_acuity_left?: number
  visual_acuity_right?: number
  date_of_birth?: string
}

const Reports = () => {
  const [reports, setReports] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await apiRequest<{ reports: Report[], status: string }>('/reports')
        if (response.status === 'success') {
          setReports(response.reports)
        } else {
          setError('Failed to fetch reports')
        }
      } catch (err) {
        setError('Error connecting to the server')
        console.error('Error fetching reports:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReports()
  }, [])

  const handleViewReport = (reportId: string) => {
    // Implement view report logic
    console.log('Viewing report:', reportId)
  }

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 px-4">
        <h1 className="text-4xl font-bold text-neutral-200 text-left">Detection Reports</h1>
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 px-4">
        <h1 className="text-4xl font-bold text-neutral-200 text-left">Detection Reports</h1>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-red-400">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-4">
      <h1 className="text-4xl font-bold text-neutral-200 text-left">Detection Reports</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {reports.map((report, index) => (
          <motion.div
            key={report._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ReportCard
              patientId={report.patient_id}
              patientName={report.patient_name || 'Unknown Patient'}
              date={new Date(report.created_at).toLocaleDateString()}
              status={report.dr_status}
              severity={report.severity_level}
              confidence={Math.round(report.confidence * 100)}
              onViewReport={() => handleViewReport(report._id)}
              report={report}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Reports 
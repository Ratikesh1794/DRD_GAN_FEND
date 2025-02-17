import { useState } from 'react'
import ReportViewer from './ReportViewer'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ReportPDF from './ReportPDF'

interface ReportCardProps {
  patientId: string
  patientName: string
  date: string
  status: string
  severity: string
  confidence: number
  onViewReport: () => void
  report: {
    image_url?: string
    recommendations?: string
    classification_details?: string
    blood_pressure?: string
    blood_sugar_fasting?: number
    vision_problems?: string
    visual_acuity_left?: number
    visual_acuity_right?: number
    date_of_birth?: string
    gender?: string
    risk_assessment?: string
    follow_up_plan?: string
  }
}

const ReportCard = ({ 
  patientId, 
  patientName, 
  date, 
  status,
  severity,
  confidence,
  onViewReport,
  report
}: ReportCardProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const handleViewReport = () => {
    setIsViewerOpen(true)
    onViewReport()
  }

  return (
    <>
      <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 backdrop-blur-xl hover:shadow-glass transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-200">{patientName}</h3>
            <p className="text-sm text-neutral-400">ID: {patientId}</p>
          </div>
          <span className="text-sm text-neutral-500">{date}</span>
        </div>
        
        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Status:</span>
            <span className="text-primary-300">{status}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Severity:</span>
            <span className="text-primary-300">{severity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Confidence:</span>
            <span className="text-primary-300">{confidence}%</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={handleViewReport}
            className="flex-1 px-4 py-2 rounded-xl bg-primary-500/10 text-primary-300 hover:bg-primary-500/20 transition-all duration-300 font-medium"
          >
            View Report
          </button>
          <PDFDownloadLink
            document={
              <ReportPDF
                report={{
                  patientId,
                  patientName,
                  date,
                  status,
                  severity,
                  confidence,
                  imageUrl: report.image_url,
                  recommendations: report.recommendations,
                  additionalNotes: report.classification_details,
                  bloodPressure: report.blood_pressure,
                  bloodSugarFasting: report.blood_sugar_fasting,
                  visionProblems: report.vision_problems,
                  visualAcuityLeft: report.visual_acuity_left,
                  visualAcuityRight: report.visual_acuity_right,
                  dateOfBirth: report.date_of_birth,
                  gender: report.gender,
                  riskAssessment: report.risk_assessment,
                  followUpPlan: report.follow_up_plan
                }}
              />
            }
            fileName={`medical-report-${patientId}-${date}.pdf`}
            className="flex-1"
          >
            {({ loading, error }) => (
              <button
                className="w-full px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Preparing...' : error ? 'Error' : 'Download'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      <ReportViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        report={{
          patientId,
          patientName,
          date,
          status,
          severity,
          confidence,
          imageUrl: report.image_url,
          recommendations: report.recommendations,
          additionalNotes: report.classification_details,
          bloodPressure: report.blood_pressure,
          bloodSugarFasting: report.blood_sugar_fasting,
          visionProblems: report.vision_problems,
          visualAcuityLeft: report.visual_acuity_left,
          visualAcuityRight: report.visual_acuity_right,
          dateOfBirth: report.date_of_birth,
          gender: report.gender,
          riskAssessment: report.risk_assessment,
          followUpPlan: report.follow_up_plan
        }}
      />
    </>
  )
}

export default ReportCard 
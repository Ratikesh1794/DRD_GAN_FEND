interface ReportViewerProps {
  isOpen: boolean
  onClose: () => void
  report: {
    patientId: string
    patientName: string
    date: string
    status: string
    severity: string
    confidence: number
    imageUrl?: string
    recommendations?: string
    additionalNotes?: string
    bloodPressure?: string
    bloodSugarFasting?: number
    visionProblems?: string
    visualAcuityLeft?: number
    visualAcuityRight?: number
    dateOfBirth?: string
    gender?: string
    riskAssessment?: string
    followUpPlan?: string
  }
}

const ReportViewer = ({ isOpen, onClose, report }: ReportViewerProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-neutral-900/90 border border-neutral-800 w-full h-full md:h-[95vh] md:w-[95vw] md:max-w-7xl md:mx-auto md:rounded-2xl overflow-y-auto scrollbar-hide">
        <div className="p-8 space-y-6">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8 border-b border-neutral-800 pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-neutral-200 text-left">Medical Examination Report</h2>
              <p className="text-xs text-neutral-400 text-left">Report ID: {report.patientId}-{new Date(report.date).getTime()}</p>
              <p className="text-xs text-neutral-400 text-left">Generated: {report.date}</p>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-neutral-800/50">
              <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-left">
            {/* Patient Information Section */}
            <div className="grid grid-cols-3 gap-6">
              {report.imageUrl && (
                <div className="col-span-1">
                  <img 
                    src={report.imageUrl} 
                    alt="Retinal scan"
                    className="w-full max-w-[200px] aspect-square object-cover rounded-lg border border-neutral-700"
                  />
                </div>
              )}
              <div className="col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Patient Information</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div>
                    <span className="text-neutral-400">Name:</span>
                    <span className="text-neutral-200 ml-2">{report.patientName}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">ID:</span>
                    <span className="text-neutral-200 ml-2">{report.patientId}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">Date of Birth:</span>
                    <span className="text-neutral-200 ml-2">{report.dateOfBirth}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">Gender:</span>
                    <span className="text-neutral-200 ml-2">{report.gender}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Data Section */}
            <div className="grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Vision Assessment</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                    <span className="text-neutral-400">Visual Acuity (Left):</span>
                    <span className="text-neutral-200">{report.visualAcuityLeft}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                    <span className="text-neutral-400">Visual Acuity (Right):</span>
                    <span className="text-neutral-200">{report.visualAcuityRight}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                    <span className="text-neutral-400">Vision Problems:</span>
                    <span className="text-neutral-200">{report.visionProblems}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Health Indicators</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                    <span className="text-neutral-400">Blood Pressure:</span>
                    <span className="text-neutral-200">{report.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                    <span className="text-neutral-400">Blood Sugar (Fasting):</span>
                    <span className="text-neutral-200">{report.bloodSugarFasting} mg/dL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detection Results Section */}
            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Detection Results</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-neutral-800/30 p-4 rounded-lg">
                  <div className="text-neutral-400 mb-1">Status</div>
                  <div className="text-primary-300 font-medium">{report.status}</div>
                </div>
                <div className="bg-neutral-800/30 p-4 rounded-lg">
                  <div className="text-neutral-400 mb-1">Severity</div>
                  <div className="text-primary-300 font-medium">{report.severity}</div>
                </div>
                <div className="bg-neutral-800/30 p-4 rounded-lg">
                  <div className="text-neutral-400 mb-1">Confidence</div>
                  <div className="text-primary-300 font-medium">{report.confidence}%</div>
                </div>
              </div>
            </div>

            {/* Assessment & Recommendations */}
            <div className="grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6">
              {report.riskAssessment && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Risk Assessment</h3>
                  <p className="text-sm text-neutral-300 whitespace-pre-line">{report.riskAssessment}</p>
                </div>
              )}
              {report.recommendations && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Recommendations</h3>
                  <p className="text-sm text-neutral-300 whitespace-pre-line">{report.recommendations}</p>
                </div>
              )}
            </div>

            {/* Follow-up Plan */}
            {report.followUpPlan && (
              <div className="border-t border-neutral-800 pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Follow-up Plan</h3>
                <p className="text-sm text-neutral-300 whitespace-pre-line">{report.followUpPlan}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportViewer 
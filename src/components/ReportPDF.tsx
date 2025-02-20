import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Register professional fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'Helvetica' },
    { src: 'Helvetica-Bold', fontWeight: 'bold' }
  ]
})

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottom: '2px solid #333',
    paddingBottom: 10,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clinicInfo: {
    fontSize: 8,
    color: '#666',
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 5,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1px solid #eee',
    paddingVertical: 4,
    marginBottom: 4,
  },
  label: {
    flex: 2,
    fontWeight: 'bold',
  },
  value: {
    flex: 3,
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 8,
    color: '#666',
    borderTop: '1px solid #ccc',
    paddingTop: 10,
  },
  disclaimer: {
    fontSize: 7,
    color: '#999',
    marginTop: 5,
    fontStyle: 'italic',
  }
})

interface ReportPDFProps {
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

const ReportPDF = ({ report }: ReportPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.clinicName}>DR VisionCare Medical Center</Text>
          <Text style={styles.clinicInfo}>123 Medical Plaza, Suite 456</Text>
          <Text style={styles.clinicInfo}>Contact: (555) 123-4567</Text>
          <Text style={styles.clinicInfo}>License: MC12345678</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.clinicInfo}>Report ID: {report.patientId}-{new Date(report.date).getTime()}</Text>
          <Text style={styles.clinicInfo}>Date: {new Date(report.date).toLocaleDateString()}</Text>
          <Text style={styles.clinicInfo}>Time: {new Date(report.date).toLocaleTimeString()}</Text>
        </View>
      </View>

      <Text style={styles.reportTitle}>Diabetic Retinopathy Assessment Report</Text>

      {/* Patient Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patient Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Patient Name:</Text>
          <Text style={styles.value}>{report.patientName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Patient ID:</Text>
          <Text style={styles.value}>{report.patientId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{report.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{report.gender}</Text>
        </View>
      </View>

      {/* Clinical Assessment */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Clinical Assessment</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Visual Acuity (Right):</Text>
          <Text style={styles.value}>{report.visualAcuityRight}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Visual Acuity (Left):</Text>
          <Text style={styles.value}>{report.visualAcuityLeft}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Blood Pressure:</Text>
          <Text style={styles.value}>{report.bloodPressure}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fasting Blood Sugar:</Text>
          <Text style={styles.value}>{report.bloodSugarFasting} mg/dL</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Vision Problems:</Text>
          <Text style={styles.value}>{report.visionProblems}</Text>
        </View>
      </View>

      {/* Retinal Image Analysis */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Retinal Image Analysis</Text>
        {report.imageUrl && (
          <View style={styles.imageContainer}>
            <Image src={report.imageUrl} style={styles.image} />
          </View>
        )}
        <View style={styles.row}>
          <Text style={styles.label}>DR Status:</Text>
          <Text style={styles.value}>{report.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Severity Level:</Text>
          <Text style={styles.value}>{report.severity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>AI Confidence:</Text>
          <Text style={styles.value}>{report.confidence}%</Text>
        </View>
      </View>

      {/* Assessment & Recommendations */}
      {(report.riskAssessment || report.recommendations) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Clinical Interpretation & Recommendations</Text>
          {report.riskAssessment && (
            <View style={styles.row}>
              <Text style={styles.label}>Risk Assessment:</Text>
              <Text style={styles.value}>{report.riskAssessment}</Text>
            </View>
          )}
          {report.recommendations && (
            <View style={styles.row}>
              <Text style={styles.label}>Recommendations:</Text>
              <Text style={styles.value}>{report.recommendations}</Text>
            </View>
          )}
        </View>
      )}

      {/* Follow-up Plan */}
      {report.followUpPlan && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow-up Plan</Text>
          <Text>{report.followUpPlan}</Text>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Examining Physician: Dr. [Name], MD • Registration No: xxxxx</Text>
        <Text style={styles.disclaimer}>
          This report was generated using DR VisionCare's AI-assisted diagnostic system. 
          The results should be interpreted in conjunction with clinical findings and professional medical judgment.
        </Text>
      </View>
    </Page>
  </Document>
)

export default ReportPDF 
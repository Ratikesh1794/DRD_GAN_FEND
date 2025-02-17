import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Use standard PDF fonts that are guaranteed to work
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'Helvetica' },
    { src: 'Helvetica-Bold', fontWeight: 'bold' }
  ]
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 15,
    borderBottom: '1px solid #333',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 9,
    color: '#666',
    marginBottom: 2,
  },
  mainGrid: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    width: '35%',
    marginRight: 15,
  },
  rightColumn: {
    width: '65%',
  },
  section: {
    marginBottom: 15,
    padding: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
    textTransform: 'uppercase',
  },
  table: {
    width: '100%',
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid',
    alignItems: 'center',
    minHeight: 20,
    paddingVertical: 3,
  },
  tableCell: {
    fontSize: 9,
  },
  tableCellHeader: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#666',
    width: '35%',
  },
  tableCellValue: {
    fontSize: 9,
    width: '65%',
  },
  resultGrid: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  resultBox: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    marginBottom: 10,
    borderRadius: 4,
  },
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
      <View style={styles.header}>
        <Text style={styles.title}>Medical Examination Report</Text>
        <Text style={styles.subtitle}>Report ID: {report.patientId}-{new Date(report.date).getTime()}</Text>
        <Text style={styles.subtitle}>Generated: {report.date}</Text>
      </View>

      <View style={styles.mainGrid}>
        <View style={styles.leftColumn}>
          {report.imageUrl && (
            <Image src={report.imageUrl} style={styles.image} />
          )}
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Detection Results</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Status:</Text>
                <Text style={styles.tableCellValue}>{report.status}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Severity:</Text>
                <Text style={styles.tableCellValue}>{report.severity}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Confidence:</Text>
                <Text style={styles.tableCellValue}>{report.confidence}%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Patient Information</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Name:</Text>
                <Text style={styles.tableCellValue}>{report.patientName}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>ID:</Text>
                <Text style={styles.tableCellValue}>{report.patientId}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Date of Birth:</Text>
                <Text style={styles.tableCellValue}>{report.dateOfBirth}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Gender:</Text>
                <Text style={styles.tableCellValue}>{report.gender}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Clinical Assessment</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Visual Acuity (L):</Text>
                <Text style={styles.tableCellValue}>{report.visualAcuityLeft}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Visual Acuity (R):</Text>
                <Text style={styles.tableCellValue}>{report.visualAcuityRight}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Blood Pressure:</Text>
                <Text style={styles.tableCellValue}>{report.bloodPressure}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Blood Sugar:</Text>
                <Text style={styles.tableCellValue}>{report.bloodSugarFasting} mg/dL</Text>
              </View>
            </View>
          </View>

          {(report.riskAssessment || report.recommendations) && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Assessment & Recommendations</Text>
              {report.riskAssessment && (
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCellHeader}>Risk Assessment:</Text>
                    <Text style={styles.tableCellValue}>{report.riskAssessment}</Text>
                  </View>
                </View>
              )}
              {report.recommendations && (
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCellHeader}>Recommendations:</Text>
                    <Text style={styles.tableCellValue}>{report.recommendations}</Text>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      </View>

      {report.followUpPlan && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow-up Plan</Text>
          <Text style={styles.tableCell}>{report.followUpPlan}</Text>
        </View>
      )}
    </Page>
  </Document>
)

export default ReportPDF 
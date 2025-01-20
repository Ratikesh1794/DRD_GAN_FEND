import { motion } from 'framer-motion'

const Analytics = () => {
  const metrics = [
    {
      category: 'No DR',
      percentage: 45,
      count: 1023
    },
    {
      category: 'Mild',
      percentage: 25,
      count: 567
    },
    {
      category: 'Moderate',
      percentage: 15,
      count: 341
    },
    {
      category: 'Severe',
      percentage: 10,
      count: 227
    },
    {
      category: 'Proliferative DR',
      percentage: 5,
      count: 114
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-neutral-200">Analytics</h1>

      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50"
        >
          <h2 className="text-xl font-semibold text-neutral-200 mb-6">Detection Distribution</h2>
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div key={metric.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-300">{metric.category}</span>
                  <span className="text-neutral-400">{metric.count} cases ({metric.percentage}%)</span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
            <h2 className="text-xl font-semibold text-neutral-200 mb-4">Weekly Trend</h2>
            {/* Add line chart here */}
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
            <h2 className="text-xl font-semibold text-neutral-200 mb-4">Accuracy Metrics</h2>
            {/* Add accuracy metrics here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics 
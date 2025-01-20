import { motion } from 'framer-motion'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Scans',
      value: '2,345',
      change: '+12.3%',
      trend: 'up'
    },
    {
      title: 'Detection Accuracy',
      value: '89.7%',
      change: '+2.1%',
      trend: 'up'
    },
    {
      title: 'Reports Generated',
      value: '1,789',
      change: '+8.4%',
      trend: 'up'
    },
    {
      title: 'Processing Time',
      value: '1.2s',
      change: '-0.3s',
      trend: 'down'
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-neutral-200">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50"
          >
            <h3 className="text-sm font-medium text-neutral-400">{stat.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-2xl font-semibold text-neutral-200">{stat.value}</p>
              <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <h2 className="text-xl font-semibold text-neutral-200 mb-4">Recent Detections</h2>
          {/* Add chart or table here */}
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <h2 className="text-xl font-semibold text-neutral-200 mb-4">Detection Distribution</h2>
          {/* Add chart here */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
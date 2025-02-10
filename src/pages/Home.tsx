import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      title: 'AI-Powered Detection',
      description: 'Advanced deep learning models for accurate detection and classification of diabetic retinopathy stages',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'Instant Analysis',
      description: 'Real-time processing of fundus images with immediate severity classification',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Automated Reports',
      description: 'Comprehensive AI-generated reports with detailed analysis and recommendations',
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      gradient: 'from-primary-500 to-secondary-500'
    }
  ]

  const benefits = [
    {
      title: '80% Accuracy',
      description: 'High precision in detecting and classifying retinopathy stages with advanced AI algorithms',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'Early Detection',
      description: 'Identify potential issues before they become severe through regular screening',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      gradient: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Time Efficient',
      description: 'Rapid screening process with automated report generation saves valuable time',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-primary-500 to-secondary-500'
    }
  ]

  return (
    <div className="min-h-full px-4 py-8 space-y-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-4xl mx-auto"
      >
        <div className="inline-block">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI-Powered Healthcare Solution
          </motion.span>
        </div>
        
        <h1 className="font-display text-5xl font-bold bg-gradient-to-r from-primary-200 via-primary-300 to-secondary-200 text-transparent bg-clip-text">
          Advanced Diabetic Retinopathy Detection
        </h1>
        
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          Early detection and automated analysis of diabetic retinopathy using state-of-the-art artificial intelligence, helping healthcare providers make informed decisions faster.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link to="/dr_console" className="inline-flex rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 p-[1px]">
            <button className="px-8 py-4 rounded-2xl font-medium text-white bg-neutral-900/50 backdrop-blur-xl hover:bg-transparent transition-all duration-300">
              Start Detection
            </button>
          </Link>
          <Link to="/reports" className="inline-flex rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-700 p-[1px]">
            <button className="px-8 py-4 rounded-2xl font-medium text-neutral-300 bg-neutral-900/50 backdrop-blur-xl hover:bg-transparent transition-all duration-300">
              View Reports
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 3) }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-xl hover:shadow-glass transition-all duration-300 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6`}>
                <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-200 text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-center flex-grow">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits Section - Updated */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl mx-auto pb-12"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-4xl font-display font-bold text-center bg-gradient-to-r from-primary-200 via-primary-300 to-secondary-200 text-transparent bg-clip-text mb-4"
        >
          Why Choose Our Solution?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-16"
        >
          Our AI-powered platform delivers accurate, efficient, and reliable retinopathy detection
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 pb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 6) }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative h-full p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-xl hover:shadow-glass transition-all duration-300 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.gradient} p-4 mb-6`}>
                  <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-200 text-center mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 text-center flex-grow">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Home 
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles as SparklesIcon } from 'lucide-react'

interface ModernHeroProps {
  badge?: string
  title: string | ReactNode
  description: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  stats?: Array<{
    value: string | number
    label: string
    suffix?: string
  }>
  visual?: ReactNode
  minHeight?: 'sm' | 'md' | 'lg' | 'full'
  pattern?: boolean
  floatingElements?: boolean
}

export function ModernHero({
  badge,
  title,
  description,
  gradientFrom = 'from-green-50',
  gradientVia = 'via-blue-50',
  gradientTo = 'to-purple-50',
  primaryAction,
  secondaryAction,
  stats,
  visual,
  minHeight = 'lg',
  pattern = true,
  floatingElements = true,
}: ModernHeroProps) {
  const heightClasses = {
    sm: 'min-h-[50vh]',
    md: 'min-h-[60vh]',
    lg: 'min-h-[70vh]',
    full: 'min-h-screen',
  }

  return (
    <section className={`relative ${heightClasses[minHeight]} flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}>
      {/* Animated Background Pattern */}
      {pattern && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-accent-50/30 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05]" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      )}

      {/* Floating Animated Elements */}
      {floatingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 blur-xl ${
                i % 3 === 0 ? 'bg-primary-400' : i % 3 === 1 ? 'bg-accent-400' : 'bg-secondary-300'
              }`}
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${15 + i * 12}%`,
                top: `${10 + (i % 4) * 25}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            >
              <SparklesIcon className="w-3 h-3 text-primary-500" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className={`grid ${visual ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-12 xl:gap-16 items-center ${minHeight === 'full' ? 'min-h-screen py-16 sm:py-20 md:py-24 lg:py-32' : 'py-16 sm:py-20 md:py-24 lg:py-32'}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={`space-y-6 lg:space-y-8 ${visual ? '' : 'text-center max-w-4xl mx-auto'}`}
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200/50 text-primary-700 text-sm font-medium shadow-sm"
              >
                <motion.span
                  className="w-2 h-2 bg-primary-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {badge}
              </motion.div>
            )}

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              {typeof title === 'string' ? (
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900 leading-[1.1] tracking-tight">
                  {title}
                </h1>
              ) : (
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900 leading-[1.1] tracking-tight">
                  {title}
                </h1>
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`text-lg sm:text-xl md:text-2xl text-secondary-600 leading-relaxed ${visual ? 'max-w-2xl' : 'max-w-3xl mx-auto'}`}
            >
              {description}
            </motion.p>

            {/* Actions */}
            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                {primaryAction && (
                  <Button size="lg" asChild className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all">
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}
                {secondaryAction && (
                  <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 hover:bg-white/50 backdrop-blur-sm">
                    <Link href={secondaryAction.href}>
                      {secondaryAction.label}
                    </Link>
                  </Button>
                )}
              </motion.div>
            )}

            {/* Stats */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-secondary-200/50"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-1">
                      {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm sm:text-base font-medium text-secondary-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Visual Element */}
          {visual && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {minHeight === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-secondary-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { team, services, impact, news } from '@/lib/api'

export function SupabaseTest() {
  const [teamMembers, setTeamMembers] = useState<any[]>([])
  const [servicesData, setServicesData] = useState<any[]>([])
  const [impactStories, setImpactStories] = useState<any[]>([])
  const [newsArticles, setNewsArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Fetch all data in parallel
        const [teamResult, servicesResult, impactResult, newsResult] = await Promise.all([
          team.getAllMembers(),
          services.getAllServices(),
          impact.getAllStories(),
          news.getPublishedArticles()
        ])

        if (teamResult.error) throw new Error(`Team: ${teamResult.error.message}`)
        if (servicesResult.error) throw new Error(`Services: ${servicesResult.error.message}`)
        if (impactResult.error) throw new Error(`Impact: ${impactResult.error.message}`)
        if (newsResult.error) throw new Error(`News: ${newsResult.error.message}`)

        setTeamMembers(teamResult.data || [])
        setServicesData(servicesResult.data || [])
        setImpactStories(impactResult.data || [])
        setNewsArticles(newsResult.data || [])
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">Testing Supabase connection...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-red-800 font-semibold mb-2">Connection Error</h3>
        <p className="text-red-600 text-sm">{error}</p>
        <p className="text-red-500 text-xs mt-2">
          Please check your environment variables and Supabase setup.
        </p>
      </div>
    )
  }

  return (
    <div className="p-8 bg-green-50 border border-green-200 rounded-lg">
      <h3 className="text-green-800 font-semibold mb-4">✅ Supabase Connection Successful!</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium text-gray-900">Team Members</h4>
          <p className="text-2xl font-bold text-green-600">{teamMembers.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium text-gray-900">Services</h4>
          <p className="text-2xl font-bold text-green-600">{servicesData.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium text-gray-900">Impact Stories</h4>
          <p className="text-2xl font-bold text-green-600">{impactStories.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium text-gray-900">News Articles</h4>
          <p className="text-2xl font-bold text-green-600">{newsArticles.length}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-2">Sample Data:</h4>
        <div className="space-y-2 text-sm">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="bg-white p-2 rounded">
              <span className="font-medium">{member.name}</span> - {member.role}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
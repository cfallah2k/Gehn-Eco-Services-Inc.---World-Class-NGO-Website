import { SupabaseTest } from '@/components/supabase-test'

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Supabase Backend Test</h1>
        <p className="text-gray-600 mb-8">
          This page tests the Supabase connection and displays sample data from the database.
        </p>
        
        <SupabaseTest />
        
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-blue-800 font-semibold mb-2">Setup Instructions</h3>
          <ol className="text-blue-700 text-sm space-y-1">
            <li>1. Create a Supabase project at supabase.com</li>
            <li>2. Run the SQL script from supabase-setup.sql</li>
            <li>3. Create admin user in Authentication → Users</li>
            <li>4. Add environment variables to .env.local</li>
            <li>5. Test admin login at /admin/login</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 
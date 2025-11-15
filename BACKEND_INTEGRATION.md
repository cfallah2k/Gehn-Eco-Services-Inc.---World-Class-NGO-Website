# Backend Integration Guide

This document outlines how to integrate a backend API when ready.

## Current Architecture

The application currently uses **mock implementations** in `lib/api.ts` that simulate API calls. All data is static and stored in memory.

## API Structure

The API layer is organized in `lib/api.ts` with the following modules:

- `auth` - Authentication (sign in, sign out, session management)
- `contact` - Contact form submissions
- `newsletter` - Newsletter subscriptions
- `donations` - Donation processing
- `news` - News articles management
- `team` - Team members management
- `impact` - Impact stories management
- `services` - Services management
- `analytics` - Analytics and statistics

## Type Definitions

All API types are defined in `lib/types.ts`. These types should match your backend API responses.

## Integration Steps

### 1. Update API Functions

Replace the mock implementations in `lib/api.ts` with actual API calls:

```typescript
// Example: Replace mock auth.signIn with real API call
export const auth = {
  signIn: async (email: string, password: string): Promise<ApiResponse<AuthSession>> => {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    
    if (!response.ok) {
      return { data: null, error: { message: 'Authentication failed' } }
    }
    
    const data = await response.json()
    return { data, error: null }
  },
  // ... other methods
}
```

### 2. Update Environment Variables

Add backend API configuration to `env.example` and `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
API_SECRET_KEY=your_secret_key
```

### 3. Update Type Definitions

If your backend API responses differ from the current types, update `lib/types.ts` to match your backend schema.

### 4. Add API Client (Optional)

Consider creating an API client utility:

```typescript
// lib/api-client.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      return {
        data: null,
        error: { message: `API Error: ${response.statusText}` }
      }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return {
      data: null,
      error: { message: error instanceof Error ? error.message : 'Unknown error' }
    }
  }
}
```

### 5. Update Authentication

Replace mock authentication with your backend auth system:

- Update `auth.signIn()` to call your backend login endpoint
- Update `auth.getSession()` to validate tokens with your backend
- Update `auth.signOut()` to clear backend sessions

### 6. Update Admin Pages

Admin pages in `app/admin/` may need updates to work with real backend data:

- Ensure all API calls use the updated `lib/api.ts` functions
- Add proper error handling for API failures
- Add loading states for async operations

## Testing

After integration:

1. Test all API endpoints
2. Verify authentication flow
3. Test form submissions (contact, newsletter, donations)
4. Verify admin dashboard functionality
5. Test error handling

## Notes

- All API functions return `ApiResponse<T>` type for consistency
- Mock implementations include simulated delays to mimic real API behavior
- The current structure makes it easy to swap mock functions with real API calls
- Consider adding request/response interceptors for authentication tokens
- Add proper error handling and retry logic for production use


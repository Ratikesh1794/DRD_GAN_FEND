const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: unknown
}

export const apiRequest = async <T>(endpoint: string, config: RequestConfig = {}): Promise<T> => {
  const { method = 'GET', headers = {}, body } = config
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body ? JSON.stringify(body) : undefined
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json()
}
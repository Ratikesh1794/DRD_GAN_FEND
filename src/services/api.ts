const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: unknown
}

export const apiRequest = async <T>(endpoint: string, config: RequestConfig = {}): Promise<T> => {
  const { method = 'GET', headers = {}, body } = config
  
  // Don't set content-type for FormData (browser will set it automatically with boundary)
  const isFormData = body instanceof FormData
  const defaultHeaders = isFormData ? {} : {
    'Content-Type': 'application/json'
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: Object.assign({}, defaultHeaders, headers),
    body: isFormData ? body : (body ? JSON.stringify(body) : undefined)
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json()
}

export const uploadImage = async (patientId: string, file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${API_BASE_URL}/upload-retinal-image/${patientId}`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Image upload failed: ${response.statusText}`)
  }

  return response.json()
}
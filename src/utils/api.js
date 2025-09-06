import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: (params) => api.get('/contact', { params }),
  updateStatus: (id, status) => api.patch(`/contact/${id}/status`, { status }),
  delete: (id) => api.delete(`/contact/${id}`),
}

// Projects API
export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
  getCategories: () => api.get('/projects/categories'),
  getTechStack: () => api.get('/projects/tech-stack'),
}

// Blogs API
export const blogsAPI = {
  getAll: (params) => api.get('/blogs', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  create: (data) => api.post('/blogs', data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
  getTags: () => api.get('/blogs/tags'),
  getFeatured: (limit) => api.get('/blogs/featured', { params: { limit } }),
}

// Health check
export const healthCheck = () => api.get('/health')

export default api

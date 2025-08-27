import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { PostsProvider } from './PostsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
          <RouterProvider router={router} />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)

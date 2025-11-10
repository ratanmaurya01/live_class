import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import VideoPlayer from './components/VideoPlayer'

export default function SessionPage() {
  const { id } = useParams()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/session/${id}`)
        setSession(res.data)
      } catch (err) {
        alert('Session not found')
      }
      setLoading(false)
    }
    fetchSession()
  }, [id])

  if (loading) return <p className="text-center mt-10">Loading session...</p>
  if (!session) return <p className="text-center mt-10">❌ Session not found!</p>

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-3">🎥 Live Session</h1>
      <VideoPlayer />
    </div>
  )
}

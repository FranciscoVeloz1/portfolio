import { useState } from 'react'
import { Play } from 'lucide-react'
import '@components/project/Video.css'

export const Video = ({ embedId }: { embedId: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`

  if (!embedId) {
    return null
  }

  if (isLoaded) {
    return (
      <div className='video-facade'>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube video'
        />
      </div>
    )
  }

  return (
    <div className='video-facade'>
      <button
        type='button'
        className='video-facade-button'
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
        onClick={() => {
          setIsLoaded(true)
        }}
        aria-label='Play video'
      >
        <span className='video-facade-play'>
          <Play aria-hidden='true' />
        </span>
      </button>
    </div>
  )
}

import { useState } from 'react'
import Video from '@components/Video'

interface ProjectMediaProps {
  video: string
  image: string
  title: string
}

const ProjectMedia = ({ video, image, title }: ProjectMediaProps) => {
  const videoId = video.trim()
  const imageSrc = image.trim()
  const [showImage, setShowImage] = useState(() => {
    return videoId.length === 0 && imageSrc.length > 0
  })

  const handleImageError = () => {
    setShowImage(() => {
      return false
    })
  }

  if (videoId.length > 0) {
    return (
      <div className='project-video'>
        <Video embedId={videoId} title={title} />
      </div>
    )
  }

  if (showImage) {
    return (
      <div className='project-video'>
        <img
          className='project-detail-image'
          src={imageSrc}
          alt={`${title} project preview`}
          onError={handleImageError}
        />
      </div>
    )
  }

  return null
}

export default ProjectMedia

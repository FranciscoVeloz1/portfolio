import '@styles/Video.css'

const Video = ({ embedId }) => {
  return (
    <div className='video-responsive'>
      <iframe
        width='200'
        height='380'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

export default Video

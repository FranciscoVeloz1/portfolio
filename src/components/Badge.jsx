import '@styles/Badge.css'

const Badge = ({ id, label }) => {
  const handleStyle = () => {
    switch (id) {
      case 1:
        return 'react'

      case 2:
        return 'node'

      case 3:
        return 'js'

      case 4:
        return 'ts'

      case 5:
        return 'sql'

      case 6:
        return 'rn'

      case 7:
        return 'express'

      case 8:
        return 'next'

      case 9:
        return 'autodesk'

      case 10:
        return 'robotics'

      case 11:
        return 'c'
    }
  }

  return <span className={`badge badge-${handleStyle()}`}>{label}</span>
}

export default Badge

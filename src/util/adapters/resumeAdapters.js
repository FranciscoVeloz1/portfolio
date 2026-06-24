const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatProjectDate = (isoDate) => {
  if (!isoDate) {
    const emptyDate = ''
    return emptyDate
  }

  const [year, month, day] = isoDate.split('-').map(Number)

  if (!year || !month || !day) {
    return isoDate
  }

  const formattedDate = `${MONTHS[month - 1]} ${day}, ${year}`
  return formattedDate
}

const parseStartDate = (startDate) => {
  if (!startDate) {
    const fallback = 0
    return fallback
  }

  const [year, month] = startDate.split('-').map(Number)
  const parsedDate = year * 100 + (month || 1)
  return parsedDate
}

const parseProjectDate = (date) => {
  if (!date) {
    const fallback = 0
    return fallback
  }

  const [year, month, day] = date.split('-').map(Number)
  const parsedDate = year * 10000 + (month || 1) * 100 + (day || 1)
  return parsedDate
}

export const adaptProfile = (profile, summary) => {
  const adaptedProfile = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    fullName: profile.fullName,
    headline: profile.headline,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    website: profile.website,
    profilePhoto: profile.profilePhoto,
    summary: summary.long || summary.short || ''
  }

  return adaptedProfile
}

export const adaptSocialNetworks = (socialNetworks) => {
  const adaptedNetworks = socialNetworks.map((network) => {
    const adaptedNetwork = {
      platform: network.platform,
      link: network.link
    }

    return adaptedNetwork
  })

  return adaptedNetworks
}

export const adaptSkills = (skills) => {
  const adaptedSkills = skills.map((skill) => {
    const adaptedSkill = {
      id: skill.id,
      name: skill.name,
      category: skill.category
    }

    return adaptedSkill
  })

  return adaptedSkills
}

export const adaptWorkExperience = (workExperience, skills) => {
  const skillMap = new Map(skills.map((skill) => {
    return [skill.id, skill]
  }))

  const adaptedExperiences = [...workExperience]
    .sort((a, b) => {
      const sortValue = parseStartDate(b.startDate) - parseStartDate(a.startDate)
      return sortValue
    })
    .map((experience, index) => {
      const badges = (experience.skills || [])
        .map((skillId) => {
          const skill = skillMap.get(skillId)
          return skill
        })
        .filter(Boolean)

      const adaptedExperience = {
        id: index + 1,
        image: experience.logo,
        title: experience.position,
        date: experience.duration,
        company: `${experience.company} - ${experience.location}`,
        responsibilities: experience.responsibilities || [],
        badges
      }

      return adaptedExperience
    })

  return adaptedExperiences
}

export const adaptProjects = (projects, skills) => {
  const skillMap = new Map(skills.map((skill) => {
    return [skill.id, skill]
  }))

  const adaptedProjects = [...projects]
    .sort((a, b) => {
      const sortValue = parseProjectDate(b.date) - parseProjectDate(a.date)
      return sortValue
    })
    .map((project) => {
      const badges = (project.skills || [])
        .map((skillId) => {
          const skill = skillMap.get(skillId)
          return skill
        })
        .filter(Boolean)

      const adaptedProject = {
        id: project.id,
        image: project.image,
        title: project.name,
        date: formatProjectDate(project.date),
        description: project.description,
        git: project.repo || project.link || '',
        video: project.video,
        demo: project.demo || null,
        badges
      }

      return adaptedProject
    })

  return adaptedProjects
}

export const adaptCertifications = (certifications) => {
  const adaptedCertifications = certifications.map((certification, index) => {
    const adaptedCertification = {
      id: certification.link || `cert-${index}`,
      image: certification.logo,
      title: certification.name,
      date: certification.date,
      description: certification.description,
      link: certification.link,
      issuer: certification.issuer
    }

    return adaptedCertification
  })

  return adaptedCertifications
}

export const adaptResumeData = (raw) => {
  const skills = adaptSkills(raw.skills || [])

  const adaptedData = {
    profile: adaptProfile(raw.profile, raw.summary),
    socialNetworks: adaptSocialNetworks(raw.socialNetworks || []),
    skills,
    experiences: adaptWorkExperience(raw.workExperience || [], skills),
    projects: adaptProjects(raw.projects || [], skills),
    certificates: adaptCertifications(raw.certifications || [])
  }

  return adaptedData
}

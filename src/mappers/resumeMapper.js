function mapSkills (skills = []) {
  return skills.map(({ id, name }) => ({ id, label: name }))
}

function mapExperiences (workExperience = []) {
  return workExperience.map((entry, index) => ({
    id: workExperience.length - index,
    image: entry.logo,
    title: entry.position,
    date: entry.duration,
    company: `${entry.company} - ${entry.location}`,
    description: entry.responsibilities.join(' '),
    badges: entry.skills ?? []
  }))
}

function mapProjects (projects = []) {
  return projects.map((project) => ({
    id: project.id,
    image: project.image,
    title: project.name,
    date: project.date,
    description: project.description,
    git: project.repo || project.link,
    link: project.link,
    video: project.video ?? '',
    demo: project.demo ?? '',
    badges: project.skills ?? []
  }))
}

function mapCertificates (certifications = []) {
  return certifications.map((cert) => ({
    image: cert.logo,
    title: cert.name,
    date: cert.date,
    description: cert.description ?? '',
    link: cert.link
  }))
}

export function mapResumeData (raw) {
  const skills = mapSkills(raw.skills)

  return {
    summary: raw.summary ?? '',
    profile: raw.profile ?? {},
    socialNetworks: raw.socialNetworks ?? [],
    skills,
    experiences: mapExperiences(raw.workExperience),
    projects: mapProjects(raw.projects),
    certificates: mapCertificates(raw.certifications)
  }
}

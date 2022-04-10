import apiClient from './client'

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: { label: string }[];
  participants: { firstName: string; lastName: string }[]
  requiredSkills: { label: string }[]
}

export const getProjects = async () => {
  const res = await apiClient.get('/projects')
  console.log(res.data)
  return res.data as Project[]
}

type CreateProjectDTO = {
  title: string
  description: string
  tags: string[]
  participantIds: string[]
}

export const createProject = async (title: string, description: string) => {
  const projectDto: CreateProjectDTO = {
    title,
    description,
    tags: [],
    participantIds: [],
  }
  try {
    const res = await apiClient.post('/projects', projectDto)
    if (res.data.error) throw new Error(res.data.error)
  } catch(e) {

  }
}


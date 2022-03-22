import client from './client'

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: { label: string }[];
  participants: { firstName: string; lastName: string }[]
  requiredSkills: { label: string }[]
}

export const getProjects = async () => {
  const res = await client.get('api/projects')
  console.log(res.data)
  return res.data as Project[]
}


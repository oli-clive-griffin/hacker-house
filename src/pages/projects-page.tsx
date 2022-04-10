import { useEffect, useState } from "react"
import ProjectTile from "../components/project-tile"
import { getProjects, Project } from "../service/project-service"
import Header from "../components/header"


const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    const getProjecs = async () => {
      setProjects(await getProjects())
    }
  
    getProjecs()
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Header/>

      <div className="w-full px-24 bg-gray-50 flex-grow">
        <div className="h-40" />
        <p className="font-semibold text-5xl">Explore projects</p>
        <div className="h-8" />
        <input type="text" className="w-3/6 shadow-md shadow-grey-200 rounded-lg focus:outline-none px-4 py-3 text-2xl" />
        <div className="h-8" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects?.map(({ title, description, id }) => (
            <ProjectTile key={id} description={description} title={title}/>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectsPage
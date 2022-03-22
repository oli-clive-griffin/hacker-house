import { FC } from 'react'
import { Project } from '../service/project-service'


const ProjectTile: FC<Project> = ({ title, description, tags, participants }) => {

  const harshShadow: React.CSSProperties = {
    boxShadow: '10px 10px 0px 1px rgba(0,0,0,1)',
    WebkitBoxShadow: '10px 10px 0px 1px rgba(0,0,0,1)',
  }

  return (
    <div style={harshShadow} className='border-2 border-slate-800 p-8 bg-white harsh-shadow'>
      <p className='text-3xl font-semibold'>
        {title}
      </p>
      <div className='h-2' />
      <div className='flex flex-row items-center'>
        {tags?.map(({ label }) => (
          <>
            <div className='py-0.5 px-2 rounded-sm bg-blue-200' >
              <p className='text-xs text-blue-500'>{label}</p>
            </div>
            <div className="w-1" />
          </>
        ))}
      </div>
      <div className='h-4' />
      <p>
        {description}
      </p>
      <div className='flex flex-row pt-4 items-center'>
        {participants?.map(({ firstName }) => (
          <div className='flex items-center justify-center aspect-square w-6 rounded-full shadow-md ring-2 ring-white bg-blue-300'>
            <p className='text-white text-sm'>{firstName[0]}</p>
          </div>
        ))}
        <div className='w-4' />
        <a href='./' className='font-semibold hover:underline underline-offset-2'>+ Join</a>
      </div>
    </div>
  )
}


export default ProjectTile

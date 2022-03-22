import { FC } from 'react'
import { Project } from '../service/project-service'


const ProjectTile: FC<Project> = ({ title, description }) => {

  const users = [
    { name: 'Oli' },
    { name: 'Annie' },
    { name: 'Gallgher' },
    { name: 'j' },
  ]

  const tags = [ 'asdf', 'rete', 'cxv' ]

  return (
    <div className='rounded-md shadow-lg p-8 bg-white'>
      <p className='text-3xl font-semibold'>
        {title}
      </p>
      <div className='h-2' />
      <div className='flex flex-row items-center'>
        {tags.map(tag => (
          <>
            <div className='py-0.5 px-2 rounded-sm bg-blue-200' >
              <p className='text-xs text-blue-500'>{tag}</p>
            </div>
            <div className="w-1" />
          </>
        ))}
      </div>
      <p>
        {description}
      </p>
      <div className='flex flex-row pt-4 items-center'>
        {users.map(u => (
          <div className='flex items-center justify-center aspect-square w-6 rounded-full shadow-md ring-2 ring-white bg-blue-300'>
            <p className='text-white text-sm'>{u.name[0]}</p>
          </div>
        ))}
        <div className='w-4' />
        <a href='./' className='font-semibold hover:underline underline-offset-2'>+ Join</a>
      </div>
    </div>
  )
}


export default ProjectTile

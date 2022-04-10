import { FC } from 'react'

export type ProjectTileProps = {
  title: string,
  description: string,
  participants?: { firstName: string }[]
}

const ProjectTile: FC<ProjectTileProps> = ({ title, description, participants }) => {

  return (
    <div className="shadow-lg rounded-lg p-8 bg-white">
      <p className="text-3xl font-semibold">
        {title}
      </p>
      <div className='h-2' />
      {/* <div className='flex flex-row items-center'>
        {tags?.map(({ label }) => (
          <>
            <div className='py-0.5 px-2 rounded-sm bg-blue-200' >
              <p className='text-xs text-blue-500'>{label}</p>
            </div>
            <div className="w-1" />
          </>
        ))}
      </div> */}
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
        {participants && <div className='w-4' />}
        <a href='./' className='font-semibold hover:underline underline-offset-2'>
          <button className="rounded-md py-1 px-2
                            bg-blue-200 hover:bg-blue-300
                            // text-blue-500 hover:text-blue-600">
            <p className=''>+ Join</p>
          </button>
        </a>
      </div>
    </div>
  )
}


export default ProjectTile

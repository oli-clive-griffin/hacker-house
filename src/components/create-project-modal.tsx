import { FC, useState } from 'react'
import { createProject } from '../service/project-service'
import Button from './button'

export type CreateProjectModalProps = {
  onComplete: () => void
}

const CreateProjectModal: FC<CreateProjectModalProps> = ({ onComplete }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleClickCreate = async () => {
    await createProject(title, description)
    onComplete()
  }

  return (
    <div className="rounded-sm bg-white
                    p-8 shadow-lg text-black w-40
                    min-w-fit flex flex-col" >
      <p className='text-xl font-semibold'>
        Create a new project
      </p>
      <div className="h-4" />

      <p>Title</p>
      <input
        onChange={e => setTitle(e.target.value)}
        type="text"
        className="px-1 rounded border-2 border-slate-800 focus:outline-none"
      />
      <div className="h-4" />

      <p>Description</p>
      <textarea
        onChange={e => setDescription(e.target.value)}
        className="px-1 rounded border-2 border-slate-800 focus:outline-none"
      />
      <div className="h-4" />
      <Button onClick={handleClickCreate}>
        <p>Create</p>
      </Button>
    </div>
  )
}

export default CreateProjectModal

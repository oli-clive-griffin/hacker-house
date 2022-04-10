import { KeyEnum } from '../data/react-query-enums'
import { useQuery } from 'react-query'
import { getProjects } from '../service/project-service'
import Header from '../components/header'
import Modal from '../components/modal';
import { useState } from 'react';
import CreateProjectModal from '../components/create-project-modal';

const HomePage = () => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>()

  const { isLoading, isError, error, data } = useQuery(KeyEnum.PROJECTS, getProjects)

  if (!data || isLoading) return <p>"loading..."</p>

  if (isError) return <p> ERROR: {JSON.stringify(error)} </p>

  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <div className="flex flex-col flex-grow items-center justify-center bg-slate-50 p-24">
        <div className="w-fit">
          <p className="text-6xl font-semibold">
            Build cool shit with cool people
          </p>
          <div className="bg-yellow-300 h-3 w-full" />
        </div>
        <div className="h-8" />
        <div
          onClick={() => setShowCreateProjectModal(true)}
          className="rounded-lg py-2 px-3 w-fit cursor-pointer bg-blue-200 hover:bg-blue-300 text-blue-500 hover:text-blue-600"
        >
          <p className="font-bold ">+ New Project</p>
        </div>
      </div>
      {showCreateProjectModal && (
        <Modal close={() => setShowCreateProjectModal(false)}>
          <CreateProjectModal onComplete={() => setShowCreateProjectModal(false)} />
        </Modal>
      )}
    </div>
  )
}

export default HomePage;

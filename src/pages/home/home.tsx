import { KeyEnum } from '../../data/react-query-enums'
import { useQuery } from 'react-query'
import { getProjects } from '../../service/project-service'
import ProjectTile from '../../components/project-tile';
import Layout from '../universal/layout'

function Home() {
  const { isLoading, isError, error, data } = useQuery(KeyEnum.PROJECTS, getProjects)

  if (!data || isLoading) return <p>"loading..."</p>

  if (isError) return <p> ERROR: {JSON.stringify(error)} </p>

  return (
    <Layout>
      <div className='bg-slate-50 p-24'>
        <div className="w-fit">
          <p className='text-6xl font-semibold'>
            Build cool shit with cool people
          </p>
          <div className='bg-yellow-300 h-3 w-full' />
        </div>
        <div className="h-8" />
        <div className='grid grid-cols-3 gap-6'>
          {data!.map(project => (
            <ProjectTile {...project} />
          ))}

        </div>
      </div>
    </Layout>
  )
}

export default Home;

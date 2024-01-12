import React, { useContext } from 'react'

import Modal from '../../component/common/Modal'

import Paper from '../../component/common/Paper'
import ForcastChart from '../../component/charts/forcast'
import BubbleChart from '../../component/charts/bubblecharts'
import DonutChart from '../../component/charts/donutchart'
import { ModeContext } from '../../context/context'


const Dashboard = () => {
  const [isModal, setIsModal] = React.useState(false)
  const {isDarkMode}=useContext(ModeContext)

  return (
    <div>
      <div className='grid grid-cols-3 gap-2'>
        <Paper value={500} width={"100%"} height={200} onClick={() => setIsModal(prev => !prev)} />
        <Paper value={8900} width={"100%"} height={200} />
        <Paper value={100} width={"100%"} height={200} />
      </div>

      <div className='grid grid-cols-3 gap-3 py-6'>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
          <ForcastChart />
        </div>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
          <BubbleChart />
        </div>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
          <DonutChart />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-3 py-6'>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
          
          <BubbleChart />
        </div>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
        <ForcastChart />
        </div>
        <div className={`col-span-1 ${isDarkMode ? "bg-[#333]" :"bg-white"} rounded-md`}>
          <DonutChart />
        </div>
      </div>

      <Modal isOpen={isModal} onClose={() => setIsModal(prev => !prev)} noclose >
        <h2>This is a Modal</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
  )
}

export default Dashboard
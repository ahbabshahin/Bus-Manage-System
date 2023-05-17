import React from 'react';

const initialStats = [
    {title: 'No. of Bus', value: 10},
    {title: 'No. of Routes', value: 10},
    {title: 'No. of Students', value: 10},
    {title: 'No. of Teachers', value: 10},
    {title: 'No. of Stuffs', value: 10},
]

const AdminDashboardHome = () => {
  return (
   <div className="p-[25px]">
        <div className="grid grid-cols-5 gap-2">
           {
            initialStats.map(({title, value}, id) => {
                return <div key={id} className='border rounded-lg shadow bg-white p-[25px]'>
						<h2>{title}</h2>
						<h5>{value}</h5>
					</div>;
            })
           }
        </div>
   </div>
  )
}

export default AdminDashboardHome
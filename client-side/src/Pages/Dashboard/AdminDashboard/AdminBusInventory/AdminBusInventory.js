import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminBusInventory = () => {
    const [busList, setBusList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/bus/get').then(res => {
            setBusList(res.data.bus);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }, []);

    return (
        <section>
            <div onClick={() => navigate('/dashboard/addBus')}>
                <h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
                    <span>
                        <MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
                    </span>
                    Add New Bus
                </h2>
            </div>
            <article>
                {' '}
                <div className='flex items-center text-xl font-semibold mb-10'>
                    <span>
                        <FaBus className='text-dark mr-3' />
                    </span>
                    <h2 className=' text-dark '>List of Existing Bus</h2>
                </div>
                {/* Existing Bus Update list */}

                <div>
                    {busList && busList.map(
                        ({
                            _id,
                            codeName,
                            licenseNo,
                            isActive,
                            capacity,
                            driverInfo

                        }) => (
                            <div
                                key={_id}
                                className='border-2 border-gray-200 hover:border-dark space-y-2 mb-2 rounded items-center py-2 px-3 flex justify-between'
                            >
                                <p>CodeName : {codeName}</p>
                                <p>License :   {licenseNo}</p>
                                <p>Capacity:{capacity}</p>
                                <p>Driver:{driverInfo.contacts}</p>
                                {/* should be dynamic */}
                                <p className='font-medium'>
                                    {isActive ? 'active' : 'inactive'}
                                </p>
                                <div>
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/dashboard/busUpdate/${_id}`
                                            )
                                        }
                                        className='block border bg-secondary py-2 px-3 rounded-lg hover:bg-dark hover:text-white'
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </article>

        </section>

    );

};
export default AdminBusInventory;
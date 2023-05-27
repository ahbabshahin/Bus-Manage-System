import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const Complaint = () => {
	const [busList, setBusList] = useState([]);
	const { busId: id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get('/complaint/get')
			.then((res) => {
				setBusList(res.data.gC);
				console.log(res.data.gC);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`/complaint/get/${id}`)
			.then((res) => {
				setBusList(res.data.gC);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	// useEffect(() => {
	// 	axios
	// 		.get(`/complaint/get/${id}`)
	// 		.then((res) => {
	// 			setBusList(res.data.gC);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// },[id]);

	const handleClick = async () => {
		try {
			const res = await axios.delete('/complaint/delete/:id');
			// setBusList(res.data.cC);
			navigate(`/dashboard/admincomplaint`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section>
			{/* <div onClick={() => navigate('/dashboard/addBus')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Bus
				</h2>
			</div> */}
			<article>
				{' '}
				<div className='flex items-center text-xl font-semibold mb-10'>
					<span>
						<FaBus className='text-dark mr-3' />
					</span>
					<h2 className=' text-dark '>
						List of Existing Complaint or Suggestion
					</h2>
				</div>
				{/* Existing Bus Update list */}
				<div>
					{busList &&
						busList.map(({ _id, title, desc }) => (
							<div
								key={_id}
								className='border-2 border-gray-200 hover:border-dark space-y-2 mb-2 rounded items-center py-2 px-3 flex justify-between'
							>
								<h2>Title : {title}</h2>

								<p>Description : {desc}</p>

								{/* should be dynamic */}

								<div>
									<button
										onClick={handleClick}
										className='block border bg-secondary py-2 px-3 rounded-lg hover:bg-dark hover:text-white'
									>
										Delete
									</button>
								</div>
							</div>
						))}
				</div>
			</article>
		</section>
	);
};
export default Complaint;

import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import StudentProfile from '../StudentProfile/StudentProfile';
import TeacherProfile from '../TeacherProfile/TeacherProfile';

const ConsumerDashboardProfile = () => {
	const { user } = useAuth();
	return <div>{user.role === 'student' && <StudentProfile /> }
	{user?.role === 'teacher' && <TeacherProfile />}</div>;
};

export default ConsumerDashboardProfile;

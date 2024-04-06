import React from 'react';
import { useGettUsersQuery} from '../store/Features/api/apiSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Notifications } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
const Home = () => {
  const { data, error, isLoading } = useGettUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <div>
        <img src="/logo.png" alt="Company Logo" className="h-8 w-8 mr-2" />
        <span className="text-white">Company Name</span>
      </div>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Here is a gentle confirmation that your action was successful.
        </Alert>
      <div className="flex items-center">
        <Badge badgeContent={4} color="error">
            <Notifications />
        </Badge>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="ml-4">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
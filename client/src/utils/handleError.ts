import { toast } from 'react-toastify';

// TO DO: Check any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (error: any) => {
  const errorText = error.response.data.error || error.message;

  toast.error(errorText);

  console.error(errorText);
};

export default handleError;

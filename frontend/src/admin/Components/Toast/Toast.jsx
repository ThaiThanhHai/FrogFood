import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ danger, success, error }) => {
  toast.configure();

  // function which is called when
  // button is clicked
  // inbuilt-notification
  danger && toast.warning(danger);
  // inbuilt-notification
  success && toast.success(success);
  // inbuilt-notification

  error && toast.error(error);
  // default notification

  return <div></div>;
};

export default Toast;

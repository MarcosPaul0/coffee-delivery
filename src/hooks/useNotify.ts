import { toast } from "react-toastify";
import { ToastOptions } from "react-toastify/dist/types";

const toastConfig: ToastOptions = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeButton: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export function useNotify() {
  async function successNotify(message: string) {
    toast.success(message, toastConfig);
  }

  async function errorNotify(message: string) {
    toast.error(message, toastConfig);
  }

  return { successNotify, errorNotify };
}

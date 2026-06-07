import { toast } from 'react-hot-toast';

export const showSuccess = (message: string) =>
  toast.success(message);

export const showError = (message: string) =>
  toast.error(message);

export const showLoading = (message: string) =>
  toast.loading(message);

export const dismissToast = (id?: string) =>
  toast.dismiss(id);

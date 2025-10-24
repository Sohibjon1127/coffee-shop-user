import { ISuccess } from './success.interface';

export const successRes = (
  data: any,
  statusCode: number = 200,
  message: string = 'success',
): ISuccess => {
  return {
    statusCode,
    message,
    data,
  };
};

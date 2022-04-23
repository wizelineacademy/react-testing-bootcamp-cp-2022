import { isValidDate } from '.';

export const formatDate = date => {
  if (isValidDate(date)) {
    return date.toISOString().split('T')[0]
  }
};
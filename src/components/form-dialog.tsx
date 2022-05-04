import * as React from 'react';

import * as styles from './form-dialog.module.css';
import classNames from 'classnames';

export enum FormStatus {
  Success = 'success',
  Alert = 'alert',
}

export interface FormStatusProps {
  status: FormStatus;
  message: string;
}

export const FormDialog = ({ status, message }: FormStatusProps) => (
  <div className={classNames(styles.container, styles[status])}>{message}</div>
);

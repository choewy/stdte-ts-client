import { FunctionComponent } from 'react';

export const EmptyPage: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>To be deleted</div>
    </div>
  );
};

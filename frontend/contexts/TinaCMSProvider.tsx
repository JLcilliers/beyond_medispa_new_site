import { useTina } from 'tinacms/dist/react';
import { client } from '../../tina/__generated__/client';

export const TinaCMSProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Hook to use TinaCMS data
export const useTinaContent = (query: any, variables: any) => {
  return useTina({
    query,
    variables,
    data: {},
  });
};

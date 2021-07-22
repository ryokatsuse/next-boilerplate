import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;

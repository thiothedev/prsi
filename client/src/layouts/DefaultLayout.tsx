interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props): JSX.Element => (
  <>{children}</>
);

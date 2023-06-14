interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props): JSX.Element => <>{children}</>;

export default DefaultLayout;

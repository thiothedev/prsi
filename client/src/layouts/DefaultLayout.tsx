import { PageNavigation } from '../components/blocks/PageNavigation';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props): JSX.Element => (
  <>
    <PageNavigation />
    {children}
  </>
);

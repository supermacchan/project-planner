import Link from 'next/link';
import classNames from 'classnames';

import { LogoProps } from './Logo.props';

const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoStyles = classNames('flex items-center gap-2', className);
  return (
    <Link href={'/'} className={logoStyles}>
      <h1 className="hidden uppercase md:block">Project planner</h1>
    </Link>
  );
};

export default Logo;

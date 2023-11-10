import { Navigation, Logo } from '@/components';

const Header: React.FC = async () => {
  return (
    <header className="border-b-2 py-3">
      <div className="container flex items-center justify-between">
        <Logo className="" />
        <div className="flex gap-12">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;

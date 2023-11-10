import Link from 'next/link';
import { getServerSession } from 'next-auth/next';

import { options } from '@/app/api/auth/[...nextauth]/options';

import data from '@/data/layout.json';

import { Greeting } from '@/components';

const Navigation: React.FC = async () => {
  const session = await getServerSession(options);
  const { navigation, auth } = data.header;

  return (
    <nav className="flex gap-4">
      {session && <Greeting name={session?.user?.name} />}
      {navigation.map(link => (
        <Link key={link.path} href={link.path}>
          {link.name}
        </Link>
      ))}

      {session ? (
        <Link href={auth.signedIn.path}>{auth.signedIn.name}</Link>
      ) : (
        <Link href={auth.signedOut.path}>{auth.signedOut.name}</Link>
      )}
    </nav>
  );
};

export default Navigation;

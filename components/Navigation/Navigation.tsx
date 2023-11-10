import Link from 'next/link';
import { getServerSession } from 'next-auth/next';

import { options } from '@/app/api/auth/[...nextauth]/options';

import { Greeting } from '@/components';

const Navigation: React.FC = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="flex gap-4">
      {session && <Greeting name={session?.user?.name} />}
      <Link href={'/projects'}>My Projects</Link>
      {session ? (
        <Link href={'/api/auth/signout'}>Sign out</Link>
      ) : (
        <Link href={'/api/auth/signin'}>Sign in</Link>
      )}
    </nav>
  );
};

export default Navigation;

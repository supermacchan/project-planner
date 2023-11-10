import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// http://localhost:3000/api/auth/providers

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-password',
        },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'shalala',
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

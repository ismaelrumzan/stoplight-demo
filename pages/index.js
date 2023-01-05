import Head from 'next/head';
import { API } from '@stoplight/elements';

export default function Home() {
  if (typeof window !== 'undefined') {
    return (
      <div>
        <API apiDescriptionUrl='https://openapi.vercel.sh/' />
      </div>
    );
  }
}

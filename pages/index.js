import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { API } from '@stoplight/elements';

export default function Home() {
  if (typeof window !== 'undefined') {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <API apiDescriptionUrl='https://openapi.vercel.sh/' />
        </div>
      </Layout>
    );
  }
}

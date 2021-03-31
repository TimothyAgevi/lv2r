import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();
  const {propertyId} = router.query;

  return (
    <div>
      <Head>
        <title>Vacant 2 Rent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Property Id: { propertyId }</h1>
      </main>
    </div>
  )
}

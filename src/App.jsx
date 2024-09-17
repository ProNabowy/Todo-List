import { Fragment, Suspense, } from 'react'
import useHandleRoutes from './routes/routes';
import { Footer, Header } from './layouts';

function App() {

  const { routes } = useHandleRoutes();

  return (
    <Fragment>

      <Suspense fallback={'Loading'}>

        <Header />

        <main className='flex-1'>{routes}</main>

        <Footer />

      </Suspense>

    </Fragment>
  )
}

export default App;

import '../styles/globals.css';

//comps

import Layout from '../components/Layout'
import Transition from '../components/Transition';

//router 
import { useRouter } from "next/router"

//framer motion
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
        </motion.div>
      </AnimatePresence>
    </Layout>)
}

export default MyApp;

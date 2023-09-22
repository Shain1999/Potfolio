import { Sora } from '@next/font/google'
import { Rubik } from '@next/font/google'
import { Fredoka } from '@next/font/google'

//font settgins

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})



//comps
import Header from "../components/Header"
const Layout = ({ children }) => {
  return <div className={`page bg-primary/80 text-white bg-site bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <Header />
    {children}
  </div>;
};

export default Layout;

import { ToastContainer } from 'react-toastify'
import ConfirmProvider from '../../context/confirmProvider'
import Seo from './seo'

export const DashboardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element => {
  return (
    <div>
      <Seo title={title} />
      <header></header>
      <main>
        <ConfirmProvider>{children}</ConfirmProvider>
        <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </div>
  )
}

export default DashboardLayout

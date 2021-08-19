import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import GlobalStateProvider from '../../context/global-state-provider'
import ConfirmProvider from '../../context/confirm-provider'
import Seo from './seo'
import Header from './header'
import SideBar from './sidebar'

const queryClient = new QueryClient()

export const DashboardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfirmProvider>
          <GlobalStateProvider>
            <Seo title={title} />
            <div className="flex h-screen bg-gray-200 font-roboto">
              <SideBar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                  {children}
                </main>
              </div>
            </div>
          </GlobalStateProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ConfirmProvider>
      </QueryClientProvider>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position={'bottom-right'}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default DashboardLayout

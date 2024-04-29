import React from 'react'
import { Body } from './Components/Body'
import { Header } from './Components/Header';
import { Provider } from 'react-redux';
import { appStore } from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watch from './Components/Watch';

const App = () => {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<Watch/>
    }
    ]

  }])
  return (
    <div>
      {/* <Body/> */}
      <Provider store={appStore}>
      <Header/>
      <RouterProvider router={appRouter}/>
      {/* <Body/> */}
      </Provider>
    </div>
  )
}

export default App
import { Outlet } from "react-router-dom"
import NavBarComponent from "./NavBarComponent"
import { Provider } from "react-redux"
import store from "../store/store"

export default function RootLayout() {
  return (
    <>
    <Provider store={store}>
      <NavBarComponent />
      <main>
        <Outlet/>
      </main>
    </Provider>
    </>
  )
}

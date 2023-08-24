import { Outlet } from "react-router-dom"
import NavBarComponent from "./NavBarComponent"
export default function RootLayout() {
  return (
    <>
      <NavBarComponent />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

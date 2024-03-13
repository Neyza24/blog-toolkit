import { Link } from "react-router-dom"
import { NavBar } from "../components"


export const DashboardPage = () => {
  return (
    <section>
      <NavBar />
      <h1>Dashboard</h1>
      
      <p>This is the dashboard</p>

      <Link to="/posts" className="button">
        View Posts
      </Link>
    </section>
  )
}

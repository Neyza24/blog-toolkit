import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage, PostsPage } from "../blog/pages"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path="/*" element={<Navigate to='/'/>} />
        </Routes>
    )
}


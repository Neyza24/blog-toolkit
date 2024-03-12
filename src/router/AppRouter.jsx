import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage, PostsPage, SinglePostPage } from "../blog/pages"



export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/posts/:id' element={<SinglePostPage />} />
            <Route path="/*" element={<Navigate to='/'/>} />
        </Routes>
    )
}


import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "pages/Signup";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

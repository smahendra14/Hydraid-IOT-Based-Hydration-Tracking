import {useState} from 'react';
import HomePage from "./screens/HomePage/HomePage"
import SignInScreen from "./screens/SignInScreen/SignInScreen"
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword"
import Demographics from "./screens/Demographics/Demographics"

export default function App() {
    const [page, setPage] = useState("HomePage")
    return (
        page === "SignInScreen" ?
        <SignInScreen page={page} setPage={setPage}/> :
        page === "ForgotPassword" ?
        <ForgotPassword page={page} setPage={setPage}/>
        :
        page === "Demographics" ?
        <Demographics page={page} setPage={setPage}/> :
        <HomePage page={page} setPage={setPage}/>
    )
}
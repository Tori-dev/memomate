import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";
import "./HomePage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if(currentHour < 12) setGreetText("Good Morning!")
    else if(currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, [])

  return (
    <div className='app flex'>
      <Sidebar />
      <div className='app-main'>
        <header className='header w-100 flex align-center'>
          afa
        </header>
        <div className='notes-wrapper'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomePage

import "./App.css";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Navigator from "./components/Navigator";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.spotify.com/v1";

function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=0c51eb80114c41b1a37e0a02f3fc0362&client_secret=f856299b1d9d452ab30dca2ccaf8acb5",
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    console.log("Search for " + "Zenden Greenpurp");
    const searchQuery = "Zenden Greenpurp";

    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    await fetch(
      `${API_BASE_URL}/search?q=${searchQuery}&type=artist`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="text-white h-full background">
        <div id="wrapper" className="flex flex-col">
          <button onClick={search}>search</button>
          <Header />
          <Navigator />
          <Toolbar />
        </div>
      </div>
    </>
  );
}

export default App;

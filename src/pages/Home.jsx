import { useState, useEffect } from "react";

import TweetList from "../components/TweetList";

import TweetForm from "../components/TweetForm";
import { Link } from "react-router-dom";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = { id: Date.now(), text, likes: 0 };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Ir al inicio">
          <span className="brand__mark" aria-hidden="true">✦</span>
          <span>mi-twiter</span>
        </a>
        {user && (
          <div className="user-menu">
            <Link className="text-link" to="/profile">
              Perfil
            </Link>
            <span className="user-menu__name">{user.username}</span>
            <button className="button button--ghost" onClick={logout}>Cerrar sesión</button>
          </div>
        )}
      </header>

      <main className="page-content">
        <section className="page-intro">
          <span className="page-intro__eyebrow">Tu espacio social</span>
          <h1>Bienvenido a mi-twiter</h1>
          <p>Comparte ideas, descubre conversaciones y conecta con tu comunidad.</p>
        </section>
        <TweetForm onAddTweet={addTweet} />
        <TweetList tweets={tweets} onLike={likeTweet} />
      </main>
    </div>
  );

};

export default Home;
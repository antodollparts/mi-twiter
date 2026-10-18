import { useState } from "react";

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  const maxLength = 280;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onAddTweet(text.trim());
    setText("");
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <div className="tweet-form__header">
        <div>
          <span className="tweet-form__eyebrow">Comparte con tu comunidad</span>
          <h2>¿Qué estás pensando?</h2>
        </div>
        <span className="tweet-form__icon" aria-hidden="true">✦</span>
      </div>

      <label className="sr-only" htmlFor="tweet-text">
        Escribe tu tweet
      </label>
      <textarea
        id="tweet-text"
        className="tweet-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Cuéntale al mundo algo interesante..."
        maxLength={maxLength}
        rows={4}
      />

      <div className="tweet-form__footer">
        <span className="tweet-form__counter">
          {text.length}/{maxLength}
        </span>
        <button className="tweet-form__button" type="submit" disabled={!text.trim()}>
          Publicar tweet
        </button>
      </div>
    </form>
  );
};

export default TweetForm;
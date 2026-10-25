const Tweet = ({ tweet, onLike }) => {

  return (
    <article className="tweet">
      <div className="tweet__avatar" aria-hidden="true">✦</div>
      <div className="tweet__content">
        <div className="tweet__meta">
          <strong>Tu comunidad</strong>
          <span>· ahora</span>
        </div>
        <p>{tweet.text}</p>
        <button className="tweet__like" onClick={() => onLike(tweet.id)} aria-label={`Dar me gusta. ${tweet.likes} me gusta`}>
          <span aria-hidden="true">♡</span> {tweet.likes}
        </button>
      </div>
    </article>
  );

};

export default Tweet;
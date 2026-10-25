import Tweet from "./Tweet";

const TweetList = ({ tweets, onLike }) => {

    return (
      <section className="feed" aria-label="Tweets publicados">
        <div className="feed__header">
          <h2>Conversaciones recientes</h2>
          <span>{tweets.length} {tweets.length === 1 ? "publicación" : "publicaciones"}</span>
        </div>
        {tweets.length > 0 ? (
          <div className="feed__list">
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true">✦</span>
            <h3>Aún no hay publicaciones</h3>
            <p>Tu timeline está esperando la primera idea. ¡Comparte algo!</p>
          </div>
        )}
      </section>
    );
};

export default TweetList;
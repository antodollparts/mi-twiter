const Profile = ({ user }) => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Ir al inicio">
          <span className="brand__mark" aria-hidden="true">✦</span>
          <span>mi-twiter</span>
        </a>
        <a className="button button--ghost" href="/">Volver al inicio</a>
      </header>
      <main className="page-content">
        <section className="profile-card">
          <div className="profile-card__avatar" aria-hidden="true">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <span className="page-intro__eyebrow">Tu perfil</span>
          <h1>{user?.username}</h1>
          <p>Este es tu espacio en la comunidad de mi-twiter.</p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
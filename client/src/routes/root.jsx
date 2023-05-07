export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Artworks</h1>
          <div>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Artwork 1</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Artwork 2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
const Home = () => {
  return (
    <div className="app">
<header className="header">
  <h1>Supply Chain Developer Hub</h1>
  <nav className="menu">
    <a href="#">Project Directory</a>
    <a href="#">Custom Deliverables</a>
    <a href="#">Base Documentation</a>
  </nav>
</header>


<main className="main two-column">
  <aside className="comments">
    <h2>Live Comments</h2>
    <div className="comments-box">
      <p>No comments yet. Start the discussion below:</p>
      <textarea placeholder="Leave a comment..." rows="4"></textarea>
      <br />
      <button>Submit</button>
    </div>
  </aside>
  <section className="recent">
    <h2>Most Recent Resources</h2>
    <div className="recent-items-vertical">
      <div className="item">
        <h3>Latest Video</h3>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
<div className="item">
  <h3>Latest Document</h3>
  <img
    src="https://via.placeholder.com/200x250.png?text=Document+Preview"
    alt="Document preview"
    style={{ marginBottom: "0.5rem", borderRadius: "4px" }}
  />
  <a href="#">Download: WMS Design Spec.pdf</a>
</div>

    </div>
  </section>
</main>



      <footer className="footer">
        &copy; {new Date().getFullYear()} Blue Yonder WMS Developer Hub
      </footer>
    </div>
  );
};

export default Home;

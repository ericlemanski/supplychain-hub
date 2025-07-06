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


<main className="main three-column">
  {/* Column 1: Comments */}
  <aside className="comments">
    <h2>Live Comments</h2>
    <div className="comments-box">
      <p>No comments yet. Start the discussion below:</p>
      <textarea placeholder="Leave a comment..." rows="4"></textarea>
      <br />
      <button>Submit</button>
    </div>
  </aside>

  {/* Column 2: Welcome + video */}
  <section className="welcome">
    <h2>Welcome to the Developer Hub</h2>
    <p>
      Here you can find the latest onboarding videos and helpful project content.
    </p>
    <video width="300" controls style={{ marginTop: "1rem" }}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  {/* Column 3: Most recent upload */}
<section className="recent">
  <h2>Most Recent Upload</h2>
  <div className="recent-upload">
    <h3>Latest Upload Preview</h3>
    <video width="200" controls style={{ marginBottom: "0.5rem", borderRadius: "4px" }}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>
      <a href="#">Download: document.pdf</a>
    </p>
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

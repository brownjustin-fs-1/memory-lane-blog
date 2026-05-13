import { Link, Route, Routes, useParams } from "react-router-dom";

const posts = [
  {
    id: "learning-react",
    title: "Learning React One Step at a Time",
    date: "May 2026",
    summary:
      "React has helped me understand how modern websites are built with reusable pieces.",
    content:
      "Learning React has been one of the biggest steps in my web development journey. At first, components, props, and state felt confusing, but the more I practiced, the more the structure started to make sense. I like how React lets me break a website into smaller sections instead of trying to manage everything in one large file. This makes the code easier to read, easier to update, and easier to reuse later. Building projects with React has also helped me understand how real websites are organized behind the scenes.",
  },
  {
    id: "github-workflow",
    title: "Why GitHub Matters",
    date: "May 2026",
    summary:
      "GitHub is important because it keeps projects organized and makes code easier to manage.",
    content:
      "GitHub has become an important part of my workflow because it gives me a place to store, update, and track my code. Before using GitHub, it was easy to lose track of changes or worry about messing something up. Now I can commit changes as I work and keep a history of the project. GitHub also makes it easier to share my work with instructors, classmates, and future employers. For this project, GitHub is especially important because the site is deployed from the repository and the finished project can be reviewed online.",
  },
  {
    id: "career-change",
    title: "From Truck Driving to Web Development",
    date: "May 2026",
    summary:
      "My goal is to build a future in web development while learning one project at a time.",
    content:
      "My background is different from a lot of people entering web development. I have spent years working as a truck driver, which taught me discipline, patience, and the importance of staying focused. Now I am working toward a new career in web development. The transition is challenging, but every project helps me build confidence. I am learning how to solve problems, read documentation, and create websites that actually work. This Memory Lane project represents part of that journey because it shows what I have learned so far and where I am trying to go.",
  },
];

function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <header className="hero">
        <nav className="nav">
          <Link to="/" className="logo">
            Memory Lane
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Web Development Journal</p>
          <h1>Documenting my path through code, creativity, and growth.</h1>
          <p>
            This static blog shares a few short posts about what I have learned
            recently while studying web development.
          </p>
          <Link to="/posts" className="button">
            View Posts
          </Link>
        </section>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>Created by Justin Brown for the Memory Lane assignment.</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Posts</p>
          <h2>Recent Reflections</h2>
        </div>

        <div className="card-grid">
          {posts.map((post) => (
            <article className="card" key={post.id}>
              <p className="post-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link to={`/posts/${post.id}`} className="text-link">
                Read Post →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Posts() {
  return (
    <Layout>
      <section className="section narrow">
        <div className="section-heading">
          <p className="eyebrow">Archive</p>
          <h2>All Blog Posts</h2>
          <p>
            This page works as the archive for every post included in the site.
          </p>
        </div>

        <div className="post-list">
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} className="post-row" key={post.id}>
              <div>
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <span>Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function PostDetail() {
  const { postId } = useParams();
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return (
      <Layout>
        <section className="section narrow">
          <h2>Post Not Found</h2>
          <p>The post you are looking for does not exist.</p>
          <Link to="/posts" className="button">
            Back to Posts
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="section narrow article">
        <p className="post-date">{post.date}</p>
        <h2>{post.title}</h2>
        <p>{post.content}</p>

        <div className="article-actions">
          <Link to="/posts" className="button secondary">
            Back to All Posts
          </Link>
          <Link to="/" className="button">
            Home
          </Link>
        </div>
      </article>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <section className="section narrow">
        <div className="section-heading">
          <p className="eyebrow">About This Site</p>
          <h2>A simple static blog project</h2>
        </div>

        <p>
          Memory Lane is a small static website created with React, React Router,
          and custom CSS. The goal of this project is to show a working blog or
          journal layout with multiple posts, navigation, individual post pages,
          and a live deployment.
        </p>

        <p>
          This project helped me practice building reusable page layouts,
          organizing content, writing my own styles, and preparing a project for
          GitHub and deployment.
        </p>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
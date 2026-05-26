import { Link, Route, Routes, useParams } from "react-router-dom";

const posts = [
  {
    id: "authentication-flow",
    title: "Understanding Authentication Flow",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    summary:
      "Authentication flow explains how an application checks who a user is before allowing access to protected features.",
    content:
      "Authentication flow is the process an application uses to confirm a user's identity and decide what that user is allowed to access. A basic example starts when a user creates an account or logs in with a username and password. The server receives that information, checks it against the database, and then responds based on whether the login details are correct. If the login is successful, the application may create a token or session that proves the user is authenticated. This token can then be sent with future requests so the user does not have to log in again every time they click a new page. Authentication is important because many applications need to protect private information and limit access to certain features. For example, a user should only be able to edit their own account, view their own data, or access pages that require a login. A good authentication flow also protects passwords by never storing them as plain text. Instead, passwords should be hashed before being saved. Learning about authentication flow helps me understand how frontend forms, backend routes, databases, and security practices all connect together in a real application.",
  },
  {
    id: "deploying-movieshelf",
    title: "Building and Deploying My MovieShelf MERN App",
    date: "May 2026",
    image: "/movieshelf-screenshot.png",
    summary:
      "MovieShelf helped me understand how React, Express, MongoDB, Render, and Vercel work together in a full-stack project.",
    content:
      "One recent project I completed was MovieShelf, a MERN CRUD application that allows users to create, read, update, and delete movie entries. The frontend was built with React and Vite, while the backend used Node.js and Express. I also connected the application to MongoDB Atlas so the movie data would be stored in a real database instead of only existing in the browser. This helped me better understand how a frontend form can send information to an API, how the API can process that request, and how MongoDB stores the result. The deployment process taught me just as much as the coding process. I deployed the backend API to Render and the frontend to Vercel. During deployment, I had to troubleshoot environment variables, MongoDB network access, and CORS errors so the frontend and backend could communicate correctly. The biggest lesson I learned is that full-stack development is not only about writing code. It is also about connecting different services together and making sure each part of the application is configured properly. MovieShelf gave me more confidence working with React, APIs, databases, and live deployment workflows.",
  },
  {
    id: "learning-react",
    title: "Learning React One Step at a Time",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    summary:
      "React has helped me understand how modern websites are built with reusable pieces.",
    content:
      "Learning React has been one of the biggest steps in my web development journey. At first, components, props, and state felt confusing, but the more I practiced, the more the structure started to make sense. I like how React lets me break a website into smaller sections instead of trying to manage everything in one large file. This makes the code easier to read, easier to update, and easier to reuse later. Building projects with React has also helped me understand how real websites are organized behind the scenes.",
  },
  {
    id: "github-workflow",
    title: "Why GitHub Matters",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    summary:
      "GitHub is important because it keeps projects organized and makes code easier to manage.",
    content:
      "GitHub has become an important part of my workflow because it gives me a place to store, update, and track my code. Before using GitHub, it was easy to lose track of changes or worry about messing something up. Now I can commit changes as I work and keep a history of the project. GitHub also makes it easier to share my work with instructors, classmates, and future employers. For this project, GitHub is especially important because the site is deployed from the repository and the finished project can be reviewed online.",
  },
  {
    id: "career-change",
    title: "From Truck Driving to Web Development",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    summary:
      "My goal is to build a future in web development while learning one project at a time.",
    content:
      "My background is different from a lot of people entering web development. I have spent years working as a truck driver, which taught me discipline, patience, and the importance of staying focused. Now I am working toward a new career in web development. The transition is challenging, but every project helps me build confidence. I am learning how to solve problems, read documentation, and create websites that actually work. This Memory Lane project represents part of that journey because it shows what I have learned so far and where I am trying to go.",
  },
  {
    id: "react-api-best-practices",
    title: "Best Practices for Using APIs Within React",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    summary:
      "Using APIs in React is easier when the code is organized, secure, and built around clear user feedback.",
    content:
      "One important part of modern web development is learning how to work with APIs inside a React application. APIs allow a website to request outside data and display it in a useful way for the user. While working with React, I have learned that it is best to keep API code organized, avoid repeating the same request logic in multiple places, and make sure the user knows when data is loading or when something goes wrong. A good React app should not just fetch data; it should also handle loading states, errors, and empty results in a way that makes sense. Another best practice is protecting sensitive information. API keys should not be placed directly into public code, especially if the project is being pushed to GitHub. Using environment variables and a proper .gitignore file helps keep private information out of the repository. Overall, using APIs in React teaches important habits like planning, organization, debugging, and thinking about the user's experience.",
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
            This static blog shares short posts about what I have learned while
            studying web development.
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
              <img src={post.image} alt={post.title} className="card-image" />
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
              <img src={post.image} alt={post.title} className="row-image" />
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
        <img src={post.image} alt={post.title} className="article-image" />
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
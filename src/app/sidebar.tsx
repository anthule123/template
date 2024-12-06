import Link from "next/link";
import FusionCollection from "fusionable/FusionCollection";

function getPosts() {
  const collection = new FusionCollection()
    .loadFromDir("src/content/tutorials/root")
    .orderBy("date", "desc");
  return collection.getItemsArray();
}
export default function SideBar() {
  const posts = getPosts(); // Static generation by default
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Template roadmap</h2>
      </div>

      <nav className="sidebar__nav">
        <ul className="roadmap">
          <li className="roadmap__item roadmap__item--completed">
            <div className="roadmap__content">
              <span className="roadmap__icon">✓</span>
              <h2>Tutorials</h2>
              <ul>
                {posts.map((post) => (
                  <li key={post.fields.slug}>
                    <Link href={`/tutorials/${post.fields.slug}`}>
                      {post.fields.title}
                    </Link>
                    <p>{post.fields.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

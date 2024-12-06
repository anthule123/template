import Link from "next/link";
import FusionCollection from "fusionable/FusionCollection";
import fg from "fast-glob";

function getPosts() {
  // Get all markdown files including those in subdirectories
  const files = fg.sync("src/content/creations/**/*.md", { dot: true });
  console.log(files);
  const collection = new FusionCollection()
    .loadFromDir("src/content/creations", true)
    .orderBy("date", "desc");
  return collection.getItemsArray();
}
export default function SideBar() {
  const posts = getPosts(); // Static generation by default
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Creations</h2>
      </div>

      <nav className="sidebar__nav">
        <ul className="roadmap">
          <li className="roadmap__item roadmap__item--completed">
            <div className="roadmap__content">
              <span className="roadmap__icon">✓</span>
              <ul>
                {posts.map((post) => (
                  <p> {post.fields.slug[0]} </p>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

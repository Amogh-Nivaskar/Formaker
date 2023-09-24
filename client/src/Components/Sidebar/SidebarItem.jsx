import { Link } from "react-router-dom";

function SidebarItem({ type, content, icon, info, label, to }) {
  // types: title, info, setting, link

  if (type === "title") {
    return <div className="text-xl text-indigo-500 p-3">{content}</div>;
  }

  if (type === "info") {
    return (
      <div className="flex items-center p-3 justify-between ">
        <div className="flex">
          <span className="">{icon}</span>
          <span className="text-lg px-2 text-indigo-600">{label}</span>
        </div>
        <span className="px-2 text-white bg-indigo-500 rounded-3xl justify-self-end ">
          {info}
        </span>
      </div>
    );
  }

  if (type === "link") {
    return (
      <Link to={to}>
        <div className="flex p-3 hover:bg-indigo-300 hover:text-white rounded-md transition-all duration-300 ease-in-out">
          <span>{icon}</span>
          <span className="px-2 text-lg text-indigo-600">{label}</span>
        </div>
      </Link>
    );
  }
}

export default SidebarItem;

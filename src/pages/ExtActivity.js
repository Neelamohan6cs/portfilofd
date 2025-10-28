import "../styls/Ext.css";
import Leetcode from "../imge/leet.png";
import Github from "../imge/github.png";
import Linkedin from "../imge/in.png";

function ExtActivity() {
  const activities = [
    {
      img: Leetcode,
      title: "LeetCode Practice",
      desc: "I solve 1–2 coding problems daily to improve my problem-solving and algorithmic thinking.",
      link: "https://leetcode.com/",
      type: "main", // large full-width card
    },
    {
      img: Github,
      title: "GitHub Projects",
      desc: "I build full-stack MERN apps, share open-source projects, and continuously improve code quality.",
      link: "https://github.com/",
      type: "main",
    },
    {
      img: Linkedin,
      title: "LinkedIn Networking",
      desc: "I connect with developers, share my learning, and stay updated with the latest industry trends.",
      link: "https://linkedin.com/",
      type: "main",
    },
  ];

  return (
    <section className="ext-section">
      <h2 className="ext-title">External Activities</h2>

      <div className="ext-list">
        {activities.map((item, index) => (
          <div
            className={`ext-card ${item.type === "main" ? "ext-main" : "ext-small"}`}
            key={index}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img className="ext-img" src={item.img} alt={item.title} />
            </a>
            <div className="ext-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtActivity;

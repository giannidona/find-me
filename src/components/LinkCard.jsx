import data from "../data.json";
import youtubeLogo from "../assets/youtube.svg";
import twitchLogo from "../assets/twitch.svg";
import xLogo from "../assets/x.svg";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import linkLogo from "../assets/link.svg";

export default function LinkCard() {
  const icons = {
    YOUTUBE: youtubeLogo,
    TWITCH: twitchLogo,
    X: xLogo,
    LINKEDIN: linkedinLogo,
    GITHUB: githubLogo,
    PORTFOLIO: linkLogo,
    NEWSLETTER: linkLogo,
  };

  return (
    <>
      {data.map((card, index) => (
        <a
          target="_blank"
          className="block mx-2 my-3"
          href={card.link}
          key={index}
        >
          <div className="flex items-center bg-eGray h-14 rounded text-white font-semibold ease-in-out duration-300 hover:bg-eGray/40">
            <div className="ml-5">
              <img
                src={icons[card.platform]}
                alt={`${card.platform} logo`}
                className="w-5"
              />
            </div>
            <div className="flex-1 text-center">
              <p>{card.platform}</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

import thumbup from "../assets/Thumb-up.png";
import unlike from "../assets/Unlike.png";

function ContentHealth({ bookHealth }) {
  return (
    <>
      <p>
        <img className="content" src={bookHealth ? thumbup : unlike} alt={bookHealth ? "best seller" : "non bestseller"}/>
      </p>
    </>
  )
}

export default ContentHealth;
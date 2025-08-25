import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import optionA from "../assets/optionA.webp";
import optionB from "../assets/optionB.webp";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1>سلام!</h1>
        <p>
          توی این بخش بهتره توضیحات مربوط به سایت وجود داشته باشه یا یه راهنمایی و چیز های از این قبیل
        </p>
      </header>

      <section className="options-section">
        <div className="option-card" onClick={() => navigate("/upload/a")}>
          <img src={optionA} alt="Option A" />
          <h3>تحلیل نوع A</h3>
          <p>🤖توضیحات مربوط به نوع اول</p>
          <button>ورود به پردازش A</button>
        </div>

        <div className="option-card" onClick={() => navigate("/upload/b")}>
          <img src={optionB} alt="Option B" />
          <h3>تحلیل نوع B</h3>
          <p>😎توضیحات مربوط به نوع دوم</p>
          <button>ورود به پردازش B</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
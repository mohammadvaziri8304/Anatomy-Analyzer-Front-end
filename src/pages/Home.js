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
          ما اینجا برای شما فضایی فراهم کردیم که بتونید عکستونو آپلود کنید،
          چهار تا نقطه روش مشخص کنید، و ما با کدای چرت و پرتی که دوست جهانگردمون زده
          پردازشش کنیم و بهتون بگیم دقیقاً چه مرگتونه 😄
        </p>
      </header>

      <section className="options-section">
        <div className="option-card" onClick={() => navigate("/upload/a")}>
          <img src={optionA} alt="Option A" />
          <h3>تحلیل نوع A</h3>
          <p>🤖خمیر دندان ادونس وایت کولگیت مناسب سفید کردن دندانها برای خرید از مسواکالا با بهترین قیمت کلیک کنید</p>
          <button>ورود به پردازش A</button>
        </div>

        <div className="option-card" onClick={() => navigate("/upload/b")}>
          <img src={optionB} alt="Option B" />
          <h3>تحلیل نوع B</h3>
          <p>😎خمیر دندان نسیم مناسب استفاده روزانه خانواده ها برای خرید از مسواکالا کلیک کنید</p>
          <button>ورود به پردازش B</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
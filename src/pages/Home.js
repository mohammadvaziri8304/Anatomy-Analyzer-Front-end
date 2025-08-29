import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import optionA from "../assets/optionA.jpg";
import optionB from "../assets/optionB.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1>ارزیابی دقیق ناهنجاری های قامتی فقط با یک عکس، بدون اشعه و سریع و ایمن</h1>
        <p>
          این سایت برای شما امکان ارزیابی ناهنجاری های ستون فقرات را فراهم می‌سازد. با دو روش ارزیابی خودکار و سریع با هوش مصنوعی و روش تحلیل دقیق غیرخودکار با کمک کارشناس 
        </p>
      </header>

      <section className="options-section">
        <div className="option-card" onClick={() => navigate("/upload/a")}>
          <img src={optionA} alt="Option A" />
          <h3>تحلیل غیر خودکار</h3>
          <p>در این روش عکس فرد توسط کارشناس وارد نرم‌افزار می‌شود و نقاط کلیدی بدن به صورت دستی مشخص می‌گردد، سپس نرم‌افزار محاسبات زاویه‌ای را انجام داده و گزارش نهایی ارائه می‌شود</p>
          <button>ورود به پردازش غیر خودکار</button>
        </div>

        <div className="option-card" onClick={() => navigate("/upload/b")}>
          <img src={optionB} alt="Option B" />
          <h3>تحلیل خودکار</h3>
          <p>این روش سریع، هوشمند، بدون نیاز به اپراتور و مناسب غربالگری گروهی است. در این روش تنها کافی است یک عکس استاندارد از بدن خود بگیرید. نرم‌افزار به صورت خودکار نقاط کلیدی بدن را شناسایی کرده و زاویه ها و انحراف های ستون فقرات را محاسبه می‌کند</p>
          <button>ورود به پردازش خودکار</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
import { useEffect } from 'react'
import logo from './assets/72c2b448b96ddcc95a287061f77d06f530046401.png'
import aboutKoushan from './assets/aboutKoushan.png'
import qobaAlSa5raa from './assets/QobaAlSa5raa.jpg'
import alSahel from './assets/alSahel.jpg'
import alaswatAlshabiaa from './assets/alaswatAlshabiaa.jpg'
import mapImage from './assets/Map.png'
import al7erafAlyadawia from './assets/Al7erafAlyadawia.png'
import ka3k from './assets/Ka3k.jpg'
import whyKoushan from './assets/WhyKoushan.png'

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card-single");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 150);
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="كوشان" />
        </div>

        <nav className="nav-links">
          <a href="#" className="nav-link active">الرئيسية</a>
          <a href="#about" className="nav-link">عن التطبيق</a>
          <a href="#features" className="nav-link">مميزات التطبيق</a>
          <a href="#why-koushan" className="nav-link">لماذا كوشان؟</a>
        </nav>

        <div className="download">
          <a href="#download" className="download-btn">&#11123; تحميل التطبيق</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-quote">
            <span className="line-one">&#10078; جـسرٌ رقمـي يـربطـك بوطـنك </span>
            <span className="line-two">وتراثـك أينـما كـنت &#10077;</span>
          </p>
          <div className="section-divider">
            <span className="line"></span>
            <div className="divider-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
              </svg>
            </div>
            <span className="line"></span>
          </div>

          <p className="hero-description">
            كوشان هو تطبيق تفاعلي يتيح للمستخدمين استكشاف القرى الفلسطينية <br />
            من خلال تجربة رقمية حديثة. نسعى إلى تعزيز ارتباط الأجيال الفلسطينية <br />
            بهويتها وجذورها، أينما كانت حول العالم.
          </p>
        </div>
      </section>

      <div className="main-bg-wrapper">
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2 className="about-title">عن التطبيق</h2>
              <div className="section-divider">
                <span className="line"></span>
                <div className="divider-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                    <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                    <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                    <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                  </svg>
                </div>
                <span className="line"></span>
              </div>

              <div className="about-paragraphs">
                <p>
                  كوشان هو منصة رقمية تفاعلية تهدف إلى إحياء التراث الفلسطيني وتعزيز الارتباط<br />
                  بالجذور من خلال توظيف التكنولوجيا الحديثة في حفظ التاريخ والهوية الثقافية.<br />
                  نسعى إلى توفير تجربة ثرية تمكّن المستخدمين من استكشاف القرى الفلسطينية<br />
                  والتعرف على تاريخها ومعالمها وقصصها وتراثها الأصيل عبر خريطة تفاعلية<br />
                  ومحتوى موثوق وسهل الوصول.
                </p>
                <p>
                  كما نؤمن بأهمية نقل هذا الإرث الثقافي إلى الأجيال القادمة، خاصةً أبناء الجاليات<br />
                  الفلسطينية في مختلف أنحاء العالم.<br /> يعمل كوشان على بناء جسر يربط الماضي بالحاضر، ويحفظ ذاكرة المكان ويجعلها متاحة<br />
                  للجميع، ليبقى التراث الفلسطيني حيّاً ومتجدداً في وجدان أبنائه أينما كانوا.
                </p>
              </div>
            </div>

            <div className="about-image-wrapper">
              <img src={aboutKoushan} alt="كوشان" className="about-main-img" />
              <div className="overlay-frame overlay-dome">
                <img src={qobaAlSa5raa} alt="قبة الصخرة" className="overlay-img-inner" />
              </div>
              <div className="overlay-frame overlay-coast">
                <img src={alSahel} alt="الساحل" className="overlay-img-inner" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="features-container">
            <h2 className="features-title">مميزات التطبيق</h2>
            <div className="section-divider">
              <span className="line"></span>
              <div className="divider-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                  <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                  <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                  <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                </svg>
              </div>
              <span className="line"></span>
            </div>

            <div className="features-grid">
              <div className="feature-card-single">
                <div className="feature-card-image">
                  <img src={alaswatAlshabiaa} alt="الأصوات الشعبية" />
                </div>
                <div className="feature-card-content">
                  <h3>الأمثال الشعبية</h3>
                  <p>استكشف القرى الفلسطينية بسهولة من خلال خريطة تفاعلية ذكية.</p>
                </div>
              </div>

              <div className="feature-card-single">
                <div className="feature-card-image">
                  <img src={mapImage} alt="الخرائط التفاعلية" />
                </div>
                <div className="feature-card-content">
                  <h3>الخريطة التفاعلية</h3>
                  <p>استكشف القرى الفلسطينية بسهولة من خلال خريطة تفاعلية ذكية.</p>
                </div>
              </div>

              <div className="feature-card-single">
                <div className="feature-card-image">
                  <img src={al7erafAlyadawia} alt="التراث" />
                </div>
                <div className="feature-card-content">
                  <h3>الحرف اليدوية</h3>
                  <p>تعرف على الصناعات والحرف اليدوية التي تعكس الهوية الفلسطينية.</p>
                </div>
              </div>

              <div className="feature-card-single">
                <div className="feature-card-image">
                  <img src={ka3k} alt="المجتمع" />
                </div>
                <div className="feature-card-content">
                  <h3>الأكلات المشهورة</h3>
                  <p>استكشف القرى الفلسطينية بسهولة من خلال خريطة تفاعلية ذكية.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-koushan" className="why-koushan-container">
          <div className="header-wrapper">
            <h2 className="section-title">لماذا كوشان؟</h2>
            <div className="title-underline">
              <span className="line"></span>

              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                  <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                  <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                  <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                </svg>
              </span>

              <span className="line"></span>
            </div>

            <div className="content-wrapper">
              <div className="arch-image">
                <img src={whyKoushan} alt="Why Koushan" />
              </div>

              <div className="features-list">
                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    خريطة تفاعلية ذكية
                  </h3>
                  <p>استكشف القرى الفلسطينية بسهولة من خلال تجربة بصرية تفاعلية.</p>
                </div>

                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    توثيق التراث والمعالم
                  </h3>
                  <p>نحفظ المعلومات التاريخية والمعالم الثقافية من مصادر موثوقة.</p>
                </div>

                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    ربط المغتربين بجذورهم
                  </h3>
                  <p>تساعد الفلسطينيين حول العالم على البقاء على اتصال بهويتهم.</p>
                </div>

                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    نقل المعرفة للأجيال القادمة
                  </h3>
                  <p>نعزز الوعي بالتراث الفلسطيني ونحافظ على الذاكرة الجماعية.</p>
                </div>

                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    تجربة رقمية حديثة
                  </h3>
                  <p>تصميم سهل الاستخدام يجمع بين التكنولوجيا وأصالة التراث.</p>
                </div>
                <div className="feature-item">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                      <rect x="4" y="8" width="4" height="4" transform="rotate(45 6 10)" />
                      <rect x="16" y="8" width="4" height="4" transform="rotate(45 18 10)" />
                      <rect x="10" y="14" width="4" height="4" transform="rotate(45 12 16)" />
                    </svg>
                    محتوى غني وموثوق
                  </h3>
                  <p>
                    قصص، صور، معلومات، ومعالم في مكان واحد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <a href="#">سياسة الخصوصية</a>
          <a href="#">الشروط والأحكام</a>
        </div>

        <div className="footer-middle">
          <div className="footer-item">
            <div className="footer-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span>فلسطين</span>
          </div>

          <div className="footer-item">
            <div className="footer-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <span>970000000000+</span>
          </div>

          <div className="footer-item">
            <div className="footer-icon">
              <i className="fa-solid fa-at"></i>
            </div>
            <span>user1234567@gmail.com</span>
          </div>
        </div>

        <div className="footer-bottom">
          جميع الحقوق محفوظة © 2026 | فريق كوشان
        </div>
      </footer>
    </>
  )
}

export default App

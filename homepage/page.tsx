import React from "react";
import "../ui/homepage.css";

const RouteXCards = () => {
  return (
    <div className="cards-wrapper">
      {/* 1-ci kart — AI əsaslı ixtisas seçimi */}
      <div className="card">
        <img
          className="card-image"
          src="/sekil1.png"
          alt="/sekil2.png"
        />
        <div className="card-body">
          <h2 className="card-title">AI əsaslı ixtisas seçimi</h2>
          <p className="card-text">
            Akademik göstəricilərinə, maraqlarına və gələcək hədəflərinə uyğun
            olaraq sənə ən uyğun ixtisası AI köməyi ilə təklif edirik.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://chatgpt.com/"target="blank" className="card-button">Daxil ol</a>

        </div>
      </div>


      {/* 2-ci kart — ixtisas üçün roadmap */}
      <div className="card">
        <img
          className="card-image"
          src="/sekil2.png"
          alt="/sekil2.png"
        />
        <div className="card-body">
          <h2 className="card-title">İxtisas üçün Roadmap</h2>
          <p className="card-text">
            Seçdiyin ixtisas üçün addım-addım öyrənmə planı: fənlər, skill-lər,
            kurslar və tövsiyə olunan layihələr bir yerdə.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://chatgpt.com/" target="blank" className="card-button">Daxil ol</a>

        </div>
      </div>

    </div>
  );
};

export default RouteXCards;

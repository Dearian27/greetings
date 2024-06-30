import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import ReactConfetti from "react-confetti";

function App() {
  const [tip, setTip] = useState(false);
  const [tip2, setTip2] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const startPromise = async () => {
    try {
      setTimeout(() => {
        toast("Поки думає, йобну конфеті", { id: "122" });
        setConfetti(true);
      }, 2800);
      toast.custom(
        <span
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: 10,
            padding: "8px 12px",
            color: "#363636",
            gap: "5px",
          }}
        >
          Зара все буде{" "}
          <img
            style={{
              height: 40,
              borderRadius: 8,
            }}
            src="/loading.gif"
            alt=""
          />
        </span>,
        { id: "123", duration: 999999 }
      );
      setTimeout(() => {
        toast.success("Син божий", { id: "121", duration: 2500 });
      }, 9000);
      setTimeout(() => {
        toast.success("NotTryHard", { id: "120", duration: 2500 });
      }, 9500);
      setTimeout(() => {
        toast.success("Dearian", { id: "119", duration: 2000 });
      }, 10000);
      setTimeout(() => {
        toast.success("Чекаєш 5 вересня?", { id: "123", duration: 4000 });
      }, 12000);
    } catch (err) {
      toast.error("Що бля?", { id: "123" });
    }
  };

  return (
    <>
      <h1>Sirozhka</h1>
      <p style={{ alignSelf: "flex-start", textAlign: "start" }}>
        <code style={{ fontSize: 17 }}>
          <span style={{ color: "#545454" }}>
            {"//happy birthday alcotimer script"}
          </span>
          <br />
          {'setTimeout(() => supplyAlcoholInside("40%"), endOfTheDay)'}
        </code>
      </p>
      <div className="card">
        <div className="buttons">
          <a href="https://github.com/Dearian27/greetings">
            <button
              className="ghButton"
              onMouseOver={() => setTip(true)}
              onMouseOut={() => setTip(false)}
            >
              Gayhub
              <img
                className="icon"
                src="https://p7.hiclipart.com/preview/551/770/413/github-pages-logo-repository-fork-github-thumbnail.jpg"
                alt="github icon"
              />
              <div className={`tip ${tip ? "active" : ""}`}>йобаний пнг</div>
            </button>
          </a>
          <button onClick={() => startPromise()}>Отримати</button>
        </div>
      </div>
      <p
        className="read-the-docs"
        onMouseOver={() => setTip2(true)}
        onMouseOut={() => setTip2(false)}
      >
        {tip2
          ? "Infinity loading"
          : "Click on the Vite and React logos to more"}
      </p>
      {confetti && <ReactConfetti />}
      <Toaster reverseOrder={true} position="bottom-center" />
    </>
  );
}

export default App;

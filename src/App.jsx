import { useState } from "react";
import { DorsMain } from "./sections/DorsMain";
import "./App.css";

function App() {
  return (
    <div className="conteiner">
      <header className="header">
        <img src="/img/logo.jpg" alt="" />
        <ul>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Послуги</a>
          </li>
          <li>
            <a href="#">Гарантія</a>
          </li>
          <li>
            <a href="#">Корисне</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
        <div className="headerBut">
          <button>Увійти</button>
          <button>Зареєструватись</button>
        </div>
      </header>
      <main className="main">
        <aside className="aside">
          <h2>Пошук</h2>
          <form action="">
            <input type="text" placeholder="Введіть назву товара" /> <br />
            <label htmlFor="glass1">
              Зі склом
              <input name="glass" type="radio" />
            </label>
            <label htmlFor="glass2">
              Без скла
              <input name="glass" type="radio" />
            </label>{" "}
            <br />
            <label htmlFor="">
              Колір <br />
              <input name="color" list="mater" />
              <datalist id="mater">
                <option value="Горіх" />
                <option value="Венгі" />
                <option value="Дуб" />
                <option value="Махаон" />
                <option value="Чорні" />
              </datalist>
            </label>{" "}
            <br />
            <button>Пошук</button>
          </form>
        </aside>
      
        <DorsMain/>
        
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

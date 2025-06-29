import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Навигация */}
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLogo}>
          rush
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/rules">Правила</Link>
          </li>
          <li>
            <a href="#game">Об игре</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Rush</h1>
            <p className={styles.subtitle}>
              Простые правила, глубокая стратегия
            </p>

            <div className={styles.gameStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2–8</span>
                <span className={styles.statLabel}>игроков</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>лет</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15–60</span>
                <span className={styles.statLabel}>минут</span>
              </div>
            </div>

            <div className={styles.heroButtons}>
              <Link to="/rules" className="btn">
                Играть сейчас
              </Link>
              <button className="btn btn-secondary">Купить игру</button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section id="game" className={styles.gameSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Простые правила, глубокая стратегия</h2>
            <p className={styles.sectionDescription}>
              Rush — это игра на баланс, риск и точность. Стройте башню, не
              дайте ей упасть.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Цель игры</h3>
              <p>
                Построить башню из всех блоков и остаться последним игроком с
                жизнями. У каждого игрока есть 3 жизни — уронил башню, теряешь
                одну.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>🧱</div>
              <h3>Типы блоков</h3>
              <p>
                <strong>Базовый:</strong> Брось и поставь стороной, которая
                выпала
                <br />
                <strong>Бонусный:</strong> Брось и активируй эффект, если выпал
                бонус
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>⚡</div>
              <h3>Механика</h3>
              <p>
                Каждый ход — это испытание на точность. Один неверный шаг может
                обрушить всю башню и стоить вам жизни.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className={styles.modesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Режимы игры</h2>
            <p className={styles.sectionDescription}>
              Восемь уникальных режимов для разнообразной игры
            </p>
          </div>

          <div className={styles.modesGrid}>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>⭐️</span>
              <span className={styles.modeName}>Классика</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>🫱🏻</span>
              <span className={styles.modeName}>Правая рука</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>🫲🏻</span>
              <span className={styles.modeName}>Левая рука</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>🍄</span>
              <span className={styles.modeName}>Гриб</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>⚡️</span>
              <span className={styles.modeName}>Молния</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>🚀</span>
              <span className={styles.modeName}>Ракета</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>🗼</span>
              <span className={styles.modeName}>РУШ</span>
            </div>
            <div className={styles.modeCard}>
              <span className={styles.modeIcon}>👽</span>
              <span className={styles.modeName}>Инопланетяне</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Готов испытать свои навыки?</h2>
            <p>
              Изучи правила в интерактивном режиме и почувствуй механику игры
            </p>
            <Link to="/rules" className="btn">
              Попробуй интерактивные правила
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

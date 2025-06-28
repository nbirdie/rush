import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.gameIcon}>🎲</div>
            <h1 className={styles.title}>РУШ</h1>
            <p className={styles.subtitle}>Равновесие. Устойчивость. Шанс.</p>
            <div className={styles.gameInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Игроков:</span>
                <span className={styles.infoValue}>2–8</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Возраст:</span>
                <span className={styles.infoValue}>8+</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Время:</span>
                <span className={styles.infoValue}>15–60 мин</span>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <Link to="/rules" className="btn btn-gold">
                Попробуй сам
              </Link>
              <button className="btn">Купить игру</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className="wood-card fade-in-up">
              <h3>🎯 Цель игры</h3>
              <ul className={styles.goalList}>
                <li>Построить башню из всех блоков</li>
                <li>Остаться последним игроком с жизнями</li>
              </ul>
              <p className={styles.lifeInfo}>
                У каждого игрока есть 3 жизни. Уронил башню — теряешь 1 жизнь.
              </p>
            </div>

            <div className="wood-card fade-in-up">
              <h3>🧱 Типы блоков</h3>
              <div className={styles.blockTypes}>
                <div className={styles.blockType}>
                  <strong>Базовый:</strong> Брось и поставь стороной, которая
                  выпала
                </div>
                <div className={styles.blockType}>
                  <strong>Бонусный:</strong> Брось и активируй эффект, если
                  выпал бонус
                </div>
              </div>
            </div>

            <div className="wood-card fade-in-up">
              <h3>🌟 Режимы игры</h3>
              <div className={styles.gameModes}>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>⭐️</span>
                  <span>Классика</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>🫱🏻</span>
                  <span>Правая рука</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>🫲🏻</span>
                  <span>Левая рука</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>🍄</span>
                  <span>Гриб</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>⚡️</span>
                  <span>Молния</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>🚀</span>
                  <span>Ракета</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>🗼</span>
                  <span>РУШ</span>
                </div>
                <div className={styles.gameMode}>
                  <span className={styles.modeIcon}>👽</span>
                  <span>Инопланетяне</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Готов испытать свои навыки?</h2>
            <p>
              Изучи правила в интерактивном режиме и почувствуй механику игры
            </p>
            <Link to="/rules" className="btn btn-gold">
              Попробуй интерактивные правила
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

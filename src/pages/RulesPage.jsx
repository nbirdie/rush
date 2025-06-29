import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RulesPage.module.css';

const gameModes = {
  classic: {
    icon: '⭐️',
    name: 'Классика',
    description:
      'Можно играть двумя руками и придерживать башню во время хода. Главное, чтобы башня устояла, когда игрок отпустит руки.',
  },
  'right-hand': {
    icon: '🫱🏻',
    name: 'Правая рука',
    description:
      'Можно использовать только правую руку. Если в игре оба стартовых блока и на них режимы 🫱🏻 и 🫲🏻 — можно играть любой одной рукой на выбор.',
  },
  'left-hand': {
    icon: '🫲🏻',
    name: 'Левая рука',
    description:
      'Можно использовать только левую руку. Если в игре оба стартовых блока и на них режимы 🫱🏻 и 🫲🏻 — можно играть любой одной рукой на выбор.',
  },
  mushroom: {
    icon: '🍄',
    name: 'Гриб',
    description:
      'Появляется один общий бонусный блок для всех игроков. Каждый игрок бросает этот блок, проверяя бонус, а затем ставит блок из мешка любой стороной (без броска).',
  },
  lightning: {
    icon: '⚡️',
    name: 'Молния',
    description:
      'Игроки ставят таймер на 1 минуту. Время начинается с установки первого игрового блока. Проигрывает тот, на ком закончилось время, и теряет жизнь.',
  },
  rocket: {
    icon: '🚀',
    name: 'Ракета',
    description:
      'При выпадении бонуса 🗼 вторая башня ставится прямо сверху на первую. Выпадение ⭐️ не отменяет режим 🚀. Если падает башня из двух стартовых блоков, игрок теряет сразу 2 жизни.',
  },
  rush: {
    icon: '🗼',
    name: 'РУШ',
    description:
      'Игра начинается с двумя отдельными башнями. Игроки могут строить на любой башне. Падение одной башни забирает 1 жизнь, игра продолжается, пока стоит вторая башня.',
  },
  alien: {
    icon: '👽',
    name: 'Инопланетяне',
    description:
      'Бонусы активируются, только если блок уже установлен на башню. Просто бросить недостаточно, бонус заработает только после успешной установки блока.',
  },
};

const bonuses = {
  reverse: {
    icon: '🔄',
    name: 'Обратный ход',
    description: 'Направление меняется',
  },
  skip: {
    icon: '⏩️',
    name: 'Пропуск хода',
    description: 'Следующий игрок пропускает ход',
  },
  double: {
    icon: '♾️',
    name: 'Двойной блок',
    description:
      'Следующий игрок ставит бонусный блок и затем ещё один блок из мешка',
  },
  hold: {
    icon: '✖️',
    name: 'Пропуск с удержанием',
    description: 'Игрок пропускает ход, блок остаётся до следующего броска',
  },
  tower: {
    icon: '🗼',
    name: 'Башня',
    description:
      'Вводится вторая башня (Игрок бросает доп. стартовый блок), бонусный блок возвращается в мешок',
  },
};

const RulesPage = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedBonus, setSelectedBonus] = useState(null);

  const getBonusRules = (mode, bonus) => {
    if (!mode || !bonus) return null;

    const baseRules = {
      whoPlaces: '',
      whatHappens: '',
      whoGoesNext: '',
    };

    // Особые правила для режима Гриб
    if (mode === 'mushroom') {
      switch (bonus) {
        case 'reverse':
          return {
            whoPlaces: 'Игрок в другую сторону',
            whatHappens: 'Направление меняется',
            whoGoesNext: 'Следующий по новому направлению',
          };
        case 'skip':
          return {
            whoPlaces: 'Игрок через одного',
            whatHappens: 'Следующий игрок пропускает ход',
            whoGoesNext: 'Игрок, бросавший бонус',
          };
        case 'double':
          return {
            whoPlaces: 'Следующий игрок',
            whatHappens: 'Обязан поставить два блока без броска',
            whoGoesNext: 'Следующий игрок после него',
          };
        case 'hold':
          return {
            whoPlaces: 'Никто',
            whatHappens: 'Игрок пропускает ход и ничего не ставит',
            whoGoesNext: 'Следующий игрок по порядку',
          };
        case 'tower':
          return {
            whoPlaces: 'Никто',
            whatHappens:
              'Вводится вторая башня, бонусный блок возвращается в мешок',
            whoGoesNext: 'Следующий игрок по порядку',
          };
      }
    }

    // Особые правила для режима Инопланетянин
    if (mode === 'alien') {
      const alienNote = ' (только после установки блока на башню)';
      switch (bonus) {
        case 'reverse':
          return {
            whoPlaces: 'Игрок в другую сторону',
            whatHappens: 'Направление меняется' + alienNote,
            whoGoesNext: 'Следующий по новому направлению',
          };
        case 'skip':
          return {
            whoPlaces: 'Игрок через одного',
            whatHappens: 'Следующий игрок пропускает ход' + alienNote,
            whoGoesNext: 'Игрок, бросавший бонус',
          };
        case 'double':
          return {
            whoPlaces: 'Следующий игрок',
            whatHappens:
              'Ставит бонусный блок и затем ещё один блок из мешка' + alienNote,
            whoGoesNext: 'Следующий игрок после него',
          };
        case 'hold':
          return {
            whoPlaces: 'Никто',
            whatHappens:
              'Игрок пропускает ход, блок остаётся до следующего броска' +
              alienNote,
            whoGoesNext: 'Следующий игрок по порядку',
          };
        case 'tower':
          return {
            whoPlaces: 'Никто',
            whatHappens:
              'Вводится вторая башня, бонусный блок возвращается в мешок' +
              alienNote,
            whoGoesNext: 'Следующий игрок по порядку',
          };
      }
    }

    // Стандартные правила для режима Классика и других
    switch (bonus) {
      case 'reverse':
        return {
          whoPlaces: 'Игрок в другую сторону',
          whatHappens: 'Направление меняется',
          whoGoesNext: 'Следующий по новому направлению',
        };
      case 'skip':
        return {
          whoPlaces: 'Игрок через одного (следующий пропускается)',
          whatHappens: 'Следующий игрок пропускает ход',
          whoGoesNext: 'Игрок, бросавший бонус',
        };
      case 'double':
        return {
          whoPlaces: 'Следующий игрок',
          whatHappens: 'Ставит бонусный блок и затем ещё один блок из мешка',
          whoGoesNext: 'Следующий игрок после него',
        };
      case 'hold':
        return {
          whoPlaces: 'Никто',
          whatHappens:
            'Игрок пропускает ход, блок остаётся до следующего броска',
          whoGoesNext: 'Следующий игрок по порядку',
        };
      case 'tower':
        return {
          whoPlaces: 'Никто',
          whatHappens:
            'Вводится вторая башня (Игрок бросает доп. стартовый блок), бонусный блок возвращается в мешок',
          whoGoesNext: 'Следующий игрок по порядку',
        };
      default:
        return baseRules;
    }
  };

  return (
    <div className={styles.rulesPage}>
      {/* Навигация */}
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLogo}>
          rush
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/rules">Правила</Link>
          </li>
        </ul>
      </nav>

      <header className={styles.header}>
        <div className="container">
          <Link to="/" className={styles.backButton}>
            ← Назад
          </Link>
          <h1>Интерактивные правила Rush</h1>
          <p>Выбери режим и бонус, чтобы узнать, как играть</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.rulesGrid}>
            {/* Выбор режима */}
            <section className={styles.selectionSection}>
              <div className="card">
                <h2>1. Выбери режим игры</h2>
                <p className={styles.sectionDescription}>
                  Режим определяется первым броском основного стартового блока
                </p>

                <div className={styles.modeGrid}>
                  {Object.entries(gameModes).map(([key, mode]) => (
                    <button
                      key={key}
                      className={`${styles.modeButton} ${
                        selectedMode === key ? styles.selected : ''
                      }`}
                      onClick={() => setSelectedMode(key)}
                    >
                      <span className={styles.modeIcon}>{mode.icon}</span>
                      <span className={styles.modeName}>{mode.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Выбор бонуса */}
              <div className="card">
                <h2>2. Выбери бонусный блок</h2>
                <p className={styles.sectionDescription}>
                  Бонус определяется броском бонусного блока
                </p>

                <div className={styles.bonusGrid}>
                  {Object.entries(bonuses).map(([key, bonus]) => (
                    <button
                      key={key}
                      className={`${styles.bonusButton} ${
                        selectedBonus === key ? styles.selected : ''
                      }`}
                      onClick={() => setSelectedBonus(key)}
                      disabled={!selectedMode}
                    >
                      <span className={styles.bonusIcon}>{bonus.icon}</span>
                      <span className={styles.bonusName}>{bonus.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Описание правил */}
            <section className={styles.rulesSection}>
              <div className="card">
                <h2>Как играть</h2>

                {!selectedMode && (
                  <div className={styles.placeholder}>
                    <p>Сначала выберите режим игры</p>
                  </div>
                )}

                {selectedMode && !selectedBonus && (
                  <div className={styles.modeDescription}>
                    <div className={styles.selectedMode}>
                      <span className={styles.selectedIcon}>
                        {gameModes[selectedMode].icon}
                      </span>
                      <h3>{gameModes[selectedMode].name}</h3>
                    </div>
                    <p>{gameModes[selectedMode].description}</p>
                    <div className={styles.nextStep}>
                      <p>
                        Теперь выберите бонусный блок, чтобы узнать подробные
                        правила
                      </p>
                    </div>
                  </div>
                )}

                {selectedMode && selectedBonus && (
                  <div className={styles.fullRules}>
                    <div className={styles.selectedCombination}>
                      <div className={styles.selectedMode}>
                        <span className={styles.selectedIcon}>
                          {gameModes[selectedMode].icon}
                        </span>
                        <span>{gameModes[selectedMode].name}</span>
                      </div>
                      <span className={styles.plus}>+</span>
                      <div className={styles.selectedBonus}>
                        <span className={styles.selectedIcon}>
                          {bonuses[selectedBonus].icon}
                        </span>
                        <span>{bonuses[selectedBonus].name}</span>
                      </div>
                    </div>

                    <div className={styles.rulesTable}>
                      {(() => {
                        const rules = getBonusRules(
                          selectedMode,
                          selectedBonus
                        );
                        return (
                          <>
                            <div className={styles.ruleRow}>
                              <div className={styles.ruleLabel}>
                                Кто ставит блок?
                              </div>
                              <div className={styles.ruleValue}>
                                {rules.whoPlaces}
                              </div>
                            </div>
                            <div className={styles.ruleRow}>
                              <div className={styles.ruleLabel}>
                                Что происходит?
                              </div>
                              <div className={styles.ruleValue}>
                                {rules.whatHappens}
                              </div>
                            </div>
                            <div className={styles.ruleRow}>
                              <div className={styles.ruleLabel}>
                                Кто ходит дальше?
                              </div>
                              <div className={styles.ruleValue}>
                                {rules.whoGoesNext}
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    <div className={styles.modeReminder}>
                      <h4>Режим "{gameModes[selectedMode].name}":</h4>
                      <p>{gameModes[selectedMode].description}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RulesPage;

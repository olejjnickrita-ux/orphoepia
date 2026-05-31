const RAW_WORDS = [
  ['аэропОрты', 'имена существительные'], ['бАнты', 'имена существительные'], ['бОроду', 'имена существительные'], ['бухгАлтеров', 'имена существительные'], ['вероисповЕдание', 'имена существительные'], ['водопровОд', 'имена существительные'], ['газопровОд', 'имена существительные'], ['граждАнство', 'имена существительные'], ['дефИс', 'имена существительные'], ['дешевИзна', 'имена существительные'], ['диспансЕр', 'имена существительные'], ['договорЁнность', 'имена существительные'], ['докумЕнт', 'имена существительные'], ['досУг', 'имена существительные'], ['еретИк', 'имена существительные'], ['жалюзИ', 'имена существительные'], ['знАчимость', 'имена существительные'], ['Иксы', 'имена существительные'], ['каталОг', 'имена существительные'], ['квартАл', 'имена существительные'], ['киломЕтр', 'имена существительные'], ['кОнусов', 'имена существительные'], ['корЫсть', 'имена существительные'], ['крАны', 'имена существительные'], ['кремЕнь', 'имена существительные'], ['кремнЯ', 'имена существительные'], ['лЕкторов', 'имена существительные'], ['лОктя', 'имена существительные'], ['локтЕй', 'имена существительные'], ['лыжнЯ', 'имена существительные'], ['мЕстностей', 'имена существительные'], ['намЕрение', 'имена существительные'], ['нЕдруг', 'имена существительные'], ['недУг', 'имена существительные'], ['некролОг', 'имена существительные'], ['нЕнависть', 'имена существительные'], ['нефтепровОд', 'имена существительные'], ['новостЕй', 'имена существительные'], ['нОгтя', 'имена существительные'], ['ногтЕй', 'имена существительные'], ['Отзыв', 'имена существительные'], ['отзЫв', 'имена существительные'], ['Отрочество', 'имена существительные'], ['партЕр', 'имена существительные'], ['портфЕль', 'имена существительные'], ['придАное', 'имена существительные'], ['призЫв', 'имена существительные'], ['свЁкла', 'имена существительные'], ['сирОты', 'имена существительные'], ['созЫв', 'имена существительные'], ['сосредотОчение', 'имена существительные'], ['срЕдства', 'имена существительные'], ['стАтуя', 'имена существительные'], ['столЯр', 'имена существительные'], ['тамОжня', 'имена существительные'], ['тОрты', 'имена существительные'], ['тУфля', 'имена существительные'], ['цемЕнт', 'имена существительные'], ['цЕнтнер', 'имена существительные'], ['цепОчка', 'имена существительные'], ['шАрфы', 'имена существительные'], ['шофЁр', 'имена существительные'], ['экспЕрт', 'имена существительные'],

  // Имена прилагательные
  ['вернА', 'имена прилагательные'], ['знАчимый', 'имена прилагательные'], ['красИвее', 'имена прилагательные'], ['красИвейший', 'имена прилагательные'], ['кУхонный', 'имена прилагательные'], ['ловкА', 'имена прилагательные'], ['мозаИчный', 'имена прилагательные'], ['оптОвый', 'имена прилагательные'], ['прозорлИвый', 'имена прилагательные'], ['прозорлИва', 'имена прилагательные'], ['слИвовый', 'имена прилагательные'],

  // Глаголы
  ['бралА', 'глаголы'], ['бралАсь', 'глаголы'], ['взялА', 'глаголы'], ['взялАсь', 'глаголы'], ['влилАсь', 'глаголы'], ['ворвалАсь', 'глаголы'], ['воспринЯть', 'глаголы'], ['воспринялА', 'глаголы'], ['воссоздалА', 'глаголы'], ['вручИт', 'глаголы'], ['гналА', 'глаголы'], ['гналАсь', 'глаголы'], ['добралА', 'глаголы'], ['добралАсь', 'глаголы'], ['дождалАсь', 'глаголы'], ['дозвонИтся', 'глаголы'], ['дозИровать', 'глаголы'], ['ждалА', 'глаголы'], ['закУпорить', 'глаголы'], ['занЯть', 'глаголы'], ['зАнял', 'глаголы'], ['занялА', 'глаголы'], ['зАняли', 'глаголы'], ['заперлА', 'глаголы'], ['запломбировАть', 'глаголы'], ['защемИт', 'глаголы'], ['звалА', 'глаголы'], ['звонИт', 'глаголы'], ['кАшлянуть', 'глаголы'], ['клАла', 'глаголы'], ['клЕить', 'глаголы'], ['крАлась', 'глаголы'], ['кровоточИть', 'глаголы'], ['лгалА', 'глаголы'], ['лилА', 'глаголы'], ['лилАсь', 'глаголы'], ['наделИт', 'глаголы'], ['надорвалАсь', 'глаголы'], ['назвалАсь', 'глаголы'], ['накренИтся', 'глаголы'], ['налилА', 'глаголы'], ['нарвалА', 'глаголы'], ['начАть', 'глаголы'], ['нАчал', 'глаголы'], ['началА', 'глаголы'], ['нАчали', 'глаголы'], ['обзвонИт', 'глаголы'], ['облегчИть', 'глаголы'], ['облегчИт', 'глаголы'], ['облилАсь', 'глаголы'], ['обнялАсь', 'глаголы'], ['обогналА', 'глаголы'], ['ободралА', 'глаголы'], ['ободрИть', 'глаголы'], ['ободрИт', 'глаголы'], ['ободрИться', 'глаголы'], ['ободрИтся', 'глаголы'], ['обострИть', 'глаголы'], ['одолжИть', 'глаголы'], ['одолжИт', 'глаголы'], ['озлОбить', 'глаголы'], ['оклЕить', 'глаголы'], ['окружИт', 'глаголы'], ['опОшлить', 'глаголы'], ['освЕдомиться', 'глаголы'], ['освЕдомится', 'глаголы'], ['отбылА', 'глаголы'], ['отдалА', 'глаголы'], ['откУпорить', 'глаголы'], ['отозвалА', 'глаголы'], ['отозвалАсь', 'глаголы'], ['перезвонИт', 'глаголы'], ['перелилА', 'глаголы'], ['плодоносИть', 'глаголы'], ['пломбировАть', 'глаголы'], ['повторИт', 'глаголы'], ['позвалА', 'глаголы'], ['позвонИт', 'глаголы'], ['полилА', 'глаголы'], ['положИть', 'глаголы'], ['положИл', 'глаголы'], ['понЯть', 'глаголы'], ['понялА', 'глаголы'], ['послАла', 'глаголы'], ['прибЫть', 'глаголы'], ['прИбыл', 'глаголы'], ['прибылА', 'глаголы'], ['прИбыли', 'глаголы'], ['принЯть', 'глаголы'], ['прИнял', 'глаголы'], ['принялА', 'глаголы'], ['прИняли', 'глаголы'], ['рвалА', 'глаголы'], ['сверлИт', 'глаголы'], ['снялА', 'глаголы'], ['создалА', 'глаголы'], ['сорвалА', 'глаголы'], ['убралА', 'глаголы'], ['углубИть', 'глаголы'], ['укрепИт', 'глаголы'], ['чЕрпать', 'глаголы'], ['щемИт', 'глаголы'], ['щЁлкать', 'глаголы'],

  // Причастия и отглагольные прилагательные
  ['довезЁнный', 'причастия и отглагольные прилагательные'], ['зАгнутый', 'причастия и отглагольные прилагательные'], ['зАнятый', 'причастия и отглагольные прилагательные'], ['занятА', 'причастия и отглагольные прилагательные'], ['зАпертый', 'причастия и отглагольные прилагательные'], ['заселЁнный', 'причастия и отглагольные прилагательные'], ['заселенА', 'причастия и отглагольные прилагательные'], ['кровоточАщий', 'причастия и отглагольные прилагательные'], ['нажИвший', 'причастия и отглагольные прилагательные'], ['налИвший', 'причастия и отглагольные прилагательные'], ['нанЯвшийся', 'причастия и отглагольные прилагательные'], ['начАвший', 'причастия и отглагольные прилагательные'], ['нАчатый', 'причастия и отглагольные прилагательные'], ['низведЁнный', 'причастия и отглагольные прилагательные'], ['облегчЁнный', 'причастия и отглагольные прилагательные'], ['ободрЁнный', 'причастия и отглагольные прилагательные'], ['обострЁнный', 'причастия и отглагольные прилагательные'], ['отключЁнный', 'причастия и отглагольные прилагательные'], ['повторЁнный', 'причастия и отглагольные прилагательные'], ['поделЁнный', 'причастия и отглагольные прилагательные'], ['понЯвший', 'причастия и отглагольные прилагательные'], ['прИнятый', 'причастия и отглагольные прилагательные'], ['принятА', 'причастия и отглагольные прилагательные'], ['приручЁнный', 'причастия и отглагольные прилагательные'], ['прожИвший', 'причастия и отглагольные прилагательные'], ['снятА', 'причастия и отглагольные прилагательные'], ['сОгнутый', 'причастия и отглагольные прилагательные'], ['углублЁнный', 'причастия и отглагольные прилагательные'],

  // Деепричастия
  ['закУпорив', 'деепричастия'], ['начАв', 'деепричастия'], ['начАвшись', 'деепричастия'], ['отдАв', 'деепричастия'], ['понЯв', 'деепричастия'], ['прибЫв', 'деепричастия'], ['создАв', 'деепричастия'],

  // Наречия
  ['вОвремя', 'наречия'], ['дОверху', 'наречия'], ['дОнизу', 'наречия'], ['дОсуха', 'наречия'], ['зАсветло', 'наречия'], ['красИвее', 'наречия'], ['надОлго', 'наречия'], ['ненадОлго', 'наречия']
];

const VOWELS = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
const STORAGE_KEY = 'ege_orthoepy_progress_v1';
const WRONG_REPEAT_DISTANCE = 4;
const CORRECT_REPEAT_DISTANCE = 7;
const CONTROL_REPEAT_DISTANCE = 8;
const MAX_CORRECT_REPEATS_PER_SESSION = 1;
const MAX_WRONG_REPEATS_PER_SESSION = 3;
const MASTERY_STREAK = 3;

const state = {
  mode: 'all',
  category: 'все',
  queue: [],
  current: null,
  currentCard: null,
  locked: false,
  sessionMemory: {},
  totalInSession: 0,
  answered: 0,
  correct: 0,
  wrong: 0,
  progress: loadProgress()
};

const words = RAW_WORDS.map(([accented, category], index) => {
  const parsed = parseWord(accented);
  return {
    id: `${category}-${parsed.clean.toLowerCase()}-${index}`,
    accented,
    category,
    ...parsed
  };
});

const els = {
  sessionPercent: document.querySelector('#sessionPercent'),
  sessionBar: document.querySelector('#sessionBar'),
  answeredCount: document.querySelector('#answeredCount'),
  accuracyCount: document.querySelector('#accuracyCount'),
  masteredCount: document.querySelector('#masteredCount'),
  mistakeCount: document.querySelector('#mistakeCount'),
  allModeButton: document.querySelector('#allModeButton'),
  mistakesModeButton: document.querySelector('#mistakesModeButton'),
  categorySelect: document.querySelector('#categorySelect'),
  newSessionButton: document.querySelector('#newSessionButton'),
  resetProgressButton: document.querySelector('#resetProgressButton'),
  categoryLabel: document.querySelector('#categoryLabel'),
  queueCounter: document.querySelector('#queueCounter'),
  wordLetters: document.querySelector('#wordLetters'),
  nextButton: document.querySelector('#nextButton'),
  skipButton: document.querySelector('#skipButton'),
};

init();

function init() {
  fillCategories();
  bindEvents();
  startSession();
}

function parseWord(accented) {
  const chars = Array.from(accented);
  const cleanChars = chars.map((char) => char.toLowerCase());
  const stressIndex = chars.findIndex((char) => VOWELS.includes(char) && char === char.toUpperCase());

  return {
    clean: cleanChars.join(''),
    stressIndex
  };
}

function fillCategories() {
  const categories = ['все', ...new Set(words.map((word) => word.category))];
  els.categorySelect.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');
}

function bindEvents() {
  els.nextButton.addEventListener('click', nextWord);
  els.skipButton.addEventListener('click', skipWord);
  els.newSessionButton.addEventListener('click', startSession);
  els.resetProgressButton.addEventListener('click', resetProgress);

  els.allModeButton.addEventListener('click', () => {
    state.mode = 'all';
    els.allModeButton.classList.add('active');
    els.mistakesModeButton.classList.remove('active');
    startSession();
  });

  els.mistakesModeButton.addEventListener('click', () => {
    state.mode = 'mistakes';
    els.mistakesModeButton.classList.add('active');
    els.allModeButton.classList.remove('active');
    startSession();
  });

  els.categorySelect.addEventListener('change', (event) => {
    state.category = event.target.value;
    startSession();
  });
}

function startSession() {
  state.answered = 0;
  state.correct = 0;
  state.wrong = 0;
  state.locked = false;
  state.current = null;
  state.currentCard = null;
  state.sessionMemory = {};

  let pool = words.filter((word) => state.category === 'все' || word.category === state.category);

  if (state.mode === 'mistakes') {
    const mistakePool = pool.filter((word) => {
      const stat = state.progress[word.id];
      return stat && stat.wrong > 0 && stat.streak < MASTERY_STREAK;
    });
    pool = mistakePool.length > 0 ? mistakePool : pool;
  }

  state.queue = shuffle(pool.map((word) => ({ id: word.id, reason: 'новое слово' })));
  state.totalInSession = state.queue.length;
  nextWord();
  updateStats();
}

function nextWord() {
  if (state.queue.length === 0) {
    finishSession();
    return;
  }

  const next = state.queue.shift();
  state.currentCard = next;
  state.current = words.find((word) => word.id === next.id);
  state.locked = false;
  els.nextButton.disabled = true;
  renderWord();
  updateStats();
}

function renderWord() {
  if (!state.current) return;

  const reason = state.currentCard?.reason;
  els.categoryLabel.textContent = reason && reason !== 'новое слово'
    ? `${state.current.category} · повтор: ${reason}`
    : state.current.category;
  els.wordLetters.style.setProperty('--letter-count', String(Array.from(state.current.clean).length));

  els.wordLetters.innerHTML = Array.from(state.current.clean)
    .map((letter, index) => `
      <button
        class="word-char vowel-letter"
        data-index="${index}"
        type="button"
        aria-label="Поставить ударение на букву ${letter}"
      >${letter}</button>
    `)
    .join('');

  document.querySelectorAll('.vowel-letter').forEach((letterElement) => {
    letterElement.addEventListener('click', () => checkAnswer(Number(letterElement.dataset.index)));
  });
}

function checkAnswer(selectedIndex) {
  if (state.locked || !state.current) return;

  state.locked = true;
  state.answered += 1;

  const isCorrect = selectedIndex === state.current.stressIndex;
  const letterElements = document.querySelectorAll('.vowel-letter');
  const correctElement = document.querySelector(`.vowel-letter[data-index="${state.current.stressIndex}"]`);
  const selectedElement = document.querySelector(`.vowel-letter[data-index="${selectedIndex}"]`);

  letterElements.forEach((element) => element.classList.add('locked'));
  correctElement?.classList.add('correct');

  const updatedStat = updateWordStat(state.current.id, isCorrect);
  const scheduledReason = scheduleRepeatAfterAnswer(state.current.id, isCorrect, updatedStat);

  if (isCorrect) {
    state.correct += 1;
  } else {
    state.wrong += 1;
    selectedElement?.classList.add('wrong');
  }

  const repeatText = scheduledReason
    ? ` Слово вернётся: <b>${scheduledReason}</b>.`
    : '';
  els.nextButton.disabled = false;
  updateStats();
}

function skipWord() {
  if (!state.current || state.locked) return;
  checkAnswer(-1);
}

function getSessionMemory(wordId) {
  if (!state.sessionMemory[wordId]) {
    state.sessionMemory[wordId] = {
      attempts: 0,
      correctRepeats: 0,
      wrongRepeats: 0,
      controlRepeats: 0
    };
  }

  return state.sessionMemory[wordId];
}

function scheduleRepeatAfterAnswer(wordId, isCorrect, updatedStat) {
  const memory = getSessionMemory(wordId);
  memory.attempts += 1;
  const reason = state.currentCard?.reason || 'новое слово';

  if (!isCorrect) {
    if (memory.wrongRepeats >= MAX_WRONG_REPEATS_PER_SESSION) return '';
    memory.wrongRepeats += 1;
    addRepeat(wordId, WRONG_REPEAT_DISTANCE, 'ошибка');
    return 'ошибка';
  }

  if (reason === 'ошибка' && memory.controlRepeats < 1) {
    memory.controlRepeats += 1;
    addRepeat(wordId, CONTROL_REPEAT_DISTANCE, 'контроль');
    return 'контроль';
  }

  if (reason === 'новое слово' && updatedStat.streak < MASTERY_STREAK && memory.correctRepeats < MAX_CORRECT_REPEATS_PER_SESSION) {
    memory.correctRepeats += 1;
    addRepeat(wordId, CORRECT_REPEAT_DISTANCE, 'закрепление');
    return 'закрепление';
  }

  return '';
}

function addRepeat(wordId, distance, reason) {
  const repeatCard = { id: wordId, reason };
  const insertAt = Math.min(distance, state.queue.length);
  state.queue.splice(insertAt, 0, repeatCard);
  state.totalInSession += 1;
}

function updateWordStat(wordId, isCorrect) {
  const stat = state.progress[wordId] || { attempts: 0, correct: 0, wrong: 0, streak: 0 };

  stat.attempts += 1;
  if (isCorrect) {
    stat.correct += 1;
    stat.streak += 1;
  } else {
    stat.wrong += 1;
    stat.streak = 0;
  }

  stat.updatedAt = Date.now();
  state.progress[wordId] = stat;
  saveProgress();
  return stat;
}

function finishSession() {
  state.current = null;
  state.currentCard = null;
  state.locked = true;
  els.categoryLabel.textContent = 'сессия завершена';
  els.queueCounter.textContent = `${state.answered} / ${state.answered}`;
  els.wordLetters.innerHTML = '<div class="finish-title">Готово</div>';
  els.nextButton.disabled = true;
  updateStats();
}

function updateStats() {
  const totalSeen = state.answered + state.queue.length + (state.current && !state.locked ? 1 : 0);
  const total = Math.max(state.totalInSession, totalSeen, 1);
  const percent = Math.round((state.answered / total) * 100);
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  const mastered = words.filter((word) => (state.progress[word.id]?.streak || 0) >= MASTERY_STREAK).length;
  const totalMistakes = Object.values(state.progress).reduce((sum, item) => sum + (item.wrong || 0), 0);

  els.sessionPercent.textContent = `${percent}%`;
  els.sessionBar.style.width = `${Math.min(percent, 100)}%`;
  els.answeredCount.textContent = String(state.answered);
  els.accuracyCount.textContent = `${accuracy}%`;
  els.masteredCount.textContent = `${mastered}/${words.length}`;
  els.mistakeCount.textContent = String(totalMistakes);
  els.queueCounter.textContent = state.current ? `${state.answered + 1} / ${total}` : `${state.answered} / ${total}`;

}

function renderHardWords() {
  const hard = words
    .map((word) => ({ word, stat: state.progress[word.id] }))
    .filter((item) => item.stat && item.stat.wrong > 0)
    .sort((a, b) => b.stat.wrong - a.stat.wrong || a.stat.correct - b.stat.correct)
    .slice(0, 10);

  if (hard.length === 0) {
    els.hardWords.innerHTML = '<div class="empty">Ошибок пока нет.</div>';
    return;
  }

  els.hardWords.innerHTML = hard
    .map(({ word, stat }) => `
      <div class="hard-item">
        <div>
          <b>${formatAccentedWord(word)}</b><br />
          <span>${word.category}</span>
        </div>
        <span>${stat.wrong} ош.</span>
      </div>
    `)
    .join('');
}

function formatAccentedWord(word) {
  return Array.from(word.clean)
    .map((letter, index) => index === word.stressIndex ? `<span class="accented">${letter}</span>` : letter)
    .join('');
}

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function resetProgress() {
  const shouldReset = confirm('Сбросить всю статистику по словам?');
  if (!shouldReset) return;
  state.progress = {};
  saveProgress();
  startSession();
}

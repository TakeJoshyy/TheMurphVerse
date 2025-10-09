//MurphVerse 2025 Banes And Blessings Draft js
const blessings = [
  { id: 'bless1', title: 'MULLIGAN TOKEN', description: '"Retry the Battle" and continue the run ONCE during each format', label: 'Blessing' },
  { id: 'bless2', title: 'BATTLE PRO', description: 'You may equip any one non-consumable held item (Healing items not allowed). You must commit to the item you choose for the rest of the seed.', label: 'Blessing' },
  { id: 'bless3', title: 'SHOPAHOLIC', description: 'You may purchase one item from any shop once per seed.', label: 'Blessing' },
  { id: 'bless4', title: 'GIANT SLAYER', description: 'If your rivals ace is higher BST, you may purchase 1 healing item from the next accessible mart each time you defeat it', label: 'Blessing' },
  { id: 'bless5', title: 'ACE ', description: 'Beating a gym without taking damage allows you to purchase the smallest heal in that city.', label: 'Blessing' },
  { id: 'bless6', title: 'HADES TOKEN', description: '(Once per format) If you die outside of a gym you may continue the run only by going directly into the next gym and winning. You may only fight mandatories en route to the next gym.', label: 'Blessing' },
  { id: 'bless7', title: 'BST BOOSTER', description: 'Allows a raise in allowed BST Pokemon to 600 (Legends/mythics still banned for non-NATDEX formats.)', label: 'Blessing' },
  { id: 'bless8', title: 'DOUBLE DIP', description: '1 Non-Gym Dungeon re-entry per seed', label: 'Blessing' },
  { id: 'bless9', title: 'GOING ROGUE', description: 'Once per seed you may heal outside of battle (hp, status, pp)', label: 'Blessing' },
];

const banes = [
  { id: 'bane1', title: 'ROOKIE MISTAKE', description: 'On the first turn of combat against the FIRST trainer after the rival fight you must throw a ball.', label: 'Bane' },
  { id: 'bane2', title: 'VAMPYRIC TOUCH', description: 'If you pick up a HP healing non-consumable held item (leftovers, shell bell) you must discard one HP heal that heals less than 50% of your current max HP, if you have one.', label: 'Bane' },
  { id: 'bane3', title: 'NO GUARANTEES', description: 'Must have one non 100% accurate in your moveset at earliest availability (cant miss moves count as 100 percent accurate)', label: 'Bane' },
  { id: 'bane4', title: 'SIREN SONG', description: 'You cannot use items while an opponent has a water type pokemon on the field, you must attack', label: 'Bane' },
  { id: 'bane5', title: 'GYM FEES', description: 'Must drop one hp or status healing item each time you enter a gym (if you have one)', label: 'Bane' },
  { id: 'bane6', title: 'TRACKER LACKER', description: 'You must keep the tracker on an unhelpful page throughout Boss fights', label: 'Bane' },
  { id: 'bane7', title: 'DECAY', description: 'Must toss 1 HP heal after defeating each gym leader (if you have one).', label: 'Bane' },
  { id: 'bane8', title: 'IMPULSE ', description: 'Use rare candies, pp ups/maxes, TMs, and vitamins right away or toss (Murphmon exempt pre-pivot)', label: 'Bane' },
  { id: 'bane9', title: 'FRUIT ALLERGY', description: 'You may not HOLD any berries', label: 'Bane' },
];

const competitors = [
  { id: 'comp1', name: 'ROFLMAOGAMERS1' },
  { id: 'comp2', name: 'BENNYTOTS' },
  { id: 'comp3', name: 'CAPTDANIELDORE' },
  { id: 'comp4', name: 'REILNUR' },
  { id: 'comp5', name: 'BEMIDGEGAMING' },
  { id: 'comp6', name: 'SAMUWELL' },
  { id: 'comp7', name: 'BATCAM22' },
  { id: 'comp8', name: 'CEEDSY' },
];

// Function to generate card HTML
function createCard({ id, title, description, label }) {
  const isBane = id.startsWith('bane');
  return `
    <div class="card-container ${isBane ? 'bane-card' : ''}" draggable="true" data-id="${id}">
      <div class="inner-container">
        <div class="border-outer">
          <div class="main-card"></div>
        </div>
        <div class="glow-layer-1"></div>
        <div class="glow-layer-2"></div>
      </div>
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
      <div class="background-glow"></div>
      <div class="content-container">
        <div class="content-top">
          <div class="scrollbar-glass">${label}</div>
          <p class="title">${title}</p>
        </div>
        <hr class="divider" />
        <div class="content-bottom">
          <p class="description">${description}</p>
        </div>
      </div>
    </div>
  `;
}

const blessingsRow = document.getElementById('blessings-row');
const banesRow = document.getElementById('banes-row');

blessingsRow.innerHTML = blessings.map(createCard).join('');
banesRow.innerHTML = banes.map(createCard).join('');

// Populate competitor table
const tableBody = document.getElementById('competitor-table-body');
tableBody.innerHTML = competitors
  .map(
    (comp) => `
      <tr data-comp-id="${comp.id}">
        <td>${comp.name}</td>
        <td class="drop-zone" data-type="blessing"></td>
        <td class="drop-zone" data-type="bane"></td>
      </tr>
    `
  )
  .join('');

// Drag-and-drop functionality
let draggedCard = null;

// Enable scrolling during drag
document.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required for drop to work
});

// Explicitly allow wheel events to propagate during drag
document.addEventListener('wheel', (e) => {
  // Allow wheel scrolling even when dragging
}, { passive: true });

// Support touch scrolling
document.addEventListener('touchmove', (e) => {
  if (draggedCard) {
    // Allow touch scrolling
  }
}, { passive: true });

document.querySelectorAll('.card-container').forEach((card) => {
  card.addEventListener('dragstart', (e) => {
    draggedCard = card;
    e.dataTransfer.setData('text/plain', card.dataset.id);
    card.classList.add('dragging');

    // Scroll to the first competitor with an empty drop zone of the matching type
    const cardType = card.dataset.id.startsWith('bless') ? 'blessing' : 'bane';
    const rows = document.querySelectorAll('#competitor-table-body tr');
    for (const row of rows) {
      const dropZone = row.querySelector(`.drop-zone[data-type="${cardType}"]`);
      if (!dropZone.querySelector('.card-container')) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  });

  card.addEventListener('dragend', () => {
    draggedCard.classList.remove('dragging');
    draggedCard = null;
  });

  // Support touch events for mobile
  card.addEventListener('touchstart', (e) => {
    draggedCard = card;
    card.classList.add('dragging');

    // Scroll to the first competitor with an empty drop zone of the matching type
    const cardType = card.dataset.id.startsWith('bless') ? 'blessing' : 'bane';
    const rows = document.querySelectorAll('#competitor-table-body tr');
    for (const row of rows) {
      const dropZone = row.querySelector(`.drop-zone[data-type="${cardType}"]`);
      if (!dropZone.querySelector('.card-container')) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  });

  card.addEventListener('touchend', () => {
    if (draggedCard) {
      draggedCard.classList.remove('dragging');
      draggedCard = null;
    }
  });
});

document.querySelectorAll('.drop-zone').forEach((zone) => {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const cardId = e.dataTransfer.getData('text/plain');
    const card = document.querySelector(`[data-id="${cardId}"]`);
    if (!card) return;
    const cardType = cardId.startsWith('bless') ? 'blessing' : 'bane';

    if (zone.dataset.type !== cardType) return;

    const existingCard = zone.querySelector('.card-container');
    if (existingCard) {
      const existingCardId = existingCard.dataset.id;
      const originalRow = existingCardId.startsWith('bless') ? blessingsRow : banesRow;
      const cardData = (existingCardId.startsWith('bless') ? blessings : banes).find(item => item.id === existingCardId);
      if (cardData) {
        originalRow.insertAdjacentHTML('beforeend', createCard(cardData));
      }
    }

    card.remove();
    zone.innerHTML = createCard({
      id: cardId,
      title: card.querySelector('.title').textContent,
      description: card.querySelector('.description').textContent,
      label: card.querySelector('.scrollbar-glass').textContent,
    });
  });

  zone.addEventListener('touchend', (e) => {
    if (!draggedCard) return;
    e.preventDefault();
    const card = draggedCard;
    const cardId = card.dataset.id;
    const cardType = cardId.startsWith('bless') ? 'blessing' : 'bane';

    if (zone.dataset.type !== cardType) return;

    const existingCard = zone.querySelector('.card-container');
    if (existingCard) {
      const existingCardId = existingCard.dataset.id;
      const originalRow = existingCardId.startsWith('bless') ? blessingsRow : banesRow;
      const cardData = (existingCardId.startsWith('bless') ? blessings : banes).find(item => item.id === existingCardId);
      if (cardData) {
        originalRow.insertAdjacentHTML('beforeend', createCard(cardData));
      }
    }

    card.remove();
    zone.innerHTML = createCard({
      id: cardId,
      title: card.querySelector('.title').textContent,
      description: card.querySelector('.description').textContent,
      label: card.querySelector('.scrollbar-glass').textContent,
    });

    draggedCard.classList.remove('dragging');
    draggedCard = null;
  });
});

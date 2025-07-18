// @ts-check
/** @type{import('../../../src/assets/data/interfaces').TranslationDict} */
export default {
  RARITY_NORMAL: 'Обычный',
  RARITY_MAGIC: 'Волшебный',
  RARITY_RARE: 'Редкий',
  RARITY_UNIQUE: 'Уникальный',
  RARITY_GEM: 'Камень',
  RARITY_CURRENCY: 'Валюта',
  RARITY_DIVCARD: 'Гадальная карта',
  RARITY_QUEST: 'Задание',
  MAP_TIER: 'Уровень карты: ',
  RARITY: 'Редкость: ',
  ITEM_CLASS: 'Класс предмета: ',
  ITEM_LEVEL: 'Уровень предмета: ',
  CORPSE_LEVEL: 'Уровень трупа: ',
  TALISMAN_TIER: 'Уровень талисмана: ',
  GEM_LEVEL: 'Уровень: ',
  STACK_SIZE: 'Размер стопки: ',
  SOCKETS: 'Гнезда: ',
  QUALITY: 'Качество: ',
  PHYSICAL_DAMAGE: 'Физический урон: ',
  ELEMENTAL_DAMAGE: 'Урон от стихий: ',
  CRIT_CHANCE: 'Шанс критического удара: ',
  ATTACK_SPEED: 'Атак в секунду: ',
  ARMOUR: 'Броня: ',
  EVASION: 'Уклонение: ',
  ENERGY_SHIELD: 'Энерг. щит: ',
  TAG_WARD: 'Барьер: ',
  BLOCK_CHANCE: 'Шанс заблокировать удар: ',
  CORRUPTED: 'Осквернено',
  UNIDENTIFIED: 'Неопознано',
  ITEM_SUPERIOR: /^(.*) высокого качества$/,
  MAP_BLIGHTED: /^Заражённая (.*)$/,
  MAP_BLIGHT_RAVAGED: /^Разорённая Скверной (.*)$/,
  INFLUENCE_SHAPER: 'Предмет Создателя',
  INFLUENCE_ELDER: 'Древний предмет',
  INFLUENCE_CRUSADER: 'Предмет Крестоносца',
  INFLUENCE_HUNTER: 'Предмет Охотника',
  INFLUENCE_REDEEMER: 'Предмет Избавительницы',
  INFLUENCE_WARLORD: 'Предмет Вождя',
  SECTION_SYNTHESISED: 'Синтезированный предмет',
  ITEM_SYNTHESISED: /^(?:Синтезированный|Синтезированная|Синтезированное|Синтезированные) (.*?)\u00a0*$/,
  VEILED_PREFIX: 'Завуалированный префикс',
  VEILED_SUFFIX: 'Завуалированный суффикс',
  FLASK_CHARGES: /^Содержит зарядов: \d+$/,
  METAMORPH_HELP: 'Объедините эту часть с четырьмя другими в Лаборатории Танэ.',
  BEAST_HELP: 'Нажмите ПКМ, чтобы добавить это в ваш Бестиарий.',
  VOIDSTONE_HELP: 'Поместите этот предмет в ваш Атлас, чтобы повысить уровень всех карт.',
  METAMORPH_BRAIN: /^Мозг: .*$/,
  METAMORPH_EYE: /^Глаз: .*$/,
  METAMORPH_LUNG: /^Лёгкое: .*$/,
  METAMORPH_HEART: /^Сердце: .*$/,
  METAMORPH_LIVER: /^Печень: .*$/,
  CANNOT_USE_ITEM: 'Вы не можете использовать этот предмет, его параметры не будут учтены',
  QUALITY_ANOMALOUS: /^Аномальный: (.*)$/,
  QUALITY_DIVERGENT: /^Искривлённый: (.*)$/,
  QUALITY_PHANTASMAL: /^Фантомный: (.*)$/,
  AREA_LEVEL: 'Уровень области: ',
  HEIST_WINGS_REVEALED: 'Крыльев обнаружено: ',
  HEIST_TARGET: 'Предмет кражи: ',
  HEIST_BLUEPRINT_ENCHANTS: 'Зачарованное вооружение',
  HEIST_BLUEPRINT_TRINKETS: 'Воровские украшения или валюта',
  HEIST_BLUEPRINT_GEMS: 'Необычные камни',
  HEIST_BLUEPRINT_REPLICAS: 'Копии или экспериментальные предметы',
  MIRRORED: 'Отражено',
  MODIFIER_LINE: /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s+\(Уровень: (?<tier>\d+)\))?(?:\s+\(Ранг: (?<rank>\d+)\))?$/,
  PREFIX_MODIFIER: 'Префикс',
  SUFFIX_MODIFIER: 'Суффикс',
  CRAFTED_PREFIX: 'Мастерский префикс',
  CRAFTED_SUFFIX: 'Мастерский суффикс',
  UNSCALABLE_VALUE: ' — Неизменяемое значение',
  CORRUPTED_IMPLICIT: 'Осквернённое собственное свойство',
  MODIFIER_INCREASED: /^(.+?)% увеличение$/,
  INCURSION_OPEN: 'Открытые комнаты:',
  INCURSION_OBSTRUCTED: 'Отделённые комнаты:',
  EATER_IMPLICIT: /^Собственное свойство Пожирателя миров \((?<rank>.+)\)$/,
  EXARCH_IMPLICIT: /^Собственное свойство Пламенного экзарха \((?<rank>.+)\)$/,
  ELDRITCH_MOD_R1: 'Мелкий',
  ELDRITCH_MOD_R2: 'Крупный',
  ELDRITCH_MOD_R3: 'Великий',
  ELDRITCH_MOD_R4: 'Превосходный',
  ELDRITCH_MOD_R5: 'Первоклассный',
  ELDRITCH_MOD_R6: 'Безупречный',
  SENTINEL_CHARGE: 'Заряд: ',
  MEMORY_STRANDS: 'Пряди воспоминаний: ',
  SHAPER_MODS: [
    'изменения',
    'Созданный', 'Созданная', 'Созданное', 'Созданные', 'Созданные', 'Созданные'
  ],
  ELDER_MODS: [
    'Древнего',
    'Древний', 'Древняя', 'Древнее', 'Древние', 'Древние', 'Древние'
  ],
  CRUSADER_MODS: [
    'Крестовый', 'Крестовая', 'Крестовое', 'Крестовые', 'Крестовые', 'Крестовые',
    'крестоносца'
  ],
  HUNTER_MODS: [
    'Охотничий', 'Охотничья', 'Охотничье', 'Охотничьи', 'Охотничьи', 'Охотничьи',
    'охоты'
  ],
  REDEEMER_MODS: [
    'искупления',
    'Освободительный', 'Освободительная', 'Освободительное', 'Освободительные', 'Освободительные', 'Освободительные'
  ],
  WARLORD_MODS: [
    'Главный', 'Главная', 'Главное', 'Главные', 'Главные', 'Главные',
    'Военный', 'Военная', 'Военное', 'Военные', 'Военные', 'Военные',
    'завоевания'
  ],
  DELVE_MODS: [
    'Подземный', 'Подземная', 'Подземное', 'Подземные', 'Подземные', 'Подземные',
    'подземелья'
  ],
  VEILED_MODS: [
    'Избранный', 'Избранная', 'Избранное', 'Избранные', 'Избранные', 'Избранные',
    'Ордена',
    'Избранный', 'Избранная', 'Избранное', 'Избранные', 'Избранные'
  ],
  INCURSION_MODS: [
    'Церемониальный', 'Церемониальная', 'Церемониальное', 'Церемониальные', 'Церемониальные', 'Церемониальные',
    'Духовный', 'Духовная', 'Духовное', 'Духовные', 'Духовные', 'Духовные',
    'Буревой', 'Буревая', 'Буревое', 'Буревые', 'Буревые', 'Буревые',
    'Токсичный', 'Токсичная', 'Токсичное', 'Токсичные', 'Токсичные', 'Токсичные',
    'Прозрачный', 'Прозрачная', 'Прозрачное', 'Прозрачные', 'Прозрачные', 'Прозрачные',
    'Плодовитый', 'Плодовитая', 'Плодовитое', 'Плодовитые', 'Плодовитые', 'Плодовитые',
    'Ситаквалотля', 'Мататля', 'Такати', 'Гвателитзи', 'Пухварте'
  ],
  FOIL_UNIQUE: 'Особый уникальный предмет',
  UNMODIFIABLE: 'Неизменяемый',
  // ---
  CHAT_SYSTEM: /^: (?<body>.+)$/,
  CHAT_TRADE: /^\$(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GLOBAL: /^#(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_PARTY: /^%(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GUILD: /^&(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_TO: /^@Кому (?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_FROM: /^@От кого (?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WEBTRADE_GEM: /^уровень (?<gem_lvl>\d+) (?<gem_qual>\d+)% (?<gem_name>.+)$/
}

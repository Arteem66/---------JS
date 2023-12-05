'use strict'

// Функция, которая возвращает случайный элемент из полученного массива
function random(array) {
	let randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

// Элементы, с которыми будем взаимодействовать
let emojiContainer = document.getElementById('emojiContainer')
let titleContainer = document.getElementById('title')

// Функция, которая взаимодействует с ДОМ — добавляет эмоджи на страницу
function displayEmoji(emoji) {
	let emojiSpan = document.createElement('span')
	emojiSpan.classList.add('emoji')
	emojiSpan.innerText = emoji
	emojiContainer.appendChild(emojiSpan)
}

// Функция, которая взаимодействует с ДОМ — для отображения заголовка
function displayTitle(title) {
	titleContainer.innerText = title
}

function displayImage(image) {
	let elem = document.getElementById('main')
	elem.setAttribute(
		'style',
		`background: url(${image}); background-position: center; background-size: cover`
	)
}

const emojis = [
	'👩‍❤️‍💋‍👨',
	'🐶',
	'👑',
	'❄️',
	'🏆',
	'✈️',
	'📸',
	'🛌',
	'🎁',
	'☕️',
	'🐈',
	'💍',
	'💸',
	'🍀',
	'💃',
]

const img = [
	'https://proprikol.ru/wp-content/uploads/2019/11/krasivye-novogodnie-fotografii-63.jpg',
	'https://funik.ru/wp-content/uploads/2018/12/c931c91d7a65b8bc0250.jpg',
	'https://pichold.ru/wp-content/uploads/2018/11/Holidays_Christmas_360333.jpg',
	'https://pro-dachnikov.com/uploads/posts/2023-01/1673078609_pro-dachnikov-com-p-novii-god-kamin-yelka-foto-57.jpg',
]

const titles = [
	'С Новым годом! Пусть этот год подарит массу возможностей и красивых идей, счастливых случаев и добрых мгновений.',

	'С Новым годом. Пусть всё, о чём мечтаешь, исполнится, а год принесет приятные сюрпризы, душевное спокойствие, стабильность, верность, удачу, счастье и успех.',

	'С Новым годом, с новой историей! Пусть впереди ждёт счастье и большой успех. Желаю зимней сказки и удачного года. Желаю здоровья, добра и чудес!',

	'С Новым годом! Пусть за окном будет сказка, а в доме — атмосфера счастья. Желаю чудесного года только с хорошими событиями и добрыми людьми!',

	'С Новым годом! Желаю целый год находиться в круговороте счастья, любви, успеха и радости. Пусть чудеса случаются, а мечты всегда сбываются!',

	'С Новым годом! Желаю добра, тепла, уюта, счастья и удачи. Желаю приятных новогодних подарков и весёлых новогодних приключений. Желаю здоровья и сил на весь предстоящий год.',

	'С Новым годом. Пусть ароматная ель, сладкие мандарины, домашний уют и близкие люди подарят тебе настоящее счастье! Желаю волшебства и удачи. Желаю доброго года и многих побед в нём.',

	'С Новым годом! Пусть этот год станет годом роста, все плохое забудется, и сбудутся все ваши желания. Сделайте свою жизнь мечтой, а свою мечту — реальностью. Удачного вам года.',

	'С Новым годом! Пусть впереди ждёт много радостных моментов, плодотворных дней, гениальных идей, значительных успехов, приятных встреч и добрых сюрпризов. Желаю здоровья и любви!',

	'С наступающим Новым годом! Желаю, чтобы этот год стал временем только хороших новостей, отменного богатырского здоровья и безграничного счастья',

	'С Новым годом! Пусть случится все хорошее, пусть рядом будут все любимые, пусть в твои двери постучится удача и большая радость. Желаю чудес и счастья в новом году!',
]

let randomImage = random(img)
displayImage(randomImage)

let randomEmoji = random(emojis)
displayEmoji(randomEmoji)

let randomTitle = random(titles)
displayTitle(randomTitle)

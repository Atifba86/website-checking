document.addEventListener('mousemove', (e) => {
	const cursor = document.querySelector('.cursor');
	cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.getElementById('view-btn').addEventListener('click', () => {
	const details = document.querySelector('.details');
	details.style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', () => {
	const details = document.querySelector('.details');
	details.style.display = 'none';
});


























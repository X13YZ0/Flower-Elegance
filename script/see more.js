    const flowerNote = document.querySelector('.flower-note');
    const seeMore = document.querySelector('.see-more');

    seeMore.addEventListener('click', function () {
        if (flowerNote.classList.contains('expanded')) {
            flowerNote.classList.remove('expanded');
            flowerNote.style.maxHeight = '60px'; // คืนค่าสูงสุดให้เหมือนเดิม
            seeMore.textContent = 'See More';
        } else {
            flowerNote.classList.add('expanded');
            flowerNote.style.maxHeight = '100%'; // คืนค่าสูงสุดเพื่อแสดงข้อความทั้งหมด
            seeMore.textContent = 'See Less';
        }
    });

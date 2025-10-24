document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-description');
    const modalStory = document.getElementById('modal-story');
    const modalClose = document.getElementById('modal-close');
    const modalAudio = document.getElementById('modal-audio');

    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('click', function () {
            modalTitle.textContent = card.getAttribute('data-title');
            modalImg.src = card.getAttribute('data-img');
            modalImg.alt = card.getAttribute('data-title');
            modalDesc.textContent = card.getAttribute('data-description');
            modalStory.textContent = card.getAttribute('data-story') ? "Story: " + card.getAttribute('data-story') : "";
            const audioSrc = card.getAttribute('data-audio');
            if (audioSrc) {
                modalAudio.src = audioSrc;
                modalAudio.load();
                modalAudio.play().catch(() => {
                    // Optionally handle play errors here
                });
                modalAudio.style.display = 'block';
            } else {
                modalAudio.pause();
                modalAudio.src = '';
                modalAudio.style.display = 'none';
            }
            modal.classList.add('open');
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        modalAudio.pause();
        modalAudio.currentTime = 0;
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Tab switching logic
    const tabTimeline = document.getElementById('tab-timeline');
    const tabCopyright = document.getElementById('tab-copyright');
    const timelineSection = document.getElementById('timeline-section');
    const copyrightSection = document.getElementById('copyright-section');

    tabTimeline.addEventListener('click', function () {
        tabTimeline.classList.add('active');
        tabCopyright.classList.remove('active');
        timelineSection.style.display = '';
        copyrightSection.style.display = 'none';
    });

    tabCopyright.addEventListener('click', function () {
        tabCopyright.classList.add('active');
        tabTimeline.classList.remove('active');
        timelineSection.style.display = 'none';
        copyrightSection.style.display = '';
    });
});
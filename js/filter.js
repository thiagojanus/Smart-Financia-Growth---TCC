const cards = document.querySelectorAll('.card');
    const allBtn = document.getElementById('allBtn');
    const ebookBtn = document.getElementById('ebookBtn');
    const videoBtn = document.getElementById('videoBtn');
    const podcastBtn = document.getElementById('podcastBtn');

    function filterContent(type) {
      cards.forEach(card => {
        if (card.dataset.type === type || type === 'all') {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });

      // Remover a classe 'active' de todos os botões
      document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
      });

      // Adicionar a classe 'active' ao botão clicado
      if (type === 'all') {
        allBtn.classList.add('active');
      } else if (type === 'ebook') {
        ebookBtn.classList.add('active');
      } else if (type === 'video') {
        videoBtn.classList.add('active');
      } else if (type === 'podcast') {
        podcastBtn.classList.add('active');
      }
    }

    allBtn.addEventListener('click', () => filterContent('all'));
    ebookBtn.addEventListener('click', () => filterContent('ebook'));
    videoBtn.addEventListener('click', () => filterContent('video'));
    podcastBtn.addEventListener('click', () => filterContent('podcast'));
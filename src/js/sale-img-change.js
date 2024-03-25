// Находим все элементы списка
const saleItems = document.querySelectorAll('.sale-section-item');

// Для каждого элемента списка устанавливаем обработчик события
saleItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    // Находим изображение внутри элемента списка
    const img = item.querySelector('img');

    // Получаем путь к изображению
    const imgSrc = img.getAttribute('src');

    // Определяем префикс изображения в зависимости от его пути
    let prefix;
    if (imgSrc.includes('desktop-tablet-sale-marq-img')) {
      prefix = 'desktop-tablet-sale-marq-img-';
    } else {
      prefix = 'mobile-sale-marq-img-';
    }

    // Формируем новые пути к изображению для обертки основного изображения
    const mainImgSrc = `./img/sale/${prefix}${index + 1}.png`;
    const mainImgSrcset1x = `./img/sale/${prefix}${index + 1}.png 1x`;
    const mainImgSrcset2x = `./img/sale/${prefix}${index + 1}@2x.png 2x`;

    // Находим обертку основного изображения
    const mainImgWrap = document.querySelector('.main-photo-wrap');

    // Меняем пути в обертке основного изображения
    mainImgWrap.innerHTML = `
      <picture>
        <source
          srcset="${mainImgSrcset1x}, ${mainImgSrcset2x}"
          media="(min-width: 768px)"
        />
        <source
          srcset="${mainImgSrcset1x}, ${mainImgSrcset2x}"
          media="(max-width: 767px)"
        />
        <img
          class="sale-main-photo"
          src="${mainImgSrc}"
          alt="clock"
        />
      </picture>
    `;
  });
});

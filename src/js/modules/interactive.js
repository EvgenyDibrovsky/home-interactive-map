export default function initInteractive() {
  const data = {
    id_1: { price: 'Przedpokój', status: 'available' },
    id_2: { price: 'Kuchnia', status: 'reserved' },
    id_3: { price: 'Pokój', status: 'available' },
    id_4: { price: 'Pokój goscinny', status: 'available' },
    id_5: { price: 'Pokój', status: 'reserved' },
    id_6: { price: 'Łazienka', status: 'service' },
    id_7: { price: 'Aquarium', status: 'service' },
    messages: {
      available: 'Remont zakończony',
      reserved: 'Remont zaplanowany',
      service: 'Remont w toku',
    },
  };

  const map = document.getElementById('my-map');
  const buildings = map.querySelectorAll('.building');
  const info = map.querySelector('.info');
  const lines = [];

  buildings.forEach(building => {
    const id = building.getAttribute('data-building-id');
    const status = data[`id_${id}`]?.status;
    const price = data[`id_${id}`]?.price;

    building.classList.add(status); // Исправлено: убрать тире перед классом

    // Создаем линию с LeaderLine
    const line = new LeaderLine(
      LeaderLine.pointAnchor(building, { x: '50%', y: '50%' }),
      LeaderLine.pointAnchor(info, { x: '50%', y: 0 }),
      {
        startLabel: LeaderLine.captionLabel(`${price}`, {
          fontFamily: 'Arial',
          fontWeight: 400,
          offset: [-30, -50],
          outlineColor: '#555',
        }),
        color: '#fff',
        startPlug: 'arrow2',
        dash: { animation: true },
        endPlug: 'behind',
        endSocket: 'top',
        hide: true,
        gradient: true,
        startPlugColor: '#fff',
        endPlugColor: '#bdbdbd',
        startPlug: 'square',
        endPlug: 'arrow1',
      }
    );

    // Сохраняем линию в массив для управления
    lines.push(line);

    // Обработчики событий для показа и скрытия линий
    building.addEventListener('mouseover', () => {
      line.show();
      info.textContent = data.messages[status];
    });

    building.addEventListener('mouseout', () => {
      line.hide();
    });
  });
}

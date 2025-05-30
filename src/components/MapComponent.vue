<template>
  <div class="container my-5">
    <div style="position:relative;overflow:hidden;border-radius:15px;box-shadow:0 10px 30px rgba(0,0,0,0.1)">
      <iframe 
        src="https://yandex.ru/map-widget/v1/?ll=82.274305%2C52.325483&mode=routes&rtext=53.346785%2C83.776856~53.254795%2C83.719580~51.988130%2C81.827440~51.600184%2C82.289579~51.293761%2C82.648456~51.313357%2C82.569575~51.153908%2C82.198472~50.999759%2C81.460766~51.188362%2C81.195574~53.346785%2C83.776856&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNzk1MBI50KDQvtGB0YHQuNGPLCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksINCR0LDRgNC90LDRg9C7IgoNwY2nQhUcY1VC~~~~~~~~~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNzk1MBI50KDQvtGB0YHQuNGPLCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksINCR0LDRgNC90LDRg9C7IgoNwY2nQhUcY1VC&z=7.03" 
        width="100%" 
        height="600"
        frameborder="1" 
        allowfullscreen="true"
        style="position:relative;"
      ></iframe>
    </div>
    
    <!-- Добавленные кнопки -->
    <div class="action-buttons">
      <button class="btn-cost" @click="$emit('show-cost')">
        Стоимость маршрута
      </button>
      <button class="btn-video" @click="openVideo">
        Видео
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openVideo() {
      window.open('https://disk.yandex.ru/i/G5UXdyjnenrCdA', '_blank');
    }
  }
}
</script>

<style scoped>
.map-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding-bottom: 75%; /* Соотношение сторон 4:3 */
  height: 0;
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.btn-cost, .btn-video {
  padding: 12px 25px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-cost, .btn-video {
    width: 90%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .btn-cost, .btn-video {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
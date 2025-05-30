<template>
  <div class="hero-container">
    <img src="/assets/hero-image.jpg" class="hero-image">
    <h1 class="site-title">Автомобильный семейный научно познавательный маршрут "Путешествие по Демидовским местам рудного Алтая""
    </h1>
    
    <div class="cities-panel">
      <div class="cities-list">
        <div 
          v-for="city in cities" 
          :key="city.id"
          class="city-item"
          @click="selectCity(city)"
        >
          <span class="city-name">{{ city.name }}</span>
          <div class="city-hover-effect"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        { name: 'Барнаул', coords: [53.3606, 83.7866], id: 1 },
        { name: 'Змеиногорский тракт', coords: [51.1631, 82.2043], id: 2 },
        { name: 'Курьинский район', coords: [51.5007, 82.7828], id: 3 },
        { name: 'Колывань', coords: [51.3188, 82.5665], id: 4 },
        { name: 'Змеиногорский район', coords: [51.1585, 82.2043], id: 5 },
        { name: 'Локтевский район', coords: [50.9833, 81.4667], id: 6 },
      ]
    }
  },
  methods: {
    selectCity(city) {
      this.$emit('city-selected', city);
    }
  }
}
</script>


<style scoped>
.hero-container {
  position: relative;
  height: 80vh;
  overflow: hidden;
}

.site-title {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 0 4px 6px rgba(0,0,0,0.5);
  text-align: center;
  width: 80%;
  z-index: 2;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 8s ease-out;
}

.cities-panel {
  position: absolute;
  bottom: 8%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  padding: 20px 0;
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.3);
}

.cities-list {
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.city-item {
  position: relative;
  padding: 15px 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex: 1;
  text-align: center;
  max-width: 250px;
}

.city-name {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.city-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(74, 107, 255, 0.3);
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.city-item:hover .city-hover-effect {
  transform: translateY(0);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.city-item:nth-child(1) { animation: fadeInUp 0.5s 0.1s ease-out forwards; }
.city-item:nth-child(2) { animation: fadeInUp 0.5s 0.2s ease-out forwards; }
.city-item:nth-child(3) { animation: fadeInUp 0.5s 0.3s ease-out forwards; }
.city-item:nth-child(4) { animation: fadeInUp 0.5s 0.4s ease-out forwards; }
.city-item:nth-child(5) { animation: fadeInUp 0.5s 0.5s ease-out forwards; }
.city-item:nth-child(6) { animation: fadeInUp 0.5s 0.6s ease-out forwards; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
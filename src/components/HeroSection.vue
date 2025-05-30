<template>
  <div class="hero-container">
    <img src="/assets/hero-image.jpg" class="hero-image">
    <div class="title-wrapper">
      <h1 class="site-title">Автомобильный семейный научно познавательный маршрут "Путешествие по Демидовским местам рудного Алтая"</h1>
    </div>
    
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

.title-wrapper {
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 20px;
}

.site-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 4px 6px rgba(0,0,0,0.5);
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
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
  bottom: 5%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  padding: 15px 0;
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.3);
  z-index: 3;
}

.cities-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
}

.city-item {
  position: relative;
  padding: 12px 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex: 1 0 auto;
  min-width: 120px;
  max-width: 200px;
  text-align: center;
}

.city-name {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Анимации остаются без изменений */

/* Адаптивные стили */
@media (max-width: 1200px) {
  .site-title {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .site-title {
    font-size: 1.7rem;
  }
  
  .city-name {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .title-wrapper {
    top: 10%;
  }
  
  .site-title {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .cities-panel {
    bottom: 3%;
    padding: 10px 0;
  }
  
  .cities-list {
    gap: 6px;
  }
  
  .city-item {
    padding: 10px 12px;
    min-width: 100px;
    max-width: 150px;
  }
  
  .city-name {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .hero-container {
    height: 85vh;
  }
  
  .title-wrapper {
    top: 5%;
  }
  
  .site-title {
    font-size: 1.3rem;
    line-height: 1.2;
  }
  
  .cities-panel {
    bottom: 2%;
  }
  
  .cities-list {
    flex-wrap: wrap;
    gap: 4px;
  }
  
  .city-item {
    flex: 0 0 calc(50% - 8px);
    max-width: calc(50% - 8px);
    padding: 8px 5px;
    margin: 2px;
  }
  
  .city-name {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 11px;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  display: -moz-box;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
}

@media (max-width: 400px) {
  .site-title {
    font-size: 1.1rem;
  }
  
  .city-name {
    font-size: 10px;
  }
}
</style>
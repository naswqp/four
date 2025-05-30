<template>
  <div class="app-container">
    <main class="main-content">
      <HeroSection 
        @city-selected="handleCitySelected"
      />
      
      <MapComponent 
        :center="mapCenter" 
        :zoom="mapZoom"
        :key="mapKey"
        @show-cost="showCostModal = true"
      />
    </main>
    
    <AttractionModal
      :show="showAttractionModal"
      :city="selectedCityData"
      @close="showAttractionModal = false"
    />
    
    <CostModal
      :show="showCostModal"
      @close="showCostModal = false"
    />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import MapComponent from './components/MapComponent.vue'
import AttractionModal from './components/AttractionModal.vue'
import CostModal from './components/CostModal.vue'

export default {
  components: {
    HeroSection,
    MapComponent,
    AttractionModal,
    CostModal
  },
  data() {
    return {
      showAttractionModal: false,
      showCostModal: false,
      selectedCity: null,
      selectedCityData: null,
      citiesData: [],
      mapCenter: [52.5, 85.0],
      mapZoom: 6,
      mapKey: 0
    }
  },
  async created() {
    // Загружаем данные о городах и достопримечательностях
    const response = await fetch('/cities.json');
    this.citiesData = await response.json();
  },
  methods: {
    handleCitySelected(city) {
      this.selectedCity = city;
      // Находим полные данные о городе по имени
      this.selectedCityData = this.citiesData.find(c => c.city === city.name);
      this.showAttractionModal = true;
      this.mapCenter = city.coords;
      this.mapZoom = 12;
      this.mapKey++;
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .main-content {
    padding: 0 10px;
  }
  
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* Адаптивные шрифты */
html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}

.app-container {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.main-content {
  position: relative;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 4s ease-in-out infinite;
}
</style>
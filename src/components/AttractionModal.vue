<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Достопримечательности {{ city?.city }}</h3>
        <button @click="closeModal" class="close-button">&times;</button>
      </div>
      
      <div v-if="!selectedAttraction" class="attractions-container">
        <div 
          v-for="attraction in city?.attractions || []" 
          :key="attraction.name"
          class="attraction-card"
          @click="selectAttraction(attraction)"
        >
          <div class="card-image-container">
            <img 
              v-if="attraction.images?.length" 
              :src="attraction.images[0]" 
              :alt="attraction.name"
              class="card-image"
            >
            <div v-else class="no-image-placeholder">
              <span>Нет изображения</span>
            </div>
          </div>
          <div class="card-content">
            <h4>{{ attraction.name }}</h4>
            <p class="card-description">{{ truncateDescription(attraction.description) }}</p>
          </div>
        </div>
      </div>
      
      <div v-if="selectedAttraction" class="attraction-detail">
        <div class="detail-header">
          <h3>{{ selectedAttraction.name }}</h3>
          <button @click="selectedAttraction = null" class="back-button">
            <span>&larr;</span> Назад
          </button>
        </div>
        
        <div class="detail-content">
          <!-- Текст описания -->
          <div class="description-text" v-html="formatDescription(selectedAttraction.description)"></div>
          
          <!-- Галерея фотографий -->
          <div v-if="selectedAttraction.images?.length" class="photo-gallery">
            <div v-for="(image, idx) in selectedAttraction.images" :key="idx" class="photo-item">
              <img 
                :src="image" 
                :alt="`${selectedAttraction.name} - фото ${idx + 1}`"
                class="full-width-photo"
                @click="openImageModal(image)"
              >
              <div class="photo-caption">
                {{ getImageCaption(selectedAttraction, idx) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    city: Object
  },
  data() {
    return {
      selectedAttraction: null
    }
  },
  methods: {
    truncateDescription(desc) {
      if (!desc) return '';
      return desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
    },
    formatDescription(desc) {
      if (!desc) return '';
      // Заменяем переносы строк на HTML-теги
      return desc.replace(/\n/g, '<br>');
    },
    selectAttraction(attraction) {
      this.selectedAttraction = attraction;
    },
    getImageCaption(attraction, imageIndex) {
      // Здесь можно добавить логику для подписей
      // Например, если в данных есть массив captions
      if (attraction.captions && attraction.captions[imageIndex]) {
        return attraction.captions[imageIndex];
      }
      return `${attraction.name} - фото ${imageIndex + 1}`;
    },
    openImageModal(image) {
      // В будущем можно реализовать полноэкранный просмотр
      console.log('Открыть изображение:', image);
    },
    closeModal() {
      this.selectedAttraction = null;
      this.$emit('close');
    }
  }
}
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #666;
  padding: 0 10px;
}

.attractions-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.attraction-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.attraction-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-image-container {
  height: 160px;
  overflow: hidden;
  position: relative;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.attraction-card:hover .card-image {
  transform: scale(1.05);
}

.no-image-placeholder {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.card-content {
  padding: 15px;
}

.card-content h4 {
  margin: 0 0 10px;
  color: #333;
  font-size: 1.1rem;
}

.card-description {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.attraction-detail {
  padding: 20px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.detail-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.back-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.detail-content {
  line-height: 1.6;
  color: #444;
}

.detail-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .attractions-container {
    grid-template-columns: 1fr;
  }
  
  .modal-header h3 {
    font-size: 1.2rem;
  }
}
.full-width-image-container {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.full-width-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.full-width-image:hover {
  transform: scale(1.02);
}

.description-text {
  margin: 20px 0;
  line-height: 1.6;
  color: #444;
}

.detail-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.gallery-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .full-width-image {
    max-height: 300px;
  }
  
  .detail-gallery {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .gallery-image {
    height: 100px;
  }
}
.detail-content {
  padding: 20px;
}

.description-text {
  margin-bottom: 30px;
  line-height: 1.6;
  color: #444;
  white-space: pre-line;
}

.photo-gallery {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.photo-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.full-width-photo {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  background: #f5f5f5;
  cursor: zoom-in;
  transition: transform 0.3s ease;
}

.full-width-photo:hover {
  transform: scale(1.01);
}

.photo-caption {
  padding: 10px 15px;
  background: white;
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  border-top: 1px solid #eee;
}

@media (max-width: 768px) {
  .full-width-photo {
    max-height: 300px;
  }
  
  .photo-gallery {
    gap: 20px;
  }
}
</style>
<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal-content cost-modal">
      <div class="modal-header">
        <h3>Стоимость маршрута</h3>
        <button @click="close" class="close-button">&times;</button>
      </div>
      
      <div class="modal-body">
        <h4>Цена указана за семью из 4 человек:</h4>
        
        <table class="cost-table">
          <thead>
            <tr>
              <th></th>
              <th>Семья с личным автомобилем</th>
              <th>Семья с автомобилем в аренду</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Полная стоимость</td>
              <td>23 467 ₽</td>
              <td>27 467 ₽</td>
            </tr>
            <tr>
              <td>В расчете на 1 члена семьи</td>
              <td>5 866 ₽</td>
              <td>6 866 ₽</td>
            </tr>
          </tbody>
        </table>

        <div class="included-section">
          <h4>Что входит в стоимость:</h4>
          <div class="included-columns">
            <div class="included">
              <h5>В стоимость включено:</h5>
              <ul>
                <li>Транспортные расходы</li>
                <li>Проживание в гостинице 2 ночи</li>
                <li>Питание (3 завтрака, 2 обеда и 2 ужина)</li>
                <li>Входные билеты на все объекты, мастер-классы</li>
                <li>Сопровождение гида</li>
              </ul>
            </div>
            <div class="excluded">
              <h5>В стоимость не включено:</h5>
              <ul>
                <li>Сувенирная продукция</li>
                <li>Дополнительные экскурсии</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    close() {
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
  max-width: 800px;
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
  font-size: 1.8rem;
  color: #2c3e50;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #7f8c8d;
  padding: 0 10px;
}

.modal-body {
  padding: 25px;
}

h4 {
  color: #3498db;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.cost-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.cost-table th, .cost-table td {
  border: 1px solid #ecf0f1;
  padding: 15px;
  text-align: center;
}

.cost-table th {
  background-color: #3498db;
  color: white;
  font-weight: 600;
}

.cost-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.included-section {
  margin-top: 30px;
}

.included-columns {
  display: flex;
  gap: 30px;
  margin-top: 15px;
}

.included, .excluded {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
}

.included {
  background: linear-gradient(135deg, #f8fff8 0%, #e8f5e9 100%);
  border-left: 4px solid #4caf50;
}

.excluded {
  background: linear-gradient(135deg, #fff8f8 0%, #ffebee 100%);
  border-left: 4px solid #f44336;
}

h5 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .included-columns {
    flex-direction: column;
  }
  
  .modal-header h3 {
    font-size: 1.4rem;
  }
  
  .cost-table {
    font-size: 0.9rem;
  }
}
</style>
import { createApp } from 'vue'
import App from './App.vue'

let appInstance = null
let isMounting = false

function bootstrapApplication() {
  try {
    if (isMounting) return
    
    isMounting = true
    
    // Очистка предыдущего приложения
    if (appInstance) {
      appInstance.unmount()
      const container = document.getElementById('app')
      if (container) {
        container.innerHTML = ''
      }
    }

    // Создание нового экземпляра
    appInstance = createApp(App)
    
    // Монтирование
    const mountPoint = document.createElement('div')
    mountPoint.id = 'app'
    document.body.appendChild(mountPoint)
    
    appInstance.mount('#app')
    
    // Обработка HMR
    if (import.meta.hot) {
      import.meta.hot.accept()
      import.meta.hot.dispose(() => {
        if (appInstance) {
          appInstance.unmount()
          appInstance = null
        }
      })
    }
  } catch (error) {
    console.error('Application bootstrap failed:', error)
  } finally {
    isMounting = false
  }
}

// Задержка для асинхронных сред
if (document.readyState === 'complete') {
  bootstrapApplication()
} else {
  window.addEventListener('DOMContentLoaded', bootstrapApplication)
}
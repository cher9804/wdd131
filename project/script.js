/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad para alternar el tema
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
      }
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  
    // Manejo del envío del formulario en la página de inicio
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  
    // Generar contenido dinámico de servicios en services.html
    const servicesContainer = document.getElementById('servicesContainer');
    if (servicesContainer) {
      displayServices(servicesContainer);
    }
  });
  
  // Función para alternar tema y guardar la preferencia en localStorage
  function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Función para manejar el envío del formulario
  function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      displayFormMessage('Por favor, completa todos los campos.', 'error');
      return;
    }
  
    const formData = {
      name,
      email,
      message,
      date: new Date().toLocaleString()
    };
  
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(formData);
    localStorage.setItem('messages', JSON.stringify(messages));
    
    displayFormMessage(`¡Gracias ${name}! Tu mensaje ha sido enviado.`, 'success');
    event.target.reset();
  }
  
  // Función para mostrar mensajes del formulario
  function displayFormMessage(msg, type) {
    const formMessageDiv = document.getElementById('formMessage');
    formMessageDiv.textContent = msg;
    formMessageDiv.style.color = (type === 'error') ? '#e74c3c' : '#27ae60';
  }
  
  // Función para generar dinámicamente el contenido de servicios
  function displayServices(container) {
    const services = [
      { title: 'Consultoría en Outsourcing', description: 'Asesoramos en la implementación de procesos de outsourcing para optimizar la eficiencia.' },
      { title: 'Reclutamiento de Talento', description: 'Conectamos empresas con candidatos altamente calificados en Colombia.' },
      { title: 'Gestión de Proyectos', description: 'Administramos y supervisamos proyectos de outsourcing de principio a fin.' }
    ];
  
    const servicesHTML = services.map(service => {
      return `<div class="service-card">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
              </div>`;
    }).join('');
    
    container.innerHTML = servicesHTML;
  }
  
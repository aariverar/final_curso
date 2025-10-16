# 📊 BlueBag - Dashboard de Investigación de Mercados

**Sistema interactivo de análisis de encuesta para morrales personalizados con materiales reciclados**

Un dashboard profesional diseñado para visualizar y analizar los resultados de la investigación de mercado del proyecto BlueBag, desarrollado para el curso "Investigación de Mercados e Inteligencia Comercial" de la Universidad Peruana de Ciencias.

## 🚀 **Demo en Vivo**
👉 [Ver Dashboard](https://aariverar.github.io/final_curso/)

## 🎓 **Información Académica**
- **Universidad**: Universidad Peruana de Ciencias (UPC)
- **Curso**: Investigación de Mercados e Inteligencia Comercial - Virtual
- **Profesora**: Viviana Clara Augusta Cordova Vargas
- **Grupo**: 3
- **Integrantes**: Abraham Rivera, Medaly UPC
- **Proyecto**: BlueBag - Morrales Personalizados con Materiales Reciclados

## 🎯 Características Principales

### 📈 **Análisis de Encuesta**
- **150 registros de encuesta** procesados y analizados
- **9 gráficos interactivos** con Plotly.js v2.35.2
- **Métricas KPI** del proyecto de investigación
- **Conclusiones e insights** profesionales
- **Modal expandible** para cada visualización

### 📊 **Tipos de Visualización Implementados**
- **Gráfico Circular**: Distribución por rango de edad
- **Gráfico Donut**: Distribución por género
- **Gráfico de Barras Horizontales**: Frecuencia de compra
- **Gráfico Radar**: Percepción sobre sostenibilidad
- **Gráfico de Picos (Spike)**: Canal de compra preferido
- **Gráfico Sunburst**: Experiencias con materiales reciclados
- **Gráfico de Burbujas**: Interés en producto innovador
- **Gráfico de Medidor (Gauge)**: Disposición de pago
- **Gráfico de Barras Verticales**: Rango de precio

### 📁 **Gestión de Datos**
- **Carga de archivos Excel** (.xlsx, .xls, .csv)
- **Procesamiento automático** de datos de pruebas
- **Datos de ejemplo** incluidos para demostración

### 🎨 **Diseño Corporativo**
- **Colores Santander** (Rojo #EC0000)
- **Diseño responsive** para desktop y móvil
- **Interfaz moderna** con animations y efectos
- **Footer corporativo** con información de contacto

## 🚀 Tecnologías Utilizadas

### **Frontend**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS y gradientes
- **JavaScript ES6+** - Lógica de aplicación
- **Font Awesome 6.0** - Iconografía
- **Google Fonts (Inter)** - Tipografía

### **Librerías**
- **Plotly.js v2.35.2** - Gráficos interactivos
- **SheetJS (xlsx.js)** - Procesamiento de archivos Excel
- **CSS Grid & Flexbox** - Layout responsive

## 📁 Estructura del Proyecto

```
DASHBOARD QA REPORTE DIARIO/
├── index.html              # Página principal
├── styles.css              # Estilos CSS principales
├── script.js               # Lógica JavaScript
├── README.md               # Este archivo
```

## 🛠️ Instalación y Uso

### **Requisitos Previos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado)

### **Instalación**
1. **Clonar o descargar** el proyecto
```bash
git clone [URL_DEL_REPOSITORIO]
cd "DASHBOARD QA REPORTE DIARIO"
```

2. **Abrir en navegador**
   - Opción 1: Abrir `index.html` directamente
   - Opción 2: Usar servidor local (recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con Live Server (VS Code)
# Clic derecho en index.html > "Open with Live Server"
```

3. **Acceder al dashboard**
   - Navegador: `http://localhost:8000`

## 📊 Uso del Dashboard

### **1. Información del Proyecto**
- Visualiza datos básicos del proyecto
- Nombre, responsable QA, fechas, estado y progreso

### **2. Métricas KPI**
- **Pruebas Exitosas**: Casos que pasaron correctamente
- **Pruebas Fallidas**: Casos que fallaron
- **Pruebas Pendientes**: Casos por ejecutar
- **Pruebas Bloqueadas**: Casos bloqueados por dependencias
- **Pruebas Planificadas**: Total de casos planificados

### **3. Gráficos Interactivos**
- **Resumen de Resultados**: Distribución porcentual de resultados
- **Tendencia de Ejecución**: Progreso diario de pruebas
- **Cobertura por Módulo**: Cobertura de testing por componente

### **4. Tabla de Detalles**
- Lista completa de casos de prueba
- Filtros por estado, módulo, responsable
- Paginación configurable
- Exportación de datos

### **5. Carga de Datos**
- Botón "Cargar Archivo" en el header
- Formatos soportados: Excel (.xlsx, .xls), CSV
- Procesamiento automático y actualización de gráficos

## 📋 Formato de Datos

### **Estructura Excel Requerida**
El archivo Excel debe contener las siguientes columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| ID | Identificador único | TC001 |
| Caso de Prueba | Nombre descriptivo | Login con credenciales válidas |
| Módulo | Componente del sistema | Autenticación |
| Responsable | Encargado de la ejecución | Juan Pérez |
| Estado | Resultado de la prueba | Exitoso/Fallido/Pendiente |
| Fecha Ejecución | Fecha de última ejecución | 01/10/2024 |
| Prioridad | Nivel de importancia | Alta/Media/Baja |
| Observaciones | Comentarios adicionales | Error en validación |

## 🎨 Personalización

### **Colores Corporativos**
Los colores están definidos en `styles.css` usando variables CSS:

```css
:root {
    --primary-color: #EC0000;     /* Rojo Santander */
    --primary-dark: #C80000;      /* Rojo más oscuro */
    --primary-light: #FF3333;     /* Rojo más claro */
    --success-color: #28a745;     /* Verde éxito */
    --warning-color: #ffc107;     /* Amarillo advertencia */
    --danger-color: #dc3545;      /* Rojo error */
}
```

### **Configuración de Gráficos**
Los gráficos se pueden personalizar en `script.js`:

```javascript
const colors = {
    success: '#10b981',
    danger: '#ef4444',
    pending: '#8b5cf6',
    primary: '#2563eb',
    warning: '#f59e0b'
};
```

## 📱 Responsive Design

El dashboard está optimizado para:
- **Desktop**: Experiencia completa con todas las funcionalidades
- **Tablet**: Layout adaptado con grillas responsivas
- **Mobile**: Interfaz compacta con navegación optimizada

### **Breakpoints**
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## 🔧 Funcionalidades Técnicas

### **Interactividad**
- **Hover effects** en tarjetas y botones
- **Gráficos expandibles** en modal
- **Filtros dinámicos** en tabla
- **Paginación** configurable

### **Rendimiento**
- **CSS optimizado** con variables y reutilización
- **JavaScript modular** para fácil mantenimiento
- **Imágenes optimizadas** y iconos vectoriales
- **Carga asíncrona** de librerías externas

## 👥 Equipo de Desarrollo

### **Contacto y Soporte**
- **Email**: arivera_scb@santander.com.pe
- **Organización**: Santander Consumer Bank
- **Departamento**: Aseguramiento de Calidad

## 📄 Licencia

© 2025 Santander Consumer Bank - Aseguramiento de Calidad. Todos los derechos reservados.

---

## 🚀 Contribuciones

Para contribuir al proyecto:

1. **Fork** el repositorio
2. **Crear** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abrir** un Pull Request

## 📚 Documentación Adicional

- `GUIA_EXCEL_MULTI_PROYECTO.md` - Guía para manejo de múltiples proyectos
- `template_dashboard_completo.md` - Template completo del dashboard
- `generador_excel_template.html` - Generador de templates Excel

---

**Desarrollado con ❤️ para el equipo QA de Santander**


1. Perfil del consumidor
Gráfico 1 – Distribución por rango de edad

Tipo: Gráfico de barras o pirámide.
Variable: “Rango de edad”.
Objetivo: Mostrar la concentración generacional de los encuestados.
👉 Ejemplo visual:

18–24 años → 3 personas

25–29 años → 3 personas

30–35 años → 4 personas

📊 Interpretación: el público es principalmente adulto joven (30–35 años), ideal para productos de estilo y sostenibilidad.

Gráfico 2 – Distribución por género

Tipo: Gráfico circular (pie chart).
Variable: “Género”.
Objetivo: Mostrar la proporción entre hombres y mujeres.
📊 Resultado esperado: mayor participación femenina (~70%), lo que indica que las estrategias deben priorizar el público femenino.

👜 2. Comportamiento de compra
Gráfico 3 – Frecuencia de compra de accesorios

Tipo: Barras horizontales o columna agrupada.
Variable: “¿Con qué frecuencia compra accesorios?”
👉 Categorías: Nunca, Rara vez, Cada 3 meses, etc.
📊 Interpretación: la mayoría compra rara vez, lo que indica un mercado con baja frecuencia pero alta intención aspiracional.

Gráfico 4 – Canal de compra preferido

Tipo: Gráfico de barras o “donut chart”.
Variable: “Canal de compra preferido”.
👉 Categorías: Tienda física, Instagram, TikTok, WhatsApp, Ferias.
📊 Interpretación: predominan canales digitales (TikTok e Instagram), lo que sugiere que el marketing debe centrarse en redes sociales visuales.

🌱 3. Percepción sobre sostenibilidad
Gráfico 5 – Importancia de la sostenibilidad

Tipo: Gráfico de barras apiladas o radar chart.
Variable: Escala del 1 al 5 (importancia de la sostenibilidad).
📊 Interpretación: podrás mostrar si el público considera la sostenibilidad como valor clave o solo complementario.

Gráfico 6 – Experiencias con materiales reciclados

Tipo: Gráfico circular (Sí/No).
Variable: “¿Ha comprado productos con materiales reciclados?”
📊 Interpretación: visual rápido del nivel de familiaridad y apertura hacia la sostenibilidad.

💡 4. Interés en el producto innovador
Gráfico 7 – Interés en morral con jeans reciclados

Tipo: Barras horizontales tipo “Likert scale”.
Variable: “Qué tan interesado está en la idea del morral reciclado”.
📊 Interpretación: medirás el nivel de curiosidad o aceptación inicial de la propuesta.

✨ Tip: puedes usar colores de intensidad (verde = muy interesado, gris = neutro, rojo = nada interesado).

Gráfico 8 – Valor sentimental del producto

Tipo: Barras agrupadas.
Variable: “Importancia del valor sentimental”
📊 Interpretación: evalúa si los consumidores valoran tener partes de prendas propias o de alguien querido, para reforzar el storytelling emocional del producto.

Gráfico 9 – Importancia de personalización

Tipo: Gráfico de radar o barras.
Variable: “Importancia de que el producto se confeccione a pedido”.
📊 Interpretación: identifica si la personalización es vista como una ventaja competitiva clave.

💰 5. Disposición de pago
Gráfico 10 – Disposición a pagar extra (dicotómica)

Tipo: Pie chart (Sí / No).
Variable: “¿Estaría dispuesto(a) a pagar más?”
📊 Interpretación: muestra cuántos consumidores aceptarían pagar más por un producto sostenible y personalizado.

Gráfico 11 – Rango de precio dispuesto a pagar

Tipo: Gráfico de columnas o barras ordenadas.
Variable: “Rango de pago”.
📊 Interpretación: identifica el precio ideal o promedio esperado, para definir la estrategia de precio del producto (por ejemplo, S/. 61 – 100 aparece varias veces → precio medio más aceptado).

💬 6. Atributos más valorados
Gráfico 12 – Word Cloud (nube de palabras)

Variable: “Atributos más valorados (Diseño, Durabilidad, Precio, Material, etc.)”
📊 Interpretación: permite ver de forma visual qué atributos destacan más al comprar un accesorio.
👉 Ejemplo: “Diseño” y “Durabilidad” aparecerían en letras más grandes.

📈 7. Insights resumen (puedes ponerlo en tu dashboard final)

🔹 El público objetivo es mujer joven-adulta (25–35 años) con interés moderado por la sostenibilidad.
🔹 Prefieren comprar por redes sociales visuales (TikTok, Instagram).
🔹 Valoran más el diseño, la durabilidad y la personalización.
🔹 Más del 50% estaría dispuesto a pagar más por un producto reciclado y hecho a medida.
🔹 El rango de precio más aceptado es entre S/. 61 y S/. 100.

🧠 Recomendación de herramientas

Si usas Excel o Google Sheets: puedes hacer todos estos gráficos y combinarlos en un solo panel.

Si usas Power BI o Tableau: puedes hacerlo más dinámico con filtros por edad, género o canal.

Si es para presentación universitaria, lo ideal es un PowerPoint con diseño limpio tipo infografía o dashboard visual (3 secciones: Perfil – Opinión – Disposición de compra).

¿Quieres que te ayude a armar el dashboard en PowerPoint o Excel con diseño profesional (gráficos y colores)? Puedo prepararte el formato base para que solo pegues tus datos.
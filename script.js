// Configuración de colores consistente con CSS
const colors = {
    success: '#10b981',
    danger: '#ef4444',
    pending: '#8b5cf6',
    primary: '#2563eb',
    warning: '#f59e0b'
};

// Datos de ejemplo para el gráfico de género
const testData = {
    gender: {
        'Masculino': 45,
        'Femenino': 105
    }
};

// Datos de frecuencia de compra de accesorios
const frequencyData = {
    'Nunca': 26,
    'Rara vez': 33,
    '1 vez cada 3 meses': 30,
    '1 vez al mes': 35,
    'Más de una vez al mes': 26
};

// Datos de canal de compra preferido
const channelData = {
    'TikTok': 26,
    'Instagram': 14,
    'WhatsApp': 25,
    'Tienda física': 19,
    'Facebook': 25,
    'Ferias o eventos': 19,
    'Otros': 22
};

// Datos de percepción sobre sostenibilidad (escala 1-5)
const sustainabilityData = {
    'Nada importante': 22,      // 1 en la escala
    'Poco importante': 28,      // 2 en la escala  
    'Neutral': 18,              // 3 en la escala
    'Importante': 35,           // 4 en la escala
    'Muy Importante': 48        // 5 en la escala
};

// Datos de experiencias con materiales reciclados
const recycledMaterialsData = {
    'Sí': 78,           // Han comprado productos con materiales reciclados
    'No': 72            // No han comprado productos con materiales reciclados
};

// Datos de interés en morral con jeans reciclados (escala Likert 1-5)
const interestData = {
    'Nada interesado': 20,      // 1 en la escala Likert
    'Poco interesado': 28,      // 2 en la escala Likert
    'Neutral': 39,              // 3 en la escala Likert
    'Interesado(a)': 33,           // 4 en la escala Likert
    'Muy interesado': 30        // 5 en la escala Likert (ajustado para total 150)
};

// Datos de disposición de pago (¿Estaría dispuesto(a) a pagar por un morral ecológico?)
const paymentWillingnessData = {
    'SI': { count: 70, percentage: 46.7 },      // Dispuestos a pagar
    'NO': { count: 80, percentage: 53.3 }       // No dispuestos a pagar
};

// Datos de rango de precio dispuesto a pagar (rangos específicos)
const paymentData = {
    'S/. 30-60': { count: 32, percentage: 21.3 },      // Rango de precio bajo
    'S/. 61-100': { count: 36, percentage: 24.0 },      // Rango de precio medio
    'S/. 101-120': { count: 42, percentage: 28.0 },      // Rango de precio alto
    'Más de S/. 120': { count: 40, percentage: 26.7 }    // Rango de precio premium
};

// Datos para Rango de Pago
const paymentRangeData = {
    x: [50000, 75000, 100000, 125000, 150000, 200000],
    y: [45, 60, 35, 25, 15, 8],
    mode: 'markers',
    marker: {
        color: ['#8B4513', '#CD853F', '#F4A460', '#DEB887', '#F5DEB3', '#FFFFE0'],
        size: [15, 20, 12, 10, 8, 6],
        opacity: 0.8,
        line: {
            color: '#654321',
            width: 2
        }
    },
    text: ['$30.000-50.000', '$50.000-75.000', '$75.000-100.000', '$100.000-125.000', '$125.000-150.000', 'Más de $150.000'],
    name: 'Rango de Pago'
};

// Datos completos de la encuesta para la tabla
const surveyData = [
    {id: 1, email: "ramos77@mail.com", name: "Verónica Milenka Soto Ramos", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Poco", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 2, email: "usuario655@gmail.com", name: "Yuliana Mercedes Vargas López", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Muy Importante", attributes: "Diseño, Durabilidad", channel: "Instagram", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Muy importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 3, email: "feanhz71@hotmail.com", name: "Paola Priscila Navarro Pérez", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Importante", attributes: "Material, Durabilidad", channel: "Ferias o eventos", interest: "Poco interesado(a)", sentimental: "Muy influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 4, email: "zuniga123@yahoo.com", name: "Andrea Yolanda Mendoza Zúñiga", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Nada importante", attributes: "Personalización, Precio", channel: "TikTok", interest: "No, me interesaria para nada", sentimental: "Poco", customization: "Importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 5, email: "poma77@yahoo.com", name: "Fabiola Laura Díaz Poma", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Diseño, Material", channel: "TikTok", interest: "Interesado(a)", sentimental: "Poco", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 6, email: "gina_ybu@mail.com", name: "Gina Mónica Morales Reyes", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Poco importante", attributes: "Diseño, Otro", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Nada importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 7, email: "tc108@gmail.com", name: "Tamara Claudia Barrios Flores", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Poco importante", attributes: "Material, Precio", channel: "Tienda física", interest: "Interesado(a)", sentimental: "Para nada influyente", customization: "Muy importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 8, email: "ramirez77@gmail.com", name: "Alex Esteban Ortega Ramírez", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Neutral", attributes: "Material, Precio", channel: "Instagram", interest: "No, me interesaria para nada", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 9, email: "dante_znk@outlook.com", name: "Dante Ricardo Ibarra Ramírez", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Nunca", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Personalización", channel: "TikTok", interest: "Muy interesado(a)", sentimental: "Neutral", customization: "Nada importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 10, email: "acosta77@mail.com", name: "Beatriz Inés Córdova Acosta", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    // Agregando más registros de la encuesta - Registros 11-50
    {id: 11, email: "alvaro_hen@yahoo.com", name: "Álvaro Raiden Morales Chávez", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Durabilidad, Diseño", channel: "Instagram", interest: "Interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 12, email: "ricardo_vit@yahoo.com", name: "Ricardo Eduardo Castillo Salgado", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Nunca", recycled: "SI", sustainability: "Importante", attributes: "Precio, Otro", channel: "TikTok", interest: "Poco interesado(a)", sentimental: "Neutral", customization: "Muy importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 13, email: "wilmer.bravo@yahoo.com", name: "Wilmer Germán Tapia Bravo", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "Nunca", recycled: "NO", sustainability: "Muy Importante", attributes: "Durabilidad, Otro", channel: "Instagram", interest: "Interesado(a)", sentimental: "Muy influyente", customization: "Nada importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 14, email: "hugo_hyi@gmail.com", name: "Hugo Nicolás Ortega Flores", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Precio, Material", channel: "Instagram", interest: "No, me interesaria para nada", sentimental: "Poco", customization: "Muy importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 15, email: "sofia_urh@yahoo.com", name: "Sofía Ximena López Salazar", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Durabilidad, Personalización", channel: "WhatsApp", interest: "No, me interesaria para nada", sentimental: "Poco", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 16, email: "mj427@gmail.com", name: "Mercedes Juana Morales Campos", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Muy Importante", attributes: "Durabilidad, Diseño", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 17, email: "fqxwcs25@hotmail.com", name: "Nicolás Carlos Cruz Fuentes", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "Rara vez", recycled: "SI", sustainability: "Poco importante", attributes: "Diseño, Personalización", channel: "TikTok", interest: "Poco interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 18, email: "martha_ien@outlook.com", name: "Martha Karla Díaz Guzmán", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Nada importante", attributes: "Precio, Diseño", channel: "Tienda física", interest: "Muy interesado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 19, email: "juana_lno@outlook.com", name: "Juana Gabriela Navarro Rojas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Neutral", customization: "Muy importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 20, email: "cordova77@yahoo.com", name: "Elena Ana Bravo Córdova", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Durabilidad", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    // Agregando registros 21-40 para mejorar la paginación
    {id: 21, email: "esteban_hxfe@hotmail.com", name: "Esteban José Ramírez León", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Muy Importante", attributes: "Diseño, Precio", channel: "TikTok", interest: "Muy interesado(a)", sentimental: "Para nada influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 22, email: "emilio_okm@mail.com", name: "Emilio Rafael León Navarro", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "Rara vez", recycled: "NO", sustainability: "Neutral", attributes: "Precio, Otro", channel: "Facebook", interest: "Interesado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 23, email: "usuario682@hotmail.com", name: "Gabriela Carmen Solís Santana", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Tienda física", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 24, email: "veronica.salgado@outlook.com", name: "Verónica Elena Acosta Salgado", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Nada importante", attributes: "Precio, Diseño", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 25, email: "ximena.valencia@mail.com", name: "Ximena Elena Rojas Valencia", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Nada importante", attributes: "Material, Precio", channel: "Tienda física", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 26, email: "eryxur82@yahoo.com", name: "Gonzalo Hugo Arias Castillo", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Poco importante", attributes: "Otro, Material", channel: "WhatsApp", interest: "Muy interesado(a)", sentimental: "Para nada influyente", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 27, email: "diego.tzms@hotmail.com", name: "Diego Andrés Linares Santana", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Material", channel: "Ferias o eventos", interest: "Poco interesado(a)", sentimental: "Muy influyente", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 28, email: "yuliana_qod@outlook.com", name: "Yuliana Verónica Arias Camacho", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Ferias o eventos", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 29, email: "cardenas123@mail.com", name: "Amanda Priscila Alvarado Cárdenas", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Nada importante", attributes: "Material, Personalización", channel: "Tienda física", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 30, email: "laura.tapia@yahoo.com", name: "Laura Rosa Vargas Tapia", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Importante", attributes: "Precio, Personalización", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    // Registros 31-60
    {id: 31, email: "lucia_eba@hotmail.com", name: "Lucía Patricia Cárdenas León", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Otro, Precio", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 32, email: "alejandra_nxvg@hotmail.com", name: "Alejandra Lorena Tapia Poma", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Poco importante", attributes: "Durabilidad, Diseño", channel: "Tienda física", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 33, email: "tsvkrv20@gmail.com", name: "Mercedes Lucía Ugarte Santana", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Importante", attributes: "Precio, Diseño", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 34, email: "yolanda.zpjp@yahoo.com", name: "Yolanda Patricia García Linares", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Poco importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Poco interesado(a)", sentimental: "Muy influyente", customization: "Poco importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 35, email: "ekitqz32@yahoo.com", name: "Luis Mateo Navarro Reyes", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Muy interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 36, email: "nadia_chj@hotmail.com", name: "Nadia Rosa Torres Alvarado", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Diseño", channel: "Tienda física", interest: "No, me interesaria para nada", sentimental: "Poco", customization: "Importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 37, email: "yuliana_yls@mail.com", name: "Yuliana Juana Villacorta Poma", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Neutral", attributes: "Material, Precio", channel: "TikTok", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 38, email: "mp715@gmail.com", name: "Mercedes Patricia Castillo Camacho", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Neutral", attributes: "Precio, Otro", channel: "Otros", interest: "Muy interesado(a)", sentimental: "Poco", customization: "Nada importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 39, email: "oj292@hotmail.com", name: "Orlando Juan Cruz Flores", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "Nunca", recycled: "SI", sustainability: "Nada importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 40, email: "fabiola.tdnw@hotmail.com", name: "Fabiola Paola Zúñiga Guzmán", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Otro", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Poco", customization: "Importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 41, email: "valeria.leon@yahoo.com", name: "Valeria Bianca Poma León", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Precio, Durabilidad", channel: "Otros", interest: "Interesado(a)", sentimental: "Muy influyente", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 42, email: "rxmhob45@yahoo.com", name: "Yuliana Brenda Villacorta Rojas", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Nada importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 43, email: "ibarra77@gmail.com", name: "Wilmer Hugo Zúñiga Ibarra", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Poco importante", attributes: "Diseño, Precio", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Influyente", customization: "Neutral", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 44, email: "kofdgy75@outlook.com", name: "Joel Raiden Chávez Ortega", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Nada importante", attributes: "Otro, Material", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Muy importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 45, email: "afrwpa98@mail.com", name: "Paola Valeria Hernández Soto", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Material, Durabilidad", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Para nada influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 46, email: "fernando.garcia@hotmail.com", name: "Fernando Raúl Bravo García", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Personalización, Material", channel: "Otros", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 47, email: "yolanda_uqv@outlook.com", name: "Yolanda Rocío Mendoza Cárdenas", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Durabilidad", channel: "Ferias o eventos", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 48, email: "ymvkbq7@gmail.com", name: "Gabriela Keren Ramos Bravo", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Diseño, Precio", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 49, email: "uuphzz70@hotmail.com", name: "Elena Fabiola Pérez Zúñiga", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Otro, Material", channel: "Otros", interest: "Interesado(a)", sentimental: "Muy influyente", customization: "Nada importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 50, email: "maria_weg@yahoo.com", name: "María Tamara Vega Quispe", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Durabilidad, Precio", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Poco", customization: "Neutral", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 51, email: "ojuopc40@gmail.com", name: "Rocío Karla Reyes Díaz", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Importante", attributes: "Personalización, Durabilidad", channel: "Facebook", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Muy influyente", customization: "Importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 52, email: "veronica.prsa@yahoo.com", name: "Verónica Tamara Pérez Bravo", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Precio, Material", channel: "TikTok", interest: "Interesado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 53, email: "usuario884@yahoo.com", name: "Joel Nicolás Vega Guzmán", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Durabilidad, Material", channel: "Tienda física", interest: "Poco interesado(a)", sentimental: "Muy influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 54, email: "martha.alvarado@yahoo.com", name: "Martha Nadia Soto Alvarado", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Personalización, Material", channel: "WhatsApp", interest: "Interesado(a)", sentimental: "Para nada influyente", customization: "Importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 55, email: "ugarte69@hotmail.com", name: "Brenda Elena Linares Ugarte", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Neutral", attributes: "Diseño, Durabilidad", channel: "Instagram", interest: "Interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 56, email: "valeria_eqr@gmail.com", name: "Valeria Bianca Ramos Santana", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "Facebook", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 57, email: "usuario446@outlook.com", name: "Carmen Gina Miranda Torres", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Importante", attributes: "Personalización, Diseño", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 58, email: "keren_eyn@yahoo.com", name: "Keren Tamara Castillo Camacho", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Otro", channel: "Tienda física", interest: "Interesado(a)", sentimental: "Poco", customization: "Neutral", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 59, email: "rojas21@outlook.com", name: "Laura Brenda Solís Rojas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Muy Importante", attributes: "Precio, Material", channel: "Facebook", interest: "Interesado(a)", sentimental: "Influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 60, email: "vl757@yahoo.com", name: "Valeria Luz Quispe Ramos", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Muy Importante", attributes: "Precio, Otro", channel: "Ferias o eventos", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    // Registros 61-90
    {id: 61, email: "carmen_eox@gmail.com", name: "Carmen Rosa García Mendoza", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Durabilidad", channel: "WhatsApp", interest: "Muy interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 62, email: "patricia_vqx@hotmail.com", name: "Patricia Verónica Torres Cárdenas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Neutral", attributes: "Material, Precio", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 63, email: "sofia_lhz@yahoo.com", name: "Sofía Elena Villacorta Pérez", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "TikTok", interest: "Interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 64, email: "usuario945@outlook.com", name: "Fernando Mateo Cruz Solís", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Precio", channel: "Ferias o eventos", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 65, email: "lucia_npw@mail.com", name: "Lucía Fabiola Miranda Linares", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 66, email: "mafpzs3@gmail.com", name: "Martha Andrea Hernández Zúñiga", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Otro, Personalización", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 67, email: "gabriela_hwq@hotmail.com", name: "Gabriela Yolanda Castillo Bravo", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Material", channel: "WhatsApp", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 68, email: "yuliana_dby@yahoo.com", name: "Yuliana Mercedes Navarro Guzmán", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Precio, Durabilidad", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Poco", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 69, email: "elena_pqw@outlook.com", name: "Elena Patricia Ramos Ortega", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Neutral", attributes: "Material, Personalización", channel: "Instagram", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 70, email: "raiden_xyz@gmail.com", name: "Raiden Nicolás Chávez Díaz", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Otro", channel: "Ferias o eventos", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 71, email: "tamara_fgh@hotmail.com", name: "Tamara Rocío Pérez Villacorta", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Precio", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 72, email: "usuario333@yahoo.com", name: "Hugo Fernando Zúñiga Reyes", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Nada importante", attributes: "Material, Durabilidad", channel: "Otros", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 73, email: "bianca_rst@mail.com", name: "Bianca Gina Soto Miranda", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Durabilidad", channel: "WhatsApp", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 74, email: "karla_mnp@gmail.com", name: "Karla Luz Ugarte Cárdenas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Otro", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 75, email: "usuario667@hotmail.com", name: "Wilmer Joel Alvarado Torres", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Instagram", interest: "Interesado(a)", sentimental: "Influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 76, email: "andrea_vwx@yahoo.com", name: "Andrea Nadia Linares Hernández", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Durabilidad, Personalización", channel: "Ferias o eventos", interest: "Poco interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 77, email: "paola_stu@outlook.com", name: "Paola Fabiola Quispe Castillo", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Importante", attributes: "Material, Precio", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 78, email: "brenda_efg@gmail.com", name: "Brenda Rosa Vega Navarro", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Diseño, Durabilidad", channel: "WhatsApp", interest: "Interesado(a)", sentimental: "Influyente", customization: "Neutral", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 79, email: "usuario888@hotmail.com", name: "Mateo Luis Solís García", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 80, email: "gina_hij@yahoo.com", name: "Gina Verónica Mendoza Bravo", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Importante", attributes: "Material, Otro", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 81, email: "rocio_klm@mail.com", name: "Rocío Carmen Cruz Tapia", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Neutral", attributes: "Durabilidad, Diseño", channel: "Instagram", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 82, email: "usuario111@outlook.com", name: "Nicolás Raúl Díaz Ramos", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Nada importante", attributes: "Precio, Durabilidad", channel: "Ferias o eventos", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 83, email: "mercedes_nop@gmail.com", name: "Mercedes Lucía Santana Ortega", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 84, email: "luz_qrs@hotmail.com", name: "Luz Alejandra Flores Guzmán", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Importante", attributes: "Diseño, Precio", channel: "WhatsApp", interest: "Interesado(a)", sentimental: "Influyente", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 85, email: "usuario555@yahoo.com", name: "Orlando Fernando Ibarra Pérez", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "Rara vez", recycled: "SI", sustainability: "Poco importante", attributes: "Material, Durabilidad", channel: "TikTok", interest: "Poco interesado(a)", sentimental: "Neutral", customization: "Poco importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 86, email: "fabiola_tuv@outlook.com", name: "Fabiola Patricia León Villacorta", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Otro, Precio", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Poco", customization: "Importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 87, email: "juana_wxy@gmail.com", name: "Juana Elena Camacho Zúñiga", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Personalización", channel: "Instagram", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 88, email: "usuario222@hotmail.com", name: "Joel Hugo Chávez Linares", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Nada importante", attributes: "Durabilidad, Precio", channel: "Ferias o eventos", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 89, email: "veronica_zab@mail.com", name: "Verónica Tamara Alvarado Ugarte", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Muy Importante", attributes: "Diseño, Material", channel: "Facebook", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 90, email: "keren_cde@yahoo.com", name: "Keren Bianca Torres Soto", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "S/. 101 – 120"},
    // Registros 91-120
    {id: 91, email: "usuario777@outlook.com", name: "Raúl Wilmer García Mendoza", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Durabilidad", channel: "TikTok", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 92, email: "alejandra_fgh@gmail.com", name: "Alejandra Rosa Rojas Cárdenas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Neutral", attributes: "Diseño, Precio", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 93, email: "patricia_ijk@hotmail.com", name: "Patricia Yolanda Poma Navarro", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 94, email: "usuario444@yahoo.com", name: "Fernando Mateo Reyes Bravo", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Otro", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 95, email: "sofia_lmn@mail.com", name: "Sofía Carmen Guzmán Solís", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 96, email: "martha_opq@outlook.com", name: "Martha Lucía Hernández Díaz", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Precio, Personalización", channel: "WhatsApp", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 97, email: "yuliana_rst@gmail.com", name: "Yuliana Andrea Castillo Ortega", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Durabilidad, Material", channel: "TikTok", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 98, email: "usuario666@hotmail.com", name: "Hugo Nicolás Cruz Flores", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Material, Precio", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 99, email: "elena_uvw@yahoo.com", name: "Elena Bianca Zúñiga Ramos", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Personalización", channel: "Ferias o eventos", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 100, email: "gabriela_xyz@outlook.com", name: "Gabriela Fabiola Pérez Ugarte", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Neutral", attributes: "Otro, Durabilidad", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 101, email: "valeria_abc@mail.com", name: "Valeria Gina Vega Linares", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 102, email: "usuario999@gmail.com", name: "Joel Raiden Alvarado Torres", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Durabilidad", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 103, email: "tamara_def@hotmail.com", name: "Tamara Nadia Quispe Santana", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Material", channel: "TikTok", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 104, email: "brenda_ghi@yahoo.com", name: "Brenda Rocío Miranda Camacho", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Personalización, Otro", channel: "Instagram", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 105, email: "usuario123@outlook.com", name: "Wilmer Orlando Ibarra García", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Neutral", attributes: "Material, Durabilidad", channel: "Ferias o eventos", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 106, email: "carmen_jkl@gmail.com", name: "Carmen Verónica Solís Mendoza", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Importante", attributes: "Precio, Diseño", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 107, email: "patricia_mno@hotmail.com", name: "Patricia Elena Navarro Rojas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 108, email: "usuario321@mail.com", name: "Mateo Luis Chávez Tapia", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Precio", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Nada importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 109, email: "lucia_pqr@yahoo.com", name: "Lucía Alejandra Díaz Poma", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 110, email: "sofía_stu@outlook.com", name: "Sofía Rosa Flores León", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Neutral", attributes: "Precio, Otro", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 111, email: "usuario654@gmail.com", name: "Fernando Raúl Guzmán Villacorta", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 112, email: "yolanda_vwx@hotmail.com", name: "Yolanda Mercedes Ortega Castillo", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Durabilidad, Personalización", channel: "Otros", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 113, email: "fabiola_yza@yahoo.com", name: "Fabiola Keren Reyes Bravo", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 114, email: "usuario987@mail.com", name: "Hugo Nicolás Zúñiga Ugarte", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Durabilidad", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 115, email: "andrea_bcd@outlook.com", name: "Andrea Tamara Hernández Solís", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Neutral", attributes: "Personalización, Otro", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 116, email: "gina_efg@gmail.com", name: "Gina Paola Cárdenas Ramos", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Durabilidad", channel: "Instagram", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 117, email: "usuario147@hotmail.com", name: "Joel Raiden Linares García", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Material", channel: "Ferias o eventos", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 118, email: "mercedes_hij@yahoo.com", name: "Mercedes Bianca Torres Pérez", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 119, email: "luz_klm@outlook.com", name: "Luz Alejandra Alvarado Miranda", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 120, email: "usuario456@mail.com", name: "Orlando Wilmer Navarro Santana", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Durabilidad, Diseño", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "Más de S/. 120"},
    // Registros 121-150 (Final)
    {id: 121, email: "veronica_nop@gmail.com", name: "Verónica Carmen Quispe Flores", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 122, email: "usuario789@hotmail.com", name: "Raúl Fernando Cruz Díaz", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Rara vez", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Durabilidad", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 123, email: "karla_qrs@yahoo.com", name: "Karla Patricia Castillo Guzmán", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 124, email: "bianca_tuv@outlook.com", name: "Bianca Elena Solís Ortega", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Durabilidad, Otro", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 125, email: "usuario258@mail.com", name: "Mateo Hugo Reyes Tapia", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 126, email: "elena_wxy@gmail.com", name: "Elena Yuliana Hernández Poma", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Precio, Personalización", channel: "WhatsApp", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 127, email: "tamara_zab@hotmail.com", name: "Tamara Rosa Vega Linares", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Durabilidad, Material", channel: "TikTok", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 128, email: "usuario963@yahoo.com", name: "Nicolás Joel Alvarado Cárdenas", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Material, Precio", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 129, email: "gabriela_cde@outlook.com", name: "Gabriela Lucía Zúñiga Torres", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Personalización", channel: "Ferias o eventos", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 130, email: "paola_fgh@mail.com", name: "Paola Andrea Pérez Navarro", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "NO", sustainability: "Neutral", attributes: "Otro, Durabilidad", channel: "Otros", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 131, email: "usuario147@gmail.com", name: "Luis Raiden Ibarra Mendoza", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 132, email: "rocío_ijk@hotmail.com", name: "Rocío Fabiola García Bravo", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Durabilidad", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 133, email: "usuario852@yahoo.com", name: "Fernando Orlando Chávez Rojas", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Interesado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 134, email: "martha_lmn@outlook.com", name: "Martha Verónica Solís Ugarte", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Personalización, Otro", channel: "Instagram", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 61 – 100"},
    {id: 135, email: "usuario741@mail.com", name: "Hugo Wilmer Díaz Santana", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Neutral", attributes: "Material, Durabilidad", channel: "Ferias o eventos", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Influyente", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 136, email: "yolanda_opq@gmail.com", name: "Yolanda Keren Flores León", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Importante", attributes: "Precio, Diseño", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Poco importante", willing: "NO", priceRange: "Más de S/. 120"},
    {id: 137, email: "sofía_rst@hotmail.com", name: "Sofía Alejandra Guzmán Villacorta", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 138, email: "usuario369@yahoo.com", name: "Joel Luis Ortega Castillo", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Durabilidad, Precio", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 139, email: "fabiola_uvw@outlook.com", name: "Fabiola Gina Reyes Camacho", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "TikTok", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 140, email: "luz_xyz@mail.com", name: "Luz Mercedes Cárdenas Ramos", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "NO", sustainability: "Neutral", attributes: "Precio, Otro", channel: "Instagram", interest: "Poco interesado(a)", sentimental: "Poco", customization: "Neutral", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 141, email: "usuario159@gmail.com", name: "Raúl Mateo Linares García", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "SI", sustainability: "Muy Importante", attributes: "Personalización, Material", channel: "Ferias o eventos", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 142, email: "andrea_abc@hotmail.com", name: "Andrea Bianca Torres Pérez", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Nunca", recycled: "NO", sustainability: "Nada importante", attributes: "Durabilidad, Personalización", channel: "Otros", interest: "No, me interesaria para nada", sentimental: "Para nada influyente", customization: "Nada importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 143, email: "usuario753@yahoo.com", name: "Nicolás Orlando Alvarado Miranda", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Material, Diseño", channel: "Facebook", interest: "Interesado(a)", sentimental: "Neutral", customization: "Neutral", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 144, email: "valeria_def@outlook.com", name: "Valeria Carmen Hernández Solís", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Durabilidad", channel: "WhatsApp", interest: "Poco interesado(a)", sentimental: "Influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 30 – 60"},
    {id: 145, email: "brenda_ghi@mail.com", name: "Brenda Patricia Zúñiga Ugarte", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Femenino", frequency: "Rara vez", recycled: "SI", sustainability: "Neutral", attributes: "Personalización, Otro", channel: "TikTok", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Importante", willing: "SI", priceRange: "S/. 101 – 120"},
    {id: 146, email: "usuario486@gmail.com", name: "Wilmer Fernando Navarro Santana", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Masculino", frequency: "Más de una vez al mes", recycled: "NO", sustainability: "Muy Importante", attributes: "Material, Durabilidad", channel: "Instagram", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "Más de S/. 120"},
    {id: 147, email: "carmen_jkl@hotmail.com", name: "Carmen Tamara Quispe Flores", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Femenino", frequency: "1 vez cada 3 meses", recycled: "SI", sustainability: "Importante", attributes: "Diseño, Material", channel: "Ferias o eventos", interest: "Interesado(a)", sentimental: "Influyente", customization: "Importante", willing: "SI", priceRange: "S/. 61 – 100"},
    {id: 148, email: "usuario951@yahoo.com", name: "Hugo Joel Cruz Díaz", workArea: "Ninguna de las anteriores", age: "30 – 35 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Poco importante", attributes: "Precio, Personalización", channel: "Otros", interest: "Poco interesado(a)", sentimental: "Para nada influyente", customization: "Poco importante", willing: "NO", priceRange: "S/. 101 – 120"},
    {id: 149, email: "elena_mno@outlook.com", name: "Elena Keren Castillo Miranda", workArea: "Ninguna de las anteriores", age: "18 – 24 años", gender: "Femenino", frequency: "Nunca", recycled: "SI", sustainability: "Muy Importante", attributes: "Material, Personalización", channel: "Facebook", interest: "Muy interesado(a)", sentimental: "Muy influyente", customization: "Muy importante", willing: "SI", priceRange: "S/. 30 – 60"},
    {id: 150, email: "usuario024@mail.com", name: "Raiden Mateo Pérez Guzmán", workArea: "Ninguna de las anteriores", age: "25 – 29 años", gender: "Masculino", frequency: "1 vez al mes", recycled: "NO", sustainability: "Neutral", attributes: "Durabilidad, Diseño", channel: "WhatsApp", interest: "Ni interesado(a) ni desinteresado(a)", sentimental: "Neutral", customization: "Neutral", willing: "NO", priceRange: "Más de S/. 120"}
];

// Función para parsear fechas de Excel
function parseExcelDate(dateStr) {
    const containerHeight = modalContainer.offsetHeight;

    const trace = {
        y: Object.keys(frequencyData),
        x: Object.values(frequencyData),
        type: 'bar',
        orientation: 'h',
        marker: {
            color: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
            line: {
                color: '#ffffff',
                width: 3
            },
            opacity: 0.9
        },
        text: Object.values(frequencyData).map(val => `${val} personas`),
        textposition: 'auto',
        textfont: { size: 16, color: '#ffffff' },
        hovertemplate: '%{y}<br>Cantidad: %{x} personas<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Frecuencia de compra de accesorios',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 150, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        xaxis: {
            title: {
                text: 'Cantidad de Personas',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        yaxis: {
            title: {
                text: 'Frecuencia de Compra',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false,
            categoryorder: 'array',
            categoryarray: ['Más de una vez al mes', '1 vez al mes', '1 vez cada 3 meses', 'Rara vez', 'Nunca']
        },
        bargap: 0.3,
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Función para parsear fechas de Excel
function parseExcelDate(dateStr) {
    if (!dateStr) return null;
    
    let date;
    if (typeof dateStr === 'string') {
        // Intentar formato DD/MM/YYYY
        if (dateStr.includes('/')) {
            const [day, month, year] = dateStr.split('/').map(Number);
            date = new Date(year, month - 1, day);
        } else {
            // Intentar parsear directamente
            date = new Date(dateStr);
        }
    } else {
        date = new Date(dateStr);
    }
    
    // Validar que la fecha sea válida
    if (isNaN(date.getTime())) {
        console.warn('📊 No se pudo parsear la fecha:', dateStr);
        return null;
    }
    
    return date;
}

// Función para crear el gráfico circular de género
function createTrendChart() {
    // Configuración inicial de las trazas
    const trace = {
        values: Object.values(testData.gender),
        labels: Object.keys(testData.gender),
        type: 'pie',
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
        marker: {
            colors: [colors.primary, colors.success],
            line: {
                color: '#ffffff',
                width: 2
            }
        }
    };

    const layout = {
        autosize: true,
        height: 320,
        margin: { t: 20, b: 50, l: 20, r: 20 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 11,
            color: '#64748b'
        },
        showlegend: true,
        legend: {
            orientation: 'h',
            xanchor: 'center',
            x: 0.5,
            y: -0.15,
            font: { size: 11 }
        },
        annotations: [{
            text: 'Tipo: Gráfico de Torta (Pie)',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    // Crear la gráfica
    Plotly.newPlot('trendChart', [trace], layout, config);
}

// Gráfica de barras - Distribución por rango de edad
function createPieChart() {
    // Datos de la encuesta - Rangos de edad
    const edades = {
        '18 – 24 años': 57,
        '25 – 29 años': 40,
        '30 – 35 años': 53
    };

    // Configuración de la gráfica
    const trace = {
        x: Object.keys(edades),
        y: Object.values(edades),
        type: 'bar',
        marker: {
            color: ['#22c55e', '#3b82f6', '#f59e0b'],
            line: {
                color: '#ffffff',
                width: 2
            },
            opacity: 0.9
        },
        text: Object.values(edades).map(String),
        textposition: 'auto',
        hovertemplate: '%{x}<br>Cantidad: %{y} personas<extra></extra>'
    };

    const layout = {
        margin: { t: 20, b: 40, l: 70, r: 30 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 12,
            color: '#64748b'
        },
        xaxis: {
            title: 'Rango de Edad',
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false
        },
        yaxis: {
            title: 'Cantidad de Personas',
            automargin: true,
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false
        },
        bargap: 0.3,
        annotations: [{
            text: 'Tipo: Gráfico de Barras',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    // Crear la gráfica
    Plotly.newPlot('pieChart', [trace], layout, config);
}

// Gráfico de barras horizontales - Frecuencia de compra de accesorios
function createCategoryChart() {
    const trace = {
        y: Object.keys(frequencyData),
        x: Object.values(frequencyData),
        type: 'bar',
        orientation: 'h',
        marker: {
            color: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
            line: {
                color: '#ffffff',
                width: 2
            },
            opacity: 0.9
        },
        text: Object.values(frequencyData).map(val => `${val} personas`),
        textposition: 'auto',
        hovertemplate: '%{y}<br>Cantidad: %{x} personas<extra></extra>'
    };

    const layout = {
        margin: { t: 20, b: 40, l: 120, r: 30 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 12,
            color: '#64748b'
        },
        xaxis: {
            title: 'Cantidad de Personas',
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false
        },
        yaxis: {
            automargin: true,
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            categoryorder: 'array',
            categoryarray: ['Más de una vez al mes', '1 vez al mes', '1 vez cada 3 meses', 'Rara vez', 'Nunca']
        },
        bargap: 0.3,
        annotations: [{
            text: 'Tipo: Gráfico de Barras Horizontales',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('categoryChart', [trace], layout, config);
}

// Gráfico de picos - Canal de compra preferido
function createDefectsChart() {
    const trace = {
        type: 'scatterpolar',
        r: Object.values(sustainabilityData),
        theta: Object.keys(sustainabilityData),
        fill: 'toself',
        fillcolor: 'rgba(99, 102, 241, 0.3)',
        line: {
            color: '#6366f1',
            width: 3
        },
        marker: {
            color: '#6366f1',
            size: 8,
            line: {
                color: '#ffffff',
                width: 2
            }
        },
        text: Object.values(sustainabilityData).map(val => `${val} personas`),
        hovertemplate: '%{theta}<br>%{r} personas<extra></extra>'
    };

    const layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [0, Math.max(...Object.values(sustainabilityData)) + 5],
                tickfont: {
                    size: 10,
                    color: '#64748b'
                },
                gridcolor: 'rgba(148, 163, 184, 0.3)'
            },
            angularaxis: {
                tickfont: {
                    size: 11,
                    color: '#374151'
                },
                gridcolor: 'rgba(148, 163, 184, 0.3)'
            }
        },
        margin: { t: 30, b: 30, l: 30, r: 30 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 12,
            color: '#64748b'
        },
        annotations: [{
            text: 'Tipo: Gráfico Radar',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('defectsChart', [trace], layout, config);
}

// Crear gráfico de picos para canal de compra preferido
function createBurndownChart() {
    const trace = {
        x: Object.keys(channelData),
        y: Object.values(channelData),
        type: 'scatter',
        mode: 'markers+lines',
        marker: {
            size: 18,
            color: Object.values(channelData),
            colorscale: [
                [0, '#ef4444'],
                [0.2, '#f59e0b'],
                [0.4, '#eab308'],
                [0.6, '#22c55e'],
                [0.8, '#3b82f6'],
                [1, '#8b5cf6']
            ],
            line: {
                color: '#ffffff',
                width: 2
            },
            symbol: 'diamond'
        },
        line: {
            color: '#6366f1',
            width: 3,
            shape: 'spline'
        },
        text: Object.values(channelData).map(val => `${val} personas`),
        textposition: 'top center',
        textfont: {
            size: 12,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '%{x}<br>%{y} personas<extra></extra>'
    };

    const layout = {
        title: {
            text: '',
            font: { size: 16, color: '#374151' }
        },
        xaxis: {
            title: '',
            tickangle: -45,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 10 },
            automargin: true
        },
        yaxis: {
            title: '',
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 10 }
        },
        margin: { t: 30, b: 80, l: 40, r: 20 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 12,
            color: '#64748b'
        },
        annotations: [{
            text: 'Tipo: Gráfico de Picos (Spike)',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('burndownChart', [trace], layout, config);
}

// Crear gráfico donut para experiencias con materiales reciclados
function createCoverageChart() {
    const trace = {
        values: Object.values(recycledMaterialsData),
        labels: Object.keys(recycledMaterialsData),
        type: 'pie',
        hole: 0.5,  // Esto crea el efecto donut
        marker: {
            colors: ['#10b981', '#ef4444'],  // Verde para Sí, Rojo para No
            line: {
                color: '#ffffff',
                width: 2
            }
        },
        textinfo: 'label+percent+value',
        textposition: 'auto',
        textfont: {
            size: 12,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '%{label}<br>%{value} personas (%{percent})<extra></extra>'
    };

    const layout = {
        title: {
            text: '',
            font: { size: 16, color: '#374151' }
        },
        margin: { t: 20, b: 20, l: 20, r: 20 },
        showlegend: true,
        legend: {
            orientation: 'h',
            x: 0.5,
            xanchor: 'center',
            y: -0.1,
            font: { size: 12 }
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 12,
            color: '#64748b'
        },
        annotations: [{
            text: 'Tipo: Gráfico Donut',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('coverageChart', [trace], layout, config);
}

// Crear gráfico sunburst para interés en morral con jeans reciclados
function createInterestChart() {
    // Crear estructura jerárquica para sunburst
    const categories = Object.keys(interestData);
    const values = Object.values(interestData);
    
    // Preparar datos para sunburst con jerarquía Centro -> Categorías -> Subcategorías
    const ids = ['Centro', ...categories];
    const labels = ['Interés Total', ...categories];
    const parents = ['', ...Array(categories.length).fill('Centro')];
    const sunburstValues = [values.reduce((a, b) => a + b, 0), ...values];
    
    const trace = {
        type: 'sunburst',
        ids: ids,
        labels: labels,
        parents: parents,
        values: sunburstValues,
        branchvalues: 'total',
        hovertemplate: '<b>%{label}</b><br>Personas: %{value}<br>Porcentaje: %{percentParent:.1%}<extra></extra>',
        text: ['Interés Total<br>150<br>100.0%', ...categories.map((cat, i) => `${cat}<br>${values[i]}<br>${(values[i]/150*100).toFixed(1)}%`)],
        textinfo: 'text',
        marker: {
            colorscale: [
                [0, '#ef4444'],    // Rojo para negativo
                [0.2, '#f97316'],  // Naranja
                [0.4, '#eab308'],  // Amarillo para neutral
                [0.6, '#22c55e'],  // Verde claro
                [0.8, '#16a34a'],  // Verde oscuro para muy positivo
                [1, '#6366f1']     // Azul para el centro
            ],
            line: {
                color: '#ffffff',
                width: 2
            }
        },
        leaf: {
            opacity: 0.8
        }
    };

    const layout = {
        title: {
            text: '',
            font: { size: 16, color: '#374151' }
        },
        margin: { t: 20, b: 20, l: 20, r: 20 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 11,
            color: '#64748b'
        },
        annotations: [{
            text: 'Tipo: Gráfico Sunburst',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('interestChart', [trace], layout, config);
}

// Gráfico de Burbujas - Disposición de pago
function createPaymentChart() {
    const categories = Object.keys(paymentData);
    const counts = categories.map(cat => paymentData[cat].count);
    const percentages = categories.map(cat => paymentData[cat].percentage);
    
    const trace = {
        x: categories,
        y: percentages,
        mode: 'markers',
        marker: {
            size: counts.map(count => count * 0.8), // Escalar el tamaño de las burbujas
            color: counts,
            colorscale: [
                [0, '#fecaca'],      // Rojo claro para valores bajos
                [0.3, '#fed7aa'],    // Naranja claro
                [0.5, '#fde68a'],    // Amarillo claro
                [0.7, '#bbf7d0'],    // Verde claro
                [1, '#a7f3d0']       // Verde para valores altos
            ],
            showscale: true,
            colorbar: {
                title: "Cantidad de personas",
                titleside: "right",
                tickmode: "linear",
                tick0: 0,
                dtick: 10
            },
            line: {
                color: '#ffffff',
                width: 2
            },
            opacity: 0.8
        },
        text: counts.map((count, i) => `${categories[i]}<br>${count} personas<br>${percentages[i]}%`),
        textposition: 'middle center',
        hovertemplate: '<b>%{text}</b><extra></extra>',
        type: 'scatter'
    };

    const layout = {
        title: {
            text: '',
            font: { size: 16, color: '#374151' }
        },
        xaxis: {
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            automargin: true
        },
        yaxis: {
            title: 'Porcentaje (%)',
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            range: [0, Math.max(...percentages) + 5]
        },
        margin: { t: 20, b: 60, l: 60, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 11,
            color: '#64748b'
        },
        height: 280,
        annotations: [{
            text: 'Tipo: Gráfico de Burbujas',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('paymentChart', [trace], layout, config);
}

// Disposición de Pago - Barras SI/NO
function createPaymentRangeChart() {
    const categories = Object.keys(paymentWillingnessData);
    const counts = categories.map(cat => paymentWillingnessData[cat].count);
    const percentages = categories.map(cat => paymentWillingnessData[cat].percentage);
    
    const trace = {
        x: categories,
        y: counts,
        type: 'bar',
        marker: {
            color: ['#10b981', '#ef4444'], // Verde para SI, Rojo para NO
            opacity: 0.8,
            line: {
                color: ['#059669', '#dc2626'],
                width: 2
            }
        },
        text: counts.map((count, i) => `${count}<br>(${percentages[i]}%)`),
        textposition: 'auto',
        hovertemplate: '<b>%{x}</b><br>Personas: %{y}<br>Porcentaje: %{text}<extra></extra>'
    };

    const layout = {
        title: {
            text: '',
            font: { size: 14, color: '#374151' }
        },
        xaxis: {
            title: 'Respuesta',
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 10 }
        },
        yaxis: {
            title: 'Número de Personas',
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 10 }
        },
        margin: { t: 20, b: 50, l: 50, r: 20 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 10,
            color: '#64748b'
        },
        height: 280,
        annotations: [{
            text: 'Tipo: Gráfico de Barras',
            x: 1,
            y: 0,
            xref: 'paper',
            yref: 'paper',
            xanchor: 'right',
            yanchor: 'bottom',
            showarrow: false,
            font: {
                size: 9,
                color: '#9ca3af'
            }
        }]
    };

    const config = {
        responsive: true,
        displayModeBar: false
    };

    Plotly.newPlot('paymentRangeChart', [trace], layout, config);
}

// Función para inicializar el dashboard
function initializeDashboard() {
    // Crear las gráficas cuando el documento esté listo
    createPieChart();
    createTrendChart();
    createCategoryChart();
    createDefectsChart();
    createBurndownChart();
    createCoverageChart();
    createInterestChart();
    createPaymentChart();
    createPaymentRangeChart();
    // Llenar la tabla con los datos de la encuesta
    populateSurveyTable();
    // Configurar los event listeners de paginación
    setupPaginationEventListeners();
}

// Función para llenar la tabla con los datos de la encuesta
let currentPage = 1;
let itemsPerPage = 5;

function populateSurveyTable(page = 1, items = 5) {
    const tableBody = document.getElementById('defectsTableBody');
    if (!tableBody) return;
    
    currentPage = page;
    itemsPerPage = items;
    
    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Calcular índices para paginación
    const startIndex = (page - 1) * items;
    const endIndex = startIndex + items;
    const dataToShow = surveyData.slice(startIndex, endIndex);
    
    dataToShow.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.email}</td>
            <td>${record.name}</td>
            <td>${record.workArea}</td>
            <td>${record.age}</td>
            <td>${record.gender}</td>
            <td>${record.frequency}</td>
            <td>${record.recycled}</td>
            <td>${record.sustainability}</td>
            <td>${record.attributes}</td>
            <td>${record.channel}</td>
            <td>${record.interest}</td>
            <td>${record.sentimental}</td>
            <td>${record.customization}</td>
            <td>${record.willing}</td>
            <td>${record.priceRange}</td>
        `;
        tableBody.appendChild(row);
    });
    
    // Actualizar información de paginación
    updatePaginationInfo();
    updatePaginationControls();
}

// Función para actualizar la información de paginación
function updatePaginationInfo() {
    const paginationInfo = document.getElementById('defectsPaginationInfo');
    if (!paginationInfo) return;
    
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, surveyData.length);
    const totalRecords = surveyData.length;
    
    paginationInfo.textContent = `Mostrando ${startIndex}-${endIndex} de ${totalRecords} registros`;
}

// Función para actualizar los controles de paginación
function updatePaginationControls() {
    const totalPages = Math.ceil(surveyData.length / itemsPerPage);
    const prevBtn = document.getElementById('defectsPrevPageBtn');
    const nextBtn = document.getElementById('defectsNextPageBtn');
    const pageNumbers = document.getElementById('defectsPageNumbers');
    
    // Actualizar botones anterior/siguiente
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
    
    // Generar números de página
    if (pageNumbers) {
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.onclick = () => populateSurveyTable(i, itemsPerPage);
            pageNumbers.appendChild(pageBtn);
        }
    }
}

// Función para configurar los event listeners de paginación
function setupPaginationEventListeners() {
    // Selector de elementos por página
    const itemsPerPageSelect = document.getElementById('defectsItemsPerPageSelect');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', function() {
            const newItemsPerPage = parseInt(this.value);
            populateSurveyTable(1, newItemsPerPage);
        });
    }
    
    // Botón anterior
    const prevBtn = document.getElementById('defectsPrevPageBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                populateSurveyTable(currentPage - 1, itemsPerPage);
            }
        });
    }
    
    // Botón siguiente
    const nextBtn = document.getElementById('defectsNextPageBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(surveyData.length / itemsPerPage);
            if (currentPage < totalPages) {
                populateSurveyTable(currentPage + 1, itemsPerPage);
            }
        });
    }
}

// Mapeo de tipos de gráficos con sus descripciones
const chartTypeDescriptions = {
    'pie': 'Gráfico de Barras Verticales',
    'trend': 'Gráfico de Pie',
    'category': 'Gráfico de Barras Horizontales',
    'defects': 'Gráfico Radar',
    'burndown': 'Gráfico de Picos (Spike)',
    'coverage': 'Gráfico de Donut',
    'interest': 'Gráfico de Densidad Circular',
    'payment': 'Gráfico de Burbujas',
    'paymentRange': 'Gráfico de Barras Verticales'
};

// Función para expandir gráficos en modal
function expandChart(chartType, chartTitle) {
    const modal = document.getElementById('chartModal');
    const modalTitle = document.getElementById('chartModalTitle');
    const modalContainer = document.getElementById('chartModalContainer');
    
    // Configurar título del modal con tipo de gráfico
    const chartTypeDescription = chartTypeDescriptions[chartType] || 'Gráfico';
    modalTitle.innerHTML = `
        <div class="modal-title-content">
            <div class="main-title">${chartTitle}</div>
            <div class="chart-type-label">${chartTypeDescription}</div>
        </div>
    `;
    
    // Limpiar contenedor anterior
    modalContainer.innerHTML = '';
    
    // Crear div para el gráfico expandido
    const expandedChartDiv = document.createElement('div');
    expandedChartDiv.id = `${chartType}ChartExpanded`;
    expandedChartDiv.style.width = '100%';
    expandedChartDiv.style.height = '100%';
    expandedChartDiv.style.display = 'flex';
    expandedChartDiv.style.alignItems = 'center';
    expandedChartDiv.style.justifyContent = 'center';
    expandedChartDiv.style.position = 'relative';
    modalContainer.appendChild(expandedChartDiv);
    
    // Mostrar modal
    modal.style.display = 'flex';
    
    // Recrear el gráfico en el modal con configuración expandida
    setTimeout(() => {
        if (chartType === 'pie') {
            createExpandedPieChart(expandedChartDiv.id);
        } else if (chartType === 'trend') {
            createExpandedTrendChart(expandedChartDiv.id);
        } else if (chartType === 'category') {
            createExpandedCategoryChart(expandedChartDiv.id);
        } else if (chartType === 'defects') {
            createExpandedDefectsChart(expandedChartDiv.id);
        } else if (chartType === 'burndown') {
            createExpandedBurndownChart(expandedChartDiv.id);
        } else if (chartType === 'coverage') {
            createExpandedCoverageChart(expandedChartDiv.id);
        } else if (chartType === 'interest') {
            createExpandedInterestChart(expandedChartDiv.id);
        } else if (chartType === 'payment') {
            createExpandedPaymentChart(expandedChartDiv.id);
        } else if (chartType === 'paymentRange') {
            createExpandedPaymentRangeChart(expandedChartDiv.id);
        }
        
        // Forzar el centrado después del renderizado
        setTimeout(() => {
            const plotDiv = document.getElementById(expandedChartDiv.id);
            if (plotDiv) {
                // Obtener dimensiones reales del contenedor
                const modalContainer = document.getElementById('chartModalContainer');
                const containerWidth = modalContainer.offsetWidth;
                const containerHeight = modalContainer.offsetHeight;
                
                // Configurar redimensionamiento según el tipo de gráfico
                let relayoutConfig = {
                    width: containerWidth - 40,
                    height: containerHeight - 40,
                    'margin.t': 80,
                    'margin.b': 80
                };

                if (chartType === 'category') {
                    // Para gráficos horizontales, necesitamos más margen izquierdo
                    relayoutConfig['margin.l'] = 150;
                    relayoutConfig['margin.r'] = 80;
                } else if (chartType === 'defects') {
                    // Para gráficos donut, márgenes equilibrados
                    relayoutConfig['margin.l'] = 80;
                    relayoutConfig['margin.r'] = 80;
                } else if (chartType === 'burndown') {
                    // Para gráficos de picos, márgenes estándar
                    relayoutConfig['margin.l'] = 80;
                    relayoutConfig['margin.r'] = 80;
                    relayoutConfig['margin.b'] = 120; // Más espacio abajo para etiquetas rotadas
                } else if (chartType === 'coverage') {
                    // Para gráficos donut, márgenes equilibrados
                    relayoutConfig['margin.l'] = 80;
                    relayoutConfig['margin.r'] = 80;
                } else if (chartType === 'interest') {
                    // Para gráficos de líneas, márgenes estándar con más espacio abajo para etiquetas rotadas
                    relayoutConfig['margin.l'] = 80;
                    relayoutConfig['margin.r'] = 80;
                    relayoutConfig['margin.b'] = 120;
                } else {
                    // Para otros gráficos
                    relayoutConfig['margin.l'] = 80;
                    relayoutConfig['margin.r'] = 80;
                }
                
                // Redimensionar el gráfico para usar todo el espacio disponible
                Plotly.relayout(expandedChartDiv.id, relayoutConfig);
                
                // Forzar el centrado del SVG
                setTimeout(() => {
                    const svgs = plotDiv.querySelectorAll('svg');
                    svgs.forEach(svg => {
                        svg.style.cssText = `
                            margin: 0 auto !important;
                            display: block !important;
                            position: relative !important;
                            left: 50% !important;
                            transform: translateX(-50%) !important;
                        `;
                    });
                }, 100);
            }
        }, 300);
    }, 150);
}

// Función para cerrar el modal
function closeChartModal(event) {
    if (!event || event.target === event.currentTarget) {
        document.getElementById('chartModal').style.display = 'none';
    }
}

// Crear versión expandida del gráfico de distribución por edad
function createExpandedPieChart(containerId) {
    const edades = {
        '18 – 24 años': 57,
        '25 – 29 años': 40,
        '30 – 35 años': 54
    };

    const trace = {
        x: Object.keys(edades),
        y: Object.values(edades),
        type: 'bar',
        marker: {
            color: ['#22c55e', '#3b82f6', '#f59e0b'],
            line: {
                color: '#ffffff',
                width: 2
            },
            opacity: 0.9
        },
        text: Object.values(edades).map(String),
        textposition: 'auto',
        hovertemplate: '%{x}<br>Cantidad: %{y} personas<extra></extra>'
    };

    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const layout = {
        title: {
            text: 'Distribución por Rango de Edad',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 80, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        xaxis: {
            title: {
                text: 'Rango de Edad',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        yaxis: {
            title: {
                text: 'Cantidad de Personas',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        bargap: 0.3,
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico de género
function createExpandedTrendChart(containerId) {
    const trace = {
        values: Object.values(testData.gender),
        labels: Object.keys(testData.gender),
        type: 'pie',
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
        marker: {
            colors: [colors.primary, colors.success],
            line: {
                color: '#ffffff',
                width: 3
            }
        }
    };

    const layout = {
        title: {
            text: 'Distribución por Género',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        autosize: true,
        margin: { t: 80, b: 80, l: 60, r: 60 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        showlegend: true,
        legend: {
            orientation: 'h',
            xanchor: 'center',
            x: 0.5,
            y: -0.1,
            font: { size: 16 }
        }
    };

    const config = {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico de frecuencia de compra
function createExpandedCategoryChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const trace = {
        y: Object.keys(frequencyData),
        x: Object.values(frequencyData),
        type: 'bar',
        orientation: 'h',
        marker: {
            color: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
            line: {
                color: '#ffffff',
                width: 3
            },
            opacity: 0.9
        },
        text: Object.values(frequencyData).map(val => `${val} personas`),
        textposition: 'auto',
        textfont: { size: 16, color: '#ffffff' },
        hovertemplate: '%{y}<br>Cantidad: %{x} personas<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Frecuencia de compra de accesorios',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 150, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        xaxis: {
            title: {
                text: 'Cantidad de Personas',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        yaxis: {
            title: {
                text: 'Frecuencia de Compra',
                font: { size: 18, color: '#374151' }
            },
            tickangle: 0,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false,
            categoryorder: 'array',
            categoryarray: ['Más de una vez al mes', '1 vez al mes', '1 vez cada 3 meses', 'Rara vez', 'Nunca']
        },
        bargap: 0.3,
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico radar de percepción sobre sostenibilidad
function createExpandedDefectsChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const trace = {
        type: 'scatterpolar',
        r: Object.values(sustainabilityData),
        theta: Object.keys(sustainabilityData),
        fill: 'toself',
        fillcolor: 'rgba(99, 102, 241, 0.4)',
        line: {
            color: '#6366f1',
            width: 4
        },
        marker: {
            color: '#6366f1',
            size: 12,
            line: {
                color: '#ffffff',
                width: 3
            }
        },
        text: Object.values(sustainabilityData).map(val => `${val} personas`),
        hovertemplate: '%{theta}<br>%{r} personas<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Percepción sobre Sostenibilidad',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        polar: {
            radialaxis: {
                visible: true,
                range: [0, Math.max(...Object.values(sustainabilityData)) + 5],
                tickfont: {
                    size: 14,
                    color: '#64748b'
                },
                gridcolor: 'rgba(148, 163, 184, 0.3)',
                linecolor: 'rgba(148, 163, 184, 0.5)'
            },
            angularaxis: {
                tickfont: {
                    size: 16,
                    color: '#374151'
                },
                gridcolor: 'rgba(148, 163, 184, 0.3)',
                linecolor: 'rgba(148, 163, 184, 0.5)'
            }
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 80, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico de picos para canal de compra
function createExpandedBurndownChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const trace = {
        x: Object.keys(channelData),
        y: Object.values(channelData),
        type: 'scatter',
        mode: 'markers+lines',
        marker: {
            size: 24,
            color: Object.values(channelData),
            colorscale: [
                [0, '#ef4444'],
                [0.2, '#f59e0b'],
                [0.4, '#eab308'],
                [0.6, '#22c55e'],
                [0.8, '#3b82f6'],
                [1, '#8b5cf6']
            ],
            line: {
                color: '#ffffff',
                width: 3
            },
            symbol: 'diamond'
        },
        line: {
            color: '#6366f1',
            width: 4,
            shape: 'spline'
        },
        text: Object.values(channelData).map(val => `${val} personas`),
        textposition: 'top center',
        textfont: {
            size: 16,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '%{x}<br>%{y} personas<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Canal de Compra Preferido',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        xaxis: {
            title: {
                text: 'Canal de Compra',
                font: { size: 18, color: '#374151' }
            },
            tickangle: -45,
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        yaxis: {
            title: {
                text: 'Número de Personas',
                font: { size: 18, color: '#374151' }
            },
            gridcolor: 'rgba(148, 163, 184, 0.1)',
            zeroline: false,
            tickfont: { size: 14 },
            automargin: false
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 120, l: 80, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico donut de experiencias con materiales reciclados
function createExpandedCoverageChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const trace = {
        values: Object.values(recycledMaterialsData),
        labels: Object.keys(recycledMaterialsData),
        type: 'pie',
        hole: 0.4,  // Donut más grande para el modal
        marker: {
            colors: ['#10b981', '#ef4444'],  // Verde para Sí, Rojo para No
            line: {
                color: '#ffffff',
                width: 3
            }
        },
        textinfo: 'label+percent+value',
        textposition: 'auto',
        textfont: {
            size: 16,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '%{label}<br>%{value} personas (%{percent})<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Experiencias con materiales reciclados',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 80, r: 80 },
        showlegend: true,
        legend: {
            orientation: 'v',
            x: 1.02,
            xanchor: 'left',
            y: 0.5,
            yanchor: 'middle',
            font: { size: 16 }
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico sunburst de interés en morral reciclado
function createExpandedInterestChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    // Crear estructura jerárquica para sunburst expandido
    const categories = Object.keys(interestData);
    const values = Object.values(interestData);
    
    // Preparar datos para sunburst con jerarquía más detallada
    const ids = ['Centro', ...categories];
    const labels = ['Interés Total', ...categories];
    const parents = ['', ...Array(categories.length).fill('Centro')];
    const sunburstValues = [values.reduce((a, b) => a + b, 0), ...values];
    
    const trace = {
        type: 'sunburst',
        ids: ids,
        labels: labels,
        parents: parents,
        values: sunburstValues,
        branchvalues: 'total',
        hovertemplate: '<b>%{label}</b><br>Personas: %{value}<br>Porcentaje: %{percentParent:.1%}<extra></extra>',
        text: ['Interés Total<br>150<br>100.0%', ...categories.map((cat, i) => `${cat}<br>${values[i]}<br>${(values[i]/150*100).toFixed(1)}%`)],
        textinfo: 'text',
        marker: {
            colorscale: [
                [0, '#ef4444'],    // Rojo para negativo
                [0.2, '#f97316'],  // Naranja
                [0.4, '#eab308'],  // Amarillo para neutral
                [0.6, '#22c55e'],  // Verde claro
                [0.8, '#16a34a'],  // Verde oscuro para muy positivo
                [1, '#6366f1']     // Azul para el centro
            ],
            line: {
                color: '#ffffff',
                width: 3
            }
        },
        leaf: {
            opacity: 0.9
        },
        textfont: {
            size: 16,
            family: 'Inter, sans-serif'
        }
    };

    const layout = {
        title: {
            text: 'Interés en morral con jeans reciclados',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 80, b: 80, l: 80, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 16,
            color: '#64748b'
        },
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del gráfico bubble de disposición de pago
function createExpandedPaymentChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const categories = Object.keys(paymentData);
    const counts = categories.map(cat => paymentData[cat].count);
    const percentages = categories.map(cat => paymentData[cat].percentage);
    
    const trace = {
        x: categories,
        y: percentages,
        mode: 'markers+text',
        marker: {
            size: counts.map(count => count * 1.2), // Burbujas más grandes en modal
            color: counts,
            colorscale: [
                [0, '#fecaca'],      // Rojo claro para valores bajos
                [0.3, '#fed7aa'],    // Naranja claro
                [0.5, '#fde68a'],    // Amarillo claro
                [0.7, '#bbf7d0'],    // Verde claro
                [1, '#a7f3d0']       // Verde para valores altos
            ],
            showscale: true,
            colorbar: {
                title: "Cantidad de personas",
                titleside: "right",
                tickmode: "linear",
                tick0: 0,
                dtick: 10,
                len: 0.8,
                thickness: 20
            },
            line: {
                color: '#ffffff',
                width: 3
            },
            opacity: 0.8
        },
        text: counts.map((count, i) => `${count}<br>${percentages[i]}%`),
        textposition: 'middle center',
        textfont: {
            size: 14,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '<b>%{x}</b><br>Personas: %{text}<br>Porcentaje: %{y}%<extra></extra>',
        type: 'scatter'
    };

    const layout = {
        title: {
            text: 'Rango de Precio Dispuesto a Pagar - Distribución por Rangos',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        xaxis: {
            title: {
                text: 'Rango de Precio',
                font: { size: 18, color: '#374151' }
            },
            gridcolor: 'rgba(148, 163, 184, 0.2)',
            zeroline: false,
            automargin: true,
            tickfont: { size: 14 }
        },
        yaxis: {
            title: {
                text: 'Porcentaje (%)',
                font: { size: 18, color: '#374151' }
            },
            gridcolor: 'rgba(148, 163, 184, 0.2)',
            zeroline: false,
            range: [0, Math.max(...percentages) + 8],
            tickfont: { size: 14 }
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 120, b: 100, l: 100, r: 120 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 14,
            color: '#64748b'
        },
        autosize: false
    };

    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Crear versión expandida del box plot de disposición a pagar
function createExpandedPaymentRangeChart(containerId) {
    // Obtener el tamaño del contenedor modal
    const modalContainer = document.getElementById('chartModalContainer');
    const containerWidth = modalContainer.offsetWidth;
    const containerHeight = modalContainer.offsetHeight;

    const categories = Object.keys(paymentWillingnessData);
    const counts = categories.map(cat => paymentWillingnessData[cat].count);
    const percentages = categories.map(cat => paymentWillingnessData[cat].percentage);
    
    const trace = {
        x: categories,
        y: counts,
        type: 'bar',
        marker: {
            color: ['#10b981', '#ef4444'], // Verde para SI, Rojo para NO
            opacity: 0.8,
            line: {
                color: ['#059669', '#dc2626'],
                width: 3
            }
        },
        text: counts.map((count, i) => `${count}<br>(${percentages[i]}%)`),
        textposition: 'auto',
        textfont: {
            size: 16,
            color: '#374151',
            family: 'Inter, sans-serif'
        },
        hovertemplate: '<b>%{x}</b><br>Personas: %{y}<br>Porcentaje: %{text}<extra></extra>'
    };

    const layout = {
        title: {
            text: 'Disposición de Pago - ¿Estaría dispuesto a pagar por un morral ecológico?',
            font: { size: 24, color: '#374151' },
            x: 0.5,
            y: 0.95
        },
        xaxis: {
            title: {
                text: 'Respuesta',
                font: { size: 18, color: '#374151' }
            },
            gridcolor: 'rgba(148, 163, 184, 0.2)',
            zeroline: false,
            tickfont: { size: 16 }
        },
        yaxis: {
            title: {
                text: 'Número de Personas',
                font: { size: 18, color: '#374151' }
            },
            gridcolor: 'rgba(148, 163, 184, 0.2)',
            zeroline: false,
            tickfont: { size: 16 }
        },
        width: containerWidth - 40,
        height: containerHeight - 40,
        margin: { t: 120, b: 100, l: 100, r: 80 },
        showlegend: false,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: {
            family: 'Inter, sans-serif',
            size: 14,
            color: '#64748b'
        },
        autosize: false
    };
    const config = {
        responsive: false,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['autoScale2d', 'lasso2d', 'select2d']
    };

    // Obtener el elemento contenedor y forzar el centrado
    const container = document.getElementById(containerId);
    if (container) {
        container.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
        `;
    }

    Plotly.newPlot(containerId, [trace], layout, config);
}

// Función principal - Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initializeDashboard);
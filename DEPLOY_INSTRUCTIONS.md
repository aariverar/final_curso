# 🚀 Instrucciones para Activar GitHub Pages

## Pasos para publicar el dashboard:

### 1. **Activar GitHub Pages**
1. Ve a tu repositorio en GitHub: https://github.com/aariverar/final_curso
2. Haz clic en **"Settings"** (Configuración)
3. Scroll hacia abajo hasta la sección **"Pages"**
4. En **"Source"**, selecciona **"GitHub Actions"**
5. El workflow se ejecutará automáticamente

### 2. **Verificar el Deployment**
- Ve a la pestaña **"Actions"** en tu repositorio
- Verás el workflow **"Deploy BlueBag Dashboard to GitHub Pages"** ejecutándose
- Una vez completado (✅), tu sitio estará disponible en:
  
  **🌐 https://aariverar.github.io/final_curso/**

### 3. **Configuraciones Automáticas Incluidas**

#### **📋 GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- ✅ Deployment automático a GitHub Pages
- ✅ Validación de archivos HTML/CSS/JS
- ✅ Verificación de calidad del código
- ✅ Build y deploy en cada push a master

#### **📦 Archivos de Configuración**
- ✅ `package.json` - Metadatos del proyecto
- ✅ `_config.yml` - Configuración de GitHub Pages
- ✅ `.gitignore` - Exclusión de archivos innecesarios
- ✅ `README.md` - Documentación completa

### 4. **Actualizaciones Futuras**
Cada vez que hagas cambios y ejecutes:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

El sitio se actualizará automáticamente en 2-3 minutos.

### 5. **Solución de Problemas**
Si el sitio no carga:
1. Verifica que el workflow en **Actions** haya terminado exitosamente
2. Asegúrate de que **GitHub Pages** esté configurado con **"GitHub Actions"**
3. Revisa que el archivo `index.html` esté en la raíz del repositorio

---

## 🎯 **URL Final del Dashboard**
Una vez activado, tu dashboard estará disponible en:
**https://aariverar.github.io/final_curso/**

## 📞 **Soporte**
Abraham Rivera - arivera_scb@santander.com.pe
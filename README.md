# Portfolio Personal

Un portfolio personal minimalista y elegante construido con React, TypeScript y Emotion.

## Características

- Diseño minimalista y elegante
- Tema oscuro con tonos plateados
- Totalmente responsive
- Animaciones suaves con Framer Motion
- Optimizado para rendimiento
- Fácil de personalizar

## Tecnologías Utilizadas

- React
- TypeScript
- Emotion (Styled Components)
- Framer Motion
- Vite

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio.git
```

2. Instala las dependencias:
```bash
cd portfolio
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Personalización

1. Modifica los componentes en la carpeta `src/components/` para personalizar el contenido.
2. Actualiza las imágenes en la carpeta `public/`.
3. Modifica los colores en `src/index.css` para cambiar la paleta de colores.
4. Actualiza los enlaces en el componente `Contact.tsx` con tus redes sociales.

## Despliegue en GitHub Pages

1. Añade la siguiente configuración en `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/tu-usuario.github.io/',
  // ... resto de la configuración
})
```

2. Instala gh-pages:
```bash
npm install gh-pages --save-dev
```

3. Añade los siguientes scripts en `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Despliega tu portfolio:
```bash
npm run deploy
```

## Estructura del Proyecto

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Licencia

MIT

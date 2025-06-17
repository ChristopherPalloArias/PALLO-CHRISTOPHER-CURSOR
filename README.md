# SIIU APP - Desarrollo con Cursor

Este proyecto representa la implementación de una aplicación móvil estudiantil utilizando Cursor como IDE principal. La aplicación es una reimaginación moderna del Sistema Integrado de Información Universitaria (SIIU), desarrollada con React Native y Expo.

## 👨‍💻 Autor

**Christopher Pallo -**
SI10 P01 – Sistemas de Información -
Universidad Central del Ecuador

## Proceso de Desarrollo con Cursor

El desarrollo de esta aplicación se realizó utilizando Cursor, un IDE potenciado por IA que facilitó significativamente el proceso de desarrollo. Algunas de las ventajas clave de usar Cursor en este proyecto fueron:

- **Generación Asistida de Código**: Utilización de IA para generar componentes y estructuras de código base.
- **Refactorización Inteligente**: Mejoras automáticas en la calidad y estructura del código.
- **Debugging Eficiente**: Identificación y corrección rápida de errores con ayuda de la IA.
- **Completado de Código Contextual**: Sugerencias inteligentes basadas en el contexto del proyecto.

## Del Diseño a la Implementación

### Comparativa de Pantallas

<table>
<tr>
    <td><b>Diseño en Figma</b></td>
    <td><b>Implementación Final</b></td>
</tr>
<tr>
    <td>
        <img src="assets/figma/home.png" alt="Pantalla de Inicio - Diseño Figma" width="400"/>
        <p align="center"><i>Pantalla de Inicio</i></p>
    </td>
    <td>
        <img src="assets/screenshots/home.jpeg" alt="Pantalla de Inicio - Implementación" width="400"/>
        <p align="center"><i>Pantalla de Inicio</i></p>
    </td>
</tr>
<tr>
    <td>
        <img src="assets/figma/carnet.png" alt="Carnet Estudiantil - Diseño Figma" width="400"/>
        <p align="center"><i>Carnet Estudiantil</i></p>
    </td>
    <td>
        <img src="assets/screenshots/carnet.jpeg" alt="Carnet Estudiantil - Implementación" width="400"/>
        <p align="center"><i>Carnet Estudiantil</i></p>
    </td>
</tr>
<tr>
    <td>
        <img src="assets/figma/menu.png" alt="Menú Principal - Diseño Figma" width="400"/>
        <p align="center"><i>Menú Principal</i></p>
    </td>
    <td>
        <img src="assets/screenshots/menu.jpeg" alt="Menú Principal - Implementación" width="400"/>
        <p align="center"><i>Menú Principal</i></p>
    </td>
</tr>
<tr>
    <td>
        <img src="assets/figma/perfil.png" alt="Perfil de Usuario - Diseño Figma" width="400"/>
        <p align="center"><i>Perfil de Usuario</i></p>
    </td>
    <td>
        <img src="assets/screenshots/perfil.jpeg" alt="Perfil de Usuario - Implementación" width="400"/>
        <p align="center"><i>Perfil de Usuario</i></p>
    </td>
</tr>
<tr>
    <td>
        <img src="assets/figma/bot.png" alt="Bot Asistente - Diseño Figma" width="400"/>
        <p align="center"><i>Bot Asistente</i></p>
    </td>
    <td>
        <img src="assets/screenshots/bot.jpeg" alt="Bot Asistente - Implementación" width="400"/>
        <p align="center"><i>Bot Asistente</i></p>
    </td>
</tr>
<tr>
    <td>
        <img src="assets/figma/menulateral.png" alt="Menú Lateral - Diseño Figma" width="400"/>
        <p align="center"><i>Menú Lateral</i></p>
    </td>
    <td>
        <img src="assets/screenshots/menulateral.jpeg" alt="Menú Lateral - Implementación" width="400"/>
        <p align="center"><i>Menú Lateral</i></p>
    </td>
</tr>
</table>

## 🛠️ Tecnologías Utilizadas
- React Native
- Expo
- TypeScript
- React Navigation
- Expo Vector Icons

## 📁 Estructura del Proyecto
```
app/
├── (tabs)/
│   ├── home.tsx
│   ├── carnet.tsx
│   ├── menu.tsx
│   ├── perfil.tsx
│   └── bot.tsx
├── components/
│   ├── Header.tsx
│   ├── SlideBar.tsx
│   └── [otros componentes]
└── assets/
    ├── figma/
    │   └── [capturas de diseño]
    ├── screenshots/
    │   └── [capturas de implementación]
    └── app/
        └── [recursos de la aplicación]
```

## 🚀 Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone https://github.com/ChristopherPalloArias/PALLO-CHRISTOPHER-CURSOR.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar la aplicación:
```bash
npx expo start
```

## 💡 Comparativa de Desarrollo

### Ventajas del Uso de Cursor
- Desarrollo más rápido y eficiente
- Generación de código consistente
- Integración natural con React Native y TypeScript
- Facilidad en la implementación de componentes complejos
- Debugging asistido por IA

### Retos y Soluciones
- **Reto 1**: Implementación del menú deslizable
  - *Solución*: Uso de animaciones nativas y estados controlados
- **Reto 2**: Diseño responsive del carnet
  - *Solución*: Implementación de dimensiones relativas y flexbox
- **Reto 3**: Integración del chat bot
  - *Solución*: Desarrollo de interfaz modular y sistema de mensajería

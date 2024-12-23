export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de la arquitectura <em>back-end</em> para aplicaciones con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Arquitectura MVVM',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Entornos de desarrollo integrado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Conceptos básicos de aplicaciones <em>web</em>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Persistencia y gestión de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Persistencia de datos locales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases de datos externas y en tiempo real',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Implementación de estructuras de almacenamiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo de APIs RESTful y modelos de IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Codificación de APIs RESTful',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Integración de modelos de inteligencia artificial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'APIs y herramientas para el desarrollo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo de interfaces y pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño de interfaces con Jetpack Compose',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estilos, temas y material design',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Desarrollo y pruebas de aplicaciones <em>web</em>',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Pruebas Unitarias y Documentación',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228141_CF11_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Arquitectura <em>back-end</em> para aplicaciones con IA',
    Description:
      'Este componente aborda las arquitecturas y prácticas esenciales para el desarrollo <em>back-end</em> de aplicaciones con inteligencia artificial. Explora los fundamentos de MVVM y persistencia de datos, la implementación de APIs RESTful y la integración de modelos de IA. Incluye diseño de interfaces con Jetpack Compose y metodologías de pruebas, proporcionando herramientas clave para construir aplicaciones robustas y escalables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
}

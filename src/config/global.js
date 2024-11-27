export default {
  global: {
    componenteFormativo:
      'Arquitectura <em>back-end</em> para aplicaciones con IA',
    descripcionCurso:
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
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema:
        '1. Fundamentos de la arquitectura <em>back-end</em> para aplicaciones con IA',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 5). <em>Backend y Frontend</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ygzDmMLAoGk<',
    },
    {
      tema: '2. Persistencia y gestión de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, julio 27). <em>Arquitectura de tres niveles</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y9a9__7QEfs',
    },
    {
      tema: '2. Persistencia y gestión de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 24 septiembre). <em>Desarrollo de aplicaciones web fullstack</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wxE-QYhNtLc',
    },
    {
      tema: '2. Persistencia y gestión de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, agosto 26). <em>Gestión de bases de datos NoSQL con MongoDB</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=60v7aYMVLyk',
    },
    {
      tema: '3. Desarrollo de APIs RESTful y modelos de IA',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, agosto 26). <em>Construcción de API RESTful con Node.js</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GEgsJSgEPAk',
    },
    {
      tema: '4. Desarrollo de interfaces y pruebas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022c, noviembre 18). <em>Pruebas unitarias</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=40b_UpuUbKo',
    },
    {
      tema: '4. Desarrollo de interfaces y pruebas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022d, noviembre 22). <em>Ejemplo de prueba unitaria</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JtjLG40i-LI',
    },
  ],
  glosario: [
    {
      termino: 'MVVM (Modelo-Vista-VistaModelo)',
      significado:
        'Un patrón de arquitectura de <em>software</em> que separa la aplicación en tres componentes: el Modelo (datos y lógica de negocio), la Vista (interfaz de usuario) y el VistaModelo (lógica de presentación que conecta el Modelo y la Vista). Facilita el mantenimiento y la escalabilidad de aplicaciones con interfaces complejas.',
    },
    {
      termino: 'Retrofit',
      significado:
        'Biblioteca de cliente HTTP para Android y Java que simplifica las solicitudes y respuestas HTTP. Permite interactuar con APIs RESTful de manera eficiente, manejando automáticamente la serialización y deserialización de datos.',
    },
    {
      termino: 'Corrutinas',
      significado:
        'Característica de Kotlin que permite escribir código asíncrono de manera secuencial. Facilita el manejo de operaciones que consumen tiempo, como solicitudes de red o acceso a bases de datos, sin bloquear el hilo principal de la aplicación.',
    },
    {
      termino: 'Clean Architecture',
      significado:
        'Enfoque de arquitectura de <em>software</em> que promueve la separación de responsabilidades en capas independientes. Mejora la mantenibilidad, escalabilidad y testabilidad al aislar la lógica de negocio de los detalles de implementación y <em>frameworks</em>.',
    },
    {
      termino: 'SharedPreferences',
      significado:
        'Mecanismo de almacenamiento en Android que permite guardar datos simples en pares clave-valor. Es ideal para almacenar configuraciones, preferencias del usuario y pequeñas cantidades de información persistente.',
    },
    {
      termino: 'SQLite',
      significado:
        'Sistema de gestión de bases de datos relacional, liviano y de código abierto. Integrado en Android, permite almacenar y manipular datos estructurados localmente en el dispositivo sin necesidad de un servidor externo.',
    },
    {
      termino: 'Room',
      significado:
        'Biblioteca de persistencia de datos de Android que actúa como una capa de abstracción sobre SQLite. Simplifica las operaciones de base de datos utilizando objetos y anotaciones, facilitando el acceso a datos y reduciendo errores.',
    },
    {
      termino: 'Firebase Realtime Database',
      significado:
        'Base de datos NoSQL en tiempo real alojada en la nube de Firebase. Permite sincronizar y almacenar datos en formato JSON entre múltiples clientes de manera instantánea, con soporte para operaciones en línea y fuera de línea.',
    },
    {
      termino: 'API RESTful',
      significado:
        'Interfaz de programación que sigue los principios REST (Representational State Transfer). Utiliza métodos HTTP estándar como GET, POST, PUT y DELETE para permitir la comunicación y manipulación de recursos entre clientes y servidores.',
    },
    {
      termino: 'GSON',
      significado:
        'Biblioteca de Java desarrollada por Google para convertir objetos Java en su representación JSON y viceversa. Facilita el manejo de datos al interactuar con servicios <em>web</em> que utilizan JSON como formato de intercambio.',
    },
    {
      termino: 'Jetpack Compose',
      significado:
        'Kit de herramientas moderno y declarativo para construir interfaces de usuario en Android. Simplifica el desarrollo de UI al permitir definir componentes de forma intuitiva y reactiva, actualizando automáticamente la interfaz ante cambios en los datos.',
    },
    {
      termino: 'Material Design',
      significado:
        'Sistema de diseño creado por Google que proporciona directrices, componentes y patrones visuales para crear interfaces de usuario consistentes, intuitivas y atractivas en aplicaciones móviles y <em>web</em>.',
    },
    {
      termino: 'Pruebas Unitarias',
      significado:
        'Tipo de pruebas de <em>software</em> que verifica el funcionamiento correcto de componentes individuales o unidades de código (como funciones o métodos). Aseguran que cada parte cumple con los requisitos y funciona aisladamente de otras partes del sistema.',
    },
    {
      termino: 'Entorno de Desarrollo Integrado (IDE)',
      significado:
        'Aplicación que proporciona un conjunto completo de herramientas para el desarrollo de software en una sola interfaz. Incluye editor de código, depurador, compilador y otras utilidades que facilitan la programación.',
    },
    {
      termino: 'EventBus',
      significado:
        'Biblioteca para Android que implementa un sistema de publicación y suscripción de eventos. Permite la comunicación eficiente entre componentes de la aplicación (como actividades y fragmentos) sin crear dependencias directas, reduciendo el acoplamiento y mejorando la modularidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barbara, J. (2023). Practical C++ Backend Programming: Crafting Databases, APIs, and <em>Web<7em> Servers for High-Performance Backend. GitforGits.',
      link: '',
    },
    {
      referencia:
        'Borrego, A., Bermudo, M., Sola, F., Ayala, D., Hernández, I., & Ruiz, D. (2022). Silence — A <em>web framework</em> for an agile generation of RESTful APIs. SoftwareX, 20.',
      link: 'https://doi.org/10.1016/j.softx.2022.101260',
    },
    {
      referencia:
        'Firebase. (s. f.). Firebase Realtime Database. Firebase Documentation. Recuperado el 16 de octubre de 2023, de',
      link: 'https://firebase.google.com/docs/database ',
    },
    {
      referencia:
        'Google Developers. (s. f.). Biblioteca de persistencia Room. Android Developers. Recuperado el 16 de octubre de 2023, de',
      link: 'https://developer.android.com/training/data-storage/room ',
    },
    {
      referencia:
        'Google Developers. (s. f.). Guía de arquitectura de aplicaciones. Android Developers. Recuperado el 16 de octubre de 2023, de ',
      link: 'https://developer.android.com/jetpack/guide ',
    },
    {
      referencia:
        'Google Developers. (s. f.). Introducción a Jetpack Compose. Android Developers. ',
      link: '',
    },
    {
      referencia:
        'Google Developers. (s. f.). Pruebas de aplicaciones. Android Developers. Recuperado el 16 de octubre de 2023, de ',
      link: 'https://developer.android.com/training/testing ',
    },
    {
      referencia:
        'Herdiyatmoko, H. F. (2022). <em>BACK-END</em> SYSTEM DESIGN BASED ON REST API. Jurnal Teknik Informasi Dan Komputer (Tekinkom), 5(1), 123.',
      link: 'https://doi.org/10.37600/tekinkom.v5i1.401',
    },
    {
      referencia:
        'JetBrains. (s. f.). Guía de corrutinas de Kotlin. Documentación de Kotlin.',
      link: '',
    },
    {
      referencia:
        'Kaluža, M., Kalanj, M., & Vukelić, B. (2019). A comparison of <em>back-end frameworks for web</em> application development. Zbornik Veleučilišta u Rijeci, 7(1), 317–332. ',
      link: 'https://doi.org/10.31784/zvr.7.1.10',
    },
    {
      referencia:
        'Marquez-Soto, P. (2022). Backend Developer in 30 Days: Acquire Skills on API Designing, Data Management, Application Testing, Deployment, Security and Performance Optimization (English Edition). BPB Publications.',
      link: '',
    },
    {
      referencia:
        "Martín, R. C. (2018). Clean Architecture: A Craftsman's Guide to Software Structure and Design. Prentice Hall.",
      link: '',
    },
    {
      referencia:
        'Nurhayati, E., & Agussalim, A. (2023). Rancang Bangun <em>Back-end</em> API pada Aplikasi Mobile AyamHub Menggunakan <em>Framework</em> Node JS Express. Jurnal Sistem Dan Teknologi Informasi (JustIN), 11(3), 524.',
      link: 'https://doi.org/10.26418/justin.v11i3.66823',
    },
    {
      referencia:
        'Ormaechea, S., & Delgado, P. (2020). Desarrollo de aplicaciones con Android Jetpack. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Square, Inc. (s. f.). Retrofit. Square Open Source. Recuperado el 16 de octubre de 2023, de ',
      link: 'https://square.github.io/retrofit/ ',
    },
    {
      referencia:
        'Vílchez, B., & Elizabeth, R. (2019). Arquitectura de back end con amazon web services (AWS) para sistemas escolares.',
      link: '',
    },
  ],
}

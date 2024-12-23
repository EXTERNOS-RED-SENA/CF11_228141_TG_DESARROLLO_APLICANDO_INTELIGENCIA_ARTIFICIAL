<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la arquitectura #[em back-end] para aplicaciones con IA
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.png")
      .col-lg(data-aos="fade-left" style="place-self:center;")
        p.mb-0 La arquitectura #[em back-end] es el cimiento sobre el cual se construyen aplicaciones sólidas y escalables que incorporan inteligencia artificial. Comprender sus fundamentos es esencial para desarrollar sistemas eficientes y mantenibles. En este capítulo, se explorarán los conceptos clave de la arquitectura Modelo-Vista-VistaModelo (MVVM), la importancia de los entornos de desarrollo integrados y los componentes básicos de las aplicaciones #[em web].
    
    Separador
    
    .cont_1_1 

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_1 1.1	Arquitectura MVVM
      
      .row
        .col-lg(data-aos="fade-right")
          p El patrón de arquitectura Modelo-Vista-VistaModelo, conocido como MVVM, es una metodología que promueve la separación de responsabilidades en el desarrollo de #[em software]. Este enfoque divide la aplicación en tres componentes principales: el Modelo, la Vista y el VistaModelo.
          .p-4.p-md-3.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/3.svg")
              .col-md(style="place-self:center;")
                p.mb-0 El Modelo representa los datos y la lógica de negocio de la aplicación. Es la capa donde se manejan las operaciones y reglas que definen el comportamiento del sistema. Por ejemplo, en una aplicación de predicción del clima, el Modelo gestionaría los datos meteorológicos y las reglas para interpretarlos.
          p.mb-0.mt-4 La Vista es la interfaz de usuario. Es lo que el usuario ve y con lo que interactúa. La Vista presenta los datos del Modelo de forma visual y captura las interacciones del usuario, como clics o entradas de texto.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/4.png")
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/5.png")
        .col-lg(data-aos="fade-left")
          p El VistaModelo actúa como un intermediario entre el Modelo y la Vista. Gestiona la lógica de presentación y maneja las comunicaciones entre la interfaz de usuario y la lógica de negocio. El VistaModelo procesa las entradas del usuario, interactúa con el Modelo y actualiza la Vista en consecuencia.
          .p-4(style="background-color:#DED5DB;border-radius:7px;")
            p.mb-0 Implementar MVVM ofrece varias ventajas. En primer lugar, permite una separación clara de responsabilidades, lo que facilita el mantenimiento y la escalabilidad de la aplicación. Al tener componentes independientes, es más sencillo realizar pruebas unitarias y detectar errores. Además, MVVM favorece la reutilización de código, ya que el VistaModelo puede ser utilizado por diferentes Vistas, y el Modelo puede servir a múltiples VistaModelos.
          p.mt-4.mb-0 Para implementar MVVM en aplicaciones que interactúan con APIs, es común utilizar herramientas como Retrofit y corrutinas. Retrofit es una biblioteca que simplifica las llamadas HTTP, permitiendo consumir servicios #[em web] de forma eficiente. Por su parte, las corrutinas de Kotlin ofrecen una forma más sencilla y manejable de realizar operaciones asíncronas.
    
      .row.mt-4
        .col-lg(data-aos="fade-right")
          p Al integrar Retrofit con corrutinas, se puede realizar llamadas a servicios #[em web] sin bloquear el hilo principal de la aplicación. Esto mejora la experiencia del usuario al mantener la interfaz de usuario receptiva mientras se realizan operaciones en segundo plano. Por ejemplo, una aplicación de mensajería puede utilizar corrutinas para enviar y recibir mensajes sin interrumpir la interacción del usuario con la interfaz.
          .p-4.p-md-3.mt-4(style="background-color:#E6FBEE;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/6.svg")
              .col-md(style="place-self:center;")
                p.mb-0 La Clean Architecture complementa el patrón MVVM al proponer una estructura en capas que separa aún más las responsabilidades. Divide la aplicación en capas de Presentación, Dominio y Datos. La capa de Presentación incluye la Vista y el VistaModelo, la capa de Dominio contiene la lógica de negocio pura, y la capa de Datos maneja el acceso a fuentes de datos como bases de datos o servicios #[em web].
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/7.png")
    
    p.mt-4(data-aos="fade-right") La combinación de MVVM con Clean Architecture facilita la creación de aplicaciones modulares y mantenibles. Cada capa puede desarrollarse y probarse de forma independiente, lo que reduce la complejidad y mejora la calidad del #[em software].

    .col-xl-8.m-auto.col-lg-11.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 1.
        span Beneficios de MVVM y Clean Architecture
      .tabla-a.color-acento-contenido(data-aos="fade-up")
        table
          caption.mt-2.fw-normal #[strong Fuente:] OIT, 2024.
          thead(style="border:0;")
            tr.text-center(style="background-color:#13DE61;")
              th(style="border:0;border-right:1px #AFAFAF solid;") Beneficio
              th(style="border:0;") Descripción
          tbody.text-center
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Separación de responsabilidades
              td(style="border:0;") Cada componente tiene una función clara, lo que facilita el mantenimiento y la escalabilidad.
            tr(style="background-color:#fff;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Mejora en las pruebas
              td(style="border:0;") La independencia de las capas permite realizar pruebas unitarias más efectivas.
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Reutilización de código
              td(style="border:0;") Los componentes pueden ser reutilizados en diferentes partes de la aplicación o en proyectos futuros.
            tr(style="background-color:#fff;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Facilidad de mantenimiento
              td(style="border:0;") Los cambios en una capa tienen un impacto mínimo en las demás, simplificando las actualizaciones.
            
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2	Entornos de desarrollo integrado
    
    p(data-aos="fade-right") El desarrollo de aplicaciones #[em back-end] para inteligencia artificial requiere de herramientas que faciliten la escritura, depuración y mantenimiento del código. Los entornos de desarrollo integrados (IDEs) proporcionan un conjunto de utilidades que mejoran la productividad y la calidad del #[em software].

    .row.mt-4
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/8.png")
      .col-lg(data-aos="fade-left")
        .row
          .col-lg
            .p-4.d-flex.align-content-center.h-100.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 Entre los IDEs más utilizados se encuentran Visual Studio Code, Spyder-IDE y PyCharm. Visual Studio Code es un editor de código fuente ligero y extensible, compatible con múltiples lenguajes y plataformas. Ofrece características como resaltado de sintaxis, autocompletado, depuración y una amplia gama de extensiones que pueden adaptarse a las necesidades del proyecto.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/9.svg")
        p.mt-4.mb-0 Spyder-IDE es un entorno de desarrollo específico para Python, orientado a científicos de datos y analistas. Incluye herramientas para la edición de código, ejecución interactiva y visualización de datos, lo que lo hace ideal para proyectos de inteligencia artificial y aprendizaje automático.
    
    .row.mt-4
      .col-lg(data-aos="fade-right")
        p PyCharm, también enfocado en Python, es un IDE completo que ofrece potentes herramientas para el desarrollo #[em web] y científico. Proporciona soporte para #[em frameworks] populares, integración con sistemas de control de versiones y capacidades avanzadas de depuración y pruebas.
        .p-4.p-md-3.mt-4(style="background-color:#EDE9EC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/10.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La estructura de un proyecto en estos entornos suele organizarse en módulos y archivos que reflejan la arquitectura de la aplicación. Los módulos agrupan funcionalidades relacionadas y facilitan la navegación y el mantenimiento del código. Por ejemplo, un módulo puede contener todas las clases y funciones relacionadas con la gestión de usuarios, mientras que otro maneja la interacción con la base de datos.
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/11.png")
    
    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/12.png")
      .col-lg(data-aos="fade-left")
        p Los IDEs ofrecen vistas del proyecto que permiten explorar y gestionar los archivos y recursos de manera eficiente. Además, cuentan con ventanas de herramientas y paneles de navegación que proporcionan acceso rápido a funciones como la depuración, ejecución de pruebas, control de versiones y terminal integrada.
        p.mb-0 Conocer y aprovechar las funcionalidades del IDE seleccionado es fundamental para el desarrollo efectivo. Por ejemplo, utilizar atajos de teclado, configurar el entorno para el análisis estático del código y personalizar el editor puede ahorrar tiempo y reducir errores.

    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3	Conceptos básicos de aplicaciones #[em web]
    
    p(data-aos="fade-right") Las aplicaciones #[em web] modernas están compuestas por varios componentes que interactúan para ofrecer funcionalidades complejas y una experiencia de usuario fluida. Entender estos componentes es esencial para desarrollar aplicaciones #[em back-end] que integren inteligencia artificial de manera efectiva.
    p(data-aos="fade-left") Una aplicación suele constar de:

    .row.mt-4
      .col-lg(data-aos="fade-right")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Actividades")
            p En el contexto de aplicaciones móviles y #[em web], una actividad representa una pantalla o interfaz con la que el usuario interactúa. Gestiona el ciclo de vida de la interfaz y maneja eventos como la creación, pausa y destrucción.
          .row.col-xl-11.m-auto(titulo="Servicios")
            p Son procesos en segundo plano que realizan tareas sin necesidad de interacción directa con el usuario. Por ejemplo, un servicio puede sincronizar datos con un servidor remoto o procesar información recibida.
          .row.col-xl-11.m-auto(titulo="Receptores de mensajes de distribución")
            p También conocidos como #[em Broadcast Receivers], permiten que la aplicación responda a eventos del sistema o de otras aplicaciones. Pueden detectar cambios en la conectividad de red, recibir notificaciones de mensajes entrantes o reaccionar a alarmas programadas.
          .row.col-xl-11.m-auto(titulo="Proveedores de contenidos")
            p Facilitan el intercambio de datos entre aplicaciones de manera segura y controlada. Permiten acceder y modificar datos almacenados en una aplicación desde otra, siempre que se tengan los permisos adecuados.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/13.png")

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/14.png")
      .col-lg(data-aos="fade-left")
        p Estos componentes trabajan en conjunto para ofrecer funcionalidades complejas. Por ejemplo, una aplicación de noticias puede utilizar un servicio en segundo plano para descargar los últimos artículos, un receptor de mensajes para notificar al usuario cuando hay contenido nuevo, y actividades para mostrar los artículos y permitir la interacción.
        .p-4.p-md-3.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/15.svg")
            .col-md(style="place-self:center;")
              p.mb-0 En el desarrollo #[em back-end], es importante diseñar la interacción entre estos componentes de forma eficiente. La gestión adecuada de los servicios y receptores puede mejorar el rendimiento y la usabilidad de la aplicación. Además, garantizar la seguridad y privacidad en el intercambio de datos mediante proveedores de contenidos es esencial para proteger la información del usuario.
        p.mt-4.mb-0 Cuando se integran componentes de inteligencia artificial, como modelos de aprendizaje automático, es común que el #[em back-end] deba manejar procesamiento intensivo de datos. Es fundamental optimizar estas operaciones para no afectar la experiencia del usuario. Utilizar técnicas de procesamiento asíncrono y manejar adecuadamente los hilos de ejecución ayuda a mantener la aplicación receptiva.
    
    p.mt-4(data-aos="fade-right") En resumen, este capítulo ha presentado los fundamentos esenciales para desarrollar una arquitectura #[em back-end] sólida en aplicaciones con inteligencia artificial. La comprensión y aplicación del patrón MVVM, complementado con la #[em Clean Architecture], permite crear sistemas modulares y mantenibles. El uso de entornos de desarrollo integrados adecuados potencia la productividad y calidad del código.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/16.svg")
          .col-md(style="place-self:center;")
            p.mb-0 Además, conocer los componentes básicos de las aplicaciones #[em web] y cómo interactúan es clave para diseñar soluciones eficientes y escalables. A medida que se avanza en el desarrollo de aplicaciones con inteligencia artificial, estos conceptos servirán como base para abordar desafíos más complejos y crear experiencias de usuario de alta calidad.
        .p-4.mt-4(style="background-color:#EDE9EC;border-radius:7px;")
          p.mb-0 En los siguientes capítulos, se profundizará en temas como la persistencia y gestión de datos, el desarrollo de APIs RESTful y la creación de interfaces de usuario avanzadas. Estos conocimientos complementarán lo aprendido hasta ahora y permitirán construir aplicaciones completas que aprovechen al máximo las capacidades de la inteligencia artificial.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/17.png")



      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

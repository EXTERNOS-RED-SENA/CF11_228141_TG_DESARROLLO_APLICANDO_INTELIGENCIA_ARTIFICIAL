<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro1.png")
      .col-lg(data-aos="fade-left")
        .row
          .col-lg-7
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 La arquitectura #[em back-end] es el pilar fundamental en el desarrollo de aplicaciones que incorporan inteligencia artificial. Una arquitectura sólida garantiza el rendimiento y la escalabilidad del sistema, mientras facilita la integración eficiente de modelos de IA, permitiendo que las aplicaciones sean más inteligentes y responsivas.
          .col-lg-5.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro2.svg")
        p.mb-0.mt-4 Este componente aborda de manera sistemática los componentes clave de la arquitectura #[em back-end] para aplicaciones con IA, desde los fundamentos del patrón MVVM hasta las prácticas avanzadas en el desarrollo de APIs RESTful. Se exploran técnicas para la persistencia y gestión de datos, la implementación de modelos de IA en el servidor y la creación de interfaces de usuario modernas con Jetpack Compose.
    
    .row.mt-4
      .col-lg(data-aos="fade-right")
        p A lo largo de estas páginas, se examinan metodologías actuales y prácticas comprobadas que permiten construir sistemas robustos y escalables. Se hace hincapié en la importancia de las pruebas y la documentación, reconociendo que una aplicación de calidad es el resultado de un código bien estructurado y exhaustivamente probado.
        .p-4.p-md-3(style="background-color:#EDE9EC;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/intro3.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La combinación de conceptos teóricos con ejemplos prácticos proporciona las herramientas necesarias para enfrentar los desafíos reales en el desarrollo #[em back-end] de aplicaciones con inteligencia artificial. Como reza un principio fundamental en ingeniería de #[em software]: “Una aplicación es tan fuerte como su arquitectura subyacente”.
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro4.png")
    
    p.mt-4(data-aos="fade-up") ¡Lo invitamos a emprender este viaje por las técnicas y prácticas esenciales de la arquitectura #[em back-end] para aplicaciones con IA!

    figure.mt-4(data-aos="zoom-in-up" data-aos-duration="700")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VfgjwGLltYA" title="Arquitectura back-end para aplicaciones con IA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

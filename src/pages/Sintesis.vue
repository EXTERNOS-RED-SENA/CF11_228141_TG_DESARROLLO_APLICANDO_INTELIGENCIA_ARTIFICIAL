<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col-lg(data-aos="fade-right")
        .row
          .col-lg-5.d-none.d-lg-block
            figure
              img(src="@/assets/curso/sintesis1.png")
          .col-lg-7
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 El diagrama representa la estructura integral del componente sobre arquitectura #[em back-end] para aplicaciones con inteligencia artificial. Partiendo del concepto central de arquitectura #[em back-end], se ramifica en cuatro áreas esenciales: fundamentos de arquitectura, persistencia y gestión de datos, desarrollo de APIs RESTful e IA, e interfaces y pruebas. Cada área incorpora subtemas específicos que constituyen los elementos fundamentales para construir aplicaciones robustas y escalables que integran inteligencia artificial.
        p.mb-0.mt-4 Esta organización ilustra el flujo lógico del proceso de desarrollo, desde la comprensión de patrones arquitectónicos como MVVM y Clean Architecture, pasando por la gestión eficiente de datos locales y en la nube, hasta la creación de APIs que incorporan modelos de IA. Finalmente, se aborda el diseño de interfaces modernas con Jetpack Compose y la importancia de las pruebas y documentación para asegurar la calidad y mantenibilidad del #[em software].
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis2.png")
    
    .row.mt-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/sintesis3.svg")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        .h-100.p-4.d-flex-align-content-center(style="border:1px #1169E3 solid;border-radius:11px;")
          p.mb-0 El diagrama funciona como una hoja de ruta visual para comprender la estructura y alcance del componente, permitiendo al lector visualizar rápidamente la progresión del aprendizaje y las conexiones entre los diferentes temas. Se sugiere utilizarlo como referencia para organizar el estudio y entender cómo se integran los diversos aspectos en el desarrollo #[em back-end] de aplicaciones con inteligencia artificial.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure(data-aos="fade-up" data-aos-duration="800")
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Desarrollo de APIs RESTful y modelos de IA
    
    .cont_3_1
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/1.svg")
        .col-lg(data-aos="zoom-in")
          .p-4.d-flex.align-content-center.h-100.flex-wrap(style="background-color:#DED5DB;")
            p.mb-0 El desarrollo de APIs RESTful es fundamental para permitir la comunicación eficiente entre el cliente y el servidor en aplicaciones modernas, especialmente aquellas que integran inteligencia artificial. Este capítulo explora cómo codificar APIs RESTful, integrar modelos de IA en ellas y utilizar herramientas clave que facilitan el proceso de desarrollo.
        .col-lg-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/2.png")
      

      Separador
    
      .titulo-segundo(data-aos="flip-up")
        h2#t_3_1 3.1	Codificación de APIs RESTful
      
      p(data-aos="fade-right") Las APIs RESTful (#[em Representational State Transfer]) son interfaces que permiten a las aplicaciones comunicarse con servicios #[em web] utilizando protocolos HTTP estándar. Al diseñar una API para un modelo de inteligencia artificial, es esencial seguir principios que garanticen su eficiencia, escalabilidad y facilidad de uso.

      .row.mt-4
        .col-lg-8(data-aos="fade-right")
          .p-4.p-md-3.d-flex.align-content-center.h-100.flex-wrap(style="background-color:#CFF8DE;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema3/4.svg")
              .col-md(style="place-self:center;")
                p.mb-0 La creación de una API comienza con la definición clara de los recursos que se expondrán y las operaciones que se permitirán sobre ellos. Por ejemplo, si se desarrolla una aplicación que ofrece recomendaciones de películas basadas en preferencias del usuario, la API podría incluir recursos como “usuarios”, “películas” y “recomendaciones”. Cada recurso se manipula a través de métodos HTTP como GET, POST, PUT y DELETE, que corresponden a operaciones de lectura, creación, actualización y eliminación respectivamente.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/5.png")
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/6.png")
        .col-lg(data-aos="fade-left")
          p Es importante adoptar estándares de codificación y patrones de diseño que aseguren la consistencia y mantenibilidad de la API. Utilizar convenciones de nomenclatura coherentes para las rutas y parámetros facilita la comprensión y uso por parte de otros desarrolladores. Además, implementar el manejo adecuado de errores y códigos de estado HTTP permite que los clientes de la API gestionen las respuestas de manera efectiva.
          .p-4(style="background-color:#DED5DB;border-radius:7px;")
            p.mb-0 Las pruebas son una parte integral del desarrollo de APIs. Herramientas como Postman y Hoppscotch permiten enviar solicitudes HTTP a la API y verificar las respuestas. Con ellas, es posible simular diferentes escenarios, probar la autenticación y asegurar que los #[em endpoints] funcionen correctamente bajo diversas condiciones. Estas herramientas también facilitan la documentación de la API, proporcionando ejemplos claros de cómo interactuar con ella.
      
      Separador
    
      .titulo-segundo(data-aos="flip-up")
        h2#t_3_2 3.2	Integración de modelos de inteligencia artificial
    
    p(data-aos="fade-right") La incorporación de modelos de inteligencia artificial en una API añade un nivel de complejidad y potencia adicional. Estos modelos pueden ofrecer funcionalidades avanzadas como reconocimiento de voz, análisis de imágenes o predicciones basadas en datos.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/7.png")
      .col-lg(data-aos="fade-left")
        p Para implementar un modelo de IA en una API, primero es necesario entrenar el modelo utilizando datos relevantes y asegurarse de que su rendimiento cumple con los requisitos de la aplicación. Una vez entrenado, el modelo se integra en el servidor donde reside la API. Esto implica garantizar que las dependencias y bibliotecas necesarias estén disponibles en el entorno de ejecución.
        .p-4(style="background-color:#CFE1FA;border-radius:7px;")
          p.mb-0 Al diseñar el #[em endpoint] que expondrá las capacidades del modelo, se deben considerar los formatos de entrada y salida de datos. Por ejemplo, si el modelo analiza imágenes, el #[em endpoint] debe aceptar archivos de imagen en un formato específico y devolver resultados en un formato estructurado como JSON. Es importante también manejar casos de error, como entradas no válidas o excepciones durante la ejecución del modelo.
    
    p.mt-4(data-aos="fade-right") Existen varios requerimientos y consideraciones clave al integrar modelos de IA en APIs:

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/8.png")
      .col-lg(data-aos="fade-left")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Escalabilidad")
            p Los modelos de IA pueden ser intensivos en recursos. Es esencial diseñar la API para que pueda escalar horizontalmente, distribuyendo la carga entre múltiples servidores si es necesario.
          .row.col-xl-11.m-auto(titulo="Latencia")
            p Los tiempos de respuesta deben ser aceptables para los usuarios. Optimizar el rendimiento del modelo y utilizar técnicas como la caché pueden ayudar a reducir la latencia.
          .row.col-xl-11.m-auto(titulo="Seguridad")
            p Al manipular datos potencialmente sensibles, es vital implementar medidas de seguridad robustas, como la autenticación y autorización adecuadas, y proteger contra ataques como la inyección de código.
          .row.col-xl-11.m-auto(titulo="Mantenimiento y actualización")
            p Los modelos de IA pueden requerir actualizaciones periódicas para mantener su precisión. Es importante planificar cómo se desplegarán estas actualizaciones sin interrumpir el servicio.
    
    .row.mt-4
      .col-md-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/9.svg")
      .col-md(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Un ejemplo práctico de integración podría ser un servicio de traducción en tiempo real. El modelo de IA se entrena para traducir texto de un idioma a otro. La API expone un #[em endpoint] al que se envía texto en el idioma original y devuelve la traducción. Para garantizar un rendimiento óptimo, el modelo podría optimizarse utilizando técnicas de compresión o implementarse en un entorno de ejecución especializado como #[em TensorFlow Serving].
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3	APIs y herramientas para el desarrollo
    
    .row
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/10.png")
      .col-lg(data-aos="fade-left")
        p El uso de herramientas y bibliotecas adecuadas puede simplificar significativamente el desarrollo y mantenimiento de APIs. En el contexto de aplicaciones móviles y #[em web], Retrofit y GSON de Google son dos componentes esenciales.
        .row
          .col-lg
            .p-4.d-flex.align-content-center.h-100.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 Retrofit es una biblioteca para Android que facilita las solicitudes HTTP y la interacción con APIs RESTful. Permite definir interfaces en el código que representan los #[em endpoints] de la API, y luego, mediante anotaciones, especificar los métodos HTTP y rutas correspondientes. Retrofit maneja la serialización y deserialización de datos, lo que simplifica el manejo de las respuestas y solicitudes.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema3/11.png")

    .row.mt-4
      .col-lg(data-aos="fade-right")
        p Por su parte, GSON es una biblioteca que permite convertir objetos Java en su representación JSON y viceversa. Al trabajar con Retrofit, GSON se utiliza para transformar automáticamente las respuestas JSON de la API en objetos que pueden manipularse en la aplicación. Esto reduce el código necesario para procesar los datos y minimiza errores asociados con el #[em parsing] manual.
        .p-4.p-md-3(style="background-color:#E6FBEE;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/12.svg")
            .col-md(style="place-self:center;")
              p.mb-0 Otra herramienta importante es la Cloud Storage API, que proporciona acceso a servicios de almacenamiento en la nube. Esto es útil cuando la aplicación necesita manejar archivos grandes o una cantidad significativa de datos que no es práctico almacenar localmente. Integrar esta API permite cargar, descargar y gestionar archivos de manera segura y eficiente.
        .row.mt-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema3/13.png")
          .col-lg
            p.mb-0 El EventBus es una biblioteca que facilita la comunicación entre diferentes componentes de la aplicación, especialmente en arquitecturas donde los componentes están desacoplados. Al publicar y suscribirse a eventos, se pueden notificar cambios o acciones sin crear dependencias directas entre clases. Esto mejora la modularidad y mantenibilidad del código.
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/14.png")
    
    p.mt-4(data-aos="fade-right") La introducción a Android Pay (actualmente conocido como Google Pay) es relevante para aplicaciones que requieren procesar pagos. Integrar esta funcionalidad implica utilizar APIs específicas que manejan transacciones de manera segura, cumpliendo con estándares de seguridad y regulaciones financieras. Proporcionar una forma sencilla y confiable de realizar pagos mejora la experiencia del usuario y puede ser determinante para el éxito de la aplicación.

    .col-xl-8.m-auto.col-lg-11.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 2.
        span Comparación de herramientas para el desarrollo de APIs
      .tabla-a.color-acento-contenido(data-aos="fade-up")
        table
          caption.mt-2.fw-normal #[strong Fuente:] OIT, 2024.
          thead(style="border:0;")
            tr.text-center(style="background-color:#13DE61;")
              th(style="border:0;border-right:1px #AFAFAF solid;") Herramienta
              th(style="border:0;border-right:1px #AFAFAF solid;") Función Principal
              th(style="border:0;") Beneficios
          tbody.text-center
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Retrofit
              td(style="border:0;border-right:1px #AFAFAF solid;") Cliente HTTP para Android
              td(style="border:0;") Simplifica solicitudes y respuestas
            tr(style="background-color:#fff;")
              td(style="border:0;border-right:1px #AFAFAF solid;") GSON
              td(style="border:0;border-right:1px #AFAFAF solid;") Serialización y deserialización JSON
              td(style="border:0;") Manejo automático de datos
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Cloud Storage API
              td(style="border:0;border-right:1px #AFAFAF solid;") Almacenamiento en la nube
              td(style="border:0;") Gestión eficiente de archivos
            tr(style="background-color:#fff;")
              td(style="border:0;border-right:1px #AFAFAF solid;") EventBus
              td(style="border:0;border-right:1px #AFAFAF solid;") Comunicación entre componentes
              td(style="border:0;") Desacoplamiento y modularidad
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Google Pay
              td(style="border:0;border-right:1px #AFAFAF solid;") Procesamiento de pagos en la aplicación
              td(style="border:0;") Seguridad y facilidad de uso

    .row.mt-5
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/15.png")
      .col-lg(data-aos="fade-left")
        p En resumen, el desarrollo de APIs RESTful y la integración de modelos de inteligencia artificial son componentes esenciales en la creación de aplicaciones modernas y sofisticadas. Al seguir prácticas recomendadas en la codificación de APIs, utilizar herramientas adecuadas y considerar cuidadosamente los aspectos de integración de IA, es posible construir sistemas robustos, escalables y eficientes.
        .p-4.p-md-3(style="background-color:#EDE9EC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/16.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La capacidad de las APIs para conectar diferentes partes de una aplicación y permitir la interacción con servicios externos amplía significativamente las posibilidades de lo que se puede lograr. La inteligencia artificial añade una capa adicional de funcionalidad avanzada, permitiendo ofrecer experiencias personalizadas y soluciones inteligentes a problemas complejos.
    
    p.mt-4(data-aos="fade-right") Al continuar explorando estas tecnologías y perfeccionando las habilidades en su implementación, los desarrolladores pueden crear aplicaciones que no solo satisfagan las necesidades actuales de los usuarios, sino que también estén preparadas para adaptarse a futuros avances y demandas en el campo de la tecnología.



</template>

<script>
export default {
  name: 'Tema3',
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

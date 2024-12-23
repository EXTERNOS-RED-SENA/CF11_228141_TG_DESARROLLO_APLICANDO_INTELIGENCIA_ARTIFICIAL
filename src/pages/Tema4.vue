<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Desarrollo de interfaces y pruebas
    
    .p-4.p-md-3(style="background-color:#E6F0FC;border-radius:7px;" data-aos="fade-up" data-aos-duration="750")
      .row
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema4/1.svg")
        .col-md(style="place-self:center;")
          p.mb-0 El desarrollo de interfaces de usuario efectivas y la realización de pruebas exhaustivas son componentes esenciales en la creación de aplicaciones con inteligencia artificial. Una interfaz bien diseñada facilita la interacción del usuario con la aplicación, mientras que las pruebas aseguran que el sistema funcione correctamente y cumpla con los requisitos establecidos. En este capítulo, se explorará el uso de Jetpack Compose para el diseño de interfaces, la aplicación de estilos y temas siguiendo las directrices de Material #[em Design], el desarrollo de aplicaciones #[em web] y las mejores prácticas en pruebas unitarias y documentación.
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1	Diseño de interfaces con Jetpack Compose
    
    p(data-aos="fade-right") Jetpack Compose es un moderno kit de herramientas de UI para Android que simplifica y acelera el desarrollo de interfaces de usuario. Basado en un enfoque declarativo, permite construir interfaces de manera más intuitiva y con menos código que los enfoques tradicionales.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        
        .cont_titulo3(data-aos="flip-up")
          h5 Conceptos y características de Jetpack Compose
        
        p Jetpack Compose introduce una nueva forma de diseñar interfaces mediante funciones composables. Estas funciones describen la interfaz de usuario y su comportamiento, reaccionando automáticamente a los cambios en los datos subyacentes. Esto resulta en un código más limpio y fácil de mantener. Entre las características destacadas de Jetpack Compose se encuentran:

        .p-4.mt-4(style="background-color:#E6F0FC;border-radius:9px;")
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Programación declarativa:] se centra en qué mostrar en lugar de cómo mostrarlo.
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Reactividad:] las UI se actualizan automáticamente cuando los datos cambian.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Compatibilidad:] se integra con vistas existentes y bibliotecas de Android.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/2.png")
    
    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/3.png")
      .col-lg(data-aos="fade-left")
        
        .cont_titulo3(data-aos="flip-up")
          h5.fst-italic Layouts: Box, Column y Row
        
        p Los layouts son componentes fundamentales en el diseño de interfaces con Jetpack Compose. Permiten organizar y posicionar los elementos en la pantalla.

        .p-4(style="background-color:#DFE9EA;border-radius:9px;")
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong.fst-italic Box:] es un contenedor que apila sus hijos uno encima del otro, permitiendo superposiciones.
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong.fst-italic Column:] organiza los elementos en una disposición vertical, colocando cada elemento debajo del anterior.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong.fst-italic Row:] dispone los elementos horizontalmente, uno al lado del otro.
        p.mt-3.mb-0 Estos #[em layouts] pueden anidarse y combinarse para crear estructuras más complejas. Por ejemplo, se puede utilizar una #[em Column] que contenga varias #[em Rows] para diseñar una cuadrícula personalizada.
    
    p.mt-4(data-aos="fade-right") La siguiente figura ilustra cómo se organizan los componentes en Jetpack Compose para crear una interfaz de usuario. Muestra la jerarquía de layouts y componentes, desde el contenedor principal hasta los elementos individuales.

    .cont_3_1.mt-5
      .col-xl-6.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 2.
          span Estructura de Jetpack Compose
        .p-4(style="background-color:#DED5DB;border-radius:11px;")
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema4/4.svg" alt="La Figura 2 se denomina « Estructura de Jetpack Compose». Destaca la utilización de Box, Column y Row para estructurar la interfaz, y cómo los componentes Text, Image y Button se integran en esta estructura.")
        figcaption.mt-2.fw-normal.bg-white #[strong Fuente:] OIT, 2024. 

      .cont_titulo3.mt-5(data-aos="flip-up")
        h5 Modificadores, textos e imágenes
      
      .row
        .col-lg(data-aos="fade-right" style="place-self:center;")
          p.mb-0 Los modificadores son una herramienta poderosa que permite ajustar el comportamiento y apariencia de los componentes. Pueden cambiar el tamaño, el #[em padding], el color, la alineación y más. El componente #[em Text] se utiliza para mostrar texto en la pantalla. Permite personalizar la tipografía, el estilo y aplicar modificadores para ajustar su presentación. Las imágenes se muestran utilizando el componente Image, que admite la carga de recursos locales o remotos. Se pueden aplicar modificadores para ajustar el tamaño, la forma y otros aspectos visuales.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema4/5.svg")
      
      .row.mt-5
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema4/6.png")
        .col-lg(data-aos="fade-left")
          
          .cont_titulo3(data-aos="flip-up")
            h5 #[em Grids], Listas, Navegación y Tarjetas (#[em Cards])
          
          p Para manejar listas de datos y estructuras repetitivas, Jetpack Compose ofrece componentes como LazyColumn y LazyRow, que renderizan eficientemente listas verticales y horizontales respectivamente.

          .p-4(style="background-color:#DFE9EA;border-radius:4px;")
            p.mb-0 Las grids permiten organizar elementos en forma de cuadrícula, ideal para galerías de imágenes o listas de productos. La navegación entre diferentes pantallas se gestiona mediante el componente NavHost, que define las rutas y destinos de la aplicación. Las tarjetas o #[em Cards] son componentes visuales que encapsulan contenido y acciones sobre un tema específico. Siguen las directrices de Material Design y aportan consistencia y estética a la aplicación.

    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_4_2 4.2	Estilos, temas y material design
    
    p(data-aos="fade-right") El diseño visual de una aplicación es determinante para ofrecer una experiencia de usuario atractiva y coherente. Aplicar estilos y temas permite unificar la apariencia y facilitar cambios globales en la interfaz.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/7.png")
      .col-lg(data-aos="fade-left")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Concepto de estilos y temas")
            p Un estilo es un conjunto de atributos que definen la apariencia de un componente específico. Un tema es una colección de estilos que se aplican a una actividad o a toda la aplicación.
            p.mb-0 Utilizar estilos y temas ayuda a mantener la consistencia visual y simplifica la personalización de la interfaz. Por ejemplo, cambiar el color primario en el tema puede actualizar automáticamente todos los componentes que utilizan ese color.
          .row.col-xl-11.m-auto(titulo="Tipos de temas y prioridades")
            p Existen diferentes niveles en los que se pueden aplicar temas y estilos:
            ul.lista-ul.ps-4
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Tema de Aplicación:] afecta a todos los componentes de la aplicación.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Tema de Activity:] se aplica a una actividad específica.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Tema de Vista:] se aplica a un componente o vista en particular.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Estilo de Vista:] define atributos para un tipo específico de componente, como botones o textos.
              li.d-flex.mb-0
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong TextAppearance:] es un estilo específico para textos, que controla atributos como la fuente, el tamaño y el color.
            p.mb-0 La prioridad de aplicación de estilos y temas va desde los más generales (tema de aplicación) hasta los más específicos (estilo de vista). Esto permite sobrescribir atributos en niveles inferiores cuando sea necesario.
          .row.col-xl-11.m-auto(titulo="Componentes de Material Design: BottomAppBar, Floating Action Button, CardView")
            p Material Design es un sistema de diseño desarrollado por Google que proporciona directrices para crear interfaces intuitivas y coherentes. Jetpack Compose incorpora muchos de estos componentes, facilitando su implementación.
            ul.lista-ul.ps-4
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong BottomAppBar:] es una barra de navegación ubicada en la parte inferior de la pantalla, que puede contener acciones y elementos de navegación.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Floating Action Button (FAB):] es un botón circular que representa la acción principal en una pantalla.
              li.d-flex.mb-0
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong CardView:] es un contenedor que presenta contenido y acciones sobre un tema único, con sombras y bordes redondeados que le dan una apariencia elevada.
            p.mb-0 Utilizar estos componentes no solo mejora la estética de la aplicación, sino que también aporta familiaridad y facilita la navegación para el usuario.

    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3	Desarrollo y pruebas de aplicaciones #[em web]
    
    p(data-aos="fade-right") Además del desarrollo de aplicaciones móviles, es importante considerar el desarrollo #[em web] para ofrecer soluciones multiplataforma.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Codificación en HTML5, CSS y JavaScript")
            p El desarrollo de aplicaciones #[em web] se basa en tres tecnologías fundamentales:
            ul.lista-ul.ps-4
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong HTML5:] define la estructura y el contenido de la página #[em web].
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong CSS:] controla la presentación y el estilo de los elementos HTML.
              li.d-flex.mb-0
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong JavaScript:] añade interactividad y lógica a la página.
            p.mb-0 Dominar estas tecnologías permite crear interfaces #[em web] dinámicas y responsivas. HTML5 introduce nuevas etiquetas semánticas que mejoran la accesibilidad y el SEO. CSS3 aporta características avanzadas de diseño, como animaciones y transiciones. JavaScript, junto con #[em frameworks] como React o Vue.js, facilita la creación de aplicaciones #[em web] complejas.
          .row.col-xl-11.m-auto(titulo="Elaboración y despliegue de interfaces <em>web</em>")
            p El proceso de desarrollo incluye:
            ul.lista-ul.ps-4
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Diseño de la interfaz:] crear maquetas y prototipos para definir la apariencia y funcionalidad.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Codificación:] escribir el código HTML, CSS y JavaScript según el diseño.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Pruebas:] verificar el funcionamiento en diferentes navegadores y dispositivos.
              li.d-flex.mb-1
                i.fas.fa-check-circle(style="color:#1169E3;")
                span #[strong Despliegue:] publicar la aplicación en un servidor #[em web] para que esté accesible a los usuarios.
              li.d-flex.mb-0
                i.fas.fa-check-circle(style="color:#1169E3;")
                span Pruebas de Integración con el #[em Back-end]
            p La interacción entre el #[em front-end] y el #[em back-end] es medular. Las pruebas de integración aseguran que las solicitudes y respuestas entre ambos funcionen correctamente.
            p.mb-0 Se utilizan herramientas como Postman para simular solicitudes desde el #[em front-end] y verificar que el #[em back-end] responda adecuadamente. También se pueden implementar pruebas automatizadas que ejecuten escenarios completos de uso.
          .row.col-xl-11.m-auto(titulo="Corrección y optimización de parámetros")
            p Después de las pruebas, es común identificar áreas de mejora. Esto puede incluir optimizar el rendimiento, corregir errores de lógica o mejorar la experiencia del usuario. Optimizar parámetros como el tamaño de las imágenes, minimizar el código CSS y JavaScript, y utilizar técnicas de carga diferida (#[em lazy loading]) puede mejorar significativamente la velocidad de la aplicación.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/8.png")
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_4_4 4.4	Pruebas Unitarias y Documentación
    
    p(data-aos="fade-right") Las pruebas unitarias y la documentación son componentes esenciales para garantizar la calidad y mantenibilidad del #[em software].

    .row.mt-4
      .col-lg(data-aos="fade-right")
        
        .cont_titulo3(data-aos="flip-up")
          h5 Configuración de entornos de prueba
        
        p Configurar un entorno de pruebas adecuado permite ejecutar pruebas en condiciones controladas. Esto incluye:

        .p-4.mt-4(style="background-color:#DFE9EA;border-radius:9px;")
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Entornos locales:] para pruebas iniciales y desarrollo.
            li.d-flex.mb-1
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Entornos de staging:] que replican el entorno de producción para pruebas más exhaustivas.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Generadores de Código de Pruebas
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema4/9.svg")
          .col-md(style="place-self:center;")
            p Existen herramientas que automatizan la creación de código de pruebas, facilitando la cobertura de casos y reduciendo el esfuerzo manual. #[em Frameworks] como JUnit para Java o PyTest para Python son ampliamente utilizados.
            p.mb-0 Las pruebas unitarias verifican el comportamiento de componentes individuales, asegurando que cada parte del código funcione como se espera.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/10.svg")
    
    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/11.png")
      .col-lg(data-aos="fade-left")
        .cont_titulo3(data-aos="flip-up")
          h5 Documentación y buenas prácticas
        p Mantener una documentación clara y actualizada es fundamental. Esto incluye:
        .p-3(style="background-color:#DFE9EA;border-radius:5px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Comentarios en el código: para explicar la lógica y facilitar la comprensión.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Documentos técnicos: que describen la arquitectura, las decisiones de diseño y cómo utilizar el #[em software].
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Manual de usuario: orientado a los usuarios finales para ayudarles a entender y utilizar la aplicación.
        p.mt-3.mb-0 Las buenas prácticas también implican seguir estándares de codificación, mantener un control de versiones adecuado y realizar revisiones de código.
    
    p.mt-4(data-aos="fade-right") La siguiente figura muestra el ciclo de pruebas y documentación en el desarrollo de #[em software], destacando cómo las pruebas unitarias, de integración y la documentación interactúan para mejorar la calidad del producto.

    .col-xl-6.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 3.
        span Ciclo de pruebas y documentación
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema4/12.svg" alt="La Figura 3 se denomina «Ciclo de pruebas y documentación». Ilustra el flujo desde la escritura del código, pasando por las pruebas unitarias e integración, hasta la actualización de la documentación, enfatizando la naturaleza iterativa y continua de este proceso.")
      figcaption.mt-2.fw-normal #[strong Fuente:] OIT, 2024. 

    .col-xl-8.col-lg-10.m-auto.mt-4
      .p-4.p-lg-3(style="background-color:#DFE9EA;border-radius:5px;" data-aos="fade-up")
        p.mb-0 #[strong Nota:] La infografía ilustra el flujo desde la escritura del código, pasando por las pruebas unitarias e integración, hasta la actualización de la documentación, enfatizando la naturaleza iterativa y continua de este proceso.
      
    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/13.png")
      .col-lg(data-aos="fade-left")
        .row
          .col-lg
            p.mb-0 En esencia, el desarrollo de interfaces de usuario y la realización de pruebas son aspectos críticos en la creación de aplicaciones con inteligencia artificial. Utilizar herramientas modernas como Jetpack Compose simplifica el diseño de interfaces atractivas y funcionales. Aplicar estilos y temas basados en Material #[em Design] asegura una experiencia de usuario coherente y agradable.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema4/14.svg")
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema4/15.svg")
          .col-md(style="place-self:center;")
            p.mb-0 El desarrollo #[em web] complementa estas habilidades, permitiendo crear aplicaciones multiplataforma que alcancen una audiencia más amplia. Finalmente, las pruebas unitarias y la documentación son prácticas indispensables que garantizan la calidad y sostenibilidad del #[em software] a largo plazo.
    
    p.mt-4(data-aos="fade-right") Al integrar estos conocimientos y técnicas, se puede desarrollar aplicaciones robustas, eficientes y centradas en el usuario, aprovechando al máximo las capacidades de la inteligencia artificial y ofreciendo soluciones innovadoras en un mercado cada vez más competitivo.


      

</template>

<script>
export default {
  name: 'Tema4',
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

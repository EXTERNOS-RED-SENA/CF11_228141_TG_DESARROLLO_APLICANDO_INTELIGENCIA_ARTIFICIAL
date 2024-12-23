<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Persistencia y gestión de datos

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png")
      .col-lg(data-aos="fade-left" style="place-self:center;")
        p.mb-0 La persistencia y gestión de datos son pilares fundamentales en el desarrollo de aplicaciones que incorporan inteligencia artificial. Un manejo eficiente y seguro de los datos garantiza no solo el correcto funcionamiento de la aplicación, sino también una experiencia de usuario óptima. En este capítulo, se explorarán las diversas opciones de almacenamiento, desde soluciones locales como SharedPreferences y SQLite, hasta bases de datos externas y en tiempo real como MySQL y Firebase. Además, se abordará la implementación de estructuras de almacenamiento y las mejores prácticas en la gestión de datos.
    
    Separador
    
    .cont_1_1 

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_1 2.1	Persistencia de datos locales
      
      .cont_titulo3(data-aos="flip-up")
        h5 SharedPreferences

      .row
        .col-lg(data-aos="fade-right")
          .p-4(style="background-color:#EDE9EC;border-radius:7px;")
            p.mb-0 Es una herramienta sencilla y eficiente que permite almacenar pares clave-valor de datos primitivos en el dispositivo del usuario. Es ideal para guardar configuraciones, preferencias del usuario o cualquier información pequeña que deba persistir entre sesiones de la aplicación.
          p.mb-0.mt-3 Por ejemplo, si una aplicación necesita recordar el tema de color seleccionado por el usuario, puede almacenarlo utilizando SharedPreferences. Al reiniciar la aplicación, puede recuperar este valor y aplicar el tema correspondiente, mejorando así la experiencia del usuario.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/2.svg")
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/3.svg")
        .col-lg(data-aos="fade-left")
          h5 Implementación básica de SharedPreferences 
          p Para guardar un valor:
          figure.col-lg-10
            img(src="@/assets/curso/tema2/4.svg" alt="Guardar un valor en SharedPreferences: Para almacenar un dato, primero obtenemos una instancia de SharedPreferences en modo privado. Luego, utilizamos el objeto editor para modificar y guardar el valor deseado.")
          p.mt-4 Para recuperar un valor:
          figure.col-lg-10
            img(src="@/assets/curso/tema2/5.svg" alt="Recuperar un valor de SharedPreferences: Para acceder a un valor previamente almacenado, obtenemos la instancia de SharedPreferences y usamos el método adecuado para obtener el valor, proporcionando un valor por defecto en caso de que no exista.")
    
    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Bases de Datos SQLite: Conexión y Operaciones CRUD
    
    p(data-aos="fade-right") Cuando se requiere manejar conjuntos de datos más complejos o voluminosos, SQLite es la base de datos local por excelencia en dispositivos móviles. Es una base de datos relacional ligera que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de manera eficiente.

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/6.png")
      .col-lg-9(data-aos="fade-left")
        h5 Creación y configuración de la base de datos
        p Para utilizar SQLite, se debe crear una clase que extienda de SQLiteOpenHelper y definir el esquema de la base de datos:
        figure
          img(src="@/assets/curso/tema2/7.svg")
    
    h5.mt-5(data-aos="fade-right") Operaciones CRUD

    .row.mt-4 
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Crear (Insertar):
          figure
            img(src="@/assets/curso/tema2/8.svg")
      .col-lg(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Leer (Consultar):
          figure.m-auto.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/9.svg")
    
    .row.mt-4 
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Actualizar:
          figure
            img(src="@/assets/curso/tema2/10.svg")
      .col-lg(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Eliminar:
          figure
            img(src="@/assets/curso/tema2/11.svg")
    
    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Manejo de multitablas
    
    p(data-aos="fade-right") En aplicaciones más complejas, es común utilizar múltiples tablas relacionadas para representar entidades y sus relaciones. Por ejemplo, una aplicación de gestión de bibliotecas podría tener tablas para libros, autores y categorías.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/12.png")
      .col-lg(data-aos="fade-left")
        h5 Relaciones entre tablas
        .p-4.mb-3(style="background-color:#E6F0FC;border-radius:9px;")
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Uno a uno:] un usuario tiene una única dirección.
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Uno a muchos:] un autor ha escrito múltiples libros.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Muchos a muchos:] un libro puede pertenecer a varias categorías y una categoría puede incluir varios libros.
        p Para manejar estas relaciones, se utilizan claves primarias y foráneas, y se realizan consultas que combinan datos de múltiples tablas mediante JOINs.
        p Ejemplo de consulta con JOIN:
        figure.col-lg-10.mb-3
          img(src="@/assets/curso/tema2/13.svg")
        p.mb-0 Esta consulta obtiene los títulos de los libros junto con el nombre de sus respectivos autores.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2	Bases de datos externas y en tiempo real
    
    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Conexión a MySQL: instalación y ejemplos

    .row
      .col-lg(data-aos="fade-right")
        p Para aplicaciones que requieren compartir datos entre múltiples usuarios o dispositivos, es necesario utilizar una base de datos externa como MySQL. MySQL es un sistema de gestión de bases de datos relacional ampliamente utilizado en aplicaciones #[em web].
        .p-3.mt-4(style="background-color:#E6F0FC;border-radius:9px;")
          h5 Instalación de MySQL
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Descargar MySQL desde el sitio oficial.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Instalar siguiendo las instrucciones proporcionadas, configurando el usuario y la contraseña de administrador.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span Configurar el acceso remoto si la aplicación necesita conectarse desde dispositivos externos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/14.png")
    
    p.mt-4(data-aos="fade-right") Conexión desde la aplicación:
    p(data-aos="fade-left") En aplicaciones móviles, no es recomendable conectarse directamente a la base de datos MySQL por motivos de seguridad y rendimiento. En su lugar, se utiliza un API RESTful que actúa como intermediario entre la aplicación y la base de datos.

    .row.mt-4 
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Ejemplo de API RESTful en PHP:
          figure
            img(src="@/assets/curso/tema2/15.svg")
      .col-lg(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p La aplicación móvil puede consumir este API utilizando Retrofit:
          figure
            img(src="@/assets/curso/tema2/16.svg")
    
    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Introducción a ORM y Room: configuración y uso
    
    p(data-aos="fade-right") Los ORMs (#[em Object-Relational Mapping]) simplifican la interacción con bases de datos relacionales al permitir trabajar con objetos en lugar de tablas y consultas SQL. Room es el ORM oficial de Android para SQLite.

    h5.mt-5(data-aos="fade-left") Configuración de Room

    .row.mt-4 
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-3.h-100(style="background-color:#E6F0FC;border-radius:7px;")
          p Agregar dependencias en el archivo build.gradle:
          figure
            img(src="@/assets/curso/tema2/17.svg")
      .col-lg(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Definir entidades (tablas):
          figure
            img(src="@/assets/curso/tema2/18.svg")
    
    .row.mt-4 
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Crear DAO #[em (Data Access Object):]
          figure
            img(src="@/assets/curso/tema2/19.svg")
      .col-lg(data-aos="zoom-in")
        .p-3.h-100(style="background-color:#E6F0FC;border-radius:7px;")
          p Configurar la base de datos:
          figure
            img(src="@/assets/curso/tema2/20.svg")
    
    .row.mt-4 
      .col-lg(data-aos="zoom-in")
        .p-3.h-100(style="background-color:#E6F0FC;border-radius:7px;")
          p Uso de Room en la aplicación:
          figure
            img(src="@/assets/curso/tema2/21.svg")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/22.png")
    
    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Firebase: conceptos, utilidades y servicios
    
    p(data-aos="fade-right") Firebase es una plataforma de Google que ofrece servicios en la nube para facilitar el desarrollo de aplicaciones, incluyendo Firebase Realtime Database, una base de datos NoSQL en tiempo real.

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/23.png")
      .col-lg(data-aos="fade-left")
        h5 Características principales
        .p-4(style="background-color:#E6F0FC;border-radius:9px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Sincronización en tiempo real:] los datos se sincronizan automáticamente en todos los dispositivos conectados.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Soporte offline:] la aplicación sigue funcionando sin conexión y se sincroniza cuando vuelve a estar en línea.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Escalabilidad y seguridad:] maneja grandes volúmenes de datos con reglas de seguridad personalizables.
    
    h5.mt-5(data-aos="fade-right") Implementación en la aplicación

    p(data-aos="fade-left") Agregar Firebase al proyecto: utilizando el asistente en Android Studio o mediante la consola de Firebase.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-3.mb-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Escribir datos:
          figure
            img(src="@/assets/curso/tema2/24.svg")
        .p-3(style="background-color:#E6F0FC;border-radius:7px;")
          p Leer datos:
          figure
            img(src="@/assets/curso/tema2/25.svg")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/26.svg")
    
    p.mt-5(data-aos="fade-right") La siguiente figura ilustra cómo Firebase Realtime Database sincroniza datos entre múltiples clientes y el servidor en la nube. Cada cambio en los datos se refleja instantáneamente en todos los dispositivos conectados, lo que es ideal para aplicaciones colaborativas o que requieren actualización en tiempo real.

    .col-xl-6.col-lg-9.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 1.
        span Arquitectura de Firebase Realtime Database
      .p-3.p-lg-4(style="background-color:#F6F9F9;border-radius:13px;")
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema2/27.svg" alt="La Figura 1 se denomina «Arquitectura de Firebase Realtime Database». Muestra el flujo de datos entre los dispositivos de los usuarios y la base de datos en la nube, destacando la sincronización bidireccional y la capacidad de funcionar sin conexión.")
      figcaption.mt-2.fw-normal #[strong Fuente:] OIT, 2024.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3	Implementación de estructuras de almacenamiento
    
    p(data-aos="fade-left") Elegir la estructura de almacenamiento adecuada es indispensable para satisfacer los requerimientos específicos de cada aplicación. Factores como el tipo de datos, volumen, necesidad de sincronización y requisitos de seguridad influyen en esta decisión.
    p(data-aos="fade-right") Empleo de estructuras de almacenamiento según requerimientos.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="SharedPreferences")
            p Ideal para almacenar pequeñas cantidades de datos simples, como configuraciones o preferencias.
          .row.col-xl-11.m-auto(titulo="SQLite/Room")
            p Adecuado para datos estructurados y relaciones complejas que deben almacenarse localmente.
          .row.col-xl-11.m-auto(titulo="MySQL")
            p Útil para aplicaciones que requieren una base de datos centralizada y accesible desde múltiples dispositivos.
          .row.col-xl-11.m-auto(titulo="Firebase Realtime Database")
            p Perfecto para aplicaciones que necesitan sincronización en tiempo real y funcionalidad offline.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/28.png")

    .cont_titulo3.mt-5(data-aos="flip-up")
      h5 Construcción de consultas para manipulación de información
    
    p(data-aos="fade-right") Es esencial construir consultas eficientes y seguras para interactuar con las bases de datos. Al utilizar ORM como Room, muchas de estas preocupaciones se manejan automáticamente, pero siempre es importante seguir buenas prácticas.

    .row.mt-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/29.png")
      .col-lg-8(data-aos="fade-left")
        p Buenas prácticas en la gestión de datos
        .p-3(style="background-color:#DFE9EA;border-radius:5px;")
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Utilizar consultas parametrizadas:] evita las inyecciones SQL y mejora la seguridad.
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Optimizar las consultas:] seleccionar solo las columnas necesarias y utilizar índices apropiadamente.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Gestionar las transacciones:] asegurar la integridad de los datos en operaciones complejas.
        p.mt-3 Buenas prácticas en la construcción de consultas:
        .p-3(style="background-color:#CFE1FA;border-radius:5px;")
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Validación de datos:] siempre validar los datos de entrada antes de almacenarlos o procesarlos.
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Manejo de errores:] implementar mecanismos para manejar excepciones y errores en las operaciones de base de datos.
            li.d-flex
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Seguridad y privacidad:] proteger los datos sensibles mediante encriptación y acceso controlado.
            li.d-flex.mb-0 
              i.fas.fa-check-circle(style="color:#1169E3;")
              span #[strong Backups y recuperación:] establecer estrategias de respaldo para prevenir la pérdida de datos.
    
    .row.mt-4
      .col-md-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/30.svg")
      .col-md(data-aos="fade-left" style="place-self:center;")
        p.mb-0 En conclusión, la persistencia y gestión de datos son componentes esenciales en el desarrollo de aplicaciones con inteligencia artificial. Comprender las distintas opciones de almacenamiento y saber implementarlas adecuadamente permite crear aplicaciones robustas, eficientes y escalables. Al aplicar las mejores prácticas en la gestión de datos, se garantiza no solo el correcto funcionamiento de la aplicación, sino también la seguridad y satisfacción de los usuarios.



</template>
<script>
export default {
  name: 'Tema2',
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

<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
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
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>

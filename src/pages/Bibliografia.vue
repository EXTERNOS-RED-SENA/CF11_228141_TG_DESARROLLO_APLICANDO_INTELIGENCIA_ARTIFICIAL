<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Barbara, J. (2023). Practical C++ Backend Programming: Crafting Databases, APIs, and <em>Web</em> Servers for High-Performance Backend. GitforGits.',
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
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>

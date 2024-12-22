<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
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
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>

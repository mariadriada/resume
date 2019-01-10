<template>
  <div class="text-list">
    <ul>
      <li v-for="{id, text, active, circle} in text " :key="id" >
        <item :text="`${ text }`" :circle="`${ circle }`" :class="`${ cls}`">
        </item>
      </li>
    </ul>
  </div>
</template>

<script>

import Item from '~/components/Item.vue'

export default{

  components: {
    Item
  },
  props: ['idData','cls'],
  data () {
    return {
      text: []
    }
  },
  methods: {
    updateData: function() {
      console.log('datosaca')
    }
  },
  beforeMount () {
    let list = [];
    if (this.idData === "1") {
      // Self description list
      list=
      [
        { id: 1, text: 'Self-taught and creative.', active: true, circle: true },
        { id: 2, text: 'Believe in teamwork.', active: true, circle: true },
        { id: 3, text: 'Know new technologies.', active: true, circle: true },
        { id: 4, text: 'love the methodology.', active: true, circle: true },
        { id: 5, text: 'Focus on improving.', active: true, circle: true },
        { id: 6, text: 'love nature.', active: true, circle: true },
        { id: 7, text: 'I am an enterprising woman.', active: true, circle: true },
      ]
    }
    else if (this.idData === "2") {
      // Performance professional list
      list=
      [
        { id: 1, text: 'Computer Tecnhology.', active: true, circle: '' },
        { id: 2, text: 'Computer Enginner Student, semester eighth.' , circle: '' },
        { id: 3, text: 'Analyst and software developer performance.', active: true, circle: '' },
      ]
    }
    else if (this.idData === "3") {
      // Skills list
      list=
      [
        { id: 1, text: 'Software analysis', active: true, circle: 'true' },
        { id: 2, text: 'Front-end and back-end development' , circle: 'true' },
        { id: 3, text: 'Version control systems', active: true, circle: 'true' },
        { id: 4, text: 'Infraestructure and scalability', active: true, circle: 'true' },
        { id: 5, text: 'Algorithms design ', active: true, circle: 'true' },
        { id: 6, text: 'Object oriented desing ', active: true, circle: 'true' },
        { id: 7, text: 'Cross browser compatibility ', active: true, circle: 'true' },
        { id: 8, text: 'Responsive design', active: true, circle: 'true' },
      ]
    }
    else if (this.idData === "4") {
      // Skills list
      list=
      [

        { id: 1, text: 'Client-side development', active: true, circle: 'true' },
        { id: 2, text: 'Dynamic web applications', active: true, circle: 'true' },
        { id: 3, text: 'Semantic web templates', active: true, circle: 'true' },
        { id: 4, text: 'Data structures ', active: true, circle: 'true' },
        { id: 5, text: 'Client Relation Management', active: true, circle: 'true' },
        { id: 6, text: 'Content Management System', active: true, circle: 'true' },
        { id: 7, text: 'Debugging and problem solving ', active: true, circle: 'true' },
        { id: 8, text: 'Learning fast', active: true, circle: 'true' },
      ]
    }
    this.text = list;
  }

}

</script>

<style lang="scss">

.text-list {
  width: 100%;

  ul {
    list-style: none;
    padding-left: 0;
    height: auto;
    font-style: italic;
    font-weight: 400;
//font-family: 'Ubuntu', sans-serif;
  }

  &.normal {

    ul {
      font-style: normal;
      font-weight: 100;

      //TODO: implementary in Item component
      li {
        .line-text {
          color: #424242;
          padding-bottom: 1em;

          .text {
              font-size: 1.5em;
              text-align: left;
              margin: 0;
            }

            .circle {
              background-color: #03A9F4;
              width: .7em;
              height: .7em;
              line-height: 1.5em;
            }
        }
      }
    }
  }

}

</style>

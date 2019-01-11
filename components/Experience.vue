<template>
  <ul id="experience-list">

    <item v-for="{ id, company, rol, date, observation } in list "
    :key = "id"
    :company = "company"
    :rol = "rol"
    :date = "date"
    :observation = "observation"
    >
    </item>

  </ul>
</template>

<script>

import Item from '~/components/ExperienceItem.vue'

export default {

  components: {
    Item
  },
  data() {
    return {
      list: [
        { id: 1, company: 'Forettos Pizza', rol: 'Family enterpreneurship', date: 'Actually', observation: 'Create mark of gourmet pre-cooked pizzas with Canvas Business Model.' },
        { id: 2, company: 'Corantioquia', rol: 'Business analyst', date: 'June 2015 - March 2017', observation: 'Process analysis and and front-end development - Workteam leader.' },
        { id: 3, company: 'Colombia Aprende', rol: 'Front-end developer', date: 'March 2015 - June 2015', observation: 'Agreement betwen Ministerio de Educación Nacional and Universidad Pontificia Bolivariana-UPB.' },
        { id: 4, company: 'Corantioquia', rol: 'Software analyst', date: 'January 2014 - December 2014', observation: 'Structure custom software of client-side.' },
        { id: 5, company: 'Master2000 SAS', rol: 'Software developer', date: 'August 2012 - January 2014', observation: 'Leadership of software workteam.' },
        { id: 6, company: 'Powers Solution LTDA', rol: 'Software developer', date: 'July 2010 - Juny 2012', observation: 'Design and develpment of telemetry software project with arm9 platform.' },
        { id: 7, company: 'Pascual Bravo Institución Universitaria', rol: "Technology's auxiliar", date: 'July 2008 - Juny 2010', observation: 'Providing technical service and support to informatica rooms.' },
      ]
    }
  }
}

</script>

<style lang="scss">

#experience-list {
  @include inherit-width;
  height: auto;
  border: 1 px solid red;
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>

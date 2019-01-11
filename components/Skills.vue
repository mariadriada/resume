<template>
  <div class="skills-container">

      <ul class="skill-content">
        <skill-item v-for="{ id, name, description, level, img, alt, doc } in skills "
        :key = "id"
        :name = "`${ name }`"
        :description = "`${ description }`"
        :img = "`${ img }`"
        :alt = "`${ alt }`"
        :level = "`${ level }`"
        :class = "`${ level }`"
        :doc = "`${ doc }`"
        >
        </skill-item>
      </ul>
    </div>

</template>

<script>

import TextLine from '~/components/TextLine.vue'
import SkillItem from '~/components/SkillItem.vue'

export default {

  components: {
    TextLine,
    SkillItem
  },
  props:['idData'],
  data () {
    return {
      title: 'My Skills',
      description: `I love everything about software and I know that it´s a big world.
                    For that, I focus on receive the client's needs and propouse alternatives solve their problems,
                    until they are satisfied; I don't know everything,
                    but I find the appropiate tecnology, asimilate and apply it.`,
      skills: []
    }
  },
  beforeMount () {
    let list = [];
    if (this.idData === "1") {
      // Devs Skills
      list=
      [
        { id:1, name:'HTML5', description: 'Html5 and old versions.', level: 'high', img: '/img/skills/html5.png', alt: 'HTML5', doc:'https://html.spec.whatwg.org/dev/' },
        { id:2, name:'CSS3', description: 'CSS3 and old versions.', level: 'high', img: '/img/skills/css3.png', alt: 'CSS3', doc:'https://www.w3.org/Style/CSS/' },
        { id:3, name:'Sass', description: 'Scss syntax.', level: 'high', img: '/img/skills/sass.png', alt: 'Sass', doc:'https://sass-lang.com/' },
        { id:4, name:'Less', description: 'I like more Sass.', level: 'moderate', img: '/img/skills/less.png', alt: 'Less', doc:'http://lesscss.org/' },
        { id:5, name:'ECMAScript5', description: 'Javascript.', level: 'high', img: '/img/skills/javascript.png', alt: 'Javascript', doc:'https://www.ecma-international.org/ecma-262/5.1/' },
        { id:6, name:'ECMAScript2015', description: 'ES6 and ES7.', level: 'high', img: '/img/skills/es6.png', alt: 'ECMAScript6', doc:'http://www.ecma-international.org/ecma-262/7.0/' },
        { id:7, name:'JQuery', description: 'I like more Vanilla JS.', level: 'high', img: '/img/skills/jquery.png', alt: 'JQuery', doc:'' },
        { id:8, name:'Angular', description: 'Angular and AngularJs.', level: 'moderate', img: '/img/skills/angular.png', alt: 'Angular', doc:'https://angular.io/' },
        { id:9, name:'TypeScript', description: '', level: 'moderate', img: '/img/skills/typescript.png', alt: 'TypeScript', doc:'https://www.typescriptlang.org/' },
        { id:10, name:'VUE.JS', description: '', level: 'high', img: '/img/skills/vue.png', alt: 'Vue Js', doc:'https://vuejs.org/' },
        { id:11, name:'NUXT.JS', description: '', level: 'high', img: '/img/skills/nuxt.png', alt: 'Nuxt Js', doc:'https://nuxtjs.org/' },
        { id:12, name:'NodeJs', description: 'Wonderful world to discover!', level: 'moderate', img: '/img/skills/nodejs.png', alt: 'NodeJs', doc:'https://nodejs.org/en/' },
        { id:13, name:'Webpack', description: 'Gulp.js, LiveReload and prepros tools.', level: 'moderate', img: '/img/skills/webpack.png', alt: 'Webpack', doc:'https://webpack.js.org/' },
        { id:14, name:'SVN/Subversion ', description: '', level: 'basic', img: '/img/skills/subversion.png', alt: 'Subversion', doc:'https://subversion.apache.org/' },
        { id:15, name:'Git', description: 'Github social coding.', level: 'high', img: '/img/skills/git.png', alt: 'Git', doc:'https://git-scm.com/' },
        { id:16, name:'Mercurial', description: 'Bitbuket platform.', level: 'high', img: '/img/skills/mercurial.png', alt: 'Mercurial', doc:'https://www.mercurial-scm.org/' },
        { id:17, name:'Django', description: 'Python code.', level: 'moderate', img: '/img/skills/django.png', alt: 'Django', doc:'https://www.djangoproject.com/' },
        { id:18, name:'C and C++', description: 'Low level  programming.', level: 'high', img: '/img/skills/cpp.png', alt: 'C and C++', doc:'https://isocpp.org/std/the-standard' },
      ]
    }
    else if (this.idData === "2") {
      // Databases Skills
      list=
      [
        { id:1, name:'MongoDB', description: 'NoSql and JSON format', level: 'moderate', img: '/img/skills/mongodb.png', alt: 'Oracle database', doc:'https://www.mongodb.com/' },
        { id:2, name:'SqLite', description: 'Embedded databases.', level: 'high', img: '/img/skills/sqlite.png', alt: 'SqLite', doc:'https://www.postgresql.org/' },
        { id:3, name:'MySql', description: 'Oracle Mysql databases.', level: 'high', img: '/img/skills/mysql.png', alt: 'MySql', doc:'https://www.mysql.com/' },
        { id:4, name:'Sql Server', description: 'Dinamic SQL and transact Sql.', level: 'high', img: '/img/skills/sqlserver.png', alt: 'MySql', doc:'https://www.mysql.com/' },
        { id:5, name:'Oracle', description: 'PL/SQL.', level: 'moderate', img: '/img/skills/oracle.png', alt: 'Oracle databases', doc:'https://docs.oracle.com/en/database/' },
        { id:6, name:'PostgreSql', description: 'Databases migration.', level: 'moderate', img: '/img/skills/postgresql.png', alt: 'MySql', doc:'https://www.mysql.com/' },
      ]
    }
    this.skills = list;
  }

}

</script>

<style lang="scss">

  .skills-container {
    width: 100%;

    .skill-content {

      @include flexbox;
      @include justify-content(center);
      @include flex-wrap(wrap);

      width: inherit;
      //font-size: 100%;
      list-style: none;
      padding-left: 0;
      font-family: 'Ubuntu', sans-serif;
    }
  }

</style>

<template>
<div class="about-page">
  <div class="row mt-5">
    <div class="col-sm-4 d-flex justify-content-end">
      <CirclePictures class="bio__img" name="chapplebiopic2" alt="Bio Picture" />
    </div>
    <div class="col-sm-6 ">
      <h1 class="title aboutme">About Me</h1>
      <p>
        I have lived in or near Kansas City all of my life. I went to the University of Kansas for two of my degrees and graduated from Oregon State's eCampus to complete a degree in Computer Science (BS). I am currently happily employed doing what I love.
      </p>

      <p>
        My journey into software developing was not linear. While I had been coding since a child and had a knack for computers, during my freshman year I chose to change my college major to Physics Education and ultimately earned a MS degree in Education. When I graduated, I proceeded to teach Calculus-based AP Physics, algebra-based physics and physical science at a local high school.  During my 8 years of teaching, my educational roles expanded to include managing student technologies and directing the to use of educational technology in the classroom. I was also selected to the high school's teacher-admin leadership team and designed professional development opportunities for teachers in the building. My most proud teaching accolade was receiving the award for Teacher of the Year for the high school.
      </p>

      <p>
        Being involved in team sports has always been a part of my life. So naturally, I took a up the opportunities to coach at the high school. I was the head softball coach for six years and an assistant coach for powerlifting for four years. Through these two coaching opportunities and teaching, I soon realized that many students are not prepared for life after high school, specifically for being successful in the college setting. So while content is important, I chose to emphasize providing students skills that they can apply in the future. I used the challenges of physics and sports to help those students learn perseverence and problem-solving techniques.
      </p>
      <p></p>

      <h2 class="left-align">Skills</h2>
      <p>Current Stack</p>
        <ul class="left-align">
          <li>Vue 3 with Bootstrap 5 compiled with webpack</li>
          <li>Symfony framework (PHP, Twig, Doctrine)</li>
          <li>Postrgres (with pgadmin)</li>
        </ul>
      <p>Previous Experience</p>
        <ul class="left-align">
          <li>Node.JS, Express</li>
          <li>MongoDB, MySQL</li>
          <li>C, C++, python, Swift, MASM</li>
<!--          <li><a class="underline" href="/projects.html">Projects</a></li>-->
        </ul>
      <p>Applications</p>
      <ul class="left-align">
          <li>PHP Storm, XCode, Atom, Brackets, Visual Studio</li>
          <li>Microsoft Word &amp; Excel; Google Apps</li>
          <li>GitHub/Bitbucket</li>
          <li>Terminal: git, ssh, sftp, vim</li>
          <li>Inkscape &amp; GIMP</li>
      </ul>
      <br>

      <h2 class="left-align">Passions</h2>
      <p>... a way to seek out challenges</p>
      <p><span class="intro-words">I love to create.</span> Even from childhood, I have had an internal drive to create new things and continue to make them better. This has evolved into using my creativity to think outside of the box and find the most optimal solution to complex problems, whether this is designing a collapsible dart board stand or building custom solutions for clients. While I may not always be the originator of an amazing idea, I do thrive on the dissection, design, and execution of a game plan to accomplish a goal and even improve upon that idea. I love the challenge of trying something new and finding resources to help me accomplish my goals.</p>

      <p><span class="intro-words">I love to learn.</span>  I used to joke that I wanted to be a professional student. However, after entering the professional world, I realized that my love for learning goes beyond a traditional school setting, and I have expanded my knowledge to areas of study I wouldn't normally try. For example, I have learned how to run electrical circuits, frame walls, studied woodworking joinery, and learned basic photography. I am not an expert in any of those areas, but have simply let my creative projects direct what I need to study to help me accomplish my goals. I wish I had time to learn everything.</p>

      <p><span class="intro-words">I love to teach.</span>  Of course, I used to teach for a living and wrote small articles as I was learning to program, however, this statement goes beyond my occupation. I find that I genuinely enjoy helping others solve problems on their own, whether in sports, science, or life in general. I have used words, videos, and animations to help students and teachers learn new topics/technologies. Honestly, teaching is just another way of learning, as in order to effectively explain something, I must first master the topic.</p>


      <h2 class="left-align">Education</h2>
      <p>
          <span class="degree">B.S. Computer Science (4.0)</span><br>
          <span class="college">Oregon State University</span><br>
          <span class="date">Jun 2018</span>
      </p>
      <p>
          <span class="degree">M.S. Curriculum &amp; Instruction (4.0)</span><br>
          <span class="college">University of Kansas</span><br>
          <span class="date">Dec 2010</span>
      </p>
      <p>
          <span class="degree">B.S. Education (Secondary Physics) (4.0)</span><br>
          <span class="college">University of Kansas</span><br>
          <span class="date">Dec 2008</span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
import CirclePictures from '@assets/components/picture/CirclePictures.vue'
    export default {
        name: 'about',

        components: {
          CirclePictures
        },

        data() {
          return {
            users: null
          }
        },

        created() {
          this.fetchData()
        },

        methods: {
          fetchData() {
          }
        }
    }
</script>

<style lang="scss">
.about-page {
  span.intro-words {
        font-family:typewrongfont;
      font-size: 90%
  }
}
</style>

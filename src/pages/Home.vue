<template>
<div class="container">
  <div class="profile-card">
    <div class="card-header">
      <img class="profile-image" src="https://static.wixstatic.com/media/f1c3e8_1fd67a6c77014de784ff69620189479c~mv2_d_1448_2048_s_2.jpg/v1/fill/w_470,h_470,al_c,q_80,usm_0.66_1.00_0.01/f1c3e8_1fd67a6c77014de784ff69620189479c~mv2_d_1448_2048_s_2.webp" alt="profile image">
      <div class="profile-name">Nahid Hasan</div>
      <div class="profile-role">Full Stack Developer</div>
      <div class="profile-location flex">
        <svg class="icon white" viewBox="0 0 20 20">
          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589">
          </path>
        </svg>
        Dhaka, Bangladesh
      </div>
      <div class="divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <div class="contacts">
        <div class="title">Contacts</div>
        <div class="contact-list">
    <div class="effect jaques">
    <div class=" text-black buttons">
      <a href="https://www.facebook.com/nahidhp" class="fb" title="Join us on Facebook"> 
        <i class="fab fa-facebook-f"></i>
      </a>
       <a href="https://www.instagram.com/nahid_hasan_prince/" class="insta" title="Join us on Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/nahid-hasan-336468148/" class="in" title="Join us on Linked In"><i class="fab fa-linkedin" aria-hidden="true"></i></a>

      <a href="https://github.com/nahidprince7" class="tw" title="Join us on Twitter"><i class="fab fa-github" aria-hidden="true"></i></a>
      <a href="https://bitbucket.org/nahidbracnet/" class="g-plus" title="Join us on Google+"><i class="fab fa-bitbucket" aria-hidden="true"></i></a>
         </div>
  </div>
  
        </div>
        <div class="text-center" style="padding-top:15px">
<a href="https://nahidprince7.wixsite.com/nahid" style="margin-botton:2px" class="text-red-700 text-xl"> <span>Know more about me</span> <i class="fas fa-arrow-circle-right px-2" style="margin-top:2px"></i></a>

        </div>
        
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {

  data(){
    return{
      store : this.$store.state
    }
  }

}
</script>

<style>
.effect {
  width: 100%;
  /* padding: 50px 0px 70px 0px; */
  background-color: #212121;
}
.effect h2 {
  color: #fff;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 3px;
}
.effect:nth-child(2) {
  /* margin-top: 50px; */
}
.effect:nth-child(2n+1) {
  background-color: #fff;
}
.effect:nth-child(2n+1) h2 {
  color: #212121;
}
.effect .buttons {
  /* margin-top: 50px; */
  display: flex;
  justify-content: center;
}
.effect a:last-child {
  margin-right: 0px;
}

/*common link styles !!!YOU NEED THEM*/
.effect a {
  text-decoration: none !important;
  color: #fff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 20px;
  font-size: 25px;
  overflow: hidden;
  position: relative;
}
.effect a i {
  position: relative;
  z-index: 3;
}
.effect a.fb {
  background-color: #3b5998;
}
.effect a.tw {
  background-color: black;
}
.effect a.g-plus {
  background-color: #0747A6;
}
.effect a.dribbble {
  background-color: #ea4c89;
}
.effect a.pinterest {
  background-color: #cb2027;
}
.effect a.insta {
  background-color: #bc2a8d;
}
.effect a.in {
  background-color: #007bb6;
}
.effect a.vimeo {
  background-color: #1ab7ea;
}

/* effect */
/* jaques effect */
.effect.jaques a {
  transition: border-top-left-radius 0.1s linear 0s, border-top-right-radius 0.1s linear 0.1s, border-bottom-right-radius 0.1s linear 0.2s, border-bottom-left-radius 0.1s linear 0.3s;
}
.effect.jaques a:hover {
  border-radius: 50%;
}


/* effect ends */

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.profile-card {
  position: relative;
  width: 500px;
  background-color: #FFF;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.25s ease;
}
.profile-card:hover {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
}
.profile-card .card-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  color: #FFF;
  background: linear-gradient(135deg, #3f5efb, #fc466b);
}
.profile-card .card-header .profile-image {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #FFF;
}
.profile-card .card-header .profile-name {
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
}
.profile-card .card-header .profile-role {
  font-size: 1.05rem;
  color: #DDD;
}
.profile-card .card-header .profile-location {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
}
.profile-card .card-header .divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
.profile-card .card-header .divider svg {
  position: relative;
  display: block;
  width: calc(150% + 1.5px);
  height: 50px;
}
.profile-card .card-header .divider svg path {
  fill: #FFFFFF;
}
.profile-card .card-body {
  padding: 2rem;
}
.profile-card .card-body .title {
  color: #666;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 700;
  text-transform: uppercase;
}
.profile-card .card-body .contact-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.profile-card .card-body .contact-list .contact-item {
  width: 50px;
  height: 50px;
  padding: 0.75rem;
  border-radius: 0.5rem;
}
.profile-card .card-body .contact-list .contact-item.facebook {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  box-shadow: 0px 5px 10px rgba(0, 198, 255, 0.5);
}
.profile-card .card-body .contact-list .contact-item.twitter {
  background: linear-gradient(135deg, #00d2ff, #3a7bd5);
  box-shadow: 0px 5px 10px rgba(0, 210, 255, 0.5);
}
.profile-card .card-body .contact-list .contact-item.instagram {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  box-shadow: 0px 5px 10px rgba(253, 29, 29, 0.5);
}
.profile-card .card-body .contact-list .contact-item.dribbble {
  background: linear-gradient(135deg, #da4453, #89216b);
  box-shadow: 0px 5px 10px rgba(218, 68, 83, 0.5);
}

.icon {
  position: relative;
  top: 0.25rem;
  width: 1.25em;
  height: 1.25em;
}
.icon.white path, .icon.white polygon, .icon.white rect {
  fill: #FFF;
}

.contact-icon {
  width: 100%;
  height: 100%;
}
.contact-icon path {
  fill: #FFF;
}
</style>
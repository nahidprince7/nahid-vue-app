<template>

<div class="container">
  <div class="profile-card">
    <div class="profile-card__header">
      <div class="profile-card__image">
        <div class="wrapper"><img src="https://static.wixstatic.com/media/f1c3e8_1fd67a6c77014de784ff69620189479c~mv2_d_1448_2048_s_2.jpg/v1/fill/w_470,h_470,al_c,q_80,usm_0.66_1.00_0.01/f1c3e8_1fd67a6c77014de784ff69620189479c~mv2_d_1448_2048_s_2.webp" alt="User Image"/></div>
      </div>
      <div class="profile-card__info"><span class="profile-card__name">Nahid Hasan</span><span class="profile-card__designation">Software Engineer</span></div>
    </div>
    <div class="profile-card__footer">
          <a href="https://github.com/nahidprince7" target="_blank"><img class="social" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-128.png" alt="social"/></a>
  <a href="https://dribbble.com/EdgarElias" target="_blank"><img class="social" src="http://icons.iconarchive.com/icons/martz90/circle/512/dribble-icon.png" alt="social"/></a>
  <a href="https://www.linkedin.com/in/nahid-hasan-336468148/" target="_blank"><img class="social" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Linkedin_circle.svg/100px-Linkedin_circle.svg.png" alt="social"/></a>
  <a href="https://codepen.io/EdgarElias/" target="_blank"><img class="social" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="social"/></a>
        </div>
  </div>
</div>
<!-- <div class="m-auto">
<h1 class="text-2xl text-center">Welcome to 10 Apps created with Vue by Nahid !!</h1>
</div> -->
</template>
<script>
window.onload = function() {
	setTimeout(function() {
		document.querySelector(".profile-card").classList.add("active");
	}, 400);
};


export default {

}
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");

/* body {
  background-color: #94553D;
  font-family: "Open Sans", Arial, sans-serif;
} */

img.social{
height:40px;
width: 40px;
padding:2px;
margin:10px;
}

.container {
  position: fixed;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 500px;
}

.profile-card {
  width: 400px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.5);
  transform-origin: 50%, 20%;
  transform-style: preserve-3d;
  -webkit-animation: profileCardAnimate 0.5s ease forwards;
          animation: profileCardAnimate 0.5s ease forwards;
}
.profile-card.active .profile-card__image .wrapper {
  -webkit-animation: profileImageWrapper 0.5s ease forwards;
          animation: profileImageWrapper 0.5s ease forwards;
}
.profile-card.active .profile-card__info span:nth-child(1) {
  -webkit-animation: profileInfoSpan 0.5s ease forwards;
          animation: profileInfoSpan 0.5s ease forwards;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.profile-card.active .profile-card__info span:nth-child(2) {
  -webkit-animation: profileInfoSpan 0.5s ease forwards;
          animation: profileInfoSpan 0.5s ease forwards;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.profile-card.active .profile-card__footer span:nth-child(1) {
  -webkit-animation: profileFooterSpan 0.5s ease forwards;
          animation: profileFooterSpan 0.5s ease forwards;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.profile-card.active .profile-card__footer span:nth-child(2) {
  -webkit-animation: profileFooterSpan 0.5s ease forwards;
          animation: profileFooterSpan 0.5s ease forwards;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.profile-card.active .profile-card__footer span:nth-child(3) {
  -webkit-animation: profileFooterSpan 0.5s ease forwards;
          animation: profileFooterSpan 0.5s ease forwards;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.profile-card__header {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #fff;
  overflow: hidden;
}
.profile-card__image {
  width: 150px;
  height: 150px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profile-card__image .wrapper {
  position: relative;
  width: 0;
  height: 0;
  overflow: hidden;
}
.profile-card__image .wrapper img {
  max-width: 100%;
  max-width: 100%;
  border-radius: 500px;
  border: 0.3rem solid #cccccc;
  box-sizing: border-box;
}
.profile-card__info {
  display: flex;
  flex-direction: column;
  align-content: center;
  color: #b3b3b3;
}
.profile-card__name, .profile-card__designation {
  align-self: flex-start;
  transform: translateX(500%);
}
.profile-card__name {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}
.profile-card__designation {
  font-size: 0.9rem;
}
.profile-card__footer {
  display: flex;
  justify-content: center;
  background-color: white;
}
.profile-card__footer span {
  padding: 2rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: #b3b3b3;
  font-size: 1.2rem;
  transform: translateY(100%);
}
.profile-card__footer span i {
  margin-bottom: 0.5rem;
}
.profile-card__footer span:hover {
  color: #333333;
  cursor: pointer;
}

@-webkit-keyframes profileImageWrapper {
  100% {
    width: 120px;
    height: 120px;
  }
}

@keyframes profileImageWrapper {
  100% {
    width: 120px;
    height: 120px;
  }
}
@-webkit-keyframes profileInfoSpan {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes profileInfoSpan {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@-webkit-keyframes profileFooterSpan {
  100% {
    transform: translateY(0);
  }
}
@keyframes profileFooterSpan {
  100% {
    transform: translateY(0);
  }
}
@-webkit-keyframes profileCardAnimate {
  0%, 25% {
    transform: translateZ(-400px) rotateX(-90deg);
  }
  100% {
    transform: translateZ(0) rotateX(0);
  }
}
@keyframes profileCardAnimate {
  0%, 25% {
    transform: translateZ(-400px) rotateX(-90deg);
  }
  100% {
    transform: translateZ(0) rotateX(0);
  }
}
</style>
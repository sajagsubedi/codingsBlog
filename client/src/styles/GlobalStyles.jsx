import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Anybody:wght@700&family=Lato:ital@1&family=Moon+Dance&family=Roboto+Condensed:ital@0;1&family=Roboto:ital@1&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.Header{
  display:flex;
  background:${({ theme }) => theme.colors.header};
  padding:10px;
  align-items:center;
  gap:20px;
}

.Header .headerTitle{
  text-transform: uppercase;
  width:30%;
  font-size:1.5rem;
  font-family: 'Anybody', cursive;
}
.Header .headerTitle a{
  color:skyblue;
  text-decoration:none;
}
.headerTitle a > * {
color:red;
}
.Header .Navbar {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:end;
  padding:5px;
  gap:20px;
  width:70%;
}

.Header .Navbar .menu {
  display:flex;
  flex-wrap:wrap;
  gap:30px;
  width:70%;
  align-items:center;
  justify-content: space-around;
font-family: 'Moon Dance', cursive;
}

.Header .Navbar .menu li{
  list-style:none;
}

.Header .Navbar .menu li a{
  text-decoration:none;
  color:gray;
  font-weight:600;
  font-size:1.5rem;
}

.Header .Navbar .menu li a:hover{
  font-size:1.59em;
}

.Header .IconsGroup{
  width:20%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
}

.Header .IconsGroup a{
  text-decoration:none;
  color:#84E4F7;
  font-size:1.7rem;
}

.Header .IconsGroup a:active{
  color:Ocean;
}

.phoneVisible{
  display:flex;
}

.Header .menuToggle {
  position:relative;
  left:150px;
  top:-10px;
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.Header .menuToggle::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 2px;
  background:#fff;
  transform: translateY(-10px);
  box-shadow: 0 10px #fff;
  transition: 0.5s;
}

.HeaderActive .menuToggle::before {
  content: '';
  transform: translateY(0px) rotate(45deg);
  box-shadow: 0 0 crimson;
  background: crimson;
}

.Header .menuToggle::after {
  content: '';
  position: absolute;
  width: 32px;
  height: 2px;
  background:#fff;
  transform: translateY(10px);
  transition: 0.5s;
}

.HeaderActive .menuToggle::after {
  transform: translateY(0px) rotate(-45deg);
  box-shadow: 0 0 crimson;
  background: crimson;
}

.HeroSection {
padding: 70px 50px;
height:80vh;
background:#6b94ed url(../banner.jpg) no-repeat center center/cover;
background-blend-mode:hard-light;
display:flex;
flex-direction:column;
}
.HeroSection hr{
  background:linear-gradient(to right,#00F260,#0575E6);
  height:7px;
  border:none;
  border-radius:10px;
  width:28vw;
}
.HeroSection .heroTitle{
  font-size:3rem;
  font-weight:1000;
  letter-spacing:2px;
  font-family: 'Anybody', cursive;
  background: linear-gradient( to right,#ff9966,#ff5e62,#ff9966,#ff5e62); 
        -webkit-text-fill-color:transparent; 
        -webkit-background-clip: text; 
}
.HeroSection .heroParaBox{
  padding:10px;
  margin:10px;
  width:60%;
}
.HeroSection .heroPara{
  color:yellow;
  font-size:2rem;
  font-family: 'Lato', sans-serif;
 text-align:justify;
}
.BlogSection{
  position:relative;
  top:-19vh;
  width:75vw;
  display:flex;
  flex-direction:column-reverse;
  margin:auto;
  padding:20px;
  background:#090e14;
  color:white;
}

.BlogSection .BlogComponentBox{
  background:${({ theme }) => theme.colors.blogComponent};
  border:none;
  display:flex;
  gap:10px;
  padding:10px;
  box-shadow:3px 3px 10px 3px #484848;
  margin:10px 10px 25px;
  border-radius:25px
}
.BlogSection .BlogComponentBox:nth-child(even){
  flex-direction:row-reverse;
}
.BlogSection .imgSection img{
  height:15vw;
  border-radius:20px;
}

.BlogSection .BlogBody{
}

.BlogSection .BlogComponentBox .BlogBody .BlogTitle{
  font-size:1.7rem;
  font-weight:bold;
  font-family: 'Anybody', cursive;
}

.BlogSection .BlogComponentBox .BlogBody .BlogTitle .blogSubTitle{
  color:crimson;
  font-size:1.5rem;
  font-family: 'Lato', sans-serif;
}
.BlogSection .BlogBody .paragraphSection .BlogDescription{
  font-size:1.5rem;
  text-align:justify;
  font-family: 'Lato', sans-serif;
}
.BlogSection .BlogBody .paragraphSection .linkToBlog{
  font-size:1.5rem;
  text-decoration:none;
  color:#00F260;
  font-family: 'sans-serif';
}
.footer{
  background:${({ theme }) => theme.colors.header};
  padding:20px;
  color:white;
  font-family:'Lato',"sans-serif";
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:2rem;
}
.blogPage{
  width:80vw;
  margin:auto;
}
.blogPage .blogPageHead h1{
  font-size:4rem;
  color:white;
  font-family: 'Roboto', sans-serif;
}
.blogPage .blogPageHead h1 span{
  color:crimson;
  font-size:3rem;
}
.blogPage .blogPageImgSection .publishedDateText{
  font-family
  font-size:.9rem;
  color:#4b4e4f;
  font-family: 'Roboto Condensed', sans-serif;
}

.blogPage .blogPageImgSection img{
  width:100%;
  height:80vh;
  margin:auto;
  border-radius:5px;
}
.blogPage .blogPageBlogBody p{
  font-family: 'Roboto Condensed', sans-serif;
  color:white;
  font-size:1.8rem;
  text-align:justify;
}
.ErrorPage{
padding:10px;
min-height:85vh;
}
.ErrorPage .ErrorTextBox{
  padding: 15vh 10vw;
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:center;
  align-items:center;
  gap:20px;
  text-wrap:wrap;
}
.ErrorPage .ErrorTextBox h1{
  color:white;
  font-size:5rem;
  font-family:'Lato',sans-serif;
}
.ErrorPage .ErrorTextBox h1 span{
  color:red;
}
.ErrorPage .ErrorTextBox p{
  font-family:'Lato',sans-serif;
  font-size:2rem;
  color:white;
}
.ErrorPage .ErrorTextBox p a{
  color:crimson;
  text-decoration:none;
}
.AdminLoginPage{
  display:flex;
  gap:20px;
  width:80vw;
  margin:auto;
  padding:10vh 0px;
  min-height:70vh;
  flex-direction:column;
  font-family: 'Roboto',sans-serif;
}
.AdminLoginPage h2{
  color:#e81469;
  font-size:3rem;
  font-weight:bold;
  text-align:justify;
}
.AdminLoginPage form{
  display:flex;
  gap:10px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.AdminLoginPage form .inputField{
  width:100%;
  background:#272a2b;
  color:white;
  border:none;
  height:55px;
  border-radius:5px;
  margin:5px;
  font-size:1.5rem;
  padding:10px;
  outline:none;
}
.AdminLoginPage form .LoginButton{
  background:#e81469;
  border-radius:8px;
  width:60%;
  padding:8px;
  border:none;
  height:55px;
  font-size:1.2rem;
  color:white;
  font-weight:bold;
}
.AdminPage{
min-height:100vh;
background-color: #04011a;
}
.AdminPage .adminheader{
  display: flex;
  padding: 10px;
  background-color: #000000;

}
  .AdminPage .adminheader .admintitle{
    display: flex;
  }

.AdminPage .adminheader .admintitle .adminphoto{
  height: 80px;
  border: 2px solid beige;
  border-radius: 50%;

}


@media (max-width: ${({ theme }) => theme.responsive.mobile}) {
  .Header{
    flex-direction:column;
    justify-content:space-between
    height:8vh;
     transition: 0.5s;
  }
  
 .Header .Navbar{
    width:100%;
    height:0px;
    position: absolute;
    background: black;
    top:9vh;
    display:none;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    transition: height 1s;
}

.HeaderActive .Navbar{
  height:auto;
  display:flex;
}

 .Header .Navbar .menu{
    width:100%;
  align-items:start;
  justify-content:start;
  padding:5px 25px;
  flex-direction:column;
  }
  
 .Header .IconsGroup{
    width:100%;
    display:flex;
    justify-content:end;
    gap:10px;
  }

 .HeroSection{
    height:90vh;
  }
  
 .HeroSection .heroTitle{
    font-size:2rem;
  }
  
 .HeroSection .heroParaBox{
    width:100%;
  }
  
 .HeroSection .heroParaBox .heroPara{
    font-size:1.3rem;
  }
  
  .BlogSection{
    top:-20vh;
  }
  
  .HeroSection hr{
    height:5px;
    width:50vw;
  }
  
  .Header .menuToggle {
    display:flex;
  }

  .BlogSection .BlogComponentBox{
    flex-direction:column !important;
  }
  
  .BlogSection .imgSection img{
    width:100%;
    height:auto;
  }
  
  .BlogSection .BlogBody .paragraphSection .BlogDescription{
    font-size:1rem;
  }
  
  .ErrorPage .ErrorTextBox h1{
    font-size:3rem;
  }
  
  .footer{
    font-size:1.2rem;
}

  .AdminLoginPage h2{
    font-size:1.4rem;
  }
  .AdminLoginPage form .LoginButton,.AdminLoginPage form .inputField{
    height:auto;
    font-size:1.2rem;
}
}
`;

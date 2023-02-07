import React from 'react'
// import '../styles/about.css';
const About = () => {
  return (
<div>
      <div style={{backgroundColor: '#a1a1b7',width: '100%',minHeight: '85vh'}} className="section">
          <div style={{display:'block',width:'80%',margin:'auto',paddingTop:'100px'}} className="container">
              <div style={{float:'left',width:'55%'}} className="content-section">
                  <div style={{textTransform: 'uppercase',fontSize: '28px'}} className="title">
                        <h1>About Us!</h1>
                  </div>
                  <div className="content">
                        <h3 style={{marginTop:'20px',color:'#5d5d5d',fontSize:'21px'}}>lorem ipsum sit amet dolor ut labore</h3>
                        <p style={{marginTop:'10px',fontFamily: 'sans-serif',fontSize:' 18px',lineHeight: '1.5'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum modi odio labore quo asperiores, ab aliquid sit iure necessitatibus quidem dolorum ex facilis error doloremque vel? Adipisci, eum voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure aliquam nisi cumque voluptates, voluptas in dolore nihil, delectus repellendus non sunt quae hic corporis nam architecto voluptatibus, ad sint!</p>
                        <p style={{marginTop:'10px',fontFamily: 'sans-serif',fontSize:' 18px',lineHeight: '1.5'}}>Lorem ipsum dolor sit amet consectetur dio labore quidem dolorum ex facilis error doloremque vel? Adipisci, eum voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure aliquam nisi cumque voluptates, voluptas in dolore nihil, delectus repellendus non sunt quae hic corporis nam architecto voluptatibus, ad sint!</p>                        
                        <div style={{marginTop: '30px'}} className="button">
                            <a style={{backgroundColor: '#b13084',padding:'12px 40px',textDecoration: 'none',color:'#fff',fontSize: '25px',letterSpacing: '1.5px'}} href="">Read More</a>
                        </div>
                  </div>
                  <div style={{margin: '40px 40px'}} className="social">
                      <a href=""><i style={{color:'#b13084',fontSize: '30px',padding:'0px 10px'}} class="fab fa-facebook-f"></i></a>
                      <a href=""><i style={{color:'#b13084',fontSize: '30px',padding:'0px 10px'}} class="fab fa-twitter"></i></a>
                      <a href=""><i style={{color:'#b13084',fontSize: '30px',padding:'0px 10px'}} class="fab fa-instagram"></i></a>
                  </div>
              </div>
            <div style={{float: 'right',width:'40%'}} className="image-section">
                <img style={{height: 'auto',width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_shLqCygrRp6KoU9Z39t5-qD0eJX7UyN1VQ&usqp=CAU" alt=""/>
            </div>
          </div>
      </div>
</div>
  )
}

export default About
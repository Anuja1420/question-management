function Home() {
    return (
      <>
  
      <header style={{ 
          position: 'relative', 
          padding: '20px 0', 
          background: 'linear-gradient(90deg, rgba(136, 45, 179, 1) 0%, rgba(237, 144, 250, 1) 100%)',
          color: '#fff', 
          textAlign: 'center', 
          fontSize: '36px', 
          fontWeight: 'bold', 
          fontFamily: 'Arial, sans-serif', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', 
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            
              
          <h1>
              Let's Learn Something New Everyday
            </h1>
          </header>
         
  
  
  
  
  
        <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://versionweekly.com/wp-content/uploads/2020/09/MCQ-Questions.png"height="600" class="d-block w-100" width = "1540" alt="..."/>
      </div>
      
      <div class="carousel-item">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/895/963/small_2x/neon-quiz-game-template-four-options-answers-for-knowledge-exam-in-school-tv-show-illustration-10-eps-vector.jpg" height="600" width = "1540" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  
  <div >
    <img src="..." className="card-img-top" alt="" />
    <div className="card-body">
      <h5 className="card-title"style={{ 
              background: 'linear-gradient(90deg, rgba(136, 45, 179, 1) 0%, rgba(237, 144, 250, 1) 100%)', 
              color: '#fff', 
              textAlign: 'center', 
              padding: '20px 0', 
              fontSize: '36px', 
              fontWeight: 'bold', 
              fontFamily: 'Arial, sans-serif', 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', 
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>Let's Talk About HTML, CSS, JS, React....</h5>
      <p className="card-text">Practice 1000+ Questions Everyday</p>
      <p className="card-text"><small className="text-muted"></small></p>
    </div>
  </div>
  
  
  <div className="card">
    <div className="card-body">
      <h5 className="card-title" style={{ 
              background: 'linear-gradient(90deg, rgba(136, 45, 179, 1) 0%, rgba(237, 144, 250, 1) 100%)', 
              color: '#fff', 
              textAlign: 'center', 
              padding: '20px 0', 
              fontSize: '36px', 
              fontWeight: 'bold', 
              fontFamily: 'Arial, sans-serif', 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', 
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>*Rules*</h5>
      <p className="card-text">1. Answer each question within the given time limit.</p>
                              <p>2. Incorrect answers may result in point deductions.</p> 
                                 <p>3. No external aids or devices are allowed during the quiz.</p>
                                 <p>4. Follow the instructions provided for each question carefully.</p>
                             
                               
                             
  
    </div>
    
  </div>
  
  
      </>
    );
  }
  
  export default Home;
  
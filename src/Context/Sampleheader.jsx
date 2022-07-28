import React from 'react';
import Style from './Style.css';
import study1 from '../pictures/study1.jpg';
import logo from '../pictures/logo.jpg';

function Sampleheader() {
    return( 
           <div>
            {/* <h2>EDUmart </h2> */}
           
            <link rel="stylesheet" href="icons/all.css"/>
            <link rel="stylesheet" href="CSS/samp.css"/>
        
            <div>
            <div id="header">
                <div className="icon">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div classNameName="menu">
                <a href="#">FAQs</a>
            <a href="#">BLOG</a>
            <a href="#">APPLY ONLINE</a>
            <a href="#">REGISTER</a>
            <a href="#"><i className="fas fa-flag-usa"></i>USD<i className="fas fa-sort-down"></i></a>
            <a href="#">English<i className="fas fa-sort-down"></i></a>
            </div>
            </div>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div className="contact">
                    <p>EMAIL<br/><b>info@edumart.com</b></p>        
                    <p>TOLL FREE<br/><b>18000000000</b></p>
                    <a href="#">Student Login <i className="fas fa-play-circle"></i></a>
                </div>
            </div>
            <div className="menu_bar">
                <ul className="list">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">OUR COURSES</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">PAGES</a></li>
                <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="form">
                    <form>
                        <textarea rows="1" cols="30" placeholder="SEARCH NOW"></textarea><i className="fas fa-search"></i>
                    </form>
                </div>    
            </div>
            
            <div className="img_body">
            <img src={study1}alt="study"/>
            <div class="img_text">
                <h6>EXPLORE THE WORLD OF <br/> <span>OUR GRADUATES</span></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia recusandae ut perferendis explicabo ex porro autem est assumenda, repellendus cum id facere dolorem obcaecati vitae earum sint illum delectus!</p>
                <p><a href="#">KNOW MORE </a></p>
            </div>
            <div className="bottom">
                <div className="section1">
                <a href="#"></a>
                <h4> Apply Online </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                <div><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="section2">
                <a href="#"></a>
                <h4> Apply Online </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                <div></div>
                </div>
                <div className="section3">
                <a href="#"></a>
                <h4> Apply Online </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                <div></div>
                </div>
                </div>
            </div>
            </div>
            </div>
        
    )
}
export default  Sampleheader
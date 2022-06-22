import React from 'react';
import '../AboutUs/AboutUs.css'


function AboutUs(){
    return(<div>
        
        <div class="staff_information_left">

                <img class="staff_photos" src={require('./images/Ross.jpg')} alt="Director of Job Training and Employment Services: Jeannie Ross" />

                <p class="staff_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam reiciendis, cumque eos voluptates unde perferendis facere, blanditiis neque hic officia consectetur illum sed ratione rerum facilis asperiores deleniti eum.</p>
        </div> 
        <div class="staff_information_right">
            
                <p class="staff_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam reiciendis, cumque eos voluptates unde perferendis facere, blanditiis neque hic officia consectetur illum sed ratione rerum facilis asperiores deleniti eum.</p>
            
                <img class="staff_photos" src={require('./images/Martha Blaides- T2 Case Manager.jpg')} alt="T2 Case Manager: Martha Blaides" />
            
            
        </div> 
        <div class="staff_information_left"> 
            <img class="staff_photos" src={require('./images/Ron Cofield-T2 Academy Employment Specialist.jpg')} alt="T2 Academy Employment Specialist: Ron Cofield" />
            <p class="staff_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam reiciendis, cumque eos voluptates unde perferendis facere, blanditiis neque hic officia consectetur illum sed ratione rerum facilis asperiores deleniti eum.</p>
        </div> 
        <div class="staff_information_right">
            <p class="staff_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam reiciendis, cumque eos voluptates unde perferendis facere, blanditiis neque hic officia consectetur illum sed ratione rerum facilis asperiores deleniti eum.</p>
            <img class="staff_photos" src={require('./images/John McQueen- T2 Recruitment Leader.jpg')} alt="T2 Recruitment Leader: John McQueen" />
        </div> 

    </div>)
}

export default AboutUs
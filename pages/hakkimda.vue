<template>
    <section class="about">
        <div class="container mt-3">
            <div class="row justify-content-center align-items-center p-5">
                <sectionTitle title="Know Me More" subTitle="About Me" customStyle="animate__animated animate__backInDown" />
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-sm-8 animate__animated animate__backInLeft">
                    <h2 class="">Hi I'm  
                            <span class="fw-bold border-bot">Yunus Emre Fersiz.</span>
                    </h2>
                    <p class="mt-3 about-text">
                        I'm a frontend developer with a passion and eagerness to learn. I enjoy developing simple, clean and user friendly applications. As an individual, I don't believe in creating flawless work but as a team, we can uncover our strengths and weaknesses. By learning from our shortcomings and filling in the gaps, we can bring out the best in our work. I believe that this approach can lead to better outcomes, not only in terms of work but also in our mental and social well-being as individuals.
                    </p>
                    
                </div>
                <div class="col-sm-4 text-center animate__animated animate__backInRight">

                    <div class="number-box mx-auto">
                        <span class="exp-number">1</span>
                    </div>

                    <p class="exp-text mt-3">
                        Years Of  <span style="font-weight: 600;">Experience</span> 
                    </p>
                </div>
            </div>

            <div class="row mt-3">
                <div class="d-sm-flex justify-content-between">
                    <div class="flex-item">
                        <span class="text-green fw-bold">Email:</span>
                        <br>
                        <span class="fw-bold fs-16">
                            yunus.fersiz@gmail.com
                        </span>
                    </div>
                    <div class="flex-item">
                        <span class="text-green fw-bold">Main Branch:</span>
                        <br>
                        <span class="fw-bold fs-16">
                            Frontend Development
                        </span>
                    </div>
                    <div class="flex-item">
                        <span class="text-green fw-bold">Date of birth:</span>
                        <br>
                        <span class="fw-bold fs-16">
                            9 May, 1995
                        </span>
                    </div>
                    <div class="flex-item">
                        <span class="text-green fw-bold">From:</span>
                        <br>
                        <span class="fw-bold fs-16">
                            Bursa, Turkiye
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-100">
            <div class="row justify-content-center">
                <sectionTitle title="Summary Of My Resunme" subTitle="Resume" customStyle="animate__animated animate__backInDown" />
                <div class="col-md-6">
                    <div class="resume-container">
                        <h3>My Education</h3>
                        <ul>
                            <li class="resume-item">
                                <ul>
                                    <li>
                                        <h4 class='fw-bold'>Bachelor in Geomatic Engineering</h4>
                                    </li>
                                    <li>
                                        <span class='text-muted fw-bold'>İzmir Katip Çelebi University / 2014 - 2019 </span>
                                    </li>
                                    <li>
                                        <p class="text-muted education-exp">My undergraduate thesis is : As a Coastline change detection using remote sensing data case of Çeşme</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="resume-container">
                        <h3>My Experience</h3>
                        <ul>
                            <li class="resume-item">
                                <ul>
                                    <li>
                                        <h4 class='fw-bold'>Internship in GOVIVA Software</h4>
                                    </li>
                                    <li>
                                        <span class='text-muted fw-bold'>Intern Frontend Developer</span>
                                    </li>
                                    <li>
                                        <p class="text-muted education-exp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quasi corrupti harum repellat consequuntur, sed assumenda impedit natus exercitationem dolorum.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="resume-item">
                                <ul>
                                    <li>
                                        <h4 class='fw-bold'>Software Developer in GOVIVA Software</h4>
                                    </li>
                                    <li>
                                        <span class='text-muted fw-bold'>Junior Frontend Developer</span>
                                    </li>
                                    <li>
                                        <p class="text-muted education-exp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quasi corrupti harum repellat consequuntur, sed assumenda impedit natus exercitationem dolorum.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container mt-100">
            <div class="row">
                <h1 class="text-center"> 
                    <span class="about-subtitle">Skills</span>  
                </h1>
                <h1 class="about-title mt-3 text-center">My Skills</h1>

                <div class="col-md-6">
                    <progressBar progressBarTitle="JavaScript" progressBarPercent="90" />
                    <progressBar progressBarTitle="HTML" progressBarPercent="100" />
                    <progressBar progressBarTitle="CSS" progressBarPercent="90" />
                    <progressBar progressBarTitle="Bootstrap" progressBarPercent="100" />
                </div>

                <div class="col-md-6">
         
                    <progressBar progressBarTitle="Vue JS" progressBarPercent="60" />
                    <progressBar progressBarTitle="Nuxt JS" progressBarPercent="70" />
                    <progressBar progressBarTitle="Statamic CMS" progressBarPercent="100" />
                    <progressBar progressBarTitle="React Native" progressBarPercent="40" />

                </div>
            </div>

            <div class="row mt-5">
                <div class="col-12 text-center">
                    <button class="btn  btn-cv hvr-shutter-out-horizontal">Download CV</button>
                </div>
            </div>
        </div>

        <img src="/shapes/shape-1.png" alt="" class="shape-size shape-1">
        <img src="/shapes/shape-2.png" alt="" class="shape-size shape-2">
        <img src="/shapes/shape-3.png" alt="" class="shape-size shape-3">
        <img src="/shapes/shape-4.png" alt="" class="shape-size shape-4">
     
    </section>
</template>
<script>
import sectionTitle from '../components/UI/section-title.vue';
import progressBar from '../components/UI/progress-bar.vue';
export default {
    data(){
        return{
        }
    },
    components:{
        sectionTitle,
        progressBar
    }
}
</script>
<style lang="css">

.about{
    position: relative;
    overflow: hidden;
}


.border-bot {
    border-bottom: 3px solid var(--yorange);
}

.about-text {
    font-size: 18px;
    line-height: 34px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}


.number-box {
    background-color: var(--yorange);
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

.exp-number {
    font-size: 75px;
    font-family: "poppings", sans-serif;
    color: white;
}

.exp-text {
    font-size: 24px;
    font-family: "poppings", sans-serif;
    font-weight: 500;
}


.resume-container ul {
    padding: 0 !important;
}

.resume-container {
    border-left: 2px solid var(--yorange);
    padding-left: 15px;
    padding-right: 15px;
}

.education-exp {
    font-size: 16px;
    margin-top: 10px;
}

.resume-item {
    margin-bottom: 35px;
    margin-top: 20px;
}


.btn-cv{
    background-color: var(--ypurple);
    color: white;
    border: none;
    padding: 10px 40px;
    border-radius: 5%;
}


.shape-size{
    width: 150px;
    height: 150px;
} 

.shape-1{
    position: absolute;
    top: 5%;
    right: 10%;
}

.shape-2 {
    position: absolute;
    bottom: 18%;
    right: 42%;
}

.shape-3 {
    position: absolute;
    bottom: 53%;
    right: 15%;
}

.shape-4 {
    position: absolute;
    bottom: 30%;
    right: 85%;
}

</style>


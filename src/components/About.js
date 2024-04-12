import React from 'react';
import "../styles/About.css";
import ThemeContext from '../contexts/ThemeContext'

export default function About() {
  const {theme} = React.useContext(ThemeContext);

  const colorP = theme ? 'darkP' : 'lightP';
  const colorM = theme ? 'darkM' : 'lightM';

  return (
    <div className='about-cont'>
      <section id="about-cb">
        <h2><span className={!theme ? 'light' : 'dark'}>About Cloud Builder</span></h2>
        <p className={colorP}>Cloud Builder is not just another web application; it's a platform that empowers users to train AI models in the cloud. Whether you're a seasoned data scientist, a machine learning enthusiast, or someone looking to delve into the world of artificial intelligence, Cloud Builder offers the tools and resources you need to bring your ideas to life.</p>
        <p className={colorP}>Our user-friendly interface, robust infrastructure, and comprehensive documentation ensure that you can focus on what matters most—developing innovative AI solutions. With Cloud Builder, the possibilities are endless, and the only limit is your imagination.</p>
      </section>

      <section id="our-mission">
        <h2><span className={!theme ? 'light' : 'dark'}>Our Mission</span></h2>
        <p className={colorP}>At Cloud Builder, we're committed to democratizing AI development. Our mission is to provide accessible and scalable cloud-based solutions for training AI models. Whether you're working on image recognition, natural language processing, or predictive analytics, we strive to make advanced AI technologies available to everyone.</p>
        <p className={colorP}>We believe that the future of AI lies in the hands of diverse minds from all walks of life. That's why Cloud Builder is designed to cater to developers, researchers, students, and businesses alike. Together, we can harness the power of AI to solve complex problems, drive innovation, and shape a better tomorrow.</p>
        <p className={colorP}>Join us on our mission to democratize AI. Let's build a community where knowledge is shared, ideas are nurtured, and breakthroughs are celebrated.</p>
      </section>

      <section id="key-features">
        <h2><span className={!theme ? 'light' : 'dark'}>Key Features</span></h2>
        <ol>
          <li className={colorM}>
            <h3>Scalable Infrastructure</h3>
            <p className={colorP}>Cloud Builder offers a scalable infrastructure for training AI models of any size. Whether you're running experiments on small datasets or training deep learning models on massive datasets, our cloud-based platform ensures optimal performance and reliability.</p>
          </li>
          <li className={colorM}>
            <h3>Comprehensive Toolkit</h3>
            <p className={colorP}>From pre-built algorithms to customizable frameworks, Cloud Builder provides a comprehensive toolkit for AI development. Access cutting-edge machine learning libraries, experiment with advanced neural network architectures, and leverage cloud resources to accelerate your projects.</p>
          </li>
        </ol>
      </section>

      <p className={colorP}>For inquiries, feedback, or support, please contact us at <a className = {colorM} href="mailto:support@cloudbuilder.com">support@cloudbuilder.com</a>. We're here to empower you on your AI journey.</p>
      <p className={colorP}>Thank you for choosing Cloud Builder. Let's build the future of AI together!</p>

    </div>
  );
}

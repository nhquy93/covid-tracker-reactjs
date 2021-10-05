import React from 'react';
import './styles.scss';

function Footer() {
    return (
        <section id="footer">
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-sm-6">
                    <h3>About me</h3>
                    <p>My name is Quy I'm a Software Engineer based in Can Tho ☀️.
                    I describe myself as a hardworking who loves coding, technical things to improve my skills ❤️.</p>
                    <p>In my free time you can find me at cafe ☕, I love watching the sea, sunset, playing guitar and having a
                    picnic with my loved ones.</p>
                    <p>This is just my simple ReactJS web app based on
                    HoleTex guide channel</p>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.facebook.com/huuquy93/">
                            <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.linkedin.com/in/huu-quy-nguyen-6642601b5/">
                            <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.youtube.com/c/HoleTex">
                            <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-6">
                    <h3>Keep in touch</h3>
                    <ul class="list-unstyled">
                    <li>
                        <p><strong><i class="fas fa-map-marker-alt"> Address:</i></strong> Nga Bay, Hau Giang</p>
                    </li>
                    <li>
                        <p><strong><i class="fas fa-envelope"> Email:</i></strong><a href="#">nhquy93@gmail.com</a></p>
                    </li>
                    <li>
                        <p><strong><i class="fas fa-phone"> Phone:</i></strong> +84 339 639 686</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
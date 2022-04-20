import React from "react";
import mc from "../mc.png";
const About = () => {
  return (
    <section className="container">
      <h1>McDonald's</h1>
      <section>
        McDonald's is an American multinational fast food corporation, founded
        in 1940 as a restaurant operated by Richard and Maurice McDonald, in San
        Bernardino, California, United States. They rechristened their business
        as a hamburger stand, and later turned the company into a franchise,
        with the Golden Arches logo being introduced in 1953 at a location in
        Phoenix, Arizona. In 1955, Ray Kroc, a businessman, joined the company
        as a franchise agent and proceeded to purchase the chain from the
        McDonald brothers. McDonald's had its previous headquarters in Oak
        Brook, Illinois, but moved its global headquarters to Chicago in June
        2018
      </section>
      <img src={mc} alt="McDonald's" />
    </section>
  );
};

export default About;

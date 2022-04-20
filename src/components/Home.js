import React from "react";
import pic from "../pic.png";


const Home = () => {
  return (
    <section className="container">
      <h1>Welcome home</h1>
      <img src={pic} alt="logo" />

      <h2>
        Explore our free curriculum-linked resources for students aged 14+
      </h2>

      <p>
        <b>Students</b>: Our resources have been designed to give you a wide
        understanding of what it takes to run an internationally successful
        business, whilst helping to develop core employability skills and
        explore work opportunities beyond the school gates.
      </p>

      <p>
        <b>Teachers</b>: Introduce your students to curriculum-linked topics and take
        them on a business journey from farm to fork, whilst supporting the
        Gatsby Benchmarks. You can choose whether to deliver each resource in
        sequence or take your pick across two or more lessons. Resources include
        videos, case studies and challenges that bring business, food technology
        and the world of work to life.
      </p>
    </section>
  );
};

export default Home;

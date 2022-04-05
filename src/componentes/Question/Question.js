import React from "react";
import { Animated } from "react-animated-css";
import Product from "../Product.js/Product";
// import {Animated} from "react-animated-css";


const Question = () => {
  return (
    <div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        voluptatem in quis doloribus asperiores nemo rem dolores! Voluptatem
        adipisci modi, obcaecati totam, optio laudantium cumque illo enim
        perspiciatis veritatis rerum.
      </p> */}

      <section className="container" >
      <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
        <div className="row g-4 my-5">
          <div className="col-md-6 col-lg-4">
            <div className="p-3 d-flex align-items-center justify-content-between border rounded-3 border">
              <h5  >How React Work?</h5>
            </div>
            <p className="text-white bg-dark p-2 text-align-items-start">
              React is a flexible efficient open-source javascript framework.
              React working by virtual dom real dom diff algorithm. Virtual dom
              representing a UI is kept in memory and synced with the real dom
              by a library such as react-dom.it is called reconciliation. Real
              dom and virtual dom comparison by diff algorithm.
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 d-flex align-items-center justify-content-between border rounded-3 border">
              <h5>Difference Between Props & State?</h5>
            </div>
            <p className="bg-success text-white bg-success p-2 text-align-items-start">
              Props: Data pass once component to another component.It is
              immutable.Props can be used with state and functionmal components.
              Props read only.<br></br>
              State:Data only pass with the component.It is mutable.State can be
              use only with the state components.State is read and write.State
              can be asynchronous.
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 d-flex align-items-center justify-content-between border rounded-3 border">
              <h5 className=" ">How useState wrok?</h5>
            </div>
            <p className="bg-success text-white bg-dark p-2 text-align-items-start">
              useState is hook function.It is allow state variables in the
              functional components. It is pas the initial state to the function
              and returns a variavle from the current state and state upadated
              the value. So updating be the value from the previous state.
            </p>
          </div>

          {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque fuga nobis, ea fugit atque quaerat ab rem magni. Quae, architecto magni ullam aliquam ab tenetur alias dolorum ipsa quis.</p>
    </div>
</Animated> */}


        </div>
        </Animated> 
      </section>
    </div>
  );
};

export default Question;

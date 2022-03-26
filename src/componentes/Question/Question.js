import React from "react";

const Question = () => {
  return (
    <div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        voluptatem in quis doloribus asperiores nemo rem dolores! Voluptatem
        adipisci modi, obcaecati totam, optio laudantium cumque illo enim
        perspiciatis veritatis rerum.
      </p> */}

<section class="container" id=" ">
      <div class="row g-4 my-5">
        <div class="col-md-6 col-lg-4">
          <div
            class="p-3 d-flex align-items-center justify-content-between border rounded-3 border"
          >
            <h5 class=" ">How Dose Javascript Work?</h5>
          </div>
          <p class="text-white bg-success p-2 text-align-items-start">
            Javascript is a high-level programming language and single-threaded
            language. Javascript is the mother language for web applications.
            Dom creates a web page with HTML, CSS then the javascript engine
            loads the page. Javascript always waiting for html and CSS complete
            loads then javascript is executed order by code and Dom updated
            javascript code rendered by the browser.
          </p>
        </div>
        <div class="col-md-6 col-lg-4">
          <div
            class="p-3 d-flex align-items-center justify-content-between border rounded-3 border"
          >
            <h5 class=" ">
              Difference Between Local storage & Session Storage?
            </h5>
          </div>
          <p
            class="bg-success text-white bg-success p-2 text-align-items-start"
          >
            Local Storage: Data was deleted manually. Working for any tab not
            working specific tab. Local storage is always data stored
            permanently. Local storage has four methods. Session Storage: When a
            browser or tab closes data auto-deleted.Working for a specific tab.
            Session storage data does not get permanently Session Storage has
            four methods.
          </p>
        </div>
        <div class="col-md-6 col-lg-4">
          <div
            class="p-3 d-flex align-items-center justify-content-between border rounded-3 border"
          >
            <h5 class=" ">What Does Event Loop?</h5>
          </div>
          <p
            class="bg-success text-white bg-success p-2 text-align-items-start"
          >
            Event loop working with heap, stack & queue. Heap used for memory
            management it was an unstructured memory block. Stack working
            sequentially it is working in last in first out. Queue working
            asynchronously. The queue is stored call back. It's working fast in
            fast out.
          </p>
        </div>
      </div>
    </section>






    </div>
  );
};

export default Question;

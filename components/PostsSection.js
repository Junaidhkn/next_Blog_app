import Image from "next/image.js"

const postsSection = () => {
   return (
      <section>
         <div className='container '>
            <div>
               <span>React.js</span>
               <h3>I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
               <div>
                  <p>Name</p>
                  <p>Date</p>
               </div>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
            </div>
            <div>
               <div></div>
               <Image></Image>
            </div>
         </div>
         <div className='container '>
            <div>
               <span>React.js</span>
               <h3>I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
               <div>
                  <p>Name</p>
                  <p>Date</p>
               </div>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
            </div>
            <div>
               <div></div>
               <Image></Image>
            </div>
         </div>
      </section>
   )
}

export default postsSection
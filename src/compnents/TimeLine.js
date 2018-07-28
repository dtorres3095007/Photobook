import React,{Component} from 'react'

class Timeline extends Component{
  render(){
    return (
      <section className = "timeline">
      <article>
        <h2 className="post_person">DamianTorres</h2>
        <figure>
          <img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/>
        </figure>
        <section>
          <p className="post_like">10 Me gusta</p>
          <p className="post_info">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="post_date">Dec 15, 2018</p>
        </section>
      </article>
        <article>
          <h2 className="post_person">DamianTorres</h2>
          <figure>
            <img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/>
          </figure>
          <section>
            <p className="post_like">10 Me gusta</p>
            <p className="post_info">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
            <p className="post_date">Dec 15, 2018</p>
          </section>
        </article>
        <article>
          <h2 className="post_person">DamianTorres</h2>
          <figure>
            <img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/>
          </figure>
          <section>
            <p className="post_like">10 Me gusta</p>
            <p className="post_info">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
            <p className="post_date">Dec 15, 2018</p>
          </section>
        </article>
      </section>
    )
  }

}
export default Timeline

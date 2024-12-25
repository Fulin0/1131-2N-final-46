import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import menu_data from './menu_data'

const S2Page_46 = ({ id, title, img, category, price, descrip }) => {
  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>S2Page_46: Fulin</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button type={category} className='filter-btn' data-id={category}>
                {category}
              </button>
            </div>
            <article className='menu-item'>
              <img src={img} alt='' salad='' className='photo' />
              <div className='item-info'>
                <header>
                  <h4>
                    {id}-{title}
                  </h4>
                  <h4 className='price'>{price}</h4>
                </header>
                <p className='item-text'>{descrip}</p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}

const S2Page_xx = () => {
  const [menu, setMenu] = useState(menu_data)
  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>S2Page_46: Fulin</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button type='button' className='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' className='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' className='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' className='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' className='filter-btn' data-id='shakes'>
                shakes
              </button>
            </div>
            <div className='section-center'>
              <article className='menu-item'>
                <img
                  src='/mid_xx//item-1.jpeg'
                  alt='buttermilk'
                  pancakes=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>buttermilk pancakes</h4>
                    <h4 className='price'>15.59</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimos ullam. E
                  </p>
                </div>
              </article>
              <article className='menu-item'>
                <img
                  src='/mid_xx//item-5.jpeg'
                  alt='buttermilk'
                  pancakes=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>Egg Attack</h4>
                    <h4 className='price'>2.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissim
                  </p>
                </div>
              </article>
              <article className='menu-item'>
                <img
                  src='/mid_xx//item-7.jpeg'
                  alt='buttermilk'
                  pancakes=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>Bacon Overflow</h4>
                    <h4 className='price'>8.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimo
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default S2Page_xx

import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import menu_data from './menu_data'

const S3Page_xx = () => {
  const [menu, setMenu] = useState(menu_data)

  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>S3Page_46: Fulin</h2>
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
                  src='/mid_xx/item-2.jpeg'
                  alt='big'
                  salad=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>2-diner double</h4>
                    <h4 className='price'>13.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimos ullam. Enim
                    voluptas, expedita
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
export default S3Page_xx

import React from 'react'
import { withRouter } from 'react-router';
import laptop1 from '../../assets/laptop.jpeg';
import  './main-section.styles.scss';


const MainSection = ({history}) => {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={laptop1} alt="laptop"/>
                </div>
                <div className="ms-m-description">
                    <h2>Designed for your comfort</h2>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        {/* Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum." */}
                    </p>
                    <button className="button is-black" id="show-now" onClick={() => history.push('/product/1')}>
                        Office Laptop
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter (MainSection);

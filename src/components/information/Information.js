import React from "react";
import './information.css';

const Information = ({ language }) => {
  return(
    <>
      {language === 'Spanish' ? (
        <div className='container-info' data-cy='information-section'>
          <h2 className='text-titulo'>Mas cosas que saber sobre mi</h2>
            <p className='listed-items'>
              <a
                href='https://www.efset.org/cert/wqpnK1'
                target='_blank'
                rel="noreferrer"
                style={{ textDecoration: 'none' } }
                data-cy='link-ingles'
              >
              Ingles bilingüe.
              </a>
            </p>
            <p className='listed-items'>
              <a
                href='https://github.com/pablofretes/fullstackopen/'
                target='_blank'
                rel="noreferrer"
                style={{ textDecoration: 'none' } }
                data-cy='link-fullstackopen'
              >
              Curso completo de FullStack Open 2021 
              </a>
            </p>
        </div>
      ) : (
        <div className='container-info' data-cy='information-section'>
          <h2 className='text-titulo'>Some more info about me</h2>
            <p className='listed-items'>
              <a
                href='https://www.efset.org/cert/wqpnK1'
                target='_blank'
                rel="noreferrer"
                style={{ textDecoration: 'none' } }
                data-cy='link-ingles'
              >
              Bilingual English
              </a>
            </p>
            <p className='listed-items'>
              <a
                href='https://github.com/pablofretes/fullstackopen/'
                target='_blank'
                rel="noreferrer"
                style={{ textDecoration: 'none' } }
                data-cy='link-fullstackopen'
              >
              Completed FullStack 2021 Course
              </a>
            </p>
        </div>
      )}
    </>
  );
};

export default Information;
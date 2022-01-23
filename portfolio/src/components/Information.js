import React from "react";

const Information = () => {
    return(
        <div className='container' data-cy='information-section'>
            <h2 className='text-titulo'>Mas cosas que saber sobre mi</h2>
            <ul>
                <li className='listed-items'>
                    Ingles bilingüe.
                </li>
                <li className='listed-items'>
                    <a
                        href='https://github.com/pablofretes/fullstackopen/'
                        target='_blank'
                        rel="noreferrer"
                        style={{ textDecoration: 'none' } }
                        data-cy='link-fullstackopen'
                    >
                    Curso completo de FullStack Open 2021 
                    </a>
                </li>
                <li className='listed-items'>
                    <a
                        href='https://www.codewars.com/users/pablofretes/completed_solutions'
                        target='_blank'
                        rel="noreferrer"
                        style={{ textDecoration: 'none' } }
                        data-cy='link-codewars'
                    >
                    Perfil de Codewars 
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Information;
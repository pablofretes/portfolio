import React from "react";

const Information = ({ language }) => {
    return(
        <>
            {language === 'Spanish' ? (
                <div className='container' data-cy='information-section'>
                    <h2 className='text-titulo'>Mas cosas que saber sobre mi</h2>
                    <ul>
                        <li className='listed-items'>
                            <a
                                href='https://www.efset.org/cert/wqpnK1'
                                target='_blank'
                                rel="noreferrer"
                                style={{ textDecoration: 'none' } }
                                data-cy='link-ingles'
                            >
                            Ingles bilingüe.
                            </a>
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
            ) : (
                <div className='container' data-cy='information-section'>
                    <h2 className='text-titulo'>Some more info about me</h2>
                    <ul>
                        <li className='listed-items'>
                            <a
                                href='https://www.efset.org/cert/wqpnK1'
                                target='_blank'
                                rel="noreferrer"
                                style={{ textDecoration: 'none' } }
                                data-cy='link-ingles'
                            >
                            Bilingual English
                            </a>
                        </li>
                        <li className='listed-items'>
                            <a
                                href='https://github.com/pablofretes/fullstackopen/'
                                target='_blank'
                                rel="noreferrer"
                                style={{ textDecoration: 'none' } }
                                data-cy='link-fullstackopen'
                            >
                            Completed FullStack 2021 Course
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
                            CodeWars Profile
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Information;
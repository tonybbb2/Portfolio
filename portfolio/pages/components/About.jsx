import React from 'react'


export const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>À propos</p>
                    <h2 className='py-4'>Qui suis-je</h2>
                    <p className='py-2 text-gray-600'>Pas un développeur comme les autres!</p>
                    <p className='py-2 text-gray-600'>Je suis un étudiant dynamique et passionné, qui recherche activement un stage en informatique. Je possède une solide connaissance des principaux langages de programmation ainsi qu'une compréhension avancée des systèmes informatiques et des réseaux. </p>
                    <p className='py-2 text-gray-600'>Je suis très engagé à apprendre de nouvelles technologies et à trouver des solutions innovantes aux problèmes informatiques. Mon attention aux détails et ma capacité à apprendre et à appliquer rapidement les nouvelles technologies font de moi le candidat idéal à un poste de stage en informatique.</p>
                    <p className='py-2 text-gray-600'>Je suis doté d'un esprit analytique et d'un bon sens de l'organisation et de la gestion des tâches. Je suis très motivé et je suis prêt à travailler dur pour atteindre les objectifs de l'entreprise. Je suis également capable de travailler en équipe et je sais m'adapter rapidement à des environnements de travail changeants.  </p>
                    <p className='py-2 text-gray-600'>Je suis impatient de mettre mes compétences et mon expérience en informatique au service d'une entreprise et de contribuer à ses succès. </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200'>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt='/'></img>
                </div>
            </div>
        </div>
    )
}

export default About
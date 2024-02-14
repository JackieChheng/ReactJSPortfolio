const About = () => {
  return (
    <div id="about" data-testid="about-container" data-name="about" className='h-130vh font-default text-base font-medium w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'> ✨About Me✨</p>
            </div>
            <p className='text-xl mt-20 font-light'>
            Hello! I am a full stack developer student currently attending the University of Utah and looking for new opporunites and internships.
            </p>
            <br />
            <p className='text-xl font-light'>
            Always excited to learn more and further gain knowledge to help problem solve solutions to future clients and employers. Some of the technologies below are the ones I feel most comfortable using.
            </p>
            </div>
            
            
        
    </div>
  )
}

export default About;
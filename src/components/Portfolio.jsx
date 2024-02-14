const Portfolio = () => {

    const portfolios = [
      {
        id:1,
        demoUrl:'',
        codeUrl:'',
        title:'',
        description:''
      }
    ]
    function handleDemoClick(demoUrl) {
        window.open(demoUrl, "_blank");
      };

      function handleCodeClick(codeUrl) {
        window.open(codeUrl, "_blank");
      };
  return (
    <section name="portfolio" className='font-default text-base bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
  <article className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <header className='mt-20 pb-8 sm:mt-0'>
      <h1 className='text-4xl font-bold inline border-b-4 border-pink-500'>🎨 Portfolio</h1>
      <p className='py-6'> <a href="" className="text-pink-500 hover:underline"></a></p>
    </header>
    <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      {portfolios.map(({ id, src, demoUrl, codeUrl, title, description }) => (
        <article key={id} className='shadow-md shadow-purple-500 rounded-lg duration-200 hover:scale-105'>
          <h2 className="text-xl text-center font-bold shadow-md shadow-indigo-500">{title}</h2>
          <div className='flex justify-between items-center'>
            {title === 'Retro Rush' && <span className='text-sm bg-yellow-300 text-black py-1 px-2 rounded'>Featured</span>}
          </div>
          <p className='text-sm m-2'>{description}</p>
          <img src={src} alt={title} className='rounded-md' />
          <div className='flex item-center justify-center'>
            <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(demoUrl)}>Demo</button>
            <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(codeUrl)}>Code</button>
          </div>
        </article>
      ))}
    </section>
  </article>
</section>
  )
}

export default Portfolio;
import img from './assets/BistroBoss.png'

const AboutMe = () => {
    return (
        <div className="aboutPage md:p-5 p-2 newspaper rounded-md my-10">

            <div className="hr-with-text md:mb-0 mb-5">
                <span className="text-xs font-bold px-4">In details</span>
            </div>
            <div className='flex flex-col md:flex-row  justify-between items-center'>
                <div className="w-72 h-40  changingBg"></div>
                <h1 className="lg:text-7xl text-5xl my-5 font-extrabold text-center">About me</h1>
                <div className="w-72 h-40  changingBg"></div>
            </div>
            <hr className="border-yellow-600 my-2 border-2" />
            <div className="grid grid-cols-12 gap-5 font-semibold">
                <div className="lg:col-span-9 col-span-12  space-y-5">
                    <div className=" changingBg p-2">
                        <h1 className="text-xl md:text-3xl font-semibold">Headline: Passionate Web Developer Delivering Innovative Solutions</h1>
                    </div>
                    <div className='grid col-span-1 md:grid-cols-2 gap-5'>
                        <p className='text-justify content-heading '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione porro cum soluta consectetur reiciendis possimus laborum ipsa eos quibusdam ab.</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione porro cum soluta consectetur reiciendis possimus laborum ipsa eos quibusdam ab.</p>
                    </div>
                    <div className='w-full h-[200px] md:h-[350px] '>
                        <img className='w-full h-full object-cover' src={img} alt="" />
                    </div>
                    <div className=" changingBg p-2">
                        <h1 className="text-xl md:text-3xl font-semibold">Headline: Passionate Web Developer Delivering Innovative Solutions</h1>
                    </div>
                    <div className='grid  grid-cols-1 md:grid-cols-2 gap-5'>
                        <p className='text-justify content-heading'>Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto fugit esse suscipit id eos corporis deserunt explicabo in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus, possimus saepe odit quam corrupti voluptatem perspiciatis non omnis assumenda? Eaque inventore laboriosam cupiditate nisi repudiandae, qui cum molestiae provident quis nostrum iure quia vero dolores fuga earum nesciunt eum suscipit cumque voluptate maxime alias accusant  elit. Ratione porro cum soluta consectetur reiciendis possimus laborum ipsa eos quibusdam ab.</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit nobis nemo magni sit vero libero laborum. In nesciunt consequuntur accusamus laborum voluptatem labore? Natus iure qui, modi reiciendis esse, vel, officiis iusto recusandae beatae provident odit cupiditate. Illo, sequi maiores harum aut repellat sed sunt quisquam optio cumque? In! porro cum soluta consectetur reiciendis possimus laborum ipsa eos quibusdam ab.</p>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12  grid lg:grid-cols-1 grid-cols-1 md:grid-cols-3 gap-10 lg:space-y-8">
                    <div className='space-y-2 '>
                        <img className='md:w-full mx-auto w-[200px] lg:h-52' src={img} alt="" />
                        <p className='text-justify content-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero quaerat natus laborum perferendis aut quas obcaecati assumenda corporis voluptatibus?</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='md:w-full mx-auto w-[200px] lg:h-52' src={img} alt="" />
                        <p className='text-justify content-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero quaerat natus laborum perferendis aut quas obcaecati assumenda corporis voluptatibus?</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='md:w-full mx-auto w-[200px] lg:h-52' src={img} alt="" />
                        <p className='text-justify content-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero quaerat natus laborum perferendis aut quas obcaecati assumenda corporis voluptatibus?</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
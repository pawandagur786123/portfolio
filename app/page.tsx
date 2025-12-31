import Image from 'next/image';

export default function Home() {
  const projects = [
    { id: '01', image: '/project-01.png', title: 'Split Signal' },
    { id: '02', image: '/project-02.png', title: 'Split Signal' },
    { id: '03', image: '/project-03.png', title: 'Split Signal' },
    { id: '04', image: '/project-04.png', title: 'Split Signal' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-5 pt-[155px] pb-[60px]">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex flex-wrap gap-5 items-start">
            <h1 className="hero-title text-green">Pawan</h1>
            <Image
              src="/star-icon.svg"
              alt="Star"
              width={120}
              height={120}
              className="mt-[5px]"
            />
          </div>
          
          <div className="flex flex-col gap-[21px] max-w-[300px] mt-[284px]">
            <p className="body-text text-black">
              Art direction meets collage chaos. I design bold, layered identities with personality.
            </p>
            <p className="body-text text-black">Scroll for more</p>
          </div>
        </div>
        
        <h2 className="hero-title text-green mt-[55px]">Dagur</h2>
      </section>

      {/* Pixel Art Section */}
      <section className="relative w-full h-[800px]">
        <Image
          src="/hero-pixel-art.png"
          alt="Pixel art decoration"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-8 right-8 body-text text-black">1</div>
      </section>

      {/* Project Grid */}
      <section className="grid grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col">
            <div className="relative w-full aspect-[640/528]">
              <Image
                src={project.image}
                alt={`Project ${project.id}`}
                fill
                className="object-cover"
              />
            </div>
            <div className={`flex justify-between items-center px-5 py-10 h-[100px] ${index % 2 === 0 ? 'border-r' : ''}`}>
              <span className="label-text text-black">Project {project.id}</span>
              <span className="project-title text-black">{project.title}</span>
            </div>
          </div>
        ))}
      </section>

      {/* View All Projects CTA */}
      <section className="bg-blue rounded-[40px] mx-[56px] my-[80px] py-[68px] flex items-center justify-center">
        <h2 className="section-title text-light-blue underline decoration-[#029902] decoration-2 underline-offset-8">
          View all projects
        </h2>
      </section>

      {/* About Section */}
      <section className="px-[280px] py-[40px] flex flex-col gap-6">
        <h3 className="small-caps text-black">Mildly impressive moments</h3>
        <p className="body-large text-black">
          Along the way: featured on Figma Community, invited to speak at a design thing, and once accidentally made a typeface that looked like pasta. My work has shown up in zines, mockups, sticker-covered laptops, and one Berlin subway ad (true story). Small wins, big joy.
        </p>
        <div className="flex items-center gap-1">
          <span className="body-text font-semibold text-blue">More about me</span>
          <Image
            src="/arrow-right-icon.svg"
            alt="Arrow"
            width={10}
            height={8}
          />
        </div>
      </section>

      {/* Inspiration Carousel */}
      <section className="bg-beige py-[80px] px-5 flex flex-col gap-10 overflow-hidden">
        <h2 className="section-title text-brown">Inspo l∞p</h2>
        <div className="relative w-full h-[202px] overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Image
              src="/inspiration-marquee.svg"
              alt="Inspiration images"
              width={1280}
              height={202}
              className="inline-block"
            />
            <Image
              src="/inspiration-marquee.svg"
              alt="Inspiration images"
              width={1280}
              height={202}
              className="inline-block"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-green' : 'bg-light-blue'}`}
            />
          ))}
        </div>
        <h2 className="section-title text-blue underline decoration-[#fcbe1d] decoration-2 underline-offset-8 relative z-10">
          Let's work together
        </h2>
      </section>

      {/* Playground Section */}
      <section
        className="relative h-[460px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/playground-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="medium-title text-brown relative z-10">Make a mess with me</h2>
        
        <Image
          src="/yellow-paper.png"
          alt="Yellow paper"
          width={719}
          height={179}
          className="absolute top-0 left-[48px]"
        />
        <Image
          src="/film-strip.png"
          alt="Film strip"
          width={395}
          height={329}
          className="absolute top-0 left-0"
        />
        <Image
          src="/brown-paper.png"
          alt="Brown paper"
          width={585}
          height={178}
          className="absolute bottom-0 right-[10px]"
        />
        <Image
          src="/tape.png"
          alt="Tape"
          width={314}
          height={188}
          className="absolute bottom-[55px] right-[260px]"
        />
      </section>

      {/* Footer */}
      <footer className="px-5 py-[80px] flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <span className="body-text text-black">© 2025</span>
          
          <div className="flex items-center gap-3">
            <span className="body-text text-black">Home</span>
            <Image src="/bullet-icon.svg" alt="" width={4} height={4} className="rounded-full" />
            <span className="body-text text-black">Work</span>
            <Image src="/bullet-icon.svg" alt="" width={4} height={4} className="rounded-full" />
            <span className="body-text text-black">About</span>
          </div>
          
          <span className="body-text text-black">Colin Gridley</span>
        </div>
        
        <div className="relative w-full h-[99px]">
          <Image
            src="/footer-shapes.svg"
            alt="Footer shapes"
            fill
            className="object-contain"
          />
        </div>
      </footer>
    </main>
  );
}
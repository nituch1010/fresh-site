import React, { useState } from 'react';
import { 
  ArrowRight, Mail, Instagram, Twitter, Linkedin, Menu, X, 
  Sparkles, Home, FileText, Image as ImageIcon, ExternalLink, ChevronRight, ChevronLeft, ArrowLeft 
} from 'lucide-react';

const SITE_DATA = {
  name: "Nitu Choudhary",
  role: "Creative Director & Strategist",
  tagline: "Designing chaos into clarity.",
  heroImage: "nituwall.jpeg",
  about: "My background deeply marked my sensitivity to alternative and underrepresented voices (i.e., this affects the angle or sources used or excluded from my local reporting). I come from Rajasthan, India, where formal educational opportunities and spaces for public expression have been particularly limited — for marginalized communities. Growing up in such a dynamic, I recognized the multitude of voices left out or silenced in mainstream narratives. This awareness led me to become interested in journalism that attempts to expose and bring attention to the numerous perspectives that often disappear into the official media narrative. I reflected on this mentality as I designed my portfolio in the Hillingdon community by thinking about fairness, inclusiveness, and representation of all types of folks. I have decided to do my reporting in a way that reflects the stories of people in the city (not privileged or elite in that community) so there are more representative voices heard. I wanted local audiences to feel as if someone else is talking to them and for them and not looking at the community from the outside. This informed my editorial decisions on multiple tasks. Due to the different perspective each of us had regarding how we approached this class of discussions, I got to interact with students and youth who had relocated in the neighborhood for numerous workshops and reporting assignments, because their perspective was completely opposite that of long-time residents. In getting that perspective down, my research brought home new perspectives and illuminated the local impact of migration, education, and social change on younger people. This added to the connectedness of the reported news to a broader demographic and inclusion of the broader society and reinforced the idea that the reporting reflected social diversity. The result was journalism that grounded us in the personal and tied together the dots from personal experience to the macro issues in society in a way that was palpable and relatable to readers. Using language was also a big part of the design process: I made a serious effort to make sure every phrase was written in an accessible way. I avoided terms with many meanings if they were technical and were not a clear example of what was being said. I realized that the use of overly cumbersome language limits accessibility and risks scaring off readers. So I did my best to keep the writing interesting and general so that readers of the stories also would be able to come across and understand them, not just one specific or some speciality or another. I still needed to balance public and official voices with sources. Locally, those voices helped avoid the overall view of a story being dominant and allow many different perspectives on the same issue to enter into the mix. That way a more balanced, even, evidence-based, not biased, account could be presented about my reports as it related to news and vox pop. I also made my style appropriate to the purpose of the essays. Reviews had a more descriptive and critical tone designed to appeal to the public, news broadcasts tended to adhere to a more straightforward factual form and address certain aspects of society, while vox pops were employed to rapidly bring general opinion. Overall, this portfolio really showcases how quickly I'm developing my knack of adapting journalistic style, sourcing, and format to the audience. In these editorial decisions I attempted to achieve writing that is professionally honest, relevant, professional and socially responsible journalism, anchored in narrative to a community audience, for whom storytelling is central.",
  email: "nituch1010@gmail.com",
  instagram: "https://www.instagram.com/neetwo.finsta",
  
  // VISUAL WORK (Goes on WORK page)
  projects: [], 

  // ACADEMIC WORK (Assignments)
  // COPY PASTE YOUR CONTENT HERE
  assignments: [
    {
      id: "chaiwala",
      title: "A Visit to Chaiiwala Hayes",
      date: "2025",
      // Content Array: You can mix 'text', 'image', and 'heading' blocks
      content: [
        // { type: 'heading', value: "Introduction" },
        // { type: 'text', value: "Paste the first paragraph of your PDF here. For example: The aroma of spiced tea wafts through the air as you enter Chaiiwala in Hayes..." },
        {
  type: 'image',
  value: 'chaiii.png',
  caption: 'The storefront of Chaiiwala',
  layout: 'full'
},
        { type: 'text', value: "Chaiiwala has grown into a familiar name not only in India and Dubai but also across the UK, where its take on Indian street-style tea culture has built a loyal following. Its newest outlet, located at Unit 7A in Lombardy Retail Park, Hayes, adds another welcoming spot for the area's many chai lovers. Although Hayes already has a Chaiiwala outlet, this new branch feels livelier and more intentional, almost as if the brand wanted to offer the neighbourhood a brighter and more spacious place to gather. The interior is instantly inviting. Soft lighting, a warm brown and cream colour palette, and neatly arranged seating make it a space where people are encouraged to stay rather than rush out. Even on a weekend evening, when I visited, the café was busy without feeling overwhelming. What stood out was how calmly the staff managed the crowd. Tables were regularly checked, the space was kept clean, and the manager appeared genuinely hands-on. Hygiene clearly matters here, which is not something every busy café can claim. The menu will be familiar to regular Chaiiwala visitors, featuring the classic Karak Chai, allday breakfast options, naan wraps, and Bombay toasties. However, this outlet also seemed keen to highlight its newer seasonal offerings. I ordered the Choc Orange Karak Chai, a limited-edition twist on their signature blend. I expected it to be overly sweet, but it turned out to be surprisingly balanced, with a subtle citrus warmth that worked particularly well for the colder months." },
      ]
    },
    {
      id: "hayes-safety",
      title: "Hayes: Safe for Some, Scary for Others",
      date: "2025",
      content: [
        
        {
  type: 'image',
  value: 'haley.png',
  caption: `Haley Smith, 26, a receptionist and army veteran who has lived in Hayes for the past six years, said:
"Hayes feels safe during the day, but at night it becomes uncomfortable. Compared to other areas in London, it doesn't feel as secure. During the daytime, it's fine, but once it gets dark, we all become more cautious."`
},
{
  type: 'image',
  value: 'ceriga.png',
  caption: `Ceriga Brown, 22, a warehouse worker who has lived in Hayes for more than five years, shared similar concerns:
“If I get the opportunity to leave Hayes, I will do that. The crime rates here are increasing, and it’s not just women who feel unsafe — everyone does. You hear about thefts and fights quite often, and that makes the environment tense.”`
},
{
  type: 'image',
  value: 'Kamlesh.png',
  caption: `Kailash Verma, 25, a student from India, had a more positive view:
“For me, Hayes is safe because I have my people here, and I feel at home. Crime happens everywhere, but here I can roam freely without looking at the time on my watch. That’s how comfortable I feel.”`
},
{
  type: 'image',
  value: 'Mukesh.png',
  caption: `Mukesh Patel, 23, a self-employed resident from Mauritius, said:
“It’s safe during the daytime, but when it gets dark, I feel a bit uneasy, especially when walking alone. Still, I think it’s better than some other areas.”`
},
{
  type: 'image',
  value: 'nikki.png',
  caption: `Niki Thompson, 22, a British hairdresser from Richmond, said:
“It’s uncomfortable because when I walk out at night, I feel eyes following me everywhere. Hayes feels unsafe after dark, and if I ever get the chance to move somewhere else, I’ll take it.”`
},
{
  type: 'image',
  value: 'rupali.png',
  caption: `Krupali Prakashbhai Patel, 30, a student from India who works as a barista at Costa Coffee, said:
“It’s not safe at all, during both the day and at night. Some communities dominate the area, and sometimes people are assaulted when they are alone. While opinions differ, most residents agree that Hayes feels safer during the day than at night, and that community connections often shape how secure people feel in their surroundings.”`
}

      ]
    },
    {
      id: "technology",
      title: "How Technology Has Turned the Tables on Knowledge",
      date: "2025",
      // Content Array: You can mix 'text', 'image', and 'heading' blocks
      content: [
        // { type: 'heading', value: "Introduction" },
        // { type: 'text', value: "Paste the first paragraph of your PDF here. For example: The aroma of spiced tea wafts through the air as you enter Chaiiwala in Hayes..." },
        {
  type: 'image',
  value: 'techh.jpeg',
  
  layout: 'full'
},
        { type: 'text', value: "One in three parents in London admit they need to go ‘back to school’ when it comes to technology. Before even looking at the data, several London residents also expressed similar struggles in day-to-day life, according to computing expert Nick Bunce from AO.com. It is an online retailer specialising in household appliances and consumer electronics." },
        { type: 'text', value: "One in three parents feels uncomfortable acknowledging that they don't know as much about technology as their children do. To improve their teaching abilities, parents are open to enrolling their kids in TikTok programs. Thirty-seven percent of parents acknowledged that they would benefit from returning to school to refresh their knowledge. According to the research, commissioned by laptops specialist AO.com, revealed over 46% of parents think that their kids and grandchildren are more tech-savvy than they are.When it comes to youth, the situation is not all that different one in two young people in London think they know about technology on average or less than average embarrassed by their lack of technological skills, they say. According to Nick Bunce, Computing expert at AO.com, said Parents should not feel embarrassed or defeated when it comes to technology  its moving so quickly, and it is impossible to know everything. Instead, parents should see an opportunity to learn alongside their kids about new technology, whether it's utilizing apps or new gadgets like iPads, laptops, and other technologies that many young people use but find difficult to incorporate into their daily lives. Learning about new tools and technologies together is reassuring for both parents and kids." },
        { type: 'text', value: "Rasmika, 58, works in a restaurant with her husband, who has been living in London for 32 years, mentioned that even after so many years she is still not able to understand technology properly. For most things, she said she must depend on her children. Another person, Mahipal,39, cleaner contractor, who is a father of one daughter, said, “I have to learn technology to survive so that tomorrow in the future my daughter doesn’t have to face problems, and I can help her in understanding things. But for that, I believe I must attend classes. Stefen,35, coordinator in a hotel, a father of two children, shared something similar – that it is confusing for people of his generation. They lived in a world where there was no technology, but now nothing can be done without it. “We are older than technology,” he said, “and now to live in this world, we have to understand it.” Things have been hard already, and then having basic knowledge of technology makes circumstances even more difficult, said Chanda Singh, 56, works in real estate, father of four children" },

      ]
    },
    {
      id: "Nationalism",
      title: "Nationalism and Media Framing: A Comparative Analysis of UK Immigration Coverage",
      date: "2025",
      // Content Array: You can mix 'text', 'image', and 'heading' blocks
      content: [
        // { type: 'heading', value: "Introduction" },
        // { type: 'text', value: "Paste the first paragraph of your PDF here. For example: The aroma of spiced tea wafts through the air as you enter Chaiiwala in Hayes..." },
        {
  type: 'image',
  value: 'nat.jpg',
  // caption: 'The storefront of Chaiiwala',
  layout: 'full'
},
        { type: 'text', value: "Nationalism is a multi-stacked and context dependent concept that varies from political regime to social culture. Nationalism, at its core, is that a people share an identity and that that shared identity — like the nation and its rights — needs to be a priority (and preserved). Political parties and movements often promote nationalism, but it also cultivates it through the media image. It’s with the Bharatiya Janata Party (BJP) in India that nationalism clearly states itself, as it openly highlights an identity, boundedness and belonging in India. Taking this as the base of my analysis, it then explores how nationalism functions here in the UK as a concept operating through a medium of news rather than an ideological reaction per se. Centreing on the media reporting of British government-led responses to irregular Channel crossings and immigration policy, the report contrasts the very framing of the same problem for these three sources regarding the how, and why they differ – and some of these legal and ethical concerns. In the Indian instance, the BJP-style nationalism works nicely as a reference model due to the fact that it is explicit and ideologically articulated. This approach focuses its theoretical value on idealized national pride, cultural continuity, and protection of the nation from external and domestic threats. Nationalism tends to use emotional language accompanied by moral thresholds dividing the members of a tribe from those not associated with it. Although this report does not interrogate Indian politics as such, BJP style nationalism provides a means of examining this country on a greater scale, and to extract the same nationalist patterns elsewhere, specifically around issues of questions around borders, sovereignty and national protection. In the UK nationalism rarely is couched in so direct an ideological language. Instead it tends to manifest in less obvious but more latent ways via media narratives, particularly in immigration coverage. Irregular Channel crossings and UK–France border cooperation emerge as a major space in which considerations of national identity, responsibility, and belonging are contested. BBC News, The Guardian and the Daily Mail cover the same developments but offer radically differing fictions of what they consider nationalism. But BBC News takes also some specific matters as their own in the context of immigration (e.g immigration topic reporting framing of the issue specifically as governance and policy management). Language such as Channel crossings and asylum policy appear in articles used in an attempt to present things with an entirely neutral frame for descriptions that are limited to people in government roles and regulations and international treaties." },
        { type: 'text', value: "The language erases our sense of emotional urgency and interprets immigration as something technical that needs to be worked through by way of policy. While BBC News isn’t using overtly nationalist language, this is an example of a kind of civic or institutional nationalism where border security is taken to be a part of government's regular and legitimate business. Here nationalism is subtly advanced but unassailable by defaulting on the premise that the management of borders is the sovereign, indubitably carried-out exercise of state authority. The Guardian has a much different focus. In covering immigration, it regularly interrogates nationalist narratives. That point is particularly evident in its Comment Is Free piece over the UK–France one in, one out approach. The article does not portray the policy as a rational, bureaucratic solution; however as a phrase, but puts it there to expose the bureaucratic logic underneath. By foregrounding the process of commodifying human lives for numerical transactions, the framing allows a reading to question the moral tenuousness of language of that sort. Crossing of Channel are depicted as less an act of crime and more that of desperation and focuses on fear, risk and injustice. With this new framework, The Guardian resists border-first nationalism by reframing immigration as an ethical and humanitarian issue rather than a national security threat. The contrasts are even sharper to look at against the Daily Mail’s more generalized stances on immigration. Since the specific article referenced here is about a political media event, the outlet’s reporting on immigration as a whole often reflects protectionist nationalist themes. Immigration narratives tend to focus on Britain and British people and construct immigration through a lens of pressure, control and the pressure on the nation. That kind of emphasis projects a nation that is both vulnerable and threatened, promoting an us versus them dynamic. And this nationalism, while less explicitly identified with BJP-style identity politics in respect of religious or cultural identity emphasises national interest and border security rather than humanitarianism. These coverage gaps are no accident. They represent each outlet’s editorial ideology, audience and journalistic priorities. BBC News in its public service role demands both balance and accuracy and thus has a low reporting surface that ensures nationalism is institutionalized. The Guardian’s leftist orientation forces it to examine nationalist assumptions while elevating ethical dilemmas. The tabloid format of The Daily Mail and its readership respond to emotionally sensitive, nationalist-vibrant, time-driven stories by invoking fear, urgency and loyalty to the country. In these acts journalism is not only a reflection of nationalism, but a fake that propagates and creates nationalism. The representations raised here pose key ethical and legal concerns. Journalists also have a moral obligation not to dehumanise minorities like asylum seekers or to perpetuate harmful representations. Sensationalist journalism that plays into fear and social division and over-agenda reporting that tends to obscure human suffering. UK journalists also should be regulated under the legal framework to do their jobs accurately and equitably when dealing with vulnerable communities. This framing is not only morally wrong, but also an ethical burden in the jurisprudence, when it overstates the threat or completely omits necessary context which can lead to misrepresentation or, worse, loss of public trust in the press. The dual aspects surrounding UK media nationalism and BJP type nationalism might be categorized and contrasted. In India this is commonly explicit and politically mobilised. However, in the UK, as in foreign countries, nationalism is quietly present, as it is in the country and also in journalism, and how it is built into everyday press messaging and news narrative. But there, too, nationalism plays out in the way it defines which interests count, where the privileged stay and how borders are perceived. Immigration is where such ideas are most forcefully articulated. In short, this contrast demonstrates that nationalism is not just some political theorizing but also a media undertaking. Their immigration coverage builds different kinds of nationalist narratives (from normalization to criticism to amplification): BBC News, then The Guardian, then the Daily Mail. This analysis suggests that nationalism here in the UK may be at its most potent when least overtly stated, when it speaks the vernacular of regular journalism rather than explicitly ideological assertion. Understanding how and why these narratives differ matters for gauging journalism’s role in shaping how citizens grasp national identity." },
      ]
    },
  ]
};

// --- Custom Router Hook ---
const useRouter = () => {
  const [route, setRoute] = useState('home');
  const [currentAssignment, setCurrentAssignment] = useState(null);

  const navigate = (newRoute, assignmentId = null) => {
    setRoute(newRoute);
    if (assignmentId) {
      const assignment = SITE_DATA.assignments.find(a => a.id === assignmentId);
      setCurrentAssignment(assignment);
    }
    window.scrollTo(0, 0);
  };
  
  return { route, navigate, currentAssignment };
};

// --- Components ---

const Navbar = ({ navigate, activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNav = (route) => {
    navigate(route);
    setIsOpen(false);
  };

  const NavButton = ({ name, label, icon }) => (
    <button 
      onClick={() => handleNav(name)} 
      className={`hover:text-yellow-500 transition-colors flex items-center gap-2 capitalize ${activeRoute === name ? 'text-yellow-500 font-bold' : ''}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1917]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <button onClick={() => handleNav('home')} className="text-2xl font-black tracking-tighter uppercase text-[#FDFBF7]">
          {SITE_DATA.name}.
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 font-medium text-sm tracking-widest uppercase text-[#A8A29E]">
          <NavButton name="home" label="Home" icon={<Home size={16}/>} />
          <NavButton name="assignments" label="Work" />
          <NavButton name="contact" label="Contact" />
        </div>

        <button className="lg:hidden text-[#FDFBF7]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#1c1917] flex flex-col items-center justify-start pt-10 gap-8 text-2xl font-bold lg:hidden text-[#FDFBF7] z-40 overflow-y-auto pb-20">
          <button onClick={() => handleNav('home')}>Home</button>
          <button onClick={() => handleNav('assignments')}>Work</button>
          <button onClick={() => handleNav('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
};

// --- Helper Component: Pagination ---
const Pagination = () => (
  <div className="flex justify-center items-center gap-4 mt-20 pt-10 border-t border-white/10">
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#A8A29E] hover:border-yellow-500 hover:text-yellow-500 transition-colors">
      <ChevronLeft size={16} />
    </button>
    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-[#1c1917] font-bold">1</button>
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#A8A29E] hover:border-yellow-500 hover:text-yellow-500 transition-colors">2</button>
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#A8A29E] hover:border-yellow-500 hover:text-yellow-500 transition-colors">3</button>
    <span className="text-[#A8A29E]">...</span>
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#A8A29E] hover:border-yellow-500 hover:text-yellow-500 transition-colors">
      <ChevronRight size={16} />
    </button>
  </div>
);

// --- Pages ---

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* 1. Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-yellow-500 text-xs font-medium mb-8">
            <Sparkles size={12} /><span>Open to new collaborations</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#E7E5E4] tracking-tight mb-8 leading-[1.1]">
            THE ORDINARY <br/>LENS
          </h1>
          <p className="text-lg md:text-xl text-[#A8A29E] max-w-lg leading-relaxed mb-12">
            Writing about everyday places, local culture, and the small details that shape how people experience them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('assignments')} className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-medium transition-all">See My Work</button>
            <button onClick={() => navigate('contact')} className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-lg font-medium transition-all">Contact Me</button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#292524]">
               <img src={SITE_DATA.heroImage} className="w-full h-full object-cover transition-transform duration-1000"/>
            </div>
        </div>
      </div>
    </section>

    {/* 2. ABOUT ME SECTION */}
    <section className="py-24 px-6 md:px-12 bg-[#1c1917] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4"> </h2>
        <h3 className="text-4xl md:text-5xl font-black text-[#E7E5E4] mb-8 leading-tight">
          About Nitu Choudhary
        </h3>
        <p className="text-lg text-[#A8A29E] leading-relaxed mb-8">
          {SITE_DATA.about}
        </p>
        <div className="grid grid-cols-2 gap-8 text-sm tracking-widest uppercase max-w-lg mx-auto">
          <div>
            <h4 className="font-bold text-[#E7E5E4] mb-2">Focus</h4>
            <ul className="space-y-1 text-[#57534E]">
              <li>Local Reporting</li>
              <li>Reviews & Observations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#E7E5E4] mb-2">Location</h4>
            <p className="text-[#57534E]">UK / India</p>
          </div>
        </div>
      </div>
    </section>

    {/* 3. Process */}
    <section className="py-24 px-6 md:px-12 bg-[#0C0A09] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-[#E7E5E4] mb-16">How I Work</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Notice', 'Listen', 'Write', 'Refine'].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl md:text-8xl font-bold text-[#292524] mb-4 group-hover:text-[#44403c] transition-colors">{`0${i+1}`}</div>
                <h3 className="text-xl font-bold text-[#E7E5E4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{step}</h3>
              </div>
            ))}
         </div>
      </div>
    </section>

    {/* 4. Mini CTA */}
    <section className="py-32 px-6 text-center bg-gradient-to-b from-[#1c1917] to-[#0C0A09]">
       <h2 className="text-4xl font-bold text-[#E7E5E4] mb-6">Have an idea?</h2>
       <button onClick={() => navigate('contact')} className="px-10 py-4 bg-[#E7E5E4] text-[#1c1917] rounded-full font-bold hover:bg-yellow-500 hover:text-white transition-all">
         Let's Discuss It
       </button>
    </section>
  </div>
);

// --- READER PAGE (Displays Copied Content) ---
const AssignmentReaderPage = ({ assignment, navigate }) => {
  if (!assignment) return null;

  return (
    <section className="min-h-screen pt-24 px-6 bg-[#1c1917] flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <button 
          onClick={() => navigate('assignments')} 
          className="flex items-center gap-2 text-[#A8A29E] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Work
        </button>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-2 block">{assignment.date}</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#E7E5E4] mb-8 leading-tight">{assignment.title}</h1>
          
          <div className="space-y-8 text-[#D6D3D1]">
            {assignment.content && assignment.content.map((block, index) => {
              if (block.type === 'heading') {
                return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{block.value}</h2>;
              }
              if (block.type === 'image') {
                return (
                  <div
                    key={index}
                    className={
                      block.layout === 'full'
                        ? 'my-8'
                        : 'my-8 flex gap-6 items-start'
                    }
                  >
                    <img
                      src={block.value}
                      alt="Visual"
                      className={
                        block.layout === 'full'
                          ? 'w-full rounded-xl'
                          : 'max-w-xs md:max-w-sm rounded-xl flex-shrink-0'
                      }
                    />

                    {block.layout !== 'full' && block.caption && (
                      <p className="leading-relaxed text-lg whitespace-pre-line">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }

              return <p key={index} className="leading-relaxed text-lg whitespace-pre-line">{block.value}</p>;
            })}
          </div>
        </article>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
           <button onClick={() => navigate('contact')} className="text-yellow-500 font-bold hover:text-white transition-colors">
             Enjoyed this? Let's talk.
           </button>
        </div>
      </div>
    </section>
  );
};

// --- WORK PAGE (Assignments List) ---
const AssignmentsPage = ({ navigate }) => (
  <section className="px-6 pt-32 pb-20 max-w-5xl mx-auto min-h-screen animate-in fade-in duration-500">
    <div className="mb-12">
      <div className="flex items-center gap-4 text-yellow-500 mb-4">
        <FileText size={32} />
        <span className="uppercase tracking-widest font-bold">Research & Assignments</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-[#E7E5E4]">Work</h1>
    </div>

    <div className="grid gap-6">
      {SITE_DATA.assignments.map((assign) => (
        <div 
          key={assign.id} 
          onClick={() => navigate('read', assign.id)}
          className="cursor-pointer block p-8 bg-[#1c1917] border border-white/5 rounded-2xl hover:border-yellow-500/50 hover:bg-[#292524] transition-all group"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-[#E7E5E4] group-hover:text-yellow-500 transition-colors">{assign.title}</h3>
            <span className="text-sm text-[#57534E] font-mono border border-white/10 px-3 py-1 rounded">{assign.date}</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-yellow-500 font-bold uppercase tracking-widest">
            Read Article <ArrowRight size={16} />
          </div>
        </div>
      ))}
    </div>

    <Pagination />
  </section>
);

// --- CONTACT PAGE (Links Only - No Bio) ---
const ContactPage = () => (
  <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      <div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-[#E7E5E4]">Let's Talk.</h1>
        <a href={`mailto:${SITE_DATA.email}`} className="text-2xl md:text-3xl text-[#A8A29E] border-b-2 border-[#A8A29E] pb-2 hover:text-yellow-500 hover:border-yellow-500 transition-colors">{SITE_DATA.email}</a>
      </div>
      <div className="flex gap-6">
        <a href={SITE_DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#292524] rounded-full text-[#A8A29E] hover:bg-[#E7E5E4] hover:text-[#1c1917] transition-all"><Instagram size={24} /></a>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const { route, navigate, currentAssignment } = useRouter();

  return (
    <div className="font-sans text-[#E7E5E4] bg-[#1c1917] selection:bg-yellow-900 selection:text-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #1c1917; }
      `}</style>
      
      <Navbar navigate={navigate} activeRoute={route} />
      
      <main>
        {route === 'home' && <HomePage navigate={navigate} />}
        {route === 'assignments' && <AssignmentsPage navigate={navigate} />}
        {route === 'contact' && <ContactPage />}
        {route === 'read' && <AssignmentReaderPage assignment={currentAssignment} navigate={navigate} />}
      </main>

      {route !== 'contact' && (
        <footer className="px-6 py-8 max-w-7xl mx-auto border-t border-white/5 flex justify-between text-xs font-bold tracking-widest uppercase text-[#57534E]">
          <p>© 2025 {SITE_DATA.name}</p>
          <p>Made with React</p>
        </footer>
      )}
    </div>
  );
}
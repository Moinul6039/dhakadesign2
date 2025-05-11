import React from 'react';

const teamMembers = [
  {
    name: 'Md. Shahin Hossain Pathan',
    title: 'Managing Director',
    description:
      'Md. Shahin Hossain Pathan is the managing director of the company. He has 20+ years of experience in sustainable architecture and has won numerous awards for his innovative designs.',
    image: 'images/shahin.jpg',
    socials: {
      facebook: 'https://www.facebook.com/shahin.h.pathan',
      WhatsApp: '+8801741675326',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sonia Akter',
    title: 'Senior Architect',
    description:
      'Sonia Akter is the senior architect of the company. She has 5+ years of experience in sustainable architecture and has won numerous awards for her innovative designs.',
    image: 'images/sonia.jpg',
    socials: {
      facebook: 'https://www.facebook.com/sopno.bilashi.sonia',
      WhatsApp: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Abdul Motin Mia',
    title: 'Landscape Architect',
    description:
      'Abdul Motin Mia is the landscape architect of the company. He has 5+ years of experience in sustainable architecture and has won numerous awards for his innovative designs.',
    image: '',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Md. Moinul Hossain',
    title: 'Technical Director',
    description:
      'Md. Moinul Hossain is the technical director of the company. He has 5+ years of experience in sustainable architecture and has won numerous awards for his innovative designs.',
    image: 'images/new.jpg',
    socials: {
      facebook: 'https://www.facebook.com/Nirob.pathan17',
      WhatsApp: '+8801945032480',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-green-600">Team</span>
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our sustainable designs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center text-center p-8 hover:shadow-3xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full mb-6 border-4 border-green-200 shadow-lg bg-gray-100"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-2 text-lg">{member.title}</p>
              <p className="text-gray-600 text-base mb-6 min-h-[72px]">{member.description}</p>
              <div className="flex justify-center gap-4 mt-auto">
                {member.socials.facebook && member.socials.facebook !== '#' && (
                  <a href={member.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                )}
                {member.socials.linkedin && member.socials.linkedin !== '#' && (
                  <a href={member.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                )}
                {member.socials.instagram && member.socials.instagram !== '#' && (
                  <a href={member.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.388 3.678 1.345c-.957.957-1.217 2.093-1.275 3.374C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.611.058 1.281.318 2.417 1.275 3.374.957.957 2.093 1.217 3.374 1.275C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.417-.318 3.374-1.275.957-.957 1.217-2.093 1.275-3.374.058-1.279.07-1.688.07-7.611 0-5.923-.012-6.332-.07-7.611-.058-1.281-.318-2.417-1.275-3.374C19.365.388 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                  </a>
                )}
                {member.socials.WhatsApp && member.socials.WhatsApp !== '#' && (
                  <a href={`https://wa.me/${member.socials.WhatsApp.replace('+', '')}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 
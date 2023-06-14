const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const data = {
  "2023": [
    {
      "title": "Prof. Asish K. Dalai",
      "disc": "Club Coordinator (Faculty)",
      "image": "https://i.ibb.co/MMxvygZ/ashish.png"
    },
    {
      "title": "A. Chandra Kiran Reddy",
      "disc": "Community Lead",
      "image": "https://i.ibb.co/PF0v6wk/chandra.jpg",
      "link": "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/"
    },
    {
      "title": "Dhruv Jha",
      "disc": "Designer and Developer",
      "image": "https://i.ibb.co/K5g2m1v/MG-5541.jpg",
      "link": "https://www.linkedin.com/in/dhruv-jha-2002/"
    },
    {
      "title": "Avinash Kumar",
      "disc": "Director",
      "image": "https://i.ibb.co/bbpzXMn/avinash.jpg",
      "link": "https://www.linkedin.com/in/theavinash-kumar/"
    },
    {
      "title": "M. Anas Shakil Kazi",
      "disc": "Secretary",
      "image": "https://i.ibb.co/KyWvwvK/anas.jpg",
      "link": "https://www.linkedin.com/in/anas-kazi-88a064216/"
    },
    {
      "title": "Aryan Mohanty",
      "disc": "Tech Lead",
      "image": "https://i.ibb.co/M81PXN7/aryan.png",
      "link": "https://www.linkedin.com/in/aryan-mohanty-230160221/"
    },
    {
      "title": "R Hari Chandana",
      "disc": "PR",
      "image": "https://i.ibb.co/Jp3xbgN/chandana.png",
      "link": "https://www.linkedin.com/in/hari-chandana-5a6a621a8/"
    },
    {
      "title": "Soumyadip Chowdhuri",
      "disc": "Designer",
      "image": "https://i.ibb.co/GRK3Nz7/soumyadip.png",
      "link": "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250"
    },
    {
      "title": "Isa Hasan",
      "disc": "Outreach and Designer",
      "image": "https://i.ibb.co/kgwHypY/isa.jpg",
      "link": "https://www.linkedin.com/in/isa-hasan-59375a226/"
    },
    {
      "title": "Sagnik Sarkar",
      "disc": "Editor",
      "image": "https://i.ibb.co/vstJH9B/sagnik.png",
      "link": "https://www.linkedin.com/in/sagnik-sarkar-710?trk=contact-info"
    },
    {
      "title": "Jai Gaurav",
      "disc": "Editor",
      "image": "https://i.ibb.co/k3w4HcQ/gaurav.jpg",
      "link": "https://www.linkedin.com/in/jai-gaurav-092656228"
    },
    {
      "title": "Apoorva Parashar",
      "disc": "Head of Videography",
      "image": "https://i.ibb.co/PwJ2tgQ/apoorva.png",
      "link": "https://www.linkedin.com/in/apoorva-parashar-512bb722a/"
    }
  ],
  "2022": [
    {
		title: "Prof. Asish K. Dalai",
		disc: "Club Coordinator",
		image: "https://i.ibb.co/MMxvygZ/ashish/sir.png",
	  },
	  {
		title: "Rahul Alokkan",
		disc: "Community Lead",
		image: "https://i.ibb.co/sjwVdh9/rahul.png",
		link: "https://www.linkedin.com/in/rahul-alokkan-16384b196/",
	  },
	  {
		title: "Ojasva Jain",
		disc: "President",
		image: "https://i.ibb.co/p2hcgYv/ojasva.png",
		link: "https://www.linkedin.com/in/ojasva-jain-9958071b2",
	  },
	  {
		title: "Sai Pranay",
		disc: "Director",
		image: "https://i.ibb.co/M7LRvvZ/saipranay.png",
		link: "https://www.linkedin.com/in/saipranay47/",
	  },
	  {
		title: "Dhruv Jha",
		disc: "Secretary",
		image: "https://i.ibb.co/K5g2m1v/MG-5541.jpg",
		link: "https://www.linkedin.com/in/dhruv-jha-2002/",
	  },
	  {
		title: "Aashish",
		disc: "Head of PR",
		image: "https://i.ibb.co/3fK4w2w/aashish.png",
		link: "https://www.linkedin.com/in/aashis-rout-382b25229",
	  },
	  {
		title: "Sharath Harikumar",
		disc: "Treasurer",
		image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
		link: "https://oscvitap.org/",
	  },
	  {
		title: "Akhil",
		disc: "Technical Lead",
		image: "https://i.ibb.co/9hmFn9N/akhil.png",
		link: "https://www.linkedin.com/in/akhilcodes",
	  },
	  {
		title: "Aryan Mohanty",
		disc: "Track Lead",
		image: "https://i.ibb.co/M81PXN7/aryan.png",
		link: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
	  },
	  {
		title: "A. Loukya",
		disc: "Developer",
		image: "https://i.ibb.co/SPj3Vpb/loukya.png",
		link: "https://www.linkedin.com/in/adepu-loukya-67a345221/",
	  },
	  {
		title: "Chandra Kiran Reddy Avula",
		disc: "DevOps Lead",
		image: "https://i.ibb.co/PF0v6wk/chandra.jpg",
		link: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
	  },
	  {
		title: "Jai Gaurav",
		disc: "Developer",
		image: "https://i.ibb.co/k3w4HcQ/gaurav.jpg",
		link: "https://www.linkedin.com/in/jai-gaurav-092656228/",
	  },
	  {
		title: "Avinash Kumar",
		disc: "Developer",
		image: "https://i.ibb.co/bbpzXMn/avinash.jpg",
		link: "https://www.linkedin.com/in/theavinash-kumar/",
	  },
	  {
		title: "R Hari Chandana",
		disc: "Developer",
		image: "https://i.ibb.co/Jp3xbgN/chandana.png",
		link: "https://www.linkedin.com/in/hari-chandana-5a6a621a8/",
	  },
	  {
		title: "Vuppula Saikrishna",
		disc: "Developer",
		image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
		link: "https://oscvitap.org/",
	  },
	  {
		title: "Pooja",
		disc: "Creative Lead",
		image: "https://i.ibb.co/NSN27zq/image.png",
		link: "https://www.linkedin.com/in/pooja-chowdhary-15501022b/",
	  },
	  {
		title: "Vemu Namratha",
		disc: "Editorial",
		image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
		link: "https://www.linkedin.com/mwlite/in/namratha-vemu-5650841b6",
	  },
	  {
		title: "Apoorva Parashar",
		disc: "Head of videography",
		image: "https://i.ibb.co/PwJ2tgQ/apoorva.png",
		link: "https://www.linkedin.com/in/apoorva-parashar-512bb722a/",
	  },
	  {
		title: "M Sricharan",
		disc: "Designer",
		image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
		link: "https://oscvitap.org/",
	  },
	  {
		title: "Soumyadip Chowdhuri",
		disc: "Designer",
		image: "https://i.ibb.co/GRK3Nz7/soumyadip.png",
		link: "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250",
	  },
	  {
		title: "Isa Hassan",
		disc: "Designer",
		image: "https://i.ibb.co/kgwHypY/isa.jpg",
		link: "https://www.linkedin.com/in/isa-hasan-59375a226/",
	  },
	  {
		title: "Sai Eeshwar",
		disc: "Event Lead",
		image: "https://i.ibb.co/wcbjKvZ/image.png",
		link: "https://www.linkedin.com/in/sai-eeshwar-d-5a590922b/",
	  },
	  {
		title: "Muhammed Anas Shakil Kazi",
		disc: "Organizer",
		image: "https://i.ibb.co/vw0dPqd/anas.png",
		link: "https://www.linkedin.com/in/anas-kazi-88a064216/",
	  },
	  {
		title: "Pathuri Aleshita",
		disc: "Organizer",
		image: "https://i.ibb.co/dkJh4KC/image.png",
		link: "https://oscvitap.org/",
	  },
	  {
		title: "Varshitha Ramireddy",
		disc: "Organizer",
		image: "https://i.ibb.co/6wqbKv6/image.png",
		link: "https://www.linkedin.com/in/varshitha-ramireddy-a3ab1222a/",
	  },
	  {
		title: "Nishita Singh",
		disc: "Organizer",
		image: "https://i.ibb.co/4mL8JWZ/image.png",
		link: "https://www.linkedin.com/in/nishita-singh-161471231",
	  },
	  {
		title: "Sanjana Bhat",
		disc: "Organizer",
		image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
		link: "https://www.linkedin.com/in/sanjana-bhat-b5755b236/",
	  },
	  {
		title: "Aditya Papriwal",
		disc: "Head Of Marketing",
		image: "https://i.ibb.co/q1HhR52/image.png",
		link: "https://www.linkedin.com/in/aditya-papriwal-110912223",
	  }
  ]
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

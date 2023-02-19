import InternCard from "./components/Dashboard/InternCard";
import ShowMoreBtn from "./components/Dashboard/ShowMoreBtn";
import Table from "./components/Dashboard/Table";
import Navbar from "./components/Navbar";
import TotalInterns from "./components/Dashboard/TotalInterns";

const Home = () => {
  const Interns = [
    {
      id: 1,
      name: "Arnold Ngowi",
      email: "iarnoldrapahel@gmail.com",
      path: "Frontend",
      image:
        "https://media.istockphoto.com/id/1389898165/photo/young-dark-skinned-boy-cute-iconic-character-guy-3d-rendering.jpg?s=612x612&w=0&k=20&c=ujzPf8C7RKUUd7EYGofY0DzLWjMLHb1MCHJ8ejjcveQ=",
    },
    {
      id: 2,
      name: "Debora Samson",
      email: "serengetipark@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=N31nPlncl1RGZ2IxfQdXTCl9LFN3pD31mWYhzxeRpdY=",
    },
    {
      id: 3,
      name: "Angel Stefano",
      email: "simbamfalme@gmail.com",
      path: "Backend",
      image:
        "https://media.istockphoto.com/id/1256492376/photo/girl-with-braided-hairstyle-posing-on-white-background-profile-portrait.jpg?s=612x612&w=0&k=20&c=ogoXKHHdKfHox48L4Ki7A-F_yM5K6Zsfq9uKx0_EiSI=",
    },
    {
      id: 4,
      name: "Tembo Mikumi",
      email: "mikuminationalpark@gmail.com",
      path: "Web3.0",
      image:
        "https://cdn.pixabay.com/photo/2017/10/06/16/22/head-2823697_960_720.jpg",
    },
    {
      id: 5,
      name: "Annastazia Cutzo",
      email: "anna22@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/488914405/photo/black-beauty-with-long-straight-hair.jpg?s=612x612&w=0&k=20&c=KJbC5gHgtLg4Bv3yN98H_LJ24rZQeAaWptN87CVr0hk=",
    },
    {
      id: 6,
      name: "Angela King",
      email: "anjie22@gmail.com",
      path: "Frontend",
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
    },
    {
      id: 7,
      name: "TJ Johns",
      email: "tjjohns@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
    },
    {
      id: 8,
      name: "Omary Blickson",
      email: "mikuminationalpark@gmail.com",
      path: "Web3.0",
      image:
        "https://media.istockphoto.com/id/1311634222/photo/portrait-of-successful-black-male-modern-day-student-holding-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=qdZ9RCZsdzSqmeBrluO_S-sC8Y7lUBre80UvjwTCRxE=",
    },
    {
      id: 9,
      name: "Jabali Depricon",
      email: "jabalijabali@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/1325359218/photo/portrait-of-a-young-african-man-at-studio-high-fashion-male-model-in-colorful-bright-neon.jpg?b=1&s=170667a&w=0&k=20&c=VVpagSDwuwfPa4cNHzNvljuEHzbdrvJx8wkjEYCZIT0=",
    },
    {
      id: 10,
      name: "Veronika Charles",
      email: "charlesveronika@gmail.com",
      path: "Frontend",
      image:
        "https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.jpg?s=612x612&w=0&k=20&c=UQGXpeiLrI78nO1B9peUn0D0fCSRrm-J8xohMWG2Lms=",
    },
    {
      id: 11,
      name: "Jb Michael",
      email: "jbmichael@gmail.com",
      path: "Backend",
      image:
        "https://media.istockphoto.com/id/1333971998/photo/young-african-american-man-wearing-casual-clothes-looking-away-to-side-with-smile-on-face.jpg?s=612x612&w=0&k=20&c=b34gBGiUGdMnWhbcZQwCM8G0kWF915lYqP-r9Zhzlos=",
    },
    {
      id: 12,
      name: "Jenipher Witson",
      email: "jenipherwit21@gmail.com",
      path: "Backend",
      image:
        "https://media.istockphoto.com/id/127543500/photo/woman-looking-up-into-light.jpg?s=612x612&w=0&k=20&c=t7jJ7wzMfVsX0cJSBm5hsX7l8X-qvJ6T1PqeGvSnQF8=",
    },
    {
      id: 13,
      name: "Zuhra Mohammad",
      email: "zuhumoh124@gmail.com",
      path: "Web3.0",
      image:
        "https://media.istockphoto.com/id/1296338881/photo/young-smiling-muslim-sports-woman-with-hijab-indoors.jpg?s=612x612&w=0&k=20&c=RhfSg0O8_HHDqqGNxHKBxrOFOVMzYoW9s8RcqBzlo_E=",
    },

    {
      id: 14,
      name: "Prisca James",
      email: "pjames@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/534308672/photo/beautiful-young-african-woman-laughing-outdoors.jpg?s=612x612&w=0&k=20&c=TtvBLZvZDCD-_XcIv27E3Oq3-yJredgR3EaQXACsOck=",
    },
    {
      id: 15,
      name: "Mmesomachukwu Harrison",
      email: "mmesomaharrison@gmail.com",
      path: "Frontend",
      image:
        "https://media.istockphoto.com/id/1311319776/photo/headshot-portrait-of-smiling-biracial-woman-posing-at-home.jpg?s=612x612&w=0&k=20&c=DSMd6IbSNgS1HJZhZdadcEJ-BWmp4YtPr8YMHrco8Jo=",
    },
    {
      id: 16,
      name: "Sheila Jacob",
      email: "sheilaj34@gmail.com",
      path: "Product Design",
      image:
        "https://media.istockphoto.com/id/1197851431/photo/fashion-beauty-african-american-beautiful-woman-profile-portrait-brunette-curly-haired-young.jpg?s=612x612&w=0&k=20&c=jrBwpgsCSraXrWzKVGmp2bvJHSy2-zqIeAX9gCO_zgo=",
    },
    {
      id: 17,
      name: "Yezhe Maknogan",
      email: "mryezhemak@gmail.com",
      path: "Web3.0",
      image:
        "https://media.istockphoto.com/id/1007749798/photo/portrait-of-afro-descent-at-city.jpg?s=612x612&w=0&k=20&c=_amqOx4yWdN3pr1Cq-PYia6QhBoU5KVBrgbDB0w-Po4=",
    },
    {
      id: 18,
      name: "James Gospel",
      email: "gospelj232@gmail.com",
      path: "Backend",
      image:
        "https://media.istockphoto.com/id/174615296/photo/smiling-young-african-american-male.jpg?s=612x612&w=0&k=20&c=6bvRhsAHY1YiocUGS7jQfcr1KaLU4l42M6RqNpmdYZs=",
    },
    {
      id: 19,
      name: "Fineman Nickson",
      email: "nicksonfineman@gmail.com",
      path: "Frontend",
      image:
        "https://media.istockphoto.com/id/1344781289/photo/profile-of-a-black-man-breathing-fresh-air-in-nature.jpg?s=612x612&w=0&k=20&c=dBVXPSitS1DUiMxGSZnYVQVUZJv7-Uf4Sy8VQxmEa_M=",
    },
    {
      id: 20,
      name: "Princess Modest",
      email: "pmodest@gmail.com",
      path: "Web3.0",
      image:
        "https://media.istockphoto.com/id/828219910/photo/female-spokesperson.jpg?s=612x612&w=0&k=20&c=fbU95t91n_eE-VitdsRkSC4kltPiNgrkid6DmwSz0sU=",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-admin-banner bg-contain bg-no-repeat md:bg-cover">
        <TotalInterns />
      </div>
      <div className=" ">
        <Table Interns={Interns} />
      </div>
      {/* <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {Interns.map((Interns, index) => (
          <InternCard
            key={Interns.id}
            Image={Interns.image}
            name={Interns.name}
            path={Interns.path}
            email={Interns.email}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;

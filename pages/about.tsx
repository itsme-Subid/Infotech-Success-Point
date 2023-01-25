import styled, { keyframes } from "styled-components";

const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const About = styled.div`
  margin-top: 8rem;
  @media screen and (max-width: 50rem) {
    margin-top: 5rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: -20rem;
    left: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgba(255, 183, 3, 0.175),
      transparent,
      transparent
    );
    animation: ${animateBefore} 15s infinite;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20rem;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgb(33, 158, 188, 0.175),
      transparent,
      transparent
    );
    animation: ${animateAfter} 15s infinite;
    z-index: -1;
  }
  & .card {
    backdrop-filter: blur(5rem) brightness(0.5);
    min-height: 20rem;
    display: grid;
    place-content: center;
    border-radius: 2rem;
    background-color: rgb(128, 128, 128, 0.075);
    gap: 2rem;
    padding: 4rem;
    @media screen and (max-width: 50rem) {
      padding: 1.5rem;
      border-radius: 1rem;
    }
  }
`;

const Index = () => {
  return (
    <About>
      <div className="card container">
        <h1>Infotech Success Point</h1>
        <p>
          Infotech Success Point is a premier computer learning center founded
          by Debashish Chakraborty in 2023. Our mission is to provide a
          high-quality computer education and training to students in the
          Baidyabati, Sheoraphuli, and Bhadreswar regions. We understand that
          technology is constantly evolving and it's important for students to
          stay current with the latest advancements in order to be successful in
          their careers. That's why we offer a wide range of courses and
          programs that are designed to help students achieve their goals and
          excel in the field of technology.
        </p>
        <p>
          Our team of experienced and highly qualified instructors is dedicated
          to helping students reach their full potential. We have a diverse
          group of professionals who have a wealth of knowledge and experience
          in various areas of technology. Our instructors are passionate about
          teaching and are committed to providing a positive and supportive
          learning environment for our students. They are always available to
          provide guidance and support, whether it's through one-on-one tutoring
          or group classes.
        </p>
        <p>
          We pride ourselves on having state-of-the-art facilities that are
          designed to enhance the learning experience for our students. Our
          classrooms are equipped with the latest technology and software,
          allowing students to work on the most current and cutting-edge
          projects. We also have a computer lab where students can practice
          their skills and work on assignments under the guidance of our
          instructors.
        </p>
        <p>
          Our comprehensive curriculum is designed to meet the needs of students
          of all skill levels. Whether you're a beginner or an advanced learner,
          we have something for everyone at Infotech Success Point. Our courses
          cover a wide range of topics such as programming, web development,
          data science, cyber security, and much more. We also offer
          certification courses that are recognized by industry leaders and can
          help students stand out in the job market.
        </p>
        <p>
          In addition to our core curriculum, we also offer extracurricular
          activities such as coding clubs and hackathons. These activities
          provide students with the opportunity to work on real-world projects
          and learn new skills in a fun and engaging way. They also give
          students the opportunity to network with industry professionals and
          showcase their talents to potential employers.
        </p>
        <p>
          At Infotech Success Point, we believe that education should be
          accessible to everyone. That's why we offer flexible class schedules
          and affordable tuition rates. We also have financial aid and
          scholarship programs available for those who need it. We understand
          that choosing a computer learning center is an important decision, and
          we're here to help you every step of the way. Our staff is always
          available to answer any questions you may have and help you find the
          best program for your needs.
        </p>
        <p>
          In conclusion, Infotech Success Point is the best computer learning
          center with every faculties in Baidyabati, Sheoraphuli, Bhadreswar
          region. We are dedicated to providing a high-quality computer
          education and training to students in the area. With our
          state-of-the-art facilities, experienced instructors, and
          comprehensive curriculum, we are the premier choice for computer
          education in the region. Let us help you reach your goals and succeed
          in the exciting and ever-changing world of technology. Join us today
          and take the first step towards a successful career in technology!
        </p>
      </div>
    </About>
  );
};

export default Index;

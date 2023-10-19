const H2 = document.querySelector(".h2");
const button = document.querySelector(".btn");
const Result = document.querySelector(".ResultContainer");

const Left = document.querySelector(".ri-arrow-left-s-line");
const Right = document.querySelector(".ri-arrow-right-s-line");

//button.addEventListener("click", () => {
//  setTimeout(() => {
//   H2.textContent = "Tung Kham";
//  }, 2000);
// setTimeout(() => {
//   H2.textContent = "";
///  }, 4000);
//});

const data = [
  {
    name: "John",
    image:
      "https://cdn.portfoliobox.net/000_clients/000_org/blog/3-hand-position-in-modeling-portfolio.jpg",
    job: "Manager",
  },
  {
    name: "Freddy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-Y9OLzbwQe612O2XXbK5DLUvpFrjT1c2IBF5E-7H&s",
    job: "FullStack Developer",
  },
  {
    name: "Kham",
    image:
      "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    job: "Software Engineer",
  },
];

let index = 0;

//console.log(InDex);

const FuntiON = () => {
  Result.innerHTML = "";
  data.map((review, indexID) => {
    const { name, image, job } = review;
    //console.log(index);

    let position = "nextSlide";
    if (indexID === index) {
      //console.log(indexID, index);
      position = "addShow";
    }
    if (indexID == index - 1 || (indexID === data.length - 1 && index === 0)) {
      position = "lastSlide";
    }
    const Review = `
    <div class=${position}>
      <img class="image" src=${image} alt=${name} />
      <h2>${name}</h2>
      <p>${job}</p>
    </div>
  `;
    //Review = Review.join("");
    Result.innerHTML += Review;
  });
};

const FuncTion = () => {
  Left.addEventListener("click", () => {
    //console.log("hello");
    index -= 1;
    if (index < 0) {
      index = data.length - 1;
    }
    FuntiON();
  });

  Right.addEventListener("click", () => {
    index += 1;
    if (index > data.length - 1) {
      index = 0;
    }
    FuntiON();
  });
};

FuncTion();

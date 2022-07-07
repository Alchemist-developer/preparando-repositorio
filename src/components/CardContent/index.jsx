import React, { useState, useEffect } from "react";
import "./style.css";
import Vetor from "../../assets/vector.png";
import Share from "../../assets/share.png";
import InfoDog from "../InfoDog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { listarTodos } from "../../service/pet";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

function CardContent() {

  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive((oldActive) => !oldActive);
  }

  var INPUT = JSON.parse(localStorage.getItem("@dadosInput"));

  const [pets, setPets] = useState({});
  useEffect(() => {
    const loadPets = async () => {
      try {
        const response = await listarTodos();
        setPets(response);
      } catch (error) {
        console.log(error);
      }
    };
    loadPets();
  }, []);
  // console.log(pets);

  const array = [];

  async function newPets() {
    pets.forEach((pet) => {
      if (
        pet.state === INPUT.estado &&
        pet.gender === INPUT.generoDoAnimal &&
        pet.size === INPUT.tamanhoDoAnimal &&
        pet.type === INPUT.escolhaDoAnimal &&
        pet.age === INPUT.idadeDoAnimal
      ) {
       array.push(pet); 
  
      }
    });
    console.log(array);
  }

  newPets();

  return (
    <>
      <Swiper
        spaceBetween={0.9}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {array.map((pet) => {
         {/* setInfoPet(pet); */}
          return (
            <SwiperSlide>
              <div className="card-container">
                <div>
                  <img className="card-img" src={`http://res.cloudinary.com/luizatrocino/image/upload/` + pet.image_pet01} alt="" />
                </div>
                <InfoDog active={active}>
                  <div className="info-dog-column">
                    <div className="button-hover">
                      <button onClick={handleClick} className="btn-fromtop">
                        <img src={Vetor} alt="" />
                      </button>
                    </div>
                    <div className="dog-content">
                      <div className="dog-nome-row">
                        <h1>{pet.name_pet}</h1>
                        <button className="compartilhar-btn">
                          <img src={Share} alt="" />
                        </button>
                      </div>
                      <p className="doador">
                        {" "}
                        <strong>{}</strong>
                      </p>
                      <p className="local">{pet.city + ", " + pet.state}</p>
                      <div className="row-container">
                        <div className="row-item2">{pet.type}</div>
                        <div className="row-item4">{pet.age}</div>
                        <div className="row-item3">{pet.gender}</div>
                        <div className="row-item1">{pet.size}</div>
                      </div>
                      <p className="descricao">{pet.comments}</p>
                      <div className="observacoes">
                        <p>Observações importantes</p>
                        <p></p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigate("/contato/"+pet.user_id);
                      }}
                      type="button"
                      href="/contato"
                      className="btn-contatar"
                    >
                      adotar pet <span>♥</span>
                    </button>
                  </div>
                </InfoDog>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CardContent;
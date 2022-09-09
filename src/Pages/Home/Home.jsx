import React from "react";
import TextHome from "../../Components/TextHome/TextHome";
import Cardapio from "../../Components/Cardapio/Cardapio";
import Sobre from "../../Components/Sobre/Sobre"


const Home = () => {
    return (
        <div>
            <TextHome/>
            <Cardapio/>
            <Sobre/>

        </div>
    );
};

export default Home;

import React from "react";
import config from "../aluratube-config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/cssReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { ThemeProvider } from "styled-components";




function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red"
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    

    return (
        <>
        
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                //backgroundColor: "red",
            }}>

                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>

            </div>
        </>
        

    );
}

export default HomePage

//function Menu() {
//return (
//<div>
//Menu
//</div>
//)

//}

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundoLeve1}; 
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    section {
        div {
            h2{
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
            p{
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
        }
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>

            {<div className="banner"></div>}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>

        </StyledHeader>
    )

}

function Timeline({ searchValue, ...propriedades }) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}


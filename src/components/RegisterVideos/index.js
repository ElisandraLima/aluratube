import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo () {
    return(
        <StyledRegisterVideo>

            <button className="add-video">
                +
            </button>
            <form>
                <div>

                    <button className="close-modal">
                        X
                    </button>

                    <input placeholder="Titulo do video" />
                    <input placeholder="URL" />
                    <button type="submit">
                    </button>
                </div>

            
                
            </form>

        </StyledRegisterVideo>
    )

}
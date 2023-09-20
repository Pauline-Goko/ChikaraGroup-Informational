
import "./style.css";
import TeamCard from "./props";

function Team() {
    return (
        <div className="team-section" id="team">
            <div className="dt-title-content">
                <h3 className="dt-title">
                    <span>Meet the team</span>
                </h3>

                <p className="dt-description">
                    Meet our exceptional team of engineers, dedicated to
                    providing top-notch services.
                </p>
            </div>

            <div className="dt-cards-content">
                <TeamCard
                    img="/Assets/maria.jpg"
                    name="Mariagoretti Kimani"
                    title="Software Engineer"
                />

                <TeamCard
                    img="/Assets/purity.jpeg"
                    name="Purity Wanjiku"
                    title="Software Engineer"
                />
                <TeamCard
                    img="/Assets/kenyani.jpg"
                    name="Rachel Kenyani"
                    title="UI/UX Designer"
                />
                <TeamCard
                    img="/Assets/pauline.jpg"
                    name="Pauline Goko"
                    title="Software Engineer"
                />
                <TeamCard
                    img="/Assets/rita.jpeg"
                    name="Rita Khaseyi"
                    title="Software Engineer"
                    className = "fourth-card"
                />
            </div>
        </div>
    );
}

export default Team;

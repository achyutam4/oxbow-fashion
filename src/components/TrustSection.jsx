import  "./TrustSection.css";


function TrustSection() {
    return(
        <section className="trust-section">

            <div className="trust-item">
            <img src="/src/assets/100_auth.png" height="120px" weight="120px"/>
             <p>All items are genuine and carefully verified.</p>
            </div>

            <div className="trust-item">
            <img src="/src/assets/pickup.png" height="120px" weight="120px" />
             <p>Convenient pickup option for local customers.</p>
            </div>

            <div className="trust-item">
            <img src="/src/assets/hasslefree_exp.png" height="120px" weight="120px" />
            <p>Easy browsing, secure payments, and smooth shopping.</p>
            </div>

        </section>
    );
}

export default TrustSection;